import type { ProductPageData } from "@/components/product/ProductPageTemplate";

const en: ProductPageData = {
  category: "Fabrication",
  slug: "cnc-press-brake",
  machineName: "CNC Press Brake",
  heroSubheadline:
    "40 to 400 ton CNC hydraulic press brake. Graphic CNC touchscreen controller with 3D bending simulation, 4+1 to 8+1 axis back gauge, automatic crowning compensation, and ±0.01 mm repeatability across every part.",
  heroImageId: "/images/cnc-press-brake-hero.png",
  features: [
    {
      number: "01",
      headline: "±0.01 mm Repeatability — Part After Part",
      body: "Dual-cylinder synchronization via electrohydraulic servo valves maintains ram position accuracy to ±0.01 mm throughout the stroke. Closed-loop linear encoders on both cylinders catch any deviation before it affects the bend. First-article accuracy holds through the entire production run.",
      spec: { label: "Repeatability", value: "±0.01 mm" },
      imageId: "/images/cnc-press-brake-feature-01-repeatability.jpeg",
    },
    {
      number: "02",
      headline: "Graphic CNC Controller — Bend Simulation Before You Press",
      body: "The touchscreen controller can render a graphical simulation of your entire bend sequence before the machine moves a millimeter. Collision detection runs automatically — the controller flags tooling conflicts and resequences the program to avoid them. Tonnage is auto-calculated per bend. Import DXF files directly from your CAD system and store unlimited tooling profiles in the library. Operators spend less time at the control and more time running parts.",
      spec: { label: "Controller", value: "Graphical" },
      imageId: "/images/cnc-press-brake-feature-02-controller.jpeg",
    },
    {
      number: "03",
      headline: "Automatic Crowning Compensation",
      body: "Long beams deflect under load — producing a slight camber in the center of the bend that wrecks angular consistency across a 10-foot part. VTM press brakes use a hydraulic crowning system that actively compensates for ram deflection based on real-time tonnage, maintaining uniform angle from end to end.",
      spec: { label: "Crowning", value: "Automatic" },
      imageId: "/images/cnc-press-brake-feature-03-crowning.png",
    },
    {
      number: "04",
      headline: "4+1 to 8+1 Axis Back Gauge — Complex Parts, Simple Setup",
      body: "X, R, Z1, and Z2 axes on the back gauge allow independent positioning of each finger — critical for flanges at multiple depths, offset bends, and parts that taper. Every back gauge position is stored in the part program and recalled automatically when you run the same job again.",
      spec: { label: "Back Gauge", value: "4+1 to 8+1 axis" },
      imageId: "/images/cnc-press-brake-feature-04-backgauge.png",
    },
    {
      number: "05",
      headline: "Auto Tool Change — Zero Setup Time on Mixed Jobs",
      body: "The optional hydraulic tool change system repositions the punch and die within the programmed sequence — no manual tooling movement between bends. On a job with four tool setups, auto tool change eliminates 10–15 minutes of down time. On high-mix lines running dozens of SKUs, the payback is immediate.",
      spec: { label: "Tool Change", value: "Auto (optional)" },
      imageId: "/images/cnc-press-brake-feature-05-toolchange.webp",
    },
  ],
  specs: [
    { label: "Tonnage Options", imperial: "40T / 80T / 110T / 160T / 220T / 400T", metric: "40T / 80T / 110T / 160T / 220T / 400T" },
    { label: "Bending Length", imperial: "98\"–236\" (8'–20')", metric: "2500–6000 mm" },
    { label: "Ram Stroke", imperial: "6\"–8\"", metric: "150–200 mm" },
    { label: "Approach Speed", imperial: "394 in/min", metric: "100 mm/s" },
    { label: "Bending Speed", imperial: "0.4\"–0.8\"/s (adjustable)", metric: "10–20 mm/s (adjustable)" },
    { label: "Return Speed", imperial: "315 in/min", metric: "80 mm/s" },
    { label: "Back Gauge Axes", imperial: "4+1 to 8+1 axis", metric: "4+1 to 8+1 axis" },
    { label: "Back Gauge X Travel", imperial: "0–23.6\"", metric: "0–600 mm" },
    { label: "Positioning Accuracy", imperial: "±0.0004\"", metric: "±0.01 mm" },
    { label: "Controller", imperial: "Graphical", metric: "Graphical" },
    { label: "Crowning System", imperial: "Hydraulic auto-crowning", metric: "Hydraulic auto-crowning" },
    { label: "Max Material Thickness (mild steel)", imperial: "0.625\" at 40T / 1\" at 160T", metric: "16 mm at 40T / 25 mm at 160T" },
    { label: "Power Supply", imperial: "480V, 3-phase, 60 Hz", metric: "380V, 3-phase, 50 Hz" },
  ],
  videoSectionLabel: "See It Bend",
  videoHeadline: "Complex Parts, First-Part Accuracy",
  configOptions: [
    {
      label: "Tonnage",
      options: ["40T — light gauge sheet metal, up to 8 ft", "80T — general fabrication", "110T — structural profiles up to 10 ft", "160T — heavy plate to 0.75\"", "220T — stainless and thick aluminum", "400T — heavy structural fabrication"],
      note: "Tonnage selection depends on your thickest material, widest bend, and material tensile strength. VTM engineers will size correctly for your work.",
    },
    {
      label: "Bending Length",
      options: ["98\" (2500 mm)", "118\" (3000 mm)", "157\" (4000 mm)", "197\" (5000 mm)", "236\" (6000 mm)"],
      note: "Match to your longest standard sheet or profile. Longer beds require proportionally higher tonnage to maintain accuracy.",
    },
    {
      label: "Tooling Package",
      options: ["Standard European-style tooling set", "Amada-compatible tooling", "Auto tool change system (hydraulic)", "Wila precision tooling upgrade"],
      note: "Wila precision tooling offers clamping accuracy to ±0.001\" — recommended for tight-tolerance aerospace and medical work.",
    },
  ],
  comparisonLabel: "Technology",
  comparisonHeadline: "CNC Press Brake vs. Manual Press Brake",
  comparisonOursLabel: "CNC Press Brake",
  comparisonTheirsLabel: "Manual Press Brake",
  comparison: [
    { feature: "Repeatability", ours: "±0.01 mm", theirs: "±0.5 mm or worse" },
    { feature: "Setup time per job", ours: "5–15 min (program recalled)", theirs: "30–60 min (manual trial and error)" },
    { feature: "3D bend simulation", ours: "Yes — collision detection included", theirs: "None" },
    { feature: "Back gauge", ours: "4+1 to 8+1 axis CNC", theirs: "Manual single-axis" },
    { feature: "Crowning compensation", ours: "Automatic", theirs: "Manual shims (if available)" },
    { feature: "Operator skill required", ours: "Low — controller guides operator", theirs: "High — experienced operator essential" },
    { feature: "Part-to-part consistency", ours: "Identical", theirs: "Operator-dependent variation" },
    { feature: "Initial cost", ours: "Higher", theirs: "Lower" },
  ],
  relatedProducts: [
    { name: "Guillotine & Swing Beam Shearing", href: "/fabrication/shearing-machine", tag: "Shearing", imageId: "/images/cnc-press-brake-feature-03-crowning.png" },
    { name: "Ironworker", href: "/fabrication/ironworker", tag: "Multi-Function", imageId: "/images/cnc-press-brake-feature-04-backgauge.png" },
    { name: "Fiber Laser Cutting Machine", href: "/fabrication/fiber-laser-cutting-machine", tag: "Cutting", imageId: "/images/fiber-laser-hero.png" },
    { name: "Laser Welding Machine", href: "/fabrication/4-in-1-laser-machine", tag: "Welding", imageId: "/images/4in1-laser-hero-2.png" },
  ],
  faqs: [
    {
      question: "Is the tooling compatible with my existing punch and die sets?",
      answer: "VTM press brakes ship configured for standard European-style (Wila/Wilson) tooling, which is compatible with the majority of aftermarket tooling available in the US. Amada-style tool holders are available as a configuration option. If you have existing tooling you want to keep using, share the tooling profile with your VTM sales engineer before ordering — we'll confirm compatibility or recommend an adapter.",
    },
    {
      question: "How difficult is programming on the CNC controller?",
      answer: "The graphic CNC controller uses a touchscreen interface with 3D part visualization. Most operators reach full programming proficiency within 2–3 days of training. DXF files from your CAD system can be imported directly — the controller auto-generates the bend sequence and calculates tonnage. VTM includes 2 days of on-site programming training with every machine.",
    },
    {
      question: "How do I select the right tonnage for my work?",
      answer: "Tonnage is determined by material type, thickness, tensile strength, and bend length. As a rough guideline for mild steel: 1\" material over a 10-foot bend requires approximately 150 tons. Your VTM sales engineer will calculate the required tonnage for your specific jobs before recommending a machine. It is better to have more tonnage than you need — running a 110-ton machine at 40% capacity is more accurate and extends machine life compared to running at 95%.",
    },
    {
      question: "What is the lead time and installation process?",
      answer: "Standard lead time is 10–14 weeks from confirmed order. VTM's installation team handles rigging coordination, leveling (precision-shimmed to 0.1 mm/m), hydraulic and electrical commissioning, and first-article verification bends. Installation typically takes 1–2 days depending on machine size. Operator and programming training follows immediately after commissioning.",
    },
    {
      question: "Can I add automatic tool change later?",
      answer: "The auto tool change system must be specified at time of order — it requires specific hydraulic provisions and ram geometry that cannot be retrofitted after manufacture. If there's any possibility you'll want it in the future, we recommend specifying it upfront. The productivity gain on high-mix production makes it one of the highest-ROI options available.",
    },
  ],
};

