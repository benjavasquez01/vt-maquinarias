import type { ProductPageData } from "@/components/product/ProductPageTemplate";

const en: ProductPageData = {
  category: "Fabrication",
  slug: "laser-welding-machine",
  machineName: "Laser Welding Machine",
  heroSubheadline:
    "1.5 kW to 3 kW handheld and robotic laser welding. Welds steel, stainless, aluminum, and copper with no consumables, minimal heat distortion, and a seamless bead appearance that requires almost no post-processing.",
  heroImageId: "1504328345606-18bbc8c9d7d1",
  features: [
    {
      number: "01",
      headline: "No Consumables — Eliminate Wire and Gas Costs",
      body: "Laser welding requires no filler wire and uses only a small shielding gas flow (nitrogen or argon). Consumable costs per linear foot are a fraction of MIG or TIG. The fiber delivery cable lasts tens of thousands of hours without replacement.",
      spec: { label: "Consumables", value: "None" },
      imageId: "1504328345606-18bbc8c9d7d1",
    },
    {
      number: "02",
      headline: "Minimal Heat Input — Zero Distortion on Thin Sections",
      body: "The tightly focused laser spot delivers energy only where you need it. Heat-affected zone is typically 50–80% smaller than TIG. Thin-wall tubes and sheet metal under 1.5 mm weld without warping — a common problem with conventional arc welding.",
      spec: { label: "HAZ Reduction", value: "Up to 80%" },
      imageId: "1518770660439-4636190af475",
    },
    {
      number: "03",
      headline: "5× Faster Than TIG — Welding Speed Up to 7.2 m/min",
      body: "Welding travel speed up to 7.2 m/min (120 mm/s) dramatically outpaces manual TIG. Robotic integration compounds the advantage — consistent speed, no fatigue, and no spatter cleanup between passes. Cycle times that took 20 minutes with TIG routinely drop below 4 minutes.",
      spec: { label: "Welding Speed", value: "0–7.2 m/min" },
      imageId: "1565514020179-026b92b84bb6",
    },
    {
      number: "04",
      headline: "Works on Reflective Metals — Copper, Brass, Aluminum",
      body: "1070 nm fiber laser wavelength is efficiently absorbed by copper and aluminum — materials that historically caused back-reflection damage in CO₂ laser systems. Weld copper busbars, aluminum heat exchangers, and brass fittings without material-specific system changes.",
      spec: { label: "Wavelength", value: "1070 nm" },
      imageId: "1565793248595-fad6d33f2f41",
    },
    {
      number: "05",
      headline: "Seamless Bead — Minimal Grinding Required",
      body: "Laser weld beads are narrow, consistent, and nearly flush with the parent material. On cosmetic stainless and aluminum work, the weld can be polished directly to a mirror finish with no grinding. Reduces post-weld labor by 60–70% on appearance-critical parts.",
      spec: { label: "Post-Weld Labor", value: "↓ 60–70%" },
      imageId: "1558618666-fcd25c85cd64",
    },
  ],
  specs: [
    { label: "Laser Power Supply", imperial: "1500 W / 2000 W / 3000 W", metric: "1500 W / 2000 W / 3000 W" },
    { label: "Power Adjustment Range", imperial: "10% – 100%", metric: "10% – 100%" },
    { label: "Output Central Wavelength", imperial: "1070 ± 20 nm", metric: "1070 ± 20 nm" },
    { label: "Cooling Method", imperial: "Water cooling", metric: "Water cooling" },
    { label: "Welding Width", imperial: "0 – 0.20\"", metric: "0 – 5 mm" },
    { label: "Cleaning Width", imperial: "Max. 3.15\"", metric: "Max. 80 mm" },
    { label: "Wire Diameter", imperial: "0.031\" / 0.039\" / 0.047\" / 0.063\"", metric: "0.8 / 1.0 / 1.2 / 1.6 mm" },
    { label: "Max. Wire Feeding Speed", imperial: "236 in/min", metric: "100 mm/s" },
    { label: "Available Upgrades", imperial: "Smoke Purifier", metric: "Smoke Purifier" },
  ],
  videoSectionLabel: "See It Weld",
  videoHeadline: "Laser vs. TIG — Side by Side",
  configOptions: [
    {
      label: "Power Level",
      options: ["1500W — sheet metal and thin-wall tube", "2000W — general fabrication up to 4mm", "3000W — heavy section and structural"],
      note: "Higher power expands your material thickness range and increases welding speed on thicker sections.",
    },
    {
      label: "Delivery Mode",
      options: ["Handheld wobble head", "Robotic arm integration package", "Gantry-mounted fixed station"],
      note: "Handheld is ideal for prototype and repair work. Robotic integration delivers the highest throughput for production runs.",
    },
    {
      label: "Wire Feed",
      options: ["Cold wire feed (standard)", "Hot wire feed (for gap bridging)", "No wire (autogenous mode)"],
      note: "Cold wire is recommended for most applications. Hot wire improves productivity on thicker materials with fit-up gaps.",
    },
  ],
  comparisonLabel: "Technology",
  comparisonHeadline: "Laser vs. MIG / TIG Welding",
  comparisonOursLabel: "Laser Welding",
  comparisonTheirsLabel: "MIG / TIG",
  comparison: [
    { feature: "Welding speed", ours: "Up to 5× faster than TIG", theirs: "Baseline" },
    { feature: "Heat-affected zone", ours: "50–80% smaller", theirs: "Large — distortion risk on thin metal" },
    { feature: "Consumables", ours: "None (gas only)", theirs: "Wire, tips, nozzles, rods" },
    { feature: "Post-weld grinding", ours: "Minimal to none", theirs: "Often required" },
    { feature: "Copper & aluminum welding", ours: "Excellent", theirs: "Difficult (TIG) / possible (MIG)" },
    { feature: "Learning curve", ours: "1–2 days to proficiency", theirs: "Months to years (TIG)" },
    { feature: "Spatter", ours: "None", theirs: "Common with MIG" },
    { feature: "Very thick plate (>12mm)", ours: "Limited", theirs: "MIG/FCAW preferred" },
  ],
  relatedProducts: [
    { name: "Fiber Laser Sheet Cutting Machine", href: "/fabrication/fiber-laser-cutting-machine", tag: "Cutting", imageId: "/images/fiber-laser-hero.png" },
    { name: "Laser Cleaning Machine", href: "/fabrication/laser-cleaning-machine", tag: "Cleaning", imageId: "/images/laser-cleaning-hero.png" },
    { name: "CNC Press Brake", href: "/fabrication/cnc-press-brake", tag: "Bending", imageId: "/images/cnc-press-brake-hero.png" },
    { name: "Collaborative Welding Arm", href: "/automation/collaborative-welding-arm", tag: "Automation", imageId: "/images/cobot-welding-hero-2.png" },
  ],
  faqs: [
    {
      question: "What are the main advantages of laser welding over TIG?",
      answer: "Laser welding is typically 3–5× faster than TIG, produces a much smaller heat-affected zone (reducing warping on thin materials), requires no filler wire for autogenous welds, and leaves a cleaner bead that needs minimal post-weld finishing. The learning curve is also dramatically shorter — most operators reach proficiency in 1–2 days versus months for TIG certification.",
    },
    {
      question: "Is laser welding difficult to learn?",
      answer: "The handheld laser welding system is designed for rapid operator adoption. With the wobble head oscillating the beam automatically, the operator focuses on travel speed and direction rather than managing arc length and wire feed separately. VTM includes 2 days of on-site operator training with every machine. Most operators are making production-quality welds by the end of day one.",
    },
    {
      question: "What metals can the laser welder join?",
      answer: "The VTM laser welder handles mild steel, stainless steel (all grades), aluminum alloys, copper, brass, titanium, and dissimilar metal combinations (e.g., stainless to copper). It is not suitable for welding plastics or non-metals. For galvanized steel, proper ventilation is essential due to zinc vapor.",
    },
    {
      question: "Can I use the laser welder for repair work as well as production?",
      answer: "Yes. The handheld mode is particularly well-suited to repair work — mold repair, thin-wall component restoration, and cosmetic touch-ups on finished parts. The low heat input means repairs on assembled or partially machined parts carry minimal distortion risk. The system can be switched from handheld to robotic mode as your needs evolve.",
    },
    {
      question: "What is the return on investment timeline?",
      answer: "Most VTM customers in production welding environments see payback in 12–24 months. The calculation combines reduced labor (faster weld speeds), eliminated consumable costs, and reduced post-weld grinding labor. Shops doing high-volume stainless or aluminum work typically see the fastest payback due to the dramatic improvement in bead quality and the elimination of passivation rework.",
    },
    {
      question: "What safety measures are required?",
      answer: "FDA Class IV laser — proper laser safety eyewear (OD 5+ at 1070 nm), an interlocked work area for robotic installations, and fume extraction are mandatory. VTM provides a full safety startup package including appropriate PPE, signage, and safety procedure documentation. We recommend a brief laser safety officer (LSO) training for at least one person in your facility, which VTM can coordinate.",
    },
  ],
};

