import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text, language } = await req.json();

    if (!process.env.ELEVENLABS_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Voice API not configured" }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }

    // Choose voice by language
    // English: professional, neutral US voice
    // Spanish: professional, neutral Latin American voice
    const voiceId =
      language === "es"
        ? process.env.ELEVENLABS_VOICE_ES ?? "pNInz6obpgDQGcFmaJgB"
        : process.env.ELEVENLABS_VOICE_EN ?? "21m00Tcm4TlvDq8ikWAM";

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": process.env.ELEVENLABS_API_KEY,
        },
        body: JSON.stringify({
          text: text.slice(0, 500), // Cap at 500 chars to avoid long audio
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
            style: 0.0,
            use_speaker_boost: true,
          },
        }),
      }
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Voice synthesis failed" }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Speak route error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
