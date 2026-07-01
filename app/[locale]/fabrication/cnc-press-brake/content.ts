import type { ProductPageData } from "@/components/product/ProductPageTemplate";

const es: ProductPageData = {
  category: "Fabricación",
  slug: "cnc-press-brake",
  machineName: "Plegadora CNC",
  heroSubheadline:
    "Potencia, precisión y productividad para llevar tu fabricación al siguiente nivel. Nuestras plegadoras CNC están diseñadas para realizar plegados complejos, precisos y repetibles, optimizando los tiempos de producción y reduciendo errores.",
  heroImageId: "/images/cnc-press-brake-hero-2.webp",
  heroImageFit: "cover",
  features: [
    {
      headline: "Mesa de Compensación CNC",
      body: "La mesa de compensación CNC corrige automáticamente la deflexión natural que se produce durante el plegado, especialmente en la zona central de la máquina, distribuyendo la fuerza de manera uniforme a lo largo de toda la pieza.\n\nGracias a este sistema, se obtiene un ángulo de plegado más preciso y homogéneo de un extremo al otro, especialmente en piezas largas o trabajos de mayor exigencia. La compensación se ajusta directamente desde el control CNC, reduciendo correcciones manuales, tiempos de preparación y variaciones en el resultado final.",
      spec: { label: "Arqueado", value: "Automático" },
      imageId: "/images/cnc-press-brake-feature-03-crowning.webp",
    },
    {
      headline: "Tope trasero multiejes",
      body: "Los ejes X, R, Z1 y Z2 permiten posicionar el tope trasero con precisión en profundidad, altura y desplazamiento lateral. Los topes Z1 y Z2 se mueven de manera independiente, facilitando el plegado de piezas con pestañas de distintas profundidades, referencias descentradas y geometrías variables.\n\nCada posición del tope trasero se guarda en el programa de la pieza para futuras ejecuciones, reduciendo los tiempos de preparación y asegurando un proceso de plegado preciso y repetible.",
      spec: { label: "Tope Trasero", value: "4+1 a 8+1 ejes" },
      imageId: "/images/cnc-press-brake-feature-04-backgauge.webp",
    },
  ],
  specs: [
    { label: "VTM-PB Hidráulica", imperial: "63T–1000T", metric: "630–10000 kN" },
    { label: "VTM-PB Longitud de Plegado", imperial: "98\"–315\"", metric: "2500–8000 mm" },
    { label: "VTM-EPB Eléctrica", imperial: "3T–60T", metric: "30–600 kN" },
    { label: "VTM-EPB Longitud de Plegado", imperial: "8\"–98\"", metric: "200–2500 mm" },
    { label: "Velocidad EPB Bajada Rápida", imperial: "709 pulg/min", metric: "300 mm/s" },
    { label: "Ahorro Energético EPB", imperial: "hasta 80%", metric: "hasta 80%" },
    { label: "Ejes del Tope Trasero", imperial: "4+1 a 8+1 ejes", metric: "4+1 a 8+1 ejes" },
    { label: "Controladores", imperial: "E310P / EL15T", metric: "E310P / EL15T" },
    { label: "Opcionales PB", imperial: "Laser Safe / soporte de pieza", metric: "Laser Safe / soporte de pieza" },
    { label: "Operación EPB", imperial: "sin aceite hidráulico", metric: "sin aceite hidráulico" },
  ],
  videoSectionLabel: "Véala Plegar",
  videoHeadline: "Piezas Complejas, Precisión desde la Primera Pieza",
  configOptions: [],
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
    { name: "Cortadora Láser de Plancha", href: "/fabrication/fiber-laser-cutting-machine", tag: "Corte", imageId: "/images/fiber-laser-hero.webp" },
    { name: "Máquina Soldadora Láser", href: "/fabrication/4-in-1-laser-machine", tag: "Soldadura", imageId: "/images/4in1-laser-hero-2.webp" },
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
      answer: "El tonelaje está determinado por el tipo de material, el espesor, la resistencia a la tracción y la longitud del pliegue. Como guía aproximada para acero dulce: material de 1\" sobre un pliegue de 10 pies requiere aproximadamente 150 toneladas. Su ingeniero de ventas VTM calculará el tonelaje requerido para sus trabajos específicos antes de recomendar una máquina.",
    },
    {
      question: "¿Cuál es el tiempo de entrega y el proceso de instalación?",
      answer: "El tiempo de entrega estándar es de 10–14 semanas desde el pedido confirmado. El equipo de instalación de VTM maneja la coordinación de montaje, nivelación (con calzas de precisión a 0.1 mm/m), puesta en marcha hidráulica y eléctrica, y pliegues de verificación de primera pieza. La instalación típicamente toma 1–2 días según el tamaño de la máquina.",
    },
    {
      question: "¿Puedo agregar cambio automático de herramientas más tarde?",
      answer: "El sistema de cambio automático de herramientas debe especificarse en el momento del pedido — requiere disposiciones hidráulicas específicas y geometría del carnero que no se pueden retrofitar después de la fabricación. Si existe alguna posibilidad de que lo desee en el futuro, recomendamos especificarlo desde el principio.",
    },
  ],
};

export const content: Record<string, ProductPageData> = { es };
