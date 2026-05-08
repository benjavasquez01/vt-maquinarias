"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ImageGallery } from "@/components/ui/ImageGallery";

const EA_FRAMES = [
  "/images/SHEET/EA series/main 3015  (1).jpg",
  "/images/SHEET/EA series/3015  (3).jpg",
  "/images/SHEET/EA series/3015  (4).jpg",
  "/images/SHEET/EA series/3015  (6).jpg",
  "/images/SHEET/EA series/3015  (7).jpg",
  "/images/SHEET/EA series/3015  (8).jpg",
];

const B_FRAMES = [
  "/images/SHEET/B Series/0 main.jpg",
  "/images/SHEET/B Series/1.jpg",
  "/images/SHEET/B Series/2 (2).jpg",
  "/images/SHEET/B Series/3 (2).jpg",
  "/images/SHEET/B Series/4 (2).jpg",
  "/images/SHEET/B Series/5.jpg",
  "/images/SHEET/B Series/6.jpg",
  "/images/SHEET/B Series/7.jpg",
];

const PE_FRAMES = [
  "/images/SHEET/PE Series/1.jpg",
  "/images/SHEET/PE Series/2.jpg",
  "/images/SHEET/PE Series/3.jpg",
  "/images/SHEET/PE Series/4.jpg",
  "/images/SHEET/PE Series/5.jpg",
  "/images/SHEET/PE Series/6.jpg",
  "/images/SHEET/PE Series/7.jpg",
  "/images/SHEET/PE Series/8.jpg",
];

const SE_FRAMES = [
  "/images/SHEET/SE Series/1.jpg",
  "/images/SHEET/SE Series/2.jpg",
  "/images/SHEET/SE Series/3.jpg",
  "/images/SHEET/SE Series/4.jpg",
];

const L_FRAMES = [
  "/images/SHEET/L Series/1.jpg",
  "/images/SHEET/L Series/2.jpg",
  "/images/SHEET/L Series/3.jpg",
  "/images/SHEET/L Series/4.jpg",
  "/images/SHEET/L Series/5.jpg",
  "/images/SHEET/L Series/6.jpg",
];

const TT_FRAMES = [
  "/images/SHEET/TT Series/1.jpg",
  "/images/SHEET/TT Series/2.jpg",
  "/images/SHEET/TT Series/3.jpg",
  "/images/SHEET/TT Series/4.jpg",
  "/images/SHEET/TT Series/5.jpg",
];

const MI_FRAMES = [
  "/images/SHEET/Mi Series/mini.107.jpg",
  "/images/SHEET/Mi Series/mini.108.jpg",
  "/images/SHEET/Mi Series/mini.109.jpg",
  "/images/SHEET/Mi Series/mini.110.jpg",
];

