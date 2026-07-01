"use client";

import { useState, useLayoutEffect, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ImageGallery } from "@/components/ui/ImageGallery";

// ─── Image frames ───────────────────────────────────────────────────────────

const SERIES_FRAMES: Record<string, string[]> = {
  mt: ["/images/tube-mt-1.webp", "/images/tube-mt-2.webp", "/images/tube-mt-3.webp", "/images/tube-mt-4.webp"],
  t: ["/images/tube-t-1.webp", "/images/tube-t-2.webp", "/images/tube-t-3.webp", "/images/tube-t-4.webp", "/images/tube-t-5.webp", "/images/tube-t-6.webp", "/images/tube-t-7.webp"],
  at3: ["/images/tube-at3-1.webp", "/images/tube-at3-2.webp", "/images/tube-at3-3.webp"],
  at4: ["/images/tube-at4-1.webp", "/images/tube-at4-2.webp", "/images/tube-at4-3.webp"],
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
    headers: ["VTM-6012MT"],
    rows: [
      { type: "spec", label: "Diámetro mínimo", metric: ["Φ10 mm / □10 mm"], imperial: ["Φ0.4\" / □0.4\""] },
      { type: "spec", label: "Diámetro máximo", metric: ["Φ120 mm / □120 mm"], imperial: ["Φ4.7\" / □4.7\""] },
      { type: "spec", label: "Potencia", metric: ["1.5 / 3 kW"], imperial: ["1.5 / 3 kW"] },
      { type: "spec", label: "Aceleración máxima", metric: ["1 G"], imperial: ["1 G"] },
      { type: "spec", label: "Precisión", metric: ["±0.03 mm"], imperial: ["±0.001\""] },
      { type: "spec", label: "Velocidad del mandril", metric: ["80 r/min"], imperial: ["80 r/min"] },
      { type: "spec", label: "Voltaje", metric: ["380 V, 3 PH, 50/60 Hz"], imperial: ["380 V, 3 PH, 50/60 Hz"] },
    ],
    features: [],
    upgrades: ["Extractor de humo", "Estabilizador de voltaje", "Ventana de luz de seguridad", "Compresor de tornillo 16 bar con secado (opcional)"],
  },
  t: {
    headers: ["VTM-6024T", "VTM-6036T"],
    rows: [
      { type: "spec", label: "Diámetro mínimo",
        metric:   ["Ø20 mm / □20 mm", "Ø20 mm / □20 mm"],
        imperial: ["Ø0.8\" / □0.8\"", "Ø0.8\" / □0.8\""] },
      { type: "spec", label: "Diámetro máximo",
        metric:   ["Ø240 mm / □240 mm", "Ø360 mm / □360 mm"],
        imperial: ["Ø9.4\" / □9.4\"",   "Ø14.2\" / □14.2\""] },
      { type: "spec", label: "Potencia",
        metric:   ["1.5 / 3 kW", "1.5 / 3 kW"],
        imperial: ["1.5 / 3 kW", "1.5 / 3 kW"] },
      { type: "spec", label: "Aceleración máxima",
        metric:   ["1.5 G", "1.5 G"],
        imperial: ["1.5 G", "1.5 G"] },
      { type: "spec", label: "Precisión",
        metric:   ["±0.03 mm", "±0.03 mm"],
        imperial: ["±0.001\"", "±0.001\""] },
      { type: "spec", label: "Velocidad del mandril",
        metric:   ["60 r/min", "60 r/min"],
        imperial: ["60 r/min", "60 r/min"] },
      { type: "spec", label: "Voltaje",
        metric:   ["380 V, 3 PH, 50/60 Hz", "380 V, 3 PH, 50/60 Hz"],
        imperial: ["380 V, 3 PH, 50/60 Hz", "380 V, 3 PH, 50/60 Hz"] },
    ],
    features: [],
    upgrades: ["Extractor de humo", "Estabilizador de voltaje", "Ventana de luz de seguridad", "Compresor de tornillo 16 bar con secado (opcional)"],
  },
  at3: {
    headers: ["AT3-7036", "AT3-12036", "AT3-12052"],
    rows: [
      { type: "spec", label: "Diámetro mínimo",
        metric:   ["Ø25 mm / □25 mm", "Ø25 mm / □25 mm", "Ø40 mm / □40 mm"],
        imperial: ["Ø1\" / □1\"",      "Ø1\" / □1\"",      "Ø1.6\" / □1.6\""] },
      { type: "spec", label: "Diámetro máximo",
        metric:   ["Ø360 mm / □360 mm", "Ø360 mm / □360 mm", "Ø550 mm / □550 mm"],
        imperial: ["Ø14.2\" / □14.2\"", "Ø14.2\" / □14.2\"", "Ø21.7\" / □21.7\""] },
      { type: "spec", label: "Velocidad del mandril",
        metric:   ["75 r/min", "75 r/min", "30 r/min"],
        imperial: ["75 r/min", "75 r/min", "30 r/min"] },
      { type: "spec", label: "Aceleración máxima",
        metric:   ["0.6 G", "0.6 G", "0.6 G"],
        imperial: ["0.6 G", "0.6 G", "0.6 G"] },
      { type: "spec", label: "Precisión",
        metric:   ["±0.05 mm", "±0.05 mm", "±0.05 mm"],
        imperial: ["±0.002\"", "±0.002\"", "±0.002\""] },
      { type: "spec", label: "Voltaje",
        metric:   ["380 V, 3 PH, 50/60 Hz", "380 V, 3 PH, 50/60 Hz", "380 V, 3 PH, 50/60 Hz"],
        imperial: ["380 V, 3 PH, 50/60 Hz", "380 V, 3 PH, 50/60 Hz", "380 V, 3 PH, 50/60 Hz"] },
      { type: "spec", label: "Potencia",
        metric:   ["6 / 12 / 20 kW", "6 / 12 / 20 kW", "6 / 12 / 20 kW"],
        imperial: ["6 / 12 / 20 kW", "6 / 12 / 20 kW", "6 / 12 / 20 kW"] },
    ],
    features: [],
    upgrades: ["Aire acondicionado", "Estabilizador de voltaje", "Extractor de humo", "Compresor de tornillo 16 bar con secado (opcional)"],
  },
  at4: {
    headers: ["AT4-12036", "AT4-12052"],
    rows: [
      { type: "spec", label: "Diámetro mínimo",
        metric:   ["Ø25 mm / □25 mm", "Ø40 mm / □40 mm"],
        imperial: ["Ø1\" / □1\"",      "Ø1.6\" / □1.6\""] },
      { type: "spec", label: "Diámetro máximo",
        metric:   ["Ø360 mm / □360 mm", "Ø550 mm / □550 mm"],
        imperial: ["Ø14.2\" / □14.2\"", "Ø21.7\" / □21.7\""] },
      { type: "spec", label: "Velocidad del mandril",
        metric:   ["75 r/min", "30 r/min"],
        imperial: ["75 r/min", "30 r/min"] },
      { type: "spec", label: "Aceleración máxima",
        metric:   ["0.6 G", "0.6 G"],
        imperial: ["0.6 G", "0.6 G"] },
      { type: "spec", label: "Precisión",
        metric:   ["±0.05 mm", "±0.05 mm"],
        imperial: ["±0.002\"", "±0.002\""] },
      { type: "spec", label: "Voltaje",
        metric:   ["380 V, 3 PH, 50/60 Hz", "380 V, 3 PH, 50/60 Hz"],
        imperial: ["380 V, 3 PH, 50/60 Hz", "380 V, 3 PH, 50/60 Hz"] },
      { type: "spec", label: "Potencia",
        metric:   ["6 / 12 / 20 kW", "6 / 12 / 20 kW"],
        imperial: ["6 / 12 / 20 kW", "6 / 12 / 20 kW"] },
    ],
    features: [],
    upgrades: ["Aire acondicionado", "Estabilizador de voltaje", "Extractor de humo", "Compresor de tornillo 16 bar con secado (opcional)"],
  },
};

