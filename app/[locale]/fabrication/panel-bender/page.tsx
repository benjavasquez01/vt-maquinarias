import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { GenericQuoteForm } from "@/components/product/GenericQuoteForm";
import { GenericFaqAccordion } from "@/components/product/GenericFaqAccordion";
import { GenericStickyBar } from "@/components/product/GenericStickyBar";
import { PanelHeroCarousel } from "./PanelHeroCarousel";

export const metadata: Metadata = {
  title: "VTM-P — Paneladora CNC por Succión",
  description:
    "Paneladora CNC por succión VTM-P con sistema de ventosas y hasta 23 ejes simultáneos. Plegado de lámina delgada de inoxidable, laminado en frío y aluminio sin rayaduras, a 0,2 s por plegado. Modelos BDC-1200 y BDC-1500.",
};

const HIGHLIGHTS = ["Sistema por ventosas", "Hasta 23 ejes simultáneos", "0,2 s por plegado", "Alta precisión", "Sin rayaduras"];

const ADVANTAGES = [
  { number: "01", title: "Sistema de ventosas", body: "Absorción y transferencia segura de la lámina, con rotación de 360° y posicionamiento multiejes para múltiples juntas — sin rayar la superficie." },
  { number: "02", title: "Diseño compacto y modular", body: "Facilita el mantenimiento, las actualizaciones y una integración flexible en el taller." },
  { number: "03", title: "Bancada estable y herramientas reforzadas", body: "Tratamiento térmico de recocido y estructura robusta para mantener la precisión de plegado a largo plazo." },
  { number: "04", title: "Alta productividad", body: "Velocidad máxima de 0,2 s por plegado y automatización completa para una producción continua y eficiente." },
];

const THIN_SHEET = ["Inox 201: hasta 1,0 mm", "Laminado en frío: hasta 1,0 mm", "Aluminio: hasta 1,3 mm", "Espesor mínimo: 0,35 mm"];
const AUTOMATION = ["Menor intervención manual", "Autodiagnóstico del sistema e interfaz amigable para automatización", "Alta repetibilidad de pieza"];
const SYSTEM_FLOW = ["Carga por ventosas", "Posicionamiento 360°", "Plegado múltiple", "Pieza terminada"];

const SPEC_HEADERS = ["BDC-1200", "BDC-1500"];

const SPEC_ROWS: { label: string; values: string[] }[] = [
  { label: "Velocidad máx. de plegado", values: ["0,2 s/plegado", "0,2 s/plegado"] },
  { label: "Longitud máxima de plegado", values: ["1200 mm", "1500 mm"] },
  { label: "Altura de plegado", values: ["170 mm", "170 mm"] },
  { label: "Espesor máximo *", values: ["Inox 201: 0,8 mm · Laminado en frío: 1,0 mm · Aluminio: 1,3 mm", "Inox 201: 0,8 mm · Laminado en frío: 1,3 mm · Aluminio: 1,3 mm"] },
  { label: "Espesor mínimo", values: ["0,35 mm", "0,35 mm"] },
  { label: "Tamaño máximo (L × A)", values: ["1200 × 1200 mm", "1500 × 1250 mm"] },
  { label: "Número de ejes", values: ["Hasta 23 ejes simultáneos", "Hasta 23 ejes simultáneos"] },
  { label: "Tensión nominal", values: ["380 V", "380 V"] },
  { label: "Potencia total del motor", values: ["30 kW", "39 kW"] },
  { label: "Dimensiones generales", values: ["3700 × 1800 × 2450 mm", "4000 × 2000 × 2550 mm"] },
  { label: "Masa bruta", values: ["9 T", "12 T"] },
];

const FAQS = [
  { question: "¿Qué es una paneladora por succión?", answer: "Es una plegadora que toma la lámina con un sistema de ventosas, la posiciona girándola en 360° y realiza múltiples plegados de forma automática — sin que el operador deba voltear la pieza y sin rayar la superficie. Ideal para producir paneles y perfiles de lámina delgada en serie." },
  { question: "¿Para qué materiales y espesores sirve?", answer: "Está optimizada para lámina delgada: inoxidable 201 hasta 0,8–1,0 mm, laminado en frío hasta 1,0–1,3 mm y aluminio hasta 1,3 mm, con un espesor mínimo de 0,35 mm. El espesor máximo exacto depende del material y del modelo." },
  { question: "¿Qué modelo elegir, BDC-1200 o BDC-1500?", answer: "Por la longitud de plegado y el tamaño de pieza: BDC-1200 pliega hasta 1200 mm (pieza hasta 1200×1200 mm); BDC-1500 pliega hasta 1500 mm (pieza hasta 1500×1250 mm) con mayor potencia. Su asesor VTM lo dimensiona según su producción." },
  { question: "¿Por qué pliega \"sin rayaduras\"?", answer: "El sistema de ventosas manipula la lámina por succión, sin arrastre ni contacto agresivo sobre la cara visible. Esto es clave para acabados a la vista en inoxidable y aluminio, donde una rayadura significa reproceso o rechazo." },
  { question: "¿Es apta para automatización?", answer: "Sí. Trabaja con hasta 23 ejes simultáneos, autodiagnóstico del sistema e interfaz amigable para automatización, logrando alta repetibilidad de pieza con mínima intervención manual — pensada para producción continua." },
];

