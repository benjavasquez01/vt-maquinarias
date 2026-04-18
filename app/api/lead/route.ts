import { NextRequest } from "next/server";

interface LeadData {
  name: string;
  company: string;
  email: string;
  phone: string;
  whatsapp?: string;
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
}

async function createHubSpotContact(lead: LeadData) {
  if (!process.env.HUBSPOT_API_KEY) return null;

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
    vtm_whatsapp: lead.whatsapp ?? "",
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

async function sendWhatsAppNotification(lead: LeadData) {
  if (!process.env.WHATSAPP_NOTIFY_NUMBER || !process.env.TWILIO_ACCOUNT_SID) return;

  const message = `🔔 New VTM lead from vtmtechsolutions.com:\n\n👤 ${lead.name} — ${lead.company}\n📧 ${lead.email}\n📞 ${lead.phone}\n🔧 Interested in: ${lead.machinesOfInterest}\n📦 Material: ${lead.materials}\n⏱ Timeline: ${lead.timeline}`;

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
