"use client";

import { useState } from "react";

type Unit = "imperial" | "metric";

interface Spec {
  label: string;
  imperial: string;
  metric: string;
}

const SPECS: Spec[] = [
  { label: "Available Bed Sizes", imperial: "4'×4' / 4'×8' / 5'×10' / 6'×10' / 6'×13' / 6'×20' / 8'×20'", metric: "1300×1300 / 1300×2500 / 3000×1500 / 4000×1500 / 4000×2000 / 6000×1500 / 6000×2000 / 6000×2500 / 8000×2500 mm" },
  { label: "Laser Power Options", imperial: "1.5 kW / 3 kW / 6 kW / 12 kW / 20 kW / 30 kW", metric: "1.5 kW / 3 kW / 6 kW / 12 kW / 20 kW / 30 kW" },
  { label: "Laser Source", imperial: "Raycus Fiber Laser (standard)", metric: "Raycus Fiber Laser (standard)" },
  { label: "Cutting Head", imperial: "BOCI BLT Series (standard) / RayTools BS Series (optional)", metric: "BOCI BLT Series (standard) / RayTools BS Series (optional)" },
  { label: "CNC Controller", imperial: "Bochu CypCut 2000E / 4000E / 8000C Bus", metric: "Bochu CypCut 2000E / 4000E / 8000C Bus" },
  { label: "Servo Drive", imperial: "Fuji Bus servo (X / Y / Z axis)", metric: "Fuji Bus servo (X / Y / Z axis)" },
  { label: "Linear Guide Rails", imperial: "HIWIN 20 / 25 / 30 / 35 series (axis-dependent)", metric: "HIWIN 20 / 25 / 30 / 35 series (axis-dependent)" },
  { label: "Positioning Accuracy", imperial: "±0.002\"", metric: "±0.05 mm" },
  { label: "Repeatability", imperial: "±0.001\"", metric: "±0.02 mm" },
  { label: "Max Cutting Speed", imperial: "up to 787 in/min (thin sheet)", metric: "up to 20 m/min (thin sheet)" },
  { label: "Max Acceleration", imperial: "up to 1.5 G (EA) / up to 2.0 G (B series)", metric: "up to 1.5 G (EA) / up to 2.0 G (B series)" },
  { label: "Max Thickness — Carbon Steel", imperial: "0.5\" (3 kW) / 0.75\" (6 kW) / 1.25\" (12 kW) / 1.5\" (20 kW)", metric: "12 mm (3 kW) / 20 mm (6 kW) / 30 mm (12 kW) / 38 mm (20 kW)" },
  { label: "Max Thickness — Stainless Steel", imperial: "0.25\" (3 kW) / 0.5\" (6 kW) / 0.75\" (12 kW) / 1\" (20 kW)", metric: "6 mm (3 kW) / 12 mm (6 kW) / 20 mm (12 kW) / 25 mm (20 kW)" },
  { label: "Max Thickness — Aluminum", imperial: "0.25\" (3 kW) / 0.4\" (6 kW) / 0.6\" (12 kW) / 0.75\" (20 kW)", metric: "6 mm (3 kW) / 10 mm (6 kW) / 16 mm (12 kW) / 20 mm (20 kW)" },
  { label: "Max Thickness — Brass / Copper", imperial: "0.16\" (3 kW) / 0.24\" (6 kW)", metric: "4 mm (3 kW) / 6 mm (6 kW)" },
  { label: "Max Sheet Weight (3015 bed)", imperial: "4,400 lbs", metric: "2,000 kg" },
  { label: "Water Chiller", imperial: "Tongfei (standard)", metric: "Tongfei (standard)" },
  { label: "Table Type", imperial: "Single bed (EA / B series) or Dual-pallet exchange table (FE series)", metric: "Single bed (EA / B series) or Dual-pallet exchange table (FE series)" },
  { label: "Power Supply (US)", imperial: "480V, 3-phase, 60 Hz", metric: "380V, 3-phase, 50 Hz" },
  { label: "Enclosed Version Available", imperial: "Yes — VTM-PE / VTM-SE protective enclosure", metric: "Yes — VTM-PE / VTM-SE protective enclosure" },
  { label: "Enclosed Door Interlock", imperial: "Hardware-redundant, laser enable circuit (enclosed models)", metric: "Hardware-redundant, laser enable circuit (enclosed models)" },
  { label: "Fume Extraction Port (enclosed)", imperial: "6\" diameter duct connection", metric: "152 mm diameter duct connection" },
];

interface Props {
  specLabel: string;
  valueLabel: string;
  imperialLabel: string;
  metricLabel: string;
}

export function SpecsTable({ specLabel, valueLabel, imperialLabel, metricLabel }: Props) {
  const [unit, setUnit] = useState<Unit>("metric");

  return (
    <div>
      <div className="flex gap-1 mb-6 border border-vtm-gray-border p-1 w-fit">
        {(["imperial", "metric"] as Unit[]).map((u) => (
          <button
            key={u}
            onClick={() => setUnit(u)}
            className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors ${
              unit === u ? "bg-vtm-dark text-white" : "text-vtm-gray-mid hover:text-vtm-dark"
            }`}
          >
            {u === "imperial" ? imperialLabel : metricLabel}
          </button>
        ))}
      </div>
      <div className="border border-vtm-gray-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-vtm-gray-light border-b border-vtm-gray-border">
              <th className="text-left px-4 py-3 font-semibold text-vtm-dark text-xs tracking-wider uppercase">{specLabel}</th>
              <th className="text-left px-4 py-3 font-semibold text-vtm-dark text-xs tracking-wider uppercase">{valueLabel}</th>
            </tr>
          </thead>
          <tbody>
            {SPECS.map((spec, i) => (
              <tr key={spec.label} className={`border-b border-vtm-gray-border last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-vtm-gray-light/40"}`}>
                <td className="px-4 py-3 text-vtm-gray-mid font-medium">{spec.label}</td>
                <td className="px-4 py-3 text-vtm-dark font-medium">{unit === "imperial" ? spec.imperial : spec.metric}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
