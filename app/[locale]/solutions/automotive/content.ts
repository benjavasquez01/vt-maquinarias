export type AutomotiveContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string; cta1: string; cta2: string };
  requirements: {
    sectionLabel: string; headline: string;
    items: { req: string; how: string }[];
  };
  equipment: {
    sectionLabel: string; headline: string; learnMore: string;
    items: { name: string; href: string; desc: string }[];
  };
  cta: { sectionLabel: string; headline: string; body: string; cta: string };
};

const es: AutomotiveContent = {
  hero: {
    sectionLabel: "Soluciones por Industria",
    headline: "Automotriz",
    subheadline: "Los fabricantes de componentes automotrices Tier 1–3 necesitan tolerancia y rendimiento por encima de todo. Nuestros equipos ofrecen ambos.",
    cta1: "Solicitar Cotización",
    cta2: "Hablar con un Especialista",
  },
  requirements: {
    sectionLabel: "Cómo lo Resolvemos",
    headline: "Requisitos automotrices — respondidos",
    items: [
      { req: "Procesamiento de acero HSLA y de alta resistencia avanzada", how: "El corte láser de fibra maneja HSLA hasta 1 pulgada. Las prensas plegadoras con topes traseros CNC manejan curvaturas de radio ajustado sin problemas de retorno elástico." },
      { req: "Consistencia en la calidad de soldadura en miles de piezas", how: "Los brazos de soldadura industrial mantienen una repetibilidad de trayectoria de antorcha ±0.05mm en cada pieza — la calidad de soldadura en la pieza #5,000 es idéntica a la pieza #1." },
      { req: "Producción mixta de aluminio y acero en una sola línea", how: "El láser de fibra destaca en ambos. Cambio rápido mediante parámetros de corte guardados — cambio de acero a aluminio 6061 en menos de 5 minutos." },
      { req: "Trazabilidad y documentación", how: "Los controladores CNC registran parámetros de corte, potencia y velocidad para cada pieza. Datos disponibles para auditorías de calidad y requisitos de documentación del cliente." },
    ],
  },
  equipment: {
    sectionLabel: "Equipos Recomendados",
    headline: "Fabricados para la industria automotriz",
    learnMore: "Más información →",
    items: [
      { name: "Cortadora Láser de Chapa", href: "/fabrication/fiber-laser-cutting-machine", desc: "HSLA, aluminio e inoxidable — con tolerancias automotrices." },
      { name: "Brazo de Soldadura Industrial", href: "/automation/industrial-welding-arm", desc: "Calidad de soldadura consistente en producciones de alto volumen." },
      { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", desc: "Plegado de radio ajustado con repetibilidad de ±0.01mm." },
    ],
  },
  cta: {
    sectionLabel: "Comenzar",
    headline: "¿Listo para analizar su aplicación automotriz?",
    body: "Comparta sus planos de piezas y objetivos de producción — recomendaremos el equipo correcto y le proporcionaremos un modelo preliminar de ROI.",
    cta: "Solicitar Cotización",
  },
};

export const content: Record<string, AutomotiveContent> = { es };
