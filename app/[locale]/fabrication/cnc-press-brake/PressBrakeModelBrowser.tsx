"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ImageGallery } from "@/components/ui/ImageGallery";

// ─── Image frames ───────────────────────────────────────────────────────────

const SERIES_FRAMES: Record<string, string[]> = {
  hydraulic: [
    "/images/press-brake-hydraulic-1.webp",
    "/images/press-brake-hydraulic-3.webp",
    "/images/press-brake-hydraulic-2.webp",
  ],
  electric: [
    "/images/press-brake-electric-1.webp",
    "/images/press-brake-electric-2.webp",
  ],
};

// ─── Types ──────────────────────────────────────────────────────────────────

type Unit = "metric" | "imperial";

type SpecRow = { label: string; metric: string[]; imperial: string[] };

type ModelSpecs = {
  headers: string[];
  rows: SpecRow[];
  upgrades: string[];
};

type Model = {
  id: string;
  series: string;
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
  hydraulic: {
    headers: [
      "63T/2500", "80T/3200", "100T/3200", "160T/3200", "200T/3200", "250T/3200", "320T/3200", "400T/3200",
      "500T/5000", "500T/6000", "500T/7000", "600T/5000", "600T/6000", "600T/7000", "800T/6000", "800T/7000",
      "800T/8000", "1000T/6000",
    ],
    rows: [
      { label: "Fuerza nominal",
        metric:   ["630 kN","800 kN","1000 kN","1600 kN","2000 kN","2500 kN","3200 kN","4000 kN","5000 kN","5000 kN","5000 kN","6000 kN","6000 kN","6000 kN","8000 kN","8000 kN","8000 kN","10000 kN"],
        imperial: ["63 T","80 T","100 T","160 T","200 T","250 T","320 T","400 T","500 T","500 T","500 T","600 T","600 T","600 T","800 T","800 T","800 T","1000 T"] },
      { label: "Longitud de flexión",
        metric:   ["2500 mm","3200 mm","3200 mm","3200 mm","3200 mm","3200 mm","3200 mm","4000 mm","5000 mm","6000 mm","7000 mm","5000 mm","6000 mm","7000 mm","6000 mm","7000 mm","8000 mm","6000 mm"],
        imperial: ["98\"","126\"","126\"","126\"","126\"","126\"","126\"","157\"","197\"","236\"","276\"","197\"","236\"","276\"","236\"","276\"","315\"","236\""] },
      { label: "Distancia entre postes",
        metric:   ["1900 mm","2600 mm","2600 mm","2600 mm","2600 mm","2600 mm","1600 mm","3100 mm","4000 mm","4800 mm","5400 mm","4000 mm","4800 mm","5400 mm","5000 mm","5400 mm","6400 mm","4800 mm"],
        imperial: ["75\"","102\"","102\"","102\"","102\"","102\"","63\"","122\"","157\"","189\"","213\"","157\"","189\"","213\"","197\"","213\"","252\"","189\""] },
      { label: "Profundidad de garganta",
        metric:   ["350 mm","350 mm","400 mm","400 mm","400 mm","400 mm","400 mm","400 mm","500 mm","500 mm","500 mm","500 mm","500 mm","500 mm","600 mm","600 mm","600 mm","600 mm"],
        imperial: ["13.8\"","13.8\"","15.7\"","15.7\"","15.7\"","15.7\"","15.7\"","15.7\"","19.7\"","19.7\"","19.7\"","19.7\"","19.7\"","19.7\"","23.6\"","23.6\"","23.6\"","23.6\""] },
      { label: "Recorrido del carro",
        metric:   ["150 mm","200 mm","200 mm","200 mm","200 mm","200 mm","200 mm","200 mm","300 mm","300 mm","300 mm","300 mm","300 mm","300 mm","400 mm","400 mm","400 mm","400 mm"],
        imperial: ["5.9\"","7.9\"","7.9\"","7.9\"","7.9\"","7.9\"","7.9\"","7.9\"","11.8\"","11.8\"","11.8\"","11.8\"","11.8\"","11.8\"","15.7\"","15.7\"","15.7\"","15.7\""] },
      { label: "Altura de trabajo",
        metric:   ["800 mm","800 mm","850 mm","920 mm","920 mm","920 mm","950 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm"],
        imperial: ["31.5\"","31.5\"","33.5\"","36.2\"","36.2\"","36.2\"","37.4\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\""] },
      { label: "Altura de carga del dado",
        metric:   ["380 mm","380 mm","420 mm","420 mm","420 mm","420 mm","420 mm","420 mm","600 mm","600 mm","600 mm","600 mm","600 mm","600 mm","800 mm","800 mm","800 mm","800 mm"],
        imperial: ["15\"","15\"","16.5\"","16.5\"","16.5\"","16.5\"","16.5\"","16.5\"","23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","31.5\"","31.5\"","31.5\"","31.5\""] },
      { label: "Motor principal",
        metric:   ["7.5 kW","7.5 kW","7.5 kW","11 kW","11 kW","18.5 kW","18.5 kW","30 kW","37 kW","37 kW","91 kW","45 kW","45 kW","45 kW","2×30 kW","2×30 kW","2×30 kW","2×37 kW"],
        imperial: ["7.5 kW","7.5 kW","7.5 kW","11 kW","11 kW","18.5 kW","18.5 kW","30 kW","37 kW","37 kW","91 kW","45 kW","45 kW","45 kW","2×30 kW","2×30 kW","2×30 kW","2×37 kW"] },
      { label: "Recorrido tope trasero eje X",
        metric:   ["600 mm","600 mm","600 mm","600 mm","600 mm","600 mm","600 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm"],
        imperial: ["23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\""] },
      { label: "Velocidad tope trasero eje X",
        metric:   ["100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s"],
        imperial: ["236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min"] },
    ],
    upgrades: ["Soporte con seguimiento de pieza", "Herramienta con posicionamiento ultra preciso", "Laser Safe"],
  },
  electric: {
    headers: [
      "EP03-02", "EP06-04", "EP12-06", "EP18-08", "EP12-06R", "EP20-10", "EP30-12", "EP35-12", "EP40-13", "EP50-20", "EP60-25",
    ],
    rows: [
      { label: "Capacidad de prensa",
        metric:   ["30 kN","60 kN","120 kN","180 kN","120 kN","200 kN","300 kN","350 kN","400 kN","500 kN","600 kN"],
        imperial: ["3 T","6 T","12 T","18 T","12 T","20 T","30 T","35 T","40 T","50 T","60 T"] },
      { label: "Longitud de plegado",
        metric:   ["200 mm","400 mm","600 mm","800 mm","600 mm","1050 mm","1250 mm","1250 mm","1300 mm","1600 mm","2500 mm"],
        imperial: ["8\"","16\"","24\"","31\"","24\"","41\"","49\"","49\"","51\"","63\"","98\""] },
      { label: "Carrera de plegado",
        metric:   ["120 mm","120 mm","120 mm","120 mm","120 mm","120 mm","150 mm","150 mm","150 mm","150 mm","150 mm"],
        imperial: ["4.7\"","4.7\"","4.7\"","4.7\"","4.7\"","4.7\"","5.9\"","5.9\"","5.9\"","5.9\"","5.9\""] },
      { label: "Carrera del tope trasero",
        metric:   ["150 mm","150 mm","150 mm","300 mm","150 mm","300 mm","500 mm","500 mm","500 mm","500 mm","500 mm"],
        imperial: ["5.9\"","5.9\"","5.9\"","11.8\"","5.9\"","11.8\"","19.7\"","19.7\"","19.7\"","19.7\"","19.7\""] },
      { label: "Potencia del husillo",
        metric:   ["2 kW","3 kW","5.6 kW","7.5 kW","2×3 kW","11 kW","13 kW","13 kW","15 kW","30 kW","30 kW"],
        imperial: ["2 kW","3 kW","5.6 kW","7.5 kW","2×3 kW","11 kW","13 kW","13 kW","15 kW","30 kW","30 kW"] },
      { label: "Velocidad de bajada rápida",
        metric:   ["300 mm/s","300 mm/s","300 mm/s","300 mm/s","300 mm/s","300 mm/s","300 mm/s","300 mm/s","300 mm/s","300 mm/s","300 mm/s"],
        imperial: ["709 in/min","709 in/min","709 in/min","709 in/min","709 in/min","709 in/min","709 in/min","709 in/min","709 in/min","709 in/min","709 in/min"] },
      { label: "Velocidad de alimentación",
        metric:   ["<30 mm/s","<30 mm/s","<30 mm/s","<30 mm/s","<30 mm/s","<30 mm/s","<30 mm/s","<20 mm/s","<20 mm/s","<20 mm/s","<20 mm/s"],
        imperial: ["<71 in/min","<71 in/min","<71 in/min","<71 in/min","<71 in/min","<71 in/min","<71 in/min","<47 in/min","<47 in/min","<47 in/min","<47 in/min"] },
      { label: "Altura de apertura",
        metric:   ["420 mm","420 mm","420 mm","420 mm","420 mm","430 mm","470 mm","470 mm","470 mm","530 mm","530 mm"],
        imperial: ["16.5\"","16.5\"","16.5\"","16.5\"","16.5\"","16.9\"","18.5\"","18.5\"","18.5\"","20.9\"","20.9\""] },
      { label: "Profundidad de garganta",
        metric:   ["—","150 mm","150 mm","150 mm","150 mm","250 mm","250 mm","250 mm","300 mm","350 mm","350 mm"],
        imperial: ["—","5.9\"","5.9\"","5.9\"","5.9\"","9.8\"","9.8\"","9.8\"","11.8\"","13.8\"","13.8\""] },
      { label: "Distancia entre columnas",
        metric:   ["250 mm","370 mm","520 mm","770 mm","520 mm","930 mm","1150 mm","1150 mm","1200 mm","1400 mm","2300 mm"],
        imperial: ["9.8\"","14.6\"","20.5\"","30.3\"","20.5\"","36.6\"","45.3\"","45.3\"","47.2\"","55.1\"","90.6\""] },
    ],
    upgrades: ["Sin aceite hidráulico", "-80% ahorro de energía", "Operación de alta velocidad", "Bajo costo de mantención"],
  },
};