const RELATED = [
  { name: "Plegadora CNC", href: "/fabrication/cnc-press-brake", tag: "Plegado", imageId: "/images/cnc-press-brake-hero.webp" },
  { name: "Cortadora Láser de Plancha", href: "/fabrication/fiber-laser-cutting-machine", tag: "Corte", imageId: "/images/fiber-laser-hero.webp" },
  { name: "Punzonadora", href: "/fabrication/ironworker", tag: "Multiproceso", imageId: "/images/ironworker-hero.webp" },
  { name: "Compresor de Aire", href: "/fabrication/air-compressor", tag: "Aire Comprimido", imageId: "/images/vtm-air-1.webp" },
];

export default async function PanelBenderPage({ params }: { params: Promise<{ locale: string }> }) {
  await params;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-vtm-dark pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel light className="mb-4">Plegado de Panel por Succión</SectionLabel>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight mb-3">VTM-P</h1>
            <p className="font-headline text-2xl md:text-3xl font-semibold text-vtm-red tracking-tight mb-6">Paneladora CNC por Succión</p>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Plegado de lámina delgada con sistema de ventosas y hasta 23 ejes simultáneos. Inoxidable, laminado en frío y aluminio plegados sin rayaduras, a 0,2 s por plegado, con automatización completa y alta repetibilidad.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {HIGHLIGHTS.map((h) => (
                <span key={h} className="text-xs border border-white/25 text-white/80 px-3 py-1.5">{h}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/quote?machine=panel-bender" variant="primary" size="lg">Solicitar Cotización</Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">Hablar con un Especialista</Button>
            </div>
          </div>
          <PanelHeroCarousel />
        </div>
      </section>

      {/* ── Ventajas ─────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">Ventajas del Producto</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-14">Plegado preciso, sin rayaduras</h2>
          <div className="grid md:grid-cols-2 gap-6">
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

      {/* ── Lámina delgada + Automatización ──────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-vtm-gray-border p-8">
            <h3 className="font-headline font-bold text-vtm-dark text-2xl mb-5">Ideal para lámina delgada</h3>
            <ul className="space-y-3">
              {THIN_SHEET.map((item) => (
                <li key={item} className="flex items-start gap-3 text-vtm-dark"><span className="text-vtm-red mt-0.5 flex-shrink-0" aria-hidden="true">—</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-vtm-gray-border p-8">
            <h3 className="font-headline font-bold text-vtm-dark text-2xl mb-5">Automatización segura</h3>
            <ul className="space-y-3">
              {AUTOMATION.map((item) => (
                <li key={item} className="flex items-start gap-3 text-vtm-dark"><span className="text-vtm-red mt-0.5 flex-shrink-0" aria-hidden="true">—</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Configuración del sistema ────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">Configuración del Sistema</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-14">De la lámina a la pieza terminada</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SYSTEM_FLOW.map((step, i) => (
              <div key={step} className="relative bg-vtm-gray-light border border-vtm-gray-border p-6 flex flex-col">
                <span className="font-headline font-bold text-vtm-red text-lg">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-headline font-semibold text-vtm-dark mt-2 leading-tight">{step}</p>
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
      <section className="bg-vtm-gray-light py-20 md:py-28" id="specs">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">Especificaciones Técnicas</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-12">Dos modelos disponibles</h2>
          <div className="border border-vtm-gray-border overflow-x-auto bg-white">
            <table className="w-full text-sm min-w-[560px]">
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
            * El espesor máximo depende del material y del modelo. Consulte a su asesor VTM para su aplicación específica.
          </p>
        </div>
      </section>

      {/* ── Quote CTA + form ─────────────────────────────────── */}
      <section className="bg-vtm-dark py-20 md:py-28" id="quote">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="md:grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel light className="mb-4">Obtener Precio</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">¿Pliega lámina delgada en serie?</h2>
              <p className="text-white/60 leading-relaxed mb-6">Cuéntenos sus materiales, espesores y volúmenes — le recomendaremos el modelo VTM-P correcto con precio y plazo de entrega.</p>
              <ul className="space-y-2 text-white/50 text-sm">
                <li className="flex gap-2 items-center"><span className="text-vtm-red" aria-hidden="true">—</span>Sin compromiso</li>
                <li className="flex gap-2 items-center"><span className="text-vtm-red" aria-hidden="true">—</span>Respuesta en menos de 24 horas</li>
                <li className="flex gap-2 items-center"><span className="text-vtm-red" aria-hidden="true">—</span>Soporte y repuestos en Chile</li>
              </ul>
            </div>
            <GenericQuoteForm machineName="Paneladora CNC VTM-P" />
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
            <GenericFaqAccordion faqs={FAQS} productName="VTM-P" />
          </div>
        </div>
      </section>

      <GenericStickyBar productName="Paneladora CNC VTM-P" slug="panel-bender" />
    </>
  );
}
