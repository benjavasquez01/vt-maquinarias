"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { useAgent } from "@/components/ai/AgentProvider";

// ─── Dropdown content ────────────────────────────────────────────────────────

type DropdownLink = { label: string; href: string };
type DropdownGroup = { label: string; children: DropdownLink[] };
type DropdownEntry = DropdownLink | DropdownGroup;

const isGroup = (entry: DropdownEntry): entry is DropdownGroup => "children" in entry;

const DROPDOWN: Record<string, DropdownEntry[]> = {
  fabrication: [
    {
      label: "Plegadora CNC",
      children: [
        { label: "Plegadora CNC",             href: "/fabrication/cnc-press-brake" },
        { label: "Herramientas — Punzones y Matrices", href: "/fabrication/herramientas" },
      ],
    },
    {
      label: "Máquinas de Corte Láser",
      children: [
        { label: "Máquina de Corte Láser de Plancha",       href: "/fabrication/fiber-laser-cutting-machine" },
        { label: "Máquina de Corte Láser de Tubo",        href: "/fabrication/fiber-laser-tube-cutting-machine" },
        { label: "Máquina de Corte Láser de Plancha y Tubo", href: "/fabrication/sheet-tube-laser-cutting-machine" },
      ],
    },
    { label: "Máquina Soldadora Láser",    href: "/fabrication/4-in-1-laser-machine" },
    { label: "Máquina de Limpieza Láser",     href: "/fabrication/laser-cleaning-machine" },
    { label: "Punzonadora / Cizalla",         href: "/fabrication/ironworker" },
    { label: "Paneladora CNC",                href: "/fabrication/panel-bender" },
    { label: "Compresor de Aire",             href: "/fabrication/air-compressor" },
    {
      label: "Automatización",
      children: [
        { label: "Brazo Soldador Colaborativo",   href: "/automation/collaborative-welding-arm" },
      ],
    },
  ],
};

const NAV_ITEMS = [
  { key: "fabrication" as const, href: "/productos" },
  { key: "solutions" as const, href: "/solutions" },
  { key: "about" as const, href: "/about" },
  { key: "contact" as const, href: "/contact" },
];

// ─── Desktop nested group (flyout sub-drawer) ─────────────────────────────────

function DesktopGroup({ group, onSelect }: { group: DropdownGroup; onSelect: () => void }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => { closeTimer.current = setTimeout(() => setOpen(false), 120); };
  const cancelClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };

  return (
    <li
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
    >
      <div className="flex items-center justify-between px-5 py-2.5 text-sm text-vtm-dark hover:bg-vtm-gray-light hover:text-vtm-red transition-colors cursor-default select-none">
        {group.label}
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true" className="-rotate-90 flex-shrink-0"
        >
          <path d="M2 3.5l3 3 3-3" />
        </svg>
      </div>

      {/* Flyout panel */}
      <div
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        className={`absolute top-0 left-full -ml-px w-64 bg-white border border-vtm-gray-border shadow-lg transition-all duration-150 origin-top-left ${
          open ? "opacity-100 scale-95 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <ul className="py-2">
          {group.children.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-5 py-2.5 text-sm text-vtm-dark hover:bg-vtm-gray-light hover:text-vtm-red transition-colors"
                onClick={() => { setOpen(false); onSelect(); }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

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
          {items.map((item) =>
            isGroup(item) ? (
              <DesktopGroup key={item.label} group={item} onSelect={() => setOpen(false)} />
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-5 py-2.5 text-sm text-vtm-dark hover:bg-vtm-gray-light hover:text-vtm-red transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

// ─── Mobile nested group (accordion inside accordion) ─────────────────────────

function MobileGroup({ group, onNavigate }: { group: DropdownGroup; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      <button
        onClick={() => setExpanded((e) => !e)}
        className="w-full flex items-center justify-between py-2 text-base font-medium text-vtm-dark hover:text-vtm-red transition-colors"
      >
        {group.label}
        <svg
          width="12" height="12" viewBox="0 0 10 10" fill="none"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        >
          <path d="M2 3.5l3 3 3-3" />
        </svg>
      </button>
      {expanded && (
        <ul className="pl-3 pb-1 flex flex-col gap-1">
          {group.children.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="block py-2 text-sm text-vtm-gray-mid hover:text-vtm-red transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
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
      <div className="flex items-center">
        <Link
          href={href}
          onClick={onNavigate}
          className="flex min-h-14 flex-1 items-center py-3 font-headline text-2xl font-medium text-vtm-dark transition-colors hover:text-vtm-red"
        >
          {label}
        </Link>
        <button
          onClick={() => setExpanded((e) => !e)}
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center text-vtm-dark transition-colors hover:text-vtm-red"
          aria-label={`${expanded ? "Cerrar" : "Abrir"} submenú de ${label}`}
          aria-expanded={expanded}
        >
        <svg
          width="14" height="14" viewBox="0 0 10 10" fill="none"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        >
          <path d="M2 3.5l3 3 3-3" />
        </svg>
        </button>
      </div>
      {expanded && (
        <ul className="pb-3 pl-2 flex flex-col gap-1">
          {items.map((item) =>
            isGroup(item) ? (
              <MobileGroup key={item.label} group={item} onNavigate={onNavigate} />
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="block py-2 text-base text-vtm-gray-mid hover:text-vtm-red transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
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
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-vtm-gray-border">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-2 sm:gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-vtmaquinarias.webp"
              alt="VT Maquinarias"
              width={1591}
              height={511}
              className="h-9 min-[390px]:h-10 sm:h-14 w-auto"
              preload
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
          <div className="flex items-center gap-1 sm:gap-4 flex-shrink-0">
            <Button
              onClick={() => openAgent("quote")}
              variant="primary"
              size="sm"
              className="justify-center max-[389px]:px-3"
            >
              <span className="min-[390px]:hidden">{t("requestQuoteShort")}</span>
              <span className="hidden min-[390px]:inline">{t("requestQuote")}</span>
            </Button>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 flex-shrink-0 -mr-2"
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
        className={`fixed inset-0 z-40 overflow-x-clip bg-white flex flex-col pt-20 transition-transform duration-300 lg:hidden ${
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
