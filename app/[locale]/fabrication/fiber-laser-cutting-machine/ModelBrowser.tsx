"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

type SpecsTable = {
  headers: string[];
  rows: { spec: string; values: string[] }[];
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
  beds: string[];
  powers: string[];
  specsTable?: SpecsTable;
};

const MODELS: Record<"en" | "es", Model[]> = {
  en: [
    {
      id: "ea",
      series: "EA Series",
      tagline: "Entry Production",
      power: "1.5–3 kW",
      badge: "Most Accessible",
      image: "/images/fiber-laser-feature-01-speed.png",
      description:
        "The VTM-EA is the right starting point for job shops and light-to-medium production environments. Single-pallet open frame, three standard bed sizes, and Raycus power from 1.5 to 3 kW. Cuts mild steel to ½\", stainless to ¼\", and aluminum to 5/16\" at production speeds.",
      bestFor: [
        "Job shops entering fiber laser",
        "Light to medium sheet metal",
        "Stainless and aluminum under ¼\"",
        "First fiber laser investment",
      ],
      beds: ["4′×4′ (1313)", "4′×8′ (1325)", "5′×10′ (3015)"],
      powers: ["1.5 kW", "2 kW", "3 kW"],
      specsTable: {
        headers: ["F-3015EA", "F-1325EA", "F-1313EA"],
        rows: [
          { spec: "Working Area", values: ["3000 × 1500 mm", "1300 × 2500 mm", "1300 × 1300 mm"] },
          { spec: "X / Y / Z Stroke", values: ["3050 × 1500 × 50 mm", "1310 × 2550 × 50 mm", "1350 × 1320 × 50 mm"] },
          { spec: "Laser Power", values: ["1500 / 2000 / 3000 W", "1500 / 2000 / 3000 W", "1500 / 2000 / 3000 W"] },
          { spec: "Max Acceleration", values: ["0.8 G", "0.8 G", "0.8 G"] },
          { spec: "Positioning Accuracy", values: ["±0.05 mm", "±0.05 mm", "±0.05 mm"] },
          { spec: "Voltage", values: ["380V 3PH 50/60Hz", "380V 3PH 50/60Hz", "380V 3PH 50/60Hz"] },
          { spec: "Carbon Steel", values: ["0.8 – 16 mm", "0.8 – 16 mm", "0.8 – 16 mm"] },
          { spec: "Stainless Steel", values: ["0.8 – 6 mm", "0.8 – 6 mm", "0.8 – 6 mm"] },
        ],
        upgrades: ["Independent Control Cabinet", "Air Conditioner", "Smoke Purifier", "Air Compressor", "Voltage Regulator"],
      },
    },
    {
      id: "b",
      series: "B Series",
      tagline: "Production Workhorse",
      power: "3–12 kW",
      badge: "Most Popular",
      image: "/images/fiber-laser-feature-03-power.png",
      description:
        "The VTM-B is built for continuous production at the widest range of material thicknesses and sizes. From 3 kW for thin sheet to 12 kW for 1\"+ mild steel and ¾\" stainless, in beds up to 6′×20′. The standard choice for contract manufacturers and high-throughput fab shops.",
      bestFor: [
        "High-throughput fabrication",
        "Mild steel, stainless, aluminum in broad thickness range",
        "Contract manufacturers",
        "Shops running multiple shifts",
      ],
      beds: ["5′×10′ (3015)", "4′×15′ (4015)", "4′×20′ (4020)", "6′×20′ (6020)"],
      powers: ["3 kW", "6 kW", "12 kW"],
    },
    {
      id: "fe",
      series: "FE Series",
      tagline: "Exchange Table",
      power: "3–12 kW",
      badge: "Highest Throughput",
      image: "/images/fiber-laser-feature-04-exchange-table.png",
      description:
        "The VTM-FE pairs the B-series cutting platform with a dual-pallet exchange table included as standard — not an option. Load the next blank while the machine cuts the current sheet. Sub-15-second pallet changeover eliminates the largest source of idle time in sheet metal production.",
      bestFor: [
        "High-volume production runs",
        "Lights-out / unattended operation",
        "Minimizing cost-per-part",
        "Shops that can't afford machine idle time",
      ],
      beds: ["5′×10′ (3015)", "4′×20′ (4020)"],
      powers: ["3 kW", "6 kW", "12 kW"],
    },
    {
      id: "g",
      series: "G Series",
      tagline: "Heavy Plate",
      power: "20–30 kW",
      badge: "Thickest Cuts",
      image: "/images/fiber-laser-feature-03-power.png",
      description:
        "The VTM-G is designed for structural fabricators and heavy plate shops. 20 and 30 kW Raycus sources cut mild steel to 2\"+, stainless to 1.5\", and aluminum to 1\" at speeds that make plasma cutting obsolete. Large-format beds handle oversized structural plate.",
      bestFor: [
        "Structural steel fabrication",
        "Heavy plate cutting over 1\"",
        "Replacing plasma cutting",
        "High-power cutting of copper and brass",
      ],
      beds: ["4′×20′ (4020)", "6′×20′ (6020)", "6′×25′ (6025)", "8′×25′ (8025)"],
      powers: ["20 kW", "30 kW"],
    },
    {
      id: "pe",
      series: "PE Series",
      tagline: "Enclosed Compact",
      power: "1.5–3 kW",
      badge: "Class 1 Safety",
      image: "/images/fiber-laser-feature-02-accuracy.png",
      description:
        "The VTM-PE adds a full safety enclosure to the EA-series platform — achieving Laser Safety Class 1 with hardware-interlocked doors. No laser eyewear required for operators or bystanders. Ideal for training rooms, R&D labs, and production environments shared with other teams.",
      bestFor: [
        "Mixed-use facilities and R&D labs",
        "Training and prototyping environments",
        "Facilities with adjacent office areas",
        "Shops with strict visitor access policies",
      ],
      beds: ["4′×4′ (1313)", "5′×10′ (3015)"],
      powers: ["1.5 kW", "3 kW"],
    },
    {
      id: "se",
      series: "SE Series",
      tagline: "Enclosed Industrial",
      power: "3–6 kW",
      badge: "Class 1 Industrial",
      image: "/images/fiber-laser-feature-05-controller.png",
      description:
        "The VTM-SE is the full industrial enclosed format — Laser Safety Class 1, integrated 6″ fume extraction port, and hardware-redundant door interlocks on a production-scale bed. Built for high-production shops where Class 1 compliance is required by facility code or insurance.",
      bestFor: [
        "Class 1 required by facility or insurance",
        "Medical device and aerospace suppliers",
        "ISO-certified production environments",
        "Facilities with strict safety regulations",
      ],
      beds: ["5′×10′ (3015)", "4′×20′ (4020)"],
      powers: ["3 kW", "6 kW"],
    },
  ],
  es: [
    {
      id: "ea",
      series: "Serie EA",
      tagline: "Producción de Entrada",
      power: "1.5–3 kW",
      badge: "Más Accesible",
      image: "/images/fiber-laser-feature-01-speed.png",
      description:
        "La VTM-EA es el punto de partida ideal para talleres y entornos de producción ligera a media. Bastidor abierto de paleta individual, tres tamaños de mesa estándar y potencia Raycus de 1.5 a 3 kW. Corta acero dulce hasta 12 mm, inoxidable hasta 6 mm y aluminio hasta 8 mm a velocidades de producción.",
      bestFor: [
        "Talleres que inician con láser de fibra",
        "Chapa ligera a media",
        "Inoxidable y aluminio bajo 6 mm",
        "Primera inversión en láser de fibra",
      ],
      beds: ["4′×4′ (1313)", "4′×8′ (1325)", "5′×10′ (3015)"],
      powers: ["1.5 kW", "2 kW", "3 kW"],
      specsTable: {
        headers: ["F-3015EA", "F-1325EA", "F-1313EA"],
        rows: [
          { spec: "Área de Trabajo", values: ["3000 × 1500 mm", "1300 × 2500 mm", "1300 × 1300 mm"] },
          { spec: "Recorrido X / Y / Z", values: ["3050 × 1500 × 50 mm", "1310 × 2550 × 50 mm", "1350 × 1320 × 50 mm"] },
          { spec: "Potencia Láser", values: ["1500 / 2000 / 3000 W", "1500 / 2000 / 3000 W", "1500 / 2000 / 3000 W"] },
          { spec: "Aceleración Máx.", values: ["0.8 G", "0.8 G", "0.8 G"] },
          { spec: "Precisión de Posición", values: ["±0.05 mm", "±0.05 mm", "±0.05 mm"] },
          { spec: "Voltaje", values: ["380V 3PH 50/60Hz", "380V 3PH 50/60Hz", "380V 3PH 50/60Hz"] },
          { spec: "Acero al Carbono", values: ["0.8 – 16 mm", "0.8 – 16 mm", "0.8 – 16 mm"] },
          { spec: "Acero Inoxidable", values: ["0.8 – 6 mm", "0.8 – 6 mm", "0.8 – 6 mm"] },
        ],
        upgrades: ["Gabinete de Control Independiente", "Aire Acondicionado", "Purificador de Humo", "Compresor de Aire", "Regulador de Voltaje"],
      },
    },
    {
      id: "b",
      series: "Serie B",
      tagline: "Caballo de Batalla",
      power: "3–12 kW",
      badge: "Más Popular",
      image: "/images/fiber-laser-feature-03-power.png",
      description:
        "La VTM-B está diseñada para producción continua en la mayor gama de espesores y tamaños de material. De 3 kW para chapa fina a 12 kW para acero dulce de 25 mm+ e inoxidable de 20 mm, en mesas de hasta 6′×20′. La opción estándar para fabricantes por contrato y talleres de alta producción.",
      bestFor: [
        "Fabricación de alto rendimiento",
        "Acero dulce, inoxidable y aluminio en amplio rango de espesores",
        "Fabricantes por contrato",
        "Talleres que operan múltiples turnos",
      ],
      beds: ["5′×10′ (3015)", "4′×15′ (4015)", "4′×20′ (4020)", "6′×20′ (6020)"],
      powers: ["3 kW", "6 kW", "12 kW"],
    },
    {
      id: "fe",
      series: "Serie FE",
      tagline: "Mesa de Intercambio",
      power: "3–12 kW",
      badge: "Mayor Rendimiento",
      image: "/images/fiber-laser-feature-04-exchange-table.png",
      description:
        "La VTM-FE combina la plataforma de corte de la serie B con una mesa de intercambio de doble paleta incluida de serie — no como accesorio. Cargue la siguiente chapa mientras la máquina corta la actual. Cambio de paleta en menos de 15 segundos, eliminando la mayor fuente de tiempo muerto en producción.",
      bestFor: [
        "Producciones de alto volumen",
        "Operación desatendida / luces apagadas",
        "Minimizar costo por pieza",
        "Talleres que no pueden permitirse tiempo muerto",
      ],
      beds: ["5′×10′ (3015)", "4′×20′ (4020)"],
      powers: ["3 kW", "6 kW", "12 kW"],
    },
    {
      id: "g",
      series: "Serie G",
      tagline: "Placa Gruesa",
      power: "20–30 kW",
      badge: "Cortes más Gruesos",
      image: "/images/fiber-laser-feature-03-power.png",
      description:
        "La VTM-G está diseñada para fabricantes de acero estructural y talleres de placa gruesa. Fuentes Raycus de 20 y 30 kW cortan acero dulce a 50 mm+, inoxidable a 40 mm y aluminio a 25 mm a velocidades que hacen obsoleto el corte por plasma. Mesas de gran formato para placa estructural sobredimensionada.",
      bestFor: [
        "Fabricación de acero estructural",
        "Corte de placa gruesa superior a 25 mm",
        "Sustitución del corte por plasma",
        "Corte de cobre y latón de alta potencia",
      ],
      beds: ["4′×20′ (4020)", "6′×20′ (6020)", "6′×25′ (6025)", "8′×25′ (8025)"],
      powers: ["20 kW", "30 kW"],
    },
    {
      id: "pe",
      series: "Serie PE",
      tagline: "Encapsulado Compacto",
      power: "1.5–3 kW",
      badge: "Seguridad Clase 1",
      image: "/images/fiber-laser-feature-02-accuracy.png",
      description:
        "La VTM-PE añade un encapsulado de seguridad completo a la plataforma de la serie EA — alcanzando la Clase de Seguridad Láser 1 con puertas de enclavamiento de hardware. No se requieren gafas láser para operadores ni personas cercanas. Ideal para salas de capacitación, laboratorios de I+D y entornos compartidos.",
      bestFor: [
        "Instalaciones de uso mixto y laboratorios de I+D",
        "Entornos de capacitación y prototipado",
        "Instalaciones con áreas de oficina adyacentes",
        "Talleres con políticas estrictas de acceso de visitantes",
      ],
      beds: ["4′×4′ (1313)", "5′×10′ (3015)"],
      powers: ["1.5 kW", "3 kW"],
    },
    {
      id: "se",
      series: "Serie SE",
      tagline: "Encapsulado Industrial",
      power: "3–6 kW",
      badge: "Industrial Clase 1",
      image: "/images/fiber-laser-feature-05-controller.png",
      description:
        "La VTM-SE es el formato encapsulado industrial completo — Clase de Seguridad Láser 1, puerto de extracción de 6″ integrado y enclavamientos de puerta con redundancia hardware en mesa de escala productiva. Para talleres de alta producción donde el cumplimiento de Clase 1 es exigido por código o seguro.",
      bestFor: [
        "Clase 1 requerida por instalación o seguro",
        "Proveedores de dispositivos médicos y aeroespacial",
        "Entornos de producción con certificación ISO",
        "Instalaciones con normativa de seguridad estricta",
      ],
      beds: ["5′×10′ (3015)", "4′×20′ (4020)"],
      powers: ["3 kW", "6 kW"],
    },
  ],
};

