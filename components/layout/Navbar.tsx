"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { useAgent } from "@/components/ai/AgentProvider";

const NAV_ITEMS = [
  { key: "fabrication" as const, href: "/fabrication" },
  { key: "automation" as const, href: "/automation" },
  { key: "solutions" as const, href: "/solutions" },
  { key: "about" as const, href: "/about" },
  { key: "contact" as const, href: "/contact" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { openAgent } = useAgent();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const otherLocale = locale === "en" ? "es" : "en";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-vtm-gray-border"
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-light.png"
              alt="VTM Tech Solutions"
              width={1006}
              height={513}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_ITEMS.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className={`nav-link text-sm font-medium transition-colors duration-150 ${
                  pathname.startsWith(href)
                    ? "text-vtm-red"
                    : "text-vtm-dark hover:text-vtm-red"
                }`}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {/* Language toggle */}
            <Link
              href={pathname}
              locale={otherLocale}
              className="hidden sm:block text-xs font-semibold tracking-widest text-vtm-gray-mid hover:text-vtm-dark transition-colors uppercase"
              aria-label={`Switch to ${otherLocale === "en" ? "English" : "Español"}`}
            >
              {locale === "en" ? "ES" : "EN"}
            </Link>

            {/* CTA */}
            <Button
              onClick={() => openAgent("quote")}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              {t("requestQuote")}
            </Button>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-5 h-px bg-vtm-dark transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-vtm-dark transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-vtm-dark transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen drawer */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col pt-16 transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col p-6 gap-1">
          {NAV_ITEMS.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="text-2xl font-headline font-medium text-vtm-dark py-3 border-b border-vtm-gray-border hover:text-vtm-red transition-colors"
            >
              {t(key)}
            </Link>
          ))}
        </nav>
        <div className="p-6 flex flex-col gap-4 mt-auto">
          <Button
            onClick={() => { openAgent("quote"); setMenuOpen(false); }}
            variant="primary"
            size="lg"
            className="w-full justify-center"
          >
            {t("requestQuote")}
          </Button>
          <Link
            href={pathname}
            locale={otherLocale}
            className="text-center text-sm font-semibold tracking-widest text-vtm-gray-mid hover:text-vtm-dark uppercase"
          >
            {locale === "en" ? "Ver en Español" : "View in English"}
          </Link>
        </div>
      </div>
    </>
  );
}