// ─── Bilingual model content ───────────────────────────────────────────────

const MODELS: Record<"en" | "es", Model[]> = {
  en: [
    {
      id: "hydraulic",
      series: "VTM-PB Hydraulic CNC Press Brake",
      tagline: "High-Precision Hydraulic Bending",
      power: "63 – 1000 T",
      badge: "Available",
      image: "/images/press-brake-hydraulic-1.webp",
      description:
        "VTM-PB hydraulic CNC press brake for high-precision, multi-angle bending. Its welded steel frame with stress-relief heat treatment is built for long-term structural stability, reliable operation, and repeatable bending quality in demanding metal fabrication.",
      bestFor: [
        "Tonnage from 63 T up to 1000 T",
        "Bending lengths from 2.5 m to 8 m",
        "Throat depth up to 600 mm",
        "Robust structure, graphical touch control, and Laser Safe option",
      ],
      specs: SPECS.hydraulic,
    },
    {
      id: "electric",
      series: "VTM-EPB Electric CNC Press Brake",
      tagline: "Full Servo Electric Bending",
      power: "30 – 600 kN",
      badge: "Available",
      image: "/images/press-brake-electric-1.webp",
      description:
        "VTM-EPB full servo electric press brake with up to 80% energy savings, quiet operation, no hydraulic oil, and fast response. Its CNC compensation table helps maintain precision across the full bending length while reducing maintenance and environmental risk.",
      bestFor: [
        "Energy-efficient electric bending",
        "No hydraulic oil, no hydraulic pump",
        "Approach and return speeds up to 300 mm/s",
        "Lower maintenance and clean operation",
      ],
      specs: SPECS.electric,
    },
  ],
  es: [
    {
      id: "hydraulic",
      series: "VTM-PB Plegadora CNC Hidráulica",
      tagline: "Plegado Hidráulico de Alta Precisión",
      power: "63 – 1000 T",
      badge: "Disponible",
      image: "/images/press-brake-hydraulic-1.webp",
      description:
        "Contamos con una amplia variedad de plegadoras CNC en distintos tonelajes, largos de trabajo y configuraciones de ejes, diseñadas para adaptarse a diferentes espesores, materiales y niveles de complejidad.",
      bestFor: [
        "Tonelajes disponibles desde 40 T hasta 1000 T",
        "Largos de trabajo desde 1.6 m hasta 6 m",
        "Configuraciones de ejes según el nivel de automatización requerido",
        "Soluciones para distintos espesores, materiales y complejidades de plegado",
      ],
      specs: SPECS.hydraulic,
    },
    {
      id: "electric",
      series: "VTM-EPB Plegadora CNC Eléctrica",
      tagline: "Operación Full Servo Eléctrica",
      power: "30 – 600 kN",
      badge: "Disponible",
      image: "/images/press-brake-electric-1.webp",
      description:
        "Plegadora CNC eléctrica VTM-EPB con accionamiento totalmente eléctrico, ahorro de energía de hasta 80%, operación silenciosa y alta precisión de plegado. Al no utilizar aceite ni bomba hidráulica, reduce mantenciones, evita fugas y mantiene una operación limpia y eficiente.",
      bestFor: [
        "Ahorro energético de hasta 80%",
        "Sin aceite hidráulico ni bomba hidráulica",
        "Velocidades de aproximación y retorno hasta 300 mm/s",
        "Bajo costo de mantención y operación silenciosa",
      ],
      specs: SPECS.electric,
    },
  ],
};

