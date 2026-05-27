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
        description: "Mantenemos un inventario en Chile de repuestos críticos para cada máquina que vendemos. Envío el mismo día en la mayoría de los componentes. Cuando su máquina necesita atención que no requiere una visita en sitio, nuestros ingenieros pueden diagnosticar y guiar reparaciones de forma remota mediante conexión segura.",
        details: [
          "Almacén en Chile con envío de piezas el mismo día",
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
    phone: { label: "Teléfono", number: "+56 9 0000 0000", note: "Lun–Vie, 8 AM – 6 PM (hora de Chile)\nLínea de emergencia disponible 24/7 para paradas activas" },
    email: { label: "Correo Electrónico", address: "contacto@vtmaquinarias.cl", note: "Respuesta en 4 horas hábiles.\nRespuesta prioritaria para contratos de mantenimiento activos." },
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
      { title: "Cortadora Láser de Chapa — Manual del Operador", type: "PDF", size: "4.2 MB" },
      { title: "Guía de Seguridad y Mantenimiento de Plegadora CNC", type: "PDF", size: "2.8 MB" },
      { title: "Guía de Inicio Rápido del Brazo de Soldadura Colaborativo", type: "PDF", size: "1.9 MB" },
      { title: "Lista de Verificación de Instalación de Máquina (Todos los Modelos)", type: "PDF", size: "0.8 MB" },
      { title: "Plantilla de Programa de Mantenimiento Preventivo", type: "XLSX", size: "0.4 MB" },
    ],
  },
  cta: {
    headline: "¿Necesita soporte ahora mismo?",
    body: "No espere. Nuestro equipo está listo para diagnosticar, conseguir repuestos o resolver lo que su máquina necesite.",
    cta1: "Contactar Soporte",
    cta2: "Llamar +56 9 0000 0000",
  },
};

export const content: Record<string, SupportContent> = { es };
