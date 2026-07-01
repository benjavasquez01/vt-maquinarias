"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function GenericQuoteForm({ machineName }: { machineName: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name") ?? "",
          company: fd.get("company") ?? "",
          rut: fd.get("rut") ?? "",
          email: fd.get("email") ?? "",
          phone: fd.get("phone") ?? "",
          metalworkingType: "",
          materials: "",
          timeline: "",
          machinesOfInterest: machineName,
          language: "es",
          transcript: `Formulario de cotización de página de producto para ${machineName}. Mensaje: ${fd.get("message") ?? ""}`,
          source: "product-page-form",
        }),
      });
      if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
        (window as unknown as { gtag: Function }).gtag("event", "generate_lead", {
          method: "product_form",
          machines: machineName,
        });
      }
    } catch { /* non-critical */ }
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) return (
    <div className="border border-white/10 p-8 text-center">
      <p className="text-white text-xl font-headline font-bold mb-2">Solicitud Recibida</p>
      <p className="text-white/60">Nos pondremos en contacto dentro de 1 día hábil.</p>
    </div>
  );

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase">Nombre</label>
          <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors" placeholder="Juan Pérez" />
        </div>
        <div>
          <label className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase">Correo Electrónico</label>
          <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors" placeholder="juan@sutaller.cl" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase">Teléfono</label>
          <input type="tel" name="phone" className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors" placeholder="+56 9 0000 0000" />
        </div>
        <div>
          <label className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase">Empresa</label>
          <input type="text" name="company" className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors" placeholder="Su Empresa SpA" />
        </div>
      </div>
      <div>
        <label className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase">RUT de la Empresa</label>
        <input type="text" name="rut" className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors" placeholder="76.123.456-7" />
      </div>
      <div>
        <label className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase">Cuéntenos sobre su trabajo</label>
        <textarea name="message" rows={4} className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors resize-none" defaultValue={`Máquina de interés: ${machineName}`} />
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full justify-center" disabled={loading}>
        {loading ? "Enviando..." : "Enviar Solicitud de Cotización"}
      </Button>
      <p className="text-white/25 text-xs text-center">Al enviar acepta nuestra Política de Privacidad. Nunca vendemos sus datos.</p>
    </form>
  );
}
