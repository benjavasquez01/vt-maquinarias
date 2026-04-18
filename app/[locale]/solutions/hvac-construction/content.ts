export type HvacContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string; cta1: string; cta2: string };
  applications: {
    sectionLabel: string; headline: string;
    items: { title: string; body: string }[];
  };
  equipment: {
    sectionLabel: string; headline: string; learnMore: string;
    items: { name: string; href: string; desc: string }[];
  };
  cta: { sectionLabel: string; headline: string; body: string; cta: string };
};

const en: HvacContent = {
  hero: {
    sectionLabel: "Industry Solutions",
    headline: "HVAC & Construction",
    subheadline: "High-throughput sheet metal processing for HVAC duct fabricators and construction component shops. Fast changeover, consistent results, US support included.",
    cta1: "Request a Quote",
    cta2: "Talk to a Specialist",
  },
  applications: {
    sectionLabel: "Common Applications",
    headline: "What HVAC & construction shops process",
    items: [
      { title: "Rectangular duct components", body: "High-speed shearing and laser cutting for galvanized and stainless duct sections. Consistent width and squareness critical for leak-free assembly." },
      { title: "Equipment enclosures and panels", body: "Laser cut and press brake bent panels for AHUs, chillers, and rooftop equipment. Tight corner radii and clean edges without deburring." },
      { title: "Structural steel brackets and supports", body: "Ironworker punching, notching, and shearing for structural connection hardware. One machine handles what used to require three setups." },
      { title: "Cobot welding for bracket production", body: "High-volume bracket and fitting welding — perfect repetitive work for a collaborative welding arm. Run 120–150 parts per shift with one operator supervising." },
    ],
  },
  equipment: {
    sectionLabel: "Recommended Equipment",
    headline: "The HVAC fabrication stack",
    learnMore: "Learn more →",
    items: [
      { name: "Shearing Machine", href: "/fabrication/shearing-machine", desc: "Fast, clean sheet metal cuts. Guillotine or swing-beam configuration." },
      { name: "Fiber Laser Cutting Machine", href: "/fabrication/fiber-laser-cutting-machine", desc: "Complex duct profiles and panel cutouts at production speed." },
      { name: "CNC Press Brake", href: "/fabrication/cnc-press-brake", desc: "Consistent bends for enclosures, panels, and flanges." },
      { name: "Collaborative Welding Arm", href: "/automation/collaborative-welding-arm", desc: "Automate your highest-volume bracket and fitting welds." },
      { name: "Ironworker", href: "/fabrication/ironworker", desc: "Punch, notch, and shear structural angles and flat bar." },
      { name: "Laser Cleaning Machine", href: "/fabrication/laser-cleaning-machine", desc: "Remove mill scale, rust, and paint before welding — no media, no disposal." },
    ],
  },
  cta: {
    sectionLabel: "Get Started",
    headline: "Tell us about your shop",
    body: "We'll recommend the right combination of equipment for your production volume, material mix, and floor space — with pricing and lead times.",
    cta: "Request a Quote",
  },
};

const es: HvacContent = {
  hero: {
    sectionLabel: "Soluciones por Industria",
    headline: "HVAC y Construcción",
    subheadline: "Procesamiento de chapa metálica de alto rendimiento para fabricantes de ductos HVAC y talleres de componentes para construcción. Cambio rápido, resultados consistentes, soporte en EE.UU. incluido.",
    cta1: "Solicitar Cotización",
    cta2: "Hablar con un Especialista",
  },
  applications: {
    sectionLabel: "Aplicaciones Comunes",
    headline: "Lo que procesan los talleres de HVAC y construcción",
    items: [
      { title: "Componentes de ductos rectangulares", body: "Cizallado y corte láser de alta velocidad para secciones de ductos galvanizados e inoxidables. Anchura y escuadría consistentes, fundamentales para un montaje sin fugas." },
      { title: "Carcasas y paneles de equipos", body: "Paneles cortados a láser y doblados en prensa para manejadoras de aire, enfriadoras y equipos de techo. Radios de esquina ajustados y bordes limpios sin desbarbado." },
      { title: "Soportes y refuerzos de acero estructural", body: "Punzonado, entallado y cizallado con punzonadora para herrajes de conexión estructural. Una máquina realiza lo que antes requería tres operaciones." },
      { title: "Soldadura con cobot para producción de soportes", body: "Soldadura de soportes y accesorios de alto volumen — trabajo repetitivo ideal para un brazo de soldadura colaborativo. Produzca 120–150 piezas por turno con un solo operador supervisando." },
    ],
  },
  equipment: {
    sectionLabel: "Equipos Recomendados",
    headline: "La solución completa para fabricación HVAC",
    learnMore: "Más información →",
    items: [
      { name: "Cizalla", href: "/fabrication/shearing-machine", desc: "Cortes rápidos y limpios en chapa metálica. Configuración de guillotina o viga oscilante." },
      { name: "Máquina de Corte Láser de Fibra", href: "/fabrication/fiber-laser-cutting-machine", desc: "Perfiles complejos de ductos y recortes de paneles a velocidad de producción." },
      { name: "Prensa Dobladora CNC", href: "/fabrication/cnc-press-brake", desc: "Doblados consistentes para carcasas, paneles y bridas." },
      { name: "Brazo de Soldadura Colaborativo", href: "/automation/collaborative-welding-arm", desc: "Automatice sus soldaduras de mayor volumen de soportes y accesorios." },
      { name: "Punzonadora", href: "/fabrication/ironworker", desc: "Punzone, enralle y cizalle ángulos estructurales y pletinas." },
      { name: "Máquina de Limpieza Láser", href: "/fabrication/laser-cleaning-machine", desc: "Elimine cascarilla, óxido y pintura antes de soldar — sin medios abrasivos ni residuos." },
    ],
  },
  cta: {
    sectionLabel: "Comenzar",
    headline: "Cuéntenos sobre su taller",
    body: "Recomendaremos la combinación correcta de equipos para su volumen de producción, combinación de materiales y espacio disponible — con precios y plazos de entrega.",
    cta: "Solicitar Cotización",
  },
};

export const content: Record<"en" | "es", HvacContent> = { en, es };