const es: ProductPageData = {
  category: "Fabricación",
  slug: "laser-welding-machine",
  machineName: "Máquina de Soldadura Láser",
  heroSubheadline:
    "Soldadura láser portátil y robótica de 1.5 kW a 3 kW. Suelda acero, inoxidable, aluminio y cobre sin consumibles, con distorsión térmica mínima y una apariencia de cordón perfecta que casi no requiere post-procesamiento.",
  heroImageId: "1504328345606-18bbc8c9d7d1",
  features: [
    {
      number: "01",
      headline: "Sin Consumibles — Elimine los Costos de Alambre y Gas",
      body: "La soldadura láser no requiere alambre de relleno y usa solo un pequeño flujo de gas protector (nitrógeno o argón). Los costos de consumibles por pie lineal son una fracción de los de MIG o TIG. El cable de fibra dura decenas de miles de horas sin reemplazo.",
      spec: { label: "Consumibles", value: "Ninguno" },
      imageId: "1504328345606-18bbc8c9d7d1",
    },
    {
      number: "02",
      headline: "Mínima Entrada de Calor — Cero Distorsión en Secciones Delgadas",
      body: "El punto láser estrechamente enfocado entrega energía solo donde se necesita. La zona afectada por el calor es típicamente 50–80% más pequeña que en TIG. Tubos de pared delgada y chapa metálica de menos de 1.5 mm sueldan sin deformarse — un problema común con la soldadura de arco convencional.",
      spec: { label: "Reducción de ZAC", value: "Hasta 80%" },
      imageId: "1518770660439-4636190af475",
    },
    {
      number: "03",
      headline: "5× Más Rápido que TIG — Velocidad de Soldadura hasta 7.2 m/min",
      body: "La velocidad de desplazamiento de soldadura hasta 7.2 m/min (120 mm/s) supera drásticamente al TIG manual. La integración robótica multiplica la ventaja — velocidad constante, sin fatiga y sin limpieza de salpicaduras entre pasadas. Tiempos de ciclo que tomaban 20 minutos con TIG caen rutinariamente por debajo de 4 minutos.",
      spec: { label: "Velocidad de Soldadura", value: "0–7.2 m/min" },
      imageId: "1565514020179-026b92b84bb6",
    },
    {
      number: "04",
      headline: "Funciona en Metales Reflectivos — Cobre, Latón, Aluminio",
      body: "La longitud de onda de 1070 nm del láser de fibra es absorbida eficientemente por el cobre y el aluminio — materiales que históricamente causaban daño por reflexión en sistemas láser CO₂. Suelde barras colectoras de cobre, intercambiadores de calor de aluminio y accesorios de latón sin cambios específicos del sistema.",
      spec: { label: "Longitud de Onda", value: "1070 nm" },
      imageId: "1565793248595-fad6d33f2f41",
    },
    {
      number: "05",
      headline: "Cordón Sin Costuras — Esmerilado Mínimo Requerido",
      body: "Los cordones de soldadura láser son estrechos, consistentes y casi a ras del material base. En trabajos cosméticos de inoxidable y aluminio, la soldadura puede pulirse directamente a un acabado espejo sin esmerilado. Reduce la mano de obra post-soldadura en un 60–70% en piezas con acabado crítico.",
      spec: { label: "Mano de Obra Post-Soldadura", value: "↓ 60–70%" },
      imageId: "1558618666-fcd25c85cd64",
    },
  ],
  specs: [
    { label: "Potencia Láser", imperial: "1500 W / 2000 W / 3000 W", metric: "1500 W / 2000 W / 3000 W" },
    { label: "Rango de Ajuste de Potencia", imperial: "10% – 100%", metric: "10% – 100%" },
    { label: "Longitud de Onda Central", imperial: "1070 ± 20 nm", metric: "1070 ± 20 nm" },
    { label: "Método de Refrigeración", imperial: "Refrigeración por agua", metric: "Refrigeración por agua" },
    { label: "Ancho de Soldadura", imperial: "0 – 0.20\"", metric: "0 – 5 mm" },
    { label: "Ancho de Limpieza", imperial: "Máx. 3.15\"", metric: "Máx. 80 mm" },
    { label: "Diámetro del Alambre", imperial: "0.031\" / 0.039\" / 0.047\" / 0.063\"", metric: "0.8 / 1.0 / 1.2 / 1.6 mm" },
    { label: "Vel. Máx. de Alimentación de Alambre", imperial: "236 pulg/min", metric: "100 mm/s" },
    { label: "Mejoras Disponibles", imperial: "Purificador de Humo", metric: "Purificador de Humo" },
  ],
  videoSectionLabel: "Véalo Soldar",
  videoHeadline: "Láser vs. TIG — Comparación Directa",
  configOptions: [
    {
      label: "Nivel de Potencia",
      options: ["1500W — chapa metálica y tubo de pared delgada", "2000W — fabricación general hasta 4 mm", "3000W — sección pesada y estructural"],
      note: "Mayor potencia amplía el rango de espesor de material y aumenta la velocidad de soldadura en secciones más gruesas.",
    },
    {
      label: "Modo de Entrega",
      options: ["Cabezal de oscilación portátil", "Paquete de integración para brazo robótico", "Estación fija montada en pórtico"],
      note: "El portátil es ideal para trabajo de prototipo y reparación. La integración robótica ofrece el mayor rendimiento para producción en serie.",
    },
    {
      label: "Alimentación de Alambre",
      options: ["Alimentación de alambre frío (estándar)", "Alimentación de alambre caliente (para puente de espacio)", "Sin alambre (modo autógeno)"],
      note: "El alambre frío se recomienda para la mayoría de las aplicaciones. El alambre caliente mejora la productividad en materiales más gruesos con espacios de ajuste.",
    },
  ],
  comparisonLabel: "Tecnología",
  comparisonHeadline: "Soldadura Láser vs. MIG / TIG",
  comparisonOursLabel: "Soldadura Láser",
  comparisonTheirsLabel: "MIG / TIG",
  comparison: [
    { feature: "Velocidad de soldadura", ours: "Hasta 5× más rápido que TIG", theirs: "Referencia" },
    { feature: "Zona afectada por el calor", ours: "50–80% más pequeña", theirs: "Grande — riesgo de distorsión en metal delgado" },
    { feature: "Consumibles", ours: "Ninguno (solo gas)", theirs: "Alambre, puntas, boquillas, electrodos" },
    { feature: "Esmerilado post-soldadura", ours: "Mínimo o ninguno", theirs: "A menudo requerido" },
    { feature: "Soldadura de cobre y aluminio", ours: "Excelente", theirs: "Difícil (TIG) / posible (MIG)" },
    { feature: "Curva de aprendizaje", ours: "1–2 días hasta la competencia", theirs: "Meses a años (TIG)" },
    { feature: "Salpicaduras", ours: "Ninguna", theirs: "Común con MIG" },
    { feature: "Placa muy gruesa (>12 mm)", ours: "Limitado", theirs: "MIG/FCAW preferido" },
  ],
  relatedProducts: [
    { name: "Cortadora Láser de Chapa", href: "/fabrication/fiber-laser-cutting-machine", tag: "Corte", imageId: "/images/fiber-laser-hero.png" },
    { name: "Máquina de Limpieza Láser", href: "/fabrication/laser-cleaning-machine", tag: "Limpieza", imageId: "/images/laser-cleaning-hero.png" },
    { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", tag: "Plegado", imageId: "/images/cnc-press-brake-hero.png" },
    { name: "Brazo de Soldadura Colaborativo", href: "/automation/collaborative-welding-arm", tag: "Automatización", imageId: "/images/cobot-welding-hero-2.png" },
  ],
  faqs: [
    {
      question: "¿Cuáles son las principales ventajas de la soldadura láser sobre el TIG?",
      answer: "La soldadura láser es típicamente 3–5× más rápida que el TIG, produce una zona afectada por el calor mucho más pequeña (reduciendo la deformación en materiales delgados), no requiere alambre de relleno para soldaduras autógenas y deja un cordón más limpio que necesita un acabado post-soldadura mínimo. La curva de aprendizaje también es dramáticamente más corta — la mayoría de los operadores alcanzan la competencia en 1–2 días versus meses para la certificación TIG.",
    },
    {
      question: "¿Es difícil aprender soldadura láser?",
      answer: "El sistema de soldadura láser portátil está diseñado para una rápida adopción por parte del operador. Con el cabezal de oscilación oscilando el haz automáticamente, el operador se enfoca en la velocidad y dirección de avance en lugar de gestionar la longitud del arco y la alimentación de alambre por separado. VTM incluye 2 días de capacitación en sitio con cada máquina.",
    },
    {
      question: "¿Qué metales puede unir la soldadora láser?",
      answer: "La soldadora láser VTM maneja acero dulce, acero inoxidable (todos los grados), aleaciones de aluminio, cobre, latón, titanio y combinaciones de metales disimilares (p. ej., inoxidable a cobre). No es adecuada para soldar plásticos o no metales. Para acero galvanizado, la ventilación adecuada es esencial debido al vapor de zinc.",
    },
    {
      question: "¿Puedo usar la soldadora láser para trabajos de reparación además de producción?",
      answer: "Sí. El modo portátil es particularmente adecuado para trabajos de reparación — reparación de moldes, restauración de componentes de pared delgada y retoques cosméticos en piezas terminadas. La baja entrada de calor significa que las reparaciones en piezas ensambladas o parcialmente mecanizadas tienen un riesgo de distorsión mínimo.",
    },
    {
      question: "¿Cuál es el plazo de retorno de la inversión?",
      answer: "La mayoría de los clientes VTM en entornos de soldadura de producción ven la recuperación en 12–24 meses. El cálculo combina mano de obra reducida (velocidades de soldadura más rápidas), costos de consumibles eliminados y mano de obra de esmerilado post-soldadura reducida. Los talleres que hacen trabajo de alto volumen en inoxidable o aluminio típicamente ven la recuperación más rápida.",
    },
    {
      question: "¿Qué medidas de seguridad se requieren?",
      answer: "Láser FDA Clase IV — gafas de seguridad láser adecuadas (OD 5+ a 1070 nm), un área de trabajo con enclavamiento para instalaciones robóticas, y extracción de humos son obligatorias. VTM proporciona un paquete completo de inicio de seguridad que incluye EPP apropiado, señalización y documentación de procedimientos de seguridad.",
    },
  ],
};

export const content: Record<"en" | "es", ProductPageData> = { en, es };
