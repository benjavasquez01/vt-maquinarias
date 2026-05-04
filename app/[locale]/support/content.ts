export type SupportContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string };
  services: {
    sectionLabel: string; headline: string;
    items: { title: string; description: string; details: string[] }[];
  };
  contact: {
    sectionLabel: string; headline: string;
    phone: { label: string; number: string; note: string };
    email: { label: string; address: string; note: string };
    hours: { label: string; rows: { day: string; time: string }[] };
  };
  resources: {
    sectionLabel: string; headline: string; body: string;
    items: { title: string; type: string; size: string }[];
  };
  cta: { headline: string; body: string; cta1: string; cta2: string };
};

const en: SupportContent = {
  hero: {
    sectionLabel: "Customer Support",
    headline: "Support That Lasts the Life of the Machine.",
    subheadline: "From day one of installation to year ten of production, our team is with you.",
  },
  services: {
    sectionLabel: "What We Offer",
    headline: "Three tiers of support. All included.",
    items: [
      {
        title: "Installation & Commissioning",
        description: "Every VTM machine is installed by our own trained technicians — not a third-party contractor who's never seen the equipment. We arrive with the tools, the calibration instruments, and the patience to get your machine running right before we leave.",
        details: [
          "On-site installation by certified VTM technicians",
          "Full calibration and performance verification",
          "Safety inspection and electrical compliance check",
          "Production test runs before sign-off",
        ],
      },
      {
        title: "Training & Certification",
        description: "We don't hand you a manual and drive away. Our technicians provide hands-on operator training at your facility, tailored to your specific workflows and your team's experience level. We leave when your operators are confident — not just present.",
        details: [
          "On-site operator training (1–3 days depending on machine)",
          "Safety protocols and emergency procedures",
          "Maintenance and daily care routines",
          "Training completion certificates for your records",
        ],
      },
      {
        title: "Spare Parts & Remote Diagnostics",
        description: "We maintain a US-based inventory of critical spare parts for every machine we sell. Same-day shipping on most components. When your machine needs attention that doesn't require a site visit, our engineers can diagnose and guide repairs remotely via secure connection.",
        details: [
          "US warehouse with same-day parts shipping",
          "Remote diagnostics via secure machine connection",
          "Preventive maintenance scheduling",
          "Priority support contracts available",
        ],
      },
    ],
  },
  contact: {
    sectionLabel: "Reach Us",
    headline: "We're a phone call away.",
    phone: { label: "Phone", number: "+1 (555) 000-0000", note: "Mon–Fri, 8 AM – 6 PM ET\nEmergency line available 24/7 for active downtime" },
    email: { label: "Email", address: "support@vtmtechsolutions.com", note: "Response within 4 business hours.\nPriority response for active maintenance contracts." },
    hours: {
      label: "Support Hours",
      rows: [
        { day: "Monday – Friday", time: "8 AM – 6 PM ET" },
        { day: "Saturday", time: "9 AM – 1 PM ET" },
        { day: "Sunday", time: "Emergency only" },
      ],
    },
  },
  resources: {
    sectionLabel: "Resources",
    headline: "Manuals, guides, and templates.",
    body: "Download operator manuals, maintenance guides, and useful templates. Enter your email to unlock the download.",
    items: [
      { title: "Fiber Laser Sheet Cutting Machine — Operator Manual", type: "PDF", size: "4.2 MB" },
      { title: "CNC Press Brake Safety & Maintenance Guide", type: "PDF", size: "2.8 MB" },
      { title: "Collaborative Welding Arm Quick-Start Guide", type: "PDF", size: "1.9 MB" },
      { title: "Machine Installation Checklist (All Models)", type: "PDF", size: "0.8 MB" },
      { title: "Preventive Maintenance Schedule Template", type: "XLSX", size: "0.4 MB" },
    ],
  },
  cta: {
    headline: "Need support right now?",
    body: "Don't wait. Our team is ready to help diagnose, source, or solve whatever your machine needs.",
    cta1: "Contact Support",
    cta2: "Call +1 (555) 000-0000",
  },
};

