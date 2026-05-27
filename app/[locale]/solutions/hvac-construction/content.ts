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

const es: HvacContent = {
  hero: {
    sectionLabel: "Soluciones por Industria",
    headline: "HVAC y Construcción",
    subheadline: "Procesamiento de chapa metálica de alto rendimiento para fabricantes de ductos HVAC y talleres de componentes para construcción. Cambio rápido, resultados consistentes, soporte en Chile incluido.",
    cta1: "Solicitar Cotización",
    cta2: "Hablar con un Especialista",
  },
  applications: {
    sectionLabel: "Aplicaciones Comunes",
    headline: "Lo que procesan los talleres de HVAC y construcción",
    items: [
      { title: "Componentes de ductos rectangulares", body: "Corte láser de alta velocidad para secciones de ductos galvanizados e inoxidables. Anchura y escuadría consistentes, fundamentales para un montaje sin fugas." },
      { title: "Carcasas y paneles de equipos", body: "Paneles cortados a láser y plegados en prensa para manejadoras de aire, enfriadoras y equipos de techo. Radios de esquina ajustados y bordes limpios sin desbarbado." },
      { title: "Soportes y refuerzos de acero estructural", body: "Punzonado, entallado y cizallado con punzonadora para herrajes de conexión estructural. Una máquina realiza lo que antes requería tres operaciones." },
      { title: "Soldadura con cobot para producción de soportes", body: "Soldadura de soportes y accesorios de alto volumen — trabajo repetitivo ideal para un brazo de soldadura colaborativo. Produzca 120–150 piezas por turno con un solo operador supervisando." },
    ],
  },
  equipment: {
    sectionLabel: "Equipos Recomendados",
    headline: "La solución completa para fabricación HVAC",
    learnMore: "Más información →",
    items: [
      { name: "Cortadora Láser de Chapa", href: "/fabrication/fiber-laser-cutting-machine", desc: "Perfiles complejos de ductos y recortes de paneles a velocidad de producción." },
      { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", desc: "Plegados consistentes para carcasas, paneles y bridas." },
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

export const content: Record<string, HvacContent> = { es };
