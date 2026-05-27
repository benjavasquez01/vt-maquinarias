"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Link } from "@/lib/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { GenericSpecsTable, type SpecRow } from "./GenericSpecsTable";
import { GenericFaqAccordion, type FaqItem } from "./GenericFaqAccordion";
import { GenericStickyBar } from "./GenericStickyBar";
import { GenericQuoteForm } from "./GenericQuoteForm";
import { ProductHeroCTA } from "./ProductHeroCTA";
import { ProductModesBrowser, type ProductMode } from "./ProductModesBrowser";

export interface ProductFeature {
  number?: string;
  headline: string;
  body: string;
  spec: { label: string; value: string };
  imageId?: string;
  imageFit?: "cover" | "contain";
}

export interface ComparisonRow {
  feature: string;
  ours: string;
  theirs: string;
}

export interface ConfigOption {
  label: string;
  options: string[];
  note: string;
}

export interface RelatedProduct {
  name: string;
  href: string;
  tag: string;
  imageId?: string;
}

export interface VariantSection {
  sectionLabel: string;
  headline: string;
  subheadline: string;
  features: ProductFeature[];
}

export type { ProductMode };

export interface ProductPageData {
  category: string;
  categoryHref?: string;
  slug: string;
  machineName: string;
  heroSubtitle?: string;
  heroSubheadline: string;
  heroImageId: string;
  heroAlign?: "left" | "right";
  heroGradient?: "bottom" | "left-to-right";
  heroImageFit?: "cover" | "contain";
  modes?: ProductMode[];
  modesBrowserLabel?: string;
  modesBrowserHeadline?: string;
  modesBrowserQuoteLabel?: string;
  modesBrowserSpecsLabel?: string;
  modesBrowserBestForLabel?: string;
  features: ProductFeature[];
  variantSection?: VariantSection;
  specs: SpecRow[];
  specImage?: string;
  videoSectionLabel?: string;
  videoHeadline?: string;
  configOptions: ConfigOption[];
  comparisonLabel: string;
  comparisonHeadline: string;
  comparisonOursLabel: string;
  comparisonTheirsLabel: string;
  comparison: ComparisonRow[];
  relatedProducts: RelatedProduct[];
  faqs: FaqItem[];
}

interface ProductPageTemplateProps {
  data: ProductPageData;
  children?: React.ReactNode;
  afterSpecs?: React.ReactNode;
  featureSlots?: { [afterIndex: number]: React.ReactNode };
  hideHero?: boolean;
  hideModes?: boolean;
  hideFeatures?: boolean;
  hideSpecs?: boolean;
  hideConfigure?: boolean;
}

