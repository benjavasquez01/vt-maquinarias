export type SolutionsPageContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string };
  solutions: { title: string; href: string; description: string; imageId: string }[];
  explore: string;
  cta: { sectionLabel: string; headline: string; body: string; cta1: string; cta2: string };
};

const en: SolutionsPageContent = {
  hero: {
    sectionLabel: "By Industry",
    headline: "Industry Solutions",
    subheadline: "The same machines. Configured and applied differently for each industry's specific requirements.",
  },
  solutions: [
    { title: "Metal Fabrication", href: "/solutions/metal-fabrication", description: "Fiber laser cutting, press brakes, shearing, welding, and cleaning — the complete fabrication line.", imageId: "/images/solution-metal-fabrication.webp" },
    { title: "Automotive", href: "/solutions/automotive", description: "Precision cutting and welding for Tier 1–3 automotive component manufacturers.", imageId: "/images/solution-automotive.webp" },
    { title: "Aerospace", href: "/solutions/aerospace", description: "Titanium, aluminum alloy, and stainless processing at aerospace tolerances.", imageId: "/images/solution-aerospace.webp" },
    { title: "HVAC & Construction", href: "/solutions/hvac-construction", description: "High-throughput sheet metal processing for duct fabricators and construction component shops.", imageId: "/images/solution-hvac-construction.webp" },
  ],
  explore: "Explore",
  cta: {
    sectionLabel: "Not Sure Where to Start?",
    headline: "Tell us about your shop",
    body: "Our AI specialist will ask a few questions and recommend the right machines for your production, materials, and budget.",
    cta1: "Get a Recommendation",
    cta2: "Talk to a Specialist",
  },
};

const es: SolutionsPageContent = {
  hero: {
    sectionLabel: "Por Industria",
    headline: "Soluciones por Industria",
    subheadline: "Las mismas máquinas. Configuradas y aplicadas de forma diferente según los requisitos específicos de cada industria.",
  },
  solutions: [
    { title: "Fabricación Metálica", href: "/solutions/metal-fabrication", description: "Corte láser de fibra, prensas plegadoras, cizallas, soldadura y limpieza — la línea completa de fabricación.", imageId: "/images/solution-metal-fabrication.webp" },
    { title: "Automotriz", href: "/solutions/automotive", description: "Corte y soldadura de precisión para fabricantes de componentes automotrices Tier 1–3.", imageId: "/images/solution-automotive.webp" },
    { title: "Aeroespacial", href: "/solutions/aerospace", description: "Procesamiento de titanio, aleaciones de aluminio e inoxidable con tolerancias aeroespaciales.", imageId: "/images/solution-aerospace.webp" },
    { title: "HVAC y Construcción", href: "/solutions/hvac-construction", description: "Procesamiento de chapa metálica de alto rendimiento para fabricantes de ductos y talleres de componentes para construcción.", imageId: "/images/solution-hvac-construction.webp" },
  ],
  explore: "Explorar",
  cta: {
    sectionLabel: "¿No Sabe Por Dónde Empezar?",
    headline: "Cuéntenos sobre su taller",
    body: "Nuestro especialista de IA le hará algunas preguntas y recomendará las máquinas correctas para su producción, materiales y presupuesto.",
    cta1: "Obtener una Recomendación",
    cta2: "Hablar con un Especialista",
  },
};

export const content: Record<"en" | "es", SolutionsPageContent> = { en, es };
