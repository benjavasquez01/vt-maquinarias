import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Metadata } from "next";
import { content } from "./content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "VTM Tech Solutions is the US arm of VT Maquinarias, bringing 15+ years of Chilean industrial machinery expertise to American metal fabrication shops.",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  const c = content[locale];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-vtm-dark pt-16">
        <Image
          src="/images/about-hero.webp"
          alt="Manufacturing facility"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 pb-20 pt-32">
          <SectionLabel light className="mb-4">{c.hero.sectionLabel}</SectionLabel>
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
            {c.hero.headline}
          </h1>
          <p className="text-white/60 font-body text-xl mt-6 max-w-2xl leading-relaxed">
            {c.hero.subheadline}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel className="mb-4">{c.story.sectionLabel}</SectionLabel>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark mb-6 leading-tight">
                {c.story.headline}
              </h2>
              <div className="space-y-4 font-body text-vtm-gray-mid leading-relaxed">
                {c.story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="relative h-96 lg:h-auto lg:min-h-[480px]">
              <Image
                src="/images/about-company-story-2.webp"
                alt="Dark factory interior with industrial machinery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-vtm-gray-light py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4 text-center">{c.values.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark text-center mb-16 max-w-2xl mx-auto leading-tight">
            {c.values.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-vtm-gray-border">
            {c.values.items.map((value) => (
              <div key={value.title} className="bg-white p-8">
                <div className="w-8 h-px bg-vtm-red mb-6" />
                <h3 className="font-headline text-xl font-bold text-vtm-dark mb-4">{value.title}</h3>
                <p className="text-vtm-gray-mid font-body text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-vtm-dark py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel light className="mb-4">{c.timeline.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-16 max-w-2xl leading-tight">
            {c.timeline.headline}
          </h2>
          <div className="relative">
            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="space-y-0">
              {c.timeline.items.map((item) => (
                <div key={item.year} className="relative flex flex-col md:flex-row gap-6 md:gap-0 pb-10 last:pb-0">
                  <div className="md:w-40 flex-shrink-0 flex items-start gap-4 md:gap-0">
                    <span className="font-headline font-bold text-vtm-red text-2xl md:min-w-[88px]">{item.year}</span>
                    <div className="hidden md:block w-3 h-3 rounded-full bg-vtm-red border-2 border-vtm-red mt-1.5 absolute left-[82px]" />
                  </div>
                  <div className="md:pl-16">
                    <p className="text-white/70 font-body leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.certifications.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark mb-12 max-w-2xl leading-tight">
            {c.certifications.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.certifications.items.map((cert) => (
              <div key={cert.name} className="border border-vtm-gray-border p-8">
                <div className="w-10 h-10 bg-vtm-red flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10l4 4 8-8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-headline font-bold text-vtm-dark text-lg mb-3">{cert.name}</h3>
                <p className="text-vtm-gray-mid font-body text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-vtm-gray-light py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark mb-4 leading-tight">
            {c.cta.headline}
          </h2>
          <p className="text-vtm-gray-mid font-body text-lg mb-8 max-w-xl mx-auto">
            {c.cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="primary" size="lg">
              {c.cta.cta1}
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              {c.cta.cta2}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