const SERIES_FRAMES: Record<string, string[]> = {
  ea: EA_FRAMES,
  b: B_FRAMES,
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
      { type: "spec", label: "Working Area",
        metric:   ["3000 × 1500 mm",  "4000 × 2000 mm"],
        imperial: ["5' × 10'",        "6.6' × 13.1'"] },
      { type: "spec", label: "X / Y / Z Stroke",
        metric:   ["1520 × 3100 × 100 mm",  "2040 × 4050 × 100 mm"],
        imperial: ["60\" × 122\" × 4\"",    "80\" × 159\" × 4\""] },
      { type: "spec", label: "Laser Power",
        metric:   ["2–50 kW options","2–50 kW options"],
        imperial: ["2–50 kW options","2–50 kW options"] },
      { type: "spec", label: "Max Acceleration",
        metric:   ["2 G","2 G"],
        imperial: ["2 G","2 G"] },
      { type: "spec", label: "Positioning Accuracy",
        metric:   ["±0.03 mm","±0.03 mm"],
        imperial: ["±0.001\"","±0.001\""] },
      { type: "spec", label: "Voltage",
        metric:   ["380V 3PH 50/60Hz","380V 3PH 50/60Hz"],
        imperial: ["380V 3PH 50/60Hz","380V 3PH 50/60Hz"] },
      { type: "spec", label: "Carbon Steel",
        metric:   ["1 – 80 mm",        "1 – 80 mm"],
        imperial: ["0.04\" – 3-1/8\"", "0.04\" – 3-1/8\""] },
      { type: "spec", label: "Stainless Steel",
        metric:   ["1 – 70 mm",        "1 – 70 mm"],
        imperial: ["0.04\" – 2-3/4\"", "0.04\" – 2-3/4\""] },
      { type: "spec", label: "Aluminum",
        metric:   ["1 – 60 mm",        "1 – 60 mm"],
        imperial: ["0.04\" – 2-3/8\"", "0.04\" – 2-3/8\""] },
      { type: "spec", label: "Brass",
        metric:   ["1 – 20 mm",       "1 – 20 mm"],
        imperial: ["0.04\" – 0.79\"", "0.04\" – 0.79\""] },
    ],
    features: [],
    upgrades: ["Air Conditioner", "Smoke Purifier", "Air Compressor", "Voltage Regulator", "Safety Light Curtain", "Door Protection Switch"],
  },
  mi: {
    headers: ["VTM-6060Mi"],
    rows: [
      { type: "spec", label: "Working Area",
        metric:   ["600 × 600 mm"],
        imperial: ["2' × 2'"] },
      { type: "spec", label: "X / Y / Z Stroke",
        metric:   ["600 × 600 × 100 mm"],
        imperial: ["24\" × 24\" × 4\""] },
      { type: "spec", label: "Laser Power",
        metric:   ["1 / 1.5 / 2 / 3 / 6 kW"],
        imperial: ["1 / 1.5 / 2 / 3 / 6 kW"] },
      { type: "spec", label: "Max Acceleration",
        metric:   ["1.5 G"],
        imperial: ["1.5 G"] },
      { type: "spec", label: "Positioning Accuracy",
        metric:   ["±0.008 mm"],
        imperial: ["±0.0003\""] },
      { type: "spec", label: "Machine Dimensions",
        metric:   ["1480 × 1480 × 2050 mm"],
        imperial: ["58.3\" × 58.3\" × 80.7\""] },
      { type: "spec", label: "Voltage",
        metric:   ["380V 3PH 50/60Hz"],
        imperial: ["380V 3PH 50/60Hz"] },
    ],
    features: [],
    upgrades: ["Air Conditioner", "Smoke Purifier", "Air Compressor", "Voltage Regulator"],
  },
  ea: {
    headers: ["VTM-1313A", "VTM-1325A", "VTM-3015A"],
    rows: [
      { type: "spec", label: "Working Area",
        metric:   ["1300 × 1300 mm",    "1300 × 2500 mm",    "3000 × 1500 mm"],
        imperial: ["4.3' × 4.3'",       "4.3' × 8.2'",       "5' × 10'"] },
      { type: "spec", label: "X / Y / Z Stroke",
        metric:   ["1350 × 1320 × 50 mm",   "1310 × 2550 × 50 mm",    "3050 × 1500 × 50 mm"],
        imperial: ["53\" × 52\" × 2\"",     "52\" × 100\" × 2\"",     "120\" × 59\" × 2\""] },
      { type: "spec", label: "Laser Power",
        metric:   ["1.5 / 2 / 3 kW",   "1.5 / 2 / 3 kW",   "1.5 / 2 / 3 kW"],
        imperial: ["1.5 / 2 / 3 kW",   "1.5 / 2 / 3 kW",   "1.5 / 2 / 3 kW"] },
      { type: "spec", label: "Max Acceleration",
        metric:   ["0.8 G","0.8 G","0.8 G"],
        imperial: ["0.8 G","0.8 G","0.8 G"] },
      { type: "spec", label: "Positioning Accuracy",
        metric:   ["±0.05 mm","±0.05 mm","±0.05 mm"],
        imperial: ["±0.002\"", "±0.002\"", "±0.002\""] },
      { type: "spec", label: "Voltage",
        metric:   ["380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz"],
        imperial: ["380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz"] },
      { type: "spec", label: "Carbon Steel",
        metric:   ["0.8 – 16 mm",      "0.8 – 16 mm",      "0.8 – 16 mm"],
        imperial: ["1/32\" – 5/8\"",   "1/32\" – 5/8\"",   "1/32\" – 5/8\""] },
      { type: "spec", label: "Stainless Steel",
        metric:   ["0.8 – 6 mm",       "0.8 – 6 mm",       "0.8 – 6 mm"],
        imperial: ["1/32\" – 0.24\"",  "1/32\" – 0.24\"",  "1/32\" – 0.24\""] },
    ],
    features: [],
    upgrades: ["Independent Control Cabinet", "Air Conditioner", "Smoke Purifier", "Air Compressor", "Voltage Regulator"],
  },
  b: {
    headers: ["VTM-3015Pro", "VTM-6015Pro", "VTM-4020Pro", "VTM-6020Pro", "VTM-6025Pro"],
    rows: [
      { type: "spec", label: "Working Area",
        metric:   ["3000 × 1500 mm",  "6000 × 1500 mm",  "4000 × 2000 mm",    "6000 × 2000 mm",    "6000 × 2500 mm"],
        imperial: ["5' × 10'",        "5' × 20'",        "6.6' × 13.1'",      "6.6' × 19.7'",      "8.2' × 19.7'"] },
      { type: "spec", label: "X / Y / Z Stroke",
        metric:   ["1540 × 3050 × 50 mm",    "1540 × 6050 × 50 mm",    "2040 × 4050 × 50 mm",    "2040 × 6050 × 50 mm",    "2510 × 6150 × 50 mm"],
        imperial: ["61\" × 120\" × 2\"",     "61\" × 238\" × 2\"",     "80\" × 159\" × 2\"",     "80\" × 238\" × 2\"",     "99\" × 242\" × 2\""] },
      { type: "spec", label: "Laser Power",
        metric:   ["2 / 3 / 6 / 12 kW","2 / 3 / 6 / 12 kW","2 / 3 / 6 / 12 kW","2 / 3 / 6 / 12 kW","2 / 3 / 6 / 12 kW"],
        imperial: ["2 / 3 / 6 / 12 kW","2 / 3 / 6 / 12 kW","2 / 3 / 6 / 12 kW","2 / 3 / 6 / 12 kW","2 / 3 / 6 / 12 kW"] },
      { type: "spec", label: "Max Acceleration",
        metric:   ["1.5 G","1.5 G","1.5 G","1.5 G","1.5 G"],
        imperial: ["1.5 G","1.5 G","1.5 G","1.5 G","1.5 G"] },
      { type: "spec", label: "Positioning Accuracy",
        metric:   ["±0.05 mm","±0.05 mm","±0.05 mm","±0.05 mm","±0.05 mm"],
        imperial: ["±0.002\"", "±0.002\"", "±0.002\"", "±0.002\"", "±0.002\""] },
      { type: "spec", label: "Voltage",
        metric:   ["380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz"],
        imperial: ["380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz"] },
      { type: "spec", label: "Carbon Steel",
        metric:   ["1 – 35 mm",         "1 – 35 mm",         "1 – 35 mm",         "1 – 35 mm",         "1 – 35 mm"],
        imperial: ["0.04\" – 1-3/8\"",  "0.04\" – 1-3/8\"",  "0.04\" – 1-3/8\"",  "0.04\" – 1-3/8\"",  "0.04\" – 1-3/8\""] },
      { type: "spec", label: "Stainless Steel",
        metric:   ["1 – 35 mm",         "1 – 35 mm",         "1 – 35 mm",         "1 – 35 mm",         "1 – 35 mm"],
        imperial: ["0.04\" – 1-3/8\"",  "0.04\" – 1-3/8\"",  "0.04\" – 1-3/8\"",  "0.04\" – 1-3/8\"",  "0.04\" – 1-3/8\""] },
      { type: "spec", label: "Aluminum",
        metric:   ["1 – 30 mm",          "1 – 30 mm",          "1 – 30 mm",          "1 – 30 mm",          "1 – 30 mm"],
        imperial: ["0.04\" – 1-3/16\"", "0.04\" – 1-3/16\"", "0.04\" – 1-3/16\"", "0.04\" – 1-3/16\"", "0.04\" – 1-3/16\""] },
      { type: "spec", label: "Brass",
        metric:   ["1 – 16 mm",        "1 – 16 mm",        "1 – 16 mm",        "1 – 16 mm",        "1 – 16 mm"],
        imperial: ["0.04\" – 5/8\"",   "0.04\" – 5/8\"",   "0.04\" – 5/8\"",   "0.04\" – 5/8\"",   "0.04\" – 5/8\""] },
    ],
    features: [],
    upgrades: ["Air Conditioner", "Smoke Purifier", "Air Compressor", "Voltage Regulator"],
  },
  l: {
    headers: ["VTM-12025L", "VTM-14035L"],
    rows: [
      { type: "spec", label: "Working Area",
        metric:   ["12000 × 2500 mm",   "14000 × 3500 mm"],
        imperial: ["8.2' × 39.4'",      "11.5' × 45.9'"] },
      { type: "spec", label: "X / Y / Z Stroke",
        metric:   ["2550 × 12250 × 260 mm",    "3550 × 14250 × 260 mm"],
        imperial: ["100\" × 482\" × 10\"",     "140\" × 561\" × 10\""] },
      { type: "spec", label: "Laser Power",
        metric:   ["12 / 20 / 30 / 40 / 50 kW+", "12 / 20 / 30 / 40 / 50 kW+"],
        imperial: ["12 / 20 / 30 / 40 / 50 kW+", "12 / 20 / 30 / 40 / 50 kW+"] },
      { type: "spec", label: "Max Acceleration",
        metric:   ["1 G","1 G"],
        imperial: ["1 G","1 G"] },
      { type: "spec", label: "Positioning Accuracy",
        metric:   ["±0.03 mm","±0.03 mm"],
        imperial: ["±0.001\"", "±0.001\""] },
      { type: "spec", label: "Voltage",
        metric:   ["380V 3PH 50/60Hz","380V 3PH 50/60Hz"],
        imperial: ["380V 3PH 50/60Hz","380V 3PH 50/60Hz"] },
      { type: "spec", label: "Carbon Steel",
        metric:   ["1 – 80 mm",         "1 – 80 mm"],
        imperial: ["0.04\" – 3-1/8\"",  "0.04\" – 3-1/8\""] },
      { type: "spec", label: "Stainless Steel",
        metric:   ["1 – 70 mm",         "1 – 70 mm"],
        imperial: ["0.04\" – 2-3/4\"",  "0.04\" – 2-3/4\""] },
      { type: "spec", label: "Aluminum",
        metric:   ["1 – 60 mm",         "1 – 60 mm"],
        imperial: ["0.04\" – 2-3/8\"",  "0.04\" – 2-3/8\""] },
      { type: "spec", label: "Brass",
        metric:   ["1 – 20 mm",       "1 – 20 mm"],
        imperial: ["0.04\" – 0.79\"", "0.04\" – 0.79\""] },
    ],
    features: [],
    upgrades: ["Air Conditioner", "Smoke Purifier", "Air Compressor", "Voltage Regulator", "Safety Light Curtain"],
  },
  pe: {
    headers: ["VTM-3015PE", "VTM-6015PE", "VTM-4020PE", "VTM-6025PE", "VTM-12025PE"],
    rows: [
      { type: "spec", label: "Working Area",
        metric:   ["3000 × 1500 mm",  "6000 × 1500 mm",  "4000 × 2000 mm",    "6000 × 2500 mm",    "12000 × 2500 mm"],
        imperial: ["5' × 10'",        "5' × 20'",        "6.6' × 13.1'",      "8.2' × 19.7'",      "8.2' × 39.4'"] },
      { type: "spec", label: "X / Y / Z Stroke",
        metric:   ["1520 × 3100 × 100 mm",  "1520 × 6050 × 100 mm",  "2040 × 4050 × 100 mm",  "2510 × 6100 × 260 mm",  "2510 × 12500 × 260 mm"],
        imperial: ["60\" × 122\" × 4\"",    "60\" × 238\" × 4\"",    "80\" × 159\" × 4\"",    "99\" × 240\" × 10\"",   "99\" × 492\" × 10\""] },
      { type: "spec", label: "Laser Power",
        metric:   ["2–50 kW options","2–50 kW options","2–50 kW options","2–50 kW options","2–50 kW options"],
        imperial: ["2–50 kW options","2–50 kW options","2–50 kW options","2–50 kW options","2–50 kW options"] },
      { type: "spec", label: "Max Acceleration",
        metric:   ["2 G","2 G","2 G","2 G","2 G"],
        imperial: ["2 G","2 G","2 G","2 G","2 G"] },
      { type: "spec", label: "Positioning Accuracy",
        metric:   ["±0.03 mm","±0.03 mm","±0.03 mm","±0.03 mm","±0.03 mm"],
        imperial: ["±0.001\"", "±0.001\"", "±0.001\"", "±0.001\"", "±0.001\""] },
      { type: "spec", label: "Voltage",
        metric:   ["380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz"],
        imperial: ["380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz","380V 3PH 50/60Hz"] },
      { type: "spec", label: "Carbon Steel",
        metric:   ["1 – 80 mm",         "1 – 80 mm",         "1 – 80 mm",         "1 – 80 mm",         "1 – 80 mm"],
        imperial: ["0.04\" – 3-1/8\"",  "0.04\" – 3-1/8\"",  "0.04\" – 3-1/8\"",  "0.04\" – 3-1/8\"",  "0.04\" – 3-1/8\""] },
      { type: "spec", label: "Stainless Steel",
        metric:   ["1 – 70 mm",         "1 – 70 mm",         "1 – 70 mm",         "1 – 70 mm",         "1 – 70 mm"],
        imperial: ["0.04\" – 2-3/4\"",  "0.04\" – 2-3/4\"",  "0.04\" – 2-3/4\"",  "0.04\" – 2-3/4\"",  "0.04\" – 2-3/4\""] },
      { type: "spec", label: "Aluminum",
        metric:   ["1 – 60 mm",         "1 – 60 mm",         "1 – 60 mm",         "1 – 60 mm",         "1 – 60 mm"],
        imperial: ["0.04\" – 2-3/8\"",  "0.04\" – 2-3/8\"",  "0.04\" – 2-3/8\"",  "0.04\" – 2-3/8\"",  "0.04\" – 2-3/8\""] },
      { type: "spec", label: "Brass",
        metric:   ["1 – 20 mm",       "1 – 20 mm",       "1 – 20 mm",       "1 – 20 mm",       "1 – 20 mm"],
        imperial: ["0.04\" – 0.79\"", "0.04\" – 0.79\"", "0.04\" – 0.79\"", "0.04\" – 0.79\"", "0.04\" – 0.79\""] },
    ],
    features: [],
    upgrades: ["Air Conditioner", "Smoke Purifier", "Air Compressor", "Voltage Regulator", "Safety Light Curtain", "Door Protection Switch"],
  },
  se: {
    headers: ["VTM-3015SE", "VTM-1315SE"],
    rows: [
      { type: "spec", label: "Working Area",
        metric:   ["3000 × 1500 mm",  "1300 × 1500 mm"],
        imperial: ["5' × 10'",        "4.3' × 4.9'"] },
      { type: "spec", label: "X / Y / Z Stroke",
        metric:   ["1525 × 3050 × 260 mm",  "1325 × 1560 × 260 mm"],
        imperial: ["60\" × 120\" × 10\"",   "52\" × 61\" × 10\""] },
      { type: "spec", label: "Laser Power",
        metric:   ["1 / 1.5 / 2 / 3 kW",   "1 / 1.5 / 2 / 3 kW"],
        imperial: ["1 / 1.5 / 2 / 3 kW",   "1 / 1.5 / 2 / 3 kW"] },
      { type: "spec", label: "Max Acceleration",
        metric:   ["1.5 G","1.5 G"],
        imperial: ["1.5 G","1.5 G"] },
      { type: "spec", label: "Positioning Accuracy",
        metric:   ["±0.03 mm","±0.03 mm"],
        imperial: ["±0.001\"", "±0.001\""] },
      { type: "spec", label: "Voltage",
        metric:   ["380V 3PH 50/60Hz","380V 3PH 50/60Hz"],
        imperial: ["380V 3PH 50/60Hz","380V 3PH 50/60Hz"] },
      { type: "spec", label: "Carbon Steel",
        metric:   ["1 – 25 mm",  "1 – 25 mm"],
        imperial: ["0.04\" – 1\"", "0.04\" – 1\""] },
      { type: "spec", label: "Stainless Steel",
        metric:   ["1 – 12 mm",    "1 – 12 mm"],
        imperial: ["0.04\" – 0.47\"", "0.04\" – 0.47\""] },
      { type: "spec", label: "Aluminum",
        metric:   ["1 – 8 mm",      "1 – 8 mm"],
        imperial: ["0.04\" – 5/16\"", "0.04\" – 5/16\""] },
      { type: "spec", label: "Brass",
        metric:   ["1 – 8 mm",      "1 – 8 mm"],
        imperial: ["0.04\" – 5/16\"", "0.04\" – 5/16\""] },
    ],
    features: [],
    upgrades: ["Air Conditioner", "Smoke Purifier", "Air Compressor", "Voltage Regulator"],
  },
};

