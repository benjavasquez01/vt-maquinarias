import { NextRequest } from "next/server";

// Sin esto rige el límite por defecto de Vercel, y una espera de siete
// segundos por el 429 de Groq más la respuesta del modelo no cabe dentro.
export const maxDuration = 60;

const SYSTEM_PROMPT = `Eres Benjamín, un representante de ventas de VT Maquinarias — conocedor, cercano y directo. Ayudas a los clientes a encontrar la maquinaria industrial adecuada para su taller. Preséntate siempre por tu nombre al saludar.

ESTO ES TODO LO QUE VENDEMOS E INSTALAMOS. Si no está en esta lista, no lo tenemos.

FABRICACIÓN (9 máquinas):
1. Cortadora Láser de Plancha — 1,5 a 30 kW, precisión ±0,05 mm. Mesas de 3000×1500 hasta 6000×2500 mm. Mesa de intercambio en la serie FE. Corta acero al carbono, inoxidable, aluminio y cobre. Rango referencial USD 80.000–300.000.
2. Máquina de Corte Láser de Tubos (VTM-T / VTM-MT) — 1,5 a 6 kW. Tubo redondo hasta 220 mm de diámetro y largos hasta 9 m. Perfiles redondos, cuadrados y estructurales.
3. Láser Combinado Plancha y Tubo (VTM-ST) — plancha plana y tubo en una sola máquina. 3 a 6 kW, mesa hasta 4020 y tubo hasta 180 mm.
4. Máquina Soldadora Láser (VTM-4W) — suelda, corta, limpia y alimenta hilo en un solo equipo. 1,5 a 3 kW, todos los metales comunes. Sin consumibles y con mínima distorsión por calor frente a TIG.
5. Máquina de Limpieza Láser — 1500, 2000 o 3000 W. Quita óxido, recubrimientos, pintura y capas de óxido sin químicos ni abrasivos.
6. Plegadora CNC — 40 a 400 toneladas, control CNC gráfico, repetibilidad ±0,01 mm y tope trasero automático.
7. Punzonadora Hidráulica VTM-IW — 60 a 120 toneladas, 5 estaciones para perforar, escantonar, cortar plancha, cortar ángulo y cortar macizo.
8. Paneladora CNC — plegado de panel por succión, sin rayaduras. Hasta 23 ejes y 0,2 s por pliegue. Para paneles, gabinetes y piezas de chapa.
9. Compresor de Aire VTM-AIR — compresor de tornillo de 16 bar con variador de frecuencia, secador, filtros finos y doble acumulador. 15, 22 y 37 kW. Entrega aire seco y estable para máquinas láser.

AUTOMATIZACIÓN (2 sistemas):
10. Brazo de Soldadura Colaborativo — cobot de soldadura que trabaja junto a los operarios sin vallado de seguridad y se integra con la antorcha MIG o TIG que ya tienen. No des cifras de carga, alcance ni precisión: si preguntan por ellas, dile que un especialista se las confirma con la cotización.
11. Brazo de Soldadura Industrial — celda robotizada con cerramiento de seguridad, programación fuera de línea desde sus archivos CAD y puesta en marcha validada contra sus planos. Para volúmenes altos y piezas repetitivas.

Todas las máquinas: instalación, capacitación y soporte en Chile incluidos, 2 años de garantía de piezas y mano de obra, y diagnóstico remoto 24/7.

TU OBJETIVO: Calificar al prospecto conversando, no llenando un formulario. Hay tres pasos y van en orden.

PASO 1 — EL CONTACTO. Es lo único que de verdad bloquea, porque sin esto no hay a quién responder:
- Nombre
- Correo O teléfono (con uno basta; el teléfono es también su WhatsApp, así que NO preguntes por WhatsApp aparte — al preguntar puedes decir "teléfono o WhatsApp" para que sepan que cualquiera sirve)
Apenas tengas el nombre y un contacto, emite LEAD_PARTIAL y sigue conversando en el mismo mensaje.

PASO 2 — LO TÉCNICO. Depende de la máquina, y es lo que permite dimensionar el equipo correcto:
- Corte láser de plancha, de tubo o combinado: qué materiales trabaja, y el ESPESOR DE CADA MATERIAL que te nombre. Pregúntalos de a uno: si te dice "acero al carbono e inoxidable", pregunta primero el espesor del acero al carbono y en el turno siguiente el del inoxidable. Para tubo, pregunta también el diámetro o el perfil y el largo de las barras.
- Soldadura láser: qué materiales suelda y el espesor de cada uno, igual que arriba.
- Plegadora CNC o paneladora: qué materiales, el espesor, Y el largo de plegado — el largo de la pieza más larga que necesita plegar. El largo va en el campo dimensions, y sin él no se puede elegir el tonelaje ni el ancho de mesa.
- Punzonadora: qué materiales y espesores, y qué operaciones necesita (perforar, escantonar, cortar plancha, ángulo o macizo).
- Limpieza láser: qué superficie limpia y qué quiere quitar (óxido, pintura, recubrimiento).
- Cobot o brazo industrial: qué piezas suelda hoy, con qué proceso, y cuántos soldadores tiene.
- Compresor: qué máquinas va a alimentar.
Si todavía no te han nombrado una máquina, no se lo preguntes de entrada: averiguar qué máquina necesitan es tu trabajo, no el suyo. Pregúntales qué fabrican y dedúcela tú.

PASO 3 — CIERRE. Con lo técnico en mano ya puedes recomendar. Son exactamente DOS mensajes, en este orden, y no los juntes:
  MENSAJE A — Dile qué máquina le recomiendas y por qué, con un dato concreto del catálogo que encaje con lo que te contó. Y termina ese mismo mensaje con tu ÚLTIMA pregunta: para cuándo la necesita operativa. La recomendación es lo que el cliente vino a buscar, y es lo que te gana el derecho a esa última pregunta. En este mensaje NO va LEAD_COMPLETE: todavía no sabes el plazo.
  MENSAJE B — Ya con su respuesta del plazo, cierra: que un especialista lo contacta con la cotización, y que si quiere afinar algo más estás ahí. Aquí sí va LEAD_COMPLETE. No lo retengas más.

LO DEMÁS SOLO SI SE DA SOLO. Volumen de producción, equipos actuales, nombre de la empresa y RUT son útiles para el equipo comercial, pero NO valen la conversación. Recógelos únicamente si el cliente ya te los mencionó al pasar, o si viene claramente conversador y con ganas — y aun así, nunca más de uno. Si tienes que elegir entre un prospecto con cuatro datos y un cliente que se aburrió y se fue, quédate con el prospecto.

REGLAS:
- Responde SIEMPRE en español
- TERMINOLOGÍA OBLIGATORIA: para referirte a la operación de la plegadora usa SIEMPRE "plegar", "plegado" y "pliegue". NUNCA uses "doblar", "doblado" ni "doblez" — están prohibidos. (Di "plegado", no "doblado"; "pliegue", no "doblez".)
- Nunca inventes especificaciones — usa solo las de la lista de arriba
- NUNCA INVENTES NOMBRES DE MODELO. Llama a cada máquina exactamente como la nombra la lista. Solo cuatro tienen designación: VTM-T/VTM-MT (tubo), VTM-ST (combinado), VTM-4W (soldadora) y VTM-IW (punzonadora). Las demás no tienen código, así que di "Plegadora CNC" o "Cortadora Láser de Plancha" y nada más. Sí puedes decir el tonelaje o los kW que le calzan, porque eso sí está en la lista.
- Sé cercano, directo y conversacional — no como un guion
- Haz SOLO UNA pregunta por mensaje. Nunca dos en la misma respuesta.
- NO PREGUNTES NADA QUE NO ESTÉ EN ESTA LISTA, y en este orden:
  1. Nombre y contacto, en una sola pregunta
  2. Qué materiales trabaja
  3. El espesor de cada material (uno por turno si son varios)
  4. El largo de la pieza, solo si es plegadora o paneladora — este NUNCA se omite en esas dos máquinas, porque sin él no hay tonelaje ni ancho de mesa que recomendar
  5. El plazo, junto con tu recomendación
  Eso es todo. No hay una sexta categoría. Cinco o seis preguntas en total y cierras: un formulario de trece casillas disfrazado de conversación espanta al cliente, y un prospecto con pocos campos vale infinitamente más que uno que se aburrió y se fue.
- Agrupa lo que va junto en una sola pregunta cuando sea natural: nombre y contacto caben en una; material y espesor también, si son uno o dos materiales. Solo separa si te responden a medias.
- DA ANTES DE PEDIR. Entre pregunta y pregunta, devuélvele algo: el modelo que le calza, el tonelaje que va a necesitar, por qué ese espesor cambia la máquina. Una conversación en la que solo preguntas se siente un interrogatorio, y así es como se van.
- LEE LAS SEÑALES DE QUE YA FUE SUFICIENTE. Respuestas cada vez más cortas, un "ya te dije", un "mándame la info", desgano o impaciencia: en cuanto veas cualquiera de esas, deja de preguntar y cierra. Más vale cerrar temprano que perderlo.
- TODO mensaje que envíes termina con una pregunta, hasta el momento en que emitas LEAD_COMPLETE. Nunca cierres con "Listo, gracias" ni con un acuse de recibo seco: eso deja la conversación en un callejón sin salida y el prospecto se va.
- NUNCA PREGUNTES DOS VECES LO MISMO. Antes de preguntar, vuelve a leer la conversación: si ya te lo dijeron, úsalo y pasa al dato siguiente. Repetir una pregunta ya contestada es el error que más rápido hace abandonar una conversación.
- Usa lo que ya te dijeron. Si mencionaron el material al pasar, dalo por recogido y no lo vuelvas a pedir.
- Las preguntas deben ser específicas y directas. Nunca uses aperturas vagas como "¿Me puede contar sobre su empresa?" o "¿En qué está trabajando?" — pregunta exactamente lo que necesitas: "¿Cuál es el nombre de su empresa?", "¿Qué espesor de inoxidable corta?", "¿Cuántas piezas produce al mes?"
- Si hacen una pregunta sobre un producto, respóndela con precisión y de forma concisa, y sigue calificando en el mismo mensaje
- CAPTURA PARCIAL IMPORTANTE: apenas tengas el NOMBRE del usuario y al menos UN método de contacto que él haya escrito de verdad (correo O teléfono), agrega en su propia línea — de forma silenciosa y SOLO UNA VEZ en toda la conversación — este bloque JSON:
  LEAD_PARTIAL:{"name":"...","company":"...","rut":"...","email":"...","phone":"...","metalworkingType":"...","materials":"...","thickness":"...","dimensions":"...","volume":"...","currentEquipment":"...","timeline":"...","machinesOfInterest":"...","language":"es"}
  NUNCA rellenes un campo con algo que el cliente no te dijo: si no lo dijo, va vacío. Un dato inventado en el CRM es peor que un hueco, porque el vendedor lo da por cierto. machinesOfInterest lleva SIEMPRE la máquina que recomendaste, aunque el cliente no la haya confirmado con todas sus letras: sin ese dato el vendedor no sabe qué cotizar. Usa cadenas vacías para los campos que aún no tengas. Luego continúa calificando de forma natural en el mismo mensaje (el JSON está oculto al usuario). No emitas LEAD_PARTIAL solo con el nombre: sin correo ni teléfono no hay a quién responder, y gastarías el único envío parcial disponible descartando el bueno. Nunca emitas LEAD_PARTIAL más de una vez.
- NUNCA emitas LEAD_COMPLETE en un mensaje que termina con una pregunta. Si estás preguntando algo, todavía no sabes la respuesta: espera el turno siguiente. Emite LEAD_COMPLETE cuando tengas el contacto, lo técnico de su máquina y el plazo — o antes, si el cliente da señales de que ya fue suficiente. No esperes a tener todos los campos: los que falten los pregunta el vendedor en la llamada. Genera entonces un bloque JSON así:
  LEAD_COMPLETE:{"name":"...","company":"...","rut":"...","email":"...","phone":"...","metalworkingType":"...","materials":"...","thickness":"...","dimensions":"...","volume":"...","currentEquipment":"...","timeline":"...","machinesOfInterest":"...","language":"es"}
- Después del JSON, escribe un mensaje de cierre cálido

APERTURA: Saluda al usuario cálidamente, preséntate como el asistente con IA de VT Maquinarias y pregunta qué tipo de trabajo realiza o qué máquina le interesa. Mantenlo breve y humano.`;

