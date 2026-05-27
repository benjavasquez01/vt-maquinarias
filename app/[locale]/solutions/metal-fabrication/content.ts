export type MetalFabContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string; cta1: string; cta2: string };
  grid: { sectionLabel: string; headline: string };
  machines: { name: string; href: string; spec: string; tag: string; imageId: string }[];
  advantages: { sectionLabel?: string; items: { title: string; body: string }[] };
  cta: { sectionLabel: string; headline: string; body: string; cta: string };
};

const es: MetalFabContent = {
  hero: {
    sectionLabel: "Soluciones por Industria",
    headline: "Fabricación Metálica",
    subheadline: "De la placa en bruto a la pieza terminada — equipos de corte láser, plegado, soldadura y limpieza para talleres que trabajan con tolerancias ajustadas y alto rendimiento.",
    cta1: "Solicitar Cotización",
    cta2: "Hablar con un Especialista",
  },
  grid: { sectionLabel: "La Línea Completa", headline: "Equipos para Cada Etapa de la Fabricación" },
  machines: [
    { name: "Cortadora Láser de Chapa", href: "/fabrication/fiber-laser-cutting-machine", spec: "3–20 kW · ±0.05mm", tag: "Corte", imageId: "/images/fiber-laser-hero.webp" },
    { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", spec: "40–400 ton · ±0.01mm", tag: "Plegado", imageId: "/images/cnc-press-brake-hero.webp" },
    { name: "Máquina de Soldadura Láser", href: "/fabrication/4-in-1-laser-machine", spec: "1.5–3 kW · sin consumibles", tag: "Soldadura", imageId: "/images/4in1-laser-hero-2.webp" },
    { name: "Máquina de Limpieza Láser", href: "/fabrication/laser-cleaning-machine", spec: "100–3000W · sin químicos", tag: "Limpieza", imageId: "/images/laser-cleaning-hero.webp" },
    { name: "Punzonadora", href: "/fabrication/ironworker", spec: "55–165 ton · 4 en 1", tag: "Multiproceso", imageId: "/images/ironworker-hero.webp" },
  ],
  advantages: {
    items: [
      { title: "Un proveedor, línea completa", body: "Todo el equipamiento desde un solo punto de contacto. Sin gestionar múltiples proveedores con diferentes estructuras de soporte, inventarios de repuestos y equipos de servicio." },
      { title: "Soporte en Chile", body: "Instalación, calibración, capacitación y servicio continuo de un equipo en Chile Las piezas se envían el mismo día. El soporte está a una llamada de distancia — no en un ticket que tarda tres días en responderse." },
      { title: "Tolerancias comprobadas", body: "±0.05mm de corte, ±0.01mm de repetibilidad en plegado. No son números de marketing — son las especificaciones a las que calibramos antes de cada envío y verificamos en sitio durante la instalación." },
    ],
  },
  cta: {
    sectionLabel: "Comenzar",
    headline: "¿Listo para construir su línea de fabricación?",
    body: "Cuéntenos qué corta, plega y suelda — elaboraremos una recomendación completa de equipos con precios y plazos de entrega.",
    cta: "Solicitar Cotización",
  },
};

export const content: Record<string, MetalFabContent> = { es };
