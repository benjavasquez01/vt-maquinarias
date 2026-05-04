"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ImageGallery } from "@/components/ui/ImageGallery";

// ─── Image frames ───────────────────────────────────────────────────────────

const SERIES_FRAMES: Record<string, string[]> = {
  hydraulic: [
    "/images/press-brake-hydraulic-1.jpg",
    "/images/press-brake-hydraulic-2.jpg",
    "/images/press-brake-hydraulic-3.jpg",
  ],
  electric: [
    "/images/press-brake-electric-1.jpg",
    "/images/press-brake-electric-2.jpg",
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
      "63T / 2500",  "80T / 3200",  "100T / 3200", "160T / 3200", "200T / 3200", "250T / 3200", "320T / 3200",
      "400T / 4000",
      "500T / 5000", "500T / 6000", "500T / 7000",
      "600T / 5000", "600T / 6000", "600T / 7000",
      "800T / 6000", "800T / 7000", "800T / 8000",
      "1000T / 6000","1000T / 7000","1000T / 8000",
      "1200T / 6000","1200T / 7000","1200T / 8000",
      "1600T / 6000","1600T / 7000","1600T / 8000",
    ],
    rows: [
      { label: "Nominal Force (kN)",
        metric:   ["630","800","1000","1600","2000","2500","3200","4000","5000","5000","5000","6000","6000","6000","8000","8000","8000","10000","10000","10000","12000","12000","12000","16000","16000","16000"],
        imperial: ["630","800","1000","1600","2000","2500","3200","4000","5000","5000","5000","6000","6000","6000","8000","8000","8000","10000","10000","10000","12000","12000","12000","16000","16000","16000"] },
      { label: "Bending Length",
        metric:   ["2500 mm","3200 mm","3200 mm","3200 mm","3200 mm","3200 mm","3200 mm","4000 mm","5000 mm","6000 mm","7000 mm","5000 mm","6000 mm","7000 mm","6000 mm","7000 mm","8000 mm","6000 mm","7000 mm","8000 mm","6000 mm","7000 mm","8000 mm","6000 mm","7000 mm","8000 mm"],
        imperial: ["98\"","126\"","126\"","126\"","126\"","126\"","126\"","157\"","197\"","236\"","276\"","197\"","236\"","276\"","236\"","276\"","315\"","236\"","276\"","315\"","236\"","276\"","315\"","236\"","276\"","315\""] },
      { label: "Pole Distance",
        metric:   ["1900 mm","2600 mm","2600 mm","2600 mm","2600 mm","2600 mm","1600 mm","3100 mm","4000 mm","4800 mm","5400 mm","4000 mm","4800 mm","5400 mm","5000 mm","5400 mm","6400 mm","4800 mm","5400 mm","6400 mm","5000 mm","5400 mm","6400 mm","4800 mm","5400 mm","6400 mm"],
        imperial: ["75\"","102\"","102\"","102\"","102\"","102\"","63\"","122\"","157\"","189\"","213\"","157\"","189\"","213\"","197\"","213\"","252\"","189\"","213\"","252\"","197\"","213\"","252\"","189\"","213\"","252\""] },
      { label: "Throat Depth",
        metric:   ["350 mm","350 mm","400 mm","400 mm","400 mm","400 mm","400 mm","400 mm","500 mm","500 mm","500 mm","500 mm","500 mm","500 mm","600 mm","600 mm","600 mm","600 mm","600 mm","600 mm","600 mm","600 mm","600 mm","500 mm","500 mm","500 mm"],
        imperial: ["13.8\"","13.8\"","15.7\"","15.7\"","15.7\"","15.7\"","15.7\"","15.7\"","19.7\"","19.7\"","19.7\"","19.7\"","19.7\"","19.7\"","23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","19.7\"","19.7\"","19.7\""] },
      { label: "Slider Travel",
        metric:   ["150 mm","200 mm","200 mm","200 mm","200 mm","200 mm","200 mm","200 mm","300 mm","300 mm","300 mm","300 mm","300 mm","300 mm","400 mm","400 mm","400 mm","400 mm","400 mm","400 mm","400 mm","400 mm","400 mm","400 mm","400 mm","400 mm"],
        imperial: ["5.9\"","7.9\"","7.9\"","7.9\"","7.9\"","7.9\"","7.9\"","7.9\"","11.8\"","11.8\"","11.8\"","11.8\"","11.8\"","11.8\"","15.7\"","15.7\"","15.7\"","15.7\"","15.7\"","15.7\"","15.7\"","15.7\"","15.7\"","15.7\"","15.7\"","15.7\""] },
      { label: "Worktable Height",
        metric:   ["800 mm","800 mm","850 mm","920 mm","920 mm","920 mm","950 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm"],
        imperial: ["31.5\"","31.5\"","33.5\"","36.2\"","36.2\"","36.2\"","37.4\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\""] },
      { label: "Die Loading Height",
        metric:   ["380 mm","380 mm","420 mm","420 mm","420 mm","420 mm","420 mm","420 mm","600 mm","600 mm","600 mm","600 mm","600 mm","600 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm"],
        imperial: ["15\"","15\"","16.5\"","16.5\"","16.5\"","16.5\"","16.5\"","16.5\"","23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\""] },
      { label: "Main Motor",
        metric:   ["7.5 kW","7.5 kW","7.5 kW","11 kW","11 kW","18.5 kW","18.5 kW","30 kW","37 kW","37 kW","91 kW","45 kW","45 kW","45 kW","2×30 kW","2×30 kW","2×30 kW","2×37 kW","2×37 kW","2×37 kW","2×45 kW","2×45 kW","2×45 kW","2×55 kW","2×55 kW","2×55 kW"],
        imperial: ["7.5 kW","7.5 kW","7.5 kW","11 kW","11 kW","18.5 kW","18.5 kW","30 kW","37 kW","37 kW","91 kW","45 kW","45 kW","45 kW","2×30 kW","2×30 kW","2×30 kW","2×37 kW","2×37 kW","2×37 kW","2×45 kW","2×45 kW","2×45 kW","2×55 kW","2×55 kW","2×55 kW"] },
      { label: "Back Gauge X Travel",
        metric:   ["600 mm","600 mm","600 mm","600 mm","600 mm","600 mm","600 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm","800 mm"],
        imperial: ["23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","23.6\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\"","31.5\""] },
      { label: "Back Gauge X Speed",
        metric:   ["100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s","100 mm/s"],
        imperial: ["236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min","236 in/min"] },
      { label: "Dimensions (L × W × H)",
        metric: [
          "3100 × 1450 × 2050 mm","3500 × 1550 × 2100 mm","3500 × 1580 × 2400 mm","3500 × 1650 × 2500 mm","3500 × 1680 × 2550 mm","3500 × 1700 × 2600 mm","3500 × 1800 × 2730 mm","4300 × 2080 × 2730 mm","5400 × 2525 × 4600 mm","6500 × 2525 × 4200 mm","7500 × 2525 × 4900 mm","5500 × 2450 × 4500 mm","6500 × 2450 × 5100 mm","7500 × 2450 × 5200 mm","6500 × 2750 × 5300 mm","7500 × 2750 × 5500 mm","8600 × 2750 × 5900 mm","6500 × 2800 × 5600 mm","7500 × 2800 × 5800 mm","8500 × 2900 × 6100 mm","6500 × 3100 × 5850 mm","7500 × 3100 × 6550 mm","8500 × 3100 × 7150 mm","6500 × 3300 × 6500 mm","7500 × 3300 × 7000 mm","8500 × 3300 × 8000 mm",
        ],
        imperial: [
          "122\" × 57\" × 81\"","138\" × 61\" × 83\"","138\" × 62\" × 94\"","138\" × 65\" × 98\"","138\" × 66\" × 100\"","138\" × 67\" × 102\"","138\" × 71\" × 107\"","169\" × 82\" × 107\"","213\" × 99\" × 181\"","256\" × 99\" × 165\"","295\" × 99\" × 193\"","217\" × 96\" × 177\"","256\" × 96\" × 201\"","295\" × 96\" × 205\"","256\" × 108\" × 209\"","295\" × 108\" × 217\"","339\" × 108\" × 232\"","256\" × 110\" × 220\"","295\" × 110\" × 228\"","335\" × 114\" × 240\"","256\" × 122\" × 230\"","295\" × 122\" × 258\"","335\" × 122\" × 281\"","256\" × 130\" × 256\"","295\" × 130\" × 276\"","335\" × 130\" × 315\"",
        ] },
    ],
    upgrades: ["Auto Tool Change", "Wila Precision Tooling", "Front Sheet Support Arms", "Laser Safety Guard", "Angle Measurement System"],
  },
  electric: {
    headers: [
      "2–160T / 6000",
      "2–200T / 6000",
      "2–300T / 6000",
      "2–400T / 6000",
      "2–500T / 6000",
      "2–600T / 6000",
      "2–600T / 8000",
      "2–800T / 6000",
      "2–800T / 8000",
    ],
    rows: [
      { label: "Nominal Pressure (kN)",
        metric:   ["2–1600", "2–2000", "2–3000", "2–4000", "2–5000", "2–6000", "2–6000", "2–8000", "2–8000"],
        imperial: ["2–1600", "2–2000", "2–3000", "2–4000", "2–5000", "2–6000", "2–6000", "2–8000", "2–8000"] },
      { label: "Bench Length",
        metric:   ["2–6000 mm", "2–6000 mm", "2–6000 mm", "2–6000 mm", "2–6000 mm", "2–6000 mm", "2–8000 mm", "2–6000 mm", "2–8000 mm"],
        imperial: ["2–236\"",   "2–236\"",   "2–236\"",   "2–236\"",   "2–236\"",   "2–236\"",   "2–315\"",   "2–236\"",   "2–315\""] },
      { label: "Workbench Width",
        metric:   ["200 mm", "220 mm", "280 mm", "320 mm", "360 mm", "400 mm", "400 mm", "500 mm", "500 mm"],
        imperial: ["7.9\"",  "8.7\"",  "11\"",   "12.6\"", "14.2\"", "15.7\"", "15.7\"", "19.7\"", "19.7\""] },
      { label: "Pole Distance",
        metric:   ["4800 mm", "4800 mm", "4600 mm", "4600 mm", "4800 mm", "4800 mm", "6200 mm", "4800 mm", "6200 mm"],
        imperial: ["189\"",   "189\"",   "181\"",   "181\"",   "189\"",   "189\"",   "244\"",   "189\"",   "244\""] },
      { label: "Throat Depth",
        metric:   ["400 mm", "400 mm", "400 mm", "400 mm", "400 mm", "500 mm", "500 mm", "500 mm", "500 mm"],
        imperial: ["15.7\"", "15.7\"", "15.7\"", "15.7\"", "15.7\"", "19.7\"", "19.7\"", "19.7\"", "19.7\""] },
      { label: "Slider Stroke",
        metric:   ["200 mm", "250 mm", "250 mm", "250 mm", "300 mm", "300 mm", "300 mm", "350 mm", "350 mm"],
        imperial: ["7.9\"",  "9.8\"",  "9.8\"",  "9.8\"",  "11.8\"", "11.8\"", "11.8\"", "13.8\"", "13.8\""] },
      { label: "Max Opening Height",
        metric:   ["450 mm", "500 mm", "520 mm", "540 mm", "620 mm", "620 mm", "620 mm", "680 mm", "680 mm"],
        imperial: ["17.7\"", "19.7\"", "20.5\"", "21.3\"", "24.4\"", "24.4\"", "24.4\"", "26.8\"", "26.8\""] },
      { label: "Slider Stroke Adjust",
        metric:   ["180 mm", "180 mm", "200 mm", "200 mm", "200 mm", "200 mm", "250 mm", "250 mm", "250 mm"],
        imperial: ["7.1\"",  "7.1\"",  "7.9\"",  "7.9\"",  "7.9\"",  "7.9\"",  "9.8\"",  "9.8\"",  "9.8\""] },
      { label: "Oil Cylinder Dia",
        metric:   ["Φ210 mm", "Φ240 mm", "Φ300 mm", "Φ350 mm", "Φ380 mm", "Φ420 mm", "Φ420 mm", "Φ460 mm", "Φ460 mm"],
        imperial: ["Φ8.3\"",  "Φ9.4\"",  "Φ11.8\"", "Φ13.8\"", "Φ15\"",   "Φ16.5\"", "Φ16.5\"", "Φ18.1\"", "Φ18.1\""] },
      { label: "Main Motor",
        metric:   ["2–11 kW", "2–11 kW", "2–18.5 kW", "2–30 kW", "2–37 kW", "2–45 kW", "2–45 kW", "2–55 kW", "2–55 kW"],
        imperial: ["2–11 kW", "2–11 kW", "2–18.5 kW", "2–30 kW", "2–37 kW", "2–45 kW", "2–45 kW", "2–55 kW", "2–55 kW"] },
      { label: "Dimensions (L × W × H)",
        metric: [
          "(2×6100) × 2000 × 3200 mm",
          "(2×6100) × 2150 × 3350 mm",
          "(2×6100) × 2300 × 3800 mm",
          "(2×6200) × 2700 × 4100 mm",
          "(2×6200) × 2900 × 4300 mm",
          "(2×6200) × 3100 × 4900 mm",
          "(2×8400) × 3300 × 5600 mm",
          "(2×6400) × 3600 × 5400 mm",
          "(2×8400) × 3600 × 5600 mm",
        ],
        imperial: [
          "(2×240\") × 79\" × 126\"",
          "(2×240\") × 85\" × 132\"",
          "(2×240\") × 91\" × 150\"",
          "(2×244\") × 106\" × 161\"",
          "(2×244\") × 114\" × 169\"",
          "(2×244\") × 122\" × 193\"",
          "(2×331\") × 130\" × 220\"",
          "(2×252\") × 142\" × 213\"",
          "(2×331\") × 142\" × 220\"",
        ] },
    ],
    upgrades: ["Auto Tool Change", "Wila Precision Tooling", "Front Sheet Support Arms", "Laser Safety Guard", "Tandem Synchronization System"],
  },
};

