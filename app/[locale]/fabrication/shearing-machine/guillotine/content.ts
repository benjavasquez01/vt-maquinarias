import type { ProductPageData } from "@/components/product/ProductPageTemplate";

const en: ProductPageData = {
  category: "Fabrication",
  slug: "shearing-machine/guillotine",
  machineName: "Hydraulic Guillotine Shearing Machine",
  heroSubheadline:
    "3 mm to 16 mm capacity. 1250 mm to 6000 mm cutting width. Hydraulic hold-down clamps, adjustable rake angle from 1° to 2.5°, programmable back gauge with position memory, and E21S CNC controller.",
  heroImageId: "1558618666-fcd25c85cd64",
  features: [
    {
      number: "01",
      headline: "Hydraulic Hold-Down — No Sheet Movement at the Cut",
      body: "A bank of hydraulic hold-down clamps activates automatically before the blade descends, gripping the sheet across its full width. The material cannot shift, bow, or creep during the cut — eliminating the angled cuts and edge burr that plague mechanical-hold-down machines on thin gauge material.",
      spec: { label: "Hold-Down", value: "Full hydraulic" },
      imageId: "1558618666-fcd25c85cd64",
    },
    {
      number: "02",
      headline: "Adjustable Rake Angle — Match the Cut to the Material",
      body: "Rake angle (the tilt of the moving blade relative to the fixed blade) directly controls cut quality. At 1°, the blade shears thin gauge sheet with minimal bow. At 2.5°, the blade cuts heavy plate with reduced required tonnage. The E21S controller stores rake angle per job — no manual adjustment between material changes.",
      spec: { label: "Rake Angle", value: "1°–2.5°" },
      imageId: "1565793248595-fad6d33f2f41",
    },
    {
      number: "03",
      headline: "Back Gauge Position Memory — Repeat Jobs in Seconds",
      body: "The programmable CNC back gauge stores up to 40 back gauge positions per program. When you run the same job again next week, recall the program and the back gauge positions itself — no re-measuring, no trial cuts. On a shop running 20+ repeat jobs, this alone saves hours every week.",
      spec: { label: "Stored Programs", value: "Up to 40" },
      imageId: "1581092918056-0c4c3acd3789",
    },
    {
      number: "04",
      headline: "E21S Controller — Simple, Reliable, Industrial",
      body: "The ESA E21S is a proven industrial CNC controller designed for shearing machine environments — tolerates vibration, dust, and temperature variation. Large numeric keypad for gloved operators. Programs are retained through power cycles without a battery. Parts count and blade stroke count displayed for maintenance scheduling.",
      spec: { label: "Controller", value: "E21S CNC" },
      imageId: "1504917595217-d4dc5ebe6122",
    },
    {
      number: "05",
      headline: "Heavy-Duty Welded Steel Frame — Built to Last",
      body: "The machine frame is stress-relieved welded steel with precision-ground guide ways. Frame deflection under full rated load is less than 0.05 mm per meter of cutting length — maintaining consistent shear quality at maximum capacity. Designed for three-shift operation over a 20+ year service life.",
      spec: { label: "Frame", value: "Stress-relieved steel" },
      imageId: "1485827404703-89b55fcc595e",
    },
  ],
  specs: [
    { label: "Material Thickness Capacity (mild steel)", imperial: "0.125\"–0.625\"", metric: "3–16 mm" },
    { label: "Cutting Width Options", imperial: "49\"–236\"", metric: "1250–6000 mm" },
    { label: "Rake Angle (adjustable)", imperial: "1°–2.5°", metric: "1°–2.5°" },
    { label: "Blade Gap Adjustment", imperial: "Power-assisted", metric: "Power-assisted" },
    { label: "Blade Speed", imperial: "~2\" / s", metric: "50 mm/s" },
    { label: "Strokes Per Minute", imperial: "10–14 SPM", metric: "10–14 SPM" },
    { label: "Back Gauge Travel", imperial: "0–39.4\"", metric: "0–1000 mm" },
    { label: "Back Gauge Accuracy", imperial: "±0.002\"", metric: "±0.05 mm" },
    { label: "Hold-Down Type", imperial: "Hydraulic (full-width)", metric: "Hydraulic (full-width)" },
    { label: "Front Support Arms", imperial: "Yes — adjustable", metric: "Yes — adjustable" },
    { label: "Controller", imperial: "ESA E21S CNC", metric: "ESA E21S CNC" },
    { label: "Hydraulic System Pressure", imperial: "2320 PSI max", metric: "160 bar max" },
    { label: "Power Supply", imperial: "480V, 3-phase, 60 Hz", metric: "380V, 3-phase, 50 Hz" },
  ],
  videoSectionLabel: "Watch It Shear",
  videoHeadline: "Clean Cuts — Full Capacity",
  configOptions: [
    {
      label: "Thickness Capacity",
      options: ["3mm — light gauge sheet", "6mm — general fabrication", "10mm — heavy structural plate", "16mm — maximum capacity"],
      note: "Capacity is rated for mild steel. Stainless steel capacity is approximately 60–70% of mild steel rating. Specify your thickest material.",
    },
    {
      label: "Cutting Width",
      options: ["1250 mm (49\")", "2500 mm (98\")", "3200 mm (126\")", "4000 mm (157\")", "6000 mm (236\")"],
      note: "Match to your standard sheet width. For 4x8 sheet work, 2500 mm is the standard choice.",
    },
    {
      label: "Back Gauge & Control",
      options: ["E21S CNC (standard)", "DA-S CNC with graphical display (upgrade)", "Front-operated controls"],
      note: "The DA-S upgrade adds a graphical touchscreen, DXF import for automatic back gauge sequencing, and networked job storage.",
    },
  ],
  comparisonLabel: "Technology",
  comparisonHeadline: "Guillotine vs. Swing Beam Shearing",
  comparisonOursLabel: "Guillotine",
  comparisonTheirsLabel: "Swing Beam",
  comparison: [
    { feature: "Thickness capacity", ours: "Up to 16mm", theirs: "Up to 12mm typically" },
    { feature: "Cut quality on thick plate", ours: "Excellent", theirs: "Good" },
    { feature: "Cut distortion on thin sheet", ours: "Minimal (with low rake)", theirs: "Very low (fixed lower blade advantage)" },
    { feature: "Blade wear on stainless", ours: "Standard", theirs: "Slightly lower (blade geometry advantage)" },
    { feature: "Tonnage for same capacity", ours: "Lower (adjustable rake advantage)", theirs: "Higher" },
    { feature: "Maintenance access", ours: "Standard", theirs: "Simpler (fewer moving components)" },
    { feature: "Machine footprint", ours: "Standard", theirs: "Slightly smaller" },
    { feature: "Price", ours: "Comparable", theirs: "Comparable" },
  ],
  relatedProducts: [
    { name: "Guillotine & Swing Beam Shearing", href: "/fabrication/shearing-machine", tag: "Shearing", imageId: "1558618666-fcd25c85cd64" },
    { name: "CNC Press Brake", href: "/fabrication/cnc-press-brake", tag: "Bending", imageId: "1504917595217-d4dc5ebe6122" },
    { name: "Ironworker", href: "/fabrication/ironworker", tag: "Multi-Function", imageId: "1565793248595-fad6d33f2f41" },
    { name: "Fiber Laser Cutting Machine", href: "/fabrication/fiber-laser-cutting-machine", tag: "Cutting", imageId: "/images/fiber-laser-hero.png" },
  ],
  faqs: [
    {
      question: "What materials can the guillotine shear cut?",
      answer: "The hydraulic guillotine handles mild steel, stainless steel, aluminum, copper, brass, and galvanized steel. Capacity ratings are for mild steel (50,000 PSI tensile). For stainless steel, derate capacity to approximately 60–65%. For aluminum, the same machine can typically cut 1.5× the mild steel thickness rating. High-strength steels (AHSS, Hardox) require special consideration — contact your VTM engineer.",
    },
    {
      question: "How often do blades need to be replaced or turned?",
      answer: "Most guillotine shear blades have 4 cutting edges (the blade is rotated 4 times before replacement). Under normal use cutting mild steel, each edge lasts 50,000–100,000 cuts. Cutting stainless or abrasive materials reduces edge life significantly. Blade replacement is a standard maintenance task — your operators can typically perform it in under an hour with the correct tooling.",
    },
    {
      question: "How do I select the right capacity for my shop?",
      answer: "Identify your thickest and widest cut scenario and size to that. It's important to leave headroom — running a machine at maximum rated capacity accelerates blade wear and reduces cut quality. A 10mm machine handling occasional 8mm plate will produce better cuts and last longer than a 6mm machine pushed to its limits. VTM engineers will review your actual job mix and recommend the correct specification.",
    },
    {
      question: "What is the difference between rake angle settings?",
      answer: "Lower rake angle (1°–1.5°) shears thin gauge sheet with minimal bow — the blade engages a longer section of the cut at once, distributing force evenly. Higher rake angle (2°–2.5°) reduces the required cutting force on thick plate but creates a slight curl or bow in the blank. Most shops use 1.5° for thin gauge work and 2°–2.5° for heavy plate. The E21S controller stores your preferred setting per job.",
    },
    {
      question: "What are the installation requirements?",
      answer: "Guillotine shears require a reinforced concrete floor pad (minimum 6\" thickness with rebar, typically 8\" for larger machines). VTM provides a foundation drawing with your machine order. Power requirement is 480V 3-phase, 60Hz (US standard). Installation includes leveling, blade gap calibration, hydraulic commissioning, and operator training. VTM installation teams handle all commissioning.",
    },
  ],
};

