import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { GenericQuoteForm } from "@/components/product/GenericQuoteForm";
import { GenericFaqAccordion } from "@/components/product/GenericFaqAccordion";
import { GenericStickyBar } from "@/components/product/GenericStickyBar";
import { AirHeroCarousel } from "./AirHeroCarousel";

export const metadata: Metadata = {
  title: "VTM-AIR — Compresor de Tornillo Integrado 16 bar",
  description:
    "Compresor de tornillo integrado VTM-AIR de 16 bar con variador de frecuencia, secador, filtros finos y doble acumulador. Aire seco, limpio y estable — ideal para máquinas de corte láser. 15, 22 y 37 kW.",
};

const HIGHLIGHTS = ["Operación silenciosa", "Flujo constante", "Recuperación rápida", "Doble acumulador", "Aire seco y limpio"];

const ADVANTAGES = [
  { number: "01", title: "Silencioso", body: "La tecnología de tornillo reduce vibraciones y ruido, siendo menos invasiva en el entorno de trabajo." },
  { number: "02", title: "Frecuencia variable", body: "El variador ajusta automáticamente la velocidad del motor según la demanda real de aire." },
  { number: "03", title: "Eficiencia energética", body: "El motor no trabaja exigido al 100% todo el tiempo; acelera sólo cuando se requiere mayor carga, reduciendo el consumo eléctrico y el desgaste." },
  { number: "04", title: "Aire estable y limpio", body: "Entrega flujo constante, recuperación rápida y doble acumulación — aire completamente limpio y seco." },
  { number: "05", title: "Ideal para corte láser", body: "Presión estable, secado eficiente y filtración fina para proteger el proceso y mejorar la calidad del corte." },
];

const SYSTEM_FLOW = [
  { label: "Compresor de tornillo",               image: "/images/vtm-air-step-1-compresor.webp" },
  { label: "Secador refrigerativo",               image: "/images/vtm-air-step-2-secador.webp" },
  { label: "Filtros finos de precisión",          image: "/images/vtm-air-step-3-filtros.webp" },
  { label: "Doble acumulador de aire",            image: "/images/vtm-air-step-4-acumulador.webp" },
  { label: "Salida hacia máquina de corte láser", image: "/images/vtm-air-step-5-salida.webp" },
];

const SPEC_HEADERS = ["15KW-16bar", "22KW-16bar", "37KW-16bar"];

const SPEC_ROWS: { label: string; values: string[] }[] = [
  { label: "Tipo", values: ["Compresor de aire todo en uno", "Compresor de tornillo todo en uno", "Estación de aire montada en patín (skid)"] },
  { label: "Potencia", values: ["15 kW", "22 kW", "37 kW"] },
  { label: "Caudal del compresor", values: ["1.2 m³/min", "2.2 m³/min", "3.3 m³/min"] },
  { label: "Presión de trabajo", values: ["1.58 MPa (16 bar)", "1.58 MPa (16 bar)", "1.58 MPa (16 bar)"] },
  { label: "Refrigeración", values: ["Aire", "Aire", "Aire"] },
  { label: "Arranque / Control", values: ["Variador de frecuencia", "Variador de frecuencia", "Variador de frecuencia"] },
  { label: "Caudal del secador", values: ["2.0 m³/min", "2.6 m³/min", "3.8 m³/min"] },
  { label: "Punto de rocío / condensación", values: ["2–10 °C", "2–10 °C", "2–10 °C"] },
  { label: "Filtro fino", values: ["0.01 μm", "0.01 μm", "0.01 μm"] },
  { label: "Acumulación de aire", values: ["240 L ×2", "240 L ×2", "600 L ×2"] },
  { label: "Dimensiones generales", values: ["1800 × 790 × 1600 mm", "2000 × 880 × 1600 mm", "2800 × 1400 × 2500 mm"] },
  { label: "Masa bruta", values: ["480 kg", "580 kg", "850 kg"] },
];