// ─── Bilingual model content ───────────────────────────────────────────────

const MODELS: Record<"en" | "es", Model[]> = {
  en: [
    {
      id: "hydraulic",
      series: "Hydraulic Series",
      tagline: "Heavy-Duty Bending",
      power: "63 – 1600 T",
      badge: "Available",
      image: "/images/press-brake-hydraulic-1.jpg",
      description:
        "26 hydraulic press brake configurations from 63 T up to 1600 T, with bending lengths from 2.5 m to 8 m. Dual-cylinder electrohydraulic synchronization, dual-motor drive on heavy frames (≥ 800 T), and hydraulic auto-crowning compensate for ram deflection in real time.",
      bestFor: [
        "Tonnage from 63 T up to 1600 T",
        "Bed lengths from 2.5 m to 8 m",
        "Throat depth up to 600 mm",
        "Heavy plate and structural fabrication",
      ],
      specs: SPECS.hydraulic,
    },
    {
      id: "electric",
      series: "Servo Electric Series",
      tagline: "Tandem High-Tonnage Bending",
      power: "160 – 800 T (tandem)",
      badge: "Available",
      image: "/images/press-brake-electric-1.jpg",
      description:
        "Tandem servo-controlled press brakes pairing two synchronized machines for combined bending lengths up to 16 m and per-machine tonnage from 160 T to 800 T. Servo-driven precision and synchronization between both rams holds angle consistency across long, heavy parts that exceed the capacity of a single machine.",
      bestFor: [
        "Per-machine tonnage 160 T – 800 T",
        "Combined bending length up to 16 m (2×8000 mm)",
        "Long, heavy structural parts",
        "Tandem or independent operation",
      ],
      specs: SPECS.electric,
    },
  ],
  es: [
    {
      id: "hydraulic",
      series: "Serie Hidráulica",
      tagline: "Plegado de Alto Rendimiento",
      power: "63 – 1600 T",
      badge: "Disponible",
      image: "/images/press-brake-hydraulic-1.jpg",
      description:
        "26 configuraciones de prensa plegadora hidráulica de 63 T hasta 1600 T, con longitudes de plegado de 2.5 m a 8 m. Sincronización electrohidráulica de doble cilindro, accionamiento de doble motor en bastidores pesados (≥ 800 T) y arqueado automático hidráulico compensan la deflexión del carnero en tiempo real.",
      bestFor: [
        "Tonelaje de 63 T hasta 1600 T",
        "Longitudes de cama de 2.5 m a 8 m",
        "Profundidad de garganta hasta 600 mm",
        "Placa pesada y fabricación estructural",
      ],
      specs: SPECS.hydraulic,
    },
    {
      id: "electric",
      series: "Serie Servo Eléctrica",
      tagline: "Plegado en Tándem de Alto Tonelaje",
      power: "160 – 800 T (tándem)",
      badge: "Disponible",
      image: "/images/press-brake-electric-1.jpg",
      description:
        "Prensas plegadoras servo-controladas en tándem que combinan dos máquinas sincronizadas para longitudes de plegado combinadas de hasta 16 m y tonelaje por máquina de 160 T a 800 T. Precisión servo-controlada y sincronización entre ambos carneros mantienen la consistencia angular en piezas largas y pesadas que superan la capacidad de una sola máquina.",
      bestFor: [
        "Tonelaje por máquina 160 T – 800 T",
        "Longitud de plegado combinada hasta 16 m (2×8000 mm)",
        "Piezas estructurales largas y pesadas",
        "Operación en tándem o independiente",
      ],
      specs: SPECS.electric,
    },
  ],
};

const LABELS = {
  en: {
    productLine: "Product Line",
    chooseYourSeries: "Choose Your Drive Type",
    subheadline: "Two press brake platforms — hydraulic for single-machine high tonnage and heavy plate, and servo electric tandem pairs for synchronized bending of long, heavy parts beyond single-machine capacity.",
    bestFor: "Best for",
    quote: "Request a Quote",
    viewSpecs: "View Specs",
    specsSection: "Technical Specifications",
    specsHeadline: "Full Specs",
    upgrades: "Available Upgrades",
    specCol: "Specification",
  },
  es: {
    productLine: "Línea de Productos",
    chooseYourSeries: "Elija su Tipo de Accionamiento",
    subheadline: "Dos plataformas de prensa plegadora — hidráulica de máquina simple para alto tonelaje y placa pesada, y pares servo eléctricos en tándem para plegado sincronizado de piezas largas y pesadas que superan la capacidad de una sola máquina.",
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
              <p className="text-vtm-gray-mid max-w-xl leading-relaxed">{labels.subheadline}</p>
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
