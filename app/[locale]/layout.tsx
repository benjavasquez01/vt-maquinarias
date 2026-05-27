import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import Script from "next/script";
import { routing } from "@/lib/routing";
import { getMessages } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AgentProvider } from "@/components/ai/AgentProvider";
import { FloatingWidgets } from "@/components/ui/FloatingWidgets";
import "@/app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | VT Maquinarias",
    default: "VT Maquinarias — Maquinaria Industrial para Chile",
  },
  description:
    "Corte láser de fibra, soldadura láser, plegadoras CNC y robots de soldadura colaborativa para talleres de fabricación metálica en Chile.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://vtmaquinarias.cl"),
  openGraph: {
    type: "website",
    siteName: "VT Maquinarias",
    locale: "es_CL",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "VT Maquinarias — Maquinaria Industrial para Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@VTMaquinarias",
  },
  alternates: {
    canonical: "/",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* ── Google Analytics 4 ──────────────────────────────────────── */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true,
                });
              `}
            </Script>
          </>
        )}

        {/* ── HubSpot Tracking ────────────────────────────────────────── */}
        {HUBSPOT_PORTAL_ID && (
          <Script
            id="hs-script-loader"
            src={`//js.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
            strategy="afterInteractive"
          />
        )}

        {/* ── Microsoft Clarity ───────────────────────────────────────── */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="clarity-init" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}

        <NextIntlClientProvider locale={locale} messages={messages}>
          <AgentProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingWidgets />
          </AgentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
