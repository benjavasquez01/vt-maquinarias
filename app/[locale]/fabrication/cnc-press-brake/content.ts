import type { ProductPageData } from "@/components/product/ProductPageTemplate";

const es: ProductPageData = {
  category: "Fabricación",
  slug: "cnc-press-brake",
  machineName: "Plegadora CNC",
  heroSubheadline:
    "Dos plataformas de accionamiento — máquinas hidráulicas individuales de 63 a 1600 toneladas para placa pesada, y pares servo eléctricos en tándem de 160 a 800 toneladas por máquina para plegado sincronizado hasta 16 m. Controlador táctil CNC gráfico con simulación de plegado 3D, tope trasero de 4+1 a 8+1 ejes y compensación automática de arqueado.",
  heroImageId: "/images/cnc-press-brake-hero-2.webp",
  heroImageFit: "cover",
  features: [
    {
      headline: "Compensación Automática de Arqueado",
      body: "Al plegar piezas largas, la viga inferior y el carnero se flexionan bajo la carga, haciendo que el ángulo de doblez en el centro difiera del de los extremos. Las plegadoras VTM incluyen un sistema de coronamiento hidráulico que pre-compensa la viga inferior — elevándola ligeramente en el centro — para mantener un ángulo uniforme de extremo a extremo.",
      spec: { label: "Arqueado", value: "Automático" },
      imageId: "/images/cnc-press-brake-feature-03-crowning.webp",
    },
    {
      headline: "Tope Trasero de 4+1 a 8+1 Ejes — Piezas Complejas, Configuración Simple",
      body: "Los ejes X, R, Z1 y Z2 en el tope trasero permiten el posicionamiento independiente de cada dedo — crítico para bridas a múltiples profundidades, dobleces desplazados y piezas que se afinan. Cada posición del tope trasero se almacena en el programa de la pieza y se recuerda automáticamente cuando se ejecuta el mismo trabajo nuevamente.",
      spec: { label: "Tope Trasero", value: "4+1 a 8+1 ejes" },
      imageId: "/images/cnc-press-brake-feature-04-backgauge.webp",
    },
  ],
  specs: [
    { label: "Opciones de Tonelaje", imperial: "40T / 80T / 110T / 160T / 220T / 400T", metric: "40T / 80T / 110T / 160T / 220T / 400T" },
    { label: "Longitud de Plegado", imperial: "98\"–236\" (8'–20')", metric: "2500–6000 mm" },
    { label: "Recorrido del Carnero", imperial: "6\"–8\"", metric: "150–200 mm" },
    { label: "Velocidad de Aproximación", imperial: "394 pulg/min", metric: "100 mm/s" },
    { label: "Velocidad de Plegado", imperial: "0.4\"–0.8\"/s (ajustable)", metric: "10–20 mm/s (ajustable)" },
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
      label: "Longitud de Plegado",
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
  comparisonHeadline: "Plegadora CNC vs. Manual",
  comparisonOursLabel: "Plegadora CNC",
  comparisonTheirsLabel: "Plegadora Manual",
  comparison: [
    { feature: "Repetibilidad", ours: "±0.01 mm", theirs: "±0.5 mm o peor" },
    { feature: "Tiempo de configuración por trabajo", ours: "5–15 min (programa recordado)", theirs: "30–60 min (prueba y error manual)" },
    { feature: "Simulación 3D de plegado", ours: "Sí — detección de colisiones incluida", theirs: "Ninguna" },
    { feature: "Tope trasero", ours: "CNC de 4+1 a 8+1 ejes", theirs: "Manual de un solo eje" },
    { feature: "Compensación de arqueado", ours: "Automática", theirs: "Calzas manuales (si disponibles)" },
    { feature: "Habilidad del operador requerida", ours: "Baja — el controlador guía al operador", theirs: "Alta — operador experimentado esencial" },
    { feature: "Consistencia pieza a pieza", ours: "Idéntica", theirs: "Variación dependiente del operador" },
    { feature: "Costo inicial", ours: "Mayor", theirs: "Menor" },
  ],
  relatedProducts: [
    { name: "Punzonadora Hidráulica", href: "/fabrication/ironworker", tag: "Multifunción", imageId: "/images/ironworker-hero.webp" },
    { name: "Cortadora Láser de Chapa", href: "/fabrication/fiber-laser-cutting-machine", tag: "Corte", imageId: "/images/fiber-laser-hero.webp" },
    { name: "Máquina de Soldadura Láser", href: "/fabrication/4-in-1-laser-machine", tag: "Soldadura", imageId: "/images/4in1-laser-hero-2.webp" },
  ],
  faqs: [
    {
      question: "¿Las herramientas son compatibles con mis juegos de punzón y troquel existentes?",
      answer: "Las prensas plegadoras VTM se envían configuradas para herramientas estilo europeo estándar (Wila/Wilson), que son compatibles con la mayoría de las herramientas de repuesto disponibles en Chile Los portaherramientas estilo Amada están disponibles como opción de configuración. Si tiene herramientas existentes que desea seguir usando, comparta el perfil de herramientas con su ingeniero de ventas VTM antes de ordenar.",
    },
    {
      question: "¿Qué tan difícil es la programación en el controlador CNC?",
      answer: "El controlador CNC gráfico usa una interfaz de pantalla táctil con visualización de piezas en 3D. La mayoría de los operadores alcanzan plena competencia de programación en 2–3 días de entrenamiento. Los archivos DXF de su sistema CAD se pueden importar directamente — el controlador genera automáticamente la secuencia de plegado y calcula el tonelaje. VTM incluye 2 días de entrenamiento de programación en sitio con cada máquina.",
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

export const content: Record<string, ProductPageData> = { es };
