"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { useAgent } from "@/components/ai/AgentProvider";

// ─── Dropdown content ────────────────────────────────────────────────────────

const DROPDOWN: Record<string, { label: string; href: string }[]> = {
  fabrication: [
    { label: "Cortadora Láser de Chapa",      href: "/fabrication/fiber-laser-cutting-machine" },
    { label: "Corte Láser de Tubo",           href: "/fabrication/fiber-laser-tube-cutting-machine" },
    { label: "Combo Chapa y Tubo",            href: "/fabrication/sheet-tube-laser-cutting-machine" },
    { label: "Máquina de Soldadura Láser",    href: "/fabrication/4-in-1-laser-machine" },
    { label: "Máquina de Limpieza Láser",     href: "/fabrication/laser-cleaning-machine" },
    { label: "Plegadora CNC",                 href: "/fabrication/cnc-press-brake" },
    { label: "Punzonadora / Cizalla",         href: "/fabrication/ironworker" },
  ],
  automation: [
    { label: "Brazo Soldador Colaborativo",   href: "/automation/collaborative-welding-arm" },
    { label: "Brazo Soldador Industrial",     href: "/automation/industrial-welding-arm" },
  ],
};

const NAV_ITEMS = [
  { key: "fabrication" as const, href: "/fabrication" },
  { key: "automation" as const, href: "/automation" },
  { key: "solutions" as const, href: "/solutions" },
  { key: "about" as const, href: "/about" },
  { key: "contact" as const, href: "/contact" },
];

// ─── Desktop dropdown ─────────────────────────────────────────────────────────

function NavDropdown({
  navKey,
  href,
  label,
  isActive,
}: {
  navKey: string;
  href: string;
  label: string;
  isActive: boolean;
}) {
  const items = DROPDOWN[navKey];
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  if (!items) {
    return (
      <Link
        href={href}
        className={`nav-link text-sm font-medium transition-colors duration-150 ${
          isActive ? "text-vtm-red" : "text-vtm-dark hover:text-vtm-red"
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
    >
      {/* Trigger */}
      <Link
        href={href}
        className={`nav-link text-sm font-medium transition-colors duration-150 inline-flex items-center gap-1 ${
          isActive ? "text-vtm-red" : "text-vtm-dark hover:text-vtm-red"
        }`}
      >
        {label}
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 3.5l3 3 3-3" />
        </svg>
      </Link>

      {/* Dropdown panel */}
      <div
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-vtm-gray-border shadow-lg transition-all duration-150 origin-top ${
          open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        {/* Arrow tip */}
        <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-l border-t border-vtm-gray-border rotate-45" />

        <ul className="py-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-5 py-2.5 text-sm text-vtm-dark hover:bg-vtm-gray-light hover:text-vtm-red transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Mobile accordion item ────────────────────────────────────────────────────

function MobileNavItem({
  navKey,
  href,
  label,
  onNavigate,
}: {
  navKey: string;
  href: string;
  label: string;
  onNavigate: () => void;
}) {
  const items = DROPDOWN[navKey];
  const [expanded, setExpanded] = useState(false);

  if (!items) {
    return (
      <Link
        href={href}
        onClick={onNavigate}
        className="text-2xl font-headline font-medium text-vtm-dark py-3 border-b border-vtm-gray-border hover:text-vtm-red transition-colors block"
      >
        {label}
      </Link>
    );
  }

  return (
    <div className="border-b border-vtm-gray-border">
      <button
        onClick={() => setExpanded((e) => !e)}
        className="w-full flex items-center justify-between text-2xl font-headline font-medium text-vtm-dark py-3 hover:text-vtm-red transition-colors"
      >
        {label}
        <svg
          width="14" height="14" viewBox="0 0 10 10" fill="none"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        >
          <path d="M2 3.5l3 3 3-3" />
        </svg>
      </button>
      {expanded && (
        <ul className="pb-3 pl-2 flex flex-col gap-1">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="block py-2 text-base text-vtm-gray-mid hover:text-vtm-red transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export function Navbar() {
  const t = useTranslations("nav");
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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-vtm-gray-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-vtmaquinarias.webp"
              alt="VT Maquinarias"
              width={1591}
              height={511}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {NAV_ITEMS.map(({ key, href }) => (
              <NavDropdown
                key={key}
                navKey={key}
                href={href}
                label={t(key)}
                isActive={pathname.startsWith(href)}
              />
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-4">
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
              <span className={`block w-5 h-px bg-vtm-dark transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-px bg-vtm-dark transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-vtm-dark transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col pt-20 transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col p-6 gap-1 overflow-y-auto flex-1">
          {NAV_ITEMS.map(({ key, href }) => (
            <MobileNavItem
              key={key}
              navKey={key}
              href={href}
              label={t(key)}
              onNavigate={() => setMenuOpen(false)}
            />
          ))}
        </nav>
        <div className="p-6 flex flex-col gap-4">
          <Button
            onClick={() => { openAgent("quote"); setMenuOpen(false); }}
            variant="primary"
            size="lg"
            className="w-full justify-center"
          >
            {t("requestQuote")}
          </Button>
        </div>
      </div>
    </>
  );
}
