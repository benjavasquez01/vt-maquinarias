"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ImageGallery } from "@/components/ui/ImageGallery";

const EA_FRAMES = [
  "/images/SHEET/EA series/main 3015  (1).png",
  "/images/SHEET/EA series/3015  (2).png",
  "/images/SHEET/EA series/3015  (3).png",
  "/images/SHEET/EA series/3015  (4).png",
  "/images/SHEET/EA series/3015  (6).png",
  "/images/SHEET/EA series/3015  (7).png",
  "/images/SHEET/EA series/3015  (8).png",
];

// ─── Types ─────────────────────────────────────────────────────────────────

type SpecRow =
  | { type: "group"; label: string }
  | { type: "spec"; label: string; values: string[] }
  | { type: "check"; label: string };

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

// ─── Specs data (technical values are unit-agnostic) ───────────────────────

const SPECS: Record<string, ModelSpecs> = {
  ea: {
    headers: ["F-1313EA", "F-1325EA", "F-3015EA"],
    rows: [
      { type: "group", label: "Dimensions" },
      { type: "spec", label: "Working Area", values: ["1300 × 1300 mm", "1300 × 2500 mm", "3000 × 1500 mm"] },
      { type: "spec", label: "X / Y / Z Stroke", values: ["1350 × 1320 × 50 mm", "1310 × 2550 × 50 mm", "3050 × 1500 × 50 mm"] },
      { type: "group", label: "Performance" },
      { type: "spec", label: "Laser Power", values: ["1500 / 2000 / 3000 W", "1500 / 2000 / 3000 W", "1500 / 2000 / 3000 W"] },
      { type: "spec", label: "Max Acceleration", values: ["0.8 G", "0.8 G", "0.8 G"] },
      { type: "spec", label: "Positioning Accuracy", values: ["±0.05 mm", "±0.05 mm", "±0.05 mm"] },
      { type: "spec", label: "Voltage", values: ["380V 3PH 50/60Hz", "380V 3PH 50/60Hz", "380V 3PH 50/60Hz"] },
      { type: "group", label: "Cutting Ability" },
      { type: "spec", label: "Carbon Steel", values: ["0.8 – 16 mm", "0.8 – 16 mm", "0.8 – 16 mm"] },
      { type: "spec", label: "Stainless Steel", values: ["0.8 – 6 mm", "0.8 – 6 mm", "0.8 – 6 mm"] },
      { type: "group", label: "Standard Features" },
      { type: "check", label: "Raycus Fiber Laser Source" },
      { type: "check", label: "HIWIN Linear Rails" },
      { type: "check", label: "CypCut CNC Controller" },
      { type: "check", label: "Fuji Bus Servo Drives" },
      { type: "check", label: "Tongfei Water Chiller" },
    ],
    upgrades: ["Independent Control Cabinet", "Air Conditioner", "Smoke Purifier", "Air Compressor", "Voltage Regulator"],
  },
  b: {
    headers: ["3 kW", "6 kW", "12 kW"],
    rows: [
      { type: "group", label: "Dimensions" },
      { type: "spec", label: "Available Beds", values: ["3015 / 4015", "3015 / 4015 / 4020", "3015 / 4015 / 4020 / 6020"] },
      { type: "group", label: "Performance" },
      { type: "spec", label: "Controller", values: ["CypCut 2000E", "CypCut 4000E", "CypCut 8000C"] },
      { type: "spec", label: "Positioning Accuracy", values: ["±0.05 mm", "±0.05 mm", "±0.05 mm"] },
      { type: "spec", label: "Max Speed", values: ["up to 20 m/min", "up to 20 m/min", "up to 20 m/min"] },
      { type: "spec", label: "Voltage", values: ["380V 3PH 50/60Hz", "380V 3PH 50/60Hz", "380V 3PH 50/60Hz"] },
      { type: "group", label: "Cutting Ability" },
      { type: "spec", label: "Carbon Steel", values: ["up to 16 mm", "up to 20 mm", "up to 30 mm"] },
      { type: "spec", label: "Stainless Steel", values: ["up to 6 mm", "up to 12 mm", "up to 20 mm"] },
      { type: "spec", label: "Aluminum", values: ["up to 6 mm", "up to 10 mm", "up to 16 mm"] },
      { type: "spec", label: "Brass / Copper", values: ["up to 4 mm", "up to 6 mm", "up to 10 mm"] },
      { type: "group", label: "Standard Features" },
      { type: "check", label: "Raycus Fiber Laser Source" },
      { type: "check", label: "HIWIN Linear Rails" },
      { type: "check", label: "CypCut CNC Controller" },
      { type: "check", label: "Fuji Bus Servo Drives" },
      { type: "check", label: "Tongfei Water Chiller" },
    ],
    upgrades: ["Dual-Pallet Exchange Table", "Enclosed Safety Cabinet", "Auto-Loading System", "Fume Purifier", "Air Compressor"],
  },
  fe: {
    headers: ["FE-3015", "FE-4020"],
    rows: [
      { type: "group", label: "Dimensions" },
      { type: "spec", label: "Working Area", values: ["3000 × 1500 mm", "4000 × 2000 mm"] },
      { type: "group", label: "Performance" },
      { type: "spec", label: "Laser Power", values: ["3 / 6 / 12 kW", "3 / 6 / 12 kW"] },
      { type: "spec", label: "Pallet Change Time", values: ["< 15 sec", "< 15 sec"] },
      { type: "spec", label: "Positioning Accuracy", values: ["±0.05 mm", "±0.05 mm"] },
      { type: "spec", label: "Voltage", values: ["380V 3PH 50/60Hz", "380V 3PH 50/60Hz"] },
      { type: "group", label: "Cutting Ability (12 kW)" },
      { type: "spec", label: "Carbon Steel", values: ["up to 30 mm", "up to 30 mm"] },
      { type: "spec", label: "Stainless Steel", values: ["up to 20 mm", "up to 20 mm"] },
      { type: "spec", label: "Aluminum", values: ["up to 16 mm", "up to 16 mm"] },
      { type: "group", label: "Standard Features" },
      { type: "check", label: "Dual-Pallet Exchange Table" },
      { type: "check", label: "Raycus Fiber Laser Source" },
      { type: "check", label: "HIWIN Linear Rails" },
      { type: "check", label: "CypCut CNC Controller" },
      { type: "check", label: "Fuji Bus Servo Drives" },
    ],
    upgrades: ["Auto-Loading System", "Fume Purifier", "Enclosed Safety Cabinet", "Air Compressor"],
  },
  g: {
    headers: ["20 kW", "30 kW"],
    rows: [
      { type: "group", label: "Dimensions" },
      { type: "spec", label: "Available Beds", values: ["4020 / 6020 / 6025", "4020 / 6020 / 6025 / 8025"] },
      { type: "group", label: "Performance" },
      { type: "spec", label: "Laser Source", values: ["Raycus 20 kW", "Raycus 30 kW"] },
      { type: "spec", label: "Positioning Accuracy", values: ["±0.05 mm", "±0.05 mm"] },
      { type: "spec", label: "Voltage", values: ["380V 3PH 50/60Hz", "380V 3PH 50/60Hz"] },
      { type: "group", label: "Cutting Ability" },
      { type: "spec", label: "Carbon Steel", values: ["up to 50 mm", "up to 60 mm"] },
      { type: "spec", label: "Stainless Steel", values: ["up to 40 mm", "up to 50 mm"] },
      { type: "spec", label: "Aluminum", values: ["up to 25 mm", "up to 30 mm"] },
      { type: "spec", label: "Brass / Copper", values: ["up to 12 mm", "up to 16 mm"] },
      { type: "group", label: "Standard Features" },
      { type: "check", label: "Raycus Fiber Laser Source" },
      { type: "check", label: "HIWIN Linear Rails" },
      { type: "check", label: "CypCut CNC Controller" },
      { type: "check", label: "Fuji Bus Servo Drives" },
      { type: "check", label: "Tongfei Water Chiller" },
    ],
    upgrades: ["Dual-Pallet Exchange Table", "Auto-Loading System", "Auto-Focus Cutting Head", "Fume Purifier"],
  },
  pe: {
    headers: ["PE-1313", "PE-3015"],
    rows: [
      { type: "group", label: "Dimensions" },
      { type: "spec", label: "Working Area", values: ["1300 × 1300 mm", "3000 × 1500 mm"] },
      { type: "spec", label: "Bed Size (Imperial)", values: ["4′ × 4′", "5′ × 10′"] },
      { type: "group", label: "Performance" },
      { type: "spec", label: "Laser Power", values: ["1.5 / 3 kW", "1.5 / 3 kW"] },
      { type: "spec", label: "Positioning Accuracy", values: ["±0.05 mm", "±0.05 mm"] },
      { type: "spec", label: "Laser Safety Class", values: ["Class 1", "Class 1"] },
      { type: "spec", label: "Voltage", values: ["380V 3PH 50/60Hz", "380V 3PH 50/60Hz"] },
      { type: "group", label: "Cutting Ability" },
      { type: "spec", label: "Carbon Steel", values: ["up to 16 mm", "up to 16 mm"] },
      { type: "spec", label: "Stainless Steel", values: ["up to 6 mm", "up to 6 mm"] },
      { type: "group", label: "Safety Features" },
      { type: "check", label: "Full Laser Safety Enclosure" },
      { type: "check", label: "Hardware-Interlocked Safety Doors" },
      { type: "spec", label: "Laser Eyewear Required", values: ["Not Required", "Not Required"] },
      { type: "check", label: "Raycus Fiber Laser Source" },
      { type: "check", label: "HIWIN Linear Rails" },
      { type: "check", label: "CypCut CNC Controller" },
    ],
    upgrades: ["Air Conditioner", "Smoke Purifier", "Air Compressor", "Voltage Regulator"],
  },
  se: {
    headers: ["SE 3 kW", "SE 6 kW"],
    rows: [
      { type: "group", label: "Dimensions" },
      { type: "spec", label: "Working Area", values: ["3000 × 1500 mm", "3000 × 1500 mm"] },
      { type: "group", label: "Performance" },
      { type: "spec", label: "Laser Power", values: ["3 kW", "6 kW"] },
      { type: "spec", label: "Positioning Accuracy", values: ["±0.05 mm", "±0.05 mm"] },
      { type: "spec", label: "Laser Safety Class", values: ["Class 1", "Class 1"] },
      { type: "spec", label: "Fume Extraction Port", values: ["6″ duct", "6″ duct"] },
      { type: "spec", label: "Voltage", values: ["380V 3PH 50/60Hz", "380V 3PH 50/60Hz"] },
      { type: "group", label: "Cutting Ability" },
      { type: "spec", label: "Carbon Steel", values: ["up to 16 mm", "up to 20 mm"] },
      { type: "spec", label: "Stainless Steel", values: ["up to 6 mm", "up to 12 mm"] },
      { type: "spec", label: "Aluminum", values: ["up to 6 mm", "up to 10 mm"] },
      { type: "group", label: "Safety Features" },
      { type: "check", label: "Full Laser Safety Enclosure" },
      { type: "check", label: "Hardware-Redundant Door Interlocks" },
      { type: "check", label: "Integrated Fume Extraction Port" },
      { type: "check", label: "Raycus Fiber Laser Source" },
      { type: "check", label: "HIWIN Linear Rails" },
      { type: "check", label: "CypCut CNC Controller" },
    ],
    upgrades: ["Auto-Loading System", "Independent Control Cabinet", "Air Conditioner", "Smoke Purifier"],
  },
};

