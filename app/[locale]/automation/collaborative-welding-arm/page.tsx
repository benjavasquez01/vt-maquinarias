import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Link } from "@/lib/navigation";
import { GenericSpecsTable } from "@/components/product/GenericSpecsTable";
import { GenericFaqAccordion } from "@/components/product/GenericFaqAccordion";
import { GenericStickyBar } from "@/components/product/GenericStickyBar";
import { ROICalculator } from "@/components/product/ROICalculator";
import { AnimatedComparisonTable } from "@/components/product/AnimatedComparisonTable";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Collaborative Welding Arm (Cobot)",
  description:
    "Deploy an AI-guided collaborative welding robot in 6 weeks. Safe for human collaboration, no cages required. Full US installation and training included.",
  openGraph: {
    title: "Collaborative Welding Arm — VTM Tech Solutions",
    description: "Deploy in 6 weeks. Works alongside humans safely. No cages required.",
    images: [{ url: "/images/cobot-welding-hero.png" }],
  },
};

export default async function CollaborativeWeldingArmPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  const c = content[locale];

  return (
    <>
      {/* ── Block 1: Dark Cinematic Hero ────────────────────────────── */}
      <section className="relative bg-vtm-dark min-h-screen flex items-end pb-16 pt-24 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/cobot-welding-hero-2.png"
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
            <div className="flex items-center justify-end gap-4 mb-6">
              <SectionLabel light>{c.hero.categoryLabel}</SectionLabel>
              <Badge>{c.hero.badge}</Badge>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.02] tracking-tight mb-6 whitespace-pre-line">
              {c.hero.headline}
            </h1>
            <p className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed">
              {c.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row justify-end gap-4">
              <Button href="/quote?machine=collaborative-welding-arm" variant="primary" size="lg">
                {c.hero.cta1}
              </Button>
              <Button
                href="#specs"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/60"
              >
                {c.hero.cta2}
              </Button>
            </div>

            {/* Trust stats */}
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

      {/* ── Block 2: Problem → Solution ─────────────────────────────── */}
      <section className="bg-vtm-dark py-20 md:py-28 border-t border-white/15">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <FadeIn>
              <SectionLabel light className="mb-4">{c.challenge.sectionLabel}</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight max-w-2xl">
                {c.challenge.headline}
              </h2>
            </FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden hidden md:block">
              <Image
                src="/images/cobot-welding-operation-2.png"
                alt=""
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
          <StaggerChildren className="space-y-0">
            {c.challenge.items.map(({ problem, solution }, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-0 border-t border-white/10 last:border-b last:border-white/10"
              >
                <div className="py-8 pr-8 md:border-r border-white/10">
                  <p className="text-xs font-semibold tracking-widest uppercase text-vtm-red mb-3">{c.challenge.problemLabel}</p>
                  <p className="text-white/70 leading-relaxed">{problem}</p>
                </div>
                <div className="py-8 md:pl-8">
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-3">{c.challenge.solutionLabel}</p>
                  <p className="text-white/90 leading-relaxed">{solution}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
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

      {/* ── Block 4: Application Gallery ──────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 border-t border-vtm-gray-border" id="applications">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.applications.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-10">
            {c.applications.headline}
          </h2>
          <div className="grid md:grid-cols-2 gap-0 border border-vtm-gray-border">
            {c.applications.items.map(({ industry, material, process }, i) => (
              <div
                key={industry}
                className={`p-8 ${i % 2 === 0 ? "border-r border-vtm-gray-border" : ""} ${i < 2 ? "border-b border-vtm-gray-border" : ""}`}
              >
                <Tag className="mb-4">{industry}</Tag>
                <p className="text-xs font-semibold tracking-wider uppercase text-vtm-gray-mid mb-1 mt-4">
                  {locale === "es" ? "Material" : "Material"}
                </p>
                <p className="font-headline font-semibold text-vtm-dark mb-3">{material}</p>
                <p className="text-xs font-semibold tracking-wider uppercase text-vtm-gray-mid mb-1">
                  {locale === "es" ? "Proceso" : "Process"}
                </p>
                <p className="text-vtm-gray-mid text-sm leading-relaxed">{process}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Block 5: Cobot vs Industrial Comparison ───────────────────── */}
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
          />
          <p className="text-vtm-gray-mid text-sm mt-6">
            {c.compare.note}{" "}
            <Link href="/contact" className="text-vtm-red hover:underline">
              {c.compare.noteLink}
            </Link>
          </p>
        </div>
      </section>

      {/* ── Block 6: Integration & Support ───────────────────────────── */}
      <section className="bg-vtm-dark py-20 md:py-28" id="support">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel light className="mb-4">{c.support.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight mb-12">
            {c.support.headline}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {c.support.items.map(({ title, body }) => (
              <div key={title} className="border border-white/10 p-6">
                <h3 className="font-headline font-semibold text-white mb-3">{title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Block 7: ROI Calculator ─────────────────────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28 border-t border-vtm-gray-border" id="roi">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-10">
            <div>
              <SectionLabel className="mb-4">{c.roi.sectionLabel}</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-4">
                {c.roi.headline}
              </h2>
              <p className="text-vtm-gray-mid">{c.roi.body}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden hidden md:block">
              <Image
                src="/images/cobot-welding-roi.png"
                alt=""
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
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

      {/* ── Block 9: Demo CTA ─────────────────────────────────────────── */}
      <section className="bg-vtm-dark py-20 md:py-28" id="demo">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <SectionLabel light className="mb-4">{c.cta.sectionLabel}</SectionLabel>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              {c.cta.headline}
            </h2>
            <p className="text-white/60 leading-relaxed mb-10">{c.cta.body}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/quote?machine=collaborative-welding-arm&type=demo" variant="primary" size="lg">
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

      <GenericStickyBar productName={c.hero.headline.replace("\n", " ")} slug="collaborative-welding-arm" ctaText={c.hero.cta1} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Collaborative Welding Arm",
            description: "AI-guided collaborative welding robot. Deploy in 6 weeks. ISO/TS 15066 compliant.",
            brand: { "@type": "Brand", name: "VTM Tech Solutions" },
            offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "USD" },
          }),
        }}
      />
    </>
  );
}