const FAQS = [
  { question: "¿Por qué un compresor de tornillo para corte láser?", answer: "El corte láser de fibra exige aire a presión estable, seco y limpio. El compresor de tornillo VTM-AIR entrega flujo constante y aire libre de humedad y partículas, lo que mantiene un corte parejo, protege la óptica y reduce el mantenimiento de la máquina de corte." },
  { question: "¿Qué incluye el sistema integrado?", answer: "Compresor de tornillo, secador refrigerativo, filtros finos de precisión (0.01 μm) y doble acumulador de aire — todo en un solo equipo o montado sobre patín (skid). Solo conecta la alimentación y la salida hacia su máquina de corte." },
  { question: "¿Qué modelo necesito?", answer: "Depende de la potencia de su láser y de su consumo de aire: 15 kW (1.2 m³/min), 22 kW (2.2 m³/min) o 37 kW (3.3 m³/min). Cuéntenos su equipo y su asesor VTM dimensiona el modelo correcto." },
  { question: "¿Qué ventajas da el variador de frecuencia?", answer: "El variador ajusta la velocidad del motor a la demanda real de aire en lugar de trabajar siempre al 100%. Esto reduce el consumo eléctrico, el ruido y el desgaste, y mantiene una presión más estable." },
  { question: "¿Qué instalación requiere?", answer: "Alimentación trifásica de 380 V y refrigeración por aire. VTM coordina la instalación, la puesta en marcha y la capacitación, con repuestos y servicio técnico en Chile." },
];

