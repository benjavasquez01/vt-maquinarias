import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Link } from "@/lib/navigation";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Soluciones para Manufactura Automotriz",
  description: "Corte láser de precisión, soldadura robótica y plegadoras para fabricantes de componentes automotrices. Tolerancias y productividad para producción Tier 1–3.",
};

export default async function AutomotivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  const c = content[locale];

  return (
    <>
      <section className="relative bg-vtm-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80&fit=crop" alt="" fill className="object-cover opacity-15" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-vtm-dark via-vtm-dark/90 to-vtm-dark/60" />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel light className="mb-4">{c.hero.sectionLabel}</SectionLabel>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight max-w-4xl mb-6">{c.hero.headline}</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            {c.hero.subheadline}
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Button href="/quote" variant="primary" size="lg">{c.hero.cta1}</Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">{c.hero.cta2}</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.requirements.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl font-bold text-vtm-dark tracking-tight mb-12">{c.requirements.headline}</h2>
          <div className="space-y-0">
            {c.requirements.items.map(({ req, how }) => (
              <div key={req} className="grid md:grid-cols-2 gap-0 border-t border-vtm-gray-border py-8 last:border-b">
                <div className="pr-8 md:border-r border-vtm-gray-border">
                  <p className="font-headline font-semibold text-vtm-dark leading-snug">{req}</p>
                </div>
                <div className="md:pl-8 mt-4 md:mt-0">
                  <p className="text-vtm-gray-mid leading-relaxed">{how}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-vtm-gray-light py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.equipment.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl font-bold text-vtm-dark tracking-tight mb-8">{c.equipment.headline}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {c.equipment.items.map(({ name, href, desc }) => (
              <Link key={href} href={href} className="group p-8 border border-vtm-gray-border bg-white hover:border-vtm-dark transition-colors">
                <h3 className="font-headline font-bold text-vtm-dark text-lg mb-3 group-hover:text-vtm-red transition-colors">{name}</h3>
                <p className="text-vtm-gray-mid text-sm leading-relaxed">{desc}</p>
                <p className="text-vtm-red text-sm mt-4 font-semibold">{c.equipment.learnMore}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-vtm-dark py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl">
            <SectionLabel light className="mb-4">{c.cta.sectionLabel}</SectionLabel>
            <h2 className="font-headline text-4xl font-bold text-white tracking-tight mb-4">{c.cta.headline}</h2>
            <p className="text-white/60 mb-8">{c.cta.body}</p>
            <Button href="/quote" variant="primary" size="lg">{c.cta.cta}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
