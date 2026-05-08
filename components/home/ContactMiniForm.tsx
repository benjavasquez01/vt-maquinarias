"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "next-intl";

const copy = {
  en: {
    machines: [
      "Fiber Laser Sheet Cutting Machine",
      "Laser Welding Machine",
      "Laser Cleaning Machine",
      "CNC Press Brake",
      "Shearing Machine",
      "Ironworker",
      "Collaborative Welding Arm",
      "Industrial Welding Arm",
      "Not sure yet",
    ],
    name: "Name *",
    email: "Email *",
    phone: "Phone",
    machine: "Machine of Interest",
    message: "Message",
    namePlaceholder: "Your full name",
    messagePlaceholder: "Tell us about your shop and what you're looking to achieve...",
    selectPlaceholder: "Select a machine...",
    sending: "Sending...",
    submit: "Request Free Consultation",
    successTitle: "Message received.",
    successBody: "A VTM specialist will reach out within 1 business day.",
    footer: "No spam. No obligation. Response within 1 business day.",
  },
  es: {
    machines: [
      "Cortadora Láser de Chapa",
      "Máquina de Soldadura Láser",
      "Máquina de Limpieza Láser",
      "Plegadora CNC",
      "Guillotina",
      "Punzonadora Hidráulica",
      "Brazo de Soldadura Colaborativo",
      "Brazo de Soldadura Industrial",
      "Aún no lo sé",
    ],
    name: "Nombre *",
    email: "Correo *",
    phone: "Teléfono",
    machine: "Máquina de Interés",
    message: "Mensaje",
    namePlaceholder: "Nombre completo",
    messagePlaceholder: "Cuéntenos sobre su taller y lo que busca lograr...",
    selectPlaceholder: "Seleccione una máquina...",
    sending: "Enviando...",
    submit: "Solicitar Consulta Gratuita",
    successTitle: "Mensaje recibido.",
    successBody: "Un especialista de VTM se comunicará en 1 día hábil.",
    footer: "Sin spam. Sin compromiso. Respuesta en 1 día hábil.",
  },
};

export function ContactMiniForm() {
  const locale = useLocale();
  const t = locale === "es" ? copy.es : copy.en;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name") ?? "",
          company: "",
          email: fd.get("email") ?? "",
          phone: fd.get("phone") ?? "",
          metalworkingType: "",
          materials: "",
          timeline: "",
          machinesOfInterest: fd.get("machine") ?? "",
          language: locale,
          transcript: `Homepage mini-form. Message: ${fd.get("message") ?? ""}`,
          source: "homepage-form",
        }),
      });
      if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
        (window as unknown as { gtag: Function }).gtag("event", "generate_lead", { method: "homepage_form" });
      }
    } catch { /* non-critical */ }
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white/5 border border-white/10 p-10 text-center">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-4" aria-hidden="true">
          <circle cx="24" cy="24" r="23" stroke="#CB1C1D" strokeWidth="2"/>
          <path d="M14 24l7 7 13-14" stroke="#CB1C1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h3 className="font-headline font-bold text-white text-xl mb-2">{t.successTitle}</h3>
        <p className="text-white/60 font-body">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="mini-name" className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">
            {t.name}
          </label>
          <input
            id="mini-name"
            name="name"
            type="text"
            required
            placeholder={t.namePlaceholder}
            className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors"
          />
        </div>
        <div>
          <label htmlFor="mini-email" className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">
            {t.email}
          </label>
          <input
            id="mini-email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="mini-phone" className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">
          {t.phone}
        </label>
        <input
          id="mini-phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors"
        />
      </div>
      <div>
        <label htmlFor="mini-machine" className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">
          {t.machine}
        </label>
        <select
          id="mini-machine"
          name="machine"
          className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors appearance-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23ffffff80' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
        >
          <option value="" className="bg-vtm-dark">{t.selectPlaceholder}</option>
          {t.machines.map((m) => (
            <option key={m} value={m} className="bg-vtm-dark">{m}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="mini-message" className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">
          {t.message}
        </label>
        <textarea
          id="mini-message"
          name="message"
          rows={3}
          placeholder={t.messagePlaceholder}
          className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors resize-none"
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full justify-center"
        disabled={loading}
      >
        {loading ? t.sending : t.submit}
      </Button>
      <p className="text-white/30 text-xs text-center">
        {t.footer}
      </p>
    </form>
  );
}
