import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Link } from "@/lib/navigation";
import { SpecsTable } from "./SpecsTable";
import { FaqAccordion } from "./FaqAccordion";
import { StickyQuoteBar } from "./StickyQuoteBar";
import { QuoteForm } from "./QuoteForm";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Fiber Laser Cutting Machine — VTM-EA / VTM-B Series",
  description:
    "Industrial fiber laser cutting machines, 1.5–30 kW. Raycus source, HIWIN rails, CypCut CNC. Bed sizes from 4'×4' to 8'×20'. ±0.05mm accuracy. Full US installation included.",
};

export default async function FiberLaserPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  const c = content[locale];

  return (
    <>
      {/* ── Block 1: Hero ─────────────────────────────────────────── */}
      <section className="relative bg-vtm-dark min-h-screen flex items-end pb-16 pt-24 overflow-hidden">
        <Image
          src="/images/fiber-laser-hero.png"
          alt="Fiber laser cutting machine"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-vtm-dark/40 to-vtm-dark/90" aria-hidden="true" />

        <div className="relative z-10 w-full px-6 lg:px-16 flex justify-end">
          <div className="max-w-2xl text-right mr-8 lg:mr-24">
            <SectionLabel light className="mb-4">{c.hero.sectionLabel}</SectionLabel>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.02] tracking-tight mb-6">
              {c.hero.headline.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
            <p className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed">
              {c.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button href="/quote?machine=fiber-laser-cutting-machine" variant="primary" size="lg">
                {c.hero.cta1}
              </Button>
              <Button href="#" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/60">
                {c.hero.cta2}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Block 2: Feature Scroll ────────────────────────────────── */}
      <section className="bg-white">
        {c.features.map((feature, i) => (
          <div
            key={feature.number}
            className={`max-w-screen-xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-center border-b border-vtm-gray-border last:border-0 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <p className="font-headline text-[80px] md:text-[120px] font-bold text-vtm-gray-light leading-none select-none -ml-1 mb-4">
                {feature.number}
              </p>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark tracking-tight mb-4">
                {feature.headline}
              </h2>
              <p className="text-vtm-gray-mid leading-relaxed mb-6">{feature.body}</p>
              <div className="inline-flex items-baseline gap-2 bg-vtm-gray-light px-4 py-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-vtm-gray-mid">
                  {feature.spec.label}
                </span>
                <span className="font-headline font-bold text-vtm-red text-xl">
                  {feature.spec.value}
                </span>
              </div>
            </div>
            <div
              className={`relative aspect-[4/3] bg-vtm-gray-light overflow-hidden ${
                i % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <Image
                src={[
                    "/images/fiber-laser-feature-01-speed.png",
                    "/images/fiber-laser-feature-02-accuracy.png",
                    "/images/fiber-laser-feature-05-controller.png",
                    "/images/fiber-laser-feature-03-power.png",
                    "/images/fiber-laser-feature-04-exchange-table.png",
                  ][i]}
                alt={feature.headline}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </section>

      {/* ── Block 2.5: Enclosed Option ────────────────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28" id="enclosed">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.enclosed.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-4">
            {c.enclosed.headline}
          </h2>
          <p className="text-vtm-gray-mid text-lg max-w-2xl mb-14 leading-relaxed">
            {c.enclosed.subheadline}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.enclosed.features.map((f) => (
              <div key={f.number} className="bg-white border border-vtm-gray-border p-8">
                <p className="font-headline text-[60px] font-bold text-vtm-gray-light leading-none select-none -ml-1 mb-4">
                  {f.number}
                </p>
                <h3 className="font-headline text-xl font-bold text-vtm-dark tracking-tight mb-3">
                  {f.headline}
                </h3>
                <p className="text-vtm-gray-mid text-sm leading-relaxed mb-6">{f.body}</p>
                <div className="inline-flex items-baseline gap-2 bg-vtm-gray-light px-3 py-1.5">
                  <span className="text-xs font-semibold tracking-widest uppercase text-vtm-gray-mid">{f.spec.label}</span>
                  <span className="font-headline font-bold text-vtm-red">{f.spec.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Block 3: Technical Specs Table ────────────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28" id="specs">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.specs.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-10">
            {c.specs.headline}
          </h2>
          <SpecsTable
            specLabel={c.specs.specLabel}
            valueLabel={c.specs.valueLabel}
            imperialLabel={c.specs.imperialLabel}
            metricLabel={c.specs.metricLabel}
          />
        </div>
      </section>

      {/* ── Block 4: Video Embed ───────────────────────────────────── */}
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

      {/* ── Block 5: Configuration Options ───────────────────────── */}
      <section className="bg-white py-20 md:py-28" id="configure">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.configure.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-10">
            {c.configure.headline}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.configure.options.map(({ label, options, note }) => (
              <div key={label} className="border border-vtm-gray-border p-6">
                <h3 className="font-headline font-semibold text-vtm-dark mb-3">{label}</h3>
                <ul className="space-y-2 mb-4">
                  {options.map((opt) => (
                    <li key={opt} className="flex items-center gap-2 text-sm text-vtm-gray-mid">
                      <span className="w-1.5 h-1.5 rounded-full bg-vtm-gray-border flex-shrink-0" />
                      {opt}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-vtm-gray-mid border-t border-vtm-gray-border pt-4">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-vtm-gray-mid text-sm mt-6">{c.configure.note}</p>
        </div>
      </section>

      {/* ── Block 6: Comparison Table vs CO₂ ────────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28" id="compare">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.compare.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-10">
            {c.compare.headline}
          </h2>
          <div className="border border-vtm-gray-border overflow-hidden max-w-3xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-vtm-gray-border">
                  <th className="text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase text-vtm-gray-mid bg-white">
                    {c.compare.featureLabel}
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase text-vtm-dark bg-vtm-dark/5">
                    {c.compare.fiberLabel}
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase text-vtm-gray-mid bg-white">
                    {c.compare.co2Label}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.compare.rows.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-vtm-gray-border last:border-0 ${i % 2 === 1 ? "bg-vtm-gray-light/50" : "bg-white"}`}>
                    <td className="px-4 py-3 text-vtm-gray-mid">{row.feature}</td>
                    <td className="px-4 py-3 font-semibold text-vtm-dark">{row.fiber}</td>
                    <td className="px-4 py-3 text-vtm-gray-mid">{row.co2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Block 7: Related Products ─────────────────────────────── */}
      <section className="bg-white py-20 md:py-24" id="related">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.related.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark tracking-tight mb-8">
            {c.related.headline}
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible snap-x snap-mandatory">
            {c.relatedProducts.map(({ name, href, tag, imageId }) => (
              <Link
                key={href}
                href={href}
                className="group flex-shrink-0 w-56 md:w-auto border border-vtm-gray-border hover:border-vtm-dark transition-colors snap-start"
              >
                <div className="relative aspect-[4/3] bg-vtm-gray-light overflow-hidden">
                  {imageId && (
                    <Image
                      src={imageId.startsWith("/") ? imageId : `https://images.unsplash.com/photo-${imageId}?w=600&q=80&fit=crop`}
                      alt={name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 224px, 25vw"
                    />
                  )}
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

      {/* ── Block 8: FAQ ──────────────────────────────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28" id="faq">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 max-w-3xl">
          <SectionLabel className="mb-4">{c.faq.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-10">
            {c.faq.headline}
          </h2>
          <FaqAccordion items={c.faq.items} />
        </div>
      </section>

      {/* ── Block 9: Quote CTA ────────────────────────────────────── */}
      <section className="bg-vtm-dark py-20 md:py-28" id="quote">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="md:grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel light className="mb-4">{c.quote.sectionLabel}</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                {c.quote.headline}
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                {c.quote.body}
              </p>
              <ul className="space-y-2 text-white/50 text-sm">
                {c.quote.notes.map((note) => (
                  <li key={note} className="flex gap-2 items-center">
                    <span className="text-vtm-red" aria-hidden="true">—</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <QuoteForm
              nameLabel={c.form.nameLabel}
              emailLabel={c.form.emailLabel}
              phoneLabel={c.form.phoneLabel}
              companyLabel={c.form.companyLabel}
              messageLabel={c.form.messageLabel}
              messagePlaceholder={c.form.messagePlaceholder}
              submitLabel={c.form.submitLabel}
              submittingLabel={c.form.submittingLabel}
              successTitle={c.form.successTitle}
              successBody={c.form.successBody}
              privacyNote={c.form.privacyNote}
              language={locale}
            />
          </div>
        </div>
      </section>

      {/* Mobile sticky bar */}
      <StickyQuoteBar machineName={c.stickyBar.machineName} cta={c.stickyBar.cta} />
    </>
  );
}
