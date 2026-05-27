"use client";

import { useState } from "react";

interface Resource {
  title: string;
  type: string;
  size: string;
}

export function DownloadGate({ resource }: { resource: Resource }) {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Spec Sheet Download",
          company: "",
          email,
          phone: "",
          metalworkingType: "",
          materials: "",
          timeline: "",
          machinesOfInterest: resource.title,
          language: "es",
          transcript: `Descarga de ficha técnica: ${resource.title}`,
          source: "spec-sheet-download",
        }),
      });
      // GA4 event
      if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
        (window as unknown as { gtag: Function }).gtag("event", "spec_sheet_download", {
          resource_title: resource.title,
        });
      }
    } catch { /* non-critical */ }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="border border-vtm-gray-border bg-white">
      <div className="flex items-center justify-between gap-4 p-5">
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-10 h-10 bg-vtm-gray-light flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3 2h8l4 4v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="#6B6B6B" strokeWidth="1.2"/>
              <path d="M11 2v4h4" stroke="#6B6B6B" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="min-w-0">
            <p className="font-headline font-semibold text-vtm-dark text-sm truncate">{resource.title}</p>
            <p className="text-vtm-gray-mid text-xs mt-0.5">{resource.type} · {resource.size}</p>
          </div>
        </div>
        {submitted ? (
          <span className="text-vtm-red text-sm font-semibold flex-shrink-0">Descarga iniciada ✓</span>
        ) : (
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex-shrink-0 text-sm font-semibold text-vtm-dark hover:text-vtm-red transition-colors border border-vtm-gray-border hover:border-vtm-red px-4 py-2"
          >
            {showForm ? "Cancelar" : "Descargar"}
          </button>
        )}
      </div>

      {showForm && !submitted && (
        <div className="border-t border-vtm-gray-border bg-vtm-gray-light px-5 py-4">
          <form onSubmit={handleDownload} className="flex gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo corporativo para descargar"
              className="flex-1 border border-vtm-gray-border bg-white px-4 py-2 text-sm text-vtm-dark placeholder-vtm-gray-mid focus:outline-none focus:border-vtm-dark"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-vtm-red text-white px-5 py-2 text-sm font-semibold hover:bg-[#a81718] transition-colors disabled:opacity-70"
            >
              {loading ? "..." : "Obtener Archivo"}
            </button>
          </form>
          <p className="text-vtm-gray-mid text-xs mt-2">
            Le enviaremos el enlace de descarga. Sin spam — puede darse de baja en cualquier momento.
          </p>
        </div>
      )}
    </div>
  );
}
