import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-vtm-dark text-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16">
        {/* Top: Logo + tagline */}
        <div className="mb-12">
          <div className="inline-block bg-white rounded-md px-4 py-3 mb-3">
            <Image
              src="/images/logo-vtmaquinarias.webp"
              alt="VT Maquinarias"
              width={1591}
              height={511}
              className="h-12 w-auto"
            />
          </div>
          <p className="text-white/50 text-sm max-w-xs">{t("tagline")}</p>
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              {t("fabrication")}
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/fabrication/fiber-laser-cutting-machine" className="hover:text-white transition-colors">{t("fiberLaser")}</Link></li>
              <li><Link href="/fabrication/laser-welding-machine" className="hover:text-white transition-colors">{t("laserWelding")}</Link></li>
              <li><Link href="/fabrication/laser-cleaning-machine" className="hover:text-white transition-colors">{t("laserCleaning")}</Link></li>
              <li><Link href="/fabrication/cnc-press-brake" className="hover:text-white transition-colors">{t("pressBreak")}</Link></li>
              <li><Link href="/fabrication/shearing-machine/guillotine" className="hover:text-white transition-colors">{t("shearing")}</Link></li>
              <li><Link href="/fabrication/ironworker" className="hover:text-white transition-colors">{t("ironworker")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              {t("automation")}
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/automation/collaborative-welding-arm" className="hover:text-white transition-colors">{t("cobotWelding")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              {t("company")}
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">{t("aboutUs")}</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("contact")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              {t("support")}
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/support" className="hover:text-white transition-colors">{t("supportPage")}</Link></li>
            </ul>
            <div className="mt-8 space-y-2 text-sm text-white/70">
              <p><a href="tel:+56999171017" className="hover:text-white transition-colors">+56 9 9917 1017</a></p>
              <p><a href="mailto:contacto@vtmaquinarias.cl" className="hover:text-white transition-colors">contacto@vtmaquinarias.cl</a></p>
              <p>La Florida, Santiago, Chile</p>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="flex gap-4 mb-8">
          {[
            { label: "LinkedIn", href: "https://cl.linkedin.com/company/vt-maquinarias" },
            { label: "YouTube", href: "https://www.youtube.com/@VTMaquinariascl" },
            { label: "Instagram", href: "https://www.instagram.com/vtmaquinariascl/" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-xs font-semibold tracking-widest text-white/40 hover:text-white uppercase transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/30">
          <p>{t("copyright", { year })}</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">{t("privacyPolicy")}</Link>
            <Link href="/terms-of-service" className="hover:text-white/60 transition-colors">{t("termsOfService")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
