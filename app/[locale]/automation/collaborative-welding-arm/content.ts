import type { SpecRow } from "@/components/product/GenericSpecsTable";
import type { FaqItem } from "@/components/product/GenericFaqAccordion";

export interface ProblemSolution {
  problem: string;
  solution: string;
}

export interface Application {
  industry: string;
  material: string;
  process: string;
}

export interface ComparisonRow {
  feature: string;
  cobot: string;
  industrial: string;
}

export interface SupportItem {
  title: string;
  body: string;
}

export interface RelatedItem {
  name: string;
  href: string;
  tag: string;
  imageId: string;
}

export interface CollaborativeArmContent {
  hero: {
    badge: string;
    categoryLabel: string;
    headline: string;
    subheadline: string;
    cta1: string;
    cta2: string;
    stats: Array<{ value: string; label: string }>;
  };
  challenge: {
    sectionLabel: string;
    headline: string;
    problemLabel: string;
    solutionLabel: string;
    items: ProblemSolution[];
  };
  specs: { sectionLabel: string; headline: string; rows: SpecRow[] };
  applications: { sectionLabel: string; headline: string; items: Application[] };
  compare: {
    sectionLabel: string;
    headline: string;
    leftLabel: string;
    rightLabel: string;
    rows: ComparisonRow[];
    note: string;
    noteLink: string;
  };
  support: { sectionLabel: string; headline: string; items: SupportItem[] };
  roi: { sectionLabel: string; headline: string; body: string };
  faq: { sectionLabel: string; headline: string; items: FaqItem[] };
  cta: { sectionLabel: string; headline: string; body: string; cta1: string; cta2: string };
  related: { sectionLabel: string; headline: string; items: RelatedItem[] };
}

