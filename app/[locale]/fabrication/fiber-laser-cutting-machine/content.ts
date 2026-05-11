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

const en: FiberLaserContent = {
  hero: {
    sectionLabel: "Fabrication",
    headline: "Fiber Laser\nCutting Machine",
    subheadline: "1.5 kW to 30 kW. ±0.03 mm accuracy. Bed sizes from 4′×4′ to 8′×20′. Raycus source, HIWIN rails, CypCut CNC — full installation and US support included.",
    cta1: "Request a Quote",
    cta2: "Download Spec Sheet",
  },
  features: [
    { number: "01", headline: "Raycus Fiber Source — Industrial Grade from Day One", body: "Every machine ships with a Raycus fiber laser source — one of the most trusted brands in industrial laser cutting worldwide. Standard configurations from 1.5 kW to 12 kW cover most production shops. High-power G series goes to 30 kW for heavy plate work over 1\".", spec: { label: "Standard Power", value: "1.5–12 kW" } },
    { number: "02", headline: "±0.03mm Accuracy on HIWIN Rails", body: "HIWIN linear guide rails (20–35 series depending on model) and Fuji bus servo drives deliver ±0.03mm positioning accuracy on every axis. Closed-loop feedback, no belt drives, no compromise — the same components used in CNC machining centers.", spec: { label: "Positioning", value: "±0.03 mm" } },
    { number: "03", headline: "Bochu CypCut CNC — The Standard in Fiber Laser", body: "Bochu CypCut (2000E / 4000E / 8000C depending on power) is the industry-standard controller for production fiber lasers. Windows-based, accepts DXF and DWG directly, includes a library of pre-set cutting parameters for hundreds of material and thickness combinations.", spec: { label: "Controller", value: "Bochu CypCut" } },
    { number: "04", headline: "Bed Sizes From 4'×4' to 8'×20'", body: "Seven standard bed sizes cover small precision shops through large structural fabricators. From the 1313mm mini format for intricate parts to the 8025mm platform for oversized sheet work — all on the same proven machine frame platform.", spec: { label: "Max Bed", value: "8'×20' (8025)" } },
    { number: "05", headline: "Exchange Table Standard on FE Series", body: "FE-series models ship with dual-pallet exchange table as standard — not an expensive add-on. Load the next blank while the machine cuts the current sheet. Part-to-part changeover under 15 seconds. No idle time, no operator waiting at the machine.", spec: { label: "Pallet Change", value: "< 15 sec" } },
  ],
  enclosed: {
    sectionLabel: "Enclosed Option",
    headline: "Need Laser Safety Class 1?",
    subheadline: "The VTM-PE and VTM-SE add a full safety enclosure to the same machine platform — same Raycus source, HIWIN rails, and CypCut CNC, in a Class 1 rated housing.",
    features: [
      { number: "01", headline: "Laser Safety Class 1 — No PPE for Bystanders", body: "The full-perimeter enclosure and automatic interlocked doors bring the VTM-PE and VTM-SE to Laser Safety Class 1. Operators and anyone in the building do not need laser safety eyewear while the machine is running. Required for facilities with mixed operations, adjacent office areas, or frequent visitor access.", spec: { label: "Laser Safety", value: "Class 1" } },
      { number: "02", headline: "Automatic Door Interlocks — Can't Cut With Door Open", body: "Front loading doors and any service access panels are interlocked with the laser enable circuit. If a door is opened mid-cycle, the laser shuts off immediately. OSHA-compliant safety circuit with independent redundant monitoring — not a software interlock.", spec: { label: "Interlock", value: "Hardware-redundant" } },
      { number: "03", headline: "Integrated Fume Extraction Port", body: "Every enclosed VTM machine ships with a dedicated fume extraction port sized for a 6\" duct connection. No external plenum required — connect your shop extraction system directly. Compatible cartridge filter units available for facilities without central extraction.", spec: { label: "Duct Port", value: "6\" (152 mm)" } },
      { number: "04", headline: "Same Cutting Performance as Open-Frame", body: "The enclosure adds safety without affecting cut performance. Same Raycus fiber source, HIWIN rails, Fuji servo drives, and Bochu CypCut CNC as the open-frame line. ±0.03 mm accuracy, same max speeds, same material range.", spec: { label: "Accuracy", value: "±0.03 mm" } },
      { number: "05", headline: "VTM-PE vs. VTM-SE — Two Formats", body: "VTM-PE (Protective Enclosure) suits smaller beds (1313, 3015) at 1.5–3 kW — ideal for training rooms, R&D, and mixed-use spaces. VTM-SE (Safety Enclosure) is the full industrial format for 3015–4020 beds at up to 6 kW.", spec: { label: "Variants", value: "VTM-PE / VTM-SE" } },
    ],
  },
  specs: { sectionLabel: "Technical Specifications", headline: "By the Numbers", specLabel: "Specification", valueLabel: "Value", imperialLabel: "imperial", metricLabel: "metric" },
  video: { sectionLabel: "See It Cut", headline: "In Action" },
  configure: {
    sectionLabel: "Configure",
    headline: "Build Your Machine",
    note: "All configurations are available to order. Contact your VTM sales engineer for pricing and lead time on your specific build.",
    options: [
      { label: "Model Series", options: ["A Series — 1.5–3 kW", "Pro Series — 3–12 kW", "G Series — 20–30 kW", "FE Series — Exchange Table"], note: "EA and B series for standard production; G series for heavy plate; FE adds dual-pallet exchange table." },
      { label: "Laser Power", options: ["1.5 kW", "3 kW", "6 kW", "12 kW", "20 kW", "30 kW"], note: "Higher power cuts thicker plate faster and unlocks reflective metals at higher thicknesses." },
      { label: "Bed Size", options: ["4′×4′ (1313)", "4′×8′ (1325)", "5′×10′ (3015)", "4′×15′ (4015)", "4′×20′ (4020)", "6′×15′ (6015)", "6′×20′ (6020)", "6′×25′ (6025)", "8′×25′ (8025)"], note: "Match your standard sheet size to minimize offcuts and handling time." },
      { label: "Table Type", options: ["Single Fixed (EA / B series)", "Dual-Pallet Exchange (FE series)"], note: "Exchange table eliminates load/unload downtime — standard on FE series, not an add-on." },
      { label: "Enclosure", options: ["Open Frame (standard)", "VTM-PE — Protective Enclosure", "VTM-SE — Safety Industrial Enclosure"], note: "Enclosed models achieve Laser Safety Class 1 with hardware-interlocked doors and integrated fume extraction. VTM-PE for smaller formats; VTM-SE for full production scale." },
    ],
  },
  compare: {
    sectionLabel: "Technology",
    headline: "Fiber vs. CO₂ Laser",
    featureLabel: "Feature",
    fiberLabel: "Fiber Laser",
    co2Label: "CO₂ Laser",
    rows: [
      { feature: "Wall-plug efficiency", fiber: "~30%", co2: "~10%" },
      { feature: "Cutting speed (thin sheet <3mm)", fiber: "3× faster", co2: "Baseline" },
      { feature: "Laser gas cost", fiber: "None", co2: "Significant ongoing cost" },
      { feature: "Mirror/optic maintenance", fiber: "None", co2: "Regular cleaning required" },
      { feature: "Warm-up time", fiber: "Instant", co2: "15–30 minutes" },
      { feature: "Non-ferrous cutting (copper, brass)", fiber: "Excellent", co2: "Good" },
      { feature: "Very thick plate (>25mm steel)", fiber: "Good (with assist gas)", co2: "Slight edge" },
      { feature: "Beam delivery", fiber: "Flexible fiber cable", co2: "Rigid mirror path" },
    ],
  },
  related: { sectionLabel: "Continue Exploring", headline: "Related Machines" },
  faq: {
    sectionLabel: "Questions",
    headline: "Frequently Asked",
    items: [
      { question: "What materials can the VTM fiber laser cut?", answer: "The VTM fiber laser cuts mild steel, stainless steel, aluminum, brass, copper, galvanized steel, and most other conductive metals. It is not suited for wood, plastics, or non-conductive materials. For thick stainless or aluminum sections, nitrogen assist gas produces cleaner, oxide-free edges." },
      { question: "How does fiber laser compare to CO₂ laser for my shop?", answer: "Fiber lasers are 3× more energy-efficient than CO₂, require no laser gas, and cut thin gauge metals (under 0.25\") at dramatically higher speeds. CO₂ maintains a slight edge on very thick non-ferrous materials. For most US fab shops running mild steel and stainless in the 0.25\"–0.75\" range, fiber is the clear choice." },
      { question: "What is the minimum order and lead time?", answer: "VTM sells single machines — there is no minimum order. Standard lead time from confirmed order to delivery at your dock is 8–12 weeks, depending on power configuration and optional accessories. Rush delivery may be available; contact your sales engineer for current timelines." },
      { question: "What does installation include?", answer: "Every VTM machine ships with a certified installation and commissioning service. Our technicians handle unloading coordination, leveling, laser alignment, software calibration, and first-part verification cuts. Operator training (typically 2–3 days on-site) is included in the base price." },
      { question: "What warranty and after-sales support is provided?", answer: "All VTM fiber laser cutting machines carry a 2-year parts and labor warranty on the machine frame and cutting head, and a 1-year warranty on the laser source (matching IPG or Raycus factory terms). Remote diagnostic support is available 24/7. US-based spare parts inventory covers 95% of common wear items for next-day shipment." },
      { question: "Can I see the machine cut before I buy?", answer: "Yes. VTM hosts monthly cut demonstrations at our US facility. You can bring your own material and part programs, or we'll cut a representative sample from our standard demo library. Contact us to schedule — demo slots are available on a rolling 4-week calendar." },
      { question: "What does Laser Safety Class 1 mean for the enclosed models?", answer: "Class 1 means the accessible emission level is safe under all reasonably foreseeable conditions — when the machine is operating normally with the enclosure closed, no one outside the machine is exposed to hazardous laser radiation. No laser safety eyewear is required for operators or bystanders." },
      { question: "Can the enclosed version be installed in a mixed-use facility or office building?", answer: "Yes. The Class 1 rating eliminates the laser exclusion zone requirement. You do need adequate fume extraction — connect the 6\" duct port to a suitable extraction system or add the optional cartridge filter unit." },
      { question: "What happens if the enclosed machine's door is opened while the laser is firing?", answer: "The hardware interlock cuts laser power before the door opens far enough to expose anyone to the beam. This is a hardware-level safety circuit — not software — with redundant monitoring channels to prevent single-point failure." },
      { question: "What's the difference between VTM-PE and VTM-SE?", answer: "VTM-PE (Protective Enclosure) is designed for smaller formats (1313 and 3015 bed) at 1.5–3 kW — suited for training facilities, R&D labs, and light production. VTM-SE (Safety Enclosure) is the full industrial version for 3015–4020 beds at up to 6 kW, suitable for production shops that need Class 1 compliance." },
    ],
  },
  stickyBar: { machineName: "Fiber Laser Sheet Cutting Machine", cta: "Get a Quote" },
  form: {
    nameLabel: "Name", emailLabel: "Email", phoneLabel: "Phone", companyLabel: "Company",
    messageLabel: "Tell us about your work",
    messagePlaceholder: "Materials you cut, thicknesses, shift volume, current equipment…",
    submitLabel: "Send Quote Request", submittingLabel: "Sending...",
    successTitle: "Request Received", successBody: "We'll be in touch within one business day.",
    privacyNote: "By submitting you agree to our Privacy Policy. We never sell your data.",
  },
  quote: {
    sectionLabel: "Get Pricing",
    headline: "Request a Quote",
    body: "Tell us about your shop and the work you're doing. We'll respond with pricing, lead time, and recommended configuration within one business day.",
    notes: ["No obligation", "Response within 1 business day", "Speak directly with a machine specialist"],
  },
  relatedProducts: [
    { name: "Laser Welding Machine", href: "/fabrication/4-in-1-laser-machine", tag: "Welding", imageId: "/images/4in1-laser-hero-2.webp" },
    { name: "CNC Press Brake", href: "/fabrication/cnc-press-brake", tag: "Bending", imageId: "/images/cnc-press-brake-hero.webp" },
    { name: "Laser Cleaning Machine", href: "/fabrication/laser-cleaning-machine", tag: "Cleaning", imageId: "/images/laser-cleaning-hero.webp" },
    { name: "Collaborative Welding Arm", href: "/automation/collaborative-welding-arm", tag: "Automation", imageId: "/images/cobot-welding-hero-2.webp" },
  ],
};

