"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ImageGallery } from "@/components/ui/ImageGallery";

const GALLERY = ["/images/laser-cleaning-c-1.png", "/images/laser-cleaning-c-2.png"];

type SpecRow = { label: string; continuous: string; pulsed: string };

const SPECS: SpecRow[] = [
  { label: "Laser Power Supply", continuous: "1000 W / 1500 W / 2000 W / 3000 W", pulsed: "100 W / 120 W / 200 W / 300 W / 500 W" },
  { label: "Advantage",          continuous: "High power, fast cleaning speed",    pulsed: "Works on various kinds of materials" },
];

const LABELS = {
  en: {
    productLine: "Product Line",
    headline: "C Series",
    subheadline: "Two laser technologies — continuous for high-speed industrial cleaning, pulsed for precision surface treatment across a wide range of materials.",
    badge: "Available",
    continuous: "Continuous Laser Model",
    pulsed: "Pulsed Laser Model",
    specCol: "Specification",
    quote: "Request a Quote",
  },
  es: {
    productLine: "Línea de Productos",
    headline: "Serie C",
    subheadline: "Dos tecnologías láser — continua para limpieza industrial de alta velocidad, pulsada para tratamiento de superficie de precisión en una amplia gama de materiales.",
    badge: "Disponible",
    continuous: "Modelo Láser Continuo",
    pulsed: "Modelo Láser Pulsado",
    specCol: "Especificación",
    quote: "Solicitar Cotización",
  },
};

export function CleaningModelBrowser({ locale }: { locale: "en" | "es" }) {
  const l = LABELS[locale];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-vtm-red mb-4">{l.productLine}</p>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-3">{l.headline}</h2>

        <div className="grid md:grid-cols-2 gap-8 items-start border-t border-vtm-gray-border pt-8 mt-4">
          {/* Left: gallery */}
          <ImageGallery images={GALLERY} alt="VTM C Series Laser Cleaning Machine" />

          {/* Right: description + specs */}
          <div>
            <p className="font-headline text-2xl font-bold text-vtm-dark mb-2">{l.headline}</p>
            <p className="text-vtm-gray-mid text-sm leading-relaxed mb-6">{l.subheadline}</p>

            <Button href="/quote?machine=laser-cleaning" variant="primary" size="sm" className="mb-8">{l.quote}</Button>

            <div className="border border-vtm-gray-border overflow-hidden mt-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-vtm-gray-light border-b border-vtm-gray-border">
                    <th className="text-left px-4 py-3 font-semibold text-vtm-dark text-xs tracking-wider uppercase">{l.specCol}</th>
                    <th className="text-left px-4 py-3 font-semibold text-vtm-dark text-xs tracking-wider uppercase">{l.continuous}</th>
                    <th className="text-left px-4 py-3 font-semibold text-vtm-dark text-xs tracking-wider uppercase">{l.pulsed}</th>
                  </tr>
                </thead>
                <tbody>
                  {SPECS.map((row, i) => (
                    <tr key={row.label} className={`border-b border-vtm-gray-border last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-vtm-gray-light/40"}`}>
                      <td className="px-4 py-3 text-vtm-gray-mid font-medium">{row.label}</td>
                      <td className="px-4 py-3 text-vtm-dark font-medium">{row.continuous}</td>
                      <td className="px-4 py-3 text-vtm-dark font-medium">{row.pulsed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
