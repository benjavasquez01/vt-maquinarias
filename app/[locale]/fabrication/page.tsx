import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/lib/navigation";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Maquinaria de Fabricación",
  description:
    "Maquinaria industrial de fabricación para talleres metálicos en Chile — corte láser de fibra (plancha, tubo, combo), láser 4 en 1, soldadura láser, limpieza láser, plegadoras CNC, cizallas hidráulicas y punzonadoras. Instalación y soporte en Chile incluidos.",
};

export default async function FabricationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  const c = content[locale];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-vtm-dark pt-[42vh] pb-16 px-6 md:pt-32 md:pb-20 lg:px-10 overflow-hidden">
        <Image
          src="/images/fabrication-category-hero.webp"
          alt=""
          fill
          priority
          className="vtm-hero-machine-image vtm-hero-machine-image--compact opacity-65"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-vtm-dark/20 via-vtm-dark/45 to-vtm-dark/80" aria-hidden="true" />
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <SectionLabel light className="mb-4">{c.hero.sectionLabel}</SectionLabel>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 max-w-3xl leading-tight">
            {c.hero.headline.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-10">
            {c.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/quote" variant="primary" size="lg">
              {c.hero.cta1}
            </Button>
            <Button href="/automation" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/60">
              {c.hero.cta2}
            </Button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-vtm-gray-light py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.grid.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-12">
            {c.grid.headline}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.products.map(({ slug, name, tag, description, imageId }) => (
              <Link
                key={slug}
                href={`/fabrication/${slug}`}
                className="group border border-vtm-gray-border bg-white hover:border-vtm-dark transition-colors block"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={imageId.startsWith("/") ? imageId : `https://images.unsplash.com/photo-${imageId}?w=800&q=80&fit=crop`}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-vtm-dark/0 group-hover:bg-vtm-dark/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <Tag className="mb-3">{tag}</Tag>
                  <h2 className="font-headline font-bold text-vtm-dark text-lg mb-2 group-hover:text-vtm-red transition-colors leading-tight">
                    {name}
                  </h2>
                  <p className="text-vtm-gray-mid text-sm leading-relaxed">
                    {description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-vtm-red text-sm font-semibold">
                    <span>{c.grid.viewMachine}</span>
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

      {/* Support Banner */}
      <section className="bg-vtm-dark py-16 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <SectionLabel light className="mb-3">{c.banner.sectionLabel}</SectionLabel>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight max-w-xl">
              {c.banner.headline}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 flex-shrink-0">
            {c.banner.stats.map(({ stat, label }) => (
              <div key={stat} className="text-center">
                <p className="font-headline text-3xl font-bold text-vtm-red mb-1">{stat}</p>
                <p className="text-white/50 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-auto text-center">
          <SectionLabel className="mb-4">{c.cta.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-6">
            {c.cta.headline}
          </h2>
          <p className="text-vtm-gray-mid text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            {c.cta.body}
          </p>
          <Button href="/quote" variant="primary" size="lg">
            {c.cta.cta}
          </Button>
        </div>
      </section>
    </>
  );
}
