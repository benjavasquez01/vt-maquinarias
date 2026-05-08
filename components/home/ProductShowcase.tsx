"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
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

// ─── Data ─────────────────────────────────────────────────────────────────────

const FABRICATION: FabProduct[] = [
  {
    key: "fiberLaser",
    href: "/fabrication/fiber-laser-cutting-machine",
    models: [
      { name: "A Series", image: "/images/SHEET/EA series/main 3015  (1).png", badge: "Most Accessible",    subtitle: "1.5–3 kW entry-level sheet laser with solid accuracy and a compact footprint." },
      { name: "B Series",  image: "/images/SHEET/B Series/0 main.png",           badge: "Most Popular",       subtitle: "2–12 kW workhorse for mid-volume shops cutting carbon steel, stainless and aluminum." },
      { name: "FE Series", image: "/images/fiber-laser-feature-04-exchange-table.png", badge: "Highest Throughput", subtitle: "3–12 kW dual exchange-table design for near-zero downtime production." },
      { name: "SE Series", image: "/images/SHEET/SE Series/1.png",               badge: "Class 1 Enclosed",   subtitle: "1–3 kW fully enclosed Class 1 laser — ideal for shop-floor safety compliance." },
      { name: "PE Series", image: "/images/SHEET/PE Series/1.png",               badge: "Class 1 Safety",     subtitle: "1.5–3 kW protective enclosure with interlock, perfect for open workshops." },
      { name: "L Series",  image: "/images/SHEET/L Series/1.png",                badge: "Thickest Cuts",      subtitle: "12–50 kW+ ultra-high power for cutting thick plate up to 80 mm carbon steel." },
      { name: "TT Series", image: "/images/SHEET/TT Series/1.png",               badge: "Auto Loading",       subtitle: "2–50 kW TransTower system with automated load/unload for lights-out production." },
      { name: "Mi Series", image: "/images/SHEET/Mi Series/mini.107.png",        badge: "High Precision",     subtitle: "1–6 kW mini laser with ±0.008 mm positioning for small, intricate parts." },
    ],
  },
  {
    key: "fiberLaserTube",
    href: "/fabrication/fiber-laser-tube-cutting-machine",
    models: [
      { name: "VTM-T",  image: "/images/tube-t-1.jpg",  badge: "Standard",      subtitle: "Round tube, square and rectangular profile cutting up to 220 mm diameter." },
      { name: "VTM-MT", image: "/images/tube-mt-1.jpg", badge: "Multi-Profile", subtitle: "Handles round, square, rectangular, angle iron, channel and H-beam in one chuck." },
      { name: "VTM-AT", image: "/images/tube-at-1.jpg", badge: "Auto Chuck",    subtitle: "Heavy-duty automatic chuck for large-diameter and heavy structural profiles." },
    ],
  },
  {
    key: "sheetTubeCombo",
    href: "/fabrication/sheet-tube-laser-cutting-machine",
    models: [
      { name: "VTM-ST 3015", image: "/images/sheet-tube-combo-hero.png",                 badge: "5×10 Format",   subtitle: "Switch between 5×10 sheet and tube mode without tooling changes." },
      { name: "VTM-ST 4020", image: "/images/sheet-tube-combo-feature-01-dualmode.png",  badge: "6.6×13 Format", subtitle: "Larger dual-mode format for shops cutting both plate and structural pipe." },
    ],
  },
  {
    key: "fourInOne",
    href: "/fabrication/4-in-1-laser-machine",
    models: [
      { name: "Welding",   image: "/images/4in1-laser-feature-01-welding.png",  badge: "Laser Welding",  subtitle: "High-speed handheld laser welding with minimal distortion and no filler wire needed." },
      { name: "Cutting",   image: "/images/4in1-laser-feature-02-cutting.png",  badge: "Laser Cutting",  subtitle: "Portable laser cutting head for on-site trimming and sheet processing." },
      { name: "Cleaning",  image: "/images/4in1-laser-feature-03-cleaning.png", badge: "Laser Cleaning", subtitle: "Remove rust, paint and oxide layers without abrasives or chemicals." },
      { name: "Wire Feed", image: "/images/4in1-laser-feature-04-wirefeed.png", badge: "Wire Feed",      subtitle: "Optional wire-feed attachment for gap-filling welds and overlay applications." },
    ],
  },
  {
    key: "laserCleaning",
    href: "/fabrication/laser-cleaning-machine",
    models: [
      { name: "No Chemicals",   image: "/images/laser-cleaning-feature-01-no-chemicals.png", badge: "Chemical-Free", subtitle: "Zero solvents or chemical media — safe for operators and the environment." },
      { name: "No Media Blast", image: "/images/laser-cleaning-feature-02-no-media.png",     badge: "No Abrasive",   subtitle: "Non-contact process preserves the base material surface." },
      { name: "Precision",      image: "/images/laser-cleaning-feature-03-precision.png",    badge: "Selective",     subtitle: "Selectively ablate rust or coating without touching the substrate below." },
    ],
  },
  {
    key: "pressBreake",
    href: "/fabrication/cnc-press-brake",
    models: [
      { name: "CNC Press Brake", image: "/images/cnc-press-brake-hero.jpg",                badge: "CNC Control",   subtitle: "Full-range CNC press brakes from 40 to 300+ tons with back-gauge and crowning." },
      { name: "Auto Crowning",   image: "/images/cnc-press-brake-feature-03-crowning.png", badge: "Auto Crowning", subtitle: "Hydraulic auto-crowning compensates beam deflection for consistent angle along length." },
      { name: "Back Gauge",      image: "/images/cnc-press-brake-feature-04-backgauge.png",badge: "Back Gauge",    subtitle: "Multi-axis CNC back gauge for rapid repositioning and complex bend sequences." },
    ],
  },
  {
    key: "ironworker",
    href: "/fabrication/ironworker",
    models: [
      { name: "Multi-Station",  image: "/images/ironworker-feature-01-stations.png", badge: "Multi-Station",  subtitle: "Punch, shear, notch and bend structural steel at multiple simultaneous stations." },
      { name: "Punching",       image: "/images/ironworker-feature-02-punching.png", badge: "Punching",       subtitle: "Clean punch holes in flat bar, angle and plate with interchangeable tooling." },
      { name: "Notching",       image: "/images/ironworker-feature-03-notching.png", badge: "Notching",       subtitle: "Angle iron notching for tight-fit structural frames without grinding." },
      { name: "Flat Bar Shear", image: "/images/ironworker-feature-04-flatbar.png",  badge: "Flat Bar Shear", subtitle: "Straight shear cuts on flat bar stock with minimal burr." },
    ],
  },
];

