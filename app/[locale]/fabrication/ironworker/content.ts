import type { ProductPageData } from "@/components/product/ProductPageTemplate";

const en: ProductPageData = {
  category: "Fabrication",
  slug: "ironworker",
  machineName: "Hydraulic Ironworker",
  heroSubheadline:
    "55 to 110 ton hydraulic ironworker. Five work stations — punching, notching, flat bar shear, angle iron shear, and profile shearing — in a single machine. Replace five separate machines with one compact, low-maintenance workhorse.",
  heroImageId: "/images/ironworker-hero.png",
  features: [
    {
      number: "01",
      headline: "Five Work Stations — One Machine, One Footprint",
      body: "The hydraulic ironworker combines punching, notching, flat bar shearing, angle iron shearing, and profile shearing in a single machine body. No separate hydraulic power units, no additional footprint. Operators move between stations in seconds rather than minutes — or run two different operations simultaneously with the dual-operator option.",
      spec: { label: "Work Stations", value: "5" },
      imageId: "/images/ironworker-feature-01-stations.png",
    },
    {
      number: "02",
      headline: "Punch Holes to 38mm Diameter in 12mm Plate",
      body: "The punching station develops full tonnage across its range — from small pilot holes through 38mm (1.5\") diameter in 12mm (0.5\") mild steel plate. Standard tooling accepts round, square, oblong, and custom punch profiles. The punch holder accepts standard US and European punch-and-die sets, protecting your existing tooling investment.",
      spec: { label: "Max Punch Dia.", value: "38 mm (1.5\")" },
      imageId: "/images/ironworker-feature-02-punching.png",
    },
    {
      number: "03",
      headline: "Angle Iron Notching — Clean, Square Corners",
      body: "The notching station shears angle iron at 90°, 60°, and 45° in a single stroke — producing clean corner joints ready for welding without grinding or secondary cutting. Notch mild steel angle to 5\" × 5\" × 0.5\" in a single hydraulic stroke. No blade setup — the hardened steel notching blades last tens of thousands of cycles.",
      spec: { label: "Max Angle Notch", value: "5\" × 5\" × 0.5\"" },
      imageId: "/images/ironworker-feature-03-notching.png",
    },
    {
      number: "04",
      headline: "Flat Bar Shear — 6\" Width at 0.625\" Thickness",
      body: "The flat bar shearing station cuts structural flat bar to 6\" (150mm) wide at 0.625\" (16mm) thickness in mild steel. Drop-cut design — the scrap piece drops clear without manual handling. Adjustable backstop with memory marks for production runs. Length marks on the work table for measuring cuts without a separate layout step.",
      spec: { label: "Flat Bar Shear", value: "6\" × 0.625\"" },
      imageId: "/images/ironworker-feature-04-flatbar.png",
    },
    {
      number: "05",
      headline: "V-Die Bending Attachment — Short Bends Without a Press Brake",
      body: "An optional V-die bending attachment mounts directly into the punching station, turning the ironworker into a compact press brake for short bends. Ideal for brackets, clips, and small formed parts that don't justify moving material to a full press brake. Sold separately — ask your VTM sales engineer for compatible die sets and capacity for your tonnage model.",
      spec: { label: "Availability", value: "Optional add-on" },
      imageId: "/images/ironworker-feature-05-vdie.jpg",
    },
  ],
  specs: [
    { label: "Tonnage Options", imperial: "55 Ton / 80 Ton / 110 Ton", metric: "55T / 80T / 110T" },
    { label: "Punching Capacity (mild steel)", imperial: "Up to 1.5\" dia. in 0.5\" plate (110T)", metric: "Up to 38 mm dia. in 12 mm plate" },
    { label: "Throat Depth", imperial: "16\"", metric: "406 mm" },
    { label: "Flat Bar Shear Capacity", imperial: "6\" wide × 0.625\" thick", metric: "150 mm wide × 16 mm thick" },
    { label: "Angle Iron Shear Capacity", imperial: "5\" × 5\" × 0.5\"", metric: "125 mm × 125 mm × 12 mm" },
    { label: "Angle Iron Notch Angles", imperial: "90° / 60° / 45°", metric: "90° / 60° / 45°" },
    { label: "Tube Notcher Capacity", imperial: "Up to 4\" square tube, 0.25\" wall", metric: "Up to 100 mm square, 6 mm wall" },
    { label: "Plate Shear Capacity", imperial: "8\" × 0.5\"", metric: "200 mm × 12 mm" },
    { label: "Work Stations", imperial: "5 (punch, notch, flat bar, angle, tube)", metric: "5 stations" },
    { label: "Hydraulic System Pressure", imperial: "3000 PSI", metric: "207 bar" },
    { label: "Tooling Compatibility", imperial: "US standard and European style", metric: "US standard and European style" },
    { label: "Machine Weight (110T)", imperial: "~8,800 lbs", metric: "~4,000 kg" },
    { label: "Power Supply", imperial: "208–480V, 3-phase", metric: "380V, 3-phase" },
  ],
  videoSectionLabel: "See It Work",
  videoHeadline: "Five Operations — One Machine",
  configOptions: [
    {
      label: "Tonnage",
      options: ["55 Ton — light structural, angle iron, flat bar to 3/8\"", "80 Ton — general fabrication, 1/2\" flat bar", "110 Ton — heavy structural, 5/8\" flat bar, punching in thick plate"],
      note: "Higher tonnage handles thicker material and larger punch diameters. Most general fabrication shops select 80T as the best balance of capability and cost.",
    },
    {
      label: "Operation Mode",
      options: ["Single operator (one station at a time)", "Dual operator (two stations simultaneously)", "Foot pedal control (standard)", "Hand lever control (optional)"],
      note: "Dual operator mode allows two workers to use different stations at the same time — doubling throughput on mixed-operation jobs.",
    },
    {
      label: "Tooling Package",
      options: ["Standard round punch set (8 sizes)", "Extended punch set (16 sizes)", "Oblong and square punch set", "Quick-change tooling holders"],
      note: "Quick-change tool holders reduce punch changeover time from 5 minutes to under 60 seconds — worthwhile on high-mix operations.",
    },
  ],
  comparisonLabel: "Technology",
  comparisonHeadline: "Ironworker vs. Separate Individual Machines",
  comparisonOursLabel: "Ironworker",
  comparisonTheirsLabel: "Separate Machines",
  comparison: [
    { feature: "Footprint", ours: "One machine", theirs: "5× separate footprints" },
    { feature: "Capital cost", ours: "Lower total", theirs: "Higher (5 separate purchases)" },
    { feature: "Power connections required", ours: "One", theirs: "Up to 5" },
    { feature: "Maintenance overhead", ours: "One hydraulic system", theirs: "5 separate systems" },
    { feature: "Operator mobility between tasks", ours: "Steps, not walks", theirs: "Walk across the shop" },
    { feature: "Punching speed (single hole)", ours: "Equivalent", theirs: "Equivalent" },
    { feature: "High-volume punching throughput", ours: "Good", theirs: "Punch press may be faster" },
    { feature: "CNC punching / nesting", ours: "Not available", theirs: "Available in turret punches" },
  ],
  relatedProducts: [
    { name: "CNC Press Brake", href: "/fabrication/cnc-press-brake", tag: "Bending", imageId: "/images/cnc-press-brake-hero.png" },
    { name: "Guillotine & Swing Beam Shearing", href: "/fabrication/shearing-machine", tag: "Shearing", imageId: "/images/shearing-guillotine-hero.png" },
    { name: "Fiber Laser Sheet Cutting Machine", href: "/fabrication/fiber-laser-cutting-machine", tag: "Cutting", imageId: "/images/fiber-laser-hero.png" },
    { name: "Laser Welding Machine", href: "/fabrication/4-in-1-laser-machine", tag: "Welding", imageId: "/images/4in1-laser-hero-2.png" },
  ],
  faqs: [
    {
      question: "What tooling is compatible with the VTM ironworker punching station?",
      answer: "The VTM ironworker accepts standard US-style punch-and-die sets (Wilson, Piranha, Scotchman compatible) as well as European-style tooling. The standard punch holder accepts shank sizes from 1\" to 2\" diameter. Custom punch profiles (oblong, D-shaped, square) are available in standard shank sizes and drop directly into the machine without adapters.",
    },
    {
      question: "Can two operators use the machine simultaneously?",
      answer: "Yes — the 80T and 110T models are available in a dual-operator configuration where independent hydraulic circuits serve different station groups. One operator can punch while another shears flat bar, for example. Both operators use foot pedal controls, and a central interlock prevents station conflicts. The dual-operator option effectively doubles output on mixed-operation jobs.",
    },
    {
      question: "How does maintenance compare to running five separate machines?",
      answer: "Significantly simpler. The ironworker has one hydraulic power unit, one motor, and one set of hydraulic seals to service. Wear items — blades, punch and die sets — are equivalent in quantity to individual machines but concentrated in one location. Most shops report spending 60–70% less time on ironworker maintenance than the equivalent multi-machine shop.",
    },
    {
      question: "What is the typical throughput for punching operations?",
      answer: "Cycle time for a single punch is typically 3–5 seconds including operator positioning and foot pedal actuation. On a simple pattern of 10 holes in a standard plate, experienced operators achieve 20–25 parts per hour. For high-volume repetitive punching (hundreds of identical parts per shift), a CNC turret punch press will outperform an ironworker — contact VTM if your volume justifies that discussion.",
    },
    {
      question: "What floor and power requirements are needed?",
      answer: "The ironworker requires a standard concrete floor — no special foundation pad is needed for the 55T and 80T models. The 110T model benefits from a 4\" thick floor minimum. Power is 3-phase (208V or 480V — specify at order). Machines ship with a main power disconnect. Compressed air is not required. Total floor footprint is approximately 7' × 5' for the 80T model.",
    },
  ],
};

