"use client";
import { useEffect, RefObject } from "react";

interface FadeInUpOptions {
  delay?: number;
  y?: number;
  duration?: number;
  threshold?: number;
}

export function useFadeInUp(
  ref: RefObject<HTMLElement | null>,
  options: FadeInUpOptions = {}
) {
  const { delay = 0, y = 30, duration = 0.7, threshold = 0.15 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    // Respect prefers-reduced-motion — make visible immediately, no animation
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "";
      return;
    }

    let gsapInstance: typeof import("gsap").gsap | null = null;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      gsapInstance = gsap;

      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: `top ${Math.round((1 - threshold) * 100)}%`,
            once: true,
          },
        }
      );
    })();

    return () => {
      gsapInstance?.killTweensOf(el);
    };
  }, [ref, delay, y, duration, threshold]);
}