const FABRICATION_ES: FabProduct[] = [
  {
    key: "fiberLaser",
    href: "/fabrication/fiber-laser-cutting-machine",
    models: [
      { name: "Serie A", image: "/images/SHEET/EA series/main 3015  (1).png", badge: "Más Accesible",       subtitle: "Láser de chapa de entrada 1.5–3 kW con precisión sólida y huella compacta." },
      { name: "Serie B",  image: "/images/SHEET/B Series/0 main.png",           badge: "Más Popular",         subtitle: "Potencia de 2–12 kW para talleres de volumen medio que cortan acero, inoxidable y aluminio." },
      { name: "Serie FE", image: "/images/fiber-laser-feature-04-exchange-table.png", badge: "Mayor Rendimiento", subtitle: "Mesa de intercambio dual de 3–12 kW para producción con tiempo de inactividad casi nulo." },
      { name: "Serie SE", image: "/images/SHEET/SE Series/1.png",               badge: "Clase 1 Cerrada",     subtitle: "Láser Clase 1 totalmente cerrado de 1–3 kW, ideal para cumplimiento de seguridad en planta." },
      { name: "Serie PE", image: "/images/SHEET/PE Series/1.png",               badge: "Seguridad Clase 1",   subtitle: "Cerramiento de protección de 1.5–3 kW con enclavamiento, perfecto para talleres abiertos." },
      { name: "Serie L",  image: "/images/SHEET/L Series/1.png",                badge: "Cortes Más Gruesos",  subtitle: "Ultra alta potencia 12–50 kW+ para cortar placa gruesa hasta 80 mm de acero al carbono." },
      { name: "Serie TT", image: "/images/SHEET/TT Series/1.png",               badge: "Carga Automática",    subtitle: "Sistema TransTower de 2–50 kW con carga/descarga automatizada para producción sin operador." },
      { name: "Serie Mi", image: "/images/SHEET/Mi Series/mini.107.png",        badge: "Alta Precisión",      subtitle: "Mini láser de 1–6 kW con posicionamiento ±0.008 mm para piezas pequeñas e intrincadas." },
    ],
  },
  {
    key: "fiberLaserTube",
    href: "/fabrication/fiber-laser-tube-cutting-machine",
    models: [
      { name: "VTM-T",  image: "/images/tube-t-1.jpg",  badge: "Estándar",         subtitle: "Corte de tubo redondo, cuadrado y rectangular hasta 220 mm de diámetro." },
      { name: "VTM-MT", image: "/images/tube-mt-1.jpg", badge: "Multi-Perfil",    subtitle: "Maneja tubo redondo, cuadrado, rectangular, hierro angular, canal y viga H en un solo chuck." },
      { name: "VTM-AT", image: "/images/tube-at-1.jpg", badge: "Chuck Automático", subtitle: "Chuck automático de uso intensivo para perfiles estructurales de gran diámetro y peso." },
    ],
  },
  {
    key: "sheetTubeCombo",
    href: "/fabrication/sheet-tube-laser-cutting-machine",
    models: [
      { name: "VTM-ST 3015", image: "/images/sheet-tube-combo-hero.png",                badge: "Formato 5×10",   subtitle: "Cambia entre modo chapa 5×10 y modo tubo sin cambios de herramientas." },
      { name: "VTM-ST 4020", image: "/images/sheet-tube-combo-feature-01-dualmode.png", badge: "Formato 6.6×13", subtitle: "Formato dual más grande para talleres que cortan tanto placa como tubo estructural." },
    ],
  },
  {
    key: "fourInOne",
    href: "/fabrication/4-in-1-laser-machine",
    models: [
      { name: "Soldadura",          image: "/images/4in1-laser-feature-01-welding.png",  badge: "Soldadura Láser",      subtitle: "Soldadura láser portátil de alta velocidad con distorsión mínima y sin alambre de relleno." },
      { name: "Corte",              image: "/images/4in1-laser-feature-02-cutting.png",  badge: "Corte Láser",          subtitle: "Cabezal de corte láser portátil para recortes en sitio y procesamiento de chapa." },
      { name: "Limpieza",           image: "/images/4in1-laser-feature-03-cleaning.png", badge: "Limpieza Láser",       subtitle: "Elimina óxido, pintura y capas de óxido sin abrasivos ni químicos." },
      { name: "Alimentación Hilo",  image: "/images/4in1-laser-feature-04-wirefeed.png", badge: "Alimentación de Hilo", subtitle: "Accesorio de alimentación de hilo para soldaduras de relleno y aplicaciones de revestimiento." },
    ],
  },
  {
    key: "laserCleaning",
    href: "/fabrication/laser-cleaning-machine",
    models: [
      { name: "Sin Químicos", image: "/images/laser-cleaning-feature-01-no-chemicals.png", badge: "Sin Químicos", subtitle: "Sin solventes ni medios químicos — seguro para operadores y el medio ambiente." },
      { name: "Sin Abrasivo", image: "/images/laser-cleaning-feature-02-no-media.png",     badge: "Sin Abrasivo", subtitle: "Proceso sin contacto que preserva la superficie del material base." },
      { name: "Precisión",    image: "/images/laser-cleaning-feature-03-precision.png",    badge: "Selectivo",    subtitle: "Ablación selectiva de óxido o recubrimiento sin afectar el sustrato inferior." },
    ],
  },
  {
    key: "pressBreake",
    href: "/fabrication/cnc-press-brake",
    models: [
      { name: "Plegadora CNC", image: "/images/cnc-press-brake-hero.jpg",                badge: "Control CNC",         subtitle: "Prensas plegadoras CNC de 40 a 300+ toneladas con retroceso y coronamiento automático." },
      { name: "Coronamiento Auto",    image: "/images/cnc-press-brake-feature-03-crowning.png", badge: "Coronamiento Auto",    subtitle: "El coronamiento hidráulico compensa la deflexión de la viga para un ángulo uniforme a lo largo." },
      { name: "Retroceso CNC",        image: "/images/cnc-press-brake-feature-04-backgauge.png",badge: "Retroceso",            subtitle: "Retroceso CNC multi-eje para reposicionamiento rápido y secuencias de plegado complejas." },
    ],
  },
  {
    key: "ironworker",
    href: "/fabrication/ironworker",
    models: [
      { name: "Multi-Estación",    image: "/images/ironworker-feature-01-stations.png", badge: "Multi-Estación",    subtitle: "Punzonar, cizallar, entallar y doblar acero estructural en múltiples estaciones simultáneas." },
      { name: "Punzonado",         image: "/images/ironworker-feature-02-punching.png", badge: "Punzonado",         subtitle: "Agujeros limpios en barra plana, angular y placa con herramientas intercambiables." },
      { name: "Entallado",         image: "/images/ironworker-feature-03-notching.png", badge: "Entallado",         subtitle: "Entallado de hierro angular para marcos estructurales de ajuste preciso sin esmerilado." },
      { name: "Cizalla Barra Plana", image: "/images/ironworker-feature-04-flatbar.png", badge: "Cizalla Barra Plana", subtitle: "Cortes rectos en barra plana con mínima rebaba." },
    ],
  },
];