const LABELS = {
  en: {
    productLine: "Product Line",
    chooseYourSeries: "Choose Your Drive Type",
    subheadline: "Choose between the VTM-PB hydraulic CNC press brake for robust high-precision bending and the VTM-EPB full servo electric press brake for clean, quiet, energy-efficient production.",
    bestFor: "Best for",
    quote: "Request a Quote",
    viewSpecs: "View Specs",
    specsSection: "Technical Specifications",
    specsHeadline: "Full Specs",
    upgrades: "Available Upgrades",
    specCol: "Specification",
  },
  es: {
    productLine: "Línea de Plegadoras CNC",
    chooseYourSeries: "La plegadora ideal para tu producción",
    subheadline: "Esta tecnología permite estandarizar la calidad y el proceso de plegado, aumentando la capacidad para abordar proyectos de mayor volumen, complejidad y exigencia. Gracias a su control intuitivo y operación sencilla, optimiza los procesos productivos y mejora la eficiencia de su producción.\n\nCon tecnología avanzada y respaldo técnico local, nuestras plegadoras CNC son la solución ideal para ampliar tus capacidades productivas y acceder a nuevos proyectos.",
    bestFor: "Ideal para",
    quote: "Solicitar Cotización",
    viewSpecs: "Ver Especificaciones",
    specsSection: "Especificaciones Técnicas",
    specsHeadline: "Especificaciones Completas",
    upgrades: "Mejoras Disponibles",
    specCol: "Especificación",
  },
};

