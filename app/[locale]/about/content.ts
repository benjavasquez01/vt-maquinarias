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

const en: AboutContent = {
  hero: {
    sectionLabel: "Our Story",
    headline: "Where Precision Meets Purpose.",
    subheadline: "15 years of industrial machinery expertise from Chile, now serving US metal fabrication shops that demand more than a purchase — they demand a partner.",
  },
  story: {
    sectionLabel: "Who We Are",
    headline: "Precision machinery, forged over 15 years. Now available to US shops.",
    paragraphs: [
      "VTM Tech Solutions is the US arm of VT Maquinarias, a Chilean industrial machinery company founded in Santiago in 2009. Over 15 years, VT Maquinarias built a reputation across Latin America for precision fabrication equipment, rigorous service standards, and a genuine commitment to the shops that trust them.",
      "When we looked at the US market, we saw the same thing we'd seen in Chile a decade earlier: shops working with aging equipment, dealing with overseas vendors that vanished after delivery, and paying enterprise prices for machinery support that simply wasn't there.",
      "In 2022, we established VTM Tech Solutions to change that. We entered the US market not just to sell machines, but to be the kind of partner that American metal fabricators deserve — one that shows up before you buy, stays through installation, and remains reachable for the life of the equipment.",
    ],
  },
  values: {
    sectionLabel: "Our Values",
    headline: "Four pillars that guide everything we do.",
    items: [
      { title: "Precision", description: "Every machine we sell is calibrated to exacting tolerances before it leaves the factory. We don't ship equipment that can't hold spec — because your reputation depends on parts that are right every time." },
      { title: "Partnership", description: "We don't disappear after delivery. Our team stays involved through installation, training, and the full productive life of your machine. When you call, you reach someone who knows your shop." },
      { title: "Reliability", description: "Downtime costs money. Our machines are built to run, and when they need service, parts ship same day and support is a phone call away. We designed our entire operation around your uptime." },
      { title: "Innovation", description: "From fiber laser technology to collaborative welding automation, we bring the manufacturing world's best advances to US shops — without the complexity or the enterprise price tag." },
    ],
  },
  timeline: {
    sectionLabel: "Our History",
    headline: "From Chile to every corner of the US market.",
    items: [
      { year: "2009", event: "VT Maquinarias founded in Santiago, Chile. First fiber laser installations in South America." },
      { year: "2022", event: "US market expansion begins. VTM Tech Solutions LLC established in the United States." },
      { year: "2024", event: "First US installations completed in Texas and Florida. US support team fully operational." },
      { year: "2026", event: "Full US operations with nationwide coverage. Collaborative welding arms launched to the US market." },
    ],
  },
  certifications: {
    sectionLabel: "Compliance & Quality",
    headline: "Certified quality. Verified performance.",
    items: [
      { name: "ISO 9001:2015", description: "Quality Management System certified for design, manufacture, and supply of industrial machinery." },
      { name: "CE Mark", description: "European Conformity certification ensuring our machinery meets EU safety, health, and environmental requirements." },
      { name: "UL Listed Components", description: "Critical electrical components in our machines carry UL listing for the US and Canadian markets." },
    ],
  },
  cta: {
    headline: "Ready to work with a real partner?",
    body: "Request a free consultation and find out how VTM machines can transform your shop's output.",
    cta1: "Request a Consultation",
    cta2: "Contact Our Team",
  },
};

