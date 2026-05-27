import type { ProductPageData } from "@/components/product/ProductPageTemplate";

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
    { name: "Cortadora Láser de Chapa", href: "/fabrication/fiber-laser-cutting-machine", tag: "Corte", imageId: "/images/fiber-laser-hero.webp" },
    { name: "Máquina de Limpieza Láser", href: "/fabrication/laser-cleaning-machine", tag: "Limpieza", imageId: "/images/laser-cleaning-hero.webp" },
    { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", tag: "Plegado", imageId: "/images/cnc-press-brake-hero.webp" },
    { name: "Brazo de Soldadura Colaborativo", href: "/automation/collaborative-welding-arm", tag: "Automatización", imageId: "/images/cobot-welding-hero-2.webp" },
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

export const content: Record<string, ProductPageData> = { es };
