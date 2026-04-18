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
          email: fd.get("email") ?? "",
          phone: fd.get("phone") ?? "",
          metalworkingType: "",
          materials: "",
          timeline: "",
          machinesOfInterest: machineName,
          language: "en",
          transcript: `Product page quote form for ${machineName}. Message: ${fd.get("message") ?? ""}`,
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
      <p className="text-white text-xl font-headline font-bold mb-2">Request Received</p>
      <p className="text-white/60">We&apos;ll be in touch within one business day.</p>
    </div>
  );

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase">Name</label>
          <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors" placeholder="John Smith" />
        </div>
        <div>
          <label className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase">Email</label>
          <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors" placeholder="john@yourshop.com" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase">Phone</label>
          <input type="tel" name="phone" className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors" placeholder="+1 (555) 000-0000" />
        </div>
        <div>
          <label className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase">Company</label>
          <input type="text" name="company" className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors" placeholder="Your Company LLC" />
        </div>
      </div>
      <div>
        <label className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase">Tell us about your work</label>
        <textarea name="message" rows={4} className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors resize-none" defaultValue={`Machine of interest: ${machineName}`} />
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full justify-center" disabled={loading}>
        {loading ? "Sending..." : "Send Quote Request"}
      </Button>
      <p className="text-white/25 text-xs text-center">By submitting you agree to our Privacy Policy. We never sell your data.</p>
    </form>
  );
}