const es: ProductPageData = {
  category: "Fabricación",
  slug: "ironworker",
  machineName: "Punzonadora Hidráulica",
  heroSubheadline:
    "Punzonadora hidráulica de 55 a 110 toneladas. Cinco estaciones de trabajo — punzonado, muescado, cizallado de pletina, cizallado de ángulo y cizallado de perfiles — en una sola máquina. Reemplace cinco máquinas separadas con una sola estación de trabajo compacta y de bajo mantenimiento.",
  heroImageId: "/images/ironworker-hero.png",
  features: [
    {
      number: "01",
      headline: "Cinco Estaciones de Trabajo — Una Máquina, Una Huella",
      body: "La punzonadora hidráulica combina punzonado, muescado, cizallado de pletina, cizallado de ángulo y cizallado de perfiles en un solo cuerpo de máquina. Sin unidades de potencia hidráulica separadas, sin huella adicional. Los operadores se mueven entre estaciones en segundos en lugar de minutos — o ejecutan dos operaciones diferentes simultáneamente con la opción de doble operador.",
      spec: { label: "Estaciones de Trabajo", value: "5" },
      imageId: "/images/ironworker-feature-01-stations.png",
    },
    {
      number: "02",
      headline: "Punzonado hasta 38 mm de Diámetro en Placa de 12 mm",
      body: "La estación de punzonado desarrolla tonelaje completo en todo su rango — desde pequeños agujeros piloto hasta 38 mm (1.5\") de diámetro en placa de acero dulce de 12 mm (0.5\"). Las herramientas estándar aceptan perfiles de punzón redondos, cuadrados, oblongos y personalizados. El portapunzones acepta juegos de punzón y troquel estilo americano y europeo.",
      spec: { label: "Diám. Máx. de Punzón", value: "38 mm (1.5\")" },
      imageId: "/images/ironworker-feature-02-punching.png",
    },
    {
      number: "03",
      headline: "Muescado de Ángulo — Esquinas Limpias y Cuadradas",
      body: "La estación de muescado cizalla el ángulo de hierro a 90°, 60° y 45° en un solo golpe — produciendo juntas de esquina limpias listas para soldar sin esmerilado o corte secundario. Muesca el ángulo de acero dulce hasta 5\" × 5\" × 0.5\" en un solo golpe hidráulico. Sin configuración de cuchilla.",
      spec: { label: "Muesca Máx. de Ángulo", value: "5\" × 5\" × 0.5\"" },
      imageId: "/images/ironworker-feature-03-notching.png",
    },
    {
      number: "04",
      headline: "Cizalla de Pletina — 6\" de Ancho a 0.625\" de Espesor",
      body: "La estación de cizallado de pletina corta pletina estructural hasta 6\" (150 mm) de ancho a 0.625\" (16 mm) de espesor en acero dulce. Diseño de corte por gravedad — la pieza de desperdicio cae sin manipulación manual. Tope trasero ajustable con marcas de memoria para producciones en serie.",
      spec: { label: "Cizalla de Pletina", value: "6\" × 0.625\"" },
      imageId: "/images/ironworker-feature-04-flatbar.png",
    },
    {
      number: "05",
      headline: "Accesorio de Plegado con Troquel en V — Dobleces Cortos Sin Plegadora",
      body: "Un accesorio opcional de troquel en V se monta directamente en la estación de punzonado, convirtiendo la punzonadora en una prensa plegadora compacta para dobleces cortos. Ideal para soportes, grapas y piezas formadas pequeñas que no justifican mover el material a una prensa plegadora completa. Se vende por separado — consulte a su asesor de ventas VTM para los troqueles compatibles y la capacidad de su modelo.",
      spec: { label: "Disponibilidad", value: "Accesorio opcional" },
      imageId: "/images/ironworker-feature-05-vdie.jpg",
    },
  ],
  specs: [
    { label: "Opciones de Tonelaje", imperial: "55 T / 80 T / 110 T", metric: "55T / 80T / 110T" },
    { label: "Capacidad de Punzonado (acero dulce)", imperial: "Hasta 1.5\" diám. en placa de 0.5\" (110T)", metric: "Hasta 38 mm diám. en placa de 12 mm" },
    { label: "Profundidad de Garganta", imperial: "16\"", metric: "406 mm" },
    { label: "Capacidad de Cizalla de Pletina", imperial: "6\" ancho × 0.625\" grueso", metric: "150 mm ancho × 16 mm grueso" },
    { label: "Capacidad de Cizalla de Ángulo", imperial: "5\" × 5\" × 0.5\"", metric: "125 mm × 125 mm × 12 mm" },
    { label: "Ángulos de Muesca de Ángulo", imperial: "90° / 60° / 45°", metric: "90° / 60° / 45°" },
    { label: "Capacidad de Muescador de Tubo", imperial: "Hasta tubo cuadrado de 4\", pared de 0.25\"", metric: "Hasta tubo cuadrado de 100 mm, pared de 6 mm" },
    { label: "Capacidad de Cizalla de Placa", imperial: "8\" × 0.5\"", metric: "200 mm × 12 mm" },
    { label: "Estaciones de Trabajo", imperial: "5 (punzonado, muescado, pletina, ángulo, tubo)", metric: "5 estaciones" },
    { label: "Presión del Sistema Hidráulico", imperial: "3000 PSI", metric: "207 bar" },
    { label: "Compatibilidad de Herramientas", imperial: "Estilo americano estándar y europeo", metric: "Estilo americano estándar y europeo" },
    { label: "Peso de la Máquina (110T)", imperial: "~8,800 lbs", metric: "~4,000 kg" },
    { label: "Alimentación Eléctrica", imperial: "208–480V, trifásico", metric: "380V, trifásico" },
  ],
  videoSectionLabel: "Véala Trabajar",
  videoHeadline: "Cinco Operaciones — Una Máquina",
  configOptions: [
    {
      label: "Tonelaje",
      options: ["55 T — estructural ligero, ángulo, pletina hasta 3/8\"", "80 T — fabricación general, pletina de 1/2\"", "110 T — estructural pesado, pletina de 5/8\", punzonado en placa gruesa"],
      note: "Mayor tonelaje maneja material más grueso y diámetros de punzón más grandes. La mayoría de los talleres de fabricación general seleccionan 80T como el mejor equilibrio entre capacidad y costo.",
    },
    {
      label: "Modo de Operación",
      options: ["Operador único (una estación a la vez)", "Doble operador (dos estaciones simultáneamente)", "Control por pedal de pie (estándar)", "Control por palanca manual (opcional)"],
      note: "El modo de doble operador permite que dos trabajadores usen diferentes estaciones al mismo tiempo — duplicando el rendimiento en trabajos de operación mixta.",
    },
    {
      label: "Paquete de Herramientas",
      options: ["Juego de punzones redondos estándar (8 tamaños)", "Juego de punzones extendido (16 tamaños)", "Juego de punzones oblongos y cuadrados", "Portaherramientas de cambio rápido"],
      note: "Los portaherramientas de cambio rápido reducen el tiempo de cambio de punzón de 5 minutos a menos de 60 segundos — útil en operaciones de alta variedad.",
    },
  ],
  comparisonLabel: "Tecnología",
  comparisonHeadline: "Punzonadora vs. Máquinas Individuales Separadas",
  comparisonOursLabel: "Punzonadora",
  comparisonTheirsLabel: "Máquinas Separadas",
  comparison: [
    { feature: "Huella", ours: "Una máquina", theirs: "5× huellas separadas" },
    { feature: "Costo de capital", ours: "Total menor", theirs: "Mayor (5 compras separadas)" },
    { feature: "Conexiones eléctricas requeridas", ours: "Una", theirs: "Hasta 5" },
    { feature: "Sobrecarga de mantenimiento", ours: "Un sistema hidráulico", theirs: "5 sistemas separados" },
    { feature: "Movilidad del operador entre tareas", ours: "Pasos, no caminatas", theirs: "Caminar por el taller" },
    { feature: "Velocidad de punzonado (agujero único)", ours: "Equivalente", theirs: "Equivalente" },
    { feature: "Rendimiento de punzonado de alto volumen", ours: "Bueno", theirs: "La prensa perforadora puede ser más rápida" },
    { feature: "Punzonado CNC / anidamiento", ours: "No disponible", theirs: "Disponible en prensas de torreta" },
  ],
  relatedProducts: [
    { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", tag: "Plegado", imageId: "/images/cnc-press-brake-hero.png" },
    { name: "Guillotinas y Viga Oscilante", href: "/fabrication/shearing-machine", tag: "Cizallado", imageId: "/images/shearing-guillotine-hero.png" },
    { name: "Cortadora Láser de Chapa", href: "/fabrication/fiber-laser-cutting-machine", tag: "Corte", imageId: "/images/fiber-laser-hero.png" },
    { name: "Máquina de Soldadura Láser", href: "/fabrication/4-in-1-laser-machine", tag: "Soldadura", imageId: "/images/4in1-laser-hero-2.png" },
  ],
  faqs: [
    {
      question: "¿Qué herramientas son compatibles con la estación de punzonado de la punzonadora VTM?",
      answer: "La punzonadora VTM acepta juegos de punzón y troquel estilo americano estándar (compatibles con Wilson, Piranha, Scotchman) así como herramientas estilo europeo. El portapunzones estándar acepta tamaños de vástago de 1\" a 2\" de diámetro. Los perfiles de punzón personalizados (oblongos, en D, cuadrados) están disponibles en tamaños de vástago estándar.",
    },
    {
      question: "¿Pueden dos operadores usar la máquina simultáneamente?",
      answer: "Sí — los modelos de 80T y 110T están disponibles en una configuración de doble operador donde circuitos hidráulicos independientes sirven a diferentes grupos de estaciones. Un operador puede punzonar mientras otro cizalla pletina, por ejemplo. Ambos operadores usan controles de pedal de pie y un enclavamiento central evita conflictos entre estaciones.",
    },
    {
      question: "¿Cómo se compara el mantenimiento con el de cinco máquinas separadas?",
      answer: "Significativamente más simple. La punzonadora tiene una unidad de potencia hidráulica, un motor y un conjunto de sellos hidráulicos para dar servicio. Los elementos de desgaste — cuchillas, juegos de punzón y troquel — son equivalentes en cantidad a las máquinas individuales pero concentrados en un solo lugar. La mayoría de los talleres reportan gastar 60–70% menos tiempo en el mantenimiento de la punzonadora.",
    },
    {
      question: "¿Cuál es el rendimiento típico para operaciones de punzonado?",
      answer: "El tiempo de ciclo para un solo punzonado es típicamente de 3–5 segundos incluyendo el posicionamiento del operador y la actuación del pedal de pie. En un patrón simple de 10 agujeros en una placa estándar, los operadores experimentados logran 20–25 piezas por hora.",
    },
    {
      question: "¿Qué requisitos de piso y energía se necesitan?",
      answer: "La punzonadora requiere un piso de concreto estándar — no se necesita ninguna placa de cimentación especial para los modelos de 55T y 80T. El modelo de 110T se beneficia de un piso mínimo de 4\" de espesor. La alimentación es trifásica (208V o 480V — especificar al ordenar). Las máquinas se envían con un desconectador de alimentación principal.",
    },
  ],
};

export const content: Record<"en" | "es", ProductPageData> = { en, es };