const LABELS = {
  en: {
    sectionLabel: "Product Line",
    headline: "Choose Your Series",
    subheadline: "Six machine families. Same Raycus source, HIWIN rails, and CypCut CNC — configured for different production requirements.",
    bestFor: "Best for",
    bedSizes: "Bed Sizes",
    powerOptions: "Power Options",
    quote: "Request a Quote",
    selected: "Selected",
    upgrades: "Available Upgrades",
    model: "Model",
  },
  es: {
    sectionLabel: "Línea de Productos",
    headline: "Elija su Serie",
    subheadline: "Seis familias de máquinas. La misma fuente Raycus, guías HIWIN y CNC CypCut — configuradas para diferentes requisitos de producción.",
    bestFor: "Ideal para",
    bedSizes: "Tamaños de Mesa",
    powerOptions: "Opciones de Potencia",
    quote: "Solicitar Cotización",
    selected: "Seleccionado",
    upgrades: "Mejoras Disponibles",
    model: "Modelo",
  },
};

export function ModelBrowser({ locale }: { locale: "en" | "es" }) {
  const models = MODELS[locale];
  const labels = LABELS[locale];
  const [selectedId, setSelectedId] = useState(models[1].id); // B Series default
  const selected = models.find((m) => m.id === selectedId)!;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <p className="text-xs font-semibold tracking-widest uppercase text-vtm-red mb-4">
          {labels.sectionLabel}
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-3">
              {labels.headline}
            </h2>
            <p className="text-vtm-gray-mid max-w-xl leading-relaxed">
              {labels.subheadline}
            </p>
          </div>
        </div>

        {/* Model Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {models.map((model) => {
            const isSelected = model.id === selectedId;
            return (
              <button
                key={model.id}
                onClick={() => setSelectedId(model.id)}
                className={`group relative text-left border-2 transition-all duration-200 overflow-hidden focus:outline-none ${
                  isSelected
                    ? "border-vtm-red"
                    : "border-vtm-gray-border hover:border-vtm-dark"
                }`}
              >
                {/* Card image */}
                <div className="relative aspect-[3/2] overflow-hidden bg-vtm-gray-light">
                  <Image
                    src={model.image}
                    alt={model.series}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 17vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Badge */}
                  <span className="absolute top-2 left-2 text-[10px] font-bold tracking-wider uppercase bg-vtm-red text-white px-2 py-0.5">
                    {model.badge}
                  </span>
                  {/* Selected indicator */}
                  {isSelected && (
                    <span className="absolute top-2 right-2 w-5 h-5 bg-vtm-red flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M1.5 5l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </div>
                {/* Card label */}
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

        {/* Detail Panel */}
        <div
          key={selected.id}
          className="border border-vtm-gray-border grid md:grid-cols-2 gap-0 overflow-hidden"
        >
          {/* Left: Image */}
          <div className="relative aspect-[4/3] md:aspect-auto min-h-[280px] overflow-hidden bg-vtm-gray-light">
            <Image
              src={selected.image}
              alt={selected.series}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-[11px] font-bold tracking-widest uppercase bg-vtm-red text-white px-2 py-1 mb-3 inline-block">
                {selected.badge}
              </span>
              <p className="font-headline text-3xl font-bold text-white leading-tight">
                {selected.series}
              </p>
              <p className="text-white/70 text-sm mt-1">{selected.tagline}</p>
            </div>
          </div>

          {/* Right: Details */}
          <div className="p-8 md:p-10 bg-white flex flex-col justify-between gap-8">
            {selected.specsTable ? (
              <div>
                <p className="text-vtm-gray-mid leading-relaxed mb-6">{selected.description}</p>
                {/* Specs table */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border border-vtm-gray-border">
                    <thead>
                      <tr className="bg-vtm-dark">
                        <th className="text-left px-3 py-2 text-xs font-semibold tracking-wider uppercase text-white/60 border-r border-white/10">
                          {labels.model}
                        </th>
                        {selected.specsTable.headers.map((h) => (
                          <th key={h} className="text-left px-3 py-2 text-xs font-semibold tracking-wider uppercase text-white border-r border-white/10 last:border-0">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {selected.specsTable.rows.map((row, i) => (
                        <tr key={row.spec} className={`border-t border-vtm-gray-border ${i % 2 === 0 ? "bg-white" : "bg-vtm-gray-light/40"}`}>
                          <td className="px-3 py-2 text-xs font-semibold text-vtm-gray-mid border-r border-vtm-gray-border whitespace-nowrap">
                            {row.spec}
                          </td>
                          {row.values.map((v, j) => (
                            <td key={j} className="px-3 py-2 text-xs text-vtm-dark border-r border-vtm-gray-border last:border-0">
                              {v}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Upgrades */}
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-vtm-gray-mid mb-2">
                    {labels.upgrades}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.specsTable.upgrades.map((u) => (
                      <span key={u} className="text-xs border border-vtm-gray-border px-2 py-1 text-vtm-dark">
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-vtm-gray-mid leading-relaxed mb-8">
                  {selected.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-vtm-gray-mid mb-3">
                      {labels.powerOptions}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selected.powers.map((p) => (
                        <span key={p} className="text-xs font-semibold border border-vtm-gray-border px-3 py-1 text-vtm-dark">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-vtm-gray-mid mb-3">
                      {labels.bedSizes}
                    </p>
                    <ul className="space-y-1">
                      {selected.beds.map((b) => (
                        <li key={b} className="text-xs text-vtm-dark flex items-center gap-2">
                          <span className="w-1 h-1 bg-vtm-red flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
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
            )}

            <div className="flex gap-3 flex-wrap">
              <Button href={`/quote?machine=fiber-laser-${selected.id}`} variant="primary" size="sm">
                {labels.quote}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
