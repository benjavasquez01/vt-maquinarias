import type { ProductPageData } from "@/components/product/ProductPageTemplate";

const en: ProductPageData = {
  category: "Fabrication",
  slug: "shearing-machine",
  machineName: "Guillotine & Swing Beam Shearing",
  heroSubheadline:
    "Two proven hydraulic shearing mechanisms — one source. Guillotine for heavy plate up to 16 mm with adjustable rake angle. Swing beam for stainless, aluminum, and distortion-free blanks up to 12 mm. Both with CNC back gauge, hydraulic hold-down, and full US support.",
  heroImageId: "/images/shearing-guillotine-hero.png",

  features: [
    {
      number: "01",
      headline: "Hydraulic Hold-Down — No Sheet Movement at the Cut",
      body: "A bank of hydraulic hold-down clamps activates automatically before the blade descends, gripping the sheet across its full width. The material cannot shift, bow, or creep during the cut — eliminating the angled cuts and edge burr that plague mechanical-hold-down machines on thin gauge material.",
      spec: { label: "Hold-Down", value: "Full hydraulic" },
      imageId: "/images/shearing-guillotine-feature-01-holddown.png",
    },
    {
      number: "02",
      headline: "Adjustable Rake Angle — Match the Cut to the Material (Guillotine)",
      body: "Rake angle directly controls cut quality on the guillotine. At 1°, the blade shears thin gauge sheet with minimal bow. At 2.5°, the blade cuts heavy plate with reduced required tonnage. The E21S controller stores rake angle per job — no manual adjustment between material changes.",
      spec: { label: "Rake Angle", value: "1°–2.5°" },
      imageId: "/images/shearing-guillotine-feature-02-rake.png",
    },
    {
      number: "03",
      headline: "Back Gauge Position Memory — Repeat Jobs in Seconds",
      body: "The programmable CNC back gauge stores up to 40 back gauge positions per program. When you run the same job again next week, recall the program and the back gauge positions itself — no re-measuring, no trial cuts. On a shop running 20+ repeat jobs, this alone saves hours every week.",
      spec: { label: "Stored Programs", value: "Up to 40" },
      imageId: "/images/shearing-guillotine-feature-03-backgauge.png",
    },
    {
      number: "04",
      headline: "E21S Controller — Simple, Reliable, Industrial",
      body: "The ESA E21S is a proven industrial CNC controller designed for shearing machine environments — tolerates vibration, dust, and temperature variation. Large numeric keypad for gloved operators. Programs are retained through power cycles without a battery.",
      spec: { label: "Controller", value: "E21S CNC" },
      imageId: "/images/shearing-guillotine-feature-04-controller.png",
    },
    {
      number: "05",
      headline: "Heavy-Duty Welded Steel Frame — Built to Last",
      body: "The machine frame is stress-relieved welded steel with precision-ground guide ways. Frame deflection under full rated load is less than 0.05 mm per meter of cutting length — maintaining consistent shear quality at maximum capacity. Designed for three-shift operation over a 20+ year service life.",
      spec: { label: "Frame", value: "Stress-relieved steel" },
      imageId: "/images/shearing-guillotine-feature-05-frame.png",
      imageFit: "contain" as const,
    },
  ],

  variantSection: {
    sectionLabel: "Swing Beam Option",
    headline: "Need Zero Marking on Stainless or Aluminum?",
    subheadline: "The swing beam shear runs on the same frame and controller platform — the upper blade pivots on a fixed arc while the lower blade never moves. Cut blanks drop away clean with no lateral blade contact.",
    features: [
      {
        number: "01",
        headline: "Swinging Upper Beam — The Lower Blade Never Moves",
        body: "The upper blade pivots on a fixed arc while the lower blade is stationary. The cut material drops straight down after shearing — it never drags across a moving lower blade. This eliminates the scratching and marking that guillotine shears can produce on soft materials like aluminum and polished stainless.",
        spec: { label: "Lower Blade", value: "Fixed — never moves" },
      },
      {
        number: "02",
        headline: "No Distortion in the Cut Blank",
        body: "Because the cut blank drops away cleanly without lateral blade contact, swing beam shears produce flatter, straighter blanks than guillotine shears on thin gauge material — directly improving downstream yield on press brake and stamping operations.",
        spec: { label: "Blank Flatness", value: "Superior" },
      },
      {
        number: "03",
        headline: "Ideal for Stainless Steel and Aluminum",
        body: "Stainless work-hardens at the shear zone — the fixed lower blade geometry distributes shear force more favorably on stainless than a guillotine at equivalent capacity. Aluminum and polished materials benefit from the non-contact lower blade — no marking, no protective film needed.",
        spec: { label: "Stainless Performance", value: "Optimized" },
      },
      {
        number: "04",
        headline: "Simpler Maintenance — Fewer Moving Components",
        body: "Swing beam machines have fewer hydraulic circuits and mechanical assemblies than equivalent guillotine shears. Pivot pin and blade fastener inspections cover the majority of scheduled maintenance. Total annual maintenance time is typically 30–40% lower than a comparable guillotine.",
        spec: { label: "Maintenance", value: "↓ 30–40%" },
      },
      {
        number: "05",
        headline: "Compact Footprint — Fits Tight Shop Floors",
        body: "The swing beam geometry is inherently more compact front-to-back than a guillotine of equivalent cutting width. On a 4000mm machine, the swing beam saves approximately 18\"–24\" of floor depth — useful in high-density shops where every square foot counts.",
        spec: { label: "Footprint", value: "Compact" },
      },
    ],
  },

  specs: [
    { label: "Mechanism Options", imperial: "Guillotine / Swing Beam", metric: "Guillotine / Swing Beam" },
    { label: "Thickness — Guillotine (mild steel)", imperial: "0.125\"–0.625\"", metric: "3–16 mm" },
    { label: "Thickness — Swing Beam (mild steel)", imperial: "0.125\"–0.5\"", metric: "3–12 mm" },
    { label: "Cutting Width Options", imperial: "49\"–236\"", metric: "1250–6000 mm" },
    { label: "Rake Angle (guillotine, adjustable)", imperial: "1°–2.5°", metric: "1°–2.5°" },
    { label: "Lower Blade (swing beam)", imperial: "Fixed", metric: "Fixed" },
    { label: "Strokes Per Minute — Guillotine", imperial: "10–14 SPM", metric: "10–14 SPM" },
    { label: "Strokes Per Minute — Swing Beam", imperial: "12–16 SPM", metric: "12–16 SPM" },
    { label: "Back Gauge Travel", imperial: "0–39.4\" (guillotine) / 0–31.5\" (swing beam)", metric: "0–1000 mm / 0–800 mm" },
    { label: "Back Gauge Accuracy", imperial: "±0.002\"", metric: "±0.05 mm" },
    { label: "Hold-Down Type", imperial: "Hydraulic (full-width)", metric: "Hydraulic (full-width)" },
    { label: "Controller", imperial: "ESA E21S CNC", metric: "ESA E21S CNC" },
    { label: "Front Support Arms", imperial: "Yes — adjustable", metric: "Yes — adjustable" },
    { label: "Power Supply (US)", imperial: "480V, 3-phase, 60 Hz", metric: "380V, 3-phase, 50 Hz" },
  ],

  videoSectionLabel: "See It Shear",
  videoHeadline: "Clean Cuts — Full Capacity",

  configOptions: [
    {
      label: "Mechanism",
      options: ["Guillotine — up to 16mm, adjustable rake angle", "Swing Beam — up to 12mm, fixed lower blade"],
      note: "Choose guillotine for heavy mild steel plate. Choose swing beam for stainless, aluminum, or when blank flatness and surface finish are critical.",
    },
    {
      label: "Thickness Capacity",
      options: ["3mm — light gauge sheet", "6mm — general fabrication", "10mm — heavy structural plate", "12mm — swing beam max", "16mm — guillotine max"],
      note: "Capacity is rated for mild steel. Stainless capacity is approximately 60–65% of mild steel rating.",
    },
    {
      label: "Cutting Width",
      options: ["1250 mm (49\")", "2500 mm (98\")", "3200 mm (126\")", "4000 mm (157\")", "6000 mm (236\" — guillotine only)"],
      note: "For 4×8 sheet work, 2500 mm is the standard choice. 6000 mm is available on guillotine only.",
    },
    {
      label: "Back Gauge & Control",
      options: ["E21S CNC (standard)", "DA-S CNC with graphical touchscreen (upgrade)"],
      note: "The DA-S upgrade adds a graphical touchscreen, DXF import for automatic back gauge sequencing, and networked job storage.",
    },
  ],

  comparisonLabel: "Technology",
  comparisonHeadline: "Guillotine vs. Swing Beam",
  comparisonOursLabel: "Guillotine",
  comparisonTheirsLabel: "Swing Beam",
  comparison: [
    { feature: "Max thickness capacity", ours: "Up to 16mm", theirs: "Up to 12mm" },
    { feature: "Cut quality on thick plate", ours: "Excellent", theirs: "Good" },
    { feature: "Blank distortion on thin sheet", ours: "Minimal (with low rake)", theirs: "None (fixed lower blade)" },
    { feature: "Surface marking on aluminum", ours: "Possible without protective film", theirs: "None" },
    { feature: "Stainless performance", ours: "Very good", theirs: "Excellent" },
    { feature: "Rake angle", ours: "Adjustable 1°–2.5°", theirs: "Fixed by geometry" },
    { feature: "Maintenance complexity", ours: "Standard", theirs: "Lower (fewer moving parts)" },
    { feature: "Floor footprint", ours: "Standard", theirs: "More compact" },
  ],

  relatedProducts: [
    { name: "CNC Press Brake", href: "/fabrication/cnc-press-brake", tag: "Bending", imageId: "1504917595217-d4dc5ebe6122" },
    { name: "Hydraulic Ironworker", href: "/fabrication/ironworker", tag: "Multi-Function", imageId: "1565793248595-fad6d33f2f41" },
    { name: "Fiber Laser Cutting Machine", href: "/fabrication/fiber-laser-cutting-machine", tag: "Cutting", imageId: "/images/fiber-laser-hero.png" },
    { name: "Sheet & Tube Combo Laser", href: "/fabrication/sheet-tube-laser-cutting-machine", tag: "Combo", imageId: "/images/sheet-tube-combo-hero.png" },
  ],

  faqs: [
    { question: "How do I choose between guillotine and swing beam for my shop?", answer: "If your primary materials are stainless steel, polished aluminum, or any material where surface finish and blank flatness are critical, choose the swing beam. The fixed lower blade eliminates marking and produces flatter blanks on thin gauge material. If you regularly cut mild steel plate above 12mm, or need the maximum width options (up to 6000mm), choose the guillotine." },
    { question: "What materials can these shears handle?", answer: "Both handle mild steel, stainless steel, aluminum, copper, brass, and galvanized steel. Capacity ratings are for mild steel. Stainless capacity is approximately 60–65% of the mild steel rating. Aluminum can typically be cut at 1.5× the mild steel thickness rating. High-strength steels require special consideration — contact your VTM engineer." },
    { question: "How often do blades need to be replaced or turned?", answer: "Most shear blades have 4 cutting edges and are rotated before replacement. Under normal use cutting mild steel, each edge lasts 50,000–100,000 cuts. Cutting stainless or abrasive materials reduces edge life. Blade replacement is a standard maintenance task — typically under an hour with the correct tooling." },
    { question: "How do I select the right thickness capacity?", answer: "Identify your thickest and widest cut scenario and size to that — with headroom. Running a machine at maximum rated capacity accelerates blade wear and reduces cut quality. A 10mm machine handling occasional 8mm plate will produce better cuts and last longer than a 6mm machine pushed to its limits." },
    { question: "What are the installation requirements?", answer: "Both shear types require a reinforced concrete floor pad (minimum 6\" thickness with rebar, typically 8\" for larger machines). VTM provides a foundation drawing with your machine order. Power requirement is 480V 3-phase, 60Hz. Installation includes leveling, blade gap calibration, hydraulic commissioning, and operator training." },
    { question: "Is the swing beam shear harder to maintain than a guillotine?", answer: "Generally no — the swing beam design has fewer hydraulic circuits and mechanical assemblies. Pivot pin and blade fastener inspections cover the majority of scheduled maintenance. Total annual maintenance time is typically 30–40% lower than a comparable guillotine." },
    { question: "Can I cut aluminum on the swing beam without scratching the bottom surface?", answer: "Yes — this is one of the primary reasons shops choose the swing beam for aluminum work. The fixed lower blade means the cut blank lifts away without lateral contact. Many shops eliminate protective film on aluminum entirely after switching to a swing beam shear." },
    { question: "What does the rake angle adjustment on the guillotine do?", answer: "Lower rake (1°–1.5°) shears thin gauge sheet with minimal bow by distributing force evenly across a longer cut section. Higher rake (2°–2.5°) reduces required cutting force on thick plate but creates a slight curl in the blank. The E21S controller stores your preferred setting per job." },
  ],
};

