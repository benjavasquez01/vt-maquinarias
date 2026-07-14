"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { MobileScrollRail } from "@/components/ui/MobileScrollRail";

const EA_FRAMES = [
  "/images/SHEET/EA series/main 3015  (1).webp",
  "/images/SHEET/EA series/3015  (3).webp",
  "/images/SHEET/EA series/3015  (4).webp",
  "/images/SHEET/EA series/3015  (6).webp",
  "/images/SHEET/EA series/3015  (7).webp",
  "/images/SHEET/EA series/3015  (8).webp",
];

const PE_FRAMES = [
  "/images/SHEET/PE Series/1.webp",
  "/images/SHEET/PE Series/2.webp",
  "/images/SHEET/PE Series/3.webp",
  "/images/SHEET/PE Series/4.webp",
  "/images/SHEET/PE Series/5.webp",
  "/images/SHEET/PE Series/6.webp",
  "/images/SHEET/PE Series/7.webp",
  "/images/SHEET/PE Series/8.webp",
];

const SE_FRAMES = [
  "/images/SHEET/SE Series/1.webp",
  "/images/SHEET/SE Series/2.webp",
  "/images/SHEET/SE Series/3.webp",
  "/images/SHEET/SE Series/4.webp",
];

const L_FRAMES = [
  "/images/SHEET/L Series/1.webp",
  "/images/SHEET/L Series/2.webp",
  "/images/SHEET/L Series/3.webp",
  "/images/SHEET/L Series/4.webp",
  "/images/SHEET/L Series/5.webp",
  "/images/SHEET/L Series/6.webp",
];

const TT_FRAMES = [
  "/images/SHEET/TT Series/1.webp",
  "/images/SHEET/TT Series/2.webp",
  "/images/SHEET/TT Series/3.webp",
  "/images/SHEET/TT Series/4.webp",
  "/images/SHEET/TT Series/5.webp",
];

const MI_FRAMES = [
  "/images/SHEET/Mi Series/mini.107.webp",
  "/images/SHEET/Mi Series/mini.108.webp",
  "/images/SHEET/Mi Series/mini.109.webp",
  "/images/SHEET/Mi Series/mini.110.webp",
];

const SERIES_FRAMES: Record<string, string[]> = {
  ea: EA_FRAMES,
  pe: PE_FRAMES,
  se: SE_FRAMES,
  l: L_FRAMES,
  tt: TT_FRAMES,
  mi: MI_FRAMES,
};

// ─── Types ─────────────────────────────────────────────────────────────────

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
  imageFit?: "cover" | "contain";
  description: string;
  bestFor: string[];
  specs: ModelSpecs;
};

// ─── Specs data ────────────────────────────────────────────────────────────