const es: ProductPageData = {
  category: "Fabricación",
  slug: "shearing-machine/guillotine",
  machineName: "Cizalla Guillotina Hidráulica",
  heroSubheadline:
    "Capacidad de 3 mm a 16 mm. Ancho de corte de 1250 mm a 6000 mm. Prensas de sujeción hidráulicas, ángulo de inclinación ajustable de 1° a 2.5°, tope trasero programable con memoria de posición y controlador CNC E21S.",
  heroImageId: "1558618666-fcd25c85cd64",
  features: [
    {
      number: "01",
      headline: "Sujeción Hidráulica — Sin Movimiento de la Lámina en el Corte",
      body: "Un banco de prensas de sujeción hidráulicas se activa automáticamente antes de que la cuchilla descienda, sujetando la lámina en todo su ancho. El material no puede desplazarse, arquearse ni deslizarse durante el corte — eliminando los cortes angulados y las rebabas en el borde que afectan a las máquinas de sujeción mecánica en material de calibre delgado.",
      spec: { label: "Sujeción", value: "Hidráulica completa" },
      imageId: "1558618666-fcd25c85cd64",
    },
    {
      number: "02",
      headline: "Ángulo de Inclinación Ajustable — Adapte el Corte al Material",
      body: "El ángulo de inclinación (la inclinación de la cuchilla móvil en relación con la cuchilla fija) controla directamente la calidad del corte. A 1°, la cuchilla corta la lámina de calibre delgado con mínimo arqueado. A 2.5°, la cuchilla corta la placa pesada con menor tonelaje requerido. El controlador E21S almacena el ángulo de inclinación por trabajo.",
      spec: { label: "Ángulo de Inclinación", value: "1°–2.5°" },
      imageId: "1565793248595-fad6d33f2f41",
    },
    {
      number: "03",
      headline: "Memoria de Posición del Tope Trasero — Repita Trabajos en Segundos",
      body: "El tope trasero CNC programable almacena hasta 40 posiciones por programa. Cuando ejecute el mismo trabajo la próxima semana, recuerde el programa y el tope trasero se posiciona solo — sin volver a medir, sin cortes de prueba. En un taller que ejecuta más de 20 trabajos repetitivos, esto solo ahorra horas cada semana.",
      spec: { label: "Programas Almacenados", value: "Hasta 40" },
      imageId: "1581092918056-0c4c3acd3789",
    },
    {
      number: "04",
      headline: "Controlador E21S — Simple, Confiable, Industrial",
      body: "El ESA E21S es un controlador CNC industrial probado diseñado para entornos de cizallas — tolera vibración, polvo y variación de temperatura. Teclado numérico grande para operadores con guantes. Los programas se retienen durante los ciclos de energía sin batería. El contador de piezas y el contador de golpes de cuchilla se muestran para programar el mantenimiento.",
      spec: { label: "Controlador", value: "CNC E21S" },
      imageId: "1504917595217-d4dc5ebe6122",
    },
    {
      number: "05",
      headline: "Marco de Acero Soldado de Alta Resistencia — Construido para Durar",
      body: "El marco de la máquina es acero soldado con recocido de alivio de tensiones y guías de precisión rectificadas. La deflexión del marco bajo carga nominal completa es inferior a 0.05 mm por metro de longitud de corte — manteniendo una calidad de corte consistente a máxima capacidad. Diseñado para operación en tres turnos durante más de 20 años de vida útil.",
      spec: { label: "Marco", value: "Acero con alivio de tensiones" },
      imageId: "1485827404703-89b55fcc595e",
    },
  ],
  specs: [
    { label: "Capacidad de Espesor de Material (acero dulce)", imperial: "0.125\"–0.625\"", metric: "3–16 mm" },
    { label: "Opciones de Ancho de Corte", imperial: "49\"–236\"", metric: "1250–6000 mm" },
    { label: "Ángulo de Inclinación (ajustable)", imperial: "1°–2.5°", metric: "1°–2.5°" },
    { label: "Ajuste de Espacio de Cuchilla", imperial: "Asistido por potencia", metric: "Asistido por potencia" },
    { label: "Velocidad de la Cuchilla", imperial: "~2\" / s", metric: "50 mm/s" },
    { label: "Golpes por Minuto", imperial: "10–14 GPM", metric: "10–14 GPM" },
    { label: "Recorrido del Tope Trasero", imperial: "0–39.4\"", metric: "0–1000 mm" },
    { label: "Precisión del Tope Trasero", imperial: "±0.002\"", metric: "±0.05 mm" },
    { label: "Tipo de Sujeción", imperial: "Hidráulica (ancho completo)", metric: "Hidráulica (ancho completo)" },
    { label: "Brazos de Soporte Frontales", imperial: "Sí — ajustables", metric: "Sí — ajustables" },
    { label: "Controlador", imperial: "ESA E21S CNC", metric: "ESA E21S CNC" },
    { label: "Presión del Sistema Hidráulico", imperial: "Máx. 2320 PSI", metric: "Máx. 160 bar" },
    { label: "Alimentación Eléctrica", imperial: "480V, trifásico, 60 Hz", metric: "380V, trifásico, 50 Hz" },
  ],
  videoSectionLabel: "Véala Cortar",
  videoHeadline: "Cortes Limpios — Máxima Capacidad",
  configOptions: [
    {
      label: "Capacidad de Espesor",
      options: ["3 mm — lámina de calibre ligero", "6 mm — fabricación general", "10 mm — placa estructural pesada", "16 mm — capacidad máxima"],
      note: "La capacidad está calificada para acero dulce. La capacidad de acero inoxidable es aproximadamente el 60–70% de la calificación de acero dulce. Especifique su material más grueso.",
    },
    {
      label: "Ancho de Corte",
      options: ["1250 mm (49\")", "2500 mm (98\")", "3200 mm (126\")", "4000 mm (157\")", "6000 mm (236\")"],
      note: "Corresponde a su ancho de lámina estándar. Para trabajo con láminas 4×8, 2500 mm es la opción estándar.",
    },
    {
      label: "Tope Trasero y Control",
      options: ["E21S CNC (estándar)", "DA-S CNC con pantalla gráfica (actualización)", "Controles operados desde el frente"],
      note: "La actualización DA-S agrega una pantalla táctil gráfica, importación DXF para secuenciación automática del tope trasero y almacenamiento de trabajos en red.",
    },
  ],
  comparisonLabel: "Tecnología",
  comparisonHeadline: "Guillotina vs. Cizalla de Viga Oscilante",
  comparisonOursLabel: "Guillotina",
  comparisonTheirsLabel: "Viga Oscilante",
  comparison: [
    { feature: "Capacidad de espesor", ours: "Hasta 16 mm", theirs: "Hasta 12 mm típicamente" },
    { feature: "Calidad de corte en placa gruesa", ours: "Excelente", theirs: "Buena" },
    { feature: "Distorsión del corte en lámina delgada", ours: "Mínima (con baja inclinación)", theirs: "Muy baja (ventaja de cuchilla inferior fija)" },
    { feature: "Desgaste de cuchilla en inoxidable", ours: "Estándar", theirs: "Ligeramente menor (ventaja de geometría)" },
    { feature: "Tonelaje para la misma capacidad", ours: "Menor (ventaja de inclinación ajustable)", theirs: "Mayor" },
    { feature: "Acceso para mantenimiento", ours: "Estándar", theirs: "Más simple (menos componentes móviles)" },
    { feature: "Huella de la máquina", ours: "Estándar", theirs: "Ligeramente más pequeña" },
    { feature: "Precio", ours: "Comparable", theirs: "Comparable" },
  ],
  relatedProducts: [
    { name: "Guillotinas y Viga Oscilante", href: "/fabrication/shearing-machine", tag: "Cizallado", imageId: "1558618666-fcd25c85cd64" },
    { name: "Prensa Dobladora CNC", href: "/fabrication/cnc-press-brake", tag: "Doblado", imageId: "1504917595217-d4dc5ebe6122" },
    { name: "Punzonadora Hidráulica", href: "/fabrication/ironworker", tag: "Multifunción", imageId: "1565793248595-fad6d33f2f41" },
    { name: "Máquina de Corte Láser de Fibra", href: "/fabrication/fiber-laser-cutting-machine", tag: "Corte", imageId: "/images/fiber-laser-hero.png" },
  ],
  faqs: [
    {
      question: "¿Qué materiales puede cortar la cizalla guillotina?",
      answer: "La guillotina hidráulica maneja acero dulce, acero inoxidable, aluminio, cobre, latón y acero galvanizado. Las calificaciones de capacidad son para acero dulce (tracción de 50,000 PSI). Para acero inoxidable, reduzca la capacidad a aproximadamente el 60–65%. Para aluminio, la misma máquina puede típicamente cortar 1.5× la calificación de espesor de acero dulce.",
    },
    {
      question: "¿Con qué frecuencia se deben reemplazar o voltear las cuchillas?",
      answer: "La mayoría de las cuchillas de guillotina tienen 4 bordes de corte (la cuchilla se gira 4 veces antes del reemplazo). En uso normal cortando acero dulce, cada borde dura 50,000–100,000 cortes. Cortar inoxidable o materiales abrasivos reduce significativamente la vida útil del borde. El reemplazo de cuchillas es una tarea de mantenimiento estándar — sus operadores típicamente pueden realizarla en menos de una hora.",
    },
    {
      question: "¿Cómo selecciono la capacidad correcta para mi taller?",
      answer: "Identifique su escenario de corte más grueso y más ancho y dimensione para eso. Es importante dejar margen — operar una máquina a la capacidad máxima nominal acelera el desgaste de la cuchilla y reduce la calidad del corte. Una máquina de 10 mm que maneja ocasionalmente placa de 8 mm producirá mejores cortes y durará más que una máquina de 6 mm llevada a sus límites.",
    },
    {
      question: "¿Cuál es la diferencia entre los ajustes de ángulo de inclinación?",
      answer: "Un ángulo de inclinación menor (1°–1.5°) corta lámina de calibre delgado con mínimo arqueado — la cuchilla se involucra en una sección más larga del corte a la vez, distribuyendo la fuerza de manera uniforme. Un ángulo de inclinación mayor (2°–2.5°) reduce la fuerza de corte requerida en placa gruesa pero crea una ligera curvatura en la pieza en blanco.",
    },
    {
      question: "¿Cuáles son los requisitos de instalación?",
      answer: "Las cizallas guillotina requieren una losa de concreto reforzado (mínimo 6\" de espesor con varillas, típicamente 8\" para máquinas más grandes). VTM proporciona un dibujo de cimentación con su pedido de máquina. El requisito de energía es 480V trifásico, 60Hz (estándar EE.UU.). La instalación incluye nivelación, calibración del espacio de cuchilla, puesta en marcha hidráulica y capacitación del operador.",
    },
  ],
};

export const content: Record<"en" | "es", ProductPageData> = { en, es };
