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

const es: CollaborativeArmContent = {
  hero: {
    badge: "NUEVO EN EL MERCADO",
    categoryLabel: "Automatización",
    headline: "Brazo de Soldadura\nColaborativo",
    subheadline: "Implemente una celda de soldadura láser colaborativa de 6 ejes para cordones repetibles, menor distorsión y acabado limpio. Ideal para talleres que necesitan estabilidad de trayectoria, velocidad y menos dependencia de soldadores expertos.",
    cta1: "Solicitar una Demo",
    cta2: "Descargar Catálogo",
    stats: [
      { value: "6 ejes", label: "Brazo colaborativo" },
      { value: "±0.03 mm", label: "Repetibilidad" },
      { value: "0–120 mm/s", label: "Velocidad de soldadura" },
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
        solution: "Un cobot de soldadura láser ejecuta trayectorias repetitivas con velocidad y ángulo constantes. Sus soldadores se enfocan en ajuste, validación de juntas y control de calidad.",
      },
      {
        problem: "Sus soldadores principales se están agotando y sus mejores personas siguen renunciando.",
        solution: "El brazo reduce la exposición directa del operador al arco, humo y calor del proceso. La operación se vuelve más estable y menos dependiente de posturas incómodas.",
      },
      {
        problem: "Está perdiendo licitaciones frente a talleres con menores costos laborales.",
        solution: "La soldadura láser concentra la energía, reduce salpicadura y minimiza el esmerilado posterior. El resultado es menor costo por pieza y ciclos más consistentes.",
      },
      {
        problem: "No tiene el espacio en el piso ni el presupuesto para una celda de robot completa.",
        solution: "El sistema puede integrarse como estación flexible para filetes interiores, filetes exteriores, empalmes, puntos y cordones tipo escama, según el proceso y el accesorio.",
      },
    ],
  },
  specs: {
    sectionLabel: "Especificaciones Técnicas",
    headline: "En Números",
    rows: [
      { label: "Carga útil", imperial: "22 lbs", metric: "10 kg" },
      { label: "Peso del brazo", imperial: "85 lbs", metric: "38.5 kg" },
      { label: "Alcance", imperial: "53 pulg.", metric: "1,350 mm" },
      { label: "Repetibilidad", imperial: "±0.0012 pulg.", metric: "±0.03 mm" },
      { label: "Ejes", imperial: "6", metric: "6" },
      { label: "Velocidad de soldadura", imperial: "0–4.7 pulg./s", metric: "0–120 mm/s" },
      { label: "Espesor de soldadura", imperial: "<0.39 pulg.", metric: "<10 mm" },
      { label: "Separación de junta recomendada", imperial: "≤0.020 pulg.", metric: "≤0.5 mm" },
      { label: "Fuente láser", imperial: "Raycus / MAX / IPG", metric: "Raycus / MAX / IPG" },
      { label: "Procesos", imperial: "Filete interior/exterior, empalme, punto, escama", metric: "Filete interior/exterior, empalme, punto, escama" },
      { label: "Alimentación", imperial: "220 V / 380 V", metric: "220 V / 380 V" },
      { label: "Temperatura de operación", imperial: "59–95 °F", metric: "15–35 °C" },
      { label: "Humedad de trabajo", imperial: "<70%, sin condensación", metric: "<70%, sin condensación" },
    ],
  },
  applications: {
    sectionLabel: "Aplicaciones",
    headline: "Dónde Funciona",
    items: [
      { industry: "Plancha Metálica", material: "Acero, inoxidable, galvanizado", process: "Cordones repetitivos en gabinetes, carcasas y piezas plegadas" },
      { industry: "Cocinas y Baños", material: "Inoxidable, aluminio", process: "Soldadura de fregaderos, muebles metálicos, mesones y estanques livianos" },
      { industry: "Transporte y Rieles", material: "Acero al carbono, aluminio", process: "Sub-ensambles, soportes, uniones de perfiles y piezas estructurales livianas" },
      { industry: "Publicidad y Construcción", material: "Acero, inoxidable, aluminio", process: "Letras, estructuras livianas, marcos, señalética y elementos metálicos visibles" },
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
      { feature: "Carga útil", cobot: "10 kg (22 lbs)", industrial: "Hasta 20 kg (44 lbs)" },
      { feature: "Tamaño de lote ideal", cobot: "Volumen bajo–medio, piezas mixtas", industrial: "Alto volumen, piezas dedicadas" },
      { feature: "Espacio en piso requerido", cobot: "Mínimo — cabe en distribución existente", industrial: "Celda dedicada grande" },
      { feature: "Inversión", cobot: "Menor — sin construcción de celda", industrial: "Mayor — proyecto de integración completo" },
      { feature: "Velocidad", cobot: "0–120 mm/s en soldadura láser", industrial: "4–5× soldadura manual en celda dedicada" },
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
      { title: "Garantía de 12 Meses", body: "Piezas y mano de obra durante los primeros 12 meses. Cobertura extendida disponible. Repuestos en stock en Chile con envío el mismo día. Diagnóstico remoto a través de nuestra plataforma de monitoreo en la nube." },
      { title: "Optimización del Proceso", body: "A los 90 días post-instalación, un ingeniero de aplicaciones VTM revisa los datos de rendimiento de su cobot e identifica oportunidades para mejorar el rendimiento, reducir tiempos de ciclo o agregar nuevas rutas de soldadura." },
      { title: "Consultoría de Accesorios", body: "Diseñamos o conseguimos accesorios para sus primeras tres piezas de producción — el habilitador crítico de soldadura cobot repetible. Si su accesorio cambia, le ayudamos a actualizar el programa." },
      { title: "Soporte Local en Chile", body: "Soporte telefónico, por correo electrónico y por video de nuestro equipo en Chile SLA de respuesta de 4 horas para problemas de producción detenida. Un técnico real contesta el teléfono — sin enrutamiento a centro de llamadas en el extranjero." },
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
        answer: "Hierro/acero al carbono, acero inoxidable, galvanizado y aleaciones de aluminio. Los tipos de junta incluyen filete interior, filete exterior, empalme, punto, cordón tipo escama y uniones de pieza metálica con buena repetibilidad. Para soldadura láser, la preparación de junta importa: la separación recomendada es de hasta 0.5 mm.",
      },
      {
        question: "¿Cuánto cuesta un sistema de soldadura cobot?",
        answer: "Los sistemas base comienzan en el rango de $75,000–$100,000, incluyendo el brazo cobot, fuente de energía de soldadura, paquete de antorcha, controlador y sistemas de seguridad. Los posicionadores, accesorios y mesas de soldadura son adicionales. Contáctenos para un presupuesto específico para su aplicación.",
      },
      {
        question: "¿Qué sucede si el cobot falla durante la producción?",
        answer: "Nos llama. El soporte local en Chile responde dentro de 4 horas para problemas críticos. El diagnóstico remoto a través de nuestra plataforma de monitoreo en la nube puede resolver el 60–70% de los problemas sin una visita del técnico. Cuando se requiere servicio en sitio, se envía un técnico certificado VTM — típicamente el mismo día o al día siguiente dependiendo de su región.",
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
      { name: "Cortadora Láser de Plancha", href: "/fabrication/fiber-laser-cutting-machine", tag: "Fabricación", imageId: "/images/fiber-laser-hero.webp" },
      { name: "Máquina Soldadora Láser", href: "/fabrication/4-in-1-laser-machine", tag: "Soldadura", imageId: "/images/4in1-laser-hero-2.webp" },
    ],
  },
};

export const content: Record<string, CollaborativeArmContent> = { es };
