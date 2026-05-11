"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ImageGallery } from "@/components/ui/ImageGallery";

type Unit = "metric" | "imperial";

type SpecRow =
  | { type: "group"; label: string }
  | { type: "spec"; label: string; metric: string[]; imperial: string[] };

type ModelSpecs = {
  headers: string[];
  rows: SpecRow[];
  upgrades: string[];
};

// ─── Image frames ────────────────────────────────────────────────────────────

const SERIES_FRAMES: string[] = [
  "/images/sheet-tube-st-1.webp",
  "/images/sheet-tube-st-2.webp",
  "/images/sheet-tube-st-3.webp",
  "/images/sheet-tube-st-4.webp",
  "/images/sheet-tube-st-5.webp",
];

// ─── Specs ───────────────────────────────────────────────────────────────────

const SHARED_UPGRADES = ["Air Conditioner", "Smoke Purifier", "Air Compressor", "Voltage Regulator", "Safety Light Curtain"];

const SPECS: ModelSpecs = {
  headers: ["VTM-3015ST", "VTM-6015ST", "VTM-4020ST", "VTM-6025ST"],
  rows: [
    { type: "spec", label: "Working Area", metric: ["3000 × 1500 mm", "6000 × 1500 mm", "4000 × 2000 mm", "6000 × 2500 mm"], imperial: ["10′ × 5′", "20′ × 5′", "13′ × 6.6′", "20′ × 8.2′"] },
    { type: "spec", label: "X Y Z Axis Stroke", metric: ["1520 × 3100 × 100 mm", "1520 × 6050 × 100 mm", "2040 × 4050 × 100 mm", "2510 × 6100 × 260 mm"], imperial: ["59.8\" × 122\" × 3.9\"", "59.8\" × 238\" × 3.9\"", "80.3\" × 159\" × 3.9\"", "98.8\" × 240\" × 10.2\""] },
    { type: "spec", label: "Laser Power", metric: ["2000 W, 3000 W, 6000 W", "2000 W, 3000 W, 6000 W", "2000 W, 3000 W, 6000 W", "2000 W, 3000 W, 6000 W"], imperial: ["2000 W, 3000 W, 6000 W", "2000 W, 3000 W, 6000 W", "2000 W, 3000 W, 6000 W", "2000 W, 3000 W, 6000 W"] },
    { type: "spec", label: "Tube Cutting Diameter", metric: ["Φ20–230 mm  □20–230 mm", "Φ20–230 mm  □20–230 mm", "Φ20–230 mm  □20–230 mm", "Φ20–230 mm  □20–230 mm"], imperial: ["Φ0.8\"–9.1\"  □0.8\"–9.1\"", "Φ0.8\"–9.1\"  □0.8\"–9.1\"", "Φ0.8\"–9.1\"  □0.8\"–9.1\"", "Φ0.8\"–9.1\"  □0.8\"–9.1\""] },
    { type: "spec", label: "Positioning Accuracy", metric: ["±0.03 mm", "±0.03 mm", "±0.03 mm", "±0.03 mm"], imperial: ["±0.001\"", "±0.001\"", "±0.001\"", "±0.001\""] },
    { type: "spec", label: "Voltage", metric: ["380V 50Hz", "380V 50Hz", "380V 50Hz", "380V 50Hz"], imperial: ["380V 50Hz", "380V 50Hz", "380V 50Hz", "380V 50Hz"] },
    { type: "group", label: "Cutting Ability" },
    { type: "spec", label: "Carbon Steel", metric: ["1–80 mm", "1–80 mm", "1–80 mm", "1–80 mm"], imperial: ["0.04\"–3.1\"", "0.04\"–3.1\"", "0.04\"–3.1\"", "0.04\"–3.1\""] },
    { type: "spec", label: "Stainless Steel", metric: ["1–70 mm", "1–70 mm", "1–70 mm", "1–70 mm"], imperial: ["0.04\"–2.8\"", "0.04\"–2.8\"", "0.04\"–2.8\"", "0.04\"–2.8\""] },
    { type: "spec", label: "Aluminum", metric: ["1–60 mm", "1–60 mm", "1–60 mm", "1–60 mm"], imperial: ["0.04\"–2.4\"", "0.04\"–2.4\"", "0.04\"–2.4\"", "0.04\"–2.4\""] },
    { type: "spec", label: "Brass", metric: ["1–20 mm", "1–20 mm", "1–20 mm", "1–20 mm"], imperial: ["0.04\"–0.8\"", "0.04\"–0.8\"", "0.04\"–0.8\"", "0.04\"–0.8\""] },
  ],
  upgrades: SHARED_UPGRADES,
};

