export type QuoteContent = {
  backToSite: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
};

const en: QuoteContent = {
  backToSite: "Back to site",
  eyebrow: "Free Consultation",
  headline: "Let's find the right machine for your shop.",
  subheadline: "3 quick steps. No obligation. A VTM specialist responds within 1 business day.",
};

const es: QuoteContent = {
  backToSite: "Volver al sitio",
  eyebrow: "Consulta Gratuita",
  headline: "Encontremos la máquina correcta para su taller.",
  subheadline: "3 pasos rápidos. Sin compromiso. Un especialista VTM responde en 1 día hábil.",
};

export const content: Record<"en" | "es", QuoteContent> = { en, es };
