import type { SpecRow } from "@/components/product/GenericSpecsTable";
import type { FaqItem } from "@/components/product/GenericFaqAccordion";

export interface ComparisonRow {
  feature: string;
  cobot: string;
  industrial: string;
}

export interface IntegrationPhase {
  phase: string;
  title: string;
  body: string;
}

export interface StatItem {
  stat: string;
  label: string;
}

export interface RelatedItem {
  name: string;
  href: string;
  tag: string;
  imageId: string;
}

export interface IndustrialArmContent {
  hero: {
    categoryLabel: string;
    headline: string;
    subheadline: string;
    cta1: string;
    cta2: string;
    stats: Array<{ value: string; label: string }>;
  };
  value: {
    sectionLabel: string;
    headline: string;
    body1: string;
    body2: string;
    stats: StatItem[];
  };
  specs: { sectionLabel: string; headline: string; rows: SpecRow[] };
  video: { sectionLabel: string; headline: string };
  compare: {
    sectionLabel: string;
    headline: string;
    leftLabel: string;
    rightLabel: string;
    rows: ComparisonRow[];
  };
  integration: {
    sectionLabel: string;
    headline: string;
    phases: IntegrationPhase[];
  };
  roi: { sectionLabel: string; headline: string; body: string };
  faq: { sectionLabel: string; headline: string; items: FaqItem[] };
  cta: { sectionLabel: string; headline: string; body: string; cta1: string; cta2: string };
  related: { sectionLabel: string; headline: string; items: RelatedItem[] };
}