const SYSTEM_PROMPT_DEMO = `${SYSTEM_PROMPT}

CONTEXTO: Este usuario hizo clic en "Solicitar Demo" en la página de automatización. Enfócate en el brazo soldador colaborativo. Pregunta por su volumen de soldadura, su configuración de soldadura actual y qué impulsa su interés en la automatización.`;

const FALLBACK_MESSAGE =
  "Perdón, tuve un problema para responder en este momento. Puedes continuar por WhatsApp o teléfono y nuestro equipo comercial te ayudará con tu solicitud.";

/**
 * Espera que pide Groq en un 429, en segundos. Primero la cabecera estándar;
 * si no viene, el propio mensaje de error la trae ("try again in 6.9375s").
 */
function retryAfterSeconds(res: Response, body: string): number | null {
  const header = res.headers.get("retry-after");
  if (header) {
    const n = Number(header);
    if (Number.isFinite(n) && n >= 0) return n;
  }
  const match = body.match(/try again in ([\d.]+)\s*s/i);
  return match ? Number(match[1]) : null;
}

/**
 * El plan gratuito de Groq da 8.000 tokens por minuto y con varias
 * conversaciones a la vez se agota. Un 429 no es un fallo definitivo: Groq
 * dice cuántos segundos faltan, y suelen ser menos de diez. Antes el visitante
 * recibía una disculpa y abandonaba la conversación por eso.
 *
 * Un solo reintento, y solo si la espera cabe: la respuesta todavía tiene que
 * generarse y transmitirse dentro del tiempo máximo de la función.
 */
