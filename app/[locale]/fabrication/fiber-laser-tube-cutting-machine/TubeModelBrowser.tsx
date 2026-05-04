"use client";

import { useState, useLayoutEffect, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ImageGallery } from "@/components/ui/ImageGallery";

// ─── Image frames ───────────────────────────────────────────────────────────

const SERIES_FRAMES: Record<string, string[]> = {
  mt: ["/images/tube-mt-1.png", "/images/tube-mt-2.png", "/images/tube-mt-3.png", "/images/tube-mt-4.png"],
  t: ["/images/tube-t-1.png", "/images/tube-t-2.png", "/images/tube-t-3.png", "/images/tube-t-4.png", "/images/tube-t-5.png", "/images/tube-t-6.png", "/images/tube-t-7.png"],
  at: ["/images/tube-at-1.png", "/images/tube-at-2.png", "/images/tube-at-3.png", "/images/tube-at-4.png"],
};

// ─── Types ──────────────────────────────────────────────────────────────────

type Unit = "metric" | "imperial";

type SpecRow =
  | { type: "group"; label: string }
  | { type: "spec"; label: string; metric: string[]; imperial: string[] };

type ModelSpecs = {
  headers: string[];
  rows: SpecRow[];
  features: string[];
  upgrades: string[];
};

type Model = {
  id: string;
  series: string;
  subtitle?: string;
  tagline: string;
  power: string;
  badge: string;
  image: string;
  description: string;
  bestFor: string[];
  specs: ModelSpecs;
};

// ─── Specs data ─────────────────────────────────────────────────────────────

const SPECS: Record<string, ModelSpecs> = {
  mt: {
    headers: ["VTM-6011MT", "VTM-6016MT"],
    rows: [
      { type: "spec", label: "Min Diameter", metric: ["Φ10 mm", "Φ20 mm"], imperial: ["Φ0.4\"", "Φ0.8\""] },
      { type: "spec", label: "Max Diameter", metric: ["Φ110 mm", "Φ160 mm"], imperial: ["Φ4.3\"", "Φ6.3\""] },
      { type: "spec", label: "Laser Power", metric: ["1500 W, 2000 W", "1500 W, 2000 W"], imperial: ["1500 W, 2000 W", "1500 W, 2000 W"] },
      { type: "spec", label: "Max Acceleration", metric: ["1 G", "1 G"], imperial: ["1 G", "1 G"] },
      { type: "spec", label: "Positioning Accuracy", metric: ["±0.03 mm", "±0.03 mm"], imperial: ["±0.001\"", "±0.001\""] },
      { type: "spec", label: "Chuck Speed", metric: ["80 r/min", "80 r/min"], imperial: ["80 r/min", "80 r/min"] },
      { type: "spec", label: "Voltage", metric: ["380V 3PH 50/60Hz", "380V 3PH 50/60Hz"], imperial: ["380V 3PH 50/60Hz", "380V 3PH 50/60Hz"] },
    ],
    features: [],
    upgrades: ["Air Conditioner", "Smoke Purifier", "Air Compressor", "Voltage Regulator", "Safety Light Curtain"],
  },
  t: {
    headers: ["VTM-6024T", "VTM-6035T"],
    rows: [
      { type: "spec", label: "Min Diameter", metric: ["Φ20 mm", "Φ20 mm"], imperial: ["Φ0.8\"", "Φ0.8\""] },
      { type: "spec", label: "Max Diameter", metric: ["Φ240 mm", "Φ350 mm"], imperial: ["Φ9.4\"", "Φ13.8\""] },
      { type: "spec", label: "Laser Power", metric: ["1500 W, 2000 W, 3000 W, 6000 W", "1500 W, 2000 W, 3000 W, 6000 W"], imperial: ["1500 W, 2000 W, 3000 W, 6000 W", "1500 W, 2000 W, 3000 W, 6000 W"] },
      { type: "spec", label: "Max Acceleration", metric: ["1.5 G", "1.5 G"], imperial: ["1.5 G", "1.5 G"] },
      { type: "spec", label: "Positioning Accuracy", metric: ["±0.03 mm", "±0.03 mm"], imperial: ["±0.001\"", "±0.001\""] },
      { type: "spec", label: "Chuck Speed", metric: ["60 r/min", "60 r/min"], imperial: ["60 r/min", "60 r/min"] },
      { type: "spec", label: "Voltage", metric: ["380V 3PH 50/60Hz", "380V 3PH 50/60Hz"], imperial: ["380V 3PH 50/60Hz", "380V 3PH 50/60Hz"] },
    ],
    features: [],
    upgrades: ["Air Conditioner", "Smoke Purifier", "Air Compressor", "Voltage Regulator", "Safety Light Curtain"],
  },
  at: {
    headers: ["VTM-6024AT"],
    rows: [
      { type: "spec", label: "Laser Power", metric: ["1500 W, 2000 W, 3000 W, 6000 W"], imperial: ["1500 W, 2000 W, 3000 W, 6000 W"] },
      { type: "spec", label: "Total Load Capacity", metric: ["4 t"], imperial: ["8,800 lb"] },
      { type: "spec", label: "Tube Support", metric: ["Auto Following Type"], imperial: ["Auto Following Type"] },
      { type: "spec", label: "Max Feed Tube Diameter", metric: ["200 mm"], imperial: ["7.9\""] },
      { type: "spec", label: "Feeding Tube Length", metric: ["6,000 mm"], imperial: ["19.7 ft"] },
      { type: "spec", label: "First Feeding Time", metric: ["35 s"], imperial: ["35 s"] },
      { type: "spec", label: "Cycle Loading Time", metric: ["15 s"], imperial: ["15 s"] },
    ],
    features: [],
    upgrades: ["Air Conditioner", "Smoke Purifier", "Air Compressor", "Voltage Regulator", "Safety Light Curtain"],
  },
};

