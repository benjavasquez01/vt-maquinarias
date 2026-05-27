type Feature = { number: string; headline: string; body: string; spec: { label: string; value: string } };

export type FiberLaserContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string; cta1: string; cta2: string };
  features: Feature[];
  enclosed: {
    sectionLabel: string; headline: string; subheadline: string;
    features: Feature[];
  };
  video: { sectionLabel: string; headline: string };
  configure: {
    sectionLabel: string; headline: string; note: string;
    options: { label: string; options: string[]; note: string }[];
  };
  compare: {
    sectionLabel: string; headline: string;
    featureLabel: string; fiberLabel: string; co2Label: string;
    rows: { feature: string; fiber: string; co2: string }[];
  };
  related: { sectionLabel: string; headline: string };
  specs: { sectionLabel: string; headline: string; specLabel: string; valueLabel: string; imperialLabel: string; metricLabel: string };
  faq: {
    sectionLabel: string; headline: string;
    items: { question: string; answer: string }[];
  };
  stickyBar: { machineName: string; cta: string };
  form: {
    nameLabel: string; emailLabel: string; phoneLabel: string; companyLabel: string;
    messageLabel: string; messagePlaceholder: string;
    submitLabel: string; submittingLabel: string;
    successTitle: string; successBody: string;
    privacyNote: string;
  };
  quote: {
    sectionLabel: string; headline: string; body: string;
    notes: string[];
  };
  relatedProducts: { name: string; href: string; tag: string; imageId?: string }[];
};

