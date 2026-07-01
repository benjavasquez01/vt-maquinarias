export type MineriaContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string; cta1: string; cta2: string };
  grid: { sectionLabel: string; headline: string };
  machines: { name: string; href: string; spec: string; tag: string; imageId: string }[];
  advantages: { sectionLabel?: string; items: { title: string; body: string }[] };
  cta: { sectionLabel: string; headline: string; body: string; cta: string };
};

const es: MineriaContent = {
  hero: {
    sectionLabel: "Soluciones por Industria",
    headline: "Minería",
    subheadline: "Estructuras, piezas de desgaste y componentes en plancha de alta resistencia para la gran y mediana minería. Corte y plegado con repetibilidad industrial, soporte y repuestos en Chile.",
    cta1: "Solicitar Cotización",
    cta2: "Hablar con un Especialista",
  },
  grid: { sectionLabel: "La Línea Completa", headline: "Equipos para faenas y proveedores mineros" },
  machines: [
    { name: "Cortadora Láser de Plancha", href: "/fabrication/fiber-laser-cutting-machine", spec: "3–20 kW · placa hasta 35 mm", tag: "Corte", imageId: "/images/fiber-laser-hero.webp" },
    { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", spec: "40–400 ton · ±0.01mm", tag: "Plegado", imageId: "/images/cnc-press-brake-hero.webp" },
    { name: "Punzonadora", href: "/fabrication/ironworker", spec: "60–120 ton · 5 estaciones", tag: "Multiproceso", imageId: "/images/ironworker-hero.webp" },
    { name: "Máquina Soldadora Láser", href: "/fabrication/4-in-1-laser-machine", spec: "1.5–3 kW · sin consumibles", tag: "Soldadura", imageId: "/images/4in1-laser-hero-2.webp" },
    { name: "Máquina de Limpieza Láser", href: "/fabrication/laser-cleaning-machine", spec: "100–3000W · sin químicos", tag: "Limpieza", imageId: "/images/laser-cleaning-hero.webp" },
  ],
  advantages: {
    items: [
      { title: "Plancha de alta resistencia", body: "Corte de aceros estructurales y antiabrasivos para tolvas, revestimientos, chutes y piezas de desgaste. Bordes limpios listos para soldar, sin desbarbado manual." },
      { title: "Repuestos y soporte en Chile", body: "Inventario de repuestos críticos en Chile y servicio técnico local. Las piezas se envían el mismo día — su faena no se detiene esperando un contenedor desde el extranjero." },
      { title: "Repetibilidad de producción", body: "Geometrías exactas pieza tras pieza para fabricación seriada de componentes mineros. Menos ajuste en terreno, montaje más rápido y trazabilidad consistente." },
    ],
  },
  cta: {
    sectionLabel: "Comenzar",
    headline: "¿Fabrica o mantiene equipos para minería?",
    body: "Cuéntenos qué corta, plega y suelda — elaboraremos una recomendación completa de equipos con precios y plazos de entrega.",
    cta: "Solicitar Cotización",
  },
};

export const content: Record<string, MineriaContent> = { es };