const es: ProductPageData = {
  category: "Fabricación",
  slug: "shearing-machine",
  machineName: "Guillotinas y Viga Oscilante",
  heroSubheadline:
    "Dos mecanismos hidráulicos de cizallado probados — un solo proveedor. Guillotina para placa pesada hasta 16 mm con ángulo de inclinación ajustable. Viga oscilante para inoxidable, aluminio y piezas sin distorsión hasta 12 mm. Ambas con tope trasero CNC, sujeción hidráulica y soporte completo en EE.UU.",
  heroImageId: "/images/shearing-guillotine-hero.png",

  features: [
    {
      number: "01",
      headline: "Sujeción Hidráulica — Sin Movimiento de la Lámina en el Corte",
      body: "Un banco de prensas de sujeción hidráulicas se activa automáticamente antes de que la cuchilla descienda, sujetando la lámina en todo su ancho. El material no puede desplazarse, arquearse ni deslizarse durante el corte — eliminando los cortes angulados y las rebabas que afectan a las máquinas de sujeción mecánica en material de calibre delgado.",
      spec: { label: "Sujeción", value: "Hidráulica completa" },
      imageId: "/images/shearing-guillotine-feature-01-holddown.png",
    },
    {
      number: "02",
      headline: "Ángulo de Inclinación Ajustable — Adapte el Corte al Material (Guillotina)",
      body: "El ángulo de inclinación controla directamente la calidad del corte en la guillotina. A 1°, la cuchilla corta lámina de calibre delgado con mínimo arqueado. A 2.5°, corta placa pesada con menor tonelaje requerido. El controlador E21S almacena el ángulo de inclinación por trabajo.",
      spec: { label: "Ángulo de Inclinación", value: "1°–2.5°" },
      imageId: "/images/shearing-guillotine-feature-02-rake.png",
    },
    {
      number: "03",
      headline: "Memoria de Posición del Tope Trasero — Repita Trabajos en Segundos",
      body: "El tope trasero CNC programable almacena hasta 40 posiciones por programa. Cuando ejecute el mismo trabajo la próxima semana, recuerde el programa y el tope trasero se posiciona solo — sin volver a medir, sin cortes de prueba. En un taller con más de 20 trabajos repetitivos, esto ahorra horas cada semana.",
      spec: { label: "Programas Almacenados", value: "Hasta 40" },
      imageId: "/images/shearing-guillotine-feature-03-backgauge.png",
    },
    {
      number: "04",
      headline: "Controlador E21S — Simple, Confiable, Industrial",
      body: "El ESA E21S es un controlador CNC industrial probado para entornos de cizallas — tolera vibración, polvo y variación de temperatura. Teclado numérico grande para operadores con guantes. Los programas se retienen durante los ciclos de energía sin batería.",
      spec: { label: "Controlador", value: "CNC E21S" },
      imageId: "/images/shearing-guillotine-feature-04-controller.png",
    },
    {
      number: "05",
      headline: "Marco de Acero Soldado de Alta Resistencia — Construido para Durar",
      body: "El marco es acero soldado con recocido de alivio de tensiones y guías rectificadas de precisión. La deflexión del marco bajo carga nominal completa es inferior a 0.05 mm por metro de longitud de corte. Diseñado para operación en tres turnos durante más de 20 años de vida útil.",
      spec: { label: "Marco", value: "Acero con alivio de tensiones" },
      imageId: "/images/shearing-guillotine-feature-05-frame.png",
      imageFit: "contain" as const,
    },
  ],

  variantSection: {
    sectionLabel: "Opción Viga Oscilante",
    headline: "¿Necesita Cero Marcas en Inoxidable o Aluminio?",
    subheadline: "La cizalla de viga oscilante funciona sobre la misma plataforma de bastidor y controlador — la cuchilla superior pivota sobre un arco fijo mientras la cuchilla inferior nunca se mueve. Las piezas cortadas caen limpiamente sin contacto lateral.",
    features: [
      {
        number: "01",
        headline: "Viga Superior Oscilante — La Cuchilla Inferior Nunca Se Mueve",
        body: "La cuchilla superior pivota sobre un arco fijo mientras la cuchilla inferior es estacionaria. El material cortado cae directamente hacia abajo — nunca arrastra sobre una cuchilla inferior en movimiento. Esto elimina el rayado y marcado que las guillotinas pueden producir en materiales blandos.",
        spec: { label: "Cuchilla Inferior", value: "Fija — nunca se mueve" },
      },
      {
        number: "02",
        headline: "Sin Distorsión en la Pieza en Blanco",
        body: "Debido a que la pieza cortada cae limpiamente sin contacto lateral, las cizallas de viga oscilante producen piezas más planas y rectas que las guillotinas en material de calibre delgado — mejorando directamente el rendimiento en operaciones de prensa dobladora y troquelado.",
        spec: { label: "Planitud de la Pieza", value: "Superior" },
      },
      {
        number: "03",
        headline: "Ideal para Acero Inoxidable y Aluminio",
        body: "El inoxidable se endurece por deformación en la zona de cizallado — la geometría de cuchilla inferior fija distribuye la fuerza más favorablemente que una guillotina a capacidad equivalente. El aluminio y los materiales pulidos se benefician de la cuchilla inferior sin contacto — sin marcas, sin necesidad de película protectora.",
        spec: { label: "Rendimiento Inox.", value: "Optimizado" },
      },
      {
        number: "04",
        headline: "Mantenimiento Más Simple — Menos Componentes Móviles",
        body: "Las máquinas de viga oscilante tienen menos circuitos hidráulicos y conjuntos mecánicos que las guillotinas equivalentes. Las inspecciones del pasador pivote y los sujetadores de cuchilla cubren la mayoría del mantenimiento programado. El tiempo total de mantenimiento anual es típicamente 30–40% menor.",
        spec: { label: "Mantenimiento", value: "↓ 30–40%" },
      },
      {
        number: "05",
        headline: "Huella Compacta — Cabe en Pisos de Taller Reducidos",
        body: "La geometría de viga oscilante es inherentemente más compacta de frente a fondo que una guillotina de ancho equivalente. En una máquina de 4000 mm, ahorra aproximadamente 18\"–24\" de profundidad de piso — útil en talleres de alta densidad donde cada metro cuadrado cuenta.",
        spec: { label: "Huella", value: "Compacta" },
      },
    ],
  },

  specs: [
    { label: "Opciones de Mecanismo", imperial: "Guillotina / Viga Oscilante", metric: "Guillotina / Viga Oscilante" },
    { label: "Espesor — Guillotina (acero dulce)", imperial: "0.125\"–0.625\"", metric: "3–16 mm" },
    { label: "Espesor — Viga Oscilante (acero dulce)", imperial: "0.125\"–0.5\"", metric: "3–12 mm" },
    { label: "Opciones de Ancho de Corte", imperial: "49\"–236\"", metric: "1250–6000 mm" },
    { label: "Ángulo de Inclinación (guillotina, ajustable)", imperial: "1°–2.5°", metric: "1°–2.5°" },
    { label: "Cuchilla Inferior (viga oscilante)", imperial: "Fija", metric: "Fija" },
    { label: "Golpes por Minuto — Guillotina", imperial: "10–14 GPM", metric: "10–14 GPM" },
    { label: "Golpes por Minuto — Viga Oscilante", imperial: "12–16 GPM", metric: "12–16 GPM" },
    { label: "Recorrido del Tope Trasero", imperial: "0–39.4\" (guillotina) / 0–31.5\" (viga oscilante)", metric: "0–1000 mm / 0–800 mm" },
    { label: "Precisión del Tope Trasero", imperial: "±0.002\"", metric: "±0.05 mm" },
    { label: "Tipo de Sujeción", imperial: "Hidráulica (ancho completo)", metric: "Hidráulica (ancho completo)" },
    { label: "Controlador", imperial: "ESA E21S CNC", metric: "ESA E21S CNC" },
    { label: "Brazos de Soporte Frontales", imperial: "Sí — ajustables", metric: "Sí — ajustables" },
    { label: "Alimentación Eléctrica (EE.UU.)", imperial: "480V, trifásico, 60 Hz", metric: "380V, trifásico, 50 Hz" },
  ],

  videoSectionLabel: "Véala Cortar",
  videoHeadline: "Cortes Limpios — Máxima Capacidad",

  configOptions: [
    {
      label: "Mecanismo",
      options: ["Guillotina — hasta 16 mm, ángulo de inclinación ajustable", "Viga Oscilante — hasta 12 mm, cuchilla inferior fija"],
      note: "Elija guillotina para placa de acero dulce pesado. Elija viga oscilante para inoxidable, aluminio o cuando la planitud y el acabado superficial son críticos.",
    },
    {
      label: "Capacidad de Espesor",
      options: ["3 mm — lámina de calibre ligero", "6 mm — fabricación general", "10 mm — placa estructural pesada", "12 mm — máximo viga oscilante", "16 mm — máximo guillotina"],
      note: "La capacidad está calificada para acero dulce. La capacidad de inoxidable es aproximadamente el 60–65% de la calificación de acero dulce.",
    },
    {
      label: "Ancho de Corte",
      options: ["1250 mm (49\")", "2500 mm (98\")", "3200 mm (126\")", "4000 mm (157\")", "6000 mm (236\" — solo guillotina)"],
      note: "Para trabajo con láminas 4×8, 2500 mm es la opción estándar. 6000 mm disponible solo en guillotina.",
    },
    {
      label: "Tope Trasero y Control",
      options: ["E21S CNC (estándar)", "DA-S CNC con pantalla táctil gráfica (actualización)"],
      note: "La actualización DA-S agrega pantalla táctil gráfica, importación DXF y almacenamiento de trabajos en red.",
    },
  ],

  comparisonLabel: "Tecnología",
  comparisonHeadline: "Guillotina vs. Viga Oscilante",
  comparisonOursLabel: "Guillotina",
  comparisonTheirsLabel: "Viga Oscilante",
  comparison: [
    { feature: "Capacidad máxima de espesor", ours: "Hasta 16 mm", theirs: "Hasta 12 mm" },
    { feature: "Calidad de corte en placa gruesa", ours: "Excelente", theirs: "Buena" },
    { feature: "Distorsión en lámina delgada", ours: "Mínima (con baja inclinación)", theirs: "Ninguna (cuchilla inferior fija)" },
    { feature: "Marcado de superficie en aluminio", ours: "Posible sin película protectora", theirs: "Ninguno" },
    { feature: "Rendimiento en inoxidable", ours: "Muy bueno", theirs: "Excelente" },
    { feature: "Ángulo de inclinación", ours: "Ajustable 1°–2.5°", theirs: "Fijo por geometría" },
    { feature: "Complejidad de mantenimiento", ours: "Estándar", theirs: "Menor (menos piezas móviles)" },
    { feature: "Huella de piso", ours: "Estándar", theirs: "Más compacta" },
  ],

  relatedProducts: [
    { name: "Prensa Dobladora CNC", href: "/fabrication/cnc-press-brake", tag: "Doblado", imageId: "1504917595217-d4dc5ebe6122" },
    { name: "Punzonadora Hidráulica", href: "/fabrication/ironworker", tag: "Multifunción", imageId: "1565793248595-fad6d33f2f41" },
    { name: "Máquina de Corte Láser de Fibra", href: "/fabrication/fiber-laser-cutting-machine", tag: "Corte", imageId: "/images/fiber-laser-hero.png" },
    { name: "Láser Combinado Chapa y Tubo", href: "/fabrication/sheet-tube-laser-cutting-machine", tag: "Combinado", imageId: "/images/sheet-tube-combo-hero.png" },
  ],

  faqs: [
    { question: "¿Cómo elijo entre guillotina y viga oscilante?", answer: "Si sus materiales principales son acero inoxidable, aluminio pulido o cualquier material donde el acabado superficial y la planitud son críticos, elija la viga oscilante. La cuchilla inferior fija elimina cualquier posibilidad de marcar la parte inferior de la lámina. Si corta regularmente placa de acero dulce de más de 12 mm, o necesita anchuras máximas (hasta 6000 mm), elija la guillotina." },
    { question: "¿Qué materiales pueden manejar estas cizallas?", answer: "Ambas manejan acero dulce, acero inoxidable, aluminio, cobre, latón y acero galvanizado. Las calificaciones de capacidad son para acero dulce. La capacidad de inoxidable es aproximadamente el 60–65% de la calificación de acero dulce. El aluminio puede cortarse típicamente a 1.5× la calificación de espesor de acero dulce." },
    { question: "¿Con qué frecuencia se deben reemplazar o voltear las cuchillas?", answer: "La mayoría de las cuchillas tienen 4 bordes de corte y se rotan antes del reemplazo. En uso normal cortando acero dulce, cada borde dura 50,000–100,000 cortes. Cortar inoxidable o materiales abrasivos reduce significativamente la vida útil del borde. El reemplazo de cuchillas es una tarea de mantenimiento estándar — típicamente menos de una hora." },
    { question: "¿Cómo selecciono la capacidad correcta para mi taller?", answer: "Identifique su escenario de corte más grueso y más ancho y dimensione para eso con margen. Operar una máquina a la capacidad máxima nominal acelera el desgaste de la cuchilla y reduce la calidad del corte. Una máquina de 10 mm que maneja ocasionalmente placa de 8 mm producirá mejores cortes y durará más que una máquina de 6 mm llevada a sus límites." },
    { question: "¿Cuáles son los requisitos de instalación?", answer: "Ambos tipos requieren una losa de concreto reforzado (mínimo 6\" de espesor con varillas, típicamente 8\" para máquinas más grandes). VTM proporciona un dibujo de cimentación con su pedido. El requisito de energía es 480V trifásico, 60Hz. La instalación incluye nivelación, calibración del espacio de cuchilla, puesta en marcha hidráulica y capacitación del operador." },
    { question: "¿Es más difícil mantener la viga oscilante que la guillotina?", answer: "Generalmente no — el diseño de viga oscilante tiene menos componentes hidráulicos móviles. Las inspecciones del pasador pivote y los sujetadores de cuchilla cubren la mayoría del mantenimiento programado. El tiempo total de mantenimiento anual es típicamente 30–40% menor que una guillotina comparable." },
    { question: "¿Puedo cortar aluminio en la viga oscilante sin rayar la superficie inferior?", answer: "Sí — esta es una de las principales razones por las que los talleres eligen la viga oscilante para trabajo con aluminio. La cuchilla inferior fija significa que la pieza cortada se levanta sin ningún contacto lateral. Muchos talleres eliminan la película protectora en el aluminio por completo después de cambiar a una cizalla de viga oscilante." },
    { question: "¿Qué hace el ajuste del ángulo de inclinación en la guillotina?", answer: "Un ángulo menor (1°–1.5°) corta lámina de calibre delgado con mínimo arqueado distribuyendo la fuerza de manera uniforme. Un ángulo mayor (2°–2.5°) reduce la fuerza de corte requerida en placa gruesa pero crea una ligera curvatura en la pieza. El controlador E21S almacena su ajuste preferido por trabajo." },
  ],
};

export const content: Record<"en" | "es", ProductPageData> = { en, es };
