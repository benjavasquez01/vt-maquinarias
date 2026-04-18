export type ContactContent = {
  hero: { sectionLabel: string; headline: string; subheadline: string };
  info: {
    headline: string;
    email: { label: string; responseTime: string };
    phone: { label: string; hours: string };
    address: { label: string };
    hoursLabel: string;
    hours: { day: string; time: string }[];
    mapPlaceholder: string;
  };
  form: { headline: string };
};

const en: ContactContent = {
  hero: {
    sectionLabel: "Get in Touch",
    headline: "Let's talk about your shop.",
    subheadline: "Whether you have a specific machine in mind or just need guidance on where to start, we're ready to help.",
  },
  info: {
    headline: "Contact Information",
    email: { label: "Email", responseTime: "Response within 1 business day" },
    phone: { label: "Phone", hours: "Mon–Fri, 8 AM – 6 PM ET" },
    address: { label: "US Address" },
    hoursLabel: "Hours",
    hours: [
      { day: "Monday – Friday", time: "8 AM – 6 PM ET" },
      { day: "Saturday", time: "9 AM – 1 PM ET" },
      { day: "Sunday", time: "Closed" },
    ],
    mapPlaceholder: "Interactive map coming soon",
  },
  form: { headline: "Send Us a Message" },
};

const es: ContactContent = {
  hero: {
    sectionLabel: "Contáctenos",
    headline: "Hablemos sobre su taller.",
    subheadline: "Ya sea que tenga una máquina específica en mente o simplemente necesite orientación sobre por dónde empezar, estamos listos para ayudar.",
  },
  info: {
    headline: "Información de Contacto",
    email: { label: "Correo Electrónico", responseTime: "Respuesta en 1 día hábil" },
    phone: { label: "Teléfono", hours: "Lun–Vie, 8 AM – 6 PM ET" },
    address: { label: "Dirección en EE.UU." },
    hoursLabel: "Horario",
    hours: [
      { day: "Lunes – Viernes", time: "8 AM – 6 PM ET" },
      { day: "Sábado", time: "9 AM – 1 PM ET" },
      { day: "Domingo", time: "Cerrado" },
    ],
    mapPlaceholder: "Mapa interactivo próximamente",
  },
  form: { headline: "Envíenos un Mensaje" },
};

export const content: Record<"en" | "es", ContactContent> = { en, es };
