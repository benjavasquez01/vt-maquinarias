"use client";

import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
  className?: string;
};

export function ImageGallery({ images, alt, className = "" }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Main image */}
      <div className="bg-vtm-gray-light overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[active]}
          alt={alt}
          className="w-full h-auto block"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 w-16 h-16 border-2 overflow-hidden transition-colors ${
                i === active
                  ? "border-vtm-red"
                  : "border-vtm-gray-border hover:border-vtm-dark"
              }`}
              aria-label={`Image ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
