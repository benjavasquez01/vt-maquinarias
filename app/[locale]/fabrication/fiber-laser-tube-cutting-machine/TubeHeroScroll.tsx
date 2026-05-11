"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function TubeHeroScroll({
  category,
  machineName,
  subheadline,
  locale,
}: {
  category: string;
  machineName: string;
  subheadline: string;
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

  const textOpacity = Math.max(0, 1 - progress / 0.45);
  const overlayOpacity = Math.max(0, 0.72 * (1 - progress));

  return (
    <div ref={wrapperRef} style={{ height: "120vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <Image
          src="/images/fiber-laser-tube-hero.webp"
          alt="Fiber laser tube cutting machine"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div
          className="absolute inset-0 bg-vtm-dark"
          style={{ opacity: overlayOpacity, transition: "none" }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ opacity: textOpacity, transition: "none" }}
        >
          <SectionLabel light className="mb-4">
            {category}
          </SectionLabel>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.02] tracking-tight mb-6 max-w-4xl">
            {machineName}
          </h1>
          <p className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={`/${locale}/quote?machine=fiber-laser-tube-cutting-machine`}
              variant="primary"
              size="lg"
            >
              {locale === "es" ? "Solicitar Cotización" : "Request a Quote"}
            </Button>
            <Button
              href="#specs"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/60"
            >
              {locale === "es" ? "Ver Especificaciones" : "View Specs"}
            </Button>
          </div>
        </div>

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
                transform: `translateY(${progress * 400}%)`,
                transition: "none",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
