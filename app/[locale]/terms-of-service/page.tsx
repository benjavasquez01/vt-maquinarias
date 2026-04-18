import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "VTM Tech Solutions terms of service governing use of our website.",
};

const SECTIONS = [
  {
    title: "Use of This Website",
    body: [
      "This website is operated by VTM Tech Solutions for the purpose of providing information about our products and services and facilitating quote and contact requests.",
      "You may use this website for lawful purposes only. You may not use this website to transmit spam, malicious content, or to attempt unauthorized access to our systems.",
      "All content on this website — including text, images, product specifications, pricing information, and downloadable documents — is the property of VTM Tech Solutions and may not be reproduced without written permission.",
    ],
  },
  {
    title: "Product Information and Accuracy",
    body: [
      "Product specifications on this website are for informational purposes. Actual product specifications, pricing, and availability are confirmed at time of formal quotation.",
      "We make reasonable efforts to keep product information accurate and up to date. However, specifications may change without notice as products are updated.",
      "Pricing information, where displayed, is indicative only. Formal quotes reflect current pricing, currency rates, and applicable taxes or duties.",
    ],
  },
  {
    title: "AI Sales Agent",
    body: [
      "Our website includes an AI-powered sales assistant built on Anthropic's Claude language model. This agent is designed to help you explore our products and submit quote requests.",
      "The AI agent provides general product information based on its training. For binding technical specifications and pricing, always refer to a formal written quote from VTM Tech Solutions.",
      "Conversations with the AI agent may be reviewed by our sales team to ensure accuracy and quality. Conversation data is handled per our Privacy Policy.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "VTM Tech Solutions provides this website and its content on an as-is basis. We make no warranties, express or implied, regarding the accuracy or completeness of information on this site.",
      "VTM Tech Solutions shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on information contained herein.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These terms are governed by the laws of the State of [State], United States, without regard to conflict of law provisions.",
      "Any disputes arising from these terms or your use of this website will be resolved in the courts of [State], United States.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "We may update these terms from time to time. The date at the top of this page indicates when these terms were last revised. Continued use of this website after a change constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about these terms: legal@vtmtechsolutions.com",
      "VTM Tech Solutions — United States operations.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-md mx-auto px-6 py-32">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-4">Terms of Service</h1>
        <p className="text-vtm-gray-mid mb-12">Last updated: April 1, 2026</p>

        <p className="text-vtm-gray-mid leading-relaxed mb-12">
          By using the VTM Tech Solutions website (vtmtechsolutions.com), you agree to these terms. If you do not agree, please do not use this website.
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
