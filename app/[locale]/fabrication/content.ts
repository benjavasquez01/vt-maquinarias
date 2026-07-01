export type FabricationPageContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string; cta1: string; cta2: string };
  grid: { sectionLabel: string; headline: string; viewMachine: string };
  products: { slug: string; name: string; tag: string; description: string; imageId: string }[];
  banner: {
    sectionLabel: string; headline: string;
    stats: { stat: string; label: string }[];
  };
  cta: { sectionLabel: string; headline: string; body: string; cta: string };
};

const es: FabricationPageContent = {
  hero: {
    sectionLabel: "Línea de Productos",
    headline: "Tecnología para fabricar\ncon mayor precisión",
    subheadline: "Máquinas de corte láser, soldadura láser, limpieza láser, plegado CNC y punzonado, respaldadas por servicio técnico, capacitación y repuestos en Chile.",
    cta1: "Solicitar Cotización",
    cta2: "Ver Automatización",
  },
  grid: { sectionLabel: "Todas las Máquinas", headline: "La Línea Completa", viewMachine: "Ver máquina" },
  products: [
    { slug: "fiber-laser-cutting-machine", name: "Cortadora Láser de Plancha", tag: "Corte", description: "1.5–30 kW, precisión ±0.05 mm. Mesas para planchas de 3000×1500 a 6000×2500 mm. Mesa de intercambio en serie FE.", imageId: "/images/fiber-laser-hero.webp" },
    { slug: "fiber-laser-tube-cutting-machine", name: "Máquina de Corte Láser de Tubos", tag: "Corte de Tubos", description: "VTM-T / VTM-MT. 1.5–6 kW. Tubo redondo hasta 220 mm, longitudes hasta 9 m. Perfiles redondos, cuadrados y estructurales.", imageId: "/images/fiber-laser-tube-hero.webp" },
    { slug: "sheet-tube-laser-cutting-machine", name: "Láser Combinado Plancha y Tubo", tag: "Combinado", description: "VTM-ST. Plancha plana y tubo en una sola máquina. 3–6 kW, mesa hasta 4020, tubo hasta 180 mm.", imageId: "/images/sheet-tube-combo-hero.webp" },
    { slug: "4-in-1-laser-machine", name: "Máquina Soldadora Láser", tag: "Soldadura", description: "VTM-4W. Soldadura, corte, limpieza y alimentación de hilo portátiles. 1.5–3 kW, todos los metales comunes.", imageId: "/images/4in1-laser-hero-2.webp" },
    { slug: "laser-cleaning-machine", name: "Máquina de Limpieza Láser", tag: "Limpieza", description: "50–500W fibra pulsada. Elimina óxido, recubrimientos y capas de óxido sin químicos.", imageId: "/images/laser-cleaning-hero.webp" },
    { slug: "cnc-press-brake", name: "CNC Press Brake", tag: "Bending", description: "40–400 ton, graphic CNC controller, ±0.01 mm repeatability.", imageId: "/images/cnc-press-brake-hero-2.webp" },
    { slug: "ironworker", name: "Punzonadora Hidráulica VTM-IW", tag: "Multiproceso", description: "60–120 ton, 5 estaciones para perforar, escantonar, cortar planchas, ángulos y macizos.", imageId: "/images/ironworker-hero.webp" },
    { slug: "panel-bender", name: "Paneladora CNC", tag: "Plegado de Panel", description: "Plegado de panel por succión, sin rayaduras. Hasta 23 ejes, ciclo de 0,2 s por plegado. Ideal para paneles, gabinetes y piezas de chapa.", imageId: "/images/vtm-p-1.webp" },
    { slug: "air-compressor", name: "Compresor de Aire VTM-AIR", tag: "Aire Comprimido", description: "Compresor de tornillo integrado de 16 bar con variador de frecuencia, secador, filtros finos y doble acumulador. 15, 22 y 37 kW. Aire seco y estable para máquinas láser.", imageId: "/images/vtm-air-1.webp" },
  ],
  banner: {
    sectionLabel: "Cada Máquina",
    headline: "Instalación, Capacitación y Soporte en Chile Incluidos",
    stats: [
      { stat: "Día 1", label: "Instalación lista para producción" },
      { stat: "2 Años", label: "Garantía de piezas y mano de obra" },
      { stat: "24/7", label: "Soporte de diagnóstico remoto" },
    ],
  },
  cta: {
    sectionLabel: "¿No Sabe Por Dónde Empezar?",
    headline: "Hable con un Especialista en Maquinaria",
    body: "Cuéntenos qué fabrica y qué equipos tiene hoy. Le recomendaremos la máquina correcta para su trabajo — sin presión, sin respuestas genéricas.",
    cta: "Iniciar la Conversación",
  },
};

export const content: Record<string, FabricationPageContent> = { es };
