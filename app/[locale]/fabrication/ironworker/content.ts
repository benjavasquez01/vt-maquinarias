import type { ProductPageData } from "@/components/product/ProductPageTemplate";

const es: ProductPageData = {
  category: "Fabricación",
  slug: "ironworker",
  machineName: "Punzonadora Hidráulica",
  heroSubtitle: "VTM-IW",
  heroSubheadline:
    "Punzonadora hidráulica VTM-IW de 60 a 120 toneladas, con 5 estaciones de trabajo para perforar, escantonar, cortar planchas, cortar ángulos y cortar macizos en una sola máquina. Estructura fuerte y duradera, sistema hidráulico estable y poderoso, y opción de trabajo simultáneo para dos operadores.",
  heroImageId: "/images/ironworker-hero.webp",
  features: [
    {
      number: "01",
      headline: "5 Estaciones en una Sola Máquina",
      body: "Permite perforar, escantonar, cortar planchas, cortar ángulos y cortar macizos sin trasladar el material a otra máquina. Una solución compacta para talleres que necesitan resolver varias operaciones de fabricación metálica con menor manipulación y mejor flujo de trabajo.",
      spec: { label: "Estaciones", value: "5" },
      imageId: "/images/ironworker-feature-01-stations.webp",
    },
    {
      number: "02",
      headline: "Alta Eficiencia Operativa",
      body: "La configuración permite realizar hasta 2 operaciones simultáneas cuando se equipa con doble estación de trabajo para dos operadores. Esto ayuda a aumentar la productividad en trabajos mixtos, reduciendo tiempos muertos entre perforado, escantonado y corte.",
      spec: { label: "Operación", value: "2 simultáneas" },
      imageId: "/images/ironworker-feature-02-punching.webp",
    },
    {
      number: "03",
      headline: "Amplio Abanico de Aplicaciones",
      body: "Trabaja con plancha, macizo cuadrado, macizo redondo, ángulo, canal, acero en T, viga en I y canal de acero en U. Es una máquina versátil para maestranzas, estructuras metálicas, mantenimiento industrial y fabricación general.",
      spec: { label: "Materiales", value: "Plancha y perfiles" },
      imageId: "/images/ironworker-feature-03-notching.webp",
    },
    {
      number: "04",
      headline: "Estructura Fuerte, Duradera y Estable",
      body: "Su construcción robusta está pensada para trabajo industrial continuo. El sistema hidráulico entrega fuerza estable y poderosa para operaciones de punzonado, cizallado y escantonado con resultados repetibles en distintos espesores y geometrías.",
      spec: { label: "Sistema", value: "Hidráulico" },
      imageId: "/images/ironworker-feature-04-flatbar.webp",
    },
    {
      number: "05",
      headline: "Opcional de Plegado",
      body: "Puede incorporar un accesorio opcional de plegado para realizar pliegues cortos y piezas pequeñas sin mover el material a una plegadora independiente. Ideal para soportes, planchas pequeñas, grapas y trabajos complementarios de fabricación.",
      spec: { label: "Accesorio", value: "Plegado opcional" },
      imageId: "/images/ironworker-feature-05-vdie.webp",
    },
  ],
  specs: [
    { label: "Modelos", imperial: "VTM16IW / VTM20IW / VTM25IW", metric: "VTM16IW / VTM20IW / VTM25IW" },
    { label: "Presión de punzonado", imperial: "60 / 90 / 120 ton", metric: "60 / 90 / 120 ton" },
    { label: "Cizalladura máxima de plancha", imperial: "16 / 20 / 25 mm", metric: "16 / 20 / 25 mm" },
    { label: "Carrera del carro", imperial: "80 / 80 / 80 mm", metric: "80 / 80 / 80 mm" },
    { label: "Golpes por minuto", imperial: "11–20 / 12–20 / 8–18", metric: "11–20 / 12–20 / 8–18" },
    { label: "Profundidad de garganta", imperial: "300 / 355 / 400 mm", metric: "300 / 355 / 400 mm" },
    { label: "Diámetro máximo de punzonado", imperial: "25 / 30 / 35 mm", metric: "25 / 30 / 35 mm" },
    { label: "Motor principal", imperial: "5.5 / 5.5 / 7.5 kW", metric: "5.5 / 5.5 / 7.5 kW" },
    { label: "Peso neto", imperial: "1800 / 2400 / 4000 kg", metric: "1800 / 2400 / 4000 kg" },
    { label: "Tipos de material", imperial: "Plancha, macizo cuadrado, macizo redondo, ángulo y canal", metric: "Plancha, macizo cuadrado, macizo redondo, ángulo y canal" },
  ],
  videoSectionLabel: "Véala Trabajar",
  videoHeadline: "Cinco Operaciones en una Máquina",
  configOptions: [
    {
      label: "Modelo",
      options: [
        "VTM16IW — 60 ton, plancha hasta 16 mm",
        "VTM20IW — 90 ton, plancha hasta 20 mm",
        "VTM25IW — 120 ton, plancha hasta 25 mm",
      ],
      note: "La selección depende del espesor máximo de plancha, diámetro de punzonado y tipo de perfil que necesita procesar.",
    },
    {
      label: "Operación",
      options: [
        "5 estaciones de trabajo",
        "Sistema hidráulico estable y poderoso",
        "2 operaciones simultáneas con configuración opcional",
      ],
      note: "La opción de trabajo simultáneo permite que dos operadores trabajen en estaciones diferentes para mejorar el rendimiento.",
    },
    {
      label: "Aplicaciones",
      options: [
        "Plancha y macizos",
        "Ángulos y canales",
        "Acero en T, viga en I y canal en U",
      ],
      note: "Una máquina para perforar, escantonar y cortar distintos materiales usados en fabricación metálica.",
    },
  ],
  comparisonLabel: "Tecnología",
  comparisonHeadline: "Punzonadora VTM-IW vs. Operaciones Separadas",
  comparisonOursLabel: "VTM-IW",
  comparisonTheirsLabel: "Máquinas Separadas",
  comparison: [
    { feature: "Operaciones disponibles", ours: "5 estaciones en una máquina", theirs: "Varias máquinas o procesos manuales" },
    { feature: "Manipulación de material", ours: "Menos traslados entre equipos", theirs: "Mayor movimiento de piezas" },
    { feature: "Eficiencia operativa", ours: "Hasta 2 operaciones simultáneas opcionales", theirs: "Dependiente de cada equipo" },
    { feature: "Espesor máximo de plancha", ours: "Hasta 25 mm según modelo", theirs: "Depende de cada máquina" },
    { feature: "Tipos de material", ours: "Plancha, macizos, ángulos y canales", theirs: "Capacidad dividida por proceso" },
    { feature: "Huella en taller", ours: "Una estación compacta", theirs: "Mayor espacio requerido" },
  ],
  relatedProducts: [
    { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", tag: "Plegado", imageId: "/images/cnc-press-brake-hero.webp" },
    { name: "Guillotinas y Viga Oscilante", href: "/fabrication/shearing-machine", tag: "Cizallado", imageId: "/images/shearing-guillotine-hero.webp" },
    { name: "Cortadora Láser de Plancha", href: "/fabrication/fiber-laser-cutting-machine", tag: "Corte", imageId: "/images/fiber-laser-hero.webp" },
    { name: "Máquina Soldadora Láser", href: "/fabrication/4-in-1-laser-machine", tag: "Soldadura", imageId: "/images/4in1-laser-hero-2.webp" },
  ],
  faqs: [
    {
      question: "¿Qué modelos de punzonadora hidráulica VTM-IW están disponibles?",
      answer: "La línea VTM-IW considera los modelos VTM16IW, VTM20IW y VTM25IW, con presiones de punzonado de 60, 90 y 120 toneladas respectivamente.",
    },
    {
      question: "¿Qué operaciones realiza la punzonadora?",
      answer: "Permite perforar, escantonar, cortar planchas, cortar ángulos y cortar macizos en sus 5 estaciones de trabajo.",
    },
    {
      question: "¿Puede trabajar con dos operadores al mismo tiempo?",
      answer: "Sí. La configuración de 2 operaciones simultáneas está disponible como opción, permitiendo que dos operadores trabajen en estaciones diferentes.",
    },
    {
      question: "¿Qué materiales puede procesar?",
      answer: "Puede trabajar plancha, macizo cuadrado, macizo redondo, ángulo, canal, acero en T, viga en I y canal de acero en U.",
    },
    {
      question: "¿Tiene opción de plegado?",
      answer: "Sí. Existe un accesorio opcional de plegado para realizar pliegues cortos y trabajos complementarios sin mover la pieza a otra máquina.",
    },
  ],
};

export const content: Record<string, ProductPageData> = { es };