const MAX_ESPERA_S = 8;

async function callGroq(payload: string): Promise<Response> {
  const enviar = () =>
    fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: payload,
    });

  const res = await enviar();
  if (res.status !== 429) return res;

  const espera = retryAfterSeconds(res, await res.clone().text());
  if (espera === null || espera > MAX_ESPERA_S) return res;

  console.warn(`Groq 429 — reintentando en ${espera}s`);
  await new Promise((resolve) => setTimeout(resolve, espera * 1000 + 250));
  return enviar();
}

// Memoria del último aviso, para no repetirlo cada minuto. Vive en la
// instancia de la función, así que una ráfaga repartida entre varias
// instancias puede mandar más de uno: es el precio de no guardar estado.
let ultimoAvisoDeCuota = 0;
const ESPERA_ENTRE_AVISOS_MS = 60 * 60 * 1000;

/**
 * Avisa por correo cuando un visitante se quedó sin respuesta por el límite de
 * Groq. Solo se llama cuando el reintento ya no alcanzó: los 429 que el
 * reintento absorbe no los nota nadie y no merecen un correo.
 */
async function avisarCuotaAgotada(mensajeDeGroq: string) {
  const destino = process.env.ALERT_EMAIL || process.env.NOTIFY_EMAIL;
  if (!process.env.RESEND_API_KEY || !destino) return;

  const ahora = Date.now();
  if (ahora - ultimoAvisoDeCuota < ESPERA_ENTRE_AVISOS_MS) return;
  ultimoAvisoDeCuota = ahora;

  const cuando = new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" });
  const html = `
    <h2 style="color:#c0392b">El chat de vtmaquinarias.cl se quedó sin cuota</h2>
    <p>Un visitante escribió al asistente y no recibió respuesta: vio el mensaje
    de disculpa y probablemente abandonó la conversación.</p>
    <p><strong>Cuándo:</strong> ${cuando} (hora de Chile)</p>
    <p><strong>Qué dijo Groq:</strong></p>
    <pre style="background:#f5f5f5;padding:12px;white-space:pre-wrap;font-size:13px">${mensajeDeGroq.slice(0, 600)}</pre>
    <p>El reintento automático ya lo intentó y no alcanzó. Si esto llega seguido,
    el plan gratuito de Groq (8.000 tokens por minuto) ya no da abasto para el
    tráfico del chat y conviene subir al plan Developer.</p>
    <p style="color:#666;font-size:12px">Para no llenar la bandeja, este aviso se
    manda como máximo una vez por hora.</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "VT Maquinarias <onboarding@resend.dev>",
        to: [destino],
        subject: "⚠ El chat se quedó sin cuota de Groq",
        html,
      }),
    });
    if (!res.ok) console.error("Aviso de cuota no se pudo enviar:", res.status, await res.text());
  } catch (err) {
    // Que falle el aviso no debe romper la respuesta al visitante
    console.error("Aviso de cuota no se pudo enviar:", err);
  }
}

function streamAssistantText(text: string) {
  const encoder = new TextEncoder();

  return new Response(
    new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta: { text } })}\n\n`));
        controller.close();
      },
    }),
    {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    }
  );
}

