import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { IndustriesCarousel } from "@/components/home/IndustriesCarousel";
import { ContactMiniForm } from "@/components/home/ContactMiniForm";
import { TrustBarStats } from "@/components/home/TrustBarStats";
import { PinnedFeatureSection } from "@/components/home/PinnedFeatureSection";
import { HomepageHeroScroll } from "@/components/home/HomepageHeroScroll";
import { ProductShowcase } from "@/components/home/ProductShowcase";

const FEATURE_IMAGES = [
  { key: "precision" as const, image: "/images/homepage-feature-precision.jpg.webp", imageAlt: "Laser cutting machine creating precise sparks on metal" },
  { key: "partnership" as const, image: "/images/homepage-feature-partnership.jpg.webp", imageAlt: "Detalle de plegado CNC en matriz en V", reverse: true },
  { key: "support" as const, image: "/images/homepage-feature-support-local-service.png", imageAlt: "Servicio técnico local y soporte especializado VT Maquinarias" },
  { key: "consultation" as const, image: "/images/homepage-feature-consultation.jpg.webp", imageAlt: "Bodega VTM con stock de máquinas y repuestos en Chile", reverse: true },
];

const BLOG_SLUGS = [
  "fiber-laser-vs-co2-2026",
  "cobot-welding-roi-checklist",
  "press-brake-throughput-signs",
] as const;

const BLOG_IMAGES = [
  "/images/blog-fiber-vs-co2.webp",
  "/images/blog-cobot-roi.webp",
  "/images/blog-press-brake-tonnage.webp",
] as const;

const BLOG_KEYS = ["p1", "p2", "p3"] as const;

const TESTIMONIAL_KEYS = ["t1", "t2", "t3"] as const;

export default function HomePage() {
  const t = useTranslations("home");

  const featureBlocks = FEATURE_IMAGES.map(({ key, image, imageAlt, reverse }) => ({
    label: t(`features.${key}.label`),
    title: t(`features.${key}.title`),
    body: t(`features.${key}.body`),
    image,
    imageAlt,
    reverse,
  }));

  return (
    <>
      {/* ── Section 1: Hero ── */}
      <HomepageHeroScroll
        eyebrow={t("hero.eyebrow")}
        headline={t("hero.headline")}
        subheadline={t("hero.subheadline")}
        scroll={t("hero.scroll")}
      />

      {/* ── Section 2: Trust Bar ── */}
      <TrustBarStats />

      {/* ── Section 3: Product Showcase ── */}
      <ProductShowcase />

      {/* ── Section 4: Feature Highlights ── */}
      <PinnedFeatureSection blocks={featureBlocks} />

      {/* ── Section 5: Industry Solutions Carousel ── */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 mb-10">
          <FadeIn>
            <SectionLabel className="mb-3">{t("industries.label")}</SectionLabel>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark max-w-xl leading-tight">
                {t("industries.heading")}
              </h2>
              <Button href="/solutions" variant="ghost" size="md" arrow className="hidden md:inline-flex flex-shrink-0">
                {t("industries.allSolutions")}
              </Button>
            </div>
          </FadeIn>
        </div>
        <IndustriesCarousel />
      </section>

      {/* ── Section 6: Social Proof ── */}
      <section className="bg-vtm-gray-light py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <SectionLabel className="mb-3 text-center">{t("testimonials.label")}</SectionLabel>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark text-center mb-14 max-w-2xl mx-auto leading-tight">
              {t("testimonials.heading")}
            </h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIAL_KEYS.map((key) => {
              const company = t(`testimonials.${key}.company`);
              const location = t(`testimonials.${key}.location`);
              return (
              <div key={key} className="bg-white border border-vtm-gray-border p-8 flex flex-col">
                <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="mb-6 flex-shrink-0" aria-hidden="true">
                  <path d="M0 22V12.5C0 5.167 3.833 1.167 11.5 0l1.5 2.5C9.5 3.5 7.5 5.5 7 9h5V22H0zm15.5 0V12.5C15.5 5.167 19.333 1.167 27 0l1 2.5c-3.5 1-5.5 3-6 6.5h5V22h-11.5z" fill="#CB1C1D" opacity="0.15"/>
                </svg>
                <p className="font-body text-vtm-dark text-lg leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t(`testimonials.${key}.quote`)}&rdquo;
                </p>
                <div className="border-t border-vtm-gray-border pt-5">
                  <p className="font-headline font-semibold text-vtm-dark text-sm">{t(`testimonials.${key}.author`)}</p>
                  <p className="text-vtm-gray-mid text-xs mt-0.5">{company ? `${company} — ${location}` : location}</p>
                </div>
              </div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Section 7: Blog Preview ── */}
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="flex items-end justify-between gap-4 mb-12">
              <div>
                <SectionLabel className="mb-3">{t("blog.label")}</SectionLabel>
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark max-w-xl leading-tight">
                  {t("blog.heading")}
                </h2>
              </div>
              <Button href="/blog" variant="ghost" size="md" arrow className="hidden md:inline-flex flex-shrink-0">
                {t("blog.allArticles")}
              </Button>
            </div>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_KEYS.map((key, i) => (
              <Link
                key={BLOG_SLUGS[i]}
                href={`/blog/${BLOG_SLUGS[i]}`}
                className="group border border-vtm-gray-border hover:border-vtm-red/50 transition-colors overflow-hidden flex flex-col bg-white"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-vtm-gray-light">
                  <Image
                    src={BLOG_IMAGES[i]}
                    alt={t(`blog.${key}.title`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-vtm-gray-mid text-xs font-semibold tracking-wide uppercase mb-4 font-body">
                    {t(`blog.${key}.date`)}
                  </p>
                  <h3 className="font-headline font-bold text-vtm-dark group-hover:text-vtm-red transition-colors text-lg leading-snug mb-3 flex-1">
                    {t(`blog.${key}.title`)}
                  </h3>
                  <p className="text-vtm-gray-mid text-sm font-body leading-relaxed mb-6">
                    {t(`blog.${key}.excerpt`)}
                  </p>
                  <span className="text-vtm-red text-sm font-semibold group-hover:underline inline-flex items-center gap-1">
                    {t("blog.readMore")}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Section 8: Final CTA ── */}
      <section className="bg-vtm-dark py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <SectionLabel light className="mb-4">{t("cta.label")}</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {t("cta.heading")}
              </h2>
              <p className="text-white/60 font-body text-lg leading-relaxed">
                {t("cta.body")}
              </p>
            </FadeIn>
            <div>
              <ContactMiniForm />
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "VT Maquinarias",
            url: "https://vtmaquinarias.cl",
            logo: "https://vtmaquinarias.cl/images/logo-vtmaquinarias.webp",
            description:
              "Máquinas industriales de corte láser de fibra, plegadoras CNC, robots de soldadura colaborativa y sistemas de automatización para talleres de fabricación metálica en Chile.",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              availableLanguage: ["Spanish"],
            },
            sameAs: [
              "https://www.linkedin.com/company/vt-maquinarias",
            ],
          }),
        }}
      />
    </>
  );
}