const es: FiberLaserContent = {
  hero: {
    sectionLabel: "Fabricación",
    headline: "Máquina de Corte\nLáser de Fibra",
    subheadline: "1.5 kW a 30 kW. Precisión ±0.03 mm. Mesas de 4′×4′ a 8′×20′. Fuente Raycus, guías HIWIN, CNC CypCut — instalación completa y soporte en Chile incluidos.",
    cta1: "Solicitar Cotización",
    cta2: "Descargar Ficha Técnica",
  },
  features: [
    { number: "01", headline: "Fuente de Fibra Raycus — Grado Industrial desde el Primer Día", body: "Cada máquina se entrega con una fuente láser de fibra Raycus — una de las marcas más confiables en el corte láser industrial a nivel mundial. Las configuraciones estándar de 1.5 kW a 12 kW cubren la mayoría de los talleres de producción. La serie G de alta potencia llega a 30 kW para trabajo en placa gruesa de más de 1\".", spec: { label: "Potencia Estándar", value: "1.5–12 kW" } },
    { number: "02", headline: "Precisión ±0.03mm en Guías HIWIN", body: "Las guías lineales HIWIN (series 20–35 según el modelo) y los servomotores de bus Fuji ofrecen una precisión de posicionamiento de ±0.03mm en cada eje. Retroalimentación de lazo cerrado, sin correas, sin compromisos — los mismos componentes utilizados en centros de mecanizado CNC.", spec: { label: "Posicionamiento", value: "±0.03 mm" } },
    { number: "03", headline: "CNC Bochu CypCut — El Estándar en Láser de Fibra", body: "Bochu CypCut (2000E / 4000E / 8000C según la potencia) es el controlador estándar de la industria para láseres de fibra de producción. Basado en Windows, acepta DXF y DWG directamente, incluye una biblioteca de parámetros de corte preconfigurados para cientos de combinaciones de material y espesor.", spec: { label: "Controlador", value: "Bochu CypCut" } },
    { number: "04", headline: "Mesas de 4'×4' a 8'×20'", body: "Siete tamaños estándar de mesa cubren desde pequeños talleres de precisión hasta grandes fabricantes estructurales. Desde el formato mini de 1313mm para piezas intrincadas hasta la plataforma 8025mm para trabajo en chapa sobredimensionada — todo sobre la misma plataforma de bastidor de máquina probada.", spec: { label: "Mesa Máx.", value: "8'×20' (8025)" } },
    { number: "05", headline: "Mesa de Intercambio Estándar en Serie FE", body: "Los modelos de la serie FE incluyen mesa de intercambio de doble paleta como estándar — no como accesorio adicional costoso. Cargue el siguiente corte mientras la máquina procesa la chapa actual. Cambio de pieza a pieza en menos de 15 segundos. Sin tiempo de inactividad, sin operadores esperando en la máquina.", spec: { label: "Cambio de Paleta", value: "< 15 seg" } },
  ],
  enclosed: {
    sectionLabel: "Opción Encapsulada",
    headline: "¿Necesita Clase de Seguridad Láser 1?",
    subheadline: "Los VTM-PE y VTM-SE añaden un encapsulado de seguridad completo a la misma plataforma — misma fuente Raycus, guías HIWIN y CNC CypCut, en una carcasa con clasificación Clase 1.",
    features: [
      { number: "01", headline: "Clase de Seguridad Láser 1 — Sin EPP para Personas Cercanas", body: "El encapsulado perimetral completo y las puertas con enclavamiento automático llevan el VTM-PE y VTM-SE a la Clase de Seguridad Láser 1. Los operadores y cualquier persona en el edificio no necesitan gafas de seguridad láser mientras la máquina funciona. Requerido para instalaciones con operaciones mixtas, áreas de oficina adyacentes o acceso frecuente de visitantes.", spec: { label: "Seguridad Láser", value: "Clase 1" } },
      { number: "02", headline: "Enclavamientos de Puerta Automáticos — No Puede Cortar con la Puerta Abierta", body: "Las puertas de carga frontales y los paneles de acceso están enclavados con el circuito de habilitación del láser. Si se abre una puerta a mitad del ciclo, el láser se apaga inmediatamente. Circuito de seguridad compatible con OSHA con monitoreo redundante independiente — no un enclavamiento de software.", spec: { label: "Enclavamiento", value: "Redundancia hardware" } },
      { number: "03", headline: "Puerto de Extracción de Humos Integrado", body: "Cada máquina VTM encapsulada incluye un puerto de extracción dedicado para conexión de ducto de 6\" (152 mm). Sin plenum externo — conecte directamente el sistema de extracción de su taller. Unidades de filtro de cartucho disponibles para instalaciones sin extracción centralizada.", spec: { label: "Puerto de Ducto", value: "6\" (152 mm)" } },
      { number: "04", headline: "Mismo Rendimiento de Corte que el Bastidor Abierto", body: "El encapsulado agrega seguridad sin afectar el rendimiento de corte. Misma fuente Raycus, guías HIWIN, servos Fuji y CNC Bochu CypCut que la línea de bastidor abierto. Precisión ±0.03 mm, mismas velocidades máximas, mismo rango de materiales.", spec: { label: "Precisión", value: "±0.03 mm" } },
      { number: "05", headline: "VTM-PE vs. VTM-SE — Dos Formatos", body: "VTM-PE (Encapsulado Protector) para mesas pequeñas (1313, 3015) a 1.5–3 kW — ideal para capacitación, I+D y espacios de uso mixto. VTM-SE (Encapsulado de Seguridad) es el formato industrial completo para mesas 3015–4020 hasta 6 kW.", spec: { label: "Variantes", value: "VTM-PE / VTM-SE" } },
    ],
  },
  specs: { sectionLabel: "Especificaciones Técnicas", headline: "Con Números", specLabel: "Especificación", valueLabel: "Valor", imperialLabel: "imperial", metricLabel: "métrico" },
  video: { sectionLabel: "Véala Cortar", headline: "En Acción" },
  configure: {
    sectionLabel: "Configurar",
    headline: "Configure su Máquina",
    note: "Todas las configuraciones están disponibles para pedido. Contacte a su asesor de ventas VTM para precios y plazos de entrega de su configuración específica.",
    options: [
      { label: "Serie del Modelo", options: ["Serie A — 1.5–3 kW", "Serie Pro — 3–12 kW", "Serie G — 20–30 kW", "Serie FE — Mesa de Intercambio"], note: "Series EA y B para producción estándar; serie G para placa gruesa; FE añade mesa de intercambio de doble paleta." },
      { label: "Potencia del Láser", options: ["1.5 kW", "3 kW", "6 kW", "12 kW", "20 kW", "30 kW"], note: "Mayor potencia corta placa más gruesa más rápido y permite trabajar metales reflectivos en mayores espesores." },
      { label: "Tamaño de Mesa", options: ["4′×4′ (1313)", "4′×8′ (1325)", "5′×10′ (3015)", "4′×15′ (4015)", "4′×20′ (4020)", "6′×15′ (6015)", "6′×20′ (6020)", "6′×25′ (6025)", "8′×25′ (8025)"], note: "Haga coincidir el tamaño de chapa estándar para minimizar recortes y tiempo de manipulación." },
      { label: "Tipo de Mesa", options: ["Mesa Fija Individual (series EA / B)", "Mesa de Intercambio Doble Paleta (serie FE)"], note: "La mesa de intercambio elimina el tiempo de inactividad por carga/descarga — estándar en serie FE, no es un accesorio adicional." },
      { label: "Encapsulado", options: ["Bastidor Abierto (estándar)", "VTM-PE — Encapsulado Protector", "VTM-SE — Encapsulado de Seguridad Industrial"], note: "Los modelos encapsulados alcanzan la Clase de Seguridad Láser 1 con puertas de enclavamiento de hardware y extracción de humos integrada. VTM-PE para formatos pequeños; VTM-SE para escala de producción completa." },
    ],
  },
  compare: {
    sectionLabel: "Tecnología",
    headline: "Láser de Fibra vs. CO₂",
    featureLabel: "Característica",
    fiberLabel: "Láser de Fibra",
    co2Label: "Láser CO₂",
    rows: [
      { feature: "Eficiencia energética", fiber: "~30%", co2: "~10%" },
      { feature: "Velocidad de corte (chapa fina <3mm)", fiber: "3× más rápido", co2: "Base" },
      { feature: "Costo de gas láser", fiber: "Ninguno", co2: "Costo continuo significativo" },
      { feature: "Mantenimiento de espejos/óptica", fiber: "Ninguno", co2: "Limpieza regular requerida" },
      { feature: "Tiempo de calentamiento", fiber: "Instantáneo", co2: "15–30 minutos" },
      { feature: "Corte de metales no ferrosos (cobre, latón)", fiber: "Excelente", co2: "Bueno" },
      { feature: "Placa muy gruesa (>25mm acero)", fiber: "Bueno (con gas de asistencia)", co2: "Ligera ventaja" },
      { feature: "Entrega del haz", fiber: "Cable de fibra flexible", co2: "Trayectoria de espejo rígida" },
    ],
  },
  related: { sectionLabel: "Seguir Explorando", headline: "Máquinas Relacionadas" },
  faq: {
    sectionLabel: "Preguntas",
    headline: "Preguntas Frecuentes",
    items: [
      { question: "¿Qué materiales puede cortar el láser de fibra VTM?", answer: "El láser de fibra VTM corta acero dulce, acero inoxidable, aluminio, latón, cobre, acero galvanizado y la mayoría de otros metales conductores. No es adecuado para madera, plásticos ni materiales no conductores. Para secciones gruesas de inoxidable o aluminio, el gas de asistencia de nitrógeno produce bordes más limpios sin óxido." },
      { question: "¿Cómo se compara el láser de fibra con el láser CO₂ para mi taller?", answer: "Los láseres de fibra son 3 veces más eficientes energéticamente que los CO₂, no requieren gas láser y cortan metales de calibre fino (menos de 6 mm) a velocidades mucho mayores. El CO₂ tiene una ligera ventaja en materiales no ferrosos muy gruesos. Para la mayoría de los talleres de fabricación que trabajan con acero dulce e inoxidable de 6–20 mm, la fibra es la opción clara." },
      { question: "¿Cuál es el pedido mínimo y el plazo de entrega?", answer: "VTM vende máquinas individuales — no hay pedido mínimo. El plazo de entrega estándar desde la confirmación del pedido hasta la entrega en su planta es de 8–12 semanas, según la configuración de potencia y los accesorios opcionales. La entrega urgente puede estar disponible; contacte a su asesor de ventas para los plazos actuales." },
      { question: "¿Qué incluye la instalación?", answer: "Cada máquina VTM incluye un servicio certificado de instalación y puesta en marcha. Nuestros técnicos se encargan de la coordinación de descarga, nivelación, alineación del láser, calibración del software y cortes de verificación de primera pieza. La capacitación del operador (normalmente 2–3 días en sitio) está incluida en el precio base." },
      { question: "¿Qué garantía y soporte posventa se ofrece?", answer: "Todas las máquinas de corte láser de fibra VTM incluyen una garantía de 2 años de piezas y mano de obra para el bastidor y la cabeza de corte, y una garantía de 1 año para la fuente láser (conforme a los términos de fábrica de IPG o Raycus). El soporte de diagnóstico remoto está disponible 24/7. El inventario de repuestos en Chile cubre el 95% de los elementos de desgaste comunes para envío al día siguiente." },
      { question: "¿Puedo ver la máquina cortar antes de comprar?", answer: "Sí. VTM realiza demostraciones de corte mensuales en nuestras instalaciones en Chile Puede traer su propio material y programas de piezas, o cortaremos una muestra representativa de nuestra biblioteca estándar de demostración. Contáctenos para programar — los turnos de demo están disponibles en un calendario rotativo de 4 semanas." },
      { question: "¿Qué significa la Clase de Seguridad Láser 1 en los modelos encapsulados?", answer: "La Clase 1 significa que el nivel de emisión accesible es seguro en todas las condiciones razonablemente previsibles — cuando la máquina opera normalmente con el encapsulado cerrado, nadie fuera de la máquina está expuesto a radiación láser peligrosa. No se requieren gafas de seguridad láser para operadores ni personas cercanas." },
      { question: "¿Puede instalarse la versión encapsulada en una instalación de uso mixto?", answer: "Sí. La clasificación Clase 1 elimina el requisito de zona de exclusión láser. Se necesita extracción adecuada de humos — conecte el puerto de ducto de 6\" a un sistema de extracción adecuado o agregue la unidad de filtro de cartucho opcional." },
      { question: "¿Qué sucede si se abre la puerta de la máquina encapsulada mientras el láser está disparando?", answer: "El enclavamiento de hardware corta la potencia del láser antes de que la puerta se abra lo suficiente. Es un circuito de seguridad a nivel de hardware — no software — con canales de monitoreo redundantes para evitar falla de punto único." },
      { question: "¿Cuál es la diferencia entre VTM-PE y VTM-SE?", answer: "VTM-PE (Encapsulado Protector) está diseñado para formatos más pequeños (mesa 1313 y 3015) a 1.5–3 kW — adecuado para capacitación, laboratorios de I+D y producción ligera. VTM-SE (Encapsulado de Seguridad) es la versión industrial completa para mesas 3015–4020 a hasta 6 kW." },
    ],
  },
  stickyBar: { machineName: "Cortadora Láser de Chapa", cta: "Solicitar Cotización" },
  form: {
    nameLabel: "Nombre", emailLabel: "Correo Electrónico", phoneLabel: "Teléfono", companyLabel: "Empresa",
    messageLabel: "Cuéntenos sobre su trabajo",
    messagePlaceholder: "Materiales que corta, espesores, volumen por turno, equipo actual…",
    submitLabel: "Enviar Solicitud de Cotización", submittingLabel: "Enviando...",
    successTitle: "Solicitud Recibida", successBody: "Nos pondremos en contacto en un día hábil.",
    privacyNote: "Al enviar, acepta nuestra Política de Privacidad. Nunca vendemos sus datos.",
  },
  quote: {
    sectionLabel: "Obtener Precio",
    headline: "Solicitar Cotización",
    body: "Cuéntenos sobre su taller y el trabajo que realiza. Responderemos con precio, plazo de entrega y configuración recomendada en un día hábil.",
    notes: ["Sin compromiso", "Respuesta en 1 día hábil", "Hable directamente con un especialista en maquinaria"],
  },
  relatedProducts: [
    { name: "Máquina de Soldadura Láser", href: "/fabrication/4-in-1-laser-machine", tag: "Soldadura", imageId: "/images/4in1-laser-hero-2.webp" },
    { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", tag: "Plegado", imageId: "/images/cnc-press-brake-hero.webp" },
    { name: "Máquina de Limpieza Láser", href: "/fabrication/laser-cleaning-machine", tag: "Limpieza", imageId: "/images/laser-cleaning-hero.webp" },
    { name: "Brazo de Soldadura Colaborativo", href: "/automation/collaborative-welding-arm", tag: "Automatización", imageId: "/images/cobot-welding-hero-2.webp" },
  ],
};

export const content: Record<string, FiberLaserContent> = { es };
