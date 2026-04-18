"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
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
          machinesOfInterest: "",
          language: "en",
          transcript: `Contact page form. Message: ${fd.get("message") ?? ""}`,
        }),
      });
      if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
        (window as unknown as { gtag: Function }).gtag("event", "generate_lead", { method: "contact_form" });
      }
    } catch { /* non-critical */ }
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-vtm-gray-border p-10 text-center">
        <div className="w-14 h-14 bg-vtm-red/10 flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12l5 5L19 7" stroke="#CB1C1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="font-headline font-bold text-vtm-dark text-xl mb-2">Message sent!</h3>
        <p className="text-vtm-gray-mid font-body text-sm">
          A member of our team will get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-vtm-gray-mid text-xs font-semibold tracking-wide uppercase mb-1.5">
            Full Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full border border-vtm-gray-border px-4 py-3 text-sm text-vtm-dark placeholder-vtm-gray-mid focus:outline-none focus:border-vtm-dark transition-colors"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-vtm-gray-mid text-xs font-semibold tracking-wide uppercase mb-1.5">
            Email *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full border border-vtm-gray-border px-4 py-3 text-sm text-vtm-dark placeholder-vtm-gray-mid focus:outline-none focus:border-vtm-dark transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-vtm-gray-mid text-xs font-semibold tracking-wide uppercase mb-1.5">
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          className="w-full border border-vtm-gray-border px-4 py-3 text-sm text-vtm-dark placeholder-vtm-gray-mid focus:outline-none focus:border-vtm-dark transition-colors"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-vtm-gray-mid text-xs font-semibold tracking-wide uppercase mb-1.5">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you're looking for, what machines you're interested in, or any questions you have..."
          className="w-full border border-vtm-gray-border px-4 py-3 text-sm text-vtm-dark placeholder-vtm-gray-mid focus:outline-none focus:border-vtm-dark transition-colors resize-none"
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full justify-center"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
      <p className="text-vtm-gray-mid text-xs text-center font-body">
        By submitting this form you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-vtm-dark">Privacy Policy</a>.
      </p>
    </form>
  );
}