// ─── Model content (bilingual) ─────────────────────────────────────────────

const MODELS: Record<"en" | "es", Model[]> = {
  en: [
    {
      id: "ea", series: "EA Series", tagline: "Entry Production", power: "1.5–3 kW", badge: "Most Accessible",
      image: "/images/SHEET/EA series/main 3015  (1).png",
      description: "The VTM-EA is the right starting point for job shops and light-to-medium production environments. Single-pallet open frame, three standard bed sizes, and Raycus power from 1.5 to 3 kW.",
      bestFor: ["Job shops entering fiber laser", "Light to medium sheet metal", "Stainless and aluminum under ¼\"", "First fiber laser investment"],
      specs: SPECS.ea,
    },
    {
      id: "b", series: "B Series", tagline: "Production Workhorse", power: "3–12 kW", badge: "Most Popular",
      image: "/images/fiber-laser-feature-03-power.png",
      description: "The VTM-B is built for continuous production at the widest range of material thicknesses and sizes. From 3 kW for thin sheet to 12 kW for 1\"+ mild steel and ¾\" stainless, in beds up to 6′×20′.",
      bestFor: ["High-throughput fabrication", "Broad thickness range", "Contract manufacturers", "Multi-shift operations"],
      specs: SPECS.b,
    },
    {
      id: "fe", series: "FE Series", tagline: "Exchange Table", power: "3–12 kW", badge: "Highest Throughput",
      image: "/images/fiber-laser-feature-04-exchange-table.png",
      description: "The VTM-FE pairs the B-series cutting platform with a dual-pallet exchange table as standard. Load the next blank while the machine cuts the current sheet. Sub-15-second pallet changeover.",
      bestFor: ["High-volume production runs", "Lights-out / unattended operation", "Minimizing cost-per-part", "Shops that can't afford idle time"],
      specs: SPECS.fe,
    },
    {
      id: "g", series: "G Series", tagline: "Heavy Plate", power: "20–30 kW", badge: "Thickest Cuts",
      image: "/images/fiber-laser-feature-03-power.png",
      description: "The VTM-G is designed for structural fabricators and heavy plate shops. 20 and 30 kW Raycus sources cut mild steel to 2\"+, stainless to 1.5\", at speeds that make plasma cutting obsolete.",
      bestFor: ["Structural steel fabrication", "Heavy plate over 1\"", "Replacing plasma cutting", "High-power copper and brass"],
      specs: SPECS.g,
    },
    {
      id: "pe", series: "PE Series", tagline: "Enclosed Compact", power: "1.5–3 kW", badge: "Class 1 Safety",
      image: "/images/fiber-laser-feature-02-accuracy.png",
      description: "The VTM-PE adds a full safety enclosure to the EA-series platform — achieving Laser Safety Class 1 with hardware-interlocked doors. No laser eyewear required for operators or bystanders.",
      bestFor: ["Mixed-use facilities and R&D labs", "Training and prototyping", "Adjacent office areas", "Strict visitor access policies"],
      specs: SPECS.pe,
    },
    {
      id: "se", series: "SE Series", tagline: "Enclosed Industrial", power: "3–6 kW", badge: "Class 1 Industrial",
      image: "/images/fiber-laser-feature-05-controller.png",
      description: "The VTM-SE is the full industrial enclosed format — Laser Safety Class 1, integrated 6″ fume extraction port, and hardware-redundant door interlocks on a production-scale bed.",
      bestFor: ["Class 1 required by facility code", "Medical device and aerospace", "ISO-certified production", "Strict safety regulations"],
      specs: SPECS.se,
    },
  ],
  es: [
    {
      id: "ea", series: "Serie EA", tagline: "Producción de Entrada", power: "1.5–3 kW", badge: "Más Accesible",
      image: "/images/SHEET/EA series/main 3015  (1).png",
      description: "La VTM-EA es el punto de partida ideal para talleres y entornos de producción ligera a media. Bastidor abierto de paleta individual, tres tamaños de mesa estándar y potencia Raycus de 1.5 a 3 kW.",
      bestFor: ["Talleres que inician con láser de fibra", "Chapa ligera a media", "Inoxidable y aluminio bajo 6 mm", "Primera inversión en láser de fibra"],
      specs: SPECS.ea,
    },
    {
      id: "b", series: "Serie B", tagline: "Caballo de Batalla", power: "3–12 kW", badge: "Más Popular",
      image: "/images/fiber-laser-feature-03-power.png",
      description: "La VTM-B está diseñada para producción continua en la mayor gama de espesores y tamaños. De 3 kW para chapa fina a 12 kW para acero dulce de 25 mm+ e inoxidable de 20 mm, en mesas de hasta 6′×20′.",
      bestFor: ["Fabricación de alto rendimiento", "Amplio rango de espesores", "Fabricantes por contrato", "Operaciones de múltiples turnos"],
      specs: SPECS.b,
    },
    {
      id: "fe", series: "Serie FE", tagline: "Mesa de Intercambio", power: "3–12 kW", badge: "Mayor Rendimiento",
      image: "/images/fiber-laser-feature-04-exchange-table.png",
      description: "La VTM-FE combina la plataforma de la serie B con una mesa de intercambio de doble paleta de serie. Cargue la siguiente chapa mientras la máquina corta la actual. Cambio en menos de 15 segundos.",
      bestFor: ["Producciones de alto volumen", "Operación desatendida", "Minimizar costo por pieza", "Talleres que no toleran tiempo muerto"],
      specs: SPECS.fe,
    },
    {
      id: "g", series: "Serie G", tagline: "Placa Gruesa", power: "20–30 kW", badge: "Cortes más Gruesos",
      image: "/images/fiber-laser-feature-03-power.png",
      description: "La VTM-G está diseñada para fabricantes de acero estructural y talleres de placa gruesa. Fuentes Raycus de 20 y 30 kW cortan acero dulce a 50 mm+ e inoxidable a 40 mm.",
      bestFor: ["Fabricación de acero estructural", "Placa gruesa superior a 25 mm", "Sustitución del corte por plasma", "Cobre y latón de alta potencia"],
      specs: SPECS.g,
    },
    {
      id: "pe", series: "Serie PE", tagline: "Encapsulado Compacto", power: "1.5–3 kW", badge: "Seguridad Clase 1",
      image: "/images/fiber-laser-feature-02-accuracy.png",
      description: "La VTM-PE añade un encapsulado de seguridad completo a la plataforma EA — alcanzando Clase 1 con puertas de enclavamiento de hardware. No se requieren gafas láser para operadores.",
      bestFor: ["Instalaciones de uso mixto y I+D", "Capacitación y prototipado", "Áreas de oficina adyacentes", "Políticas estrictas de acceso"],
      specs: SPECS.pe,
    },
    {
      id: "se", series: "Serie SE", tagline: "Encapsulado Industrial", power: "3–6 kW", badge: "Industrial Clase 1",
      image: "/images/fiber-laser-feature-05-controller.png",
      description: "La VTM-SE es el formato encapsulado industrial completo — Clase 1, puerto de extracción de 6″ integrado y enclavamientos de puerta con redundancia hardware en mesa de escala productiva.",
      bestFor: ["Clase 1 exigida por código o seguro", "Dispositivos médicos y aeroespacial", "Producción con certificación ISO", "Normativa de seguridad estricta"],
      specs: SPECS.se,
    },
  ],
};