// ─── Specs renderer ──────────────────────────────────────────────────────────

const VISIBLE = 3;

// Columns visible at once in the spec carousel: 1 on phones, VISIBLE on md+.
// Anything narrower than ~250px per column wraps spec values mid-word.
function useVisibleCols() {
  const [visible, setVisible] = useState(VISIBLE);
  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setVisible(mq.matches ? 1 : VISIBLE);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return visible;
}

function PressBrakeSpecs({
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
  const visible = useVisibleCols();
  const hasCarousel = colCount > visible;

  const clonesBefore = visible;
  const totalTrackCols = colCount + clonesBefore + visible;
  const mod = (n: number) => ((n % colCount) + colCount) % colCount;

  const trackData: number[] = [
    ...Array.from({ length: clonesBefore }, (_, i) => mod(colCount - clonesBefore + i)),
    ...Array.from({ length: colCount }, (_, i) => i),
    ...Array.from({ length: visible }, (_, i) => i),
  ];

  const colWidthPct = 100 / totalTrackCols;
  const trackWidthPct = (totalTrackCols / visible) * 100;
  const trackXForPos = (p: number) => -((clonesBefore + p) * colWidthPct);

  const [pos, setPos] = useState(0);
  const posRef = useRef(0);
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
  }, [specs, visible]);

  const navigate = (direction: "left" | "right") => {
    if (animatingRef.current || !hasCarousel) return;
    const track = trackRef.current;
    if (!track) return;
    animatingRef.current = true;
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
              {u === "metric" ? (locale === "es" ? "Métrico" : "Metric") : "Imperial"}
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
                {specs.rows.map((row) => (
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
      {hasCarousel && (
        <div className="flex gap-4">
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
                    {specs.rows.map((row) => (
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
        </div>
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

export function PressBrakeModelBrowser({ locale }: { locale: "en" | "es" }) {
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
              <p className="text-vtm-gray-mid w-full md:max-w-[75%] whitespace-pre-line leading-relaxed">{labels.subheadline}</p>
            </div>
          </div>

          {/* Model cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
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
                  <div className="relative aspect-[16/9] overflow-hidden bg-white">
                    <Image
                      src={model.image}
                      alt={model.series}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
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
                  <div className={`p-4 transition-colors ${isSelected ? "bg-vtm-dark" : "bg-white group-hover:bg-vtm-gray-light/60"}`}>
                    <p className={`font-headline font-bold text-base leading-tight mb-0.5 ${isSelected ? "text-white" : "text-vtm-dark"}`}>
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
            <ImageGallery
              images={SERIES_FRAMES[selected.id]}
              alt={`VTM ${selected.series} CNC Press Brake`}
            />

            <div>
              <div className="mb-6">
                <p className="font-headline text-2xl font-bold text-vtm-dark mb-0.5">{selected.series}</p>
                <p className="text-vtm-gray-mid text-sm mb-4 leading-relaxed">{selected.description}</p>
                <div className="flex gap-3 flex-wrap">
                  <Button href={`/quote?machine=cnc-press-brake-${selected.id}`} variant="primary" size="sm">
                    {labels.quote}
                  </Button>
                  <Button href="#specs" variant="outline" size="sm">
                    {labels.viewSpecs}
                  </Button>
                </div>
              </div>
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
            <PressBrakeSpecs specs={selected.specs} locale={locale} unit={unit} setUnit={setUnit} />
          </div>
        </div>
      </section>
    </>
  );
}
