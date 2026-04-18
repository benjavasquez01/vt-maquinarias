"use client";

import { useEffect, useRef } from "react";

export function HeroHeadline({ text }: { text: string }) {
  const HEADLINE = text;
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    (async () => {
      const { gsap } = await import("gsap");
      const el = containerRef.current;
      if (!el) return;

      const words = el.querySelectorAll(".hero-word");
      if (!words.length) return;

      if (prefersReduced) {
        gsap.set(words, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        words,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.075,
          delay: 0.3,
        }
      );
    })();
  }, []);

  return (
    <h1
      ref={containerRef}
      className="font-headline text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
    >
      {HEADLINE.split(" ").map((word, i) => (
        <span
          key={i}
          className="hero-word inline-block mr-[0.22em] opacity-0"
          aria-hidden="false"
        >
          {word}
        </span>
      ))}
    </h1>
  );
}
