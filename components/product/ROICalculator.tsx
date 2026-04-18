"use client";
import { useState, useRef, useEffect, useCallback } from "react";

/** Animates a number value whenever `target` changes */
function AnimatedValue({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prevRef = useRef(target);

  const animate = useCallback((from: number, to: number) => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.textContent = `${prefix}${to.toLocaleString()}${suffix}`;
      return;
    }
    (async () => {
      const { gsap } = await import("gsap");
      const counter = { val: from };
      gsap.to(counter, {
        val: to,
        duration: 0.6,
        ease: "power2.out",
        onUpdate() {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.round(counter.val).toLocaleString()}${suffix}`;
          }
        },
      });
    })();
  }, [prefix, suffix]);

  useEffect(() => {
    if (prevRef.current !== target) {
      animate(prevRef.current, target);
      prevRef.current = target;
    }
  }, [target, animate]);

  return (
    <span ref={ref}>
      {prefix}{target.toLocaleString()}{suffix}
    </span>
  );
}

export function ROICalculator() {
  const [partsPerDay, setPartsPerDay] = useState(100);
  const [weldTimeMin, setWeldTimeMin] = useState(3);
  const [laborRate, setLaborRate] = useState(30);

  const cobotPrice = 85000;
  const speedMultiplier = 2.5;
  const manualLaborHrsPerYear = (partsPerDay * 250 * weldTimeMin) / 60;
  const cobotLaborHrsPerYear = manualLaborHrsPerYear / speedMultiplier;
  const annualSaving = Math.round((manualLaborHrsPerYear - cobotLaborHrsPerYear) * laborRate);
  const paybackMonths = annualSaving > 0 ? Math.round((cobotPrice / annualSaving) * 12) : 0;
  const fiveYearROI = annualSaving > 0 ? Math.round(((annualSaving * 5 - cobotPrice) / cobotPrice) * 100) : 0;

  return (
    <div className="bg-white border border-vtm-gray-border p-8">
      <h3 className="font-headline font-bold text-vtm-dark text-2xl mb-6">ROI Calculator</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Parts welded per day", value: partsPerDay, min: 10, max: 2000, step: 10, setter: setPartsPerDay },
          { label: "Avg. weld time per part (min)", value: weldTimeMin, min: 0.5, max: 30, step: 0.5, setter: setWeldTimeMin },
          { label: "Labor cost per hour ($)", value: laborRate, min: 15, max: 150, step: 1, setter: setLaborRate },
        ].map(({ label, value, min, max, step, setter }) => (
          <div key={label}>
            <label className="block text-xs font-semibold tracking-wider uppercase text-vtm-gray-mid mb-2">
              {label}
            </label>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={(e) => setter(Number(e.target.value))}
              className="w-full accent-vtm-red mb-2"
              aria-label={label}
            />
            <p className="font-headline font-bold text-vtm-dark text-xl">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-vtm-gray-border pt-6">
        <div className="text-center p-4 bg-vtm-gray-light">
          <p className="text-xs font-semibold tracking-wider uppercase text-vtm-gray-mid mb-1">
            Est. Annual Savings
          </p>
          <p className="font-headline font-bold text-vtm-dark text-2xl">
            <AnimatedValue target={annualSaving} prefix="$" />
          </p>
        </div>
        <div className="text-center p-4 bg-vtm-red">
          <p className="text-xs font-semibold tracking-wider uppercase text-white/80 mb-1">
            Payback Period
          </p>
          <p className="font-headline font-bold text-white text-2xl">
            <AnimatedValue target={paybackMonths} suffix=" mo" />
          </p>
        </div>
        <div className="text-center p-4 bg-vtm-dark col-span-2 md:col-span-1">
          <p className="text-xs font-semibold tracking-wider uppercase text-white/60 mb-1">
            5-Year ROI
          </p>
          <p className="font-headline font-bold text-white text-2xl">
            <AnimatedValue target={fiveYearROI} suffix="%" />
          </p>
        </div>
      </div>
      <p className="text-vtm-gray-mid text-xs mt-4">
        *Estimates based on 2.5× productivity increase vs manual welding, 250 working days/year,
        $85,000 base cobot system price. Actual results vary.
      </p>
    </div>
  );
}
