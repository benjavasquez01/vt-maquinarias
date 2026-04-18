"use client";
import { useEffect, RefObject } from "react";

interface StaggerRevealOptions {
  stagger?: number;
  y?: number;
  duration?: number;
}

export function useStaggerReveal(
  parentRef: RefObject<HTMLElement | null>,
  childSelector: string,
  options: StaggerRevealOptions = {}
) {
  const { stagger = 0.08, y = 24, duration = 0.6 } = options;

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent || typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      const children = parent.querySelectorAll<HTMLElement>(childSelector);
      children.forEach((el) => { el.style.opacity = "1"; el.style.transform = ""; });
      return;
    }

    let cleanup: (() => void) | null = null;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const children = parent.querySelectorAll(childSelector);
      if (!children.length) return;

      const tween = gsap.fromTo(
        children,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: parent,
            start: "top 85%",
            once: true,
          },
        }
      );

      cleanup = () => {
        tween.kill();
        gsap.killTweensOf(children);
      };
    })();

    return () => cleanup?.();
  }, [parentRef, childSelector, stagger, y, duration]);
}
