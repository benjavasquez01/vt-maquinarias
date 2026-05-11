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

const en: IndustrialArmContent = {
  hero: {
    categoryLabel: "Automation",
    headline: "Industrial\nWelding Arm",
    subheadline: "When volume is high and your parts repeat, the industrial arm runs at 4–5× manual welding speed, 20 hours a day, with zero fatigue and consistent weld quality across every single part.",
    cta1: "Request a Demo",
    cta2: "Download Technical Brief",
    stats: [
      { value: "4–5×", label: "Speed vs. manual" },
      { value: "20 kg", label: "Payload capacity" },
      { value: "±0.05 mm", label: "Repeatability" },
    ],
  },
  value: {
    sectionLabel: "Built for Production",
    headline: "High-volume welding without the staffing constraint",
    body1: "The industrial arm is engineered for one thing: running your highest-volume repeat welds faster, more consistently, and with lower labor cost per part than any other method. It doesn't call in sick. It doesn't have a bad week. Every part it welds looks like the first.",
    body2: "Unlike collaborative robots, the industrial arm is optimized for speed over flexibility. It operates inside a safety-guarded cell, running at full speed without human traffic interruptions — typically 4–5× the output of a skilled manual welder on the same fixture.",
    stats: [
      { stat: "4–5×", label: "The throughput multiplier vs. manual welding on repeat production welds" },
      { stat: "20 hr/day", label: "Typical running time — two shifts with minimal changeover time" },
      { stat: "±0.05 mm", label: "Weld path repeatability — identical torch angle and travel speed on every part" },
      { stat: "0 fatigue", label: "Consistent quality on part #1 and part #10,000 — weld quality never degrades" },
    ],
  },
  specs: {
    sectionLabel: "Technical Specifications",
    headline: "By the Numbers",
    rows: [
      { label: "Payload", imperial: "44 lbs", metric: "20 kg" },
      { label: "Reach", imperial: "66 in", metric: "1,700 mm" },
      { label: "Repeatability", imperial: "±0.002 in", metric: "±0.05 mm" },
      { label: "Axes", imperial: "6", metric: "6" },
      { label: "Max welding current", imperial: "500 A", metric: "500 A" },
      { label: "Welding processes", imperial: "MIG / MAG / TIG / Plasma", metric: "MIG / MAG / TIG / Plasma" },
      { label: "Programming", imperial: "Offline (RoboDK, OLP)", metric: "Offline (RoboDK, OLP)" },
      { label: "Motion speed", imperial: "Up to 250 in/min", metric: "Up to 6,000 mm/min" },
      { label: "Cycle time advantage", imperial: "4–5× manual welding", metric: "4–5× manual welding" },
      { label: "Safety standard", imperial: "ISO 10218-1/-2", metric: "ISO 10218-1/-2" },
      { label: "Mounting", imperial: "Floor, ceiling, wall", metric: "Floor, ceiling, wall" },
      { label: "IP rating", imperial: "IP65", metric: "IP65" },
    ],
  },
  video: {
    sectionLabel: "See It Work",
    headline: "In Action",
  },
  compare: {
    sectionLabel: "Which Robot Is Right?",
    headline: "Industrial vs. Collaborative Arm",
    leftLabel: "Collaborative Arm",
    rightLabel: "Industrial Arm",
    rows: [
      { feature: "Safety cage required", cobot: "No — ISO/TS 15066 compliant", industrial: "Yes — hard guarding mandatory" },
      { feature: "Setup time for new part", cobot: "20–60 min (lead-through)", industrial: "Offline OLP, no production tie-up" },
      { feature: "Payload", cobot: "15 kg (33 lbs)", industrial: "20 kg (44 lbs)" },
      { feature: "Ideal batch size", cobot: "Low–medium volume, mixed parts", industrial: "High volume, dedicated parts" },
      { feature: "Speed advantage", cobot: "2.5× manual welding", industrial: "4–5× manual welding" },
      { feature: "Floor footprint", cobot: "Minimal", industrial: "Dedicated cell required" },
      { feature: "Investment", cobot: "Lower — no cell buildout", industrial: "Higher — full integration project" },
      { feature: "Best fit", cobot: "Shops with mixed products, limited space", industrial: "High-volume production with repeat parts" },
    ],
  },
  integration: {
    sectionLabel: "Full-Service Integration",
    headline: "We Handle the Whole Project",
    phases: [
      { phase: "01", title: "Cell Design", body: "Layout, safety enclosure design, fixture concepts, and cycle-time modeling based on your parts and production targets. Delivered as a formal proposal." },
      { phase: "02", title: "Offline Programming", body: "Weld paths generated from your CAD files before the robot arrives. Simulation-verified for reach, clearance, and weld quality. No production time lost to programming." },
      { phase: "03", title: "Installation & Commissioning", body: "VTM technicians assemble the cell, connect utilities, run the first production parts, and validate weld quality against your drawings." },
      { phase: "04", title: "Operator Training", body: "Your team learns cell operation, program loading, consumable management, and daily maintenance. We don't leave until they're confident." },
      { phase: "05", title: "Remote Monitoring", body: "Cloud-connected controller sends uptime, error, and production data to our support team. Issues flagged automatically before they cause downtime." },
      { phase: "06", title: "Ongoing Support", body: "Annual PM contracts, spare parts from US stock, OLP updates for new parts, and a direct line to VTM application engineers for process questions." },
    ],
  },
  roi: {
    sectionLabel: "Make the Business Case",
    headline: "Calculate Your ROI",
    body: "For high-volume production shops, the industrial arm typically pays back in 12–24 months. Adjust the inputs to your production reality.",
  },
  faq: {
    sectionLabel: "Questions",
    headline: "Frequently Asked",
    items: [
      {
        question: "What is the difference between the industrial arm and the collaborative arm?",
        answer: "The industrial arm is built for speed and throughput in a dedicated, guarded cell. It moves faster, handles heavier loads, and is optimized for high-volume, repeat-production welding. The collaborative arm is slower but can work alongside humans without a cage, making it ideal for smaller shops or mixed-product environments. Both deliver consistent, high-quality welds — the right choice depends on your volume, part mix, and available floor space.",
      },
      {
        question: "How long does it take to integrate an industrial welding robot into my production line?",
        answer: "A typical project from signed order to production-ready is 12–20 weeks. This includes cell design, robot and fixture fabrication, offline programming, factory acceptance testing, and on-site installation and commissioning. For high-volume orders with dedicated parts, offline programming begins during robot build, compressing the timeline.",
      },
      {
        question: "What programming method does the industrial arm use?",
        answer: "We use offline programming (OLP) software — primarily RoboDK — to generate weld paths from your CAD files before the robot arrives. This eliminates tie-up of the production robot during programming and allows thorough path verification in simulation. On-site commissioning fine-tunes weld parameters with real material. Changes to part programs are made offline and uploaded to the controller.",
      },
      {
        question: "Can the industrial arm handle welding on large structural parts?",
        answer: "Yes. With a 1,700mm reach and ceiling/wall mounting options, the industrial arm can access large weldments. For very large structures, we design track-mounted (7th axis) configurations that allow the robot to traverse the length of the part. Contact us with your part envelope and we'll design the appropriate cell layout.",
      },
      {
        question: "What are the ongoing maintenance requirements?",
        answer: "Scheduled maintenance is approximately 500-hour intervals — primarily TCP calibration, drive lubrication, and consumable checks on the welding torch package. Our cloud monitoring system flags anomalies before they become failures. VTM offers annual preventive maintenance contracts that cover inspections, calibration, and consumable replacement at a fixed cost.",
      },
      {
        question: "Can I integrate the industrial arm with my existing MES or ERP system?",
        answer: "Yes. Our industrial robot controllers support standard industry protocols including OPC-UA, Modbus TCP, EtherNet/IP, and PROFINET. Integration with production monitoring systems, barcode scanners, and quality inspection cameras is standard in our integration projects. We work with your IT and engineering teams to define the data handshakes during the design phase.",
      },
    ],
  },
  cta: {
    sectionLabel: "Get Started",
    headline: "Ready to Automate Your High-Volume Welds?",
    body: "Share your part drawings and production volume with us. We'll come back with a cell concept, estimated cycle time, and a preliminary ROI model — before you commit to anything.",
    cta1: "Request a Demo",
    cta2: "Talk to a Specialist",
  },
  related: {
    sectionLabel: "Continue Exploring",
    headline: "Related Machines",
    items: [
      { name: "Collaborative Welding Arm", href: "/automation/collaborative-welding-arm", tag: "Automation", imageId: "/images/cobot-welding-hero-2.webp" },
      { name: "Fiber Laser Sheet Cutting Machine", href: "/fabrication/fiber-laser-cutting-machine", tag: "Fabrication", imageId: "/images/fiber-laser-hero.webp" },
      { name: "CNC Press Brake", href: "/fabrication/cnc-press-brake", tag: "Bending", imageId: "/images/cnc-press-brake-hero.webp" },
    ],
  },
};

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
      { phase: "06", title: "Soporte Continuo", body: "Contratos de mantenimiento preventivo anuales, repuestos de stock en EE.UU., actualizaciones OLP para nuevas piezas y línea directa con ingenieros de aplicaciones VTM para preguntas de proceso." },
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

export const content: Record<"en" | "es", IndustrialArmContent> = { en, es };
