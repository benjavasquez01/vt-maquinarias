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
  locale,
}: {
  c: HeroContent;
  locale: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const { top, height } = wrapperRef.current.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      const p = Math.max(0, Math.min(1, -top / scrollable));
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text fades out in the first 45% of scroll
  const textOpacity = Math.max(0, 1 - progress / 0.45);
  // Overlay goes from 0.72 (dark) to 0 (clear image)
  const overlayOpacity = Math.max(0, 0.72 * (1 - progress));

  return (
    <div ref={wrapperRef} style={{ height: "220vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/fiber-laser-hero-2.png"
          alt="Fiber laser cutting machine"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Darkening overlay — fades away on scroll */}
        <div
          className="absolute inset-0 bg-vtm-dark"
          style={{ opacity: overlayOpacity, transition: "none" }}
          aria-hidden="true"
        />

        {/* Text — fades out on scroll */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ opacity: textOpacity, transition: "none" }}
        >
          <SectionLabel light className="mb-4">
            {c.sectionLabel}
          </SectionLabel>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.02] tracking-tight mb-6 max-w-4xl">
            {c.headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
            {c.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/quote?machine=fiber-laser-cutting-machine"
              variant="primary"
              size="lg"
            >
              {c.cta1}
            </Button>
            <Button
              href="#"
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
