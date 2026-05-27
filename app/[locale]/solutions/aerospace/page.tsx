import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Link } from "@/lib/navigation";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Soluciones para Manufactura Aeroespacial",
  description: "Corte y plegado láser de fibra de alta precisión para fabricantes de componentes aeroespaciales. Procesamiento de titanio, aluminio e inoxidable con tolerancias aeroespaciales.",
};

export default async function AerospacePage({
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
          <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&fit=crop" alt="" fill className="object-cover opacity-15" priority sizes="100vw" />
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
          <SectionLabel className="mb-4">{c.materials.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl font-bold text-vtm-dark tracking-tight mb-12">{c.materials.headline}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-6">
                {c.materials.items.map(({ material, cap }) => (
                  <div key={material} className="border-l-2 border-vtm-red pl-6">
                    <p className="font-headline font-semibold text-vtm-dark mb-2">{material}</p>
                    <p className="text-vtm-gray-mid text-sm leading-relaxed">{cap}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-vtm-gray-light">
              <Image src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=900&q=80&fit=crop" alt="Precision laser cutting" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-vtm-gray-light py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.equipment.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl font-bold text-vtm-dark tracking-tight mb-8">{c.equipment.headline}</h2>
          <div className="grid md:grid-cols-2 gap-6">
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
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 max-w-xl">
          <SectionLabel light className="mb-4">{c.cta.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl font-bold text-white tracking-tight mb-4">{c.cta.headline}</h2>
          <p className="text-white/60 mb-8">{c.cta.body}</p>
          <Button href="/quote" variant="primary" size="lg">{c.cta.cta}</Button>
        </div>
      </section>
    </>
  );
}
