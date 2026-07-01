"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/lib/navigation";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

// ─── Types ────────────────────────────────────────────────────────────────────

type ModelCard = { name: string; image: string; badge?: string; subtitle?: string };

type FabProduct = {
  key: string;
  href: string;
  models: ModelCard[];
};

// Display order of the product tabs (by key). Change this to reorder the showcase.
const PRODUCT_ORDER = [
  "pressBreake",      // Plegadora
  "fiberLaser",       // Corte láser plancha
  "fiberLaserTube",   // Corte láser tubo
  "fourInOne",        // Soldadora
  "laserCleaning",    // Limpiadora
  "airCompressor",    // Compresor
  "panelBender",      // Paneladora
  "ironworker",       // Punzonadora
  "sheetTubeCombo",   // Láser combinado
];

function orderProducts(data: FabProduct[]): FabProduct[] {
  const byKey = new Map(data.map((p) => [p.key, p]));
  const ordered = PRODUCT_ORDER.map((k) => byKey.get(k)).filter(Boolean) as FabProduct[];
  // Append any product not listed in PRODUCT_ORDER so nothing is ever dropped.
  const extras = data.filter((p) => !PRODUCT_ORDER.includes(p.key));
  return [...ordered, ...extras];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FABRICATION: FabProduct[] = [
  {
    key: "fiberLaser",
    href: "/fabrication/fiber-laser-cutting-machine",
    models: [
      { name: "Pro Series", image: "/images/SHEET/EA series/main 3015  (1).webp", badge: "Most Popular",    subtitle: "1.5–12 kW sheet laser spanning entry-level shops to continuous high-volume production in steel, stainless and aluminum." },
      { name: "SE Series", image: "/images/SHEET/SE Series/1.webp",               badge: "Class 1 Enclosed",   subtitle: "1–3 kW fully enclosed Class 1 laser — ideal for shop-floor safety compliance." },
      { name: "PE Series", image: "/images/SHEET/PE Series/1.webp",               badge: "Class 1 Safety",     subtitle: "1.5–3 kW protective enclosure with interlock, perfect for open workshops." },
      { name: "L Series",  image: "/images/SHEET/L Series/1.webp",                badge: "Thickest Cuts",      subtitle: "12–50 kW+ ultra-high power for cutting thick plate up to 80 mm carbon steel." },
      { name: "TT Series", image: "/images/SHEET/TT Series/1.webp",               badge: "Auto Loading",       subtitle: "2–50 kW TransTower system with automated load/unload for lights-out production." },
      { name: "Mi Series", image: "/images/SHEET/Mi Series/mini.107.webp",        badge: "High Precision",     subtitle: "1–6 kW mini laser with ±0.008 mm positioning for small, intricate parts." },
    ],
  },
  {
    key: "fiberLaserTube",
    href: "/fabrication/fiber-laser-tube-cutting-machine",
    models: [
      { name: "MT Series",  image: "/images/tube-mt-1.webp",  badge: "Multi-Profile", subtitle: "Round and square tube profiles up to 160 mm diameter for light to medium-duty structural work." },
      { name: "T Series",   image: "/images/tube-t-1.webp",   badge: "Heavy Tube",    subtitle: "Round tube cutting up to 350 mm diameter with 1.5–6 kW power options." },
      { name: "AT3 Series", image: "/images/tube-at3-1.webp", badge: "3 Chucks",      subtitle: "Automatic loading and unloading with three chucks for efficient, low-waste tube production." },
      { name: "AT4 Series", image: "/images/tube-at4-1.webp", badge: "4 Chucks",      subtitle: "Simultaneous loading and unloading with four chucks for heavy-duty high-speed tube cutting." },
    ],
  },
  {
    key: "sheetTubeCombo",
    href: "/fabrication/sheet-tube-laser-cutting-machine",
    models: [
      { name: "VTM-ST 3015", image: "/images/sheet-tube-combo-hero.webp",                 badge: "5×10 Format",   subtitle: "Switch between 5×10 sheet and tube mode without tooling changes." },
      { name: "VTM-ST 4020", image: "/images/sheet-tube-combo-feature-01-dualmode.webp",  badge: "6.6×13 Format", subtitle: "Larger dual-mode format for shops cutting both plate and structural pipe." },
    ],
  },
  {
    key: "fourInOne",
    href: "/fabrication/4-in-1-laser-machine",
    models: [
      { name: "Welding",   image: "/images/4in1-laser-feature-01-welding.webp",  badge: "Laser Welding",  subtitle: "High-speed laser welding with minimal distortion and no filler wire needed." },
      { name: "Cutting",   image: "/images/4in1-laser-feature-02-cutting.webp",  badge: "Laser Cutting",  subtitle: "Laser cutting head for on-site trimming and sheet processing." },
      { name: "Cleaning",  image: "/images/4in1-laser-feature-03-cleaning.webp", badge: "Laser Cleaning", subtitle: "Remove rust, paint and oxide layers without abrasives or chemicals." },
      { name: "Wire Feed", image: "/images/4in1-laser-feature-04-wirefeed.webp", badge: "Wire Feed",      subtitle: "Optional wire-feed attachment for gap-filling welds and overlay applications." },
    ],
  },
  {
    key: "laserCleaning",
    href: "/fabrication/laser-cleaning-machine",
    models: [
      { name: "No Chemicals",   image: "/images/laser-cleaning-feature-01-no-chemicals.webp", badge: "Chemical-Free", subtitle: "Zero solvents or chemical media — safe for operators and the environment." },
      { name: "No Media Blast", image: "/images/laser-cleaning-feature-02-no-media.webp",     badge: "No Abrasive",   subtitle: "Non-contact process preserves the base material surface." },
      { name: "Precision",      image: "/images/laser-cleaning-feature-03-precision.webp",    badge: "Selective",     subtitle: "Selectively ablate rust or coating without touching the substrate below." },
    ],
  },
  {
    key: "pressBreake",
    href: "/fabrication/cnc-press-brake",
    models: [
      { name: "Hydraulic Press Brake", image: "/images/press-brake-hydraulic-1.webp",       badge: "Hydraulic",       subtitle: "Hydraulic CNC press brake from 63 to 1600 tons for high tonnage and heavy plate, with electrohydraulic synchronization." },
      { name: "Electric Press Brake",  image: "/images/press-brake-electric-1.webp",        badge: "Servo Electric",  subtitle: "Servo-electric press brake with high precision and energy efficiency for fast, repeatable bends." },
      { name: "Auto Crowning",   image: "/images/cnc-press-brake-feature-03-crowning.webp", badge: "Auto Crowning", subtitle: "Hydraulic auto-crowning compensates beam deflection for consistent angle along length." },
      { name: "Back Gauge",      image: "/images/cnc-press-brake-feature-04-backgauge.webp",badge: "Back Gauge",    subtitle: "Multi-axis CNC back gauge for rapid repositioning and complex bend sequences." },
    ],
  },
  {
    key: "ironworker",
    href: "/fabrication/ironworker",
    models: [
      { name: "5 Stations",     image: "/images/ironworker-feature-01-stations.webp", badge: "Multi-Process", subtitle: "Punch, notch, shear plate, cut angles and cut solid bars in one hydraulic machine." },
      { name: "Punching",       image: "/images/ironworker-feature-02-punching.webp", badge: "60–120 ton",    subtitle: "VTM16IW, VTM20IW and VTM25IW models with punching pressure from 60 to 120 tons." },
      { name: "Notching",       image: "/images/ironworker-feature-03-notching.webp", badge: "Notching",      subtitle: "Fast corner notching for angles, channels and structural fabrication work." },
      { name: "Optional Bending", image: "/images/ironworker-feature-05-vdie.webp",  badge: "Optional",      subtitle: "Optional bending accessory for short bends and small formed parts." },
    ],
  },
  {
    key: "panelBender",
    href: "/fabrication/panel-bender",
    models: [
      { name: "BDC-1200", image: "/images/vtm-p-1.webp", badge: "1200 mm", subtitle: "CNC suction panel bender — bends thin sheet up to 1200 mm, scratch-free." },
      { name: "BDC-1500", image: "/images/vtm-p-2.webp", badge: "1500 mm", subtitle: "Larger format up to 1500 mm with higher motor power." },
    ],
  },
  {
    key: "airCompressor",
    href: "/fabrication/air-compressor",
    models: [
      { name: "15KW-16bar", image: "/images/vtm-air-1.webp", badge: "1.2 m³/min", subtitle: "All-in-one 16 bar integrated screw compressor with dryer and dual receivers." },
      { name: "22KW-16bar", image: "/images/vtm-air-1.webp", badge: "2.2 m³/min", subtitle: "Higher flow with variable-frequency drive for stable laser-grade air." },
      { name: "37KW-16bar", image: "/images/vtm-air-2.webp", badge: "3.3 m³/min", subtitle: "Skid-mounted air power station for high-volume laser cutting." },
    ],
  },
];

const FABRICATION_ES: FabProduct[] = [
  {
    key: "fiberLaser",
    href: "/fabrication/fiber-laser-cutting-machine",
    models: [
      { name: "Serie Pro", image: "/images/SHEET/EA series/main 3015  (1).webp", badge: "Más Popular",         subtitle: "Láser de plancha 1.5–12 kW: desde talleres que inician hasta producción continua de alto volumen en acero, inoxidable y aluminio." },
      { name: "Serie SE", image: "/images/SHEET/SE Series/1.webp",               badge: "Clase 1 Cerrada",     subtitle: "Láser Clase 1 totalmente cerrado de 1–3 kW, ideal para cumplimiento de seguridad en planta." },
      { name: "Serie PE", image: "/images/SHEET/PE Series/1.webp",               badge: "Seguridad Clase 1",   subtitle: "Cerramiento de protección de 1.5–3 kW con enclavamiento, perfecto para talleres abiertos." },
      { name: "Serie L",  image: "/images/SHEET/L Series/1.webp",                badge: "Cortes Más Gruesos",  subtitle: "Ultra alta potencia 12–50 kW+ para cortar placa gruesa hasta 80 mm de acero al carbono." },
      { name: "Serie TT", image: "/images/SHEET/TT Series/1.webp",               badge: "Carga Automática",    subtitle: "Sistema TransTower de 2–50 kW con carga/descarga automatizada para producción sin operador." },
      { name: "Serie Mi", image: "/images/SHEET/Mi Series/mini.107.webp",        badge: "Alta Precisión",      subtitle: "Mini láser de 1–6 kW con posicionamiento ±0.008 mm para piezas pequeñas e intrincadas." },
    ],
  },
  {
    key: "fiberLaserTube",
    href: "/fabrication/fiber-laser-tube-cutting-machine",
    models: [
      { name: "Serie MT",  image: "/images/tube-mt-1.webp",  badge: "Multi-Perfil", subtitle: "Perfiles de tubo redondo y cuadrado hasta 160 mm de diámetro para trabajos estructurales livianos y medianos." },
      { name: "Serie T",   image: "/images/tube-t-1.webp",   badge: "Tubo Pesado",  subtitle: "Corte de tubo redondo hasta 350 mm de diámetro con opciones de potencia de 1.5–6 kW." },
      { name: "Serie AT3", image: "/images/tube-at3-1.webp", badge: "3 Mandriles",  subtitle: "Carga y descarga automática con tres mandriles para producción eficiente y bajo desperdicio." },
      { name: "Serie AT4", image: "/images/tube-at4-1.webp", badge: "4 Mandriles",  subtitle: "Carga y descarga simultánea con cuatro mandriles para corte de tubos pesado y de alta velocidad." },
    ],
  },
  {
    key: "sheetTubeCombo",
    href: "/fabrication/sheet-tube-laser-cutting-machine",
    models: [
      { name: "VTM-ST 3015", image: "/images/sheet-tube-combo-hero.webp",                badge: "Formato 5×10",   subtitle: "Cambia entre modo plancha 5×10 y modo tubo sin cambios de herramientas." },
      { name: "VTM-ST 4020", image: "/images/sheet-tube-combo-feature-01-dualmode.webp", badge: "Formato 6.6×13", subtitle: "Formato dual más grande para talleres que cortan tanto placa como tubo estructural." },
    ],
  },
  {
    key: "fourInOne",
    href: "/fabrication/4-in-1-laser-machine",
    models: [
      { name: "Soldadura",          image: "/images/4in1-laser-feature-01-welding.webp",  badge: "Soldadura Láser",      subtitle: "Soldadura láser de alta velocidad con distorsión mínima y sin alambre de relleno." },
      { name: "Corte",              image: "/images/4in1-laser-feature-02-cutting.webp",  badge: "Corte Láser",          subtitle: "Cabezal de corte láser para recortes en sitio y procesamiento de plancha." },
      { name: "Limpieza",           image: "/images/4in1-laser-feature-03-cleaning.webp", badge: "Limpieza Láser",       subtitle: "Elimina óxido, pintura y capas de óxido sin abrasivos ni químicos." },
      { name: "Alimentación Hilo",  image: "/images/4in1-laser-feature-04-wirefeed.webp", badge: "Alimentación de Hilo", subtitle: "Accesorio de alimentación de hilo para soldaduras de relleno y aplicaciones de revestimiento." },
    ],
  },
  {
    key: "laserCleaning",
    href: "/fabrication/laser-cleaning-machine",
    models: [
      { name: "Sin Químicos", image: "/images/laser-cleaning-feature-01-no-chemicals.webp", badge: "Sin Químicos", subtitle: "Sin solventes ni medios químicos — seguro para operadores y el medio ambiente." },
      { name: "Sin Abrasivo", image: "/images/laser-cleaning-feature-02-no-media.webp",     badge: "Sin Abrasivo", subtitle: "Proceso sin contacto que preserva la superficie del material base." },
      { name: "Precisión",    image: "/images/laser-cleaning-feature-03-precision.webp",    badge: "Selectivo",    subtitle: "Ablación selectiva de óxido o recubrimiento sin afectar el sustrato inferior." },
    ],
  },
  {
    key: "pressBreake",
    href: "/fabrication/cnc-press-brake",
    models: [
      { name: "Plegadora Hidráulica", image: "/images/press-brake-hydraulic-1.webp",        badge: "Hidráulica",          subtitle: "Plegadora hidráulica CNC de 63 a 1600 toneladas para alto tonelaje y placa gruesa, con sincronización electrohidráulica." },
      { name: "Plegadora Eléctrica",  image: "/images/press-brake-electric-1.webp",         badge: "Servo-Eléctrica",     subtitle: "Plegadora servo-eléctrica de alta precisión y eficiencia energética para plegados rápidos y repetibles." },
      { name: "Coronamiento Auto",    image: "/images/cnc-press-brake-feature-03-crowning.webp", badge: "Coronamiento Auto",    subtitle: "El coronamiento hidráulico compensa la deflexión de la viga para un ángulo uniforme a lo largo." },
      { name: "Retroceso CNC",        image: "/images/cnc-press-brake-feature-04-backgauge.webp",badge: "Retroceso",            subtitle: "Retroceso CNC multi-eje para reposicionamiento rápido y secuencias de plegado complejas." },
    ],
  },
  {
    key: "ironworker",
    href: "/fabrication/ironworker",
    models: [
      { name: "5 Estaciones",      image: "/images/ironworker-feature-01-stations.webp", badge: "Multiproceso",      subtitle: "Perforar, escantonar, cortar planchas, cortar ángulos y cortar macizos en una sola máquina." },
      { name: "Punzonado",         image: "/images/ironworker-feature-02-punching.webp", badge: "60–120 ton",        subtitle: "Modelos VTM16IW, VTM20IW y VTM25IW con presión de punzonado de 60 a 120 toneladas." },
      { name: "Escantonado",       image: "/images/ironworker-feature-03-notching.webp", badge: "Escantonado",       subtitle: "Trabajo rápido para ángulos, canales y piezas de fabricación estructural." },
      { name: "Plegado Opcional",  image: "/images/ironworker-feature-05-vdie.webp",     badge: "Opcional",          subtitle: "Accesorio de plegado para pliegues cortos y piezas pequeñas." },
    ],
  },
  {
    key: "panelBender",
    href: "/fabrication/panel-bender",
    models: [
      { name: "BDC-1200", image: "/images/vtm-p-1.webp", badge: "1200 mm", subtitle: "Paneladora CNC por succión — pliega lámina delgada hasta 1200 mm, sin rayaduras." },
      { name: "BDC-1500", image: "/images/vtm-p-2.webp", badge: "1500 mm", subtitle: "Mayor formato hasta 1500 mm con más potencia de motor." },
    ],
  },
  {
    key: "airCompressor",
    href: "/fabrication/air-compressor",
    models: [
      { name: "15KW-16bar", image: "/images/vtm-air-1.webp", badge: "1.2 m³/min", subtitle: "Compresor de tornillo integrado de 16 bar con secador, filtros y doble acumulador." },
      { name: "22KW-16bar", image: "/images/vtm-air-1.webp", badge: "2.2 m³/min", subtitle: "Mayor caudal con variador de frecuencia para aire estable de calidad láser." },
      { name: "37KW-16bar", image: "/images/vtm-air-2.webp", badge: "3.3 m³/min", subtitle: "Estación montada en patín (skid) para corte láser de alto volumen." },
    ],
  },
];

// ─── Fabrication section ──────────────────────────────────────────────────────

function FabricationGroup({ label, heading, viewAllLabel, viewLabel, data }: {
  label: string; heading: string; viewAllLabel: string; viewLabel: string; data: FabProduct[];
}) {
  const t = useTranslations("home");
  const [activeIdx, setActiveIdx] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = tabsRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = tabsRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => { el.removeEventListener("scroll", checkScroll); ro.disconnect(); };
  }, [checkScroll]);

  const scrollInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const startScroll = useCallback((dir: "left" | "right") => {
    if (scrollInterval.current) return;
    scrollInterval.current = setInterval(() => {
      const el = tabsRef.current;
      if (!el) return;
      el.scrollBy({ left: dir === "left" ? -6 : 6, behavior: "auto" });
    }, 16);
  }, []);

  const stopScroll = useCallback(() => {
    if (scrollInterval.current) { clearInterval(scrollInterval.current); scrollInterval.current = null; }
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <SectionLabel light className="mb-3">{label}</SectionLabel>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white leading-tight">{heading}</h2>
          <Link href="/fabrication" className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors flex-shrink-0 pb-1">
            {viewAllLabel}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="relative flex items-stretch border-b border-white/10">
          {/* Left arrow */}
          <button
            onMouseEnter={() => startScroll("left")}
            onMouseLeave={stopScroll}
            aria-label="Scroll left"
            className={`flex-shrink-0 flex items-center justify-center w-8 text-white/40 hover:text-white transition-colors duration-150 ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div
            ref={tabsRef}
            className="flex flex-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {data.map((p, i) => (
              <button
                key={p.key}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
                className={`relative flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors duration-150 whitespace-nowrap focus:outline-none ${
                  i === activeIdx ? "text-white" : "text-white/40 hover:text-white/80"
                }`}
              >
                {t(`fabrication.products.${p.key}.name`)}
                {i === activeIdx && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-vtm-red" />}
              </button>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onMouseEnter={() => startScroll("right")}
            onMouseLeave={stopScroll}
            aria-label="Scroll right"
            className={`flex-shrink-0 flex items-center justify-center w-8 text-white/40 hover:text-white transition-colors duration-150 ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {/* Preview panels */}
      <div className="relative">
        {data.map((p, i) => (
          <div
            key={p.key}
            className={`transition-opacity duration-300 ${
              i === activeIdx ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-10 lg:py-14">
              <CircularTestimonials
                items={data[i].models.map((m) => ({
                  src: m.image,
                  name: m.name,
                  designation: m.badge ?? "",
                  quote: m.subtitle ?? "",
                }))}
                autoplay={false}
                cta={
                  <Button href={p.href} variant="primary" size="sm" arrow>
                    {viewLabel}
                  </Button>
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function ProductShowcase() {
  const t = useTranslations("home");
  const locale = useLocale();
  const viewLabel = locale === "es" ? "Ver Máquina" : "View Machine";
  const fabricationData = orderProducts(locale === "es" ? FABRICATION_ES : FABRICATION);

  return (
    <section id="products">
      <div className="bg-vtm-dark">
        <FabricationGroup
          label={t("fabrication.label")}
          heading={t("fabrication.heading")}
          viewAllLabel={t("fabrication.viewAll")}
          viewLabel={viewLabel}
          data={fabricationData}
        />
        <div className="h-16" />
      </div>
      {/* Clear divider closing the products section */}
      <div className="h-2 bg-vtm-red" aria-hidden="true" />
    </section>
  );
}