// ─── Model content (bilingual) ─────────────────────────────────────────────

const MODELS: Record<"en" | "es", Model[]> = {
  en: [
    {
      id: "ea", series: "A Series", subtitle: "Economic Fiber Laser Sheet Cutting Machine", tagline: "Entry Production", power: "1.5–3 kW", badge: "Most Accessible",
      image: "/images/SHEET/EA series/main 3015  (1).jpg",
      description: "The VTM-A is the right starting point for job shops and light-to-medium production environments. Single-pallet open frame, three standard bed sizes, and Raycus power from 1.5 to 3 kW.",
      bestFor: ["Job shops entering fiber laser", "Light to medium sheet metal", "Stainless and aluminum under ¼\"", "First fiber laser investment"],
      specs: SPECS.ea,
    },
    {
      id: "b", series: "Pro Series", tagline: "Production Workhorse", power: "2–12 kW", badge: "Most Popular",
      image: "/images/SHEET/B Series/0 main.jpg",
      description: "The VTM-B is built for continuous production at the widest range of material thicknesses and sizes. From 3 kW for thin sheet to 12 kW for 1\"+ mild steel and ¾\" stainless, in beds up to 6′×20′.",
      bestFor: ["High-throughput fabrication", "Broad thickness range", "Contract manufacturers", "Multi-shift operations"],
      specs: SPECS.b,
    },
    {
      id: "se", series: "SE Series", tagline: "Enclosed Industrial", power: "1–3 kW", badge: "Class 1 Industrial",
      image: "/images/SHEET/SE Series/1.jpg",
      description: "The VTM-SE is the full industrial enclosed format — Laser Safety Class 1, integrated 6″ fume extraction port, and hardware-redundant door interlocks on a production-scale bed.",
      bestFor: ["Class 1 required by facility code", "Medical device and aerospace", "ISO-certified production", "Strict safety regulations"],
      specs: SPECS.se,
    },
    {
      id: "pe", series: "PE Series", tagline: "Enclosed Compact", power: "1.5–3 kW", badge: "Class 1 Safety",
      image: "/images/SHEET/PE Series/1.jpg",
      description: "The VTM-PE adds a full safety enclosure to the A-series platform — achieving Laser Safety Class 1 with hardware-interlocked doors. No laser eyewear required for operators or bystanders.",
      bestFor: ["Mixed-use facilities and R&D labs", "Training and prototyping", "Adjacent office areas", "Strict visitor access policies"],
      specs: SPECS.pe,
    },
    {
      id: "l", series: "L Series", tagline: "Heavy Plate", power: "12–50 kW+", badge: "Thickest Cuts",
      image: "/images/SHEET/L Series/1.jpg",
      description: "The VTM-L is designed for structural fabricators and heavy plate shops. 20 and 30 kW Raycus sources cut mild steel to 2\"+, stainless to 1.5\", at speeds that make plasma cutting obsolete.",
      bestFor: ["Structural steel fabrication", "Heavy plate over 1\"", "Replacing plasma cutting", "High-power copper and brass"],
      specs: SPECS.l,
    },
    {
      id: "tt", series: "TT Series", subtitle: "Auto Loading & Unloading TransTower Laser Cutting Machine", tagline: "Tower Automation", power: "2–50 kW", badge: "Auto Loading",
      image: "/images/SHEET/TT Series/1.jpg", imageFit: "contain",
      description: "The VTM-TT integrates a multi-shelf tower storage system with automated loading and unloading directly to the cutting table. Unattended production, maximum material utilization, and zero idle time between jobs.",
      bestFor: ["High-volume automated production", "Unattended / lights-out operation", "Tower storage material management", "Minimizing operator intervention"],
      specs: SPECS.tt,
    },
    {
      id: "mi", series: "Mi Series", subtitle: "Mini High Precision Fiber Laser Sheet Cutting Machine", tagline: "Compact Precision", power: "1–6 kW · ±0.008 mm", badge: "High Precision",
      image: "/images/SHEET/Mi Series/8.jpg",
      description: "The VTM-Mi is a compact, high-precision fiber laser designed for intricate parts and tight tolerances. Small footprint, rigid frame, and fine-motion control deliver accuracy where full-size machines cannot.",
      bestFor: ["Intricate and small-format parts", "Tight-tolerance prototyping", "Limited floor space", "R&D and specialty fabrication"],
      specs: SPECS.mi,
    },
  ],
  es: [
    {
      id: "ea", series: "Serie A", subtitle: "Cortadora Láser de Chapa Económica", tagline: "Producción de Entrada", power: "1.5–3 kW", badge: "Más Accesible",
      image: "/images/SHEET/EA series/main 3015  (1).jpg",
      description: "La VTM-A es el punto de partida ideal para talleres y entornos de producción ligera a media. Bastidor abierto de paleta individual, tres tamaños de mesa estándar y potencia Raycus de 1.5 a 3 kW.",
      bestFor: ["Talleres que inician con láser de fibra", "Chapa ligera a media", "Inoxidable y aluminio bajo 6 mm", "Primera inversión en láser de fibra"],
      specs: SPECS.ea,
    },
    {
      id: "b", series: "Serie Pro", tagline: "Caballo de Batalla", power: "2–12 kW", badge: "Más Popular",
      image: "/images/SHEET/B Series/0 main.jpg",
      description: "La VTM-B está diseñada para producción continua en la mayor gama de espesores y tamaños. De 3 kW para chapa fina a 12 kW para acero dulce de 25 mm+ e inoxidable de 20 mm, en mesas de hasta 6′×20′.",
      bestFor: ["Fabricación de alto rendimiento", "Amplio rango de espesores", "Fabricantes por contrato", "Operaciones de múltiples turnos"],
      specs: SPECS.b,
    },
    {
      id: "se", series: "Serie SE", tagline: "Encapsulado Industrial", power: "1–3 kW", badge: "Industrial Clase 1",
      image: "/images/SHEET/SE Series/1.jpg",
      description: "La VTM-SE es el formato encapsulado industrial completo — Clase 1, puerto de extracción de 6″ integrado y enclavamientos de puerta con redundancia hardware en mesa de escala productiva.",
      bestFor: ["Clase 1 exigida por código o seguro", "Dispositivos médicos y aeroespacial", "Producción con certificación ISO", "Normativa de seguridad estricta"],
      specs: SPECS.se,
    },
    {
      id: "pe", series: "Serie PE", tagline: "Encapsulado Compacto", power: "1.5–3 kW", badge: "Seguridad Clase 1",
      image: "/images/SHEET/PE Series/1.jpg",
      description: "La VTM-PE añade un encapsulado de seguridad completo a la plataforma A — alcanzando Clase 1 con puertas de enclavamiento de hardware. No se requieren gafas láser para operadores.",
      bestFor: ["Instalaciones de uso mixto y I+D", "Capacitación y prototipado", "Áreas de oficina adyacentes", "Políticas estrictas de acceso"],
      specs: SPECS.pe,
    },
    {
      id: "l", series: "Serie L", tagline: "Placa Gruesa", power: "12–50 kW+", badge: "Cortes más Gruesos",
      image: "/images/SHEET/L Series/1.jpg",
      description: "La VTM-L está diseñada para fabricantes de acero estructural y talleres de placa gruesa. Fuentes Raycus de 20 y 30 kW cortan acero dulce a 50 mm+ e inoxidable a 40 mm.",
      bestFor: ["Fabricación de acero estructural", "Placa gruesa superior a 25 mm", "Sustitución del corte por plasma", "Cobre y latón de alta potencia"],
      specs: SPECS.l,
    },
    {
      id: "tt", series: "Serie TT", subtitle: "Cortadora Láser con Torre de Carga y Descarga Automática", tagline: "Automatización Torre", power: "3–30 kW", badge: "Carga Automática",
      image: "/images/SHEET/TT Series/1.jpg", imageFit: "contain",
      description: "La VTM-TT integra un sistema de almacenamiento en torre con carga y descarga automática directa a la mesa de corte. Producción desatendida, máximo aprovechamiento de material y cero tiempo muerto entre trabajos.",
      bestFor: ["Producción automatizada de alto volumen", "Operación desatendida", "Gestión de material en torre", "Mínima intervención del operador"],
      specs: SPECS.tt,
    },
    {
      id: "mi", series: "Serie Mi", subtitle: "Cortadora Láser de Chapa Mini de Alta Precisión", tagline: "Precisión Compacta", power: "1–6 kW", badge: "Alta Precisión",
      image: "/images/SHEET/Mi Series/8.jpg",
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
    upgrades: "Available Upgrades",
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
    upgrades: "Mejoras Disponibles",
  },
};

// ─── Specs card renderer ───────────────────────────────────────────────────

const VISIBLE = 3;

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
  const colCount = specs.headers.length;
  const hasCarousel = colCount > VISIBLE;

  // Infinite-loop carousel using clone-tape technique.
  // Track layout: [VISIBLE clones from end] [actual cols] [VISIBLE clones from start]
  // This means every transition is a smooth slide — the snap happens invisibly at loop boundaries.
  const clonesBefore = VISIBLE; // how many clone cols prepended
  const totalTrackCols = colCount + clonesBefore + VISIBLE;

  const mod = (n: number) => ((n % colCount) + colCount) % colCount;

  // col data index for each track slot
  const trackData: number[] = [
    ...Array.from({ length: clonesBefore }, (_, i) => mod(colCount - clonesBefore + i)),
    ...Array.from({ length: colCount }, (_, i) => i),
    ...Array.from({ length: VISIBLE }, (_, i) => i),
  ];

  // Each col = 1/totalTrackCols of track width = 1/VISIBLE of container width
  const colWidthPct = 100 / totalTrackCols; // % of track
  const trackWidthPct = (totalTrackCols / VISIBLE) * 100; // % of container

  // translateX to show actual col `p` at leftmost visible position (% of track itself)
  const trackXForPos = (p: number) => -((clonesBefore + p) * colWidthPct);

  const [pos, setPos] = useState(0);
  const posRef = useRef(0);
  const [animating, setAnimating] = useState(false);
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

      {/* Static grid for series with ≤ VISIBLE columns */}
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

      {/* Carousel row: left arrow | viewport | right arrow */}
      {hasCarousel && <div className="flex gap-4">
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
        <div className="flex-1 overflow-hidden">
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

// ─── Main component ────────────────────────────────────────────────────────

export function ModelBrowserWithSpecs({ locale }: { locale: "en" | "es" }) {
  const models = MODELS[locale];
  const labels = LABELS[locale];
  const [selectedId, setSelectedId] = useState("b");
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
          <div ref={detailRef} key={selected.id} className="border-t border-vtm-gray-border pt-8 grid md:grid-cols-2 gap-8 items-start">
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
            <div>
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
            <AppleSpecs specs={selected.specs} locale={locale} unit={unit} setUnit={setUnit} />
          </div>
        </div>
      </section>
    </>
  );
}
