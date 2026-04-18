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

const en: AutomotiveContent = {
  hero: {
    sectionLabel: "Industry Solutions",
    headline: "Automotive",
    subheadline: "Tier 1–3 automotive component manufacturers need tolerance and throughput above everything else. Our equipment delivers both.",
    cta1: "Request a Quote",
    cta2: "Talk to a Specialist",
  },
  requirements: {
    sectionLabel: "How We Solve It",
    headline: "Automotive requirements — answered",
    items: [
      { req: "HSLA and advanced high-strength steel processing", how: "Fiber laser cutting handles HSLA up to 1 inch. Press brakes with CNC back gauges handle tight-radius bends without springback issues." },
      { req: "Weld quality consistency across thousands of parts", how: "Industrial welding arms maintain ±0.05mm torch path repeatability on every part — weld quality on part #5,000 is identical to part #1." },
      { req: "Mixed aluminum and steel production on one line", how: "Fiber laser excels on both. Quick changeover via saved cutting parameters — switch from steel to 6061 aluminum in under 5 minutes." },
      { req: "Traceability and documentation", how: "CNC controllers log cutting parameters, power, and speed for every part. Data available for quality audit and customer documentation requirements." },
    ],
  },
  equipment: {
    sectionLabel: "Recommended Equipment",
    headline: "Built for automotive",
    learnMore: "Learn more →",
    items: [
      { name: "Fiber Laser Cutting Machine", href: "/fabrication/fiber-laser-cutting-machine", desc: "HSLA, aluminum, and stainless — at automotive tolerances." },
      { name: "Industrial Welding Arm", href: "/automation/industrial-welding-arm", desc: "Consistent weld quality across high-volume production runs." },
      { name: "CNC Press Brake", href: "/fabrication/cnc-press-brake", desc: "Tight-radius bending with ±0.01mm repeatability." },
    ],
  },
  cta: {
    sectionLabel: "Get Started",
    headline: "Ready to discuss your automotive application?",
    body: "Share your part drawings and production targets — we'll recommend the right equipment and provide a preliminary ROI model.",
    cta: "Request a Quote",
  },
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
      { req: "Procesamiento de acero HSLA y de alta resistencia avanzada", how: "El corte láser de fibra maneja HSLA hasta 1 pulgada. Las prensas dobladoras con topes traseros CNC manejan curvaturas de radio ajustado sin problemas de retorno elástico." },
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
      { name: "Máquina de Corte Láser de Fibra", href: "/fabrication/fiber-laser-cutting-machine", desc: "HSLA, aluminio e inoxidable — con tolerancias automotrices." },
      { name: "Brazo de Soldadura Industrial", href: "/automation/industrial-welding-arm", desc: "Calidad de soldadura consistente en producciones de alto volumen." },
      { name: "Prensa Dobladora CNC", href: "/fabrication/cnc-press-brake", desc: "Doblado de radio ajustado con repetibilidad de ±0.01mm." },
    ],
  },
  cta: {
    sectionLabel: "Comenzar",
    headline: "¿Listo para analizar su aplicación automotriz?",
    body: "Comparta sus planos de piezas y objetivos de producción — recomendaremos el equipo correcto y le proporcionaremos un modelo preliminar de ROI.",
    cta: "Solicitar Cotización",
  },
};

export const content: Record<"en" | "es", AutomotiveContent> = { en, es };
