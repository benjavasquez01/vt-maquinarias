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
    headline: "Maquinaria de\nFabricación",
    subheadline: "Corte láser, soldadura láser, limpieza láser, prensas plegadoras CNC y punzonadoras — cada máquina configurada para voltaje chileno (380V/50Hz), respaldada por instalación y soporte en Chile",
    cta1: "Solicitar Cotización",
    cta2: "Ver Automatización",
  },
  grid: { sectionLabel: "Todas las Máquinas", headline: "La Línea Completa", viewMachine: "Ver máquina" },
  products: [
    { slug: "fiber-laser-cutting-machine", name: "Cortadora Láser de Chapa", tag: "Corte", description: "1.5–30 kW, precisión ±0.05 mm. Mesas de 4′×4′ a 8′×20′. Mesa de intercambio en serie FE.", imageId: "/images/fiber-laser-hero.webp" },
    { slug: "fiber-laser-tube-cutting-machine", name: "Máquina de Corte Láser de Tubos", tag: "Corte de Tubos", description: "VTM-T / VTM-MT. 1.5–6 kW. Tubo redondo hasta 220 mm, longitudes hasta 9 m. Perfiles redondos, cuadrados y estructurales.", imageId: "/images/fiber-laser-tube-hero.webp" },
    { slug: "sheet-tube-laser-cutting-machine", name: "Láser Combinado Chapa y Tubo", tag: "Combinado", description: "VTM-ST. Chapa plana y tubo en una sola máquina. 3–6 kW, mesa hasta 4020, tubo hasta 180 mm.", imageId: "/images/sheet-tube-combo-hero.webp" },
    { slug: "4-in-1-laser-machine", name: "Máquina de Soldadura Láser", tag: "Soldadura", description: "VTM-4W. Soldadura, corte, limpieza y alimentación de hilo portátiles. 1.5–3 kW, todos los metales comunes.", imageId: "/images/4in1-laser-hero-2.webp" },
    { slug: "laser-cleaning-machine", name: "Máquina de Limpieza Láser", tag: "Limpieza", description: "50–500W fibra pulsada. Elimina óxido, recubrimientos y capas de óxido sin químicos.", imageId: "/images/laser-cleaning-hero.webp" },
    { slug: "cnc-press-brake", name: "CNC Press Brake", tag: "Bending", description: "40–400 ton, graphic CNC controller, ±0.01 mm repeatability.", imageId: "/images/cnc-press-brake-hero.webp" },
    { slug: "ironworker", name: "Hydraulic Ironworker", tag: "Multi-Function", description: "55–110 ton, 5 work stations: punch, notch, shear, angle, tube.", imageId: "/images/ironworker-hero.webp" },
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
