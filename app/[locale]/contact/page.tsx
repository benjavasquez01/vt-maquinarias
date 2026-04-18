import { ContactForm } from "@/components/contact/ContactForm";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Metadata } from "next";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach VTM Tech Solutions by phone, email, or form. Our team responds within 1 business day.",
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
                    <a href="mailto:info@vtmtechsolutions.com" className="font-headline font-semibold text-vtm-dark hover:text-vtm-red transition-colors">
                      info@vtmtechsolutions.com
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
                    <a href="tel:+15550000000" className="font-headline font-semibold text-vtm-dark hover:text-vtm-red transition-colors">
                      +1 (555) 000-0000
                    </a>
                    <p className="text-vtm-gray-mid font-body text-sm mt-0.5">{c.info.phone.hours}</p>
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
                      VTM Tech Solutions LLC
                    </p>
                    <p className="text-vtm-gray-mid font-body text-sm mt-0.5">
                      1200 Industrial Blvd, Suite 400<br/>
                      Houston, TX 77001<br/>
                      United States
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

              {/* Map placeholder */}
              <div className="mt-10 bg-vtm-gray-light border border-vtm-gray-border h-56 flex items-center justify-center">
                <div className="text-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto mb-3 text-vtm-gray-mid" aria-hidden="true">
                    <path d="M16 3a9 9 0 00-9 9c0 6 9 17 9 17s9-11 9-17a9 9 0 00-9-9z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="16" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <p className="text-vtm-gray-mid text-sm font-body">{c.info.mapPlaceholder}</p>
                  <p className="text-vtm-gray-mid text-xs mt-1">Houston, TX 77001</p>
                </div>
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