// ─── Model content (bilingual) ───────────────────────────────────────────────

const MODELS: Record<"en" | "es", Model[]> = {
  en: [
    {
      id: "mt", series: "MT Series", tagline: "Mini Tube", power: "1.5 – 3 kW", badge: "Available",
      image: "/images/tube-mt-1.webp",
      description: "The MT series (VTM-6012MT) is VTM's mini tube fiber laser. A pneumatic chuck delivers precision and consistency, with improved mobility and cutting speed. Handles round and square tube from Φ10 to Φ120 mm.",
      bestFor: ["High precision", "Flexible", "Efficient cutting", "Easy operation"],
      specs: SPECS.mt,
    },
    {
      id: "t", series: "T Series", tagline: "Standard Tube", power: "1.5 – 3 kW", badge: "Available",
      image: "/images/tube-t-1.webp",
      description: "The T series is VTM's standard tube fiber laser. Two models — VTM-6024T and VTM-6036T — handle round and square tube up to Ø360 mm, with a high-grade YYC Taiwan helical rack-and-pinion drive for maximum cut quality and a 150,000-hour source life.",
      bestFor: ["Versatility", "Durability", "Precision", "High speed"],
      specs: SPECS.t,
    },
    {
      id: "at3", series: "AT3 Series", tagline: "Auto Load/Unload · 3 Chucks", power: "6 – 20 kW", badge: "Available",
      image: "/images/tube-at3-1.webp",
      description: "The AT3 is a tube fiber laser with automatic loading/unloading and three chucks. Heavy-duty side frame, a bevel cutting head with high-precision auto-focus, and a servo-driven movable front chuck that cuts tail-end scrap to as little as 50 mm.",
      bestFor: ["Smart nesting", "Efficient", "Automatic loading", "Zero-waste cutting"],
      specs: SPECS.at3,
    },
    {
      id: "at4", series: "AT4 Series", tagline: "Simultaneous Load/Unload · 4 Chucks", power: "6 – 20 kW", badge: "Available",
      image: "/images/tube-at4-1.webp",
      description: "The AT4 is a tube fiber laser with automatic loading/unloading and four chucks. Heavy-duty build with a maintenance-free world-brand high-efficiency laser source, a high-speed cutting head with 45° bevel cutting, and cryogenically-treated precision gears.",
      bestFor: ["Heavy-duty", "Maximum speed", "Simultaneous load & unload", "No tail-end scrap"],
      specs: SPECS.at4,
    },
  ],
  es: [
    {
      id: "mt", series: "Serie MT", tagline: "Tubo Mini", power: "1.5 – 3 kW", badge: "Disponible",
      image: "/images/tube-mt-1.webp",
      description: "La Serie MT (VTM-6012MT) es la máquina de corte láser de tubo mini de VTM. Mandril neumático para precisión y consistencia, con movilidad y velocidad de corte mejoradas. Procesa tubo redondo y cuadrado de Φ10 a Φ120 mm.",
      bestFor: ["Alta precisión", "Flexible", "Corte eficiente", "Fácil operación"],
      specs: SPECS.mt,
    },
    {
      id: "t", series: "Serie T", tagline: "Tubo Standard", power: "1.5 – 3 kW", badge: "Disponible",
      image: "/images/tube-t-1.webp",
      description: "La Serie T es la máquina de corte láser de tubo standard de VTM. Dos modelos — VTM-6024T y VTM-6036T — procesan tubo redondo y cuadrado hasta Ø360 mm, con transmisión helicoidal de alta gama YYC Taiwan para máxima calidad de corte y una fuente láser de 150.000 horas de vida útil.",
      bestFor: ["Versatilidad", "Durabilidad", "Precisión", "Alta velocidad"],
      specs: SPECS.t,
    },
    {
      id: "at3", series: "Serie AT3", tagline: "Carga/Descarga Automática · 3 Mandriles", power: "6 – 20 kW", badge: "Disponible",
      image: "/images/tube-at3-1.webp",
      description: "La AT3 es una máquina de corte láser de tubo con carga y descarga automática y 3 mandriles. Estructura lateral robusta para servicio pesado, cabezal biselado con auto-foco de máxima precisión y mandril frontal móvil servo-accionado que reduce la cola de material hasta 50 mm.",
      bestFor: ["Nesting inteligente", "Eficiente", "Carga automática", "Corte sin desperdicio"],
      specs: SPECS.at3,
    },
    {
      id: "at4", series: "Serie AT4", tagline: "Carga/Descarga Simultánea · 4 Mandriles", power: "6 – 20 kW", badge: "Disponible",
      image: "/images/tube-at4-1.webp",
      description: "La AT4 es una máquina de corte láser de tubo con carga y descarga automática y 4 mandriles. Servicio pesado, con fuente láser de alta eficiencia de marca mundial libre de mantenimiento, cabezal de corte de máxima velocidad con biselado a 45° y engranajes de precisión tratados criogénicamente.",
      bestFor: ["Servicio pesado", "Máxima velocidad", "Carga y descarga simultánea", "Sin cola de material"],
      specs: SPECS.at4,
    },
  ],
};

