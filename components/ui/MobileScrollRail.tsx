"use client";

import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  itemCount: number;
  ariaLabel: string;
  variant?: "light" | "dark";
  indicator?: "dots" | "bar";
  className?: string;
  trackClassName?: string;
};

type ScrollState = {
  activeIndex: number;
  progress: number;
  canScrollLeft: boolean;
  canScrollRight: boolean;
};

const INITIAL_STATE: ScrollState = {
  activeIndex: 0,
  progress: 0,
  canScrollLeft: false,
  canScrollRight: false,
};

export function MobileScrollRail({
  children,
  itemCount,
  ariaLabel,
  variant = "light",
  indicator = "bar",
  className = "",
  trackClassName = "",
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState(INITIAL_STATE);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const items = Array.from(track.children) as HTMLElement[];
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const minSnap = items[0]?.offsetLeft ?? 0;
    const maxSnap = Math.min(maxScroll, items.at(-1)?.offsetLeft ?? maxScroll);
    const scrollRange = Math.max(0, maxSnap - minSnap);
    const progress = scrollRange > 0
      ? Math.min(1, Math.max(0, (track.scrollLeft - minSnap) / scrollRange))
      : 0;
    let activeIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    items.forEach((item, index) => {
      const distance = Math.abs(item.offsetLeft - track.scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        activeIndex = index;
      }
    });

    const nextState = {
      activeIndex,
      progress: Math.round(progress * 1000) / 1000,
      canScrollLeft: track.scrollLeft - minSnap > 2,
      canScrollRight: maxSnap - track.scrollLeft > 2,
    };

    setScrollState((current) =>
      current.activeIndex === nextState.activeIndex &&
      current.progress === nextState.progress &&
      current.canScrollLeft === nextState.canScrollLeft &&
      current.canScrollRight === nextState.canScrollRight
        ? current
        : nextState
    );
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [itemCount, updateScrollState]);

  const fadeFrom = variant === "dark" ? "from-vtm-dark" : "from-white";
  const inactiveDot = variant === "dark" ? "bg-white/25" : "bg-vtm-gray-border";
  const progressTrack = variant === "dark" ? "bg-white/15" : "bg-vtm-gray-border";
  const thumbWidth = Math.max(12, 100 / Math.max(1, itemCount));
  const thumbLeft = scrollState.progress * (100 - thumbWidth);

  return (
    <div className={className}>
      <div className="relative">
        <div
          ref={trackRef}
          role="region"
          aria-label={ariaLabel}
          tabIndex={0}
          className={`flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain no-scrollbar focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vtm-red ${trackClassName}`}
        >
          {children}
        </div>
        <span
          className={`pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r ${fadeFrom} to-transparent transition-opacity duration-200 ${scrollState.canScrollLeft ? "opacity-100" : "opacity-0"}`}
          aria-hidden="true"
        />
        <span
          className={`pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l ${fadeFrom} to-transparent transition-opacity duration-200 ${scrollState.canScrollRight ? "opacity-100" : "opacity-0"}`}
          aria-hidden="true"
        />
      </div>

      {itemCount > 1 && indicator === "dots" && (
        <div className="mt-4 flex justify-center gap-1.5" aria-hidden="true">
          {Array.from({ length: itemCount }, (_, index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                index === scrollState.activeIndex ? "w-4 bg-vtm-red" : `w-1.5 ${inactiveDot}`
              }`}
            />
          ))}
        </div>
      )}

      {itemCount > 1 && indicator === "bar" && (
        <div className={`relative mx-auto mt-5 h-0.5 w-24 overflow-hidden ${progressTrack}`} aria-hidden="true">
          <span
            className="absolute inset-y-0 bg-vtm-red transition-[left] duration-150"
            style={{ left: `${thumbLeft}%`, width: `${thumbWidth}%` }}
          />
        </div>
      )}
    </div>
  );
}
