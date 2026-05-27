"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          company: "",
          email,
          phone: "",
          metalworkingType: "",
          materials: "",
          timeline: "",
          machinesOfInterest: "",
          language: "es",
          transcript: "Suscripción al boletín del blog",
          source: "newsletter",
        }),
      });
    } catch { /* non-critical */ }
    setSubmitted(true);
    setEmail("");
  };

  if (submitted) {
    return <p className="text-vtm-dark font-semibold">¡Suscrito! Revise su bandeja de entrada.</p>;
  }

  return (
    <form className="flex gap-3 flex-col sm:flex-row" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 border border-vtm-gray-border px-4 py-3 text-sm focus:outline-none focus:border-vtm-dark"
        aria-label="Correo electrónico"
        required
      />
      <Button type="submit" variant="primary">Suscribirse</Button>
    </form>
  );
}
