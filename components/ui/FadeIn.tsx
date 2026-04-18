"use client";
import { useRef, type ReactNode } from "react";
import { useFadeInUp } from "@/lib/animations/useFadeInUp";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}

/**
 * Wraps children in a div that fades + slides up on scroll enter.
 * Starts invisible; GSAP (or reduced-motion fallback) makes it visible.
 */
export function FadeIn({
  children,
  delay = 0,
  y = 30,
  duration = 0.7,
  className,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  useFadeInUp(ref, { delay, y, duration });
  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