const SPECS: Record<string, ModelSpecs> = {
  tt: {
    headers: ["VTM-3015TT", "VTM-4020TT"],
    rows: [
      { type: "spec", label: "Área de Trabajo",
        metric:   ["3000 × 1500 mm",  "4000 × 2000 mm"],
        imperial: ["5' × 10'",        "6.6' × 13.1'"] },
      { type: "spec", label: "Recorrido X / Y / Z",
        metric:   ["1520 × 3100 × 100 mm",  "2040 × 4050 × 100 mm"],
        imperial: ["60\" × 122\" × 4\"",    "80\" × 159\" × 4\""] },
      { type: "spec", label: "Potencia Láser",
        metric:   ["2–50 kW options","2–50 kW options"],
        imperial: ["2–50 kW options","2–50 kW options"] },
      { type: "spec", label: "Aceleración Máxima",
        metric:   ["2 G","2 G"],
        imperial: ["2 G","2 G"] },
      { type: "spec", label: "Precisión de Posicionamiento",
        metric:   ["±0.03 mm","±0.03 mm"],
        imperial: ["±0.001\"","±0.001\""] },
      { type: "spec", label: "Voltaje",
        metric:   ["380V 3PH 50/60Hz","380V 3PH 50/60Hz"],
        imperial: ["380V 3PH 50/60Hz","380V 3PH 50/60Hz"] },
      { type: "spec", label: "Acero al Carbono",
        metric:   ["1 – 80 mm",        "1 – 80 mm"],
        imperial: ["0.04\" – 3-1/8\"", "0.04\" – 3-1/8\""] },
      { type: "spec", label: "Acero Inoxidable",
        metric:   ["1 – 70 mm",        "1 – 70 mm"],
        imperial: ["0.04\" – 2-3/4\"", "0.04\" – 2-3/4\""] },
      { type: "spec", label: "Aluminio",
        metric:   ["1 – 60 mm",        "1 – 60 mm"],
        imperial: ["0.04\" – 2-3/8\"", "0.04\" – 2-3/8\""] },
      { type: "spec", label: "Latón",
        metric:   ["1 – 20 mm",       "1 – 20 mm"],
        imperial: ["0.04\" – 0.79\"", "0.04\" – 0.79\""] },
    ],
    features: [],
    upgrades: ["Aire Acondicionado", "Extractor de Humo", "Compresor de Aire", "Estabilizador de Voltaje", "Cortina de Luz de Seguridad", "Interruptor de Protección de Puerta"],
  },
  mi: {
    headers: ["VTM-6060Mi"],
    rows: [
      { type: "spec", label: "Área de Trabajo",
        metric:   ["600 × 600 mm"],
        imperial: ["2' × 2'"] },
      { type: "spec", label: "Recorrido X / Y / Z",
        metric:   ["600 × 600 × 100 mm"],
        imperial: ["24\" × 24\" × 4\""] },
      { type: "spec", label: "Potencia Láser",
        metric:   ["1 / 1.5 / 2 / 3 / 6 kW"],
        imperial: ["1 / 1.5 / 2 / 3 / 6 kW"] },
      { type: "spec", label: "Aceleración Máxima",
        metric:   ["1.5 G"],
        imperial: ["1.5 G"] },
      { type: "spec", label: "Precisión de Posicionamiento",
        metric:   ["±0.008 mm"],
        imperial: ["±0.0003\""] },
      { type: "spec", label: "Dimensiones de la Máquina",
        metric:   ["1480 × 1480 × 2050 mm"],
        imperial: ["58.3\" × 58.3\" × 80.7\""] },
      { type: "spec", label: "Voltaje",
        metric:   ["380V 3PH 50/60Hz"],
        imperial: ["380V 3PH 50/60Hz"] },
    ],
    features: [],
    upgrades: ["Aire Acondicionado", "Extractor de Humo", "Compresor de Aire", "Estabilizador de Voltaje"],
  },
  ea: {
    headers: ["VTM-3015A", "VTM-3015Pro", "VTM-6015Pro", "VTM-4020Pro", "VTM-6025Pro", "VTM-12025Pro"],
    rows: [
      { type: "spec", label: "Área de Trabajo",
        metric:   ["3000 × 1500 mm", "3000 × 1500 mm", "6000 × 1500 mm", "4000 × 2000 mm", "6000 × 2000 mm", "6000 × 2500 mm"],
        imperial: ["5' × 10'",       "5' × 10'",       "5' × 20'",       "6.6' × 13.1'",   "6.6' × 19.7'",   "8.2' × 19.7'"] },
      { type: "spec", label: "Recorrido X / Y / Z",
        metric:   ["1510 × 3050 × 100 mm", "1540 × 3050 × 50 mm", "1540 × 6050 × 50 mm", "2040 × 4050 × 50 mm", "2040 × 6050 × 50 mm", "2510 × 6150 × 50 mm"],
        imperial: ["59\" × 120\" × 4\"",   "61\" × 120\" × 2\"",  "61\" × 238\" × 2\"",  "80\" × 159\" × 2\"",  "80\" × 238\" × 2\"",  "99\" × 242\" × 2\""] },
      { type: "spec", label: "Potencia Láser",
        metric:   ["1500 W", "3 / 6 / 12 kW", "3 / 6 / 12 kW", "3 / 6 / 12 kW", "3 / 6 / 12 kW", "3 / 6 / 12 kW"],
        imperial: ["1500 W", "3 / 6 / 12 kW", "3 / 6 / 12 kW", "3 / 6 / 12 kW", "3 / 6 / 12 kW", "3 / 6 / 12 kW"] },
      { type: "spec", label: "Aceleración Máxima",
        metric:   ["1 G", "1.5 G", "1.5 G", "1.5 G", "1.5 G", "1.5 G"],
        imperial: ["1 G", "1.5 G", "1.5 G", "1.5 G", "1.5 G", "1.5 G"] },
      { type: "spec", label: "Precisión de Posicionamiento",
        metric:   ["±0.03 mm", "±0.05 mm", "±0.05 mm", "±0.05 mm", "±0.05 mm", "±0.05 mm"],
        imperial: ["±0.001\"", "±0.002\"", "±0.002\"", "±0.002\"", "±0.002\"", "±0.002\""] },
      { type: "spec", label: "Voltaje",
        metric:   ["380V 3PH 50/60Hz", "380V 3PH 50/60Hz", "380V 3PH 50/60Hz", "380V 3PH 50/60Hz", "380V 3PH 50/60Hz", "380V 3PH 50/60Hz"],
        imperial: ["380V 3PH 50/60Hz", "380V 3PH 50/60Hz", "380V 3PH 50/60Hz", "380V 3PH 50/60Hz", "380V 3PH 50/60Hz", "380V 3PH 50/60Hz"] },
      { type: "spec", label: "Acero al Carbono",
        metric:   ["0.8 – 12 mm",     "1 – 35 mm",        "1 – 35 mm",        "1 – 35 mm",        "1 – 35 mm",        "1 – 35 mm"],
        imperial: ["1/32\" – 0.47\"", "0.04\" – 1-3/8\"", "0.04\" – 1-3/8\"", "0.04\" – 1-3/8\"", "0.04\" – 1-3/8\"", "0.04\" – 1-3/8\""] },
      { type: "spec", label: "Acero Inoxidable",
        metric:   ["0.8 – 5 mm",      "1 – 35 mm",        "1 – 35 mm",        "1 – 35 mm",        "1 – 35 mm",        "1 – 35 mm"],
        imperial: ["1/32\" – 0.20\"", "0.04\" – 1-3/8\"", "0.04\" – 1-3/8\"", "0.04\" – 1-3/8\"", "0.04\" – 1-3/8\"", "0.04\" – 1-3/8\""] },
      { type: "spec", label: "Aluminio",
        metric:   ["—", "1 – 30 mm",          "1 – 30 mm",          "1 – 30 mm",          "1 – 30 mm",          "1 – 30 mm"],
        imperial: ["—", "0.04\" – 1-3/16\"", "0.04\" – 1-3/16\"", "0.04\" – 1-3/16\"", "0.04\" – 1-3/16\"", "0.04\" – 1-3/16\""] },
      { type: "spec", label: "Latón",
        metric:   ["—", "1 – 16 mm",      "1 – 16 mm",      "1 – 16 mm",      "1 – 16 mm",      "1 – 16 mm"],
        imperial: ["—", "0.04\" – 5/8\"", "0.04\" – 5/8\"", "0.04\" – 5/8\"", "0.04\" – 5/8\"", "0.04\" – 5/8\""] },
    ],
    features: [],
    upgrades: ["Fuji motors", "Taiwan YYC rack", "Japan Shimpo reducer", "Auto-focus cutting head", "Auto-nesting", "Air conditioner", "Smoke extractor", "Voltage regulator", "16 bar screw compressor optional"],
  },
  l: {
    headers: ["VTM-12025L", "VTM-14035L"],
    rows: [
      { type: "spec", label: "Área de Trabajo",
        metric:   ["12000 × 2500 mm",   "14000 × 3500 mm"],
        imperial: ["8.2' × 39.4'",      "11.5' × 45.9'"] },
      { type: "spec", label: "Recorrido X / Y / Z",
        metric:   ["2550 × 12250 × 260 mm",    "3550 × 14250 × 260 mm"],
        imperial: ["100\" × 482\" × 10\"",     "140\" × 561\" × 10\""] },
      { type: "spec", label: "Potencia Láser",
        metric:   ["12 / 20 / 30 / 40 / 50 kW+", "12 / 20 / 30 / 40 / 50 kW+"],
        imperial: ["12 / 20 / 30 / 40 / 50 kW+", "12 / 20 / 30 / 40 / 50 kW+"] },
      { type: "spec", label: "Aceleración Máxima",
        metric:   ["1 G","1 G"],
        imperial: ["1 G","1 G"] },
      { type: "spec", label: "Precisión de Posicionamiento",
        metric:   ["±0.03 mm","±0.03 mm"],
        imperial: ["±0.001\"", "±0.001\""] },
      { type: "spec", label: "Voltaje",
        metric:   ["380V 3PH 50/60Hz","380V 3PH 50/60Hz"],
        imperial: ["380V 3PH 50/60Hz","380V 3PH 50/60Hz"] },
      { type: "spec", label: "Acero al Carbono",
        metric:   ["1 – 80 mm",         "1 – 80 mm"],
        imperial: ["0.04\" – 3-1/8\"",  "0.04\" – 3-1/8\""] },
      { type: "spec", label: "Acero Inoxidable",
        metric:   ["1 – 70 mm",         "1 – 70 mm"],
        imperial: ["0.04\" – 2-3/4\"",  "0.04\" – 2-3/4\""] },
      { type: "spec", label: "Aluminio",
        metric:   ["1 – 60 mm",         "1 – 60 mm"],
        imperial: ["0.04\" – 2-3/8\"",  "0.04\" – 2-3/8\""] },
      { type: "spec", label: "Latón",
        metric:   ["1 – 20 mm",       "1 – 20 mm"],
        imperial: ["0.04\" – 0.79\"", "0.04\" – 0.79\""] },
    ],
    features: [],
    upgrades: ["Air conditioner", "Smoke extractor", "Voltage regulator", "Laser safety sensor", "16 bar screw compressor optional", "UPS backup unit optional"],
  },
  pe: {
    headers: ["VTM-3015PE", "VTM-6015PE", "VTM-4020PE", "VTM-6025PE", "VTM-12025PE"],
    rows: [
      { type: "spec", label: "Área de Trabajo",
        metric:   ["3000 × 1500 mm",  "6000 × 1500 mm",  "4000 × 2000 mm",    "6000 × 2500 mm",    "12000 × 2500 mm"],
        imperial: ["5' × 10'",        "5' × 20'",        "6.6' × 13.1'",      "8.2' × 19.7'",      "8.2' × 39.4'"] },
      { type: "spec", label: "Recorrido X / Y / Z",
        metric:   ["1520 × 3100 × 100 mm",  "1520 × 6050 × 100 mm",  "2040 × 4050 × 100 mm",  "2510 × 6100 × 260 mm",  "2510 × 12500 × 260 mm"],
        imperial: ["60\" × 122\" × 4\"",    "60\" × 238\" × 4\"",    "80\" × 159\" × 4\"",    "99\" × 240\" × 10\"",   "99\" × 492\" × 10\""] },
      { type: "spec", label: "Potencia Láser",
        metric:   ["3 / 6 / 12 / 20 / 30 / 40 / 50 kW", "3 / 6 / 12 / 20 / 30 / 40 / 50 kW", "3 / 6 / 12 / 20 / 30 / 40 / 50 kW", "3 / 6 / 12 / 20 / 30 / 40 / 50 kW", "3 / 6 / 12 / 20 / 30 / 40 / 50 kW"],
        imperial: ["3 / 6 / 12 / 20 / 30 / 40 / 50 kW", "3 / 6 / 12 / 20 / 30 / 40 / 50 kW", "3 / 6 / 12 / 20 / 30 / 40 / 50 kW", "3 / 6 / 12 / 20 / 30 / 40 / 50 kW", "3 / 6 / 12 / 20 / 30 / 40 / 50 kW"] },
      { type: "spec", label: "Aceleración Máxima",
        metric:   ["2 G","2 G","2 G","2 G","2 G"],
        imperial: ["2 G","2 G","2 G","2 G","2 G"] },
      { type: "spec", label: "Precisión de Posicionamiento",
        metric:   ["±0.03 mm","±0.03 mm","±0.03 mm","±0.03 mm","±0.03 mm"],
        imperial: ["±0.001\"", "±0.001\"", "±0.001\"", "±0.001\"", "±0.001\""] },
      { type: "spec", label: "Voltaje",
        metric:   ["380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz"],
        imperial: ["380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz"] },
      { type: "spec", label: "Acero al Carbono",
        metric:   ["1 – 80 mm",         "1 – 80 mm",         "1 – 80 mm",         "1 – 80 mm",         "1 – 80 mm"],
        imperial: ["0.04\" – 3-1/8\"",  "0.04\" – 3-1/8\"",  "0.04\" – 3-1/8\"",  "0.04\" – 3-1/8\"",  "0.04\" – 3-1/8\""] },
      { type: "spec", label: "Acero Inoxidable",
        metric:   ["1 – 70 mm",         "1 – 70 mm",         "1 – 70 mm",         "1 – 70 mm",         "1 – 70 mm"],
        imperial: ["0.04\" – 2-3/4\"",  "0.04\" – 2-3/4\"",  "0.04\" – 2-3/4\"",  "0.04\" – 2-3/4\"",  "0.04\" – 2-3/4\""] },
      { type: "spec", label: "Aluminio",
        metric:   ["1 – 60 mm",         "1 – 60 mm",         "1 – 60 mm",         "1 – 60 mm",         "1 – 60 mm"],
        imperial: ["0.04\" – 2-3/8\"",  "0.04\" – 2-3/8\"",  "0.04\" – 2-3/8\"",  "0.04\" – 2-3/8\"",  "0.04\" – 2-3/8\""] },
      { type: "spec", label: "Latón",
        metric:   ["1 – 20 mm",       "1 – 20 mm",       "1 – 20 mm",       "1 – 20 mm",       "1 – 20 mm"],
        imperial: ["0.04\" – 0.79\"", "0.04\" – 0.79\"", "0.04\" – 0.79\"", "0.04\" – 0.79\"", "0.04\" – 0.79\""] },
    ],
    features: [],
    upgrades: ["Fuji servo motor", "Dual-pallet exchange table", "Radiation-safe enclosed body", "Air conditioner", "Smoke extractor", "Voltage regulator", "16 bar screw compressor optional"],
  },
  se: {
    headers: ["VTM-3015SE", "VTM-1315SE"],
    rows: [
      { type: "spec", label: "Área de Trabajo",
        metric:   ["3000 × 1500 mm",  "1300 × 1500 mm"],
        imperial: ["5' × 10'",        "4.3' × 4.9'"] },
      { type: "spec", label: "Recorrido X / Y / Z",
        metric:   ["1525 × 3050 × 260 mm",  "1325 × 1560 × 260 mm"],
        imperial: ["60\" × 120\" × 10\"",   "52\" × 61\" × 10\""] },
      { type: "spec", label: "Potencia Láser",
        metric:   ["1.5 / 3 / 6 kW",   "1.5 / 3 / 6 kW"],
        imperial: ["1.5 / 3 / 6 kW",   "1.5 / 3 / 6 kW"] },
      { type: "spec", label: "Aceleración Máxima",
        metric:   ["1.5 G","1.5 G"],
        imperial: ["1.5 G","1.5 G"] },
      { type: "spec", label: "Precisión de Posicionamiento",
        metric:   ["±0.03 mm","±0.03 mm"],
        imperial: ["±0.001\"", "±0.001\""] },
      { type: "spec", label: "Voltaje",
        metric:   ["380V 3PH 50/60Hz","380V 3PH 50/60Hz"],
        imperial: ["380V 3PH 50/60Hz","380V 3PH 50/60Hz"] },
      { type: "spec", label: "Acero al Carbono",
        metric:   ["1 – 25 mm",  "1 – 25 mm"],
        imperial: ["0.04\" – 1\"", "0.04\" – 1\""] },
      { type: "spec", label: "Acero Inoxidable",
        metric:   ["1 – 12 mm",    "1 – 12 mm"],
        imperial: ["0.04\" – 0.47\"", "0.04\" – 0.47\""] },
      { type: "spec", label: "Aluminio",
        metric:   ["1 – 8 mm",      "1 – 8 mm"],
        imperial: ["0.04\" – 5/16\"", "0.04\" – 5/16\""] },
      { type: "spec", label: "Latón",
        metric:   ["1 – 8 mm",      "1 – 8 mm"],
        imperial: ["0.04\" – 5/16\"", "0.04\" – 5/16\""] },
    ],
    features: [],
    upgrades: ["360° full protection", "Wireless operation", "Friendly intuitive control", "Air conditioner", "Smoke extractor", "Voltage regulator", "16 bar screw compressor optional"],
  },
};

