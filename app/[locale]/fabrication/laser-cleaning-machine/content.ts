import type { ProductPageData } from "@/components/product/ProductPageTemplate";

const es: ProductPageData = {
  category: "Fabricación",
  slug: "laser-cleaning-machine",
  machineName: "Máquina de Limpieza Láser",
  heroSubheadline:
    "Limpieza láser de fibra pulsada de 50W a 500W. Elimine óxido, pintura, escamas de laminación y capas de óxido sin productos químicos, sin medios abrasivos y sin daño a la superficie del material base. Opción portátil disponible.",
  heroImageId: "/images/laser-cleaning-hero.webp",
  features: [
    {
      number: "01",
      headline: "Sin Productos Químicos — Cumplimiento por Diseño",
      body: "Elimine completamente los disolventes de decapado químico, neutralizadores y costos de eliminación. La limpieza láser vaporiza los contaminantes con energía fotónica — el único subproducto es partículas en el aire, manejadas por un extractor de humos estándar. No se requieren permisos de eliminación de residuos de la EPA para el proceso de limpieza en sí.",
      spec: { label: "Productos Químicos", value: "Ninguno" },
      imageId: "/images/laser-cleaning-feature-01-no-chemicals.webp",
    },
    {
      number: "02",
      headline: "Sin Granallado — Sin Abrasivo Incrustado",
      body: "El granallado con arena y grano incrusta partículas abrasivas en la superficie metálica — un problema de contaminación para soldadura de precisión y adhesión de recubrimientos. La limpieza láser deja una superficie químicamente limpia, ideal para preparación previa a la soldadura, adhesión de proyección térmica o unión de imprimación de pintura.",
      spec: { label: "Medios Utilizados", value: "Ninguno" },
      imageId: "/images/laser-cleaning-feature-02-no-media.webp",
    },
    {
      number: "03",
      headline: "Precisamente Dirigida — Limpia Solo la Contaminación",
      body: "Los parámetros de pulso se ajustan para eliminar por ablación la capa contaminante mientras refleja el sustrato subyacente. Elimine el óxido de un tubo de cromo-molibdeno sin grabar el metal base. Limpie salpicaduras de soldadura de una superficie mecanizada sin cambiar el acabado superficial. No se requiere enmascaramiento.",
      spec: { label: "Selectividad", value: "Precisión por capas" },
      imageId: "/images/laser-cleaning-feature-03-precision.webp",
    },
    {
      number: "04",
      headline: "Sin Daño al Sustrato — Seguro para Componentes de Precisión",
      body: "A diferencia del granallado (que deforma la superficie) o el decapado químico (que puede causar fragilización por hidrógeno), la limpieza láser correctamente ajustada deja el sustrato metalúrgicamente sin cambios. Adecuado para componentes aeroespaciales, sujetadores de alta resistencia y tubería de precisión de pared delgada.",
      spec: { label: "Daño a la Superficie", value: "Cero" },
      imageId: "/images/laser-cleaning-feature-04-safe.webp",
    },
  ],
  specs: [
    { label: "Opciones de Potencia Láser", imperial: "50W / 100W / 200W / 500W", metric: "50W / 100W / 200W / 500W" },
    { label: "Tipo de Láser", imperial: "Láser de fibra pulsado (MOPA)", metric: "Láser de fibra pulsado (MOPA)" },
    { label: "Longitud de Onda", imperial: "1064 nm", metric: "1064 nm" },
    { label: "Frecuencia de Pulso", imperial: "1–4000 kHz", metric: "1–4000 kHz" },
    { label: "Ancho de Pulso", imperial: "2–500 ns", metric: "2–500 ns" },
    { label: "Velocidad Máxima de Escaneo", imperial: "0–275 pulg/s", metric: "0–7 m/s" },
    { label: "Ancho de Escaneo (ajustable)", imperial: "0.4\"–6\"", metric: "10–150 mm" },
    { label: "Longitud del Cable de Fibra", imperial: "33 ft (estándar) / 66 ft (opcional)", metric: "10 m / 20 m" },
    { label: "Peso del Cabezal Portátil (100W)", imperial: "3.1 lbs", metric: "1.4 kg" },
    { label: "Refrigeración", imperial: "Aire (50W–100W) / Agua (200W–500W)", metric: "Aire / Agua" },
    { label: "Alimentación Eléctrica", imperial: "110–240V, monofásico", metric: "110–240V, monofásico" },
    { label: "Interfaz de Control", imperial: "Pantalla táctil con preajustes de material", metric: "Pantalla táctil con preajustes de material" },
    { label: "Certificaciones", imperial: "CE, FDA Clase IV", metric: "CE, FDA Clase IV" },
  ],
  videoSectionLabel: "Véalo Limpiar",
  videoHeadline: "De Óxido a Metal Desnudo en Segundos",
  configOptions: [
    {
      label: "Nivel de Potencia",
      options: ["50W — óxido leve, capas de recubrimiento en material delgado", "100W — eliminación general de óxido y pintura, uso portátil", "200W — escamas de laminación pesadas, recubrimientos gruesos, línea de producción", "500W — descascarado industrial de alta velocidad"],
      note: "Mayor potencia significa mayor velocidad de limpieza sobre áreas más grandes — ideal para entornos de producción.",
    },
    {
      label: "Modo de Entrega",
      options: ["Cabezal de escaneo portátil (50W–200W)", "Cabezal de escaneo automatizado fijo", "Integración para brazo robótico"],
      note: "El portátil es mejor para reparación en campo y formas personalizadas. Los cabezales de escaneo automatizados se integran en líneas de producción.",
    },
    {
      label: "Extracción de Humos",
      options: ["Extractor de humos estándar (incluido)", "Actualización de filtro HEPA + carbón activado", "Conexión a extracción centralizada"],
      note: "Toda la limpieza láser genera partículas en el aire. La extracción de humos es obligatoria y equipo estándar.",
    },
  ],
  comparisonLabel: "Tecnología",
  comparisonHeadline: "Limpieza Láser vs. Decapado Químico / Granallado",
  comparisonOursLabel: "Limpieza Láser",
  comparisonTheirsLabel: "Químico / Granallado",
  comparison: [
    { feature: "Residuos químicos", ours: "Ninguno", theirs: "Significativos — eliminación EPA requerida" },
    { feature: "Medios abrasivos", ours: "Ninguno", theirs: "Costo continuo de medios y eliminación" },
    { feature: "Riesgo de daño al sustrato", ours: "Ninguno (correctamente ajustado)", theirs: "Cambio dimensional, incrustación, fragilización" },
    { feature: "Control de precisión", ours: "Selectividad capa por capa", theirs: "Todo o nada" },
    { feature: "Limpieza pre-soldadura", ours: "Sin óxido, listo para soldar", theirs: "Puede requerir limpieza adicional" },
    { feature: "Portabilidad", ours: "Portátil — va a la pieza", theirs: "Cabina fija o equipo grande" },
    { feature: "EPP del operador", ours: "Gafas láser + respirador", theirs: "Traje completo de granallado o EPP químico" },
    { feature: "Costo inicial del equipo", ours: "Mayor", theirs: "Menor" },
  ],
  relatedProducts: [
    { name: "Máquina de Soldadura Láser", href: "/fabrication/4-in-1-laser-machine", tag: "Soldadura", imageId: "/images/4in1-laser-hero-2.webp" },
    { name: "Cortadora Láser de Chapa", href: "/fabrication/fiber-laser-cutting-machine", tag: "Corte", imageId: "/images/fiber-laser-hero.webp" },
    { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", tag: "Plegado", imageId: "/images/cnc-press-brake-hero.webp" },
    { name: "Brazo de Soldadura Colaborativo", href: "/automation/collaborative-welding-arm", tag: "Automatización", imageId: "/images/cobot-welding-hero-2.webp" },
  ],
  faqs: [
    {
      question: "¿Puede la limpieza láser eliminar completamente el óxido pesado?",
      answer: "Sí. Los sistemas de 200W y 500W eliminan el óxido pesado y las escamas de laminación en una sola pasada en la mayoría de las secciones de acero al carbono. Para capas de corrosión extremadamente gruesas (>2 mm), pueden requerirse múltiples pasadas. El láser pulsado vaporiza el óxido de hierro mientras el acero subyacente refleja la energía.",
    },
    {
      question: "¿Es efectiva la limpieza láser como preparación previa a la soldadura?",
      answer: "La limpieza láser se considera superior a la preparación mecánica o química previa a la soldadura para soldaduras críticas. Elimina los óxidos superficiales, la contaminación con hidrocarburos y las escamas de laminación hasta el metal desnudo, dejando una superficie que promueve la fusión completa y reduce la porosidad.",
    },
    {
      question: "¿Puede eliminar pintura en polvo y pintura de forma selectiva?",
      answer: "Sí. Ajustando la frecuencia de pulso y la densidad de energía, el láser puede eliminar por ablación una capa de recubrimiento sin marcar el sustrato. Esto es útil para eliminar pintura de extrusiones de aluminio para re-anodización, quitar recubrimiento en polvo para soldadura de reparación o limpiar selectivamente una superficie pintada sin enmascarar áreas adyacentes.",
    },
    {
      question: "¿Qué precauciones de seguridad se requieren?",
      answer: "Los sistemas de limpieza láser son FDA Clase IV. Los requisitos obligatorios incluyen gafas de seguridad láser apropiadas (OD 5+ a 1064 nm) para el operador y cualquier persona en la línea de visión, un extractor de humos funcionando en todo momento, y señalización apropiada. VTM proporciona un paquete completo de inicio de seguridad con cada sistema.",
    },
    {
      question: "¿Cómo se compara el costo operativo con el granallado?",
      answer: "La limpieza láser tiene un costo de consumibles casi nulo después de la compra — la electricidad y la limpieza periódica de óptica son los únicos costos continuos. El granallado requiere compra continua de medios, mantenimiento de cabina de contención y eliminación regulatoria de medios contaminados. La mayoría de los clientes encuentran que la limpieza láser alcanza la paridad de costo operativo con el granallado en 12–18 meses.",
    },
    {
      question: "¿Puede el sistema integrarse en una línea de producción automatizada?",
      answer: "Sí. Los sistemas de 200W y 500W están disponibles con un paquete de integración de automatización que incluye soportes de montaje, control Ethernet industrial y patrones de escaneo configurables. El láser puede ser activado por señales PLC para limpiar zonas específicas a medida que las piezas avanzan por una línea de transportador.",
    },
  ],
};

export const content: Record<string, ProductPageData> = { es };
