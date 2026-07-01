export type GastronomicoContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string; cta1: string; cta2: string };
  grid: { sectionLabel: string; headline: string };
  machines: { name: string; href: string; spec: string; tag: string; imageId: string }[];
  advantages: { sectionLabel?: string; items: { title: string; body: string }[] };
  cta: { sectionLabel: string; headline: string; body: string; cta: string };
};

const es: GastronomicoContent = {
  hero: {
    sectionLabel: "Soluciones por Industria",
    headline: "Equipo Gastronómico",
    subheadline: "Mesones, campanas, cocinas y equipamiento en acero inoxidable. Corte láser limpio, plegado preciso y soldadura sin deformación para fabricantes de equipo gastronómico.",
    cta1: "Solicitar Cotización",
    cta2: "Hablar con un Especialista",
  },
  grid: { sectionLabel: "La Línea Completa", headline: "Equipos para fabricar en acero inoxidable" },
  machines: [
    { name: "Cortadora Láser de Plancha", href: "/fabrication/fiber-laser-cutting-machine", spec: "1.5–6 kW · inoxidable fino", tag: "Corte", imageId: "/images/fiber-laser-hero.webp" },
    { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", spec: "40–135 ton · ±0.01mm", tag: "Plegado", imageId: "/images/cnc-press-brake-hero.webp" },
    { name: "Máquina Soldadora Láser", href: "/fabrication/4-in-1-laser-machine", spec: "1.5–3 kW · soldadura limpia", tag: "Soldadura", imageId: "/images/4in1-laser-hero-2.webp" },
    { name: "Máquina de Limpieza Láser", href: "/fabrication/laser-cleaning-machine", spec: "100–3000W · sin químicos", tag: "Limpieza", imageId: "/images/laser-cleaning-hero.webp" },
  ],
  advantages: {
    items: [
      { title: "Acabado de exhibición en inoxidable", body: "Corte láser sin rebabas ni marcas y plegado limpio que conservan el acabado del acero inoxidable. Menos pulido, piezas listas para ensamblar a la vista del cliente." },
      { title: "Soldadura sin deformación", body: "La soldadura láser aporta mínima distorsión y cordones finos sobre láminas delgadas — uniones higiénicas y prolijas, fundamentales para superficies en contacto con alimentos." },
      { title: "Series cortas y a medida", body: "Cambie de un modelo a otro en minutos. Fabrique lotes pequeños, prototipos y piezas a medida con la misma precisión que la producción en serie." },
    ],
  },
  cta: {
    sectionLabel: "Comenzar",
    headline: "¿Fabrica equipamiento gastronómico en inoxidable?",
    body: "Cuéntenos qué corta, plega y suelda — elaboraremos una recomendación completa de equipos con precios y plazos de entrega.",
    cta: "Solicitar Cotización",
  },
};

export const content: Record<string, GastronomicoContent> = { es };
