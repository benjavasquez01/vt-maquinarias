import Image from "next/image";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { Link } from "@/lib/navigation";
import type { Metadata } from "next";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell us about your shop and we'll recommend the right VTM machine for your production needs. Free consultation, no obligation.",
};

export default async function QuotePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  const c = content[locale];

  return (
    <div className="min-h-screen bg-vtm-dark">
      {/* Minimal header */}
      <header className="border-b border-white/10 px-6 lg:px-10 h-16 flex items-center justify-between max-w-screen-xl mx-auto">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo-dark.png"
            alt="VTM Tech Solutions"
            width={1568}
            height={745}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <Link
          href="/"
          className="text-white/50 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M10 7H2M5 3L1 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {c.backToSite}
        </Link>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-vtm-red text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">
            {c.eyebrow}
          </p>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            {c.headline}
          </h1>
          <p className="text-white/50 font-body">
            {c.subheadline}
          </p>
        </div>
        <QuoteForm />
      </div>
    </div>
  );
}