// ─── Model content (bilingual) ───────────────────────────────────────────────

const MODELS: Record<"en" | "es", Model[]> = {
  en: [
    {
      id: "mt", series: "MT Series", tagline: "Tube Cutting", power: "1.5 – 2 kW", badge: "Available",
      image: "/images/tube-mt-1.png",
      description: "The MT series handles round and square tube profiles up to 160 mm diameter. Two models — VTM-6011MT and VTM-6016MT — cover light structural to medium-duty tube with 4-chuck pneumatic clamping and CypTube CNC control.",
      bestFor: ["Round & square tube up to 160 mm", "Structural profiles and angle iron", "High-accuracy miter and cope cuts", "Light to medium wall thickness"],
      specs: SPECS.mt,
    },
    {
      id: "t", series: "T Series", tagline: "Tube Cutting", power: "1.5 – 6 kW", badge: "Available",
      image: "/images/tube-t-1.png",
      description: "The T series handles round tube up to 350 mm diameter. Two models — VTM-6024T and VTM-6035T — cover medium to heavy structural tube with higher acceleration and a full power range from 1.5 to 6 kW.",
      bestFor: ["Round tube up to 350 mm diameter", "Heavy structural sections", "High-speed production runs", "Full power range 1.5–6 kW"],
      specs: SPECS.t,
    },
    {
      id: "at", series: "AT Series", tagline: "Auto Bundle Loading", power: "1.5 – 6 kW", badge: "Available",
      image: "/images/tube-at-1.png",
      description: "The AT series adds automated bundle loading to the VTM-6024AT platform. Handles up to 4 t of tube stock with auto-following support and a 15-second cycle load time — designed for unattended production runs.",
      bestFor: ["Automated bundle infeed up to 4 t", "Unattended production runs", "Round tube up to 200 mm diameter", "High-volume repetitive jobs"],
      specs: SPECS.at,
    },
  ],
  es: [
    {
      id: "mt", series: "Serie MT", tagline: "Corte de Tubo", power: "1.5 – 2 kW", badge: "Disponible",
      image: "/images/tube-mt-1.png",
      description: "La serie MT maneja perfiles de tubo redondo y cuadrado hasta 160 mm de diámetro. Dos modelos — VTM-6011MT y VTM-6016MT — cubren desde estructura liviana hasta tubo de uso mediano con sujeción neumática de 4 mordazas y control CNC CypTube.",
      bestFor: ["Tubo redondo y cuadrado hasta 160 mm", "Perfiles estructurales y ángulo", "Cortes en inglete y entalle de alta precisión", "Pared delgada a espesor medio"],
      specs: SPECS.mt,
    },
    {
      id: "t", series: "Serie T", tagline: "Corte de Tubo", power: "1.5 – 6 kW", badge: "Disponible",
      image: "/images/tube-t-1.png",
      description: "La serie T maneja tubo redondo hasta 350 mm de diámetro. Dos modelos — VTM-6024T y VTM-6035T — cubren tubo estructural mediano a pesado con mayor aceleración y una gama de potencia completa de 1.5 a 6 kW.",
      bestFor: ["Tubo redondo hasta 350 mm de diámetro", "Secciones estructurales pesadas", "Producción de alta velocidad", "Gama completa de potencia 1.5–6 kW"],
      specs: SPECS.t,
    },
    {
      id: "at", series: "Serie AT", tagline: "Carga Automática", power: "1.5 – 6 kW", badge: "Disponible",
      image: "/images/tube-at-1.png",
      description: "La serie AT agrega carga automática de paquetes a la plataforma VTM-6024AT. Maneja hasta 4 t de stock de tubos con soporte de seguimiento automático y un tiempo de ciclo de carga de 15 segundos — diseñada para producción desatendida.",
      bestFor: ["Alimentación automática de paquetes hasta 4 t", "Producción desatendida", "Tubo redondo hasta 200 mm de diámetro", "Trabajos repetitivos de alto volumen"],
      specs: SPECS.at,
    },
  ],
};

