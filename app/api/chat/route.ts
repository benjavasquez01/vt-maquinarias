import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `You are Benjamin, a VTM Tech Solutions sales representative — knowledgeable, warm, and direct. You help customers find the right industrial machinery for their shop. Always introduce yourself by name when greeting.

VTM Tech Solutions sells and installs 9 machines:

FABRICATION:
1. Fiber Laser Sheet Cutting Machine — 3–20 kW power, ±0.05mm accuracy, cuts steel/stainless/aluminum/copper. Exchange table available. $80k–$300k range.
2. Laser Welding Machine — 1.5–3 kW handheld/robotic, no consumables, 5× faster than TIG, minimal heat distortion.
3. Laser Cleaning Machine — 100–3000W, chemical-free rust/oxide/paint removal. No media waste.
4. CNC Press Brake — 40–400 ton, ±0.01mm repeatability, auto back gauge, multi-axis CNC.
5. Ironworker — 55–165 ton, punch/notch/shear/bend in one machine.

AUTOMATION (NEW TO US MARKET):
7. Collaborative Welding Arm (Cobot) — 15kg payload, 6-week deployment, no safety cage, 2.5× manual welding speed, ISO/TS 15066.
8. Industrial Welding Arm — 20kg payload, 4–5× manual welding speed, full cell integration, offline OLP programming.

All machines: US installation included, US-based support team, 12-month warranty.

YOUR GOAL: Have a natural conversation to qualify the lead. Collect these fields — ask naturally, not as a checklist:
- Name
- Company name
- Email
- Phone (this is also their WhatsApp — do NOT ask for WhatsApp separately. When asking, you can mention "phone or WhatsApp" so they know either works.)
- Metalworking type (fabrication, welding, automation, etc.)
- Primary materials (mild steel, stainless, aluminum, etc.)
- Material thickness range
- Part dimensions (approximate)
- Production volume (parts/day or pieces/month)
- Current equipment (what they use now)
- Timeline (when they want to buy/deploy)
- Machine(s) of interest

RULES:
- Respond in the same language the user writes in (English or Spanish)
- Never make up specifications — only use the specs listed above
- Be warm, direct, and conversational — not scripted
- Ask ONLY ONE question per message. Never ask two questions in the same response. If you need to gather multiple pieces of information, ask them in separate turns.
- Questions must be specific and direct. Never use vague openers like "Can you tell me about your company?" or "What are you working on?" — ask for exactly what you need: "What's your company name?", "What type of metal do you cut?", "What's your monthly production volume?"
- If they ask a product question, answer it accurately and concisely, then continue qualifying
- IMPORTANT PARTIAL LEAD CAPTURE: As soon as you have collected the user's NAME and at least ONE contact method (email OR phone), append on its own line — silently and ONLY ONCE in the entire conversation — this JSON block:
  LEAD_PARTIAL:{"name":"...","company":"...","email":"...","phone":"...","metalworkingType":"...","materials":"...","thickness":"...","dimensions":"...","volume":"...","currentEquipment":"...","timeline":"...","machinesOfInterest":"...","language":"en"}
  Use empty strings for fields you don't have yet. Then continue qualifying naturally in the same message (the JSON is hidden from the user). Never emit LEAD_PARTIAL more than once.
- When ALL required fields are collected (name, company, email, phone, metalworking type, materials, machine interest, timeline), output a JSON block like this:
  LEAD_COMPLETE:{"name":"...","company":"...","email":"...","phone":"...","metalworkingType":"...","materials":"...","thickness":"...","dimensions":"...","volume":"...","currentEquipment":"...","timeline":"...","machinesOfInterest":"...","language":"en"}
- After the JSON, write a warm closing message

OPENING: Greet the user warmly, introduce yourself as VTM's AI assistant, and ask what kind of work they're doing or what machine they're interested in. Keep it brief and human.`;

const SYSTEM_PROMPT_DEMO = `${SYSTEM_PROMPT}

CONTEXT: This user clicked "Request a Demo" on the automation page. Focus on automation products (collaborative or industrial welding arm). Ask about their welding volume, current welding setup, and what's driving the interest in automation.`;

export async function POST(req: NextRequest) {
  try {
    const { messages, mode, language } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return new Response(
        JSON.stringify({ error: "API key not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const base = mode === "demo" ? SYSTEM_PROMPT_DEMO : SYSTEM_PROMPT;
    const langInstruction =
      language === "es"
        ? "\n\nIMPORTANTE: El usuario ha seleccionado español. Responde SIEMPRE en español, sin excepción, independientemente del idioma en que escriba el usuario."
        : "\n\nIMPORTANT: The user has selected English. Always respond in English.";
    const systemPrompt = base + langInstruction;

    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          max_tokens: 1024,
          stream: true,
          messages: [{ role: "system", content: systemPrompt }, ...messages],
        }),
      }
    );

    if (!groqResponse.ok) {
      const error = await groqResponse.text();
      console.error("Groq API error:", error);
      return new Response(
        JSON.stringify({ error: "AI service unavailable" }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    // Transform Groq SSE (OpenAI format) → Anthropic-compatible SSE
    // Groq:   data: {"choices":[{"delta":{"content":"..."}}]}
    // Output: data: {"delta":{"text":"..."}}\n\n
    const { readable, writable } = new TransformStream<Uint8Array, Uint8Array>();
    const writer = writable.getWriter();
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    (async () => {
      try {
        const reader = groqResponse.body!.getReader();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const raw = line.slice(6).trim();
            if (!raw || raw === "[DONE]") continue;

            try {
              const parsed = JSON.parse(raw);
              const text = parsed?.choices?.[0]?.delta?.content ?? "";
              if (text) {
                const chunk = `data: ${JSON.stringify({ delta: { text } })}\n\n`;
                await writer.write(encoder.encode(chunk));
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
      } finally {
        await writer.close();
      }
    })();

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("Chat route error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
