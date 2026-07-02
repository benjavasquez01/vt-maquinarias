"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

type HeroContent = {
  sectionLabel: string;
  headline: string;
  subheadline: string;
  cta1: string;
  cta2: string;
};

export function HeroScroll({
  c,
  image = "/images/fiber-laser-hero-2.webp",
  quoteHref = "/quote?machine=fiber-laser-cutting-machine",
  initialOverlayOpacity = 0.72,
}: {
  c: HeroContent;
  image?: string;
  quoteHref?: string;
  initialOverlayOpacity?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const { top, height } = wrapperRef.current.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      const p = scrollable > 0 ? Math.max(0, Math.min(1, -top / scrollable)) : 0;
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text fades out in the first 45% of scroll
  const textOpacity = Math.max(0, 1 - progress / 0.45);
  // Overlay goes from the configured initial darkness to 0 (clear image)
  const overlayOpacity = Math.max(0, initialOverlayOpacity * (1 - progress));

  return (
    <div ref={wrapperRef} className="vtm-hero-scroll-wrapper h-auto md:h-[120vh]">
      <div className="vtm-hero-scroll-panel relative h-auto overflow-visible bg-vtm-dark md:sticky md:top-0 md:h-screen md:overflow-hidden">
        <div className="vtm-hero-scroll-media relative h-[clamp(220px,58vw,292px)] overflow-hidden md:absolute md:inset-0 md:h-auto">
        {/* Background image */}
        <Image
          src={image}
          alt={c.headline.replace("\n", " ")}
          fill
          priority
          className="vtm-hero-machine-image !p-0 object-contain !object-center md:object-cover"
          sizes="100vw"
        />

        {/* Darkening overlay — fades away on scroll */}
        <div
          className="vtm-hero-scroll-overlay absolute inset-0 bg-gradient-to-b from-transparent via-vtm-dark/10 to-vtm-dark/60 md:bg-vtm-dark md:bg-none"
          style={{ opacity: overlayOpacity, transition: "none" }}
          aria-hidden="true"
        />
        </div>

        {/* Text — fades out on scroll */}
        <div
          className="vtm-hero-scroll-content relative flex flex-col items-center px-6 pb-10 pt-8 text-center md:absolute md:inset-0 md:justify-center md:pb-0 md:pt-0"
          style={{ opacity: textOpacity, transition: "none" }}
        >
          <SectionLabel light className="mb-4">
            {c.sectionLabel}
          </SectionLabel>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.02] tracking-tight mb-6 max-w-4xl">
            {c.headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className="mb-10 hidden max-w-2xl text-lg leading-relaxed text-white/60 md:block md:text-xl">
            {c.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={quoteHref}
              variant="primary"
              size="lg"
            >
              {c.cta1}
            </Button>
            <Button
              href="/catalogo-vt-maquinarias.pdf"
              target="_blank"
              rel="noopener"
              download
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/60"
            >
              {c.cta2}
            </Button>
          </div>
        </div>

        {/* Scroll hint — visible only at start */}
        <div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
          style={{ opacity: Math.max(0, 1 - progress * 4), transition: "none" }}
          aria-hidden="true"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/20 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-white/60"
              style={{
                height: "40%",
                transform: `translateY(${(progress * 400)}%)`,
                transition: "none",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
