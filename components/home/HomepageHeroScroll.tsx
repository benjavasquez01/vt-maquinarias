"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HeroHeadline } from "./HeroHeadline";
import { HomepageHeroCTA } from "./HomepageHeroCTA";

const HERO_IMAGES = [
  { src: "/images/homepage-hero-gantry.webp", alt: "Máquina de corte láser de fibra VTM cortando plancha con chispas" },
  { src: "/images/home-hero-2.webp", alt: "Prensa plegadora CNC VTM en planta industrial" },
];

type Props = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  scroll: string;
};

export function HomepageHeroScroll({ eyebrow, headline, subheadline, scroll }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  const textOpacity = Math.min(1, progress / 0.45);
  const overlayOpacity = Math.min(1, progress);

  return (
    <div ref={wrapperRef} className="vtm-home-hero-scroll-wrapper vtm-hero-scroll-wrapper">
      <div className="vtm-hero-scroll-panel relative h-auto overflow-visible bg-vtm-dark md:sticky md:top-0 md:h-screen md:overflow-hidden">
        {/* next/image fill requires a non-sticky positioned parent */}
        <div className="vtm-hero-scroll-media relative aspect-[1672/941] w-full overflow-hidden md:absolute md:inset-0 md:aspect-auto md:h-auto">
          {HERO_IMAGES.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              className="vtm-hero-machine-image !p-0 object-cover !object-center transition-opacity duration-500"
              style={{ opacity: i === activeIndex ? 1 : 0 }}
              sizes="100vw"
            />
          ))}
        </div>

        <div
          className="vtm-hero-scroll-overlay absolute inset-0 bg-gradient-to-b from-transparent via-vtm-dark/10 to-vtm-dark/65 md:bg-vtm-dark md:bg-none"
          style={{ opacity: overlayOpacity, transition: "none" }}
          aria-hidden="true"
        />

        <div
          className="vtm-hero-scroll-content relative flex flex-col items-center px-6 pb-10 pt-8 text-center md:absolute md:inset-0 md:justify-center md:pb-0 md:pt-0"
          style={{ opacity: textOpacity, transition: "none" }}
        >
          <p className="mb-4 max-w-[18rem] text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-white/55 md:mb-6 md:max-w-none md:tracking-[0.25em]">
            {eyebrow}
          </p>
          <HeroHeadline text={headline} />
          <p className="mx-auto mb-8 max-w-[21rem] text-base leading-relaxed text-white/70 md:mb-10 md:max-w-2xl md:text-xl">
            {subheadline}
          </p>
          <HomepageHeroCTA />
        </div>

        <div
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
          style={{ opacity: Math.max(0, 1 - progress * 4), transition: "none" }}
          aria-hidden="true"
        >
          <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">{scroll}</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </div>
  );
}
