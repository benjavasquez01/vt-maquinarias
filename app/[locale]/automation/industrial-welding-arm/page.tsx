import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Link } from "@/lib/navigation";
import { SHOW_VIDEO_SECTIONS } from "@/lib/flags";
import { GenericSpecsTable } from "@/components/product/GenericSpecsTable";
import { GenericFaqAccordion } from "@/components/product/GenericFaqAccordion";
import { GenericStickyBar } from "@/components/product/GenericStickyBar";
import { ROICalculator } from "@/components/product/ROICalculator";
import { AnimatedComparisonTable } from "@/components/product/AnimatedComparisonTable";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Brazo Soldador Industrial",
  description:
    "Robot de soldadura industrial de alto rendimiento para celdas de producción dedicadas. Capacidad de 20 kg, 4–5× la velocidad de soldadura manual. Integración y soporte en Chile.",
  openGraph: {
    title: "Brazo Soldador Industrial — VT Maquinarias",
    description: "Soldadura de producción de alta velocidad. Capacidad de 20 kg. Instalación en Chile incluida.",
    images: [{ url: "/images/industrial-welding-arm-hero.webp" }],
  },
};

export default async function IndustrialWeldingArmPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  const c = content[locale];

  return (
    <>
      {/* ── Block 1: Hero ────────────────────────────────────────────── */}
      <section className="relative bg-vtm-dark min-h-screen flex items-end pb-16 pt-24 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/industrial-welding-arm-hero.webp"
            alt=""
            fill
            className="object-cover opacity-70"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent from-40% to-vtm-dark/85" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-10 flex justify-end">
          <div className="max-w-2xl text-right mr-8 lg:mr-24">
            <SectionLabel light className="mb-6">{c.hero.categoryLabel}</SectionLabel>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.02] tracking-tight mb-6 whitespace-pre-line">
              {c.hero.headline}
            </h1>
            <p className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed">
              {c.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row justify-end gap-4">
              <Button href="/quote?machine=industrial-welding-arm" variant="primary" size="lg">
                {c.hero.cta1}
              </Button>
              <Button
                href="/catalogo-vt-maquinarias.pdf"
                target="_blank"
                rel="noopener"
                download
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/60"
              >
                {c.hero.cta2}
              </Button>
            </div>

            <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-3 gap-8">
              {c.hero.stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-headline font-bold text-white text-2xl md:text-3xl">{value}</p>
                  <p className="text-white/40 text-xs mt-1 uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Block 2: Value Proposition ───────────────────────────────── */}
      <section className="bg-vtm-dark py-20 md:py-28 border-t border-white/15">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel light className="mb-4">{c.value.sectionLabel}</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                {c.value.headline}
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">{c.value.body1}</p>
              <p className="text-white/60 leading-relaxed mb-8">{c.value.body2}</p>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/industrial-welding-arm-cell-2.webp"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
            <div className="space-y-4">
              {c.value.stats.map(({ stat, label }) => (
                <div key={stat} className="flex gap-6 items-start border-b border-white/10 pb-4 last:border-0">
                  <span className="font-headline font-bold text-vtm-red text-2xl flex-shrink-0 w-20">{stat}</span>
                  <p className="text-white/65 text-sm leading-relaxed">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Block 3: Specs Table ─────────────────────────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28 border-t border-vtm-gray-border" id="specs">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.specs.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-10">
            {c.specs.headline}
          </h2>
          <GenericSpecsTable specs={c.specs.rows} />
        </div>
      </section>

      {/* ── Block 4: Video ────────────────────────────────────────────── */}
      {SHOW_VIDEO_SECTIONS && (
      <section className="bg-vtm-dark py-20 md:py-28" id="video">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel light className="mb-4">{c.video.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight mb-10">
            {c.video.headline}
          </h2>
          <div className="aspect-video w-full bg-vtm-dark/60 border border-white/10 flex items-center justify-center max-w-4xl">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/40 text-sm">Video embed — insert YouTube or Cloudflare Stream URL</p>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ── Block 5: Comparison Table ─────────────────────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28 border-t border-vtm-gray-border" id="compare">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.compare.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-10">
            {c.compare.headline}
          </h2>
          <AnimatedComparisonTable
            rows={c.compare.rows.map((r) => ({ feature: r.feature, left: r.cobot, right: r.industrial }))}
            leftLabel={c.compare.leftLabel}
            rightLabel={c.compare.rightLabel}
            leftLabelClass="text-white/60"
            rightLabelClass="text-vtm-red"
          />
        </div>
      </section>

      {/* ── Block 7: ROI Calculator ─────────────────────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28 border-t border-vtm-gray-border" id="roi">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.roi.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-4">
            {c.roi.headline}
          </h2>
          <p className="text-vtm-gray-mid mb-10 max-w-2xl">{c.roi.body}</p>
          <ROICalculator />
        </div>
      </section>

      {/* ── Block 8: FAQ ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 border-t border-vtm-gray-border" id="faq">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <SectionLabel className="mb-4">{c.faq.sectionLabel}</SectionLabel>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-10">
              {c.faq.headline}
            </h2>
            <GenericFaqAccordion faqs={c.faq.items} />
          </div>
        </div>
      </section>

      {/* ── Block 9: CTA ──────────────────────────────────────────────── */}
      <section className="bg-vtm-dark py-20 md:py-28" id="demo">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <SectionLabel light className="mb-4">{c.cta.sectionLabel}</SectionLabel>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              {c.cta.headline}
            </h2>
            <p className="text-white/60 leading-relaxed mb-10">{c.cta.body}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/quote?machine=industrial-welding-arm&type=demo" variant="primary" size="lg">
                {c.cta.cta1}
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                {c.cta.cta2}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ─────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 border-t border-vtm-gray-border" id="related">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.related.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark tracking-tight mb-8">
            {c.related.headline}
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible snap-x snap-mandatory">
            {c.related.items.map(({ name, href, tag, imageId }) => (
              <Link
                key={href}
                href={href}
                className="group flex-shrink-0 w-56 md:w-auto border border-vtm-gray-border hover:border-vtm-dark transition-colors snap-start"
              >
                <div className="relative aspect-[4/3] bg-vtm-gray-light overflow-hidden">
                  <Image
                    src={imageId.startsWith("/") ? imageId : `https://images.unsplash.com/photo-${imageId}?w=600&q=80&fit=crop`}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 224px, 33vw"
                  />
                </div>
                <div className="p-4">
                  <Tag className="mb-2">{tag}</Tag>
                  <p className="font-headline font-semibold text-vtm-dark text-sm mt-2 group-hover:text-vtm-red transition-colors">
                    {name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GenericStickyBar productName={c.hero.headline.replace("\n", " ")} slug="industrial-welding-arm" ctaText={c.hero.cta1} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Industrial Welding Arm",
            description: "Robot de soldadura industrial de alto rendimiento. Capacidad de 20 kg, 4-5x la velocidad de soldadura manual.",
            brand: { "@type": "Brand", name: "VT Maquinarias" },
            offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "USD" },
          }),
        }}
      />
    </>
  );
}