const es: FiberLaserContent = {
  hero: {
    sectionLabel: "Fabricación",
    headline: "Máquina de Corte\nLáser de Fibra",
    subheadline: "1.5 kW a 30 kW. Precisión ±0.03 mm. Mesas de 4′×4′ a 8′×20′. Fuente Raycus, guías HIWIN, CNC CypCut — instalación completa y soporte en EE.UU. incluidos.",
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
      { question: "¿Qué garantía y soporte posventa se ofrece?", answer: "Todas las máquinas de corte láser de fibra VTM incluyen una garantía de 2 años de piezas y mano de obra para el bastidor y la cabeza de corte, y una garantía de 1 año para la fuente láser (conforme a los términos de fábrica de IPG o Raycus). El soporte de diagnóstico remoto está disponible 24/7. El inventario de repuestos en EE.UU. cubre el 95% de los elementos de desgaste comunes para envío al día siguiente." },
      { question: "¿Puedo ver la máquina cortar antes de comprar?", answer: "Sí. VTM realiza demostraciones de corte mensuales en nuestras instalaciones en EE.UU. Puede traer su propio material y programas de piezas, o cortaremos una muestra representativa de nuestra biblioteca estándar de demostración. Contáctenos para programar — los turnos de demo están disponibles en un calendario rotativo de 4 semanas." },
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

export const content: Record<"en" | "es", FiberLaserContent> = { en, es };
