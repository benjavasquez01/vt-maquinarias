"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Props = {
  frames: string[];
  alt: string;
  className?: string;
};

export function SpinViewer360({ frames, alt, className = "" }: Props) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const startXRef = useRef(0);
  const lastIndexRef = useRef(0);
  const imgRef = useRef<HTMLImageElement>(null);

  const DRAG_SENSITIVITY = 6; // pixels per frame advance

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    frames.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frames.length) setLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === frames.length) setLoaded(true);
      };
    });
  }, [frames]);

  // Swap src when frame changes
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.src = frames[frameIndex];
    }
  }, [frameIndex, frames]);

  const advanceFrame = useCallback(
    (clientX: number) => {
      const delta = clientX - startXRef.current;
      const frameDelta = Math.round(delta / DRAG_SENSITIVITY);
      const newIndex =
        ((lastIndexRef.current - frameDelta) % frames.length + frames.length) %
        frames.length;
      setFrameIndex(newIndex);
    },
    [frames.length]
  );

  // Mouse
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setHasInteracted(true);
    startXRef.current = e.clientX;
    lastIndexRef.current = frameIndex;
  };

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      advanceFrame(e.clientX);
    },
    [isDragging, advanceFrame]
  );

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  // Touch
  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setHasInteracted(true);
    startXRef.current = e.touches[0].clientX;
    lastIndexRef.current = frameIndex;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    advanceFrame(e.touches[0].clientX);
  };

  const onTouchEnd = () => setIsDragging(false);

  // Auto-spin hint: play a quarter rotation slowly, then stop
  useEffect(() => {
    if (hasInteracted || !loaded) return;
    const quarterFrames = Math.ceil(frames.length / 4);
    let count = 0;
    const id = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
      count++;
      if (count >= quarterFrames) clearInterval(id);
    }, 60);
    return () => clearInterval(id);
  }, [loaded, hasInteracted, frames.length]);

  return (
    <div
      className={`relative select-none overflow-hidden bg-vtm-gray-light ${isDragging ? "cursor-grabbing" : "cursor-grab"} ${className}`}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Main image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={frames[0]}
        alt={alt}
        draggable={false}
        className="w-full h-full object-contain"
      />

      {/* Loading shimmer */}
      {!loaded && (
        <div className="absolute inset-0 bg-vtm-gray-light animate-pulse" />
      )}

      {/* Drag hint */}
      {loaded && !hasInteracted && (
        <div className="absolute inset-0 flex items-end justify-center pb-5 pointer-events-none">
          <div className="flex items-center gap-2 bg-vtm-dark/70 backdrop-blur-sm text-white text-xs px-3 py-1.5">
            {/* Rotate icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
            Drag to rotate
          </div>
        </div>
      )}

      {/* Frame progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
        <div
          className="h-full bg-vtm-red transition-none"
          style={{ width: `${((frameIndex + 1) / frames.length) * 100}%` }}
        />
      </div>

      {/* 360° badge */}
      <div className="absolute top-3 right-3 text-[10px] font-bold tracking-widest text-white/70 bg-vtm-dark/50 backdrop-blur-sm px-2 py-1">
        360°
      </div>
    </div>
  );
}
