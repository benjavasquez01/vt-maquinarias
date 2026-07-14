"use client";

import { useState, useEffect, useCallback } from "react";

type Props = {
  images: string[];
  alt: string;
  className?: string;
  activeIndex?: number;
  onActiveChange?: (i: number) => void;
  hideThumbnails?: boolean;
};

function GalleryArrowButton({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Previous image" : "Next image"}
      className="flex h-9 w-9 flex-shrink-0 items-center justify-center bg-vtm-red text-white transition-colors hover:bg-[#a81718]"
    >
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {dir === "left" ? <path d="M9 2L4 7l5 5" /> : <path d="M5 2l5 5-5 5" />}
      </svg>
    </button>
  );
}

export function ImageGallery({ images, alt, className = "", activeIndex, onActiveChange, hideThumbnails = false }: Props) {
  const [internalActive, setInternalActive] = useState(0);
  const active = activeIndex !== undefined ? activeIndex : internalActive;
  const [fullscreen, setFullscreen] = useState(false);

  const goTo = useCallback((i: number) => {
    setInternalActive(i);
    onActiveChange?.(i);
  }, [onActiveChange]);

  const prev = useCallback(() => goTo((active - 1 + images.length) % images.length), [active, images.length, goTo]);
  const next = useCallback(() => goTo((active + 1) % images.length), [active, images.length, goTo]);

  // Keyboard navigation in fullscreen
  useEffect(() => {
    if (!fullscreen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setFullscreen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [fullscreen, prev, next]);

  // Lock body scroll when fullscreen
  useEffect(() => {
    document.body.style.overflow = fullscreen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [fullscreen]);

  return (
    <>
      <div className={`flex w-full max-w-full min-w-0 flex-col gap-3 overflow-hidden ${className}`}>
        {/* Main image with arrows overlay */}
        <div className="group relative w-full max-w-full overflow-hidden bg-vtm-gray-light">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[active]}
            alt={alt}
            className="w-full h-auto block"
          />

          {/* Arrows — visible on hover */}
          {images.length > 1 && (
            <>
              <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <GalleryArrowButton dir="left" onClick={prev} />
              </div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <GalleryArrowButton dir="right" onClick={next} />
              </div>
            </>
          )}

          {/* Fullscreen button */}
          <button
            onClick={() => setFullscreen(true)}
            aria-label="View fullscreen"
            className="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center bg-black/50 text-white hover:bg-black/75 transition-colors opacity-0 group-hover:opacity-100"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <path d="M1 5V1h4M9 1h4v4M13 9v4H9M5 13H1V9" />
            </svg>
          </button>

          {/* Counter */}
          {images.length > 1 && (
            <span className="absolute bottom-2 left-2 text-[10px] text-white bg-black/50 px-2 py-0.5 font-medium">
              {active + 1} / {images.length}
            </span>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && !hideThumbnails && (
          <div className="flex w-full max-w-full min-w-0 gap-2 overflow-x-auto overscroll-x-contain pb-1 pr-1">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => goTo(i)}
                className={`flex-shrink-0 w-16 h-16 border-2 overflow-hidden transition-colors ${
                  i === active
                    ? "border-vtm-red"
                    : "border-vtm-gray-border hover:border-vtm-dark"
                }`}
                aria-label={`Image ${i + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen overlay */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-white flex items-center justify-center"
          onClick={() => setFullscreen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[active]}
            alt={alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Close */}
          <button
            onClick={() => setFullscreen(false)}
            aria-label="Close fullscreen"
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-black/10 text-vtm-dark hover:bg-black/20 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>

          {/* Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/10 text-vtm-dark hover:bg-vtm-red hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 2L4 7l5 5" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/10 text-vtm-dark hover:bg-vtm-red hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 2l5 5-5 5" />
                </svg>
              </button>
            </>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-vtm-gray-mid font-medium">
              {active + 1} / {images.length}
            </span>
          )}
        </div>
      )}
    </>
  );
}
