"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

type Unit = "metric" | "imperial";

type SpecRow = { label: string; metric: string; imperial: string };

const SPECS: SpecRow[] = [
  { label: "Potencia Láser",        metric: "1000 W / 1500 W / 2000 W / 3000 W", imperial: "1000 W / 1500 W / 2000 W / 3000 W" },
  { label: "Rango de Ajuste de Potencia",    metric: "10% – 100%",                         imperial: "10% – 100%" },
  { label: "Longitud de Onda de Salida", metric: "1070 ± 20 nm",                       imperial: "1070 ± 20 nm" },
  { label: "Método de Enfriamiento",            metric: "Enfriamiento por agua",                      imperial: "Enfriamiento por agua" },
  { label: "Ancho de Soldadura",             metric: "0 – 5 mm",                           imperial: "0 – 0.20\"" },
  { label: "Ancho de Limpieza",            metric: "Máx. 80 mm",                         imperial: "Máx. 3.15\"" },
  { label: "Diámetro de Aporte",             metric: "0.8 / 1.0 / 1.2 / 1.6 mm",          imperial: "0.031\" / 0.039\" / 0.047\" / 0.063\"" },
  { label: "Velocidad Máx. de Aporte",   metric: "100 mm/s",                           imperial: "236 pulg/min" },
];

const UPGRADES = ["Extractor de Humo"];

const LABELS = {
  en: {
    productLine: "Product Line",
    series: "4W Series",
    badge: "Available",
    power: "1–3 kW",
    image: "/images/4in1-laser-hero-2.webp",
    description: "One fiber laser source — four operating modes: laser welding, laser cutting, laser cleaning, and wire-feed welding. Available in 1000 W, 1500 W, 2000 W, and 3000 W.",
    quote: "Request a Quote",
    upgrades: "Available Upgrades",
  },
  es: {
    productLine: "Línea de Productos",
    series: "Serie 4W",
    badge: "Disponible",
    power: "1–3 kW",
    image: "/images/4in1-laser-hero-2.webp",
    description: "Una fuente láser de fibra — cuatro modos de operación: soldadura láser, corte láser, limpieza láser y limpieza de cordón. Disponible en 1000 W, 1500 W, 2000 W y 3000 W.",
    quote: "Solicitar Cotización",
    upgrades: "Mejoras Disponibles",
  },
};

export function WeldingModelBrowser({ locale }: { locale: "en" | "es" }) {
  const [unit, setUnit] = useState<Unit>("metric");
  const l = LABELS[locale];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-vtm-red mb-4">{l.productLine}</p>

        <div className="grid md:grid-cols-2 gap-8 items-start border-t border-vtm-gray-border pt-8 mt-4">
          {/* Left: image card */}
          <div className="border-2 border-vtm-red overflow-hidden">
            <div className="relative aspect-[4/3] bg-vtm-gray-light">
              <Image src={l.image} alt={l.series} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <span className="absolute top-2 left-2 text-[10px] font-bold tracking-wider uppercase bg-vtm-red text-white px-2 py-0.5">{l.badge}</span>
            </div>
            <div className="p-3 bg-vtm-dark">
              <p className="font-headline font-bold text-sm text-white mb-0.5">{l.series}</p>
              <p className="text-xs text-white/60">{l.power}</p>
            </div>
          </div>

          {/* Right: text + specs + upgrades */}
          <div>
            <p className="font-headline text-2xl font-bold text-vtm-dark mb-2">{l.series}</p>
            <p className="text-vtm-gray-mid text-sm leading-relaxed mb-6">{l.description}</p>

            <Button href="/quote?machine=laser-welding" variant="primary" size="sm" className="mb-8">{l.quote}</Button>

            {/* Unit toggle */}
            <div className="flex gap-1 mb-6 border border-vtm-gray-border p-1 w-fit">
              {(["metric", "imperial"] as Unit[]).map((u) => (
                <button key={u} onClick={() => setUnit(u)} className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors ${unit === u ? "bg-vtm-dark text-white" : "text-vtm-gray-mid hover:text-vtm-dark"}`}>
                  {u === "metric" ? "Métrico" : "Imperial"}
                </button>
              ))}
            </div>

            {/* Specs table */}
            <div className="border border-vtm-gray-border overflow-hidden mb-6">
              <table className="w-full text-sm">
                <tbody>
                  {SPECS.map((spec, i) => (
                    <tr key={spec.label} className={`border-b border-vtm-gray-border last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-vtm-gray-light/40"}`}>
                      <td className="px-4 py-3 text-vtm-gray-mid font-medium w-1/2">{spec.label}</td>
                      <td className="px-4 py-3 text-vtm-dark font-medium">{unit === "metric" ? spec.metric : spec.imperial}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Upgrades */}
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-vtm-gray-mid mb-2">{l.upgrades}</p>
            <div className="flex flex-wrap gap-2">
              {UPGRADES.map((u) => (
                <span key={u} className="text-xs border border-vtm-gray-border px-3 py-1.5 text-vtm-dark">{u}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
