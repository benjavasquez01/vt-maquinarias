export type QuoteContent = {
  backToSite: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
};

const es: QuoteContent = {
  backToSite: "Volver al sitio",
  eyebrow: "Consulta Gratuita",
  headline: "Encontremos la máquina correcta para su taller.",
  subheadline: "3 pasos rápidos. Sin compromiso. Un especialista VTM responde en 1 día hábil.",
};

export const content: Record<string, QuoteContent> = { es };
