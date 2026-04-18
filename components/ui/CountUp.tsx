"use client";
import { useRef } from "react";
import { useCountUp } from "@/lib/animations/useCountUp";

interface CountUpProps {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function CountUp({ target, prefix = "", suffix = "", decimals = 0, duration = 2, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(ref, target, { prefix, suffix, decimals, duration });
  return (
    <span ref={ref} className={className} aria-label={`${prefix}${target}${suffix}`}>
      {prefix}0{suffix}
    </span>
  );
}
