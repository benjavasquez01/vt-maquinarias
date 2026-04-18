import type { ProductPageData } from "@/components/product/ProductPageTemplate";

const en: ProductPageData = {
  category: "Fabrication",
  slug: "shearing-machine/swing-beam",
  machineName: "Swing Beam Shearing Machine",
  heroSubheadline:
    "3 mm to 12 mm hydraulic swing beam shearing. The upper beam swings on a fixed pivot — the lower blade never moves, eliminating distortion in the cut blank. Preferred for stainless steel and aluminum where surface finish matters.",
  heroImageId: "1558618666-fcd25c85cd64",
  features: [
    {
      number: "01",
      headline: "Swinging Upper Beam — The Lower Blade Never Moves",
      body: "In a swing beam design, the upper blade pivots on a fixed arc while the lower blade is stationary. The cut material drops straight down after shearing — it never drags across a moving lower blade. This eliminates the scratching and marking that guillotine shears can produce on soft materials like aluminum and polished stainless.",
      spec: { label: "Lower Blade", value: "Fixed — never moves" },
      imageId: "/images/shearing-guillotine-hero.png",
    },
    {
      number: "02",
      headline: "No Distortion in the Cut Blank",
      body: "Because the cut blank drops away cleanly without lateral blade contact, swing beam shears produce flatter, straighter blanks than guillotine shears on thin gauge material. For sheet metal shops producing blanks that go directly to a press brake or stamping press, flatness out of the shear directly affects downstream yield.",
      spec: { label: "Blank Flatness", value: "Superior" },
      imageId: "/images/ironworker-hero.png",
    },
    {
      number: "03",
      headline: "Ideal for Stainless Steel and Aluminum",
      body: "Stainless steel work-hardens at the shear zone — the fixed lower blade geometry of a swing beam distributes shear force more favorably on stainless than a guillotine at equivalent capacity. Aluminum and polished materials benefit from the non-contact lower blade — no marking, no need for protective film on the sheet.",
      spec: { label: "Stainless Performance", value: "Optimized" },
      imageId: "1565514020179-026b92b84bb6",
    },
    {
      number: "04",
      headline: "Simpler Maintenance — Fewer Moving Components",
      body: "Swing beam machines have fewer hydraulic circuits and mechanical assemblies than equivalent guillotine shears. The blade gap is fixed by design rather than requiring powered adjustment. Pivot pin and blade fastener inspections cover the majority of scheduled maintenance. Total annual maintenance time is typically 30–40% lower than a comparable guillotine.",
      spec: { label: "Maintenance", value: "↓ 30–40%" },
      imageId: "/images/cnc-press-brake-hero.png",
    },
    {
      number: "05",
      headline: "Compact Footprint — Fits Tight Shop Floors",
      body: "The swing beam geometry is inherently more compact front-to-back than a guillotine of equivalent cutting width. On a 4000mm machine, the swing beam saves approximately 18\"–24\" of floor depth. In high-density shops where every square foot counts, that difference can determine whether the machine fits your layout.",
      spec: { label: "Footprint", value: "Compact" },
      imageId: "1485827404703-89b55fcc595e",
    },
  ],
  specs: [
    { label: "Material Thickness Capacity (mild steel)", imperial: "0.125\"–0.5\"", metric: "3–12 mm" },
    { label: "Cutting Width Options", imperial: "49\"–157\"", metric: "1250–4000 mm" },
    { label: "Shearing Mechanism", imperial: "Swing beam (upper blade pivots)", metric: "Swing beam (upper blade pivots)" },
    { label: "Lower Blade", imperial: "Fixed", metric: "Fixed" },
    { label: "Strokes Per Minute", imperial: "12–16 SPM", metric: "12–16 SPM" },
    { label: "Back Gauge Travel", imperial: "0–31.5\"", metric: "0–800 mm" },
    { label: "Back Gauge Accuracy", imperial: "±0.002\"", metric: "±0.05 mm" },
    { label: "Hold-Down", imperial: "Hydraulic (full-width)", metric: "Hydraulic (full-width)" },
    { label: "Front Support Arms", imperial: "Yes — adjustable", metric: "Yes — adjustable" },
    { label: "Controller", imperial: "ESA E21S CNC", metric: "ESA E21S CNC" },
    { label: "Hydraulic System", imperial: "Variable displacement pump", metric: "Variable displacement pump" },
    { label: "Power Supply", imperial: "480V, 3-phase, 60 Hz", metric: "380V, 3-phase, 50 Hz" },
  ],
  videoSectionLabel: "See It Shear",
  videoHeadline: "Stainless and Aluminum — Zero Marking",
  configOptions: [
    {
      label: "Thickness Capacity",
      options: ["3mm — precision light gauge work", "6mm — general fabrication", "10mm — structural and heavy gauge", "12mm — maximum capacity"],
      note: "Swing beam capacity is rated for mild steel. Stainless capacity is approximately 60%. Aluminum capacity is approximately 150% of mild steel rating.",
    },
    {
      label: "Cutting Width",
      options: ["1250 mm (49\")", "2000 mm (79\")", "2500 mm (98\")", "3200 mm (126\")", "4000 mm (157\")"],
      note: "Match to your standard blank width. For North American 4x8 sheet standard, 2500 mm covers all standard cuts.",
    },
    {
      label: "Back Gauge Control",
      options: ["E21S CNC (standard)", "DA-S graphical touchscreen (upgrade)", "Manual back gauge"],
      note: "CNC back gauge dramatically reduces setup time on repeat jobs. Recommended for shops running more than 15 different parts per week.",
    },
  ],
  comparisonLabel: "Technology",
  comparisonHeadline: "Swing Beam vs. Guillotine Shearing",
  comparisonOursLabel: "Swing Beam",
  comparisonTheirsLabel: "Guillotine",
  comparison: [
    { feature: "Cut blank distortion", ours: "None (lower blade fixed)", theirs: "Minimal with correct rake setting" },
    { feature: "Surface marking on aluminum", ours: "None", theirs: "Possible without protective film" },
    { feature: "Stainless performance", ours: "Excellent", theirs: "Very good" },
    { feature: "Max thickness capacity", ours: "12mm", theirs: "16mm" },
    { feature: "Maintenance complexity", ours: "Lower", theirs: "Standard" },
    { feature: "Floor footprint", ours: "More compact", theirs: "Standard" },
    { feature: "Rake angle adjustment", ours: "Fixed by geometry", theirs: "Adjustable 1°–2.5°" },
    { feature: "Cost", ours: "Comparable", theirs: "Comparable" },
  ],
  relatedProducts: [
    { name: "Guillotine & Swing Beam Shearing", href: "/fabrication/shearing-machine", tag: "Shearing", imageId: "/images/shearing-guillotine-hero.png" },
    { name: "CNC Press Brake", href: "/fabrication/cnc-press-brake", tag: "Bending", imageId: "/images/cnc-press-brake-hero.png" },
    { name: "Ironworker", href: "/fabrication/ironworker", tag: "Multi-Function", imageId: "/images/ironworker-hero.png" },
    { name: "Fiber Laser Cutting Machine", href: "/fabrication/fiber-laser-cutting-machine", tag: "Cutting", imageId: "/images/fiber-laser-hero.png" },
  ],
  faqs: [
    {
      question: "Why choose a swing beam shear over a guillotine for my shop?",
      answer: "If your primary materials are stainless steel, polished aluminum, or any material where surface finish and blank flatness are critical, the swing beam is the better choice. The fixed lower blade eliminates any chance of marking the sheet bottom and produces flatter blanks than a guillotine on thin gauge material. If you regularly cut mild steel plate above 12mm, a guillotine is required — the swing beam tops out at 12mm.",
    },
    {
      question: "Can a swing beam shear cut stainless steel at the same capacity as mild steel?",
      answer: "No — as with all shearing machines, stainless steel capacity is approximately 60–65% of the mild steel rating. A 10mm mild steel machine cuts stainless to approximately 6mm. This is a function of stainless tensile strength, not machine design. The swing beam blade geometry does distribute shear force more favorably on stainless, resulting in better edge quality compared to a guillotine at the same percentage of rated capacity.",
    },
    {
      question: "Is the swing beam shear harder to maintain?",
      answer: "Generally no — the swing beam design has fewer moving hydraulic components than an equivalent guillotine. The pivot pin assembly, blade fasteners, and hydraulic seals cover the majority of scheduled maintenance tasks. VTM provides a complete maintenance schedule and parts list with every machine, and US-based spare parts inventory covers all common wear items for next-day shipping.",
    },
    {
      question: "What is the typical lead time and installation process?",
      answer: "Lead time is typically 8–12 weeks from confirmed order. Installation includes machine leveling, blade gap verification, hydraulic commissioning, and back gauge calibration. Operator training (typically one day) is included. VTM installation engineers handle all commissioning and will not sign off until first-article cuts meet specification.",
    },
    {
      question: "Can I cut aluminum sheet without scratching the bottom surface?",
      answer: "Yes — this is one of the primary reasons shops choose the swing beam over a guillotine for aluminum work. The fixed lower blade means the cut blank lifts away without any lateral contact. For extremely sensitive polished aluminum, front support arms and a smooth lower table surface are recommended. Many shops eliminate protective film on aluminum entirely after switching to a swing beam shear.",
    },
  ],
};

