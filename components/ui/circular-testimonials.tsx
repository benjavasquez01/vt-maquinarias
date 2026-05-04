"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface CircularItem {
  src: string;
  name: string;
  designation: string;
  quote: string;
}

interface CircularTestimonialsProps {
  items: CircularItem[];
  autoplay?: boolean;
  /** Renders a CTA below the quote */
  cta?: React.ReactNode;
}

function calculateGap(width: number) {
  const minWidth = 300;
  const maxWidth = 900;
  const minGap = 40;
  const maxGap = 72;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return maxGap;
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export function CircularTestimonials({
  items,
  autoplay = false,
  cta,
}: CircularTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(600);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = useMemo(() => items.length, [items]);
  const active = useMemo(() => items[activeIndex], [activeIndex, items]);

  useEffect(() => {
    const el = imageContainerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setContainerWidth(el.offsetWidth));
    ro.observe(el);
    setContainerWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    autoplayRef.current = setInterval(() => {
      setActiveIndex((p) => (p + 1) % count);
    }, 5000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [autoplay, count]);

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const handleNext = useCallback(() => {
    stopAutoplay();
    setActiveIndex((p) => (p + 1) % count);
  }, [count]);

  const handlePrev = useCallback(() => {
    stopAutoplay();
    setActiveIndex((p) => (p - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handlePrev, handleNext]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const stickyUp = gap * 0.75;
    const isActive = index === activeIndex;
    const isLeft  = (activeIndex - 1 + count) % count === index;
    const isRight = (activeIndex + 1) % count === index;

    if (isActive) return {
      zIndex: 3, opacity: 1, pointerEvents: "auto",
      transform: "translateX(0) translateY(0) scale(1) rotateY(0deg)",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
    if (isLeft) return {
      zIndex: 2, opacity: 1, pointerEvents: "auto",
      transform: `translateX(-${gap}px) translateY(-${stickyUp}px) scale(0.82) rotateY(15deg)`,
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
    if (isRight) return {
      zIndex: 2, opacity: 1, pointerEvents: "auto",
      transform: `translateX(${gap}px) translateY(-${stickyUp}px) scale(0.82) rotateY(-15deg)`,
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
    return {
      zIndex: 1, opacity: 0, pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    exit:    { opacity: 0, y: -16 },
  };

  return (
    <div className="w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      {/* Image stack */}
      <div
        ref={imageContainerRef}
        className="relative w-full h-64 md:h-80 lg:h-96"
        style={{ perspective: "1000px" }}
      >
        {items.map((item, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={item.src}
            src={item.src}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-contain rounded-xl shadow-2xl bg-white"
            style={getImageStyle(i)}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={quoteVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <p className="text-vtm-red text-xs font-bold tracking-widest uppercase mb-1">
              {active.designation}
            </p>
            <h3 className="font-headline text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
              {active.name}
            </h3>
            <motion.p className="text-white/60 text-base leading-relaxed">
              {active.quote.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ filter: "blur(8px)", opacity: 0, y: 4 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * i }}
                  style={{ display: "inline-block" }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Arrows + CTA */}
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-vtm-red transition-colors duration-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-vtm-red transition-colors duration-200"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dot counter */}
          <div className="flex gap-1.5 ml-1">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => { stopAutoplay(); setActiveIndex(i); }}
                className={`block rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-4 h-1.5 bg-vtm-red" : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Go to item ${i + 1}`}
              />
            ))}
          </div>

          {cta && <div className="ml-auto">{cta}</div>}
        </div>
      </div>
    </div>
  );
}
