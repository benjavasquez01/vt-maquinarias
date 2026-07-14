"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "@/lib/navigation";
import { useAgent } from "@/components/ai/AgentProvider";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=56999171017&text=Hola!%20Quiero%20mas%20informacion%20sobre%20sus%20maquinas%E2%9A%99%EF%B8%8F";

type AnalyticsWindow = Window & {
  gtag?: (eventType: string, eventName: string, params?: Record<string, string>) => void;
};

export function FloatingWidgets() {
  const { openAgent } = useAgent();
  const pathname = usePathname();
  // Hide the floating button inside the quote funnel: on mobile it sits right
  // over the form's "Siguiente"/"Enviar" buttons and blocks the primary CTA.
  const hideWhatsApp = pathname.startsWith("/quote");
  const hasMobileProductStickyBar = /^\/(?:(?:en|es)\/)?(?:fabrication|automation)\/[^/]+/.test(pathname);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [exitDismissed, setExitDismissed] = useState(false);
  const [exitEmail, setExitEmail] = useState("");
  const [exitSubmitted, setExitSubmitted] = useState(false);
  const hasTriggered = useRef(false);

  // Exit-intent detection (mouse leaves top of viewport)
  useEffect(() => {
    if (exitDismissed) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasTriggered.current) {
        hasTriggered.current = true;
        // Only trigger after 15s on page
        setTimeout(() => {
          if (!exitDismissed) setShowExitIntent(true);
        }, 0);
      }
    };
    // Wait 15 seconds before arming exit-intent
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 15000);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [exitDismissed]);

  const handleExitSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!exitEmail) return;
    // HubSpot contact creation via lead API (lightweight)
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Exit Intent Subscriber",
          company: "",
          email: exitEmail,
          phone: "",
          metalworkingType: "",
          materials: "",
          timeline: "",
          machinesOfInterest: "",
          language: "es",
          transcript: "Captura de correo por intención de salida",
          source: "exit-intent",
        }),
      });
    } catch { /* non-critical */ }
    setExitSubmitted(true);
    setTimeout(() => {
      setShowExitIntent(false);
      setExitDismissed(true);
    }, 3000);
  };

  // GA4 event helper
  const trackEvent = (eventName: string, params?: Record<string, string>) => {
    (window as AnalyticsWindow).gtag?.("event", eventName, params);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      {!hideWhatsApp && (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click")}
        className={`fixed bottom-3 right-4 z-40 h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform hover:scale-105 md:bottom-24 md:right-6 md:flex md:h-14 md:w-14 ${
          hasMobileProductStickyBar ? "hidden" : "flex"
        }`}
        aria-label="Chatear por WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="md:h-7 md:w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
      )}

      {/* Exit-Intent Popup */}
      {showExitIntent && !exitDismissed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Mantengámonos en contacto">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => { setShowExitIntent(false); setExitDismissed(true); }}
            aria-hidden="true"
          />
          <div className="relative bg-white max-w-md w-full shadow-2xl p-8 md:p-10">
            <button
              onClick={() => { setShowExitIntent(false); setExitDismissed(true); }}
              className="absolute top-4 right-4 text-vtm-gray-mid hover:text-vtm-dark"
              aria-label="Cerrar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>

            {exitSubmitted ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 bg-vtm-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <p className="font-headline font-bold text-vtm-dark text-xl mb-2">Ya estás en la lista.</p>
                <p className="text-vtm-gray-mid text-sm">Te enviaremos contenido útil — sin spam.</p>
              </div>
            ) : (
              <>
                <div className="w-10 h-1 bg-vtm-red mb-6" aria-hidden="true" />
                <h2 className="font-headline text-2xl font-bold text-vtm-dark mb-3">
                  Antes de irte — habla con nuestro especialista IA
                </h2>
                <p className="text-vtm-gray-mid text-sm mb-6 leading-relaxed">
                  Nuestra IA puede responder preguntas sobre los productos, estimar precios y ayudarte a definir qué máquina se adapta a tu taller — en menos de 5 minutos.
                </p>
                <button
                  onClick={() => {
                    setShowExitIntent(false);
                    setExitDismissed(true);
                    openAgent("quote");
                    trackEvent("agent_opened", { trigger: "exit_intent" });
                  }}
                  className="w-full bg-vtm-red text-white font-semibold py-3 mb-4 hover:bg-vtm-red/90 transition-colors"
                >
                  Hablar con Nuestro Especialista IA
                </button>
                <div className="relative flex items-center gap-4 mb-4">
                  <div className="flex-1 h-px bg-vtm-gray-border" />
                  <span className="text-vtm-gray-mid text-xs">o</span>
                  <div className="flex-1 h-px bg-vtm-gray-border" />
                </div>
                <form onSubmit={handleExitSubmit}>
                  <p className="text-vtm-gray-mid text-xs mb-3">Recibe nuestra guía de selección de máquinas por correo:</p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={exitEmail}
                      onChange={(e) => setExitEmail(e.target.value)}
                      placeholder="tu@correo.com"
                      className="flex-1 border border-vtm-gray-border px-3 py-2 text-sm focus:outline-none focus:border-vtm-dark"
                      aria-label="Correo electrónico"
                    />
                    <button
                      type="submit"
                      className="bg-vtm-dark text-white px-4 py-2 text-sm font-semibold hover:bg-vtm-dark/80 transition-colors"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
