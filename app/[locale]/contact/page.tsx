import { AfterHoursNote } from "@/components/contact/AfterHoursNote";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Metadata } from "next";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacte a VT Maquinarias por teléfono, correo o formulario. Nuestro equipo responde dentro de 1 día hábil.",
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  const c = content[locale];

  return (
    <>
      <section className="bg-vtm-dark pt-24 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel light className="mb-4">{c.hero.sectionLabel}</SectionLabel>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl mb-4">
            {c.hero.headline}
          </h1>
          <p className="text-white/60 font-body text-lg max-w-xl">
            {c.hero.subheadline}
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-headline text-2xl font-bold text-vtm-dark mb-8">{c.info.headline}</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vtm-gray-light flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M3 4h12v10H3z" stroke="#CB1C1D" strokeWidth="1.2"/>
                      <path d="M3 4l6 6 6-6" stroke="#CB1C1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-vtm-gray-mid text-xs font-semibold tracking-wide uppercase mb-1">{c.info.email.label}</p>
                    <a href="mailto:dvasquez@vtmaquinarias.cl" className="flex min-h-11 items-center font-headline font-semibold text-vtm-dark hover:text-vtm-red transition-colors">
                      dvasquez@vtmaquinarias.cl
                    </a>
                    <a href="mailto:contacto@vtmaquinarias.cl" className="flex min-h-11 items-center font-headline font-semibold text-vtm-dark hover:text-vtm-red transition-colors">
                      contacto@vtmaquinarias.cl
                    </a>
                    <p className="text-vtm-gray-mid font-body text-sm mt-0.5">{c.info.email.responseTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vtm-gray-light flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M4 3h3l1 4-2 1a10 10 0 004 4l1-2 4 1v3a1 1 0 01-1 1C6 14 4 6 4 4a1 1 0 010-1z" stroke="#CB1C1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-vtm-gray-mid text-xs font-semibold tracking-wide uppercase mb-1">{c.info.phone.label}</p>
                    <a href="tel:+56999171017" className="inline-flex min-h-11 items-center font-headline font-semibold text-vtm-dark hover:text-vtm-red transition-colors">
                      +56 9 9917 1017
                    </a>
                    <p className="text-vtm-gray-mid font-body text-sm mt-0.5">{c.info.phone.hours}</p>
                    <AfterHoursNote text={c.info.afterHoursNote} />
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vtm-gray-light flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M9 2a5 5 0 100 10A5 5 0 009 2z" stroke="#CB1C1D" strokeWidth="1.2"/>
                      <path d="M9 12s-5 3-5 4h10c0-1-5-4-5-4z" stroke="#CB1C1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-vtm-gray-mid text-xs font-semibold tracking-wide uppercase mb-1">{c.info.address.label}</p>
                    <p className="font-headline font-semibold text-vtm-dark">
                      VT Maquinarias SpA
                    </p>
                    <p className="text-vtm-gray-mid font-body text-sm mt-0.5">
                      Los Cerezos 5890<br/>
                      8270199 La Florida<br/>
                      Región Metropolitana, Chile
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vtm-gray-light flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <circle cx="9" cy="9" r="7" stroke="#CB1C1D" strokeWidth="1.2"/>
                      <path d="M9 5v4l2.5 2.5" stroke="#CB1C1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-vtm-gray-mid text-xs font-semibold tracking-wide uppercase mb-1">{c.info.hoursLabel}</p>
                    <div className="space-y-1 font-body text-sm text-vtm-dark">
                      {c.info.hours.map(({ day, time }) => (
                        <div key={day} className="flex justify-between gap-8">
                          <span>{day}</span>
                          <span className="text-vtm-gray-mid">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 border border-vtm-gray-border h-56 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11694.802461953605!2d-70.5766812!3d-33.5138221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfb5c3f29a7b%3A0x550d6d2d6db4c6fe!2sVT%20Maquinarias%20Chile!5e1!3m2!1ses-419!2scl!4v1782852348141!5m2!1ses-419!2scl"
                  title="Ubicación VT Maquinarias"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-headline text-2xl font-bold text-vtm-dark mb-8">{c.form.headline}</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
