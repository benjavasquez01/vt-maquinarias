"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HeroHeadline } from "./HeroHeadline";
import { HomepageHeroCTA } from "./HomepageHeroCTA";

const HERO_IMAGES = [
  { src: "/images/homepage-hero-2.jpg.png", alt: "Laser cutting machine with bright sparks on metal" },
  { src: "/images/home-hero-2.png", alt: "VTM CNC press brake in factory" },
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
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const textOpacity = Math.max(0, 1 - progress / 0.45);
  const overlayOpacity = Math.max(0, 0.72 * (1 - progress));

  return (
    <div ref={wrapperRef} style={{ height: "120vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {HERO_IMAGES.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            className="object-cover transition-opacity duration-1000"
            style={{ opacity: i === activeIndex ? 1 : 0 }}
            sizes="100vw"
          />
        ))}

        <div
          className="absolute inset-0 bg-vtm-dark"
          style={{ opacity: overlayOpacity, transition: "none" }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ opacity: textOpacity, transition: "none" }}
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/50 mb-6">
            {eyebrow}
          </p>
          <HeroHeadline text={headline} />
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
            {subheadline}
          </p>
          <HomepageHeroCTA />
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