const en: CollaborativeArmContent = {
  hero: {
    badge: "NEW TO THE US MARKET",
    categoryLabel: "Automation",
    headline: "Collaborative\nWelding Arm",
    subheadline: "Deploy a safe, flexible cobot welding cell in 6 weeks — no cage, no dedicated cell, no specialist programmer required. Runs alongside your team on day one.",
    cta1: "Request a Demo",
    cta2: "Download Technical Brief",
    stats: [
      { value: "6 wks", label: "Typical deployment" },
      { value: "2.5×", label: "Speed vs. manual" },
      { value: "ISO/TS 15066", label: "Safety standard" },
    ],
  },
  challenge: {
    sectionLabel: "The Challenge",
    headline: "The welding labor shortage isn't getting better. This is how shops survive it.",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    items: [
      {
        problem: "You're quoting jobs you can't take — because you don't have enough welders.",
        solution: "One cobot handles the repetitive production welds your skilled welders hate doing. They focus on fit-up, complex joints, and quality — the work that actually needs their expertise.",
      },
      {
        problem: "Your lead welders are burning out and your best people keep leaving.",
        solution: "Cobots handle 80% of repetitive bead running. Your welders spend less time in discomfort and more time on the work that demands their skill. Turnover drops when the job gets better.",
      },
      {
        problem: "You're losing bids to shops with lower labor costs.",
        solution: "At 2.5× the speed of manual welding, the cobot compresses your cost per part below what your competitors can match with bodies alone — without replacing the people you need.",
      },
      {
        problem: "You don't have the floor space or budget for a full robot cell.",
        solution: "No cage. No dedicated cell. The cobot sits alongside your existing workflow, in your existing floor plan. Deploy it in the morning, run it alongside your team in the afternoon.",
      },
    ],
  },
  specs: {
    sectionLabel: "Technical Specifications",
    headline: "By the Numbers",
    rows: [
      { label: "Payload", imperial: "33 lbs", metric: "15 kg" },
      { label: "Reach", imperial: "51 in", metric: "1,300 mm" },
      { label: "Repeatability", imperial: "±0.002 in", metric: "±0.05 mm" },
      { label: "Axes", imperial: "6", metric: "6" },
      { label: "Max welding current", imperial: "300 A", metric: "300 A" },
      { label: "Welding processes", imperial: "MIG / MAG / TIG", metric: "MIG / MAG / TIG" },
      { label: "Programming", imperial: "Lead-through + teach pendant", metric: "Lead-through + teach pendant" },
      { label: "Safety standard", imperial: "ISO/TS 15066 compliant", metric: "ISO/TS 15066 compliant" },
      { label: "Deployment time", imperial: "~6 weeks", metric: "~6 weeks" },
      { label: "Operating temp", imperial: "32–104 °F", metric: "0–40 °C" },
      { label: "IP rating", imperial: "IP54", metric: "IP54" },
    ],
  },
  applications: {
    sectionLabel: "Applications",
    headline: "Where It Works",
    items: [
      { industry: "Metal Fabrication", material: "Mild steel, SS", process: "Structural fillet welds, enclosure fabrication" },
      { industry: "HVAC & Sheet Metal", material: "Galvanized, aluminum", process: "Duct seam welding, bracket fabrication" },
      { industry: "Automotive Parts", material: "HSLA steel, aluminum", process: "Sub-assembly welding, bracket and bracket welds" },
      { industry: "Industrial Equipment", material: "Heavy gauge steel", process: "Frame welding, tank seams, multi-pass fills" },
    ],
  },
  compare: {
    sectionLabel: "Which Robot Is Right?",
    headline: "Cobot vs. Industrial Arm",
    leftLabel: "Collaborative Arm",
    rightLabel: "Industrial Arm",
    rows: [
      { feature: "Safety cage required", cobot: "No — ISO/TS 15066 compliant", industrial: "Yes — hard guarding mandatory" },
      { feature: "Setup time for new part", cobot: "20–60 min (lead-through)", industrial: "4–8 hrs (offline programming)" },
      { feature: "Payload", cobot: "Up to 33 lbs (15 kg)", industrial: "Up to 44 lbs (20 kg)" },
      { feature: "Ideal batch size", cobot: "Low–medium volume, mixed parts", industrial: "High volume, dedicated parts" },
      { feature: "Floor space required", cobot: "Minimal — fits in existing layout", industrial: "Large dedicated cell" },
      { feature: "Investment", cobot: "Lower — no cell buildout", industrial: "Higher — full integration project" },
      { feature: "Speed", cobot: "2.5× manual welding", industrial: "4–5× manual welding" },
      { feature: "Collaboration with humans", cobot: "Yes — works alongside operators", industrial: "No — isolated from human traffic" },
    ],
    note: "Not sure which is right for your production volume and part mix?",
    noteLink: "Talk to a VTM machine specialist",
  },
  support: {
    sectionLabel: "What's Included",
    headline: "Integration & Support",
    items: [
      { title: "On-Site Installation", body: "VTM technicians install the cobot, configure the welding package, and commission the system at your facility. We don't leave until it's making production parts." },
      { title: "Operator Training", body: "Full training for your welders and supervisors — lead-through programming, teach pendant operation, fixture setup, and safety procedures. Included in every deployment." },
      { title: "12-Month Warranty", body: "Parts and labor for the first 12 months. Extended coverage available. US-stocked spare parts ship same day. Remote diagnostics via our cloud monitoring platform." },
      { title: "Process Optimization", body: "At 90 days post-install, a VTM application engineer reviews your cobot's performance data and identifies opportunities to improve throughput, reduce cycle times, or add new weld paths." },
      { title: "Fixture Consulting", body: "We design or source fixtures for your first three production parts — the critical enabler of repeatable cobot welding. If your fixture changes, we help you update the program." },
      { title: "US-Based Support", body: "Phone, email, and video support from our US team. 4-hour response SLA for production-down issues. A real technician picks up the phone — no offshore call center routing." },
    ],
  },
  roi: {
    sectionLabel: "Make the Business Case",
    headline: "What's It Worth to Your Shop?",
    body: "Adjust the inputs below to your production reality. The payback period is typically 18–36 months for high-mix, medium-volume shops.",
  },
  faq: {
    sectionLabel: "Questions",
    headline: "Frequently Asked",
    items: [
      {
        question: "Do I need a safety cage for the collaborative welding arm?",
        answer: "No. The cobot uses force-sensing and speed-monitoring technology that meets ISO/TS 15066 — the international standard for collaborative robot safety. It automatically reduces speed or stops when it detects a human in its work envelope. No perimeter cage required, which is exactly what makes cobots valuable in smaller shops where floor space is at a premium.",
      },
      {
        question: "How long does programming a new weld path take?",
        answer: "Simple weld paths take 20–60 minutes using lead-through programming — you physically guide the arm through the motion and save the sequence. More complex multi-pass, multi-position welds may take a few hours to program and validate. Our team programs your first three production fixtures during installation, so you're running real parts from day one.",
      },
      {
        question: "What materials and joint types does it handle?",
        answer: "Mild steel, stainless steel, aluminum, and galvanized sheet — all common metals in fabrication and manufacturing shops. Joint types include butt welds, fillet welds, lap joints, and T-joints. The system adapts to flat, horizontal, vertical, and overhead positions. If your skilled welder can do it, the cobot can be programmed to do it.",
      },
      {
        question: "How much does a cobot welding system cost?",
        answer: "Base systems start in the $75,000–$100,000 range, including the cobot arm, welding power source, torch package, controller, and safety systems. Positioners, fixtures, and welding tables are additional. Contact us for a quote specific to your application — we'll tell you what configuration fits your parts and production volume, and we'll build the ROI case with real numbers.",
      },
      {
        question: "What happens if the cobot breaks down mid-production?",
        answer: "You call us. US-based support responds within 4 hours for critical issues. Remote diagnostics via our cloud monitoring platform can resolve 60–70% of issues without a technician visit. Where on-site service is required, a VTM-certified technician is dispatched — typically same-day or next-day depending on your region.",
      },
      {
        question: "Can I use the cobot for other tasks beyond welding?",
        answer: "Yes. The cobot arm itself is a general-purpose robot — the welding torch package can be swapped for a gripper, grinder, or camera-inspection end effector. If your shop finds uses for it beyond welding, we can source or custom-design alternative tooling. This is one of the key advantages of a collaborative arm over a fixed-purpose welding machine.",
      },
    ],
  },
  cta: {
    sectionLabel: "Next Step",
    headline: "See It Weld Your Parts",
    body: "We offer remote demos using your own part geometry — send us your DXF or STEP file and we'll show you what the cobot produces. No commitment required.",
    cta1: "Request a Demo",
    cta2: "Talk to a Specialist",
  },
  related: {
    sectionLabel: "Continue Exploring",
    headline: "Related Machines",
    items: [
      { name: "Industrial Welding Arm", href: "/automation/industrial-welding-arm", tag: "Automation", imageId: "/images/industrial-welding-arm-hero.png" },
      { name: "Fiber Laser Sheet Cutting Machine", href: "/fabrication/fiber-laser-cutting-machine", tag: "Fabrication", imageId: "/images/fiber-laser-hero.png" },
      { name: "Laser Welding Machine", href: "/fabrication/4-in-1-laser-machine", tag: "Welding", imageId: "/images/4in1-laser-hero-2.png" },
    ],
  },
};