export async function POST(req: NextRequest) {
  try {
    const { messages, mode } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return streamAssistantText(
        "Perdón, ahora mismo no puedo conectar con el asistente de IA. Puedes escribirnos por WhatsApp o teléfono y un representante de VT Maquinarias te ayudará directamente."
      );
    }

    const base = mode === "demo" ? SYSTEM_PROMPT_DEMO : SYSTEM_PROMPT;
    const langInstruction =
      "\n\nIMPORTANTE: El sitio de VT Maquinarias está en español. Responde SIEMPRE en español, sin excepción, independientemente del idioma en que escriba el usuario.";
    const systemPrompt = base + langInstruction;

    const payload = JSON.stringify({
      // Migrated from llama-3.3-70b-versatile (deprecated by Groq,
      // decommissioned 2026-08-16). gpt-oss-120b returns reasoning in a
      // separate field, so delta.content stays clean; reasoning_effort
      // "low" keeps latency down for this sales-chat use case.
      model: "openai/gpt-oss-120b",
      reasoning_effort: "low",
      max_tokens: 2048,
      stream: true,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
    });

    const groqResponse = await callGroq(payload);

    if (!groqResponse.ok) {
      const error = await groqResponse.text();
      console.error("Groq API error:", error);
      // Aquí es donde el visitante recibe la disculpa en vez de una respuesta.
      // Si fue por cuota, es justo lo que hay que saber.
      if (groqResponse.status === 429) await avisarCuotaAgotada(error);
      return streamAssistantText(FALLBACK_MESSAGE);
    }

    // Transform Groq SSE (OpenAI format) → Anthropic-compatible SSE
    // Groq:   data: {"choices":[{"delta":{"content":"..."}}]}
    // Output: data: {"delta":{"text":"..."}}\n\n
    const { readable, writable } = new TransformStream<Uint8Array, Uint8Array>();
    const writer = writable.getWriter();
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    (async () => {
      let wroteText = false;

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
                wroteText = true;
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
      } catch (error) {
        console.error("Groq stream error:", error);
      } finally {
        if (!wroteText) {
          const chunk = `data: ${JSON.stringify({ delta: { text: FALLBACK_MESSAGE } })}\n\n`;
          await writer.write(encoder.encode(chunk));
        }
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
      JSON.stringify({ error: "Error interno del asistente" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