const es: ProductPageData = {
  category: "Fabricación",
  slug: "cnc-press-brake",
  machineName: "Prensa Dobladora CNC",
  heroSubheadline:
    "Prensa dobladora hidráulica CNC de 40 a 400 toneladas. Controlador táctil CNC gráfico con simulación de doblado 3D, tope trasero de 4+1 a 8+1 ejes, compensación automática de arqueado y repetibilidad de ±0.01 mm en cada pieza.",
  heroImageId: "/images/cnc-press-brake-hero.png",
  features: [
    {
      number: "01",
      headline: "Repetibilidad de ±0.01 mm — Pieza Tras Pieza",
      body: "La sincronización de doble cilindro mediante válvulas servo electrohidráulicas mantiene la precisión de posición del carnero en ±0.01 mm durante todo el recorrido. Los encoders lineales de bucle cerrado en ambos cilindros detectan cualquier desviación antes de que afecte el doblez. La precisión de la primera pieza se mantiene durante toda la producción.",
      spec: { label: "Repetibilidad", value: "±0.01 mm" },
      imageId: "/images/cnc-press-brake-feature-01-repeatability.jpeg",
    },
    {
      number: "02",
      headline: "Controlador CNC Gráfico — Simulación de Doblado Antes de Presionar",
      body: "El controlador táctil puede renderizar una simulación gráfica completa de toda la secuencia de doblado antes de que la máquina mueva un milímetro. La detección de colisiones se ejecuta automáticamente — el controlador señala conflictos de herramientas y reordena el programa para evitarlos. El tonelaje se calcula automáticamente por doblez. Importe archivos DXF directamente desde su sistema CAD y almacene perfiles de herramientas ilimitados en la biblioteca. Los operadores pasan menos tiempo en el control y más tiempo produciendo piezas.",
      spec: { label: "Controlador", value: "Gráfico" },
      imageId: "/images/cnc-press-brake-feature-02-controller.jpeg",
    },
    {
      number: "03",
      headline: "Compensación Automática de Arqueado",
      body: "Las vigas largas se flexionan bajo carga — produciendo una ligera curvatura en el centro del doblez que arruina la consistencia angular en toda una pieza de 10 pies. Las prensas dobladoras VTM usan un sistema de arqueado hidráulico que compensa activamente la deflexión del carnero basándose en el tonelaje en tiempo real.",
      spec: { label: "Arqueado", value: "Automático" },
      imageId: "/images/cnc-press-brake-feature-03-crowning.png",
    },
    {
      number: "04",
      headline: "Tope Trasero de 4+1 a 8+1 Ejes — Piezas Complejas, Configuración Simple",
      body: "Los ejes X, R, Z1 y Z2 en el tope trasero permiten el posicionamiento independiente de cada dedo — crítico para bridas a múltiples profundidades, dobleces desplazados y piezas que se afinan. Cada posición del tope trasero se almacena en el programa de la pieza y se recuerda automáticamente cuando se ejecuta el mismo trabajo nuevamente.",
      spec: { label: "Tope Trasero", value: "4+1 a 8+1 ejes" },
      imageId: "/images/cnc-press-brake-feature-04-backgauge.png",
    },
    {
      number: "05",
      headline: "Cambio Automático de Herramientas — Cero Tiempo de Configuración",
      body: "El sistema opcional de cambio hidráulico de herramientas reposiciona el punzón y la matriz dentro de la secuencia programada — sin movimiento manual de herramientas entre dobleces. En un trabajo con cuatro configuraciones de herramientas, el cambio automático elimina 10–15 minutos de tiempo de inactividad.",
      spec: { label: "Cambio de Herramientas", value: "Automático (opcional)" },
      imageId: "/images/cnc-press-brake-feature-05-toolchange.webp",
    },
  ],
  specs: [
    { label: "Opciones de Tonelaje", imperial: "40T / 80T / 110T / 160T / 220T / 400T", metric: "40T / 80T / 110T / 160T / 220T / 400T" },
    { label: "Longitud de Doblado", imperial: "98\"–236\" (8'–20')", metric: "2500–6000 mm" },
    { label: "Recorrido del Carnero", imperial: "6\"–8\"", metric: "150–200 mm" },
    { label: "Velocidad de Aproximación", imperial: "394 pulg/min", metric: "100 mm/s" },
    { label: "Velocidad de Doblado", imperial: "0.4\"–0.8\"/s (ajustable)", metric: "10–20 mm/s (ajustable)" },
    { label: "Velocidad de Retorno", imperial: "315 pulg/min", metric: "80 mm/s" },
    { label: "Ejes del Tope Trasero", imperial: "4+1 a 8+1 ejes", metric: "4+1 a 8+1 ejes" },
    { label: "Recorrido X del Tope Trasero", imperial: "0–23.6\"", metric: "0–600 mm" },
    { label: "Precisión de Posicionamiento", imperial: "±0.0004\"", metric: "±0.01 mm" },
    { label: "Controlador", imperial: "Gráfico", metric: "Gráfico" },
    { label: "Sistema de Arqueado", imperial: "Arqueado automático hidráulico", metric: "Arqueado automático hidráulico" },
    { label: "Espesor Máx. de Material (acero dulce)", imperial: "0.625\" a 40T / 1\" a 160T", metric: "16 mm a 40T / 25 mm a 160T" },
    { label: "Alimentación Eléctrica", imperial: "480V, trifásico, 60 Hz", metric: "380V, trifásico, 50 Hz" },
  ],
  videoSectionLabel: "Véala Doblar",
  videoHeadline: "Piezas Complejas, Precisión desde la Primera Pieza",
  configOptions: [
    {
      label: "Tonelaje",
      options: ["40T — chapa metálica ligera, hasta 8 ft", "80T — fabricación general", "110T — perfiles estructurales hasta 10 ft", "160T — placa pesada hasta 0.75\"", "220T — inoxidable y aluminio grueso", "400T — fabricación estructural pesada"],
      note: "La selección de tonelaje depende de su material más grueso, doblez más ancho y resistencia a la tracción del material. Los ingenieros VTM dimensionarán correctamente para su trabajo.",
    },
    {
      label: "Longitud de Doblado",
      options: ["98\" (2500 mm)", "118\" (3000 mm)", "157\" (4000 mm)", "197\" (5000 mm)", "236\" (6000 mm)"],
      note: "Corresponde a su lámina o perfil estándar más largo. Las camas más largas requieren un tonelaje proporcionalmente mayor para mantener la precisión.",
    },
    {
      label: "Paquete de Herramientas",
      options: ["Juego de herramientas estilo europeo estándar", "Herramientas compatibles con Amada", "Sistema automático de cambio de herramientas (hidráulico)", "Actualización de herramientas de precisión Wila"],
      note: "Las herramientas de precisión Wila ofrecen precisión de sujeción hasta ±0.001\" — recomendadas para trabajo aeroespacial y médico de tolerancia estrecha.",
    },
  ],
  comparisonLabel: "Tecnología",
  comparisonHeadline: "Prensa Dobladora CNC vs. Manual",
  comparisonOursLabel: "Prensa Dobladora CNC",
  comparisonTheirsLabel: "Prensa Dobladora Manual",
  comparison: [
    { feature: "Repetibilidad", ours: "±0.01 mm", theirs: "±0.5 mm o peor" },
    { feature: "Tiempo de configuración por trabajo", ours: "5–15 min (programa recordado)", theirs: "30–60 min (prueba y error manual)" },
    { feature: "Simulación 3D de doblado", ours: "Sí — detección de colisiones incluida", theirs: "Ninguna" },
    { feature: "Tope trasero", ours: "CNC de 4+1 a 8+1 ejes", theirs: "Manual de un solo eje" },
    { feature: "Compensación de arqueado", ours: "Automática", theirs: "Calzas manuales (si disponibles)" },
    { feature: "Habilidad del operador requerida", ours: "Baja — el controlador guía al operador", theirs: "Alta — operador experimentado esencial" },
    { feature: "Consistencia pieza a pieza", ours: "Idéntica", theirs: "Variación dependiente del operador" },
    { feature: "Costo inicial", ours: "Mayor", theirs: "Menor" },
  ],
  relatedProducts: [
    { name: "Guillotinas y Viga Oscilante", href: "/fabrication/shearing-machine", tag: "Cizallado", imageId: "/images/cnc-press-brake-feature-03-crowning.png" },
    { name: "Punzonadora Hidráulica", href: "/fabrication/ironworker", tag: "Multifunción", imageId: "/images/cnc-press-brake-feature-04-backgauge.png" },
    { name: "Máquina de Corte Láser de Fibra", href: "/fabrication/fiber-laser-cutting-machine", tag: "Corte", imageId: "/images/fiber-laser-hero.png" },
    { name: "Máquina de Soldadura Láser", href: "/fabrication/4-in-1-laser-machine", tag: "Soldadura", imageId: "/images/4in1-laser-hero-2.png" },
  ],
  faqs: [
    {
      question: "¿Las herramientas son compatibles con mis juegos de punzón y troquel existentes?",
      answer: "Las prensas dobladoras VTM se envían configuradas para herramientas estilo europeo estándar (Wila/Wilson), que son compatibles con la mayoría de las herramientas de repuesto disponibles en los EE.UU. Los portaherramientas estilo Amada están disponibles como opción de configuración. Si tiene herramientas existentes que desea seguir usando, comparta el perfil de herramientas con su ingeniero de ventas VTM antes de ordenar.",
    },
    {
      question: "¿Qué tan difícil es la programación en el controlador CNC?",
      answer: "El controlador CNC gráfico usa una interfaz de pantalla táctil con visualización de piezas en 3D. La mayoría de los operadores alcanzan plena competencia de programación en 2–3 días de entrenamiento. Los archivos DXF de su sistema CAD se pueden importar directamente — el controlador genera automáticamente la secuencia de doblado y calcula el tonelaje. VTM incluye 2 días de entrenamiento de programación en sitio con cada máquina.",
    },
    {
      question: "¿Cómo selecciono el tonelaje correcto para mi trabajo?",
      answer: "El tonelaje está determinado por el tipo de material, el espesor, la resistencia a la tracción y la longitud del doblez. Como guía aproximada para acero dulce: material de 1\" sobre un doblez de 10 pies requiere aproximadamente 150 toneladas. Su ingeniero de ventas VTM calculará el tonelaje requerido para sus trabajos específicos antes de recomendar una máquina.",
    },
    {
      question: "¿Cuál es el tiempo de entrega y el proceso de instalación?",
      answer: "El tiempo de entrega estándar es de 10–14 semanas desde el pedido confirmado. El equipo de instalación de VTM maneja la coordinación de montaje, nivelación (con calzas de precisión a 0.1 mm/m), puesta en marcha hidráulica y eléctrica, y dobleces de verificación de primera pieza. La instalación típicamente toma 1–2 días según el tamaño de la máquina.",
    },
    {
      question: "¿Puedo agregar cambio automático de herramientas más tarde?",
      answer: "El sistema de cambio automático de herramientas debe especificarse en el momento del pedido — requiere disposiciones hidráulicas específicas y geometría del carnero que no se pueden retrofitar después de la fabricación. Si existe alguna posibilidad de que lo desee en el futuro, recomendamos especificarlo desde el principio.",
    },
  ],
};

export const content: Record<"en" | "es", ProductPageData> = { en, es };
