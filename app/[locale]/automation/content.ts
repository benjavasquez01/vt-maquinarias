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

const en: AutomationPageContent = {
  hero: {
    badge: "Industry 4.0 — Now Available for US Fab Shops",
    headline: "VTM\nAutomation",
    subtitle: "Smart welding robots for the connected factory floor — collaborative and industrial systems deployed in six weeks.",
    body: "Industry 4.0 is already reshaping the factory floor — connected machines, real-time weld data, predictive maintenance. VTM makes that accessible to mid-size fab shops: we size the right robot for your actual job mix.",
    cta1: "Request an Automation Consultation",
    cta2: "View Systems",
  },
  intro: {
    sectionLabel: "Why Industry 4.0 Starts Here",
    headline: "The Smart Factory Starts on the Weld Cell Floor",
    p1: "Industry 4.0 is reshaping manufacturing through connected machines, real-time data, and cyber-physical systems — and the welding bay is where US fabricators feel the pressure most. The American Welding Society estimates a shortage of 375,000 welders by 2028. Experienced TIG welders command $35–$55/hr and are nearly impossible to hire in most markets. Turnover is high. Quality is inconsistent.",
    p2: "VTM automation bridges the gap between the smart factory vision and the reality of a mid-size fab shop. Our robots feed weld data — arc-on time, amperage, travel speed, pass counts — directly to your dashboard, giving you the production intelligence that used to live only in a welder's head. A cobot can run your 50-part-per-day cycle today, then be re-programmed for a different job tomorrow, with no robotics engineer required.",
    stats: [
      { stat: "375K", label: "Welder shortage by 2028 (AWS)" },
      { stat: "5×", label: "Faster than manual TIG on repeat parts" },
      { stat: "18 mo", label: "Typical payback period" },
      { stat: "42 days", label: "From order to first production weld" },
    ],
  },
  products: {
    sectionLabel: "Industry 4.0 Automation Systems",
    headline: "Two Paths to a Smarter Shop",
    items: [
      {
        slug: "collaborative-welding-arm",
        name: "Collaborative Welding Arm",
        subtitle: "6-axis cobot, 7 kg payload, ±0.02 mm — IIoT-ready",
        description: "A human-safe, Industry 4.0-connected cobot that works alongside your operators without safety fencing. Real-time weld data streams to your MES or dashboard out of the box. Integrates with your existing MIG or TIG torch in days, not months.",
        imageId: "/images/cobot-welding-hero-2.png",
        badge: "NEW TO THE US MARKET",
        specs: ["7 kg payload", "900 mm reach", "±0.02 mm accuracy", "IIoT data output", "6-week deployment"],
        cta: "Explore system",
      },
      {
        slug: "industrial-welding-arm",
        name: "Industrial Welding Arm",
        subtitle: "6-axis robot, 20 kg payload, ±0.04 mm, 1440 mm reach — smart cell ready",
        description: "High-throughput industrial welding robot built for Industry 4.0 production environments. Continuous cycle monitoring, predictive maintenance alerts, and weld-quality analytics in a fenced cell optimized for defined part families.",
        imageId: "/images/industrial-welding-arm-hero.png",
        badge: "NEW TO THE US MARKET",
        specs: ["20 kg payload", "1440 mm reach", "±0.04 mm accuracy", "Predictive maintenance", "Fenced cell"],
        cta: "Explore system",
      },
    ],
  },
  cta: {
    headline: "Ready to Join the Industry 4.0 Revolution?",
    body: "Tell us your annual weld volume, your top 5 parts, and your current headcount. We'll map out a connected automation strategy built for your shop — and if the numbers don't work yet, we'll tell you that straight.",
    cta: "Request a Free Consultation",
  },
};

const es: AutomationPageContent = {
  hero: {
    badge: "Industria 4.0 — Ya Disponible para Talleres de EE.UU.",
    headline: "VTM\nAutomatización",
    subtitle: "Robots de soldadura inteligentes para la fábrica conectada — sistemas colaborativos e industriales implementados en seis semanas.",
    body: "La Industria 4.0 prometió un piso de manufactura más inteligente y conectado, pero la automatización de soldadura solo estaba al alcance de proveedores Tier 1 con presupuestos de integración de seis cifras. VTM cambia eso: dimensionamos el robot correcto para su combinación real de trabajos, gestionamos toda la integración y programación, y tenemos su primera celda inteligente funcionando en 42 días.",
    cta1: "Solicitar una Consulta de Automatización",
    cta2: "Ver Sistemas",
  },
  intro: {
    sectionLabel: "Por Qué la Industria 4.0 Empieza Aquí",
    headline: "La Fábrica Inteligente Comienza en la Celda de Soldadura",
    p1: "La Industria 4.0 está transformando la manufactura a través de máquinas conectadas, datos en tiempo real y sistemas ciberfísicos — y la bahía de soldadura es donde los fabricantes estadounidenses sienten más presión. La American Welding Society estima una escasez de 375,000 soldadores para 2028. Los soldadores TIG experimentados cobran $35–$55/hr y son casi imposibles de contratar en la mayoría de los mercados. La rotación es alta. La calidad es inconsistente.",
    p2: "La automatización VTM conecta la visión de la fábrica inteligente con la realidad de un taller mediano. Nuestros robots envían datos de soldadura — tiempo de arco activo, amperaje, velocidad de avance, número de pasadas — directamente a su panel de control, entregándole la inteligencia de producción que antes solo existía en la cabeza del soldador. Un cobot puede manejar su ciclo de 50 piezas por día hoy, y reprogramarse para un trabajo diferente mañana, sin necesidad de un ingeniero en robótica.",
    stats: [
      { stat: "375K", label: "Escasez de soldadores para 2028 (AWS)" },
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
        imageId: "/images/cobot-welding-hero-2.png",
        badge: "NUEVO EN EL MERCADO DE EE.UU.",
        specs: ["Carga útil 7 kg", "Alcance 900 mm", "Precisión ±0.02 mm", "Salida de datos IIoT", "Implementación en 6 semanas"],
        cta: "Explorar sistema",
      },
      {
        slug: "industrial-welding-arm",
        name: "Brazo de Soldadura Industrial",
        subtitle: "Robot de 6 ejes, carga útil 20 kg, ±0.04 mm, alcance 1440 mm — celda inteligente lista",
        description: "Robot de soldadura industrial de alto rendimiento diseñado para entornos de producción de Industria 4.0. Monitoreo continuo del ciclo, alertas de mantenimiento predictivo y análisis de calidad de soldadura en una celda vallada optimizada para familias de piezas definidas.",
        imageId: "/images/industrial-welding-arm-hero.png",
        badge: "NUEVO EN EL MERCADO DE EE.UU.",
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

export const content: Record<"en" | "es", AutomationPageContent> = { en, es };