const es: ProductPageData = {
  category: "Fabricación",
  slug: "shearing-machine/swing-beam",
  machineName: "Cizalla de Viga Oscilante",
  heroSubheadline:
    "Cizallado hidráulico de viga oscilante de 3 mm a 12 mm. La viga superior oscila sobre un pivote fijo — la cuchilla inferior nunca se mueve, eliminando la distorsión en la pieza en blanco. Preferida para acero inoxidable y aluminio donde el acabado superficial importa.",
  heroImageId: "1558618666-fcd25c85cd64",
  features: [
    {
      number: "01",
      headline: "Viga Superior Oscilante — La Cuchilla Inferior Nunca Se Mueve",
      body: "En un diseño de viga oscilante, la cuchilla superior pivota sobre un arco fijo mientras la cuchilla inferior es estacionaria. El material cortado cae directamente hacia abajo después del cizallado — nunca arrastra sobre una cuchilla inferior en movimiento. Esto elimina el rayado y marcado que las guillotinas pueden producir en materiales blandos como el aluminio y el inoxidable pulido.",
      spec: { label: "Cuchilla Inferior", value: "Fija — nunca se mueve" },
      imageId: "/images/shearing-guillotine-hero.png",
    },
    {
      number: "02",
      headline: "Sin Distorsión en la Pieza en Blanco",
      body: "Debido a que la pieza en blanco cortada cae limpiamente sin contacto lateral con la cuchilla, las cizallas de viga oscilante producen piezas en blanco más planas y rectas que las guillotinas en material de calibre delgado. Para talleres de chapa metálica que producen piezas en blanco que van directamente a una prensa dobladora o prensa troqueladora, la planitud de la cizalla afecta directamente el rendimiento.",
      spec: { label: "Planitud de la Pieza", value: "Superior" },
      imageId: "/images/ironworker-hero.png",
    },
    {
      number: "03",
      headline: "Ideal para Acero Inoxidable y Aluminio",
      body: "El acero inoxidable se endurece por deformación en la zona de cizallado — la geometría de cuchilla inferior fija de una viga oscilante distribuye la fuerza de cizallado más favorablemente en el inoxidable que una guillotina a capacidad equivalente. El aluminio y los materiales pulidos se benefician de la cuchilla inferior sin contacto — sin marcas, sin necesidad de película protectora.",
      spec: { label: "Rendimiento Inox.", value: "Optimizado" },
      imageId: "1565514020179-026b92b84bb6",
    },
    {
      number: "04",
      headline: "Mantenimiento Más Simple — Menos Componentes Móviles",
      body: "Las máquinas de viga oscilante tienen menos circuitos hidráulicos y conjuntos mecánicos que las guillotinas equivalentes. El espacio de la cuchilla es fijo por diseño en lugar de requerir ajuste con energía. Las inspecciones del pasador pivote y los sujetadores de cuchilla cubren la mayoría del mantenimiento programado. El tiempo total de mantenimiento anual es típicamente 30–40% menor.",
      spec: { label: "Mantenimiento", value: "↓ 30–40%" },
      imageId: "/images/cnc-press-brake-hero.png",
    },
    {
      number: "05",
      headline: "Huella Compacta — Cabe en Pisos de Taller Reducidos",
      body: "La geometría de viga oscilante es inherentemente más compacta de frente a fondo que una guillotina de ancho de corte equivalente. En una máquina de 4000 mm, la viga oscilante ahorra aproximadamente 18\"–24\" de profundidad de piso. En talleres de alta densidad donde cada pie cuadrado cuenta, esa diferencia puede determinar si la máquina cabe en su distribución.",
      spec: { label: "Huella", value: "Compacta" },
      imageId: "1485827404703-89b55fcc595e",
    },
  ],
  specs: [
    { label: "Capacidad de Espesor (acero dulce)", imperial: "0.125\"–0.5\"", metric: "3–12 mm" },
    { label: "Opciones de Ancho de Corte", imperial: "49\"–157\"", metric: "1250–4000 mm" },
    { label: "Mecanismo de Cizallado", imperial: "Viga oscilante (la cuchilla superior pivota)", metric: "Viga oscilante (la cuchilla superior pivota)" },
    { label: "Cuchilla Inferior", imperial: "Fija", metric: "Fija" },
    { label: "Golpes por Minuto", imperial: "12–16 GPM", metric: "12–16 GPM" },
    { label: "Recorrido del Tope Trasero", imperial: "0–31.5\"", metric: "0–800 mm" },
    { label: "Precisión del Tope Trasero", imperial: "±0.002\"", metric: "±0.05 mm" },
    { label: "Sujeción", imperial: "Hidráulica (ancho completo)", metric: "Hidráulica (ancho completo)" },
    { label: "Brazos de Soporte Frontales", imperial: "Sí — ajustables", metric: "Sí — ajustables" },
    { label: "Controlador", imperial: "ESA E21S CNC", metric: "ESA E21S CNC" },
    { label: "Sistema Hidráulico", imperial: "Bomba de desplazamiento variable", metric: "Bomba de desplazamiento variable" },
    { label: "Alimentación Eléctrica", imperial: "480V, trifásico, 60 Hz", metric: "380V, trifásico, 50 Hz" },
  ],
  videoSectionLabel: "Véala Cortar",
  videoHeadline: "Inoxidable y Aluminio — Sin Marcas",
  configOptions: [
    {
      label: "Capacidad de Espesor",
      options: ["3 mm — trabajo de calibre ligero de precisión", "6 mm — fabricación general", "10 mm — calibre estructural y pesado", "12 mm — capacidad máxima"],
      note: "La capacidad de viga oscilante está calificada para acero dulce. La capacidad de inoxidable es aproximadamente el 60%. La capacidad de aluminio es aproximadamente el 150% de la calificación de acero dulce.",
    },
    {
      label: "Ancho de Corte",
      options: ["1250 mm (49\")", "2000 mm (79\")", "2500 mm (98\")", "3200 mm (126\")", "4000 mm (157\")"],
      note: "Corresponde a su ancho de pieza en blanco estándar. Para el estándar norteamericano de láminas 4×8, 2500 mm cubre todos los cortes estándar.",
    },
    {
      label: "Control del Tope Trasero",
      options: ["E21S CNC (estándar)", "Pantalla táctil gráfica DA-S (actualización)", "Tope trasero manual"],
      note: "El tope trasero CNC reduce drásticamente el tiempo de configuración en trabajos repetitivos. Recomendado para talleres que ejecutan más de 15 piezas diferentes por semana.",
    },
  ],
  comparisonLabel: "Tecnología",
  comparisonHeadline: "Viga Oscilante vs. Guillotina",
  comparisonOursLabel: "Viga Oscilante",
  comparisonTheirsLabel: "Guillotina",
  comparison: [
    { feature: "Distorsión de la pieza en blanco", ours: "Ninguna (cuchilla inferior fija)", theirs: "Mínima con ajuste correcto de inclinación" },
    { feature: "Marcado de superficie en aluminio", ours: "Ninguno", theirs: "Posible sin película protectora" },
    { feature: "Rendimiento en inoxidable", ours: "Excelente", theirs: "Muy bueno" },
    { feature: "Capacidad máxima de espesor", ours: "12 mm", theirs: "16 mm" },
    { feature: "Complejidad de mantenimiento", ours: "Menor", theirs: "Estándar" },
    { feature: "Huella de piso", ours: "Más compacta", theirs: "Estándar" },
    { feature: "Ajuste del ángulo de inclinación", ours: "Fijo por geometría", theirs: "Ajustable 1°–2.5°" },
    { feature: "Costo", ours: "Comparable", theirs: "Comparable" },
  ],
  relatedProducts: [
    { name: "Guillotinas y Viga Oscilante", href: "/fabrication/shearing-machine", tag: "Cizallado", imageId: "/images/shearing-guillotine-hero.png" },
    { name: "Prensa Dobladora CNC", href: "/fabrication/cnc-press-brake", tag: "Doblado", imageId: "/images/cnc-press-brake-hero.png" },
    { name: "Punzonadora Hidráulica", href: "/fabrication/ironworker", tag: "Multifunción", imageId: "/images/ironworker-hero.png" },
    { name: "Máquina de Corte Láser de Fibra", href: "/fabrication/fiber-laser-cutting-machine", tag: "Corte", imageId: "/images/fiber-laser-hero.png" },
  ],
  faqs: [
    {
      question: "¿Por qué elegir una cizalla de viga oscilante sobre una guillotina?",
      answer: "Si sus materiales principales son acero inoxidable, aluminio pulido o cualquier material donde el acabado superficial y la planitud de la pieza en blanco son críticos, la viga oscilante es la mejor opción. La cuchilla inferior fija elimina cualquier posibilidad de marcar la parte inferior de la lámina y produce piezas en blanco más planas que una guillotina en material de calibre delgado. Si corta regularmente placa de acero dulce de más de 12 mm, se requiere una guillotina.",
    },
    {
      question: "¿Puede una cizalla de viga oscilante cortar acero inoxidable a la misma capacidad que el acero dulce?",
      answer: "No — como con todas las cizallas, la capacidad de acero inoxidable es aproximadamente el 60–65% de la calificación de acero dulce. Una máquina de 10 mm para acero dulce corta inoxidable hasta aproximadamente 6 mm. Esto es una función de la resistencia a la tracción del inoxidable, no del diseño de la máquina. La geometría de cuchilla de viga oscilante distribuye la fuerza de cizallado más favorablemente en el inoxidable.",
    },
    {
      question: "¿Es más difícil mantener la cizalla de viga oscilante?",
      answer: "Generalmente no — el diseño de viga oscilante tiene menos componentes hidráulicos móviles que una guillotina equivalente. El conjunto del pasador pivote, los sujetadores de cuchilla y los sellos hidráulicos cubren la mayoría de las tareas de mantenimiento programado. VTM proporciona un programa completo de mantenimiento y lista de piezas con cada máquina, y el inventario de repuestos en EE.UU. cubre todos los artículos de desgaste comunes para envío al día siguiente.",
    },
    {
      question: "¿Cuál es el tiempo de entrega típico y el proceso de instalación?",
      answer: "El tiempo de entrega es típicamente de 8–12 semanas desde el pedido confirmado. La instalación incluye nivelación de la máquina, verificación del espacio de cuchilla, puesta en marcha hidráulica y calibración del tope trasero. La capacitación del operador (típicamente un día) está incluida. Los ingenieros de instalación VTM manejan toda la puesta en marcha.",
    },
    {
      question: "¿Puedo cortar lámina de aluminio sin rayar la superficie inferior?",
      answer: "Sí — esta es una de las principales razones por las que los talleres eligen la viga oscilante sobre la guillotina para trabajo con aluminio. La cuchilla inferior fija significa que la pieza en blanco cortada se levanta sin ningún contacto lateral. Para aluminio pulido extremadamente sensible, se recomiendan brazos de soporte frontales y una superficie de mesa inferior lisa. Muchos talleres eliminan la película protectora en el aluminio por completo después de cambiar a una cizalla de viga oscilante.",
    },
  ],
};

export const content: Record<"en" | "es", ProductPageData> = { en, es };