const LABELS = {
  en: {
    productLine: "Product Line",
    chooseYourSeries: "Choose Your Series",
    subheadline: "Four tube laser series. CypTube CNC, HIWIN rails, and Raycus source — configured for different tube sizes and production requirements.",
    bestFor: "Best for",
    quote: "Request a Quote",
    viewSpecs: "View Specs",
    specsSection: "Technical Specifications",
    specsHeadline: "Full Specs",
    upgrades: "Includes",
  },
  es: {
    productLine: "Línea de Productos",
    chooseYourSeries: "Elija su Serie",
    subheadline: "Cuatro series de láseres de tubo. CNC CypTube, guías HIWIN y fuente Raycus — configurados para diferentes tamaños de tubo y requisitos de producción.",
    bestFor: "Ideal para",
    quote: "Solicitar Cotización",
    viewSpecs: "Ver Especificaciones",
    specsSection: "Especificaciones Técnicas",
    specsHeadline: "Especificaciones Completas",
    upgrades: "Incluye",
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
            {specs.upgrades.map((u) => {
              const optional = /opcional|optional/i.test(u);
              return (
                <span
                  key={u}
                  className={`text-xs border px-3 py-1.5 ${optional ? "border-vtm-red text-vtm-red" : "border-vtm-gray-border text-vtm-dark"}`}
                >
                  {u}
                </span>
              );
            })}
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
