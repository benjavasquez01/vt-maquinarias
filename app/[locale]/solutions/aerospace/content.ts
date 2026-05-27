export type AerospaceContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string; cta1: string; cta2: string };
  materials: {
    sectionLabel: string; headline: string;
    items: { material: string; cap: string }[];
  };
  equipment: {
    sectionLabel: string; headline: string; learnMore: string;
    items: { name: string; href: string; desc: string }[];
  };
  cta: { sectionLabel: string; headline: string; body: string; cta: string };
};

const es: AerospaceContent = {
  hero: {
    sectionLabel: "Soluciones por Industria",
    headline: "Aeroespacial",
    subheadline: "El sector aeroespacial exige tolerancias que la mayoría de los equipos de fabricación no pueden mantener. Los nuestros sí. ±0.05mm en titanio, aleaciones de aluminio e inoxidable — corte a plano, siempre.",
    cta1: "Solicitar Cotización",
    cta2: "Hablar con un Especialista",
  },
  materials: {
    sectionLabel: "Capacidades de Material",
    headline: "Materiales aeroespaciales, procesados correctamente",
    items: [
      { material: "Titanio (Ti-6Al-4V)", cap: "Corte láser de fibra con gas de asistencia de nitrógeno elimina la oxidación. Zona afectada por el calor minimizada para preservar las propiedades del material." },
      { material: "Aleaciones de Aluminio (6061, 7075)", cap: "Corte láser de fibra de alta velocidad con bordes limpios. Sin formación de rebabas con los parámetros correctos — reduce el tiempo de desbarbado en post-procesamiento." },
      { material: "Acero Inoxidable (304, 316, 17-4 PH)", cap: "Corte con asistencia de nitrógeno para bordes sin óxido. Plegado en prensa con compensación de retorno elástico programada para cada grado." },
      { material: "Inconel y aleaciones de alta temperatura", cap: "Contáctenos — los parámetros láser para estos materiales requieren configuración personalizada. Tenemos experiencia con Inconel 625 y 718." },
    ],
  },
  equipment: {
    sectionLabel: "Equipos Recomendados",
    headline: "Equipos para trabajo aeroespacial",
    learnMore: "Más información →",
    items: [
      { name: "Cortadora Láser de Chapa", href: "/fabrication/fiber-laser-cutting-machine", desc: "Precisión ±0.05mm, capacidad de asistencia con nitrógeno para bordes limpios en metales no ferrosos." },
      { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", desc: "Repetibilidad de plegado ±0.01mm. Compensación automática de retorno elástico por material y calibre." },
    ],
  },
  cta: {
    sectionLabel: "Comenzar",
    headline: "Analice su aplicación aeroespacial",
    body: "Envíenos sus planos de piezas, especificaciones de material y requisitos de tolerancia. Confirmaremos la capacidad y recomendaremos la configuración correcta.",
    cta: "Solicitar Cotización",
  },
};

export const content: Record<string, AerospaceContent> = { es };