// ─── Series content (bilingual) ───────────────────────────────────────────────

const SERIES_CONTENT = {
  en: {
    name: "ST Series",
    tagline: "Sheet & Tube",
    power: "2–6 kW",
    badge: "Available",
    image: "/images/sheet-tube-combo-hero.webp",
    description: "One machine, two capabilities. The VTM-ST cuts flat sheet up to 6000 × 2500 mm and round/square tube profiles up to Φ230 mm — four bed sizes to match your production volume.",
    bestFor: ["Mixed sheet and tube production", "Bed sizes from 3015 to 6025", "Round and square tube up to Φ230 mm", "2 kW to 6 kW laser power"],
  },
  es: {
    name: "Serie ST",
    tagline: "Chapa y Tubo",
    power: "2–6 kW",
    badge: "Disponible",
    image: "/images/sheet-tube-combo-hero.webp",
    description: "Una máquina, dos capacidades. La VTM-ST corta chapa plana hasta 6000 × 2500 mm y perfiles de tubo redondos/cuadrados hasta Φ230 mm — cuatro tamaños de mesa para adaptarse a su volumen de producción.",
    bestFor: ["Producción mixta de chapa y tubo", "Mesas desde 3015 hasta 6025", "Tubo redondo y cuadrado hasta Φ230 mm", "Potencia láser de 2 kW a 6 kW"],
  },
};

const LABELS = {
  en: { productLine: "Product Line", browseSeries: "ST Series", subheadline: "Four bed sizes — flat sheet up to 6000 × 2500 mm and tube up to Φ230 mm on the same machine.", bestFor: "Highlights", quote: "Request a Quote", viewSpecs: "View Specs", specsSection: "Technical Specifications", specsHeadline: "Full Specs", upgrades: "Available Upgrades" },
  es: { productLine: "Línea de Productos", browseSeries: "Serie ST", subheadline: "Cuatro tamaños de mesa — chapa plana hasta 6000 × 2500 mm y tubo hasta Φ230 mm en la misma máquina.", bestFor: "Aspectos Destacados", quote: "Solicitar Cotización", viewSpecs: "Ver Especificaciones", specsSection: "Especificaciones Técnicas", specsHeadline: "Especificaciones Completas", upgrades: "Mejoras Disponibles" },
};

// ─── Specs renderer ───────────────────────────────────────────────────────────

const VISIBLE = 3;

