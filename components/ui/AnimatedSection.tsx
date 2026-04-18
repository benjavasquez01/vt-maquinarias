"use client";
import { useRef } from "react";
import { useFadeInUp } from "@/lib/animations/useFadeInUp";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "aside" | "header";
}

export function AnimatedSection({ children, className, delay = 0, as: Tag = "div" }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useFadeInUp(ref as React.RefObject<HTMLElement>, { delay });
  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  );
}
