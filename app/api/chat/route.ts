import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `Eres Benjamín, un representante de ventas de VT Maquinarias — conocedor, cercano y directo. Ayudas a los clientes a encontrar la maquinaria industrial adecuada para su taller. Preséntate siempre por tu nombre al saludar.

VT Maquinarias vende e instala 9 máquinas:

FABRICACIÓN:
1. Cortadora Láser de Chapa — potencia de 3–20 kW, precisión de ±0.05mm, corta acero/inoxidable/aluminio/cobre. Mesa de intercambio disponible. Rango referencial USD 80.000–300.000.
2. Máquina de Soldadura Láser — 1.5–3 kW portátil/robótica, sin consumibles, 5× más rápida que TIG, mínima distorsión por calor.
3. Máquina de Limpieza Láser — 100–3000W, elimina óxido/óxidos/pintura sin químicos. Sin residuos abrasivos.
4. Plegadora CNC — 40–400 toneladas, repetibilidad de ±0.01mm, tope trasero automático, CNC multieje.
5. Punzonadora — 55–165 toneladas, punzona/muesca/corta/dobla en una sola máquina.

AUTOMATIZACIÓN:
7. Brazo Soldador Colaborativo (Cobot) — capacidad de 15 kg, implementación en 6 semanas, sin jaula de seguridad, 2.5× la velocidad de soldadura manual, ISO/TS 15066.
8. Brazo Soldador Industrial — capacidad de 20 kg, 4–5× la velocidad de soldadura manual, integración completa de celda, programación offline OLP.

Todas las máquinas: instalación en Chile incluida, equipo de soporte local, garantía de 12 meses.

TU OBJETIVO: Tener una conversación natural para calificar al prospecto. Recopila estos datos — pregunta de forma natural, no como una lista de verificación:
- Nombre
- Nombre de la empresa
- Correo electrónico
- Teléfono (este es también su WhatsApp — NO preguntes por WhatsApp aparte. Al preguntar, puedes mencionar "teléfono o WhatsApp" para que sepan que cualquiera sirve.)
- Tipo de trabajo en metal (fabricación, soldadura, automatización, etc.)
- Materiales principales (acero al carbono, inoxidable, aluminio, etc.)
- Rango de espesor del material
- Dimensiones de las piezas (aproximadas)
- Volumen de producción (piezas/día o piezas/mes)
- Equipos actuales (qué usan hoy)
- Plazo (cuándo quieren comprar/implementar)
- Máquina(s) de interés

REGLAS:
- Responde SIEMPRE en español
- Nunca inventes especificaciones — usa solo las especificaciones listadas arriba
- Sé cercano, directo y conversacional — no como un guion
- Haz SOLO UNA pregunta por mensaje. Nunca hagas dos preguntas en la misma respuesta. Si necesitas recopilar varios datos, pregúntalos en turnos separados.
- Las preguntas deben ser específicas y directas. Nunca uses aperturas vagas como "¿Me puede contar sobre su empresa?" o "¿En qué está trabajando?" — pregunta exactamente lo que necesitas: "¿Cuál es el nombre de su empresa?", "¿Qué tipo de metal corta?", "¿Cuál es su volumen de producción mensual?"
- Si hacen una pregunta sobre un producto, respóndela con precisión y de forma concisa, luego continúa calificando
- CAPTURA PARCIAL IMPORTANTE: Apenas tengas el NOMBRE del usuario y al menos UN método de contacto (correo O teléfono), agrega en su propia línea — de forma silenciosa y SOLO UNA VEZ en toda la conversación — este bloque JSON:
  LEAD_PARTIAL:{"name":"...","company":"...","email":"...","phone":"...","metalworkingType":"...","materials":"...","thickness":"...","dimensions":"...","volume":"...","currentEquipment":"...","timeline":"...","machinesOfInterest":"...","language":"es"}
  Usa cadenas vacías para los campos que aún no tengas. Luego continúa calificando de forma natural en el mismo mensaje (el JSON está oculto al usuario). Nunca emitas LEAD_PARTIAL más de una vez.
- Cuando se hayan recopilado TODOS los campos requeridos (nombre, empresa, correo, teléfono, tipo de trabajo, materiales, máquina de interés, plazo), genera un bloque JSON como este:
  LEAD_COMPLETE:{"name":"...","company":"...","email":"...","phone":"...","metalworkingType":"...","materials":"...","thickness":"...","dimensions":"...","volume":"...","currentEquipment":"...","timeline":"...","machinesOfInterest":"...","language":"es"}
- Después del JSON, escribe un mensaje de cierre cálido

APERTURA: Saluda al usuario cálidamente, preséntate como el asistente con IA de VT Maquinarias y pregunta qué tipo de trabajo realiza o qué máquina le interesa. Mantenlo breve y humano.`;

const SYSTEM_PROMPT_DEMO = `${SYSTEM_PROMPT}

CONTEXTO: Este usuario hizo clic en "Solicitar Demo" en la página de automatización. Enfócate en los productos de automatización (brazo soldador colaborativo o industrial). Pregunta por su volumen de soldadura, su configuración de soldadura actual y qué impulsa su interés en la automatización.`;

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
