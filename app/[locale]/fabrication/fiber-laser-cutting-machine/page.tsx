import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Link } from "@/lib/navigation";
import { FaqAccordion } from "./FaqAccordion";
import { StickyQuoteBar } from "./StickyQuoteBar";
import { QuoteForm } from "./QuoteForm";
import { ModelBrowserWithSpecs } from "./ModelBrowserWithSpecs";
import { HeroScroll } from "./HeroScroll";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Fiber Laser Sheet Cutting Machine — VTM-A / VTM-Pro Series",
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
      {/* ── Block 1: Hero (scroll-animated) ──────────────────────── */}
      <HeroScroll c={c.hero} locale={locale} />

      {/* ── Block 2+3: Model Browser + Apple Specs ───────────────── */}
      <ModelBrowserWithSpecs locale={locale} />

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

      {/* ── Block 5: Comparison Table vs CO₂ ────────────────────── */}
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

      {/* ── Block 6: Related Products ─────────────────────────────── */}
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

      {/* ── Block 7: FAQ ──────────────────────────────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28" id="faq">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 max-w-3xl">
          <SectionLabel className="mb-4">{c.faq.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-10">
            {c.faq.headline}
          </h2>
          <FaqAccordion items={c.faq.items} />
        </div>
      </section>

      {/* ── Block 8: Quote CTA ────────────────────────────────────── */}
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
