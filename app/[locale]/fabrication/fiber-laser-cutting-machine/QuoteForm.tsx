"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface Props {
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  companyLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
  successTitle: string;
  successBody: string;
  privacyNote: string;
  language: string;
}

export function QuoteForm({
  nameLabel, emailLabel, phoneLabel, companyLabel,
  messageLabel, messagePlaceholder,
  submitLabel, submittingLabel,
  successTitle, successBody,
  privacyNote, language,
}: Props) {
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
          machinesOfInterest: "Fiber Laser Sheet Cutting Machine",
          language,
          transcript: `Fiber Laser product page quote form. Message: ${fd.get("message") ?? ""}`,
        }),
      });
      if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
        (window as unknown as { gtag: Function }).gtag("event", "generate_lead", {
          method: "product_form",
          machines: "Fiber Laser Sheet Cutting Machine",
        });
      }
    } catch { /* non-critical */ }
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) return (
    <div className="border border-white/10 p-8 text-center">
      <p className="text-white text-xl font-headline font-bold mb-2">{successTitle}</p>
      <p className="text-white/60">{successBody}</p>
    </div>
  );

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit}
      aria-label={submitLabel}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="quote-name"
            className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase"
          >
            {nameLabel}
          </label>
          <input
            id="quote-name"
            type="text"
            name="name"
            required
            className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label
            htmlFor="quote-email"
            className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase"
          >
            {emailLabel}
          </label>
          <input
            id="quote-email"
            type="email"
            name="email"
            required
            className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors"
            placeholder="john@yourshop.com"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="quote-phone"
            className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase"
          >
            {phoneLabel}
          </label>
          <input
            id="quote-phone"
            type="tel"
            name="phone"
            className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div>
          <label
            htmlFor="quote-company"
            className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase"
          >
            {companyLabel}
          </label>
          <input
            id="quote-company"
            type="text"
            name="company"
            className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors"
            placeholder="Smith Fabrication LLC"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="quote-message"
          className="block text-xs text-white/50 mb-1 font-medium tracking-wider uppercase"
        >
          {messageLabel}
        </label>
        <textarea
          id="quote-message"
          name="message"
          rows={4}
          className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors resize-none"
          placeholder={messagePlaceholder}
          defaultValue="Machine of interest: Fiber Laser Sheet Cutting Machine"
        />
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full justify-center" disabled={loading}>
        {loading ? submittingLabel : submitLabel}
      </Button>
      <p className="text-white/25 text-xs text-center">
        {privacyNote}
      </p>
    </form>
  );
}