const LABELS = {
  en: {
    productLine: "Product Line",
    chooseYourSeries: "Choose Your Series",
    subheadline: "Three tube laser series. CypTube CNC, HIWIN rails, and Raycus source — configured for different tube sizes and production requirements.",
    bestFor: "Best for",
    quote: "Request a Quote",
    viewSpecs: "View Specs",
    specsSection: "Technical Specifications",
    specsHeadline: "Full Specs",
    upgrades: "Available Upgrades",
  },
  es: {
    productLine: "Línea de Productos",
    chooseYourSeries: "Elija su Serie",
    subheadline: "Tres series de láseres de tubo. CNC CypTube, guías HIWIN y fuente Raycus — configurados para diferentes tamaños de tubo y requisitos de producción.",
    bestFor: "Ideal para",
    quote: "Solicitar Cotización",
    viewSpecs: "Ver Especificaciones",
    specsSection: "Especificaciones Técnicas",
    specsHeadline: "Especificaciones Completas",
    upgrades: "Mejoras Disponibles",
  },
};

// ─── Specs renderer ──────────────────────────────────────────────────────────

const VISIBLE = 3;

function TubeSpecs({
  specs,
  locale,
  unit,
  setUnit,
}: {
  specs: ModelSpecs;
  locale: "en" | "es";
  unit: Unit;
  setUnit: (u: Unit) => void;
}) {
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

  return (
    <div>
      {/* Unit toggle */}
      <div className="flex justify-center mb-10">
        <div className="flex border border-vtm-gray-border overflow-hidden">
          {(["metric", "imperial"] as Unit[]).map((u) => (
            <button
              key={u}
              onClick={() => setUnit(u)}
              className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors ${
                unit === u
                  ? "bg-vtm-dark text-white"
                  : "bg-white text-vtm-gray-mid hover:bg-vtm-gray-light"
              }`}
            >
              {u === "metric" ? "Metric" : "Imperial"}
            </button>
          ))}
        </div>
      </div>

      {/* Static grid for ≤ VISIBLE columns */}
      {!hasCarousel && (
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))` }}
        >
          {specs.headers.map((header, colIdx) => (
            <div key={header} className="flex flex-col">
              <div className="text-center pb-6 mb-6 border-b border-vtm-gray-border">
                <p className="font-headline font-bold text-xl text-vtm-dark tracking-tight">{header}</p>
              </div>
              <div className="flex flex-col gap-14">
                {specRows.map((row) => (
                  <div key={row.label} className="text-center">
                    <p className="font-headline font-bold text-lg md:text-xl text-vtm-dark leading-tight mb-1 break-words">
                      {row[unit][colIdx]}
                    </p>
                    <p className="text-xs text-vtm-gray-mid tracking-wide">{row.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Carousel row */}
      {hasCarousel && <div className="flex gap-4">
        <div className="flex-shrink-0 self-stretch">
          <button
            onClick={() => navigate("left")}
            onMouseEnter={() => startAutoScroll("left")}
            onMouseLeave={stopAutoScroll}
            aria-label="Previous model"
            className="sticky top-[calc(50vh-20px)] w-10 h-10 flex items-center justify-center bg-vtm-red text-white hover:bg-[#a81718] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 2L4 7l5 5" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-hidden">
          <div ref={trackRef} style={{ width: `${trackWidthPct}%`, display: "flex", willChange: "transform" }}>
            {trackData.map((colIdx, trackIdx) => (
              <div
                key={trackIdx}
                style={{ width: `${colWidthPct}%`, flexShrink: 0, padding: "0 12px", boxSizing: "border-box" }}
                className="flex flex-col"
              >
                <div className="text-center pb-6 mb-6 border-b border-vtm-gray-border">
                  <p className="font-headline font-bold text-xl text-vtm-dark tracking-tight">
                    {specs.headers[colIdx]}
                  </p>
                </div>
                <div className="flex flex-col gap-14">
                  {specRows.map((row) => (
                    <div key={row.label} className="text-center">
                      <p className="font-headline font-bold text-lg md:text-xl text-vtm-dark leading-tight mb-1 break-words">
                        {row[unit][colIdx]}
                      </p>
                      <p className="text-xs text-vtm-gray-mid tracking-wide">{row.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 self-stretch">
          <button
            onClick={() => navigate("right")}
            onMouseEnter={() => startAutoScroll("right")}
            onMouseLeave={stopAutoScroll}
            aria-label="Next model"
            className="sticky top-[calc(50vh-20px)] w-10 h-10 flex items-center justify-center bg-vtm-red text-white hover:bg-[#a81718] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 2l5 5-5 5" />
            </svg>
          </button>
        </div>
      </div>}

      {/* Nominal disclaimer */}
      {unit === "imperial" && specRows.length > 0 && (
        <p className="text-[11px] text-vtm-gray-mid text-center mt-5 italic">
          * Nominal standard dimensions. Refer to metric values for exact specifications.
        </p>
      )}

      {/* Position dots */}
      {hasCarousel && (
        <div className="flex justify-center gap-1.5 mt-6">
          {specs.headers.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === pos ? "bg-vtm-dark" : "bg-vtm-gray-border"
              }`}
            />
          ))}
        </div>
      )}

      {/* Upgrades */}
      {specs.upgrades.length > 0 && (
        <div className="mt-10 pt-6 border-t border-vtm-gray-border">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-vtm-gray-mid mb-3 text-center">
            {labels.upgrades}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {specs.upgrades.map((u) => (
              <span key={u} className="text-xs border border-vtm-gray-border px-3 py-1.5 text-vtm-dark">
                {u}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export function TubeModelBrowser({ locale }: { locale: "en" | "es" }) {
  const models = MODELS[locale];
  const labels = LABELS[locale];
  const [selectedId, setSelectedId] = useState(models[0].id);
  const [unit, setUnit] = useState<Unit>("metric");
  const selected = models.find((m) => m.id === selectedId)!;
  const detailRef = useRef<HTMLDivElement>(null);

  const selectModel = (id: string) => {
    setSelectedId(id);
    setTimeout(() => {
      if (!detailRef.current) return;
      const y = detailRef.current.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 0);
  };

  return (
    <>
      {/* ── Card Browser ─────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-vtm-red mb-4">
            {labels.productLine}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-3">
                {labels.chooseYourSeries}
              </h2>
              <p className="text-vtm-gray-mid max-w-xl leading-relaxed">{labels.subheadline}</p>
            </div>
          </div>

          {/* Model cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {models.map((model) => {
              const isSelected = model.id === selectedId;
              return (
                <button
                  key={model.id}
                  onClick={() => selectModel(model.id)}
                  className={`group relative text-left border-2 transition-all duration-200 overflow-hidden focus:outline-none ${
                    isSelected ? "border-vtm-red" : "border-vtm-gray-border hover:border-vtm-dark"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-vtm-gray-light">
                    <Image
                      src={model.image}
                      alt={model.series}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <span className="absolute top-2 left-2 text-[10px] font-bold tracking-wider uppercase bg-vtm-red text-white px-2 py-0.5">
                      {model.badge}
                    </span>
                    {isSelected && (
                      <span className="absolute top-2 right-2 w-5 h-5 bg-vtm-red flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                          <path d="M1.5 5l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <div className={`p-3 transition-colors ${isSelected ? "bg-vtm-dark" : "bg-white group-hover:bg-vtm-gray-light/60"}`}>
                    <p className={`font-headline font-bold text-sm leading-tight mb-0.5 ${isSelected ? "text-white" : "text-vtm-dark"}`}>
                      {model.series}
                    </p>
                    <p className={`text-xs ${isSelected ? "text-white/60" : "text-vtm-gray-mid"}`}>
                      {model.power}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail strip */}
          <div ref={detailRef} key={selected.id} className="border-t border-vtm-gray-border pt-8 grid md:grid-cols-2 gap-8 items-start">
            {SERIES_FRAMES[selected.id] ? (
              <ImageGallery
                images={SERIES_FRAMES[selected.id]}
                alt={`VTM ${selected.series} Fiber Laser Tube Cutting Machine`}
              />
            ) : (
              <div>
                <p className="font-headline text-2xl font-bold text-vtm-dark mb-0.5">{selected.series}</p>
                {selected.subtitle && <p className="text-vtm-gray-mid text-sm mb-3">{selected.subtitle}</p>}
                <p className="text-vtm-gray-mid text-sm mb-4 leading-relaxed">{selected.description}</p>
                <div className="flex gap-3 flex-wrap">
                  <Button href={`/quote?machine=tube-laser-${selected.id}`} variant="primary" size="sm">
                    {labels.quote}
                  </Button>
                  <Button href="#specs" variant="outline" size="sm">
                    {labels.viewSpecs}
                  </Button>
                </div>
              </div>
            )}

            <div>
              {SERIES_FRAMES[selected.id] && (
                <div className="mb-6">
                  <p className="font-headline text-2xl font-bold text-vtm-dark mb-0.5">{selected.series}</p>
                  {selected.subtitle && <p className="text-vtm-gray-mid text-sm mb-3">{selected.subtitle}</p>}
                  <p className="text-vtm-gray-mid text-sm mb-4 leading-relaxed">{selected.description}</p>
                  <div className="flex gap-3 flex-wrap">
                    <Button href={`/quote?machine=tube-laser-${selected.id}`} variant="primary" size="sm">
                      {labels.quote}
                    </Button>
                    <Button href="#specs" variant="outline" size="sm">
                      {labels.viewSpecs}
                    </Button>
                  </div>
                </div>
              )}
              {selected.bestFor.length > 0 && (
                <>
                  <p className="text-xs font-semibold tracking-widest uppercase text-vtm-gray-mid mb-3">
                    {labels.bestFor}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {selected.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-vtm-dark">
                        <span className="text-vtm-red mt-0.5 flex-shrink-0" aria-hidden="true">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Specs Section ────────────────────────────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28" id="specs">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-vtm-red mb-4">
            {labels.specsSection}
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight">
              {selected.series} — {labels.specsHeadline}
            </h2>
          </div>
          <div className="bg-white p-6 md:p-10">
            <TubeSpecs specs={selected.specs} locale={locale} unit={unit} setUnit={setUnit} />
          </div>
        </div>
      </section>
    </>
  );
}