const es: AboutContent = {
  hero: {
    sectionLabel: "Nuestra Historia",
    headline: "Donde la Precisión Se Encuentra con el Propósito.",
    subheadline: "15 años de experiencia en maquinaria industrial desde Chile, ahora al servicio de talleres de fabricación metálica en EE.UU. que exigen más que una compra — exigen un socio.",
  },
  story: {
    sectionLabel: "Quiénes Somos",
    headline: "Maquinaria de precisión, forjada durante 15 años. Ahora disponible para talleres en EE.UU.",
    paragraphs: [
      "VTM Tech Solutions es la rama estadounidense de VT Maquinarias, una empresa chilena de maquinaria industrial fundada en Santiago en 2009. A lo largo de 15 años, VT Maquinarias construyó una reputación en toda América Latina por sus equipos de fabricación de precisión, estándares de servicio rigurosos y un compromiso genuino con los talleres que confían en ellos.",
      "Cuando analizamos el mercado estadounidense, vimos lo mismo que habíamos visto en Chile una década antes: talleres trabajando con equipos obsoletos, lidiando con proveedores extranjeros que desaparecían tras la entrega y pagando precios empresariales por un soporte de maquinaria que simplemente no existía.",
      "En 2022, establecimos VTM Tech Solutions para cambiar eso. Entramos al mercado estadounidense no solo para vender máquinas, sino para ser el tipo de socio que los fabricantes metálicos americanos merecen — uno que aparece antes de que compre, se queda durante la instalación y permanece disponible durante toda la vida útil del equipo.",
    ],
  },
  values: {
    sectionLabel: "Nuestros Valores",
    headline: "Cuatro pilares que guían todo lo que hacemos.",
    items: [
      { title: "Precisión", description: "Cada máquina que vendemos se calibra con tolerancias exactas antes de salir de fábrica. No enviamos equipos que no puedan mantener las especificaciones — porque su reputación depende de piezas correctas en todo momento." },
      { title: "Asociación", description: "No desaparecemos después de la entrega. Nuestro equipo permanece involucrado durante la instalación, capacitación y toda la vida productiva de su máquina. Cuando llama, llega a alguien que conoce su taller." },
      { title: "Confiabilidad", description: "El tiempo de inactividad cuesta dinero. Nuestras máquinas están diseñadas para funcionar, y cuando necesitan servicio, las piezas se envían el mismo día y el soporte está a una llamada de distancia. Diseñamos toda nuestra operación en torno a su tiempo de actividad." },
      { title: "Innovación", description: "Desde la tecnología láser de fibra hasta la automatización de soldadura colaborativa, llevamos los mejores avances del mundo manufacturero a los talleres de EE.UU. — sin la complejidad ni el precio empresarial." },
    ],
  },
  timeline: {
    sectionLabel: "Nuestra Historia",
    headline: "De Chile a cada rincón del mercado estadounidense.",
    items: [
      { year: "2009", event: "VT Maquinarias fundada en Santiago, Chile. Primeras instalaciones de láser de fibra en Sudamérica." },
      { year: "2022", event: "Comienza la expansión al mercado estadounidense. VTM Tech Solutions LLC establecida en Estados Unidos." },
      { year: "2024", event: "Primeras instalaciones en EE.UU. completadas en Texas y Florida. Equipo de soporte en EE.UU. plenamente operativo." },
      { year: "2026", event: "Operaciones completas en EE.UU. con cobertura nacional. Brazos de soldadura colaborativos lanzados al mercado de EE.UU." },
    ],
  },
  certifications: {
    sectionLabel: "Cumplimiento y Calidad",
    headline: "Calidad certificada. Rendimiento verificado.",
    items: [
      { name: "ISO 9001:2015", description: "Sistema de Gestión de Calidad certificado para el diseño, fabricación y suministro de maquinaria industrial." },
      { name: "Marca CE", description: "Certificación de Conformidad Europea que garantiza que nuestra maquinaria cumple los requisitos de seguridad, salud y medioambiente de la UE." },
      { name: "Componentes Certificados UL", description: "Los componentes eléctricos críticos de nuestras máquinas cuentan con certificación UL para los mercados de EE.UU. y Canadá." },
    ],
  },
  cta: {
    headline: "¿Listo para trabajar con un socio real?",
    body: "Solicite una consulta gratuita y descubra cómo las máquinas VTM pueden transformar la producción de su taller.",
    cta1: "Solicitar una Consulta",
    cta2: "Contactar a Nuestro Equipo",
  },
};

export const content: Record<"en" | "es", AboutContent> = { en, es };
