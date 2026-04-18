import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/lib/navigation";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Industry Solutions",
  description:
    "VTM Tech Solutions serves metal fabrication, automotive, aerospace, and HVAC manufacturers. Complete equipment and automation systems with full US support.",
};

export default async function SolutionsPage({
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
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            {c.hero.subheadline}
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {c.solutions.map(({ title, href, description, imageId }) => (
              <Link
                key={href}
                href={href}
                className="group relative overflow-hidden aspect-[16/9] flex items-end"
              >
                <Image
                  src={imageId.startsWith("/") ? imageId : `https://images.unsplash.com/photo-${imageId}?w=900&q=80&fit=crop`}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vtm-dark/80 via-vtm-dark/30 to-transparent" />
                <div className="relative z-10 p-8">
                  <h2 className="font-headline text-3xl font-bold text-white mb-2 group-hover:text-vtm-red transition-colors">
                    {title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed">{description}</p>
                  <p className="text-vtm-red text-sm mt-3 font-semibold">{c.explore} →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-vtm-dark py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 max-w-xl">
          <SectionLabel light className="mb-4">{c.cta.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-4xl font-bold text-white tracking-tight mb-4">
            {c.cta.headline}
          </h2>
          <p className="text-white/60 mb-8">
            {c.cta.body}
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Button href="/quote" variant="primary" size="lg">{c.cta.cta1}</Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">{c.cta.cta2}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
