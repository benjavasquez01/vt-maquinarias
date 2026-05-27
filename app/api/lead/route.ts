import { NextRequest } from "next/server";

interface LeadData {
  name: string;
  company: string;
  email: string;
  phone: string;
  metalworkingType: string;
  materials: string;
  thickness?: string;
  dimensions?: string;
  volume?: string;
  currentEquipment?: string;
  timeline: string;
  machinesOfInterest: string;
  language: string;
  transcript: string;
  partial?: boolean;
}

async function createHubSpotContact(lead: LeadData) {
  if (!process.env.HUBSPOT_API_KEY) return null;
  if (!lead.email) return null; // HubSpot requires email to create a contact

  const properties: Record<string, string> = {
    firstname: lead.name.split(" ")[0] ?? lead.name,
    lastname: lead.name.split(" ").slice(1).join(" ") || "",
    company: lead.company,
    email: lead.email,
    phone: lead.phone,
    hs_lead_status: "NEW",
    lead_source: "AI Agent",
    // Custom properties — create these in HubSpot first
    vtm_metalworking_type: lead.metalworkingType,
    vtm_materials: lead.materials,
    vtm_thickness: lead.thickness ?? "",
    vtm_dimensions: lead.dimensions ?? "",
    vtm_volume: lead.volume ?? "",
    vtm_current_equipment: lead.currentEquipment ?? "",
    vtm_timeline: lead.timeline,
    vtm_machines_of_interest: lead.machinesOfInterest,
    vtm_language: lead.language,
  };

  try {
    // Create or update contact
    const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
      },
      body: JSON.stringify({ properties }),
    });

    if (!res.ok) {
      // Try to find and update existing contact
      const searchRes = await fetch(
        "https://api.hubapi.com/crm/v3/objects/contacts/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
          },
          body: JSON.stringify({
            filterGroups: [
              { filters: [{ propertyName: "email", operator: "EQ", value: lead.email }] },
            ],
          }),
        }
      );
      const searchData = await searchRes.json();
      if (searchData.results?.[0]?.id) {
        await fetch(
          `https://api.hubapi.com/crm/v3/objects/contacts/${searchData.results[0].id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
            },
            body: JSON.stringify({ properties }),
          }
        );
        return searchData.results[0].id;
      }
      return null;
    }

    const data = await res.json();
    return data.id;
  } catch (err) {
    console.error("HubSpot contact creation failed:", err);
    return null;
  }
}

async function addHubSpotNote(contactId: string, transcript: string) {
  if (!process.env.HUBSPOT_API_KEY || !contactId) return;

  try {
    // Create note engagement
    const noteRes = await fetch("https://api.hubapi.com/crm/v3/objects/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
      },
      body: JSON.stringify({
        properties: {
          hs_note_body: `AI Sales Agent Conversation Transcript:\n\n${transcript}`,
          hs_timestamp: Date.now().toString(),
        },
        associations: [
          {
            to: { id: contactId },
            types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 }],
          },
        ],
      }),
    });

    if (!noteRes.ok) {
      console.error("HubSpot note creation failed:", await noteRes.text());
    }
  } catch (err) {
    console.error("HubSpot note error:", err);
  }
}

async function sendEmailNotification(lead: LeadData) {
  if (!process.env.RESEND_API_KEY || !process.env.NOTIFY_EMAIL) return;

  const prefix = lead.partial ? "[PARCIAL] " : "";
  const subject = `${prefix}Nuevo prospecto: ${lead.name || "(sin nombre)"} — ${lead.company || "(sin empresa)"}`;
  const partialBanner = lead.partial
    ? `<p style="background:#fff3cd;border:1px solid #ffc107;padding:10px;color:#856404">⚠ Prospecto parcial — la conversación puede seguir en curso o fue abandonada. Algunos campos pueden estar vacíos.</p>`
    : "";
  const html = `
    <h2 style="color:#c0392b">Nuevo prospecto de vtmaquinarias.cl</h2>
    ${partialBanner}
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:8px;font-weight:bold;width:180px">Nombre</td><td style="padding:8px">${lead.name || "—"}</td></tr>
      <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Empresa</td><td style="padding:8px">${lead.company || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Correo</td><td style="padding:8px">${lead.email ? `<a href="mailto:${lead.email}">${lead.email}</a>` : "—"}</td></tr>
      <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Teléfono / WhatsApp</td><td style="padding:8px">${lead.phone || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Máquinas de Interés</td><td style="padding:8px">${lead.machinesOfInterest || "—"}</td></tr>
      <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Materiales</td><td style="padding:8px">${lead.materials || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Espesor</td><td style="padding:8px">${lead.thickness || "—"}</td></tr>
      <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Volumen</td><td style="padding:8px">${lead.volume || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Plazo</td><td style="padding:8px">${lead.timeline || "—"}</td></tr>
      <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Equipos Actuales</td><td style="padding:8px">${lead.currentEquipment || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Idioma</td><td style="padding:8px">${lead.language === "es" ? "Español" : "Inglés"}</td></tr>
    </table>
    <h3 style="margin-top:32px">Transcripción de la Conversación</h3>
    <pre style="background:#f5f5f5;padding:16px;white-space:pre-wrap;font-size:13px">${lead.transcript}</pre>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "VT Maquinarias <leads@vtmaquinarias.cl>",
        to: [process.env.NOTIFY_EMAIL],
        subject,
        html,
      }),
    });
    if (!res.ok) console.error("Resend email failed:", await res.text());
  } catch (err) {
    console.error("Email notification error:", err);
  }
}

async function sendWhatsAppNotification(lead: LeadData) {
  if (!process.env.WHATSAPP_NOTIFY_NUMBER || !process.env.TWILIO_ACCOUNT_SID) return;

  const prefix = lead.partial ? "⚠ [PARCIAL] " : "🔔 ";
  const message = `${prefix}Nuevo prospecto de vtmaquinarias.cl:\n\n👤 ${lead.name || "(sin nombre)"} — ${lead.company || "(sin empresa)"}\n📧 ${lead.email || "—"}\n📞 ${lead.phone || "—"}\n🔧 Interesado en: ${lead.machinesOfInterest || "—"}\n📦 Material: ${lead.materials || "—"}\n⏱ Plazo: ${lead.timeline || "—"}`;

  try {
    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`
          ).toString("base64")}`,
        },
        body: new URLSearchParams({
          From: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,
          To: `whatsapp:${process.env.WHATSAPP_NOTIFY_NUMBER}`,
          Body: message,
        }),
      }
    );
    if (!res.ok) console.error("WhatsApp notification failed:", await res.text());
  } catch (err) {
    console.error("WhatsApp notification error:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const lead: LeadData = await req.json();

    // Fire all side effects concurrently
    const contactId = await createHubSpotContact(lead);

    await Promise.allSettled([
      contactId ? addHubSpotNote(contactId, lead.transcript) : Promise.resolve(),
      sendWhatsAppNotification(lead),
      sendEmailNotification(lead),
    ]);

    return new Response(JSON.stringify({ success: true, contactId }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Lead route error:", err);
    return new Response(JSON.stringify({ error: "Failed to process lead" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
