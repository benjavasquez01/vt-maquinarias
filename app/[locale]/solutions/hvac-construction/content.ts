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
    headline: "Construcción y Estructuras",
    subheadline: "Procesamiento de plancha y perfil de alto rendimiento para estructuras metálicas, perfilería y componentes de construcción. Cambio rápido, resultados consistentes y soporte en Chile incluido.",
    cta1: "Solicitar Cotización",
    cta2: "Hablar con un Especialista",
  },
  applications: {
    sectionLabel: "Aplicaciones Comunes",
    headline: "Lo que fabrican los talleres de estructuras y construcción",
    items: [
      { title: "Estructuras y perfilería metálica", body: "Corte láser de planchas y perfiles para vigas, columnas, cerchas y arriostramientos. Geometrías precisas que reducen el ajuste en obra y aceleran el montaje." },
      { title: "Placas base, gussets y conexiones", body: "Punzonado, entallado y cizallado de placas de conexión, cartelas y herrajes estructurales. Una sola máquina hace lo que antes requería tres operaciones." },
      { title: "Tabiquería, paneles y ductos", body: "Corte láser y plegado para paneles, revestimientos, bandejas portacables y ductos. Bordes limpios y escuadría consistente para un montaje sin retrabajos." },
      { title: "Producción en serie con cobot", body: "Soldadura de soportes, anclajes y conectores repetitivos con un brazo colaborativo. Produzca 120–150 piezas por turno con un solo operador supervisando." },
    ],
  },
  equipment: {
    sectionLabel: "Equipos Recomendados",
    headline: "La solución completa para estructuras y construcción",
    learnMore: "Más información →",
    items: [
      { name: "Cortadora Láser de Plancha", href: "/fabrication/fiber-laser-cutting-machine", desc: "Planchas estructurales, placas base y perfiles complejos a velocidad de producción." },
      { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", desc: "Plegados consistentes para perfiles, paneles, ménsulas y bandejas." },
      { name: "Brazo de Soldadura Colaborativo", href: "/automation/collaborative-welding-arm", desc: "Automatice las soldaduras repetitivas de soportes, anclajes y conectores." },
      { name: "Punzonadora", href: "/fabrication/ironworker", desc: "Punzone, entalle y cizalle ángulos, pletinas y perfiles estructurales." },
      { name: "Máquina de Limpieza Láser", href: "/fabrication/laser-cleaning-machine", desc: "Elimine cascarilla, óxido y pintura antes de soldar — sin abrasivos ni residuos." },
    ],
  },
  cta: {
    sectionLabel: "Comenzar",
    headline: "Cuéntenos sobre su proyecto",
    body: "Recomendaremos la combinación correcta de equipos para su volumen de producción, tipos de material y espacio disponible — con precios y plazos de entrega.",
    cta: "Solicitar Cotización",
  },
};

export const content: Record<string, HvacContent> = { es };
