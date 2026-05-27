import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/lib/navigation";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Automatización — Robots de Soldadura Industria 4.0",
  description:
    "VT Maquinarias lleva robots de soldadura inteligentes Industria 4.0 a los talleres de Chile. Cobots y brazos industriales conectados (IIoT). Implementación en 6 semanas. Retorno de inversión dentro de 18 meses.",
};

export default async function AutomationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  const c = content[locale];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-vtm-dark min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/automation-category-hero.webp"
            alt=""
            fill
            className="object-cover opacity-70"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-vtm-dark/85 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-10 flex flex-col items-center text-center">
          <Badge className="mb-6">{c.hero.badge}</Badge>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.02] tracking-tight mb-6 max-w-3xl">
            {c.hero.headline.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h1>
          <p className="text-white/60 text-xl md:text-2xl mb-4 leading-relaxed max-w-2xl">
            {c.hero.subtitle}
          </p>
          <p className="text-white/40 text-base mb-10 leading-relaxed max-w-xl">
            {c.hero.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/quote?category=automation" variant="primary" size="lg">
              {c.hero.cta1}
            </Button>
            <Button
              href="#products"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/60"
            >
              {c.hero.cta2}
            </Button>
          </div>
        </div>
      </section>

      {/* ── Intro Copy ────────────────────────────────────────────── */}
      <section className="bg-white border-t border-vtm-gray-border py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel className="mb-4">{c.intro.sectionLabel}</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-6">
                {c.intro.headline}
              </h2>
              <p className="text-vtm-gray-mid leading-relaxed mb-4">{c.intro.p1}</p>
              <p className="text-vtm-gray-mid leading-relaxed">{c.intro.p2}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {c.intro.stats.map(({ stat, label }) => (
                <div key={stat} className="border border-vtm-gray-border p-6">
                  <p className="font-headline text-4xl font-bold text-vtm-red mb-2">{stat}</p>
                  <p className="text-vtm-gray-mid text-sm leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Cards ─────────────────────────────────────────── */}
      <section className="bg-vtm-dark py-20 md:py-28 border-t border-vtm-gray-border" id="products">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel light className="mb-4">{c.products.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight mb-12">
            {c.products.headline}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {c.products.items.map(({ slug, name, subtitle, description, imageId, badge, specs, cta }) => (
              <Link
                key={slug}
                href={`/automation/${slug}`}
                className="group block border border-white/10 hover:border-white/30 transition-colors bg-white/5"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={imageId.startsWith("/") ? imageId : `https://images.unsplash.com/photo-${imageId}?w=900&q=80&fit=crop`}
                    alt={name}
                    fill
                    className="object-cover opacity-100 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge>{badge}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-white/60 text-xs font-medium tracking-wider uppercase mb-2">{subtitle}</p>
                  <h3 className="font-headline text-2xl font-bold text-white mb-3 group-hover:text-vtm-red transition-colors">
                    {name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">{description}</p>

                  {/* Spec pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {specs.map((spec) => (
                      <span key={spec} className="border border-white/25 text-white/70 text-xs px-3 py-1">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-vtm-red text-sm font-semibold">
                    <span>{cta}</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="group-hover:translate-x-1 transition-transform">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-vtm-red py-20 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              {c.cta.headline}
            </h2>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
              {c.cta.body}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button
              href="/quote?category=automation"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-vtm-red"
            >
              {c.cta.cta}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
