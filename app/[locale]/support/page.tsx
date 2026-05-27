import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DownloadGate } from "@/components/support/DownloadGate";
import type { Metadata } from "next";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Soporte",
  description:
    "Soporte VT Maquinarias: instalación, capacitación, repuestos y diagnóstico remoto durante toda la vida útil de su máquina.",
};

const serviceIcons = [
  (
    <svg key="0" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 4l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4l2-4z" stroke="#CB1C1D" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M6 20l-2 4M22 20l2 4M6 24h16" stroke="#CB1C1D" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  (
    <svg key="1" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="20" height="14" rx="1" stroke="#CB1C1D" strokeWidth="1.5"/>
      <path d="M10 24h8M14 20v4" stroke="#CB1C1D" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 13l3 3 7-7" stroke="#CB1C1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  (
    <svg key="2" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 4a10 10 0 100 20A10 10 0 0014 4z" stroke="#CB1C1D" strokeWidth="1.5"/>
      <path d="M14 9v5l3 3" stroke="#CB1C1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 14H3M25 14h-2M14 3V1M14 27v-2" stroke="#CB1C1D" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
];

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  const c = content[locale];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-vtm-dark min-h-[50vh] flex items-end overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80&fit=crop"
          alt="Industrial worker operating machinery"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 pb-20 pt-28">
          <SectionLabel light className="mb-4">{c.hero.sectionLabel}</SectionLabel>
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
            {c.hero.headline}
          </h1>
          <p className="text-white/60 font-body text-xl mt-6 max-w-2xl leading-relaxed">
            {c.hero.subheadline}
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-white py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.services.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark mb-16 max-w-2xl leading-tight">
            {c.services.headline}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {c.services.items.map((card, i) => (
              <div key={i} className="border border-vtm-gray-border p-8 flex flex-col">
                <div className="mb-6">{serviceIcons[i]}</div>
                <h3 className="font-headline text-xl font-bold text-vtm-dark mb-4">{card.title}</h3>
                <p className="text-vtm-gray-mid font-body text-sm leading-relaxed mb-6 flex-1">{card.description}</p>
                <ul className="space-y-2">
                  {card.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-vtm-dark">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7l3 3 7-6" stroke="#CB1C1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-body">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-vtm-gray-light py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.contact.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-3xl font-bold text-vtm-dark mb-12 leading-tight">
            {c.contact.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-vtm-gray-border p-8">
              <p className="text-vtm-gray-mid text-xs font-semibold tracking-wide uppercase mb-3">{c.contact.phone.label}</p>
              <p className="font-headline font-bold text-vtm-dark text-xl mb-2">{c.contact.phone.number}</p>
              <p className="text-vtm-gray-mid font-body text-sm whitespace-pre-line">{c.contact.phone.note}</p>
            </div>
            <div className="bg-white border border-vtm-gray-border p-8">
              <p className="text-vtm-gray-mid text-xs font-semibold tracking-wide uppercase mb-3">{c.contact.email.label}</p>
              <p className="font-headline font-bold text-vtm-dark text-xl mb-2">{c.contact.email.address}</p>
              <p className="text-vtm-gray-mid font-body text-sm whitespace-pre-line">{c.contact.email.note}</p>
            </div>
            <div className="bg-white border border-vtm-gray-border p-8">
              <p className="text-vtm-gray-mid text-xs font-semibold tracking-wide uppercase mb-3">{c.contact.hours.label}</p>
              <div className="space-y-1 font-body text-sm text-vtm-dark">
                {c.contact.hours.rows.map(({ day, time }) => (
                  <div key={day} className="flex justify-between">
                    <span>{day}</span>
                    <span className="text-vtm-gray-mid">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="bg-white py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-4">{c.resources.sectionLabel}</SectionLabel>
          <h2 className="font-headline text-3xl font-bold text-vtm-dark mb-4 leading-tight">
            {c.resources.headline}
          </h2>
          <p className="text-vtm-gray-mid font-body mb-10 max-w-xl">
            {c.resources.body}
          </p>
          <div className="space-y-3">
            {c.resources.items.map((resource, i) => (
              <DownloadGate key={i} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-vtm-dark py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-headline text-3xl font-bold text-white mb-4">
            {c.cta.headline}
          </h2>
          <p className="text-white/60 font-body mb-8 max-w-md mx-auto">
            {c.cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              {c.cta.cta1}
            </Button>
            <Button href="tel:+56900000000" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              {c.cta.cta2}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