const RELATED = [
  { name: "Cortadora Láser de Plancha", href: "/fabrication/fiber-laser-cutting-machine", tag: "Corte", imageId: "/images/fiber-laser-hero.webp" },
  { name: "Máquina de Corte Láser de Tubos", href: "/fabrication/fiber-laser-tube-cutting-machine", tag: "Corte de Tubo", imageId: "/images/fiber-laser-tube-hero.webp" },
  { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", tag: "Plegado", imageId: "/images/cnc-press-brake-hero.webp" },
  { name: "Paneladora CNC", href: "/fabrication/panel-bender", tag: "Plegado de Panel", imageId: "/images/vtm-p-1.webp" },
];

export default async function AirCompressorPage({ params }: { params: Promise<{ locale: string }> }) {
  await params;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-vtm-dark pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel light className="mb-4">Aire Comprimido para Corte Láser</SectionLabel>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight mb-3">VTM-AIR</h1>
            <p className="font-headline text-2xl md:text-3xl font-semibold text-vtm-red tracking-tight mb-6">Compresor de Tornillo Integrado 16 bar</p>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Compresor de tornillo, secador, filtros finos y doble acumulador en un solo equipo. Variador de frecuencia para mayor eficiencia, menor ruido y mejor estabilidad de presión — aire seco, limpio y estable, ideal para máquinas de corte láser.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {HIGHLIGHTS.map((h) => (
                <span key={h} className="text-xs border border-white/25 text-white/80 px-3 py-1.5">{h}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/quote?machine=air-compressor" variant="primary" size="lg">Solicitar Cotización</Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">Hablar con un Especialista</Button>
            </div>
          </div>
          <AirHeroCarousel />
        </div>
      </section>

      {/* ── Ventajas ─────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">Ventajas del Producto</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-14">Motor con variador de frecuencia</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map(({ number, title, body }) => (
              <div key={number} className="bg-white border border-vtm-gray-border p-8">
                <p className="font-headline text-[60px] font-bold text-vtm-gray-light leading-none select-none -ml-1 mb-4">{number}</p>
                <h3 className="font-headline text-xl font-bold text-vtm-dark tracking-tight mb-3">{title}</h3>
                <p className="text-vtm-gray-mid text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Configuración del sistema ────────────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">Configuración del Sistema</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-14">Del compresor a la máquina de corte</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {SYSTEM_FLOW.map((step, i) => (
              <div key={step.label} className="relative bg-white border border-vtm-gray-border p-4 flex flex-col">
                <span className="font-headline font-bold text-vtm-red text-lg">{String(i + 1).padStart(2, "0")}</span>
                <div className="relative w-full h-44 my-3">
                  <Image src={step.image} alt={step.label} fill className="object-contain" sizes="(max-width: 768px) 50vw, 20vw" />
                </div>
                <p className="font-headline font-semibold text-vtm-dark leading-tight text-sm mt-auto">{step.label}</p>
                {i < SYSTEM_FLOW.length - 1 && (
                  <svg className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-vtm-red" width="22" height="22" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Parámetros técnicos ──────────────────────────────── */}
      <section className="bg-white py-20 md:py-28" id="specs">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">Especificaciones Técnicas</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-12">Tres modelos disponibles</h2>
          <p className="md:hidden text-xs text-vtm-gray-mid mb-2 flex items-center gap-1.5">
            Deslice horizontalmente para comparar modelos
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </p>
          <div className="border border-vtm-gray-border overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-vtm-dark text-white">
                  <th className="text-left px-4 py-4 font-semibold text-xs tracking-wider uppercase">Modelo</th>
                  {SPEC_HEADERS.map((h) => (
                    <th key={h} className="text-left px-4 py-4 font-semibold text-xs tracking-wider uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPEC_ROWS.map((row, i) => (
                  <tr key={row.label} className={`border-b border-vtm-gray-border last:border-0 ${i % 2 === 1 ? "bg-vtm-gray-light/40" : "bg-white"}`}>
                    <td className="px-4 py-3 text-vtm-gray-mid font-medium">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-4 py-3 text-vtm-dark font-medium">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-vtm-gray-mid mt-4 italic">
            * Sistema con variador de frecuencia para mayor eficiencia energética, menor ruido y mejor estabilidad de presión. Compresor de tornillo de 16 bar con sistema de secado de aire.
          </p>
        </div>
      </section>

      {/* ── Quote CTA + form ─────────────────────────────────── */}
      <section className="bg-vtm-dark py-20 md:py-28" id="quote">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="md:grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel light className="mb-4">Obtener Precio</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">¿Necesita aire estable para su corte láser?</h2>
              <p className="text-white/60 leading-relaxed mb-6">Cuéntenos la potencia de su máquina y su consumo de aire — le recomendaremos el modelo VTM-AIR correcto con precio y plazo de entrega.</p>
              <ul className="space-y-2 text-white/50 text-sm">
                <li className="flex gap-2 items-center"><span className="text-vtm-red" aria-hidden="true">—</span>Sin compromiso</li>
                <li className="flex gap-2 items-center"><span className="text-vtm-red" aria-hidden="true">—</span>Respuesta en menos de 24 horas</li>
                <li className="flex gap-2 items-center"><span className="text-vtm-red" aria-hidden="true">—</span>Soporte y repuestos en Chile</li>
              </ul>
            </div>
            <GenericQuoteForm machineName="Compresor de Aire VTM-AIR" />
          </div>
        </div>
      </section>

      {/* ── Related ──────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24" id="related">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">Seguir Explorando</SectionLabel>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark tracking-tight mb-8">Máquinas Relacionadas</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible snap-x snap-mandatory">
            {RELATED.map(({ name, href, tag, imageId }) => (
              <Link key={href} href={href} className="group flex-shrink-0 w-56 md:w-auto border border-vtm-gray-border hover:border-vtm-dark transition-colors snap-start">
                <div className="relative aspect-[4/3] bg-vtm-gray-light overflow-hidden">
                  <Image src={imageId} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 224px, 25vw" />
                </div>
                <div className="p-4">
                  <Tag className="mb-2">{tag}</Tag>
                  <p className="font-headline font-semibold text-vtm-dark text-sm mt-2 group-hover:text-vtm-red transition-colors">{name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28" id="faq">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <SectionLabel className="mb-4">Preguntas</SectionLabel>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-10">Preguntas Frecuentes</h2>
            <GenericFaqAccordion faqs={FAQS} productName="VTM-AIR" />
          </div>
        </div>
      </section>

      <GenericStickyBar productName="Compresor de Aire VTM-AIR" slug="air-compressor" />
    </>
  );
}