const es: SupportContent = {
  hero: {
    sectionLabel: "Soporte al Cliente",
    headline: "Soporte Durante Toda la Vida de la Máquina.",
    subheadline: "Desde el primer día de instalación hasta el décimo año de producción, nuestro equipo está con usted.",
  },
  services: {
    sectionLabel: "Lo Que Ofrecemos",
    headline: "Tres niveles de soporte. Todos incluidos.",
    items: [
      {
        title: "Instalación y Puesta en Marcha",
        description: "Cada máquina VTM es instalada por nuestros propios técnicos capacitados — no un contratista externo que nunca ha visto el equipo. Llegamos con las herramientas, los instrumentos de calibración y la dedicación para dejar su máquina funcionando correctamente antes de irnos.",
        details: [
          "Instalación en sitio por técnicos VTM certificados",
          "Calibración completa y verificación de rendimiento",
          "Inspección de seguridad y verificación de cumplimiento eléctrico",
          "Pruebas de producción antes de la entrega formal",
        ],
      },
      {
        title: "Capacitación y Certificación",
        description: "No le entregamos un manual y nos vamos. Nuestros técnicos brindan capacitación práctica a los operadores en sus instalaciones, adaptada a sus flujos de trabajo específicos y al nivel de experiencia de su equipo. Nos vamos cuando sus operadores están seguros — no solo presentes.",
        details: [
          "Capacitación de operadores en sitio (1–3 días según la máquina)",
          "Protocolos de seguridad y procedimientos de emergencia",
          "Rutinas de mantenimiento y cuidado diario",
          "Certificados de capacitación para sus registros",
        ],
      },
      {
        title: "Repuestos y Diagnóstico Remoto",
        description: "Mantenemos un inventario en EE.UU. de repuestos críticos para cada máquina que vendemos. Envío el mismo día en la mayoría de los componentes. Cuando su máquina necesita atención que no requiere una visita en sitio, nuestros ingenieros pueden diagnosticar y guiar reparaciones de forma remota mediante conexión segura.",
        details: [
          "Almacén en EE.UU. con envío de piezas el mismo día",
          "Diagnóstico remoto mediante conexión segura a la máquina",
          "Programación de mantenimiento preventivo",
          "Contratos de soporte prioritario disponibles",
        ],
      },
    ],
  },
  contact: {
    sectionLabel: "Contáctenos",
    headline: "Estamos a una llamada de distancia.",
    phone: { label: "Teléfono", number: "+1 (555) 000-0000", note: "Lun–Vie, 8 AM – 6 PM ET\nLínea de emergencia disponible 24/7 para paradas activas" },
    email: { label: "Correo Electrónico", address: "support@vtmtechsolutions.com", note: "Respuesta en 4 horas hábiles.\nRespuesta prioritaria para contratos de mantenimiento activos." },
    hours: {
      label: "Horario de Soporte",
      rows: [
        { day: "Lunes – Viernes", time: "8 AM – 6 PM ET" },
        { day: "Sábado", time: "9 AM – 1 PM ET" },
        { day: "Domingo", time: "Solo emergencias" },
      ],
    },
  },
  resources: {
    sectionLabel: "Recursos",
    headline: "Manuales, guías y plantillas.",
    body: "Descargue manuales de operador, guías de mantenimiento y plantillas útiles. Ingrese su correo electrónico para desbloquear la descarga.",
    items: [
      { title: "Máquina de Corte Láser de Fibra para Chapa — Manual del Operador", type: "PDF", size: "4.2 MB" },
      { title: "Guía de Seguridad y Mantenimiento de Prensa Plegadora CNC", type: "PDF", size: "2.8 MB" },
      { title: "Guía de Inicio Rápido del Brazo de Soldadura Colaborativo", type: "PDF", size: "1.9 MB" },
      { title: "Lista de Verificación de Instalación de Máquina (Todos los Modelos)", type: "PDF", size: "0.8 MB" },
      { title: "Plantilla de Programa de Mantenimiento Preventivo", type: "XLSX", size: "0.4 MB" },
    ],
  },
  cta: {
    headline: "¿Necesita soporte ahora mismo?",
    body: "No espere. Nuestro equipo está listo para diagnosticar, conseguir repuestos o resolver lo que su máquina necesite.",
    cta1: "Contactar Soporte",
    cta2: "Llamar +1 (555) 000-0000",
  },
};

export const content: Record<"en" | "es", SupportContent> = { en, es };