const es: IndustrialArmContent = {
  hero: {
    categoryLabel: "Automatización",
    headline: "Brazo de Soldadura\nIndustrial",
    subheadline: "Cuando el volumen es alto y sus piezas se repiten, el brazo industrial funciona a 4–5× la velocidad de soldadura manual, 20 horas al día, con cero fatiga y calidad de soldadura consistente en cada pieza.",
    cta1: "Solicitar una Demo",
    cta2: "Descargar Ficha Técnica",
    stats: [
      { value: "4–5×", label: "Velocidad vs. manual" },
      { value: "20 kg", label: "Capacidad de carga" },
      { value: "±0.05 mm", label: "Repetibilidad" },
    ],
  },
  value: {
    sectionLabel: "Construido para Producción",
    headline: "Soldadura de alto volumen sin la restricción de personal",
    body1: "El brazo industrial está diseñado para una sola cosa: ejecutar sus soldaduras repetitivas de mayor volumen más rápido, de manera más consistente y con menor costo laboral por pieza que cualquier otro método. No llama para avisar que está enfermo. No tiene una semana mala. Cada pieza que suelda se parece a la primera.",
    body2: "A diferencia de los robots colaborativos, el brazo industrial está optimizado para velocidad sobre flexibilidad. Opera dentro de una celda con protección de seguridad, funcionando a máxima velocidad sin interrupciones por tráfico humano — típicamente 4–5× la producción de un soldador manual calificado en el mismo accesorio.",
    stats: [
      { stat: "4–5×", label: "El multiplicador de rendimiento vs. soldadura manual en soldaduras de producción repetitivas" },
      { stat: "20 hr/día", label: "Tiempo de funcionamiento típico — dos turnos con tiempo mínimo de cambio" },
      { stat: "±0.05 mm", label: "Repetibilidad de ruta de soldadura — ángulo de antorcha y velocidad idénticos en cada pieza" },
      { stat: "0 fatiga", label: "Calidad consistente en la pieza #1 y la pieza #10,000 — la calidad de soldadura nunca se degrada" },
    ],
  },
  specs: {
    sectionLabel: "Especificaciones Técnicas",
    headline: "En Números",
    rows: [
      { label: "Carga útil", imperial: "44 lbs", metric: "20 kg" },
      { label: "Alcance", imperial: "66 pulg.", metric: "1,700 mm" },
      { label: "Repetibilidad", imperial: "±0.002 pulg.", metric: "±0.05 mm" },
      { label: "Ejes", imperial: "6", metric: "6" },
      { label: "Corriente máx. de soldadura", imperial: "500 A", metric: "500 A" },
      { label: "Procesos de soldadura", imperial: "MIG / MAG / TIG / Plasma", metric: "MIG / MAG / TIG / Plasma" },
      { label: "Programación", imperial: "Fuera de línea (RoboDK, OLP)", metric: "Fuera de línea (RoboDK, OLP)" },
      { label: "Velocidad de movimiento", imperial: "Hasta 250 pulg./min", metric: "Hasta 6,000 mm/min" },
      { label: "Ventaja de tiempo de ciclo", imperial: "4–5× soldadura manual", metric: "4–5× soldadura manual" },
      { label: "Estándar de seguridad", imperial: "ISO 10218-1/-2", metric: "ISO 10218-1/-2" },
      { label: "Montaje", imperial: "Piso, techo, pared", metric: "Piso, techo, pared" },
      { label: "Clasificación IP", imperial: "IP65", metric: "IP65" },
    ],
  },
  video: {
    sectionLabel: "Véalo Trabajar",
    headline: "En Acción",
  },
  compare: {
    sectionLabel: "¿Qué Robot es Correcto?",
    headline: "Industrial vs. Brazo Colaborativo",
    leftLabel: "Brazo Colaborativo",
    rightLabel: "Brazo Industrial",
    rows: [
      { feature: "Jaula de seguridad requerida", cobot: "No — cumple ISO/TS 15066", industrial: "Sí — protección rígida obligatoria" },
      { feature: "Tiempo de configuración para nueva pieza", cobot: "20–60 min (guiado manual)", industrial: "OLP fuera de línea, sin pérdida de producción" },
      { feature: "Carga útil", cobot: "15 kg (33 lbs)", industrial: "20 kg (44 lbs)" },
      { feature: "Tamaño de lote ideal", cobot: "Volumen bajo–medio, piezas mixtas", industrial: "Alto volumen, piezas dedicadas" },
      { feature: "Ventaja de velocidad", cobot: "2.5× soldadura manual", industrial: "4–5× soldadura manual" },
      { feature: "Huella de piso", cobot: "Mínima", industrial: "Celda dedicada requerida" },
      { feature: "Inversión", cobot: "Menor — sin construcción de celda", industrial: "Mayor — proyecto de integración completo" },
      { feature: "Mejor para", cobot: "Talleres con productos mixtos, espacio limitado", industrial: "Producción de alto volumen con piezas repetitivas" },
    ],
  },
  integration: {
    sectionLabel: "Integración de Servicio Completo",
    headline: "Manejamos Todo el Proyecto",
    phases: [
      { phase: "01", title: "Diseño de Celda", body: "Distribución, diseño de cerramiento de seguridad, conceptos de accesorios y modelado de tiempo de ciclo basado en sus piezas y objetivos de producción. Entregado como propuesta formal." },
      { phase: "02", title: "Programación Fuera de Línea", body: "Rutas de soldadura generadas desde sus archivos CAD antes de que llegue el robot. Verificadas en simulación para alcance, espacio y calidad de soldadura. No se pierde tiempo de producción en programación." },
      { phase: "03", title: "Instalación y Puesta en Marcha", body: "Los técnicos VTM ensamblan la celda, conectan los servicios, ejecutan las primeras piezas de producción y validan la calidad de soldadura contra sus planos." },
      { phase: "04", title: "Capacitación del Operador", body: "Su equipo aprende la operación de la celda, carga de programas, gestión de consumibles y mantenimiento diario. No nos vamos hasta que estén seguros." },
      { phase: "05", title: "Monitoreo Remoto", body: "El controlador conectado a la nube envía datos de tiempo activo, errores y producción a nuestro equipo de soporte. Los problemas se señalan automáticamente antes de que causen tiempo de inactividad." },
      { phase: "06", title: "Soporte Continuo", body: "Contratos de mantenimiento preventivo anuales, repuestos de stock en Chile, actualizaciones OLP para nuevas piezas y línea directa con ingenieros de aplicaciones VTM para preguntas de proceso." },
    ],
  },
  roi: {
    sectionLabel: "Haga el Caso de Negocio",
    headline: "Calcule su ROI",
    body: "Para talleres de producción de alto volumen, el brazo industrial típicamente se paga en 12–24 meses. Ajuste las entradas a su realidad de producción.",
  },
  faq: {
    sectionLabel: "Preguntas",
    headline: "Preguntas Frecuentes",
    items: [
      {
        question: "¿Cuál es la diferencia entre el brazo industrial y el colaborativo?",
        answer: "El brazo industrial está construido para velocidad y rendimiento en una celda dedicada y protegida. Se mueve más rápido, maneja cargas más pesadas y está optimizado para soldadura de producción repetitiva de alto volumen. El brazo colaborativo es más lento pero puede trabajar junto a los humanos sin jaula, haciéndolo ideal para talleres más pequeños o entornos de productos mixtos. Ambos entregan soldaduras consistentes y de alta calidad.",
      },
      {
        question: "¿Cuánto tiempo lleva integrar un robot de soldadura industrial en mi línea de producción?",
        answer: "Un proyecto típico desde el pedido firmado hasta listo para producción es de 12–20 semanas. Esto incluye diseño de celda, fabricación del robot y accesorios, programación fuera de línea, pruebas de aceptación en fábrica e instalación y puesta en marcha en sitio. Para pedidos de alto volumen con piezas dedicadas, la programación fuera de línea comienza durante la construcción del robot, comprimiendo el cronograma.",
      },
      {
        question: "¿Qué método de programación usa el brazo industrial?",
        answer: "Usamos software de programación fuera de línea (OLP) — principalmente RoboDK — para generar rutas de soldadura desde sus archivos CAD antes de que llegue el robot. Esto elimina el uso del robot de producción durante la programación y permite una verificación exhaustiva de la ruta en simulación. La puesta en marcha en sitio ajusta los parámetros de soldadura con material real.",
      },
      {
        question: "¿Puede el brazo industrial manejar soldadura en piezas estructurales grandes?",
        answer: "Sí. Con un alcance de 1,700 mm y opciones de montaje en techo/pared, el brazo industrial puede acceder a grandes piezas de soldadura. Para estructuras muy grandes, diseñamos configuraciones montadas en pista (7mo eje) que permiten al robot recorrer la longitud de la pieza. Contáctenos con la envolvente de su pieza y diseñaremos la distribución de celda apropiada.",
      },
      {
        question: "¿Cuáles son los requisitos de mantenimiento continuo?",
        answer: "El mantenimiento programado es aproximadamente cada 500 horas — principalmente calibración TCP, lubricación de accionamientos y verificación de consumibles en el paquete de antorcha de soldadura. Nuestro sistema de monitoreo en la nube señala anomalías antes de que se conviertan en fallas. VTM ofrece contratos anuales de mantenimiento preventivo a costo fijo.",
      },
      {
        question: "¿Puedo integrar el brazo industrial con mi sistema MES o ERP existente?",
        answer: "Sí. Nuestros controladores de robots industriales soportan protocolos industriales estándar incluyendo OPC-UA, Modbus TCP, EtherNet/IP y PROFINET. La integración con sistemas de monitoreo de producción, lectores de código de barras y cámaras de inspección de calidad es estándar en nuestros proyectos de integración.",
      },
    ],
  },
  cta: {
    sectionLabel: "Comenzar",
    headline: "¿Listo para Automatizar Sus Soldaduras de Alto Volumen?",
    body: "Comparta sus planos de piezas y volumen de producción con nosotros. Regresaremos con un concepto de celda, tiempo de ciclo estimado y un modelo ROI preliminar — antes de que se comprometa a nada.",
    cta1: "Solicitar una Demo",
    cta2: "Hablar con un Especialista",
  },
  related: {
    sectionLabel: "Continúe Explorando",
    headline: "Máquinas Relacionadas",
    items: [
      { name: "Brazo de Soldadura Colaborativo", href: "/automation/collaborative-welding-arm", tag: "Automatización", imageId: "/images/cobot-welding-hero-2.webp" },
      { name: "Cortadora Láser de Chapa", href: "/fabrication/fiber-laser-cutting-machine", tag: "Fabricación", imageId: "/images/fiber-laser-hero.webp" },
      { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", tag: "Plegado", imageId: "/images/cnc-press-brake-hero.webp" },
    ],
  },
};

export const content: Record<string, IndustrialArmContent> = { es };
