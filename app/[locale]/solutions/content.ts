export type SolutionsPageContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string };
  solutions: { title: string; href: string; description: string; imageId: string }[];
  explore: string;
  cta: { sectionLabel: string; headline: string; body: string; cta1: string; cta2: string };
};

const es: SolutionsPageContent = {
  hero: {
    sectionLabel: "Por Industria",
    headline: "Soluciones por Industria",
    subheadline: "Las mismas máquinas. Configuradas y aplicadas de forma diferente según los requisitos específicos de cada industria.",
  },
  solutions: [
    { title: "Maestranzas", href: "/solutions/metal-fabrication", description: "Corte láser de fibra, plegado CNC, cizallas, soldadura y limpieza — la línea completa para maestranzas y talleres metalmecánicos.", imageId: "/images/solution-metal-fabrication.webp" },
    { title: "Minería", href: "/solutions/mineria", description: "Estructuras, piezas de desgaste y componentes en plancha de alta resistencia para la gran y mediana minería.", imageId: "/images/solution-mineria.webp" },
    { title: "Equipo Gastronómico", href: "/solutions/equipo-gastronomico", description: "Mesones, campanas, cocinas y equipamiento en acero inoxidable con corte láser limpio y plegado preciso.", imageId: "/images/solution-equipo-gastronomico.webp" },
    { title: "Construcción y Estructuras", href: "/solutions/hvac-construction", description: "Estructuras metálicas, perfilería, ductos y componentes para la construcción con procesamiento de plancha de alto rendimiento.", imageId: "/images/solution-hvac-construction.webp" },
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

export const content: Record<string, SolutionsPageContent> = { es };