// ─── Model content (bilingual) ─────────────────────────────────────────────

const MODELS: Record<"en" | "es", Model[]> = {
  en: [
    {
      id: "ea", series: "VTM-Pro Series", subtitle: "High Power Fiber Laser Cutting Machine", tagline: "High Power", power: "1.5–12 kW", badge: "High Power",
      image: "/images/SHEET/EA series/main 3015  (1).webp",
      description: "The VTM-Pro is a high-power fiber laser platform with a modern open-frame design, Spanish-friendly operation, auto-nesting, auto-focus cutting head, Fuji motors, Taiwan YYC rack, Japan Shimpo reducer, and a high-rigidity monolithic welded body engineered to reduce vibration and deformation.",
      bestFor: ["High-power sheet cutting from 3 to 12 kW", "Carbon steel and stainless steel up to 35 mm", "Aluminum up to 30 mm and brass/bronze up to 16 mm", "Workshops that need stable, repeatable production with auto-nesting"],
      specs: SPECS.ea,
    },
    {
      id: "se", series: "VTM-SE Series", subtitle: "Enclosed Single-Table Fiber Laser Cutting Machine", tagline: "Compact Safety", power: "1.5–6 kW", badge: "Radiation Safe",
      image: "/images/SHEET/SE Series/1.webp",
      description: "The VTM-SE is an enclosed single-table fiber laser cutting machine with compact design, high safety, and 360° protection. Its closed cabin isolates the cutting process, reducing exposure to laser radiation, fumes, and particles for cleaner, safer operation. Wireless operation and an intuitive control make day-to-day use more flexible and comfortable.",
      bestFor: ["Enclosed single-table cutting", "Compact workshops that require high safety", "Lower exposure to laser radiation, fumes, and particles", "Flexible operation with wireless control support"],
      specs: SPECS.se,
    },
    {
      id: "pe", series: "VTM-PE Series", subtitle: "Enclosed Dual-Pallet Fiber Laser Cutting Machine", tagline: "Fast Exchange", power: "3–50 kW", badge: "Radiation Safe",
      image: "/images/SHEET/PE Series/1.webp",
      description: "The VTM-PE is an enclosed dual-pallet fiber laser cutting machine for high-power production. Its closed body helps protect operators from laser radiation, while the fast exchange table minimizes downtime between loading, unloading, and cutting. Fuji servo motors provide high power, precise machine movement, and stable cutting accuracy.",
      bestFor: ["Radiation-safe enclosed cutting", "High-power production from 3 to 50 kW", "Fast table exchange to reduce downtime", "Carbon steel to 80 mm, stainless to 70 mm, aluminum to 60 mm"],
      specs: SPECS.pe,
    },
    {
      id: "l", series: "VTM-L Series", subtitle: "Heavy Duty Fiber Laser Cutting Machine", tagline: "High Power", power: "12–50 kW+", badge: "Heavy Duty",
      image: "/images/SHEET/L Series/1.webp",
      description: "The VTM-L is a Heavy Duty fiber laser cutting machine for high-power production, large thicknesses, and special formats. Its large cutting area is designed to process oversized plate with maximum precision and stability, making it ideal for heavy fabrication. The bevel auto-focus cutting head enables bevel cuts with automatic focal-point adjustment.",
      bestFor: ["Heavy fabrication and oversized plate formats", "High-power cutting from 12 to 50 kW+", "Carbon steel to 80 mm and stainless steel to 70 mm", "Efficient bevel cutting with auto-focus head"],
      specs: SPECS.l,
    },
    {
      id: "tt", series: "TT Series", subtitle: "Auto Loading & Unloading TransTower Laser Cutting Machine", tagline: "Tower Automation", power: "2–50 kW", badge: "Auto Loading",
      image: "/images/SHEET/TT Series/1.webp", imageFit: "contain",
      description: "The VTM-TT integrates a multi-shelf tower storage system with automated loading and unloading directly to the cutting table. Unattended production, maximum material utilization, and zero idle time between jobs.",
      bestFor: ["High-volume automated production", "Unattended / lights-out operation", "Tower storage material management", "Minimizing operator intervention"],
      specs: SPECS.tt,
    },
    {
      id: "mi", series: "Mi Series", subtitle: "Mini High Precision Fiber Laser Sheet Cutting Machine", tagline: "Compact Precision", power: "1–6 kW · ±0.008 mm", badge: "High Precision",
      image: "/images/SHEET/Mi Series/8.webp",
      description: "The VTM-Mi is a compact, high-precision fiber laser designed for intricate parts and tight tolerances. Small footprint, rigid frame, and fine-motion control deliver accuracy where full-size machines cannot.",
      bestFor: ["Intricate and small-format parts", "Tight-tolerance prototyping", "Limited floor space", "R&D and specialty fabrication"],
      specs: SPECS.mi,
    },
  ],
  es: [
    {
      id: "ea", series: "Serie VTM-Pro", subtitle: "Máquina Corte Láser Fibra High Power", tagline: "Alto Poder", power: "1.5–12 kW", badge: "High Power",
      image: "/images/SHEET/EA series/main 3015  (1).webp",
      description: "La VTM-Pro es una máquina de corte láser fibra High Power con diseño moderno, operación intuitiva en español, auto-nesting, cabezal auto-foco, motores Fuji Japón, cremallera YYC Taiwán, reductor Shimpo Japón y cuerpo monolítico electrosoldado de alta rigidez para minimizar vibraciones y deformaciones.",
      bestFor: ["Corte láser de alto poder de 3 a 12 kW", "Acero carbono e inoxidable hasta 35 mm", "Aluminio hasta 30 mm y bronce hasta 16 mm", "Talleres que necesitan producción estable, precisa y repetible con auto-nesting"],
      specs: SPECS.ea,
    },
    {
      id: "se", series: "Serie VTM-SE", subtitle: "Máquina Corte Láser Fibra Mesa Simple Cerrada", tagline: "Alta Seguridad", power: "1.5–6 kW", badge: "Libre de Radiación",
      image: "/images/SHEET/SE Series/1.webp",
      description: "La VTM-SE es una máquina de corte láser fibra de mesa simple cerrada, con alta seguridad, flexibilidad y diseño compacto. Su cabina cerrada entrega protección total 360°, aislando el proceso de corte para reducir la exposición a radiación láser, humos y partículas. La operación inalámbrica y el control amigable e intuitivo entregan mayor comodidad y flexibilidad al operador.",
      bestFor: ["Corte cerrado de mesa simple", "Talleres que buscan alta seguridad en formato compacto", "Menor exposición a radiación láser, humos y partículas", "Operación flexible con control inalámbrico e intuitivo"],
      specs: SPECS.se,
    },
    {
      id: "pe", series: "Serie VTM-PE", subtitle: "Máquina Corte Láser Fibra Doble Mesa Cerrada", tagline: "Ahorra Tiempo", power: "3–50 kW", badge: "Libre de Radiación",
      image: "/images/SHEET/PE Series/1.webp",
      description: "La VTM-PE es una máquina de corte láser fibra de doble mesa cerrada para producción de alta potencia. Su estructura cerrada ayuda a proteger al operador de la radiación láser, mientras el intercambio rápido de mesa minimiza tiempos muertos entre carga, descarga y corte. Incorpora servo motor japonés para movimiento preciso, alta potencia y excelente precisión de corte.",
      bestFor: ["Corte cerrado libre de radiación para el operador", "Producción de alta potencia de 3 a 50 kW", "Intercambio rápido para ahorrar tiempo y reducir inactividad", "Acero carbono hasta 80 mm, inoxidable hasta 70 mm, aluminio hasta 60 mm"],
      specs: SPECS.pe,
    },
    {
      id: "l", series: "Serie VTM-L", subtitle: "Máquina Corte Láser Fibra Heavy Duty", tagline: "Alta Potencia", power: "12–50 kW+", badge: "Formatos Especiales",
      image: "/images/SHEET/L Series/1.webp",
      description: "La VTM-L es una máquina de corte láser fibra Heavy Duty para alta potencia, corte eficiente, grandes espesores y formatos especiales. Su gran área de corte está diseñada para procesar planchas de gran formato con máxima precisión y estabilidad, convirtiéndose en una solución ideal para fabricación pesada. El cabezal de autofoco biselado permite realizar cortes multi-ángulo con ajuste automático del punto focal.",
      bestFor: ["Fabricación pesada y planchas de gran formato", "Corte de alta potencia de 12 a 50 kW+", "Acero carbono hasta 80 mm e inoxidable hasta 70 mm", "Corte biselado eficiente con cabezal de autofoco"],
      specs: SPECS.l,
    },
    {
      id: "tt", series: "Serie TT", subtitle: "Cortadora Láser con Torre de Carga y Descarga Automática", tagline: "Automatización Torre", power: "3–30 kW", badge: "Carga Automática",
      image: "/images/SHEET/TT Series/1.webp", imageFit: "contain",
      description: "La VTM-TT integra un sistema de almacenamiento en torre con carga y descarga automática directa a la mesa de corte. Producción desatendida, máximo aprovechamiento de material y cero tiempo muerto entre trabajos.",
      bestFor: ["Producción automatizada de alto volumen", "Operación desatendida", "Gestión de material en torre", "Mínima intervención del operador"],
      specs: SPECS.tt,
    },
    {
      id: "mi", series: "Serie Mi", subtitle: "Cortadora Láser de Plancha Mini de Alta Precisión", tagline: "Precisión Compacta", power: "1–6 kW", badge: "Alta Precisión",
      image: "/images/SHEET/Mi Series/8.webp",
      description: "La VTM-Mi es una cortadora láser de fibra compacta y de alta precisión diseñada para piezas intrincadas y tolerancias ajustadas. Huella pequeña, bastidor rígido y control de movimiento fino para resultados donde las máquinas de tamaño completo no pueden llegar.",
      bestFor: ["Piezas pequeñas e intrincadas", "Prototipado de alta tolerancia", "Espacio limitado en planta", "I+D y fabricación especializada"],
      specs: SPECS.mi,
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
    viewSpecs: "View Specs",
    specsSection: "Technical Specifications",
    specsHeadline: "Full Specs",
    upgrades: "Included / Components",
  },
  es: {
    productLine: "Línea de Productos",
    chooseYourSeries: "Elija su Serie",
    subheadline: "Seis familias de máquinas. La misma fuente Raycus, guías HIWIN y CNC CypCut — configuradas para diferentes requisitos de producción.",
    bestFor: "Ideal para",
    quote: "Solicitar Cotización",
    viewSpecs: "Ver Especificaciones",
    specsSection: "Especificaciones Técnicas",
    specsHeadline: "Especificaciones Completas",
    upgrades: "Incluye / Componentes",
  },
};

// ─── Specs card renderer ───────────────────────────────────────────────────

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

const UPGRADE_TRANSLATIONS_ES: Record<string, string> = {
  "Fuji motors": "Motores Fuji",
  "Taiwan YYC rack": "Cremallera YYC Taiwán",
  "Japan Shimpo reducer": "Reductor Shimpo Japón",
  "Auto-focus cutting head": "Cabezal de autofoco",
  "Auto-nesting": "Auto-nesting",
  "Air conditioner": "Aire acondicionado",
  "Smoke extractor": "Extractor de humos",
  "Voltage regulator": "Estabilizador de voltaje",
  "16 bar screw compressor optional": "Compresor de tornillo 16 bar (opcional)",
  "Fuji servo motor": "Servo motor Fuji",
  "Dual-pallet exchange table": "Doble mesa de intercambio",
  "Radiation-safe enclosed body": "Cabina cerrada libre de radiación",
  "360° full protection": "Protección total 360°",
  "Wireless operation": "Operación inalámbrica",
  "Friendly intuitive control": "Control amigable e intuitivo",
  "Laser safety sensor": "Sensor de seguridad láser",
  "UPS backup unit optional": "Unidad de respaldo UPS (opcional)",
};

function formatUpgradeLabel(upgrade: string, locale: "en" | "es") {
  if (locale !== "es") return upgrade;
  return UPGRADE_TRANSLATIONS_ES[upgrade] ?? upgrade;
}

function isOptionalUpgrade(label: string) {
  return /optional|opcional/i.test(label);
}

function AppleSpecs({
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
  const visible = useVisibleCols();
  const colCount = specs.headers.length;
  const hasCarousel = colCount > visible;

  // Infinite-loop carousel using clone-tape technique.
  // Track layout: [visible clones from end] [actual cols] [visible clones from start]
  // This means every transition is a smooth slide — the snap happens invisibly at loop boundaries.
  const clonesBefore = visible; // how many clone cols prepended
  const totalTrackCols = colCount + clonesBefore + visible;

  const mod = (n: number) => ((n % colCount) + colCount) % colCount;

  // col data index for each track slot
  const trackData: number[] = [
    ...Array.from({ length: clonesBefore }, (_, i) => mod(colCount - clonesBefore + i)),
    ...Array.from({ length: colCount }, (_, i) => i),
    ...Array.from({ length: visible }, (_, i) => i),
  ];

  // Each col = 1/totalTrackCols of track width = 1/visible of container width
  const colWidthPct = 100 / totalTrackCols; // % of track
  const trackWidthPct = (totalTrackCols / visible) * 100; // % of container

  // translateX to show actual col `p` at leftmost visible position (% of track itself)
  const trackXForPos = (p: number) => -((clonesBefore + p) * colWidthPct);

  const [pos, setPos] = useState(0);
  const posRef = useRef(0);
  const animatingRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Set initial transform without animation on mount and when specs change
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
              {u === "metric" ? "Métrico" : "Imperial"}
            </button>
          ))}
        </div>
      </div>

      {/* Static grid for series with ≤ VISIBLE columns */}
      <div className="md:hidden">
        <MobileScrollRail
          itemCount={colCount}
          ariaLabel="Especificaciones por modelo"
          indicator="bar"
          trackClassName="gap-2 pr-4"
        >
          {specs.headers.map((header, colIdx) => (
            <div key={header} className="w-[84%] flex-shrink-0 snap-start border-r border-vtm-gray-border px-3 pr-5">
              <div className="mb-6 border-b border-vtm-gray-border pb-6 text-left">
                <p className="font-headline text-xl font-bold tracking-normal text-vtm-dark">{header}</p>
              </div>
              <div className="flex flex-col gap-14">
                {specRows.map((row) => (
                  <div key={row.label} className="text-left">
                    <p className="mb-1 break-words font-headline text-lg font-bold leading-tight text-vtm-dark">
                      {row[unit][colIdx]}
                    </p>
                    <p className="text-xs tracking-wide text-vtm-gray-mid">{row.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </MobileScrollRail>
      </div>

      {!hasCarousel && (
        <div
          className="hidden gap-6 md:grid"
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

      {/* Carousel row: left arrow | viewport | right arrow */}
      {hasCarousel && <div className="hidden w-full max-w-full gap-4 overflow-visible md:flex">
        {/* Left arrow wrapper — stretches full track height so sticky works */}
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

        {/* Viewport — clips the sliding tape */}
        <div className="min-w-0 flex-1 overflow-hidden">
          <div
            ref={trackRef}
            style={{ width: `${trackWidthPct}%`, display: "flex", willChange: "transform" }}
          >
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
                      <p className="text-xs text-vtm-gray-mid tracking-wide">
                        {row.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow wrapper */}
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
      {unit === "imperial" && (
        <p className="text-[11px] text-vtm-gray-mid text-center mt-5 italic">
          * Dimensiones nominales estándar. Consulte los valores métricos para especificaciones exactas.
        </p>
      )}

      {/* Position dots */}
      {hasCarousel && (
        <div className="mt-6 hidden justify-center gap-1.5 md:flex">
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
              const label = formatUpgradeLabel(u, locale);
              const optional = isOptionalUpgrade(label);

              return (
              <span
                key={u}
                className={`text-xs border px-3 py-1.5 ${
                  optional
                    ? "border-vtm-red/50 bg-vtm-red/5 text-vtm-red"
                    : "border-vtm-gray-border text-vtm-dark"
                }`}
              >
                {label}
              </span>
              );
            })}
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
  const [selectedId, setSelectedId] = useState("ea");
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
      <section className="overflow-x-clip bg-white py-20 md:py-28">
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
          <div className="grid min-w-0 grid-cols-2 gap-4 mb-10 md:grid-cols-4">
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
                      className={`${model.imageFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
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
          <div ref={detailRef} key={selected.id} className="grid min-w-0 items-start gap-8 border-t border-vtm-gray-border pt-8 md:grid-cols-2">
            {/* Left: gallery if images exist for this series, else description */}
            {SERIES_FRAMES[selected.id] ? (
              <ImageGallery
                images={SERIES_FRAMES[selected.id]}
                alt={`VTM-${selected.series} Fiber Laser Sheet Cutting Machine`}
              />
            ) : (
              <div>
                <p className="font-headline text-2xl font-bold text-vtm-dark mb-0.5">{selected.series}</p>
                {selected.subtitle && <p className="text-vtm-gray-mid text-sm mb-3">{selected.subtitle}</p>}
                <p className="text-vtm-gray-mid text-sm mb-4 leading-relaxed">{selected.description}</p>
                <div className="flex gap-3 flex-wrap">
                  <Button href={`/quote?machine=fiber-laser-${selected.id}`} variant="primary" size="sm">
                    {labels.quote}
                  </Button>
                  <Button href="#specs" variant="outline" size="sm">
                    {labels.viewSpecs}
                  </Button>
                </div>
              </div>
            )}

            {/* Right: for EA show text + bestFor, for others just bestFor */}
            <div className="min-w-0">
              {SERIES_FRAMES[selected.id] && (
                <div className="mb-6">
                  <p className="font-headline text-2xl font-bold text-vtm-dark mb-0.5">{selected.series}</p>
                  {selected.subtitle && <p className="text-vtm-gray-mid text-sm mb-3">{selected.subtitle}</p>}
                  <p className="text-vtm-gray-mid text-sm mb-4 leading-relaxed">{selected.description}</p>
                  <div className="flex gap-3 flex-wrap">
                    <Button href={`/quote?machine=fiber-laser-${selected.id}`} variant="primary" size="sm">
                      {labels.quote}
                    </Button>
                    <Button href="#specs" variant="outline" size="sm">
                      {labels.viewSpecs}
                    </Button>
                  </div>
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
      <section className="overflow-x-clip bg-vtm-gray-light py-20 md:py-28" id="specs">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-vtm-red mb-4">
            {labels.specsSection}
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight">
              {selected.series} — {labels.specsHeadline}
            </h2>
          </div>
          <div className="min-w-0 overflow-hidden bg-white p-6 md:p-10">
            <AppleSpecs specs={selected.specs} locale={locale} unit={unit} setUnit={setUnit} />
          </div>
        </div>
      </section>
    </>
  );
}
