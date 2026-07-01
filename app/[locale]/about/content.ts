export type AboutContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string };
  story: {
    sectionLabel: string; headline: string;
    paragraphs: string[];
  };
  values: {
    sectionLabel: string; headline: string;
    items: { title: string; description: string }[];
  };
  timeline: {
    sectionLabel: string; headline: string;
    items: { year: string; event: string }[];
  };
  certifications: {
    sectionLabel: string; headline: string;
    items: { name: string; description: string }[];
  };
  cta: { headline: string; body: string; cta1: string; cta2: string };
};

const es: AboutContent = {
  hero: {
    sectionLabel: "Nosotros",
    headline: "Más que máquinas, brindamos soporte para crecer.",
    subheadline: "",
  },
  story: {
    sectionLabel: "Quiénes Somos",
    headline: "15 años entregando tecnología, respaldo y continuidad operativa.",
    paragraphs: [
      "En VT Maquinarias Chile somos líderes nacionales en soluciones para la industria metalmecánica, especializados en máquinas de corte láser, plegado CNC y soldadura láser.",
      "Con más de 1.000 máquinas vendidas en 15 años, contamos con un amplio stock de equipos disponibles para entrega inmediata y un showroom donde nuestros clientes pueden conocer y ver las máquinas operando en demostraciones en vivo.",
      "Nuestra principal fortaleza es una postventa rápida, cercana y especializada, respaldada por servicio técnico propio, capacitación y repuestos disponibles en Chile.",
    ],
  },
  values: {
    sectionLabel: "Nuestros Valores",
    headline: "Cuatro pilares que guían todo lo que hacemos.",
    items: [
      { title: "Precisión", description: "Cada máquina se calibra y verifica antes de su entrega para asegurar resultados confiables desde el primer día." },
      { title: "Respaldo", description: "Lo acompañamos en la instalación, capacitación y puesta en marcha. La entrega de su máquina es solo el comienzo de nuestro compromiso con usted." },
      { title: "Confiabilidad", description: "Servicio técnico propio, repuestos disponibles y respuesta rápida para mantener su producción estable." },
      { title: "Innovación", description: "Tecnología de clase mundial, adaptada a las necesidades reales de la industria chilena." },
    ],
  },
  timeline: {
    sectionLabel: "Nuestra Historia",
    headline: "Desde Santiago hacia cada región de Chile.",
    items: [
      { year: "2009", event: "VT Maquinarias fundada en Santiago, Chile. Primeras instalaciones de láser de fibra en Sudamérica." },
      { year: "2012", event: "Ampliación de nuestra línea de fabricación láser y apertura de nuevas instalaciones de demostración." },
      { year: "2016", event: "Cobertura de servicio ampliada a todo Chile. Equipo de soporte técnico plenamente operativo." },
      { year: "2026", event: "Apertura de oficinas en Estados Unidos, ampliando nuestra presencia más allá de Chile." },
    ],
  },
  certifications: {
    sectionLabel: "Cumplimiento y Calidad",
    headline: "Calidad certificada. Rendimiento verificado.",
    items: [
      { name: "ISO 9001:2015", description: "Sistema de Gestión de Calidad certificado para el diseño, fabricación y suministro de maquinaria industrial." },
      { name: "Normas de Seguridad", description: "Nuestras máquinas y procedimientos de instalación cumplen con las normas de seguridad laboral aplicables a entornos de fabricación industrial en Chile." },
      { name: "Componentes Certificados", description: "Los componentes eléctricos críticos de nuestras máquinas cuentan con certificación internacional reconocida (UL / CE)." },
    ],
  },
  cta: {
    headline: "¿Listo para trabajar con un socio real?",
    body: "Solicite una consulta gratuita y descubra cómo las máquinas de VT Maquinarias pueden transformar la producción de su taller.",
    cta1: "Solicitar una Consulta",
    cta2: "Contactar a Nuestro Equipo",
  },
};

export const content: Record<string, AboutContent> = { es };