const AUTOMATION = [
  { key: "cobot",      href: "/automation/collaborative-welding-arm",  image: "/images/cobot-welding-hero-2.png" },
  { key: "industrial", href: "/automation/industrial-welding-arm",      image: "/images/industrial-welding-arm-hero.png" },
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

// ─── Automation section ───────────────────────────────────────────────────────

function AutomationGroup({ label, heading, viewAllLabel, viewLabel }: {
  label: string; heading: string; viewAllLabel: string; viewLabel: string;
}) {
  const t = useTranslations("home");

  return (
    <div className="bg-[#0e0e0e]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <SectionLabel light className="mb-3">{label}</SectionLabel>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white leading-tight">{heading}</h2>
          <Link href="/automation" className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors flex-shrink-0 pb-1">
            {viewAllLabel}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-4">
          {AUTOMATION.map((p) => (
            <Link key={p.key} href={p.href} className="group relative overflow-hidden block">
              <div className="relative h-[340px] lg:h-[420px] overflow-hidden">
                <Image
                  src={p.image}
                  alt={t(`automation.products.${p.key}.name`)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase bg-vtm-red text-white px-2.5 py-1">
                  {t("automation.badge")}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="font-headline text-xl lg:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-vtm-red transition-colors">
                    {t(`automation.products.${p.key}.name`)}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-sm">
                    {t(`automation.products.${p.key}.description`)}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-vtm-red group-hover:gap-3 transition-all">
                    {viewLabel}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="h-2 bg-vtm-red mt-16" />
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function ProductShowcase() {
  const t = useTranslations("home");
  const locale = useLocale();
  const viewLabel = locale === "es" ? "Ver Máquina" : "View Machine";
  const fabricationData = locale === "es" ? FABRICATION_ES : FABRICATION;

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
      <AutomationGroup
        label={t("automation.label")}
        heading={t("automation.heading")}
        viewAllLabel={t("automation.explore")}
        viewLabel={viewLabel}
      />
    </section>
  );
}
