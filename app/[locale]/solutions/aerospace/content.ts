export type AerospaceContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string; cta1: string; cta2: string };
  materials: {
    sectionLabel: string; headline: string;
    items: { material: string; cap: string }[];
  };
  equipment: {
    sectionLabel: string; headline: string; learnMore: string;
    items: { name: string; href: string; desc: string }[];
  };
  cta: { sectionLabel: string; headline: string; body: string; cta: string };
};

const en: AerospaceContent = {
  hero: {
    sectionLabel: "Industry Solutions",
    headline: "Aerospace",
    subheadline: "Aerospace demands tolerances that most fabrication equipment can't hold. Ours can. ±0.05mm on titanium, aluminum alloy, and stainless — cut to print, every time.",
    cta1: "Request a Quote",
    cta2: "Talk to a Specialist",
  },
  materials: {
    sectionLabel: "Material Capabilities",
    headline: "Aerospace materials, processed correctly",
    items: [
      { material: "Titanium (Ti-6Al-4V)", cap: "Fiber laser cutting with nitrogen assist gas eliminates oxidation. Heat-affected zone minimized to preserve material properties." },
      { material: "Aluminum Alloys (6061, 7075)", cap: "High-speed fiber laser cutting with clean edges. No burr formation at correct parameters — reduced deburring time in post-processing." },
      { material: "Stainless Steel (304, 316, 17-4 PH)", cap: "Nitrogen-assist cutting for oxide-free edges. Press brake bending with springback compensation programmed for each grade." },
      { material: "Inconel and high-temperature alloys", cap: "Contact us — fiber laser parameters for these materials require custom configuration. We have experience with Inconel 625 and 718." },
    ],
  },
  equipment: {
    sectionLabel: "Recommended Equipment",
    headline: "Equipment for aerospace work",
    learnMore: "Learn more →",
    items: [
      { name: "Fiber Laser Sheet Cutting Machine", href: "/fabrication/fiber-laser-cutting-machine", desc: "±0.05mm accuracy, nitrogen-assist capability for clean non-ferrous edges." },
      { name: "CNC Press Brake", href: "/fabrication/cnc-press-brake", desc: "±0.01mm bending repeatability. Automatic springback compensation by material and gauge." },
    ],
  },
  cta: {
    sectionLabel: "Get Started",
    headline: "Discuss your aerospace application",
    body: "Send us your part drawings, material specs, and tolerance requirements. We'll confirm capability and recommend the right configuration.",
    cta: "Request a Quote",
  },
};

const es: AerospaceContent = {
  hero: {
    sectionLabel: "Soluciones por Industria",
    headline: "Aeroespacial",
    subheadline: "El sector aeroespacial exige tolerancias que la mayoría de los equipos de fabricación no pueden mantener. Los nuestros sí. ±0.05mm en titanio, aleaciones de aluminio e inoxidable — corte a plano, siempre.",
    cta1: "Solicitar Cotización",
    cta2: "Hablar con un Especialista",
  },
  materials: {
    sectionLabel: "Capacidades de Material",
    headline: "Materiales aeroespaciales, procesados correctamente",
    items: [
      { material: "Titanio (Ti-6Al-4V)", cap: "Corte láser de fibra con gas de asistencia de nitrógeno elimina la oxidación. Zona afectada por el calor minimizada para preservar las propiedades del material." },
      { material: "Aleaciones de Aluminio (6061, 7075)", cap: "Corte láser de fibra de alta velocidad con bordes limpios. Sin formación de rebabas con los parámetros correctos — reduce el tiempo de desbarbado en post-procesamiento." },
      { material: "Acero Inoxidable (304, 316, 17-4 PH)", cap: "Corte con asistencia de nitrógeno para bordes sin óxido. Plegado en prensa con compensación de retorno elástico programada para cada grado." },
      { material: "Inconel y aleaciones de alta temperatura", cap: "Contáctenos — los parámetros láser para estos materiales requieren configuración personalizada. Tenemos experiencia con Inconel 625 y 718." },
    ],
  },
  equipment: {
    sectionLabel: "Equipos Recomendados",
    headline: "Equipos para trabajo aeroespacial",
    learnMore: "Más información →",
    items: [
      { name: "Máquina de Corte Láser de Fibra para Chapa", href: "/fabrication/fiber-laser-cutting-machine", desc: "Precisión ±0.05mm, capacidad de asistencia con nitrógeno para bordes limpios en metales no ferrosos." },
      { name: "Prensa Plegadora CNC", href: "/fabrication/cnc-press-brake", desc: "Repetibilidad de plegado ±0.01mm. Compensación automática de retorno elástico por material y calibre." },
    ],
  },
  cta: {
    sectionLabel: "Comenzar",
    headline: "Analice su aplicación aeroespacial",
    body: "Envíenos sus planos de piezas, especificaciones de material y requisitos de tolerancia. Confirmaremos la capacidad y recomendaremos la configuración correcta.",
    cta: "Solicitar Cotización",
  },
};

export const content: Record<"en" | "es", AerospaceContent> = { en, es };