const es: CollaborativeArmContent = {
  hero: {
    badge: "NUEVO EN EL MERCADO EE.UU.",
    categoryLabel: "Automatización",
    headline: "Brazo de Soldadura\nColaborativo",
    subheadline: "Implemente una celda de soldadura cobot segura y flexible en 6 semanas — sin jaula, sin celda dedicada, sin programador especialista requerido. Funciona junto a su equipo desde el primer día.",
    cta1: "Solicitar una Demo",
    cta2: "Descargar Ficha Técnica",
    stats: [
      { value: "6 sem.", label: "Implementación típica" },
      { value: "2.5×", label: "Velocidad vs. manual" },
      { value: "ISO/TS 15066", label: "Estándar de seguridad" },
    ],
  },
  challenge: {
    sectionLabel: "El Desafío",
    headline: "La escasez de mano de obra en soldadura no va a mejorar. Así es como los talleres sobreviven.",
    problemLabel: "Problema",
    solutionLabel: "Solución",
    items: [
      {
        problem: "Está cotizando trabajos que no puede tomar — porque no tiene suficientes soldadores.",
        solution: "Un cobot maneja las soldaduras de producción repetitivas que sus soldadores calificados detestan hacer. Ellos se enfocan en el ajuste, juntas complejas y calidad — el trabajo que realmente necesita su experiencia.",
      },
      {
        problem: "Sus soldadores principales se están agotando y sus mejores personas siguen renunciando.",
        solution: "Los cobots manejan el 80% de la ejecución de cordones repetitivos. Sus soldadores pasan menos tiempo en incomodidad y más tiempo en el trabajo que exige su habilidad. La rotación disminuye cuando el trabajo mejora.",
      },
      {
        problem: "Está perdiendo licitaciones frente a talleres con menores costos laborales.",
        solution: "A 2.5× la velocidad de la soldadura manual, el cobot reduce su costo por pieza por debajo de lo que sus competidores pueden igualar solo con personal — sin reemplazar a las personas que necesita.",
      },
      {
        problem: "No tiene el espacio en el piso ni el presupuesto para una celda de robot completa.",
        solution: "Sin jaula. Sin celda dedicada. El cobot se sienta junto a su flujo de trabajo existente, en su plano de piso existente. Impleméntelo en la mañana, ejecútelo junto a su equipo en la tarde.",
      },
    ],
  },
  specs: {
    sectionLabel: "Especificaciones Técnicas",
    headline: "En Números",
    rows: [
      { label: "Carga útil", imperial: "33 lbs", metric: "15 kg" },
      { label: "Alcance", imperial: "51 pulg.", metric: "1,300 mm" },
      { label: "Repetibilidad", imperial: "±0.002 pulg.", metric: "±0.05 mm" },
      { label: "Ejes", imperial: "6", metric: "6" },
      { label: "Corriente máx. de soldadura", imperial: "300 A", metric: "300 A" },
      { label: "Procesos de soldadura", imperial: "MIG / MAG / TIG", metric: "MIG / MAG / TIG" },
      { label: "Programación", imperial: "Guiado manual + teach pendant", metric: "Guiado manual + teach pendant" },
      { label: "Estándar de seguridad", imperial: "Cumple ISO/TS 15066", metric: "Cumple ISO/TS 15066" },
      { label: "Tiempo de implementación", imperial: "~6 semanas", metric: "~6 semanas" },
      { label: "Temperatura de operación", imperial: "32–104 °F", metric: "0–40 °C" },
      { label: "Clasificación IP", imperial: "IP54", metric: "IP54" },
    ],
  },
  applications: {
    sectionLabel: "Aplicaciones",
    headline: "Dónde Funciona",
    items: [
      { industry: "Fabricación Metálica", material: "Acero dulce, inoxidable", process: "Soldaduras de filete estructural, fabricación de gabinetes" },
      { industry: "HVAC y Chapa Metálica", material: "Galvanizado, aluminio", process: "Soldadura de costuras de ductos, fabricación de soportes" },
      { industry: "Partes Automotrices", material: "Acero HSLA, aluminio", process: "Soldadura de sub-ensambles, soldaduras de soportes" },
      { industry: "Equipo Industrial", material: "Acero de calibre pesado", process: "Soldadura de marcos, costuras de tanques, rellenos multipasada" },
    ],
  },
  compare: {
    sectionLabel: "¿Qué Robot es Correcto?",
    headline: "Cobot vs. Brazo Industrial",
    leftLabel: "Brazo Colaborativo",
    rightLabel: "Brazo Industrial",
    rows: [
      { feature: "Jaula de seguridad requerida", cobot: "No — cumple ISO/TS 15066", industrial: "Sí — protección rígida obligatoria" },
      { feature: "Tiempo de configuración para nueva pieza", cobot: "20–60 min (guiado manual)", industrial: "4–8 hrs (programación fuera de línea)" },
      { feature: "Carga útil", cobot: "Hasta 33 lbs (15 kg)", industrial: "Hasta 44 lbs (20 kg)" },
      { feature: "Tamaño de lote ideal", cobot: "Volumen bajo–medio, piezas mixtas", industrial: "Alto volumen, piezas dedicadas" },
      { feature: "Espacio en piso requerido", cobot: "Mínimo — cabe en distribución existente", industrial: "Celda dedicada grande" },
      { feature: "Inversión", cobot: "Menor — sin construcción de celda", industrial: "Mayor — proyecto de integración completo" },
      { feature: "Velocidad", cobot: "2.5× soldadura manual", industrial: "4–5× soldadura manual" },
      { feature: "Colaboración con humanos", cobot: "Sí — trabaja junto a operadores", industrial: "No — aislado del tráfico humano" },
    ],
    note: "¿No está seguro de cuál es el correcto para su volumen de producción y mezcla de piezas?",
    noteLink: "Hable con un especialista de máquinas VTM",
  },
  support: {
    sectionLabel: "Qué Está Incluido",
    headline: "Integración y Soporte",
    items: [
      { title: "Instalación en Sitio", body: "Los técnicos VTM instalan el cobot, configuran el paquete de soldadura y ponen en marcha el sistema en su instalación. No nos vamos hasta que esté produciendo piezas de producción." },
      { title: "Capacitación del Operador", body: "Capacitación completa para sus soldadores y supervisores — programación guiada manual, operación del teach pendant, configuración de accesorios y procedimientos de seguridad. Incluida en cada implementación." },
      { title: "Garantía de 12 Meses", body: "Piezas y mano de obra durante los primeros 12 meses. Cobertura extendida disponible. Repuestos en stock en EE.UU. con envío el mismo día. Diagnóstico remoto a través de nuestra plataforma de monitoreo en la nube." },
      { title: "Optimización del Proceso", body: "A los 90 días post-instalación, un ingeniero de aplicaciones VTM revisa los datos de rendimiento de su cobot e identifica oportunidades para mejorar el rendimiento, reducir tiempos de ciclo o agregar nuevas rutas de soldadura." },
      { title: "Consultoría de Accesorios", body: "Diseñamos o conseguimos accesorios para sus primeras tres piezas de producción — el habilitador crítico de soldadura cobot repetible. Si su accesorio cambia, le ayudamos a actualizar el programa." },
      { title: "Soporte con Base en EE.UU.", body: "Soporte telefónico, por correo electrónico y por video de nuestro equipo en EE.UU. SLA de respuesta de 4 horas para problemas de producción detenida. Un técnico real contesta el teléfono — sin enrutamiento a centro de llamadas en el extranjero." },
    ],
  },
  roi: {
    sectionLabel: "Haga el Caso de Negocio",
    headline: "¿Cuánto Vale para Su Taller?",
    body: "Ajuste las entradas a su realidad de producción. El período de recuperación es típicamente de 18–36 meses para talleres de volumen medio y alta variedad.",
  },
  faq: {
    sectionLabel: "Preguntas",
    headline: "Preguntas Frecuentes",
    items: [
      {
        question: "¿Necesito una jaula de seguridad para el brazo de soldadura colaborativo?",
        answer: "No. El cobot usa tecnología de detección de fuerza y monitoreo de velocidad que cumple con ISO/TS 15066 — el estándar internacional para seguridad de robots colaborativos. Reduce automáticamente la velocidad o se detiene cuando detecta un humano en su envolvente de trabajo. No se requiere jaula perimetral, que es exactamente lo que hace valiosos a los cobots en talleres más pequeños donde el espacio en el piso es limitado.",
      },
      {
        question: "¿Cuánto tiempo tarda programar una nueva ruta de soldadura?",
        answer: "Las rutas de soldadura simples toman 20–60 minutos usando programación guiada manual — usted guía físicamente el brazo a través del movimiento y guarda la secuencia. Las soldaduras multipasada y multiposición más complejas pueden tomar algunas horas para programar y validar. Nuestro equipo programa sus primeros tres accesorios de producción durante la instalación, para que esté produciendo piezas reales desde el primer día.",
      },
      {
        question: "¿Qué materiales y tipos de juntas maneja?",
        answer: "Acero dulce, acero inoxidable, aluminio y lámina galvanizada — todos los metales comunes en talleres de fabricación y manufactura. Los tipos de junta incluyen soldaduras a tope, soldaduras de filete, juntas de traslape y juntas en T. El sistema se adapta a posiciones plana, horizontal, vertical y en techo. Si su soldador calificado puede hacerlo, el cobot puede ser programado para hacerlo.",
      },
      {
        question: "¿Cuánto cuesta un sistema de soldadura cobot?",
        answer: "Los sistemas base comienzan en el rango de $75,000–$100,000, incluyendo el brazo cobot, fuente de energía de soldadura, paquete de antorcha, controlador y sistemas de seguridad. Los posicionadores, accesorios y mesas de soldadura son adicionales. Contáctenos para un presupuesto específico para su aplicación.",
      },
      {
        question: "¿Qué sucede si el cobot falla durante la producción?",
        answer: "Nos llama. El soporte con base en EE.UU. responde dentro de 4 horas para problemas críticos. El diagnóstico remoto a través de nuestra plataforma de monitoreo en la nube puede resolver el 60–70% de los problemas sin una visita del técnico. Cuando se requiere servicio en sitio, se envía un técnico certificado VTM — típicamente el mismo día o al día siguiente dependiendo de su región.",
      },
      {
        question: "¿Puedo usar el cobot para otras tareas además de la soldadura?",
        answer: "Sí. El brazo cobot en sí es un robot de propósito general — el paquete de antorcha de soldadura se puede cambiar por un gripper, amoladora o efector final de inspección por cámara. Si su taller encuentra usos para él más allá de la soldadura, podemos conseguir o diseñar herramientas alternativas a medida.",
      },
    ],
  },
  cta: {
    sectionLabel: "Próximo Paso",
    headline: "Véalo Soldar Sus Piezas",
    body: "Ofrecemos demos remotas usando la geometría de sus propias piezas — envíenos su archivo DXF o STEP y le mostraremos lo que produce el cobot. Sin compromiso requerido.",
    cta1: "Solicitar una Demo",
    cta2: "Hablar con un Especialista",
  },
  related: {
    sectionLabel: "Continúe Explorando",
    headline: "Máquinas Relacionadas",
    items: [
      { name: "Brazo de Soldadura Industrial", href: "/automation/industrial-welding-arm", tag: "Automatización", imageId: "/images/industrial-welding-arm-hero.png" },
      { name: "Máquina de Corte Láser de Fibra para Chapa", href: "/fabrication/fiber-laser-cutting-machine", tag: "Fabricación", imageId: "/images/fiber-laser-hero.png" },
      { name: "Máquina de Soldadura Láser", href: "/fabrication/4-in-1-laser-machine", tag: "Soldadura", imageId: "/images/4in1-laser-hero-2.png" },
    ],
  },
};

export const content: Record<"en" | "es", CollaborativeArmContent> = { en, es };
