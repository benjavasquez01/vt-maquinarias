export type AutomationPageContent = {
  hero: {
    badge: string; headline: string; subtitle: string; body: string; cta1: string; cta2: string;
  };
  intro: {
    sectionLabel: string; headline: string; p1: string; p2: string;
    stats: { stat: string; label: string }[];
  };
  products: {
    sectionLabel: string; headline: string;
    items: {
      slug: string; name: string; subtitle: string; description: string;
      imageId: string; badge: string; specs: string[]; cta: string;
    }[];
  };
  cta: { headline: string; body: string; cta: string };
};

const es: AutomationPageContent = {
  hero: {
    badge: "Industria 4.0 — Ya Disponible para Talleres en Chile",
    headline: "VTM\nAutomatización",
    subtitle: "Robots de soldadura inteligentes para la fábrica conectada — sistemas colaborativos e industriales implementados en seis semanas.",
    body: "La Industria 4.0 prometió un piso de manufactura más inteligente y conectado, pero la automatización de soldadura solo estaba al alcance de proveedores Tier 1 con presupuestos de integración de seis cifras. VTM cambia eso: dimensionamos el robot correcto para su combinación real de trabajos, gestionamos toda la integración y programación, y tenemos su primera celda inteligente funcionando en 42 días.",
    cta1: "Solicitar una Consulta de Automatización",
    cta2: "Ver Sistemas",
  },
  intro: {
    sectionLabel: "Por Qué la Industria 4.0 Empieza Aquí",
    headline: "La Fábrica Inteligente Comienza en la Celda de Soldadura",
    p1: "La Industria 4.0 está transformando la manufactura a través de máquinas conectadas, datos en tiempo real y sistemas ciberfísicos — y la bahía de soldadura es donde los fabricantes sienten más presión. La industria enfrenta una escasez creciente de soldadores calificados. Los soldadores con experiencia en TIG son cada vez más difíciles de contratar y retener. La rotación es alta. La calidad es inconsistente.",
    p2: "La automatización VTM conecta la visión de la fábrica inteligente con la realidad de un taller mediano. Nuestros robots envían datos de soldadura — tiempo de arco activo, amperaje, velocidad de avance, número de pasadas — directamente a su panel de control, entregándole la inteligencia de producción que antes solo existía en la cabeza del soldador. Un cobot puede manejar su ciclo de 50 piezas por día hoy, y reprogramarse para un trabajo diferente mañana, sin necesidad de un ingeniero en robótica.",
    stats: [
      { stat: "375K", label: "Déficit global de soldadores proyectado para 2028" },
      { stat: "5×", label: "Más rápido que TIG manual en piezas repetitivas" },
      { stat: "18 meses", label: "Período de recuperación típico" },
      { stat: "42 días", label: "Del pedido a la primera soldadura en producción" },
    ],
  },
  products: {
    sectionLabel: "Sistemas de Automatización Industria 4.0",
    headline: "Dos Caminos hacia un Taller más Inteligente",
    items: [
      {
        slug: "collaborative-welding-arm",
        name: "Brazo de Soldadura Colaborativo",
        subtitle: "Cobot de 6 ejes, carga útil 7 kg, ±0.02 mm — listo para IIoT",
        description: "Un cobot seguro para humanos y conectado a la Industria 4.0 que trabaja junto a sus operadores sin vallado de seguridad. Los datos de soldadura en tiempo real se envían a su MES o panel de control desde el primer día. Se integra con su antorcha MIG o TIG existente en días, no en meses.",
        imageId: "/images/cobot-welding-hero-2.webp",
        badge: "NUEVO EN EL MERCADO",
        specs: ["Carga útil 7 kg", "Alcance 900 mm", "Precisión ±0.02 mm", "Salida de datos IIoT", "Implementación en 6 semanas"],
        cta: "Explorar sistema",
      },
      {
        slug: "industrial-welding-arm",
        name: "Brazo de Soldadura Industrial",
        subtitle: "Robot de 6 ejes, carga útil 20 kg, ±0.04 mm, alcance 1440 mm — celda inteligente lista",
        description: "Robot de soldadura industrial de alto rendimiento diseñado para entornos de producción de Industria 4.0. Monitoreo continuo del ciclo, alertas de mantenimiento predictivo y análisis de calidad de soldadura en una celda vallada optimizada para familias de piezas definidas.",
        imageId: "/images/industrial-welding-arm-hero.webp",
        badge: "NUEVO EN EL MERCADO",
        specs: ["Carga útil 20 kg", "Alcance 1440 mm", "Precisión ±0.04 mm", "Mantenimiento predictivo", "Celda vallada"],
        cta: "Explorar sistema",
      },
    ],
  },
  cta: {
    headline: "¿Listo para Unirse a la Revolución de la Industria 4.0?",
    body: "Cuéntenos su volumen anual de soldadura, sus 5 piezas principales y su dotación actual. Diseñaremos una estrategia de automatización conectada para su taller — y si los números aún no cuadran, se lo diremos sin rodeos.",
    cta: "Solicitar una Consulta Gratuita",
  },
};

export const content: Record<string, AutomationPageContent> = { es };
