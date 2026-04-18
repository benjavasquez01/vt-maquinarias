"use client";
import { useRef, type ReactNode } from "react";
import { useStaggerReveal } from "@/lib/animations/useStaggerReveal";

interface StaggerChildrenProps {
  children: ReactNode;
  /** CSS selector targeting the direct children to stagger */
  childSelector?: string;
  stagger?: number;
  y?: number;
  duration?: number;
  className?: string;
}

/**
 * Wraps children and staggers their fade+slide-up on scroll enter.
 * Each direct child matching childSelector starts invisible and animates in.
 */
export function StaggerChildren({
  children,
  childSelector = ":scope > *",
  stagger = 0.08,
  y = 24,
  duration = 0.6,
  className,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  useStaggerReveal(ref, childSelector, { stagger, y, duration });

  return (
    <div ref={ref} className={className} data-stagger-parent>
      {children}
    </div>
  );
}