const LABELS = {
  en: {
    productLine: "Product Line",
    chooseYourSeries: "Choose Your Series",
    subheadline: "Six machine families. Same Raycus source, HIWIN rails, and CypCut CNC — configured for different production requirements.",
    bestFor: "Best for",
    quote: "Request a Quote",
    specsSection: "Technical Specifications",
    specsHeadline: "Full Specs",
    upgrades: "Available Upgrades",
  },
  es: {
    productLine: "Línea de Productos",
    chooseYourSeries: "Elija su Serie",
    subheadline: "Seis familias de máquinas. La misma fuente Raycus, guías HIWIN y CNC CypCut — configuradas para diferentes requisitos de producción.",
    bestFor: "Ideal para",
    quote: "Solicitar Cotización",
    specsSection: "Especificaciones Técnicas",
    specsHeadline: "Especificaciones Completas",
    upgrades: "Mejoras Disponibles",
  },
};

// ─── Apple-style specs renderer ────────────────────────────────────────────

function AppleSpecs({ specs, locale }: { specs: ModelSpecs; locale: "en" | "es" }) {
  const labels = LABELS[locale];
  const colCount = specs.headers.length;
  const gridCols = `2fr repeat(${colCount}, 1fr)`;

  return (
    <div>
      {/* Column headers */}
      <div
        className="grid border-b border-vtm-gray-border pb-6 mb-2"
        style={{ gridTemplateColumns: gridCols }}
      >
        <div /> {/* label column spacer */}
        {specs.headers.map((h) => (
          <div key={h} className="px-4 text-center">
            <p className="font-headline font-bold text-vtm-dark text-lg md:text-xl">{h}</p>
          </div>
        ))}
      </div>

      {/* Rows */}
      <div>
        {specs.rows.map((row, i) => {
          if (row.type === "group") {
            return (
              <div
                key={`${row.label}-${i}`}
                className="py-3 px-0 mt-4 mb-1"
              >
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-vtm-gray-mid">
                  {row.label}
                </p>
              </div>
            );
          }

          if (row.type === "check") {
            return (
              <div
                key={`${row.label}-${i}`}
                className="grid border-b border-vtm-gray-border/60 py-3"
                style={{ gridTemplateColumns: gridCols }}
              >
                <p className="text-sm text-vtm-gray-mid pr-4">{row.label}</p>
                {Array.from({ length: colCount }).map((_, j) => (
                  <div key={j} className="flex justify-center items-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-label="Included">
                      <circle cx="9" cy="9" r="8.5" stroke="#e11d2b" strokeOpacity="0.2" />
                      <path d="M5 9l3 3 5-5" stroke="#e11d2b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ))}
              </div>
            );
          }

          // type === "spec"
          return (
            <div
              key={`${row.label}-${i}`}
              className="grid border-b border-vtm-gray-border/60 py-3"
              style={{ gridTemplateColumns: gridCols }}
            >
              <p className="text-sm text-vtm-gray-mid pr-4">{row.label}</p>
              {(row.values ?? []).map((v, j) => (
                <p key={j} className="text-sm font-semibold text-vtm-dark text-center px-2">
                  {v}
                </p>
              ))}
            </div>
          );
        })}
      </div>

      {/* Upgrades */}
      {specs.upgrades.length > 0 && (
        <div className="mt-8 pt-6 border-t border-vtm-gray-border">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-vtm-gray-mid mb-3">
            {labels.upgrades}
          </p>
          <div className="flex flex-wrap gap-2">
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

// ─── Main component ────────────────────────────────────────────────────────

export function ModelBrowserWithSpecs({ locale }: { locale: "en" | "es" }) {
  const models = MODELS[locale];
  const labels = LABELS[locale];
  const [selectedId, setSelectedId] = useState(models[1].id);
  const selected = models.find((m) => m.id === selectedId)!;

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {models.map((model) => {
              const isSelected = model.id === selectedId;
              return (
                <button
                  key={model.id}
                  onClick={() => setSelectedId(model.id)}
                  className={`group relative text-left border-2 transition-all duration-200 overflow-hidden focus:outline-none ${
                    isSelected ? "border-vtm-red" : "border-vtm-gray-border hover:border-vtm-dark"
                  }`}
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-vtm-gray-light">
                    <Image
                      src={model.image}
                      alt={model.series}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 17vw"
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
          <div key={selected.id} className="border-t border-vtm-gray-border pt-8 grid md:grid-cols-2 gap-8 items-start">
            {/* Left: 360 viewer for EA, description for others */}
            {selected.id === "ea" ? (
              <ImageGallery
                images={EA_FRAMES}
                alt="VTM-EA Series Fiber Laser Cutting Machine"
              />
            ) : (
              <div>
                <p className="font-headline text-2xl font-bold text-vtm-dark mb-1">{selected.series}</p>
                <p className="text-vtm-gray-mid text-sm mb-4 leading-relaxed">{selected.description}</p>
                <Button href={`/quote?machine=fiber-laser-${selected.id}`} variant="primary" size="sm">
                  {labels.quote}
                </Button>
              </div>
            )}

            {/* Right: for EA show text + bestFor, for others just bestFor */}
            <div>
              {selected.id === "ea" && (
                <div className="mb-6">
                  <p className="font-headline text-2xl font-bold text-vtm-dark mb-1">{selected.series}</p>
                  <p className="text-vtm-gray-mid text-sm mb-4 leading-relaxed">{selected.description}</p>
                  <Button href={`/quote?machine=fiber-laser-${selected.id}`} variant="primary" size="sm">
                    {labels.quote}
                  </Button>
                </div>
              )}
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
            </div>
          </div>
        </div>
      </section>

      {/* ── Apple-style Specs Section ────────────────────────────── */}
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
            <AppleSpecs specs={selected.specs} locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
