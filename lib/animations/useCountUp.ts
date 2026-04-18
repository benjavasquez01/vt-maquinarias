"use client";
import { useEffect, RefObject } from "react";

interface CountUpOptions {
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function useCountUp(
  ref: RefObject<HTMLElement | null>,
  target: number,
  options: CountUpOptions = {}
) {
  const { duration = 2, prefix = "", suffix = "", decimals = 0 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
      return;
    }

    let cleanup: (() => void) | null = null;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const obj = { value: 0 };
      let st: import("gsap/ScrollTrigger").ScrollTrigger;

      st = ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            value: target,
            duration,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${prefix}${obj.value.toFixed(decimals)}${suffix}`;
            },
          });
        },
      });

      cleanup = () => {
        st?.kill();
        gsap.killTweensOf(obj);
      };
    })();

    return () => cleanup?.();
  }, [ref, target, duration, prefix, suffix, decimals]);
}
