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
    sectionLabel: "Nuestra Historia",
    headline: "Donde la Precisión Se Encuentra con el Propósito.",
    subheadline: "15 años de experiencia en maquinaria industrial al servicio de talleres de fabricación metálica en Chile que exigen más que una compra — exigen un socio.",
  },
  story: {
    sectionLabel: "Quiénes Somos",
    headline: "Maquinaria de precisión, forjada durante 15 años. Al servicio de los talleres de Chile.",
    paragraphs: [
      "VT Maquinarias es una empresa chilena de maquinaria industrial fundada en Santiago en 2009. A lo largo de 15 años hemos construido una reputación en Chile y América Latina por nuestros equipos de fabricación de precisión, estándares de servicio rigurosos y un compromiso genuino con los talleres que confían en nosotros.",
      "Conocemos el mercado chileno porque trabajamos en él todos los días: talleres lidiando con equipos obsoletos, proveedores extranjeros que desaparecen tras la entrega y precios elevados por un soporte de maquinaria que simplemente no existe.",
      "Por eso construimos VT Maquinarias de otra manera. No vendemos solo máquinas — somos el tipo de socio que los fabricantes metálicos chilenos merecen: uno que aparece antes de que compre, se queda durante la instalación y permanece disponible durante toda la vida útil del equipo.",
    ],
  },
  values: {
    sectionLabel: "Nuestros Valores",
    headline: "Cuatro pilares que guían todo lo que hacemos.",
    items: [
      { title: "Precisión", description: "Cada máquina que vendemos se calibra con tolerancias exactas antes de salir de fábrica. No enviamos equipos que no puedan mantener las especificaciones — porque su reputación depende de piezas correctas en todo momento." },
      { title: "Asociación", description: "No desaparecemos después de la entrega. Nuestro equipo permanece involucrado durante la instalación, capacitación y toda la vida productiva de su máquina. Cuando llama, llega a alguien que conoce su taller." },
      { title: "Confiabilidad", description: "El tiempo de inactividad cuesta dinero. Nuestras máquinas están diseñadas para funcionar, y cuando necesitan servicio, las piezas se envían el mismo día y el soporte está a una llamada de distancia. Diseñamos toda nuestra operación en torno a su tiempo de actividad." },
      { title: "Innovación", description: "Desde la tecnología láser de fibra hasta la automatización de soldadura colaborativa, llevamos los mejores avances del mundo manufacturero a los talleres de Chile — sin la complejidad ni el precio empresarial." },
    ],
  },
  timeline: {
    sectionLabel: "Nuestra Historia",
    headline: "Desde Santiago hacia cada región de Chile.",
    items: [
      { year: "2009", event: "VT Maquinarias fundada en Santiago, Chile. Primeras instalaciones de láser de fibra en Sudamérica." },
      { year: "2022", event: "Ampliación de nuestra línea de fabricación láser y apertura de nuevas instalaciones de demostración." },
      { year: "2024", event: "Cobertura de servicio ampliada a todo Chile. Equipo de soporte técnico plenamente operativo." },
      { year: "2026", event: "Brazos de soldadura colaborativos incorporados a nuestro catálogo para el mercado chileno." },
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
