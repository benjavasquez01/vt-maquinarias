export type MetalFabContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string; cta1: string; cta2: string };
  grid: { sectionLabel: string; headline: string };
  machines: { name: string; href: string; spec: string; tag: string; imageId: string }[];
  advantages: { sectionLabel?: string; items: { title: string; body: string }[] };
  cta: { sectionLabel: string; headline: string; body: string; cta: string };
};

const en: MetalFabContent = {
  hero: {
    sectionLabel: "Industry Solutions",
    headline: "Metal Fabrication",
    subheadline: "From raw plate to finished part — laser cutting, bending, welding, and cleaning equipment built for shops that run tight tolerances and high throughput.",
    cta1: "Request a Quote",
    cta2: "Talk to a Specialist",
  },
  grid: { sectionLabel: "The Full Line", headline: "Equipment for Every Stage of Fabrication" },
  machines: [
    { name: "Fiber Laser Cutting Machine", href: "/fabrication/fiber-laser-cutting-machine", spec: "3–20 kW · ±0.05mm", tag: "Cutting", imageId: "/images/fiber-laser-hero.png" },
    { name: "CNC Press Brake", href: "/fabrication/cnc-press-brake", spec: "40–400 ton · ±0.01mm", tag: "Bending", imageId: "/images/cnc-press-brake-hero.png" },
    { name: "Laser Welding Machine", href: "/fabrication/4-in-1-laser-machine", spec: "1.5–3 kW · no consumables", tag: "Welding", imageId: "/images/4in1-laser-hero-2.png" },
    { name: "Laser Cleaning Machine", href: "/fabrication/laser-cleaning-machine", spec: "100–3000W · chemical-free", tag: "Cleaning", imageId: "/images/laser-cleaning-hero.png" },
    { name: "Ironworker", href: "/fabrication/ironworker", spec: "55–165 ton · 4-in-1", tag: "Multi-Process", imageId: "/images/ironworker-hero.png" },
  ],
  advantages: {
    items: [
      { title: "One supplier, full line", body: "Every piece of equipment from one point of contact. No juggling multiple vendors with different support structures, parts inventories, and service teams." },
      { title: "US-based support", body: "Installation, calibration, training, and ongoing service from a US team. Parts ship same day. Support is a phone call away — not a support ticket that takes three days to answer." },
      { title: "Proven tolerances", body: "±0.05mm cutting, ±0.01mm bending repeatability. These aren't marketing numbers — they're the specs we calibrate to before every machine ships and verify on-site during installation." },
    ],
  },
  cta: {
    sectionLabel: "Get Started",
    headline: "Ready to build out your fabrication line?",
    body: "Tell us what you cut, bend, and weld — we'll put together a complete equipment recommendation with pricing and lead times.",
    cta: "Request a Quote",
  },
};

const es: MetalFabContent = {
  hero: {
    sectionLabel: "Soluciones por Industria",
    headline: "Fabricación Metálica",
    subheadline: "De la placa en bruto a la pieza terminada — equipos de corte láser, doblado, soldadura y limpieza para talleres que trabajan con tolerancias ajustadas y alto rendimiento.",
    cta1: "Solicitar Cotización",
    cta2: "Hablar con un Especialista",
  },
  grid: { sectionLabel: "La Línea Completa", headline: "Equipos para Cada Etapa de la Fabricación" },
  machines: [
    { name: "Máquina de Corte Láser de Fibra", href: "/fabrication/fiber-laser-cutting-machine", spec: "3–20 kW · ±0.05mm", tag: "Corte", imageId: "/images/fiber-laser-hero.png" },
    { name: "Prensa Dobladora CNC", href: "/fabrication/cnc-press-brake", spec: "40–400 ton · ±0.01mm", tag: "Doblado", imageId: "/images/cnc-press-brake-hero.png" },
    { name: "Máquina de Soldadura Láser", href: "/fabrication/4-in-1-laser-machine", spec: "1.5–3 kW · sin consumibles", tag: "Soldadura", imageId: "/images/4in1-laser-hero-2.png" },
    { name: "Máquina de Limpieza Láser", href: "/fabrication/laser-cleaning-machine", spec: "100–3000W · sin químicos", tag: "Limpieza", imageId: "/images/laser-cleaning-hero.png" },
    { name: "Punzonadora", href: "/fabrication/ironworker", spec: "55–165 ton · 4 en 1", tag: "Multiproceso", imageId: "/images/ironworker-hero.png" },
  ],
  advantages: {
    items: [
      { title: "Un proveedor, línea completa", body: "Todo el equipamiento desde un solo punto de contacto. Sin gestionar múltiples proveedores con diferentes estructuras de soporte, inventarios de repuestos y equipos de servicio." },
      { title: "Soporte en EE.UU.", body: "Instalación, calibración, capacitación y servicio continuo de un equipo en EE.UU. Las piezas se envían el mismo día. El soporte está a una llamada de distancia — no en un ticket que tarda tres días en responderse." },
      { title: "Tolerancias comprobadas", body: "±0.05mm de corte, ±0.01mm de repetibilidad en doblado. No son números de marketing — son las especificaciones a las que calibramos antes de cada envío y verificamos en sitio durante la instalación." },
    ],
  },
  cta: {
    sectionLabel: "Comenzar",
    headline: "¿Listo para construir su línea de fabricación?",
    body: "Cuéntenos qué corta, dobla y suelda — elaboraremos una recomendación completa de equipos con precios y plazos de entrega.",
    cta: "Solicitar Cotización",
  },
};

export const content: Record<"en" | "es", MetalFabContent> = { en, es };
