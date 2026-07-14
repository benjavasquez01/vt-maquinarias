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
      <section className="relative mt-20 overflow-hidden bg-vtm-dark md:flex md:min-h-[min(760px,calc(100svh-5rem))] md:items-center md:px-6 md:py-20 lg:px-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#202020] min-[420px]:aspect-[2/1] md:absolute md:inset-0 md:aspect-auto">
          <Image
            src="/images/fabrication-category-hero.webp"
            alt="Máquinas de fabricación VTM instaladas en una planta industrial"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-vtm-dark/55 via-transparent to-transparent md:bg-gradient-to-r md:from-vtm-dark/95 md:via-vtm-dark/70 md:to-vtm-dark/20"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 py-7 md:px-0 md:py-0">
          <SectionLabel light className="mb-3 md:mb-4">{c.hero.sectionLabel}</SectionLabel>
          <h1 className="mb-5 max-w-3xl font-headline text-4xl font-bold leading-[1.08] tracking-normal text-white sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl">
            {c.hero.headline.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h1>
          <p className="mb-7 max-w-2xl text-base leading-relaxed text-white/70 md:mb-9 md:text-lg">
            {c.hero.subheadline}
          </p>
          <div className="flex flex-col gap-3 min-[420px]:flex-row sm:gap-4">
            <Button href="/quote" variant="primary" size="lg" className="w-full justify-center min-[420px]:w-1/2 min-[420px]:px-4 min-[420px]:text-sm sm:w-auto sm:px-8 sm:text-base">
              {c.hero.cta1}
            </Button>
            <Button href="/automation" variant="outline" size="lg" className="w-full justify-center border-white/40 text-white hover:border-white/70 hover:bg-white/10 min-[420px]:w-1/2 min-[420px]:px-4 min-[420px]:text-sm sm:w-auto sm:px-8 sm:text-base">
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
