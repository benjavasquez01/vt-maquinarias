import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Link } from "@/lib/navigation";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Metal Fabrication Solutions",
  description:
    "Complete metal fabrication equipment: fiber laser cutting, press brakes, shearing, laser welding, and cleaning machines. Full US installation and support.",
};

export default async function MetalFabricationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  const c = content[locale];

  return (
    <>
      <section className="bg-vtm-dark pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-auto">
          <SectionLabel light className="mb-4">{c.hero.sectionLabel}</SectionLabel>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight max-w-4xl mb-6">
            {c.hero.headline}
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            {c.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/quote" variant="primary" size="lg">{c.hero.cta1}</Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">{c.hero.cta2}</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.grid.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl font-bold text-vtm-dark tracking-tight mb-12">{c.grid.headline}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.machines.map(({ name, href, spec, tag, imageId }) => (
              <Link key={href} href={href} className="group border border-vtm-gray-border hover:border-vtm-dark transition-colors">
                <div className="relative aspect-[4/3] bg-vtm-gray-light overflow-hidden">
                  <Image src={`https://images.unsplash.com/photo-${imageId}?w=600&q=80&fit=crop`} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <Tag className="mb-3">{tag}</Tag>
                  <h3 className="font-headline font-bold text-vtm-dark text-lg mt-2 group-hover:text-vtm-red transition-colors">{name}</h3>
                  <p className="text-vtm-gray-mid text-sm mt-2">{spec}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-vtm-gray-light py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8">
            {c.advantages.items.map(({ title, body }) => (
              <div key={title}>
                <h3 className="font-headline font-bold text-vtm-dark text-xl mb-3">{title}</h3>
                <p className="text-vtm-gray-mid leading-relaxed">{body}</p>
              </div>
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
