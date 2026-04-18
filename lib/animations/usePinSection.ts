"use client";
import { useEffect, RefObject } from "react";

interface PinSectionOptions {
  /** CSS selector for the individual step panels inside the pinned container */
  stepSelector?: string;
  /** How many viewport heights to scroll through the pinned section per step */
  scrollPerStep?: number;
}

/**
 * Pins a container while scrolling through its child steps.
 * As the user scrolls, each step fades in/up and the previous one fades out.
 *
 * Usage:
 *   const containerRef = useRef<HTMLDivElement>(null);
 *   usePinSection(containerRef, { stepSelector: "[data-step]", scrollPerStep: 1 });
 */
export function usePinSection(
  containerRef: RefObject<HTMLElement | null>,
  options: PinSectionOptions = {}
) {
  const { stepSelector = "[data-step]", scrollPerStep = 1 } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let killFns: (() => void)[] = [];

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const steps = Array.from(container.querySelectorAll<HTMLElement>(stepSelector));
      if (steps.length === 0) return;

      const totalScrollHeight = steps.length * scrollPerStep * window.innerHeight;

      // Set explicit height on the container's parent so there is scroll room
      const wrapper = container.parentElement;
      if (wrapper) {
        wrapper.style.height = `${totalScrollHeight + window.innerHeight}px`;
      }

      // Pin the container
      const pinTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: false,
      });

      // Set all steps invisible initially (except first)
      gsap.set(steps.slice(1), { opacity: 0, y: 40 });
      gsap.set(steps[0], { opacity: 1, y: 0 });

      // Animate each step in as user scrolls
      steps.forEach((step, i) => {
        if (i === 0) return; // first step is already visible

        const prevStep = steps[i - 1];

        ScrollTrigger.create({
          trigger: container,
          start: `top+=${i * scrollPerStep * window.innerHeight} top`,
          end: `top+=${(i + 1) * scrollPerStep * window.innerHeight} top`,
          onEnter: () => {
            gsap.to(prevStep, { opacity: 0, y: -30, duration: 0.4, ease: "power2.in" });
            gsap.fromTo(step, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
          },
          onLeaveBack: () => {
            gsap.to(step, { opacity: 0, y: 40, duration: 0.3, ease: "power2.in" });
            gsap.to(prevStep, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
          },
        });
      });

      killFns = [
        () => pinTrigger.kill(),
        () => ScrollTrigger.getAll().forEach((t) => t.kill()),
      ];
    })();

    return () => {
      killFns.forEach((fn) => fn());
      // Restore wrapper height
      const wrapper = container?.parentElement;
      if (wrapper) wrapper.style.height = "";
    };
  }, [containerRef, stepSelector, scrollPerStep]);
}
