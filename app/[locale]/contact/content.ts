export type ContactContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string };
  info: {
    headline: string;
    email: { label: string; responseTime: string };
    phone: { label: string; hours: string };
    address: { label: string };
    hoursLabel: string;
    hours: { day: string; time: string }[];
    afterHoursNote: string;
    mapPlaceholder: string;
  };
  form: { headline: string };
};

const es: ContactContent = {
  hero: {
    sectionLabel: "Contáctenos",
    headline: "Encuentre la máquina ideal para su producción",
    subheadline: "Cuéntenos sobre su proyecto, proceso productivo o necesidad técnica. Nuestro equipo lo asesorará para encontrar la solución más adecuada en corte láser, plegado CNC y soldadura láser.",
  },
  info: {
    headline: "Información de Contacto",
    email: { label: "Correo Electrónico", responseTime: "Respuesta en menos de 24 horas" },
    phone: { label: "Teléfono", hours: "Lun–Vie, 9 AM – 7 PM" },
    address: { label: "Dirección en Chile" },
    hoursLabel: "Horario",
    hours: [
      { day: "Lunes – Viernes", time: "9 AM – 7 PM" },
      { day: "Sábado", time: "Cerrado" },
      { day: "Domingo", time: "Cerrado" },
    ],
    afterHoursNote: "Si tiene alguna consulta fuera de estos horarios, puede chatear con nuestro asistente.",
    mapPlaceholder: "Mapa interactivo próximamente",
  },
  form: { headline: "Envíenos un Mensaje" },
};

export const content: Record<string, ContactContent> = { es };
