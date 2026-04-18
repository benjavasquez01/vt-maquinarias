import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "VTM Tech Solutions privacy policy — how we collect, use, and protect your information.",
};

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "Contact information you provide: name, company name, email address, phone number, and optional WhatsApp number when you submit a quote request, contact form, or spec sheet download.",
      "Machine interest data: the equipment categories and specific machines you express interest in, including configuration preferences and production volume information shared during quote conversations.",
      "Usage data: pages visited, time spent, referral source, browser type, and device type, collected automatically via Google Analytics 4 and Microsoft Clarity.",
      "Chat and AI conversation transcripts: conversations with our AI Sales Agent are stored to improve response quality and enable our sales team to follow up accurately.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To respond to your quote requests and inquiries with accurate pricing, lead times, and equipment recommendations.",
      "To send follow-up email sequences related to the equipment you expressed interest in. You can unsubscribe from these at any time using the link in any email.",
      "To notify our sales team via WhatsApp when a new lead is submitted, so they can follow up promptly.",
      "To improve our website experience by analyzing how visitors navigate and interact with our content.",
      "To send our newsletter if you have subscribed. This is separate from quote-related emails and you may unsubscribe independently.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "HubSpot CRM: Your contact information and lead data is stored in HubSpot for sales team management. HubSpot's privacy practices are governed by HubSpot's own privacy policy.",
      "Google Analytics 4: We use GA4 for website analytics. Data is collected anonymously and does not identify individual visitors. You can opt out using the Google Analytics opt-out browser add-on.",
      "Microsoft Clarity: We use Clarity for heatmap and session recording analysis. Recordings do not capture passwords or payment information.",
      "Crisp Chat: Our live chat widget is powered by Crisp. Chat conversations are stored in Crisp's system.",
      "Claude (Anthropic): Our AI Sales Agent uses Anthropic's Claude API to process and respond to your messages. Conversation data is subject to Anthropic's usage policies.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "Contact and lead data in HubSpot is retained for 3 years from last activity, after which it is archived or deleted.",
      "Website analytics data (GA4) is retained for 14 months per Google's default retention settings.",
      "Email marketing unsubscribes are honored immediately and permanently.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request a copy of the personal data we hold about you by emailing us at the address below.",
      "You may request deletion of your personal data at any time. We will honor deletion requests within 30 days, except where data retention is required by law.",
      "You may opt out of email marketing at any time using the unsubscribe link in any email or by contacting us directly.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy-related questions or data requests, contact us at: privacy@vtmtechsolutions.com",
      "VTM Tech Solutions — United States operations.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-md mx-auto px-6 py-32">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-vtm-gray-mid mb-12">Last updated: April 1, 2026</p>

        <p className="text-vtm-gray-mid leading-relaxed mb-12">
          VTM Tech Solutions (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is committed to protecting your privacy. This policy explains what information we collect, how we use it, and what rights you have with respect to your data.
        </p>

        <div className="space-y-12">
          {SECTIONS.map(({ title, body }) => (
            <section key={title}>
              <h2 className="font-headline text-2xl font-bold text-vtm-dark mb-4">{title}</h2>
              <ul className="space-y-3">
                {body.map((item, i) => (
                  <li key={i} className="flex gap-3 text-vtm-gray-mid leading-relaxed">
                    <span className="text-vtm-red mt-1 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