export function ProductPageTemplate({ data, children, afterSpecs, featureSlots, hideHero = false, hideModes = false, hideFeatures = false, hideSpecs = false, hideConfigure = false }: ProductPageTemplateProps) {
  const ui = useTranslations("productPage");
  const {
    category,
    slug,
    machineName,
    heroSubtitle,
    heroSubheadline,
    heroImageId,
    heroAlign = "left",
    heroGradient = "bottom",
    heroImageFit = "cover",
    modes,
    modesBrowserLabel,
    modesBrowserHeadline,
    modesBrowserQuoteLabel,
    modesBrowserSpecsLabel,
    modesBrowserBestForLabel,
    features,
    variantSection,
    specs,
    specImage,
    videoSectionLabel = "See It Work",
    videoHeadline = "In Action",
    configOptions,
    comparisonLabel,
    comparisonHeadline,
    comparisonOursLabel,
    comparisonTheirsLabel,
    comparison,
    relatedProducts,
    faqs,
  } = data;

  return (
    <>
      {/* ── Block 1: Hero ─────────────────────────────────────────── */}
      {!hideHero && (
        <section className="relative bg-vtm-dark min-h-screen flex items-end pb-16 pt-24 overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src={heroImageId.startsWith("/") ? heroImageId : `https://images.unsplash.com/photo-${heroImageId}?w=1600&q=80&fit=crop`}
              alt=""
              fill
              className={`${heroImageFit === "contain" ? "object-contain" : "object-cover"} opacity-70`}
              priority
              sizes="100vw"
            />
            {heroAlign === "right" ? (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent from-40% to-vtm-dark/85" />
            ) : heroGradient === "left-to-right" ? (
              <div className="absolute inset-0 bg-gradient-to-r from-vtm-dark/95 via-vtm-dark/60 to-transparent" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-b from-vtm-dark/10 via-vtm-dark/30 to-vtm-dark/80" />
            )}
          </div>

          <div className={`relative z-10 w-full px-6 lg:px-10 ${heroAlign === "right" ? "flex justify-end" : "max-w-screen-xl mx-auto"}`}>
            <div className={heroAlign === "right" ? "max-w-2xl text-right mr-8 lg:mr-24" : ""}>
              <SectionLabel light className="mb-4">{category}</SectionLabel>
              <h1 className={`font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.02] tracking-tight mb-3 ${heroAlign === "right" ? "" : "max-w-4xl"}`}>
                {machineName}
              </h1>
              {heroSubtitle && (
                <p className="font-headline text-2xl md:text-3xl font-semibold text-vtm-red tracking-tight mb-5">{heroSubtitle}</p>
              )}
              <p className={`text-white/60 text-lg md:text-xl mb-10 leading-relaxed ${heroAlign === "right" ? "" : "max-w-2xl"}`}>
                {heroSubheadline}
              </p>
              <ProductHeroCTA slug={slug} align={heroAlign} />
            </div>
          </div>
        </section>
      )}

      {/* ── Block 1.5: Modes Browser (optional) ──────────────────── */}
      {!hideModes && modes && modes.length > 0 && (
        <ProductModesBrowser
          modes={modes}
          slug={slug}
          sectionLabel={modesBrowserLabel ?? "Operating Modes"}
          headline={modesBrowserHeadline ?? "Choose Your Mode"}
          quoteLabel={modesBrowserQuoteLabel ?? "Request a Quote"}
          viewSpecsLabel={modesBrowserSpecsLabel ?? "View Specs"}
          bestForLabel={modesBrowserBestForLabel ?? "Best for"}
        />
      )}

      {/* ── Block 1.6: Custom slot (optional, e.g. model browser) ───── */}
      {children}

      {/* ── Block 2: Feature Scroll ────────────────────────────────── */}
      {!hideFeatures && (
        <section className="bg-white">
          {features.map((feature, i) => (
            <React.Fragment key={i}>
            <div
              className={`max-w-screen-xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-center border-b border-vtm-gray-border last:border-0`}
            >
              <FadeIn className={i % 2 === 1 ? "md:order-2" : ""}>
                {feature.number && (
                  <p className="font-headline text-[80px] md:text-[120px] font-bold text-vtm-gray-light leading-none select-none -ml-1 mb-4">
                    {feature.number}
                  </p>
                )}
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
              </FadeIn>
              <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "md:order-1" : ""}`}>
                {feature.imageId ? (
                  <Image
                    src={feature.imageId.startsWith("/") ? feature.imageId : `https://images.unsplash.com/photo-${feature.imageId}?w=900&q=80&fit=crop`}
                    alt={feature.headline}
                    fill
                    className={feature.imageFit === "contain" ? "object-contain" : "object-cover"}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-vtm-gray-light flex items-center justify-center" aria-hidden="true">
                    <span className="text-vtm-gray-border text-xs font-mono">Feature image — {feature.number}</span>
                  </div>
                )}
              </div>
            </div>
            {featureSlots?.[i]}
            </React.Fragment>
          ))}
        </section>
      )}

      {/* ── Block 2.5: Variant Section (optional) ─────────────────── */}
      {variantSection && (
        <section className="bg-vtm-gray-light py-20 md:py-28">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <SectionLabel className="mb-4">{variantSection.sectionLabel}</SectionLabel>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-4">
              {variantSection.headline}
            </h2>
            <p className="text-vtm-gray-mid text-lg max-w-2xl mb-14 leading-relaxed">
              {variantSection.subheadline}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {variantSection.features.map((f) => (
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
      )}

      {/* ── Block 3: Technical Specs Table ────────────────────────── */}
      {!hideSpecs && (
        <section className="bg-vtm-gray-light py-20 md:py-28" id="specs">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <FadeIn>
              <SectionLabel className="mb-4">{ui("specsLabel")}</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-10">
                {ui("specsHeading")}
              </h2>
            </FadeIn>
            {specImage && (
              <div className="relative w-full max-w-xl mx-auto mb-12 aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-md">
                <Image src={specImage} alt={machineName} fill className="object-contain p-6" />
              </div>
            )}
            <GenericSpecsTable specs={specs} />
          </div>
        </section>
      )}

      {/* ── Block 3.5: After-specs slot (optional) ────────────────── */}
      {afterSpecs}

      {/* ── Block 4: Video Embed ───────────────────────────────────── */}
      <section className="bg-vtm-dark py-20 md:py-28" id="video">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel light className="mb-4">{videoSectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight mb-10">
            {videoHeadline}
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
      {!hideConfigure && (
        <section className="bg-white py-20 md:py-28" id="configure">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <SectionLabel className="mb-4">{ui("configureLabel")}</SectionLabel>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-10">
              {ui("configureHeading")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {configOptions.map(({ label, options, note }) => (
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
            <p className="text-vtm-gray-mid text-sm mt-6">{ui("configureNote")}</p>
          </div>
        </section>
      )}

      {/* ── Block 6: Comparison Table ────────────────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28" id="compare">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{comparisonLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-10">
            {comparisonHeadline}
          </h2>
          <div className="border border-vtm-gray-border overflow-hidden max-w-3xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-vtm-gray-border">
                  <th className="text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase text-vtm-gray-mid bg-white">
                    Feature
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase text-vtm-dark bg-vtm-dark/5">
                    {comparisonOursLabel}
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase text-vtm-gray-mid bg-white">
                    {comparisonTheirsLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-vtm-gray-border last:border-0 ${i % 2 === 1 ? "bg-vtm-gray-light/50" : "bg-white"}`}
                  >
                    <td className="px-4 py-3 text-vtm-gray-mid">{row.feature}</td>
                    <td className="px-4 py-3 font-semibold text-vtm-dark">{row.ours}</td>
                    <td className="px-4 py-3 text-vtm-gray-mid">{row.theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Block 7: Quote CTA ────────────────────────────────────── */}
      <section className="bg-vtm-dark py-20 md:py-28" id="quote">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="md:grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel light className="mb-4">{ui("quoteLabel")}</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                {ui("quoteHeading")}
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">{ui("quoteBody")}</p>
              <ul className="space-y-2 text-white/50 text-sm">
                <li className="flex gap-2 items-center">
                  <span className="text-vtm-red" aria-hidden="true">—</span>
                  {ui("quoteNote1")}
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-vtm-red" aria-hidden="true">—</span>
                  {ui("quoteNote2")}
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-vtm-red" aria-hidden="true">—</span>
                  {ui("quoteNote3")}
                </li>
              </ul>
            </div>
            <GenericQuoteForm machineName={machineName} />
          </div>
        </div>
      </section>

      {/* ── Block 8: Related Products ─────────────────────────────── */}
      <section className="bg-white py-20 md:py-24" id="related">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{ui("relatedLabel")}</SectionLabel>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark tracking-tight mb-8">
            {ui("relatedHeading")}
          </h2>
          <StaggerChildren className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible snap-x snap-mandatory">
            {relatedProducts.map(({ name, href, tag, imageId }) => (
              <Link
                key={href}
                href={href}
                className="product-card group flex-shrink-0 w-56 md:w-auto border border-vtm-gray-border hover:border-vtm-dark transition-colors snap-start"
              >
                <div className="relative aspect-[4/3] bg-vtm-gray-light overflow-hidden">
                  {imageId ? (
                    <Image
                      src={imageId.startsWith("/") ? imageId : `https://images.unsplash.com/photo-${imageId}?w=600&q=80&fit=crop`}
                      alt={name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 224px, 25vw"
                    />
                  ) : null}
                </div>
                <div className="p-4">
                  <Tag className="mb-2">{tag}</Tag>
                  <p className="font-headline font-semibold text-vtm-dark text-sm mt-2 group-hover:text-vtm-red transition-colors">
                    {name}
                  </p>
                </div>
              </Link>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Block 9: FAQ ──────────────────────────────────────────── */}
      <section className="bg-vtm-gray-light py-20 md:py-28" id="faq">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <SectionLabel className="mb-4">{ui("faqLabel")}</SectionLabel>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-10">
              {ui("faqHeading")}
            </h2>
            <GenericFaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Mobile sticky bar */}
      <GenericStickyBar productName={machineName} slug={slug} />

      {/* JSON-LD: Product + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Product",
              name: machineName,
              brand: { "@type": "Brand", name: "VT Maquinarias" },
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "USD",
                seller: { "@type": "Organization", name: "VT Maquinarias" },
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://vtmaquinarias.cl" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: category,
                  item: `https://vtmaquinarias.cl/${category.toLowerCase()}`,
                },
                { "@type": "ListItem", position: 3, name: machineName },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