function STSpecs({ specs, locale, unit, setUnit }: { specs: ModelSpecs; locale: "en" | "es"; unit: Unit; setUnit: (u: Unit) => void }) {
  const labels = LABELS[locale];
  const colCount = specs.headers.length;
  const hasCarousel = colCount > VISIBLE;
  const clonesBefore = VISIBLE;
  const totalTrackCols = colCount + clonesBefore + VISIBLE;
  const mod = (n: number) => ((n % colCount) + colCount) % colCount;
  const trackData: number[] = [
    ...Array.from({ length: clonesBefore }, (_, i) => mod(colCount - clonesBefore + i)),
    ...Array.from({ length: colCount }, (_, i) => i),
    ...Array.from({ length: VISIBLE }, (_, i) => i),
  ];
  const colWidthPct = 100 / totalTrackCols;
  const trackWidthPct = (totalTrackCols / VISIBLE) * 100;
  const trackXForPos = (p: number) => -((clonesBefore + p) * colWidthPct);
  const [pos, setPos] = useState(0);
  const posRef = useRef(0);
  const [animating, setAnimating] = useState(false);
  const animatingRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useLayoutEffect(() => {
    posRef.current = 0;
    setPos(0);
    if (autoScrollRef.current !== null) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(${trackXForPos(0)}%)`;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specs]);

  const navigate = (direction: "left" | "right") => {
    if (animatingRef.current || !hasCarousel) return;
    const track = trackRef.current;
    if (!track) return;
    animatingRef.current = true;
    setAnimating(true);
    const cur = posRef.current;
    const rawNext = direction === "right" ? clonesBefore + cur + 1 : clonesBefore + cur - 1;
    const nextPos = mod(direction === "right" ? cur + 1 : cur - 1);
    track.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    track.style.transform = `translateX(${-(rawNext * colWidthPct)}%)`;
    const onEnd = () => {
      track.style.transition = "none";
      track.style.transform = `translateX(${trackXForPos(nextPos)}%)`;
      posRef.current = nextPos;
      setPos(nextPos);
      animatingRef.current = false;
      setAnimating(false);
    };
    track.addEventListener("transitionend", onEnd, { once: true });
  };

  const startAutoScroll = (direction: "left" | "right") => {
    if (autoScrollRef.current !== null) clearInterval(autoScrollRef.current);
    navigate(direction);
    autoScrollRef.current = setInterval(() => navigate(direction), 500);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current !== null) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  useEffect(() => () => stopAutoScroll(), []);

  const specRows = specs.rows.filter((r): r is Extract<SpecRow, { type: "spec" }> => r.type === "spec");
  const groupRows = specs.rows;

  return (
    <div>
      <div className="flex justify-center mb-10">
        <div className="flex border border-vtm-gray-border overflow-hidden">
          {(["metric", "imperial"] as Unit[]).map((u) => (
            <button key={u} onClick={() => setUnit(u)} className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors ${unit === u ? "bg-vtm-dark text-white" : "bg-white text-vtm-gray-mid hover:bg-vtm-gray-light"}`}>
              {u === "metric" ? "Metric" : "Imperial"}
            </button>
          ))}
        </div>
      </div>

      {hasCarousel ? (
        <div className="flex gap-4">
          <div className="flex-shrink-0 self-stretch">
            <button onClick={() => navigate("left")} onMouseEnter={() => startAutoScroll("left")} onMouseLeave={stopAutoScroll} aria-label="Previous model" className="sticky top-[calc(50vh-20px)] w-10 h-10 flex items-center justify-center bg-vtm-red text-white hover:bg-[#a81718] transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 2L4 7l5 5" /></svg>
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <div ref={trackRef} style={{ width: `${trackWidthPct}%`, display: "flex", willChange: "transform" }}>
              {trackData.map((colIdx, trackIdx) => (
                <div key={trackIdx} style={{ width: `${colWidthPct}%`, flexShrink: 0, padding: "0 12px", boxSizing: "border-box" }} className="flex flex-col">
                  <div className="text-center pb-6 mb-6 border-b border-vtm-gray-border">
                    <p className="font-headline font-bold text-xl text-vtm-dark tracking-tight">{specs.headers[colIdx]}</p>
                  </div>
                  <div className="flex flex-col gap-10">
                    {groupRows.map((row, rowIdx) => row.type === "group" ? (
                      <p key={rowIdx} className="text-[11px] font-bold tracking-[0.18em] uppercase text-vtm-gray-mid text-center">{row.label}</p>
                    ) : (
                      <div key={row.label} className="text-center">
                        <p className="font-headline font-bold text-lg text-vtm-dark leading-tight mb-1 break-words">{row[unit][colIdx]}</p>
                        <p className="text-xs text-vtm-gray-mid tracking-wide">{row.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 self-stretch">
            <button onClick={() => navigate("right")} onMouseEnter={() => startAutoScroll("right")} onMouseLeave={stopAutoScroll} aria-label="Next model" className="sticky top-[calc(50vh-20px)] w-10 h-10 flex items-center justify-center bg-vtm-red text-white hover:bg-[#a81718] transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 2l5 5-5 5" /></svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))` }}>
          {specs.headers.map((header, colIdx) => (
            <div key={header} className="flex flex-col">
              <div className="text-center pb-6 mb-6 border-b border-vtm-gray-border">
                <p className="font-headline font-bold text-xl text-vtm-dark tracking-tight">{header}</p>
              </div>
              <div className="flex flex-col gap-10">
                {groupRows.map((row, rowIdx) => row.type === "group" ? (
                  <p key={rowIdx} className="text-[11px] font-bold tracking-[0.18em] uppercase text-vtm-gray-mid text-center">{row.label}</p>
                ) : (
                  <div key={row.label} className="text-center">
                    <p className="font-headline font-bold text-lg text-vtm-dark leading-tight mb-1 break-words">{row[unit][colIdx]}</p>
                    <p className="text-xs text-vtm-gray-mid tracking-wide">{row.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {hasCarousel && (
        <div className="flex justify-center gap-1.5 mt-6">
          {specs.headers.map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === pos ? "bg-vtm-dark" : "bg-vtm-gray-border"}`} />
          ))}
        </div>
      )}

      {unit === "imperial" && specRows.length > 0 && (
        <p className="text-[11px] text-vtm-gray-mid text-center mt-5 italic">* Nominal standard dimensions. Refer to metric values for exact specifications.</p>
      )}

      {specs.upgrades.length > 0 && (
        <div className="mt-10 pt-6 border-t border-vtm-gray-border">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-vtm-gray-mid mb-3 text-center">{labels.upgrades}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {specs.upgrades.map((u) => (
              <span key={u} className="text-xs border border-vtm-gray-border px-3 py-1.5 text-vtm-dark">{u}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function SheetTubeModelBrowser({ locale }: { locale: "en" | "es" }) {
  const labels = LABELS[locale];
  const series = SERIES_CONTENT[locale];
  const [unit, setUnit] = useState<Unit>("metric");

  return (
    <>
      {/* Card Browser */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-vtm-red mb-4">{labels.productLine}</p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-3">{labels.browseSeries}</h2>
          <p className="text-vtm-gray-mid max-w-xl leading-relaxed mb-12">{labels.subheadline}</p>

          {/* Single series card + detail */}
          <div className="grid md:grid-cols-2 gap-8 items-start border-t border-vtm-gray-border pt-8">
            {/* Gallery */}
            {SERIES_FRAMES.length > 0 ? (
              <ImageGallery images={SERIES_FRAMES} alt={`VTM ${series.name} Sheet & Tube Combo Laser`} />
            ) : (
              <div className="relative aspect-[4/3] overflow-hidden bg-vtm-gray-light">
                <Image src={series.image} alt={series.name} fill className="object-cover" sizes="50vw" />
              </div>
            )}

            {/* Detail */}
            <div>
              <p className="font-headline text-2xl font-bold text-vtm-dark mb-0.5">{series.name}</p>
              <p className="text-vtm-gray-mid text-sm mb-4 leading-relaxed">{series.description}</p>
              <div className="flex gap-3 flex-wrap mb-6">
                <Button href="/quote?machine=sheet-tube-st" variant="primary" size="sm">{labels.quote}</Button>
                <Button href="#st-specs" variant="outline" size="sm">{labels.viewSpecs}</Button>
              </div>
              {series.bestFor.length > 0 && (
                <>
                  <p className="text-xs font-semibold tracking-widest uppercase text-vtm-gray-mid mb-3">{labels.bestFor}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {series.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-vtm-dark">
                        <span className="text-vtm-red mt-0.5 flex-shrink-0" aria-hidden="true">—</span>{item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Specs section */}
      <section className="bg-vtm-gray-light py-20 md:py-28" id="st-specs">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-vtm-red mb-4">{labels.specsSection}</p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-12">{labels.specsHeadline}</h2>
          <div className="bg-white p-6 md:p-10">
            <STSpecs specs={SPECS} locale={locale} unit={unit} setUnit={setUnit} />
          </div>
        </div>
      </section>
    </>
  );
}
