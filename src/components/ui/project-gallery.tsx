"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";

export type GalleryImage = {
  src: StaticImageData;
  alt: string;
  caption: string;
};

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [expanded]);

  if (images.length === 0) return null;

  const current = images[index];
  const showArrows = images.length > 1;
  const goPrev = () => setIndex((index - 1 + images.length) % images.length);
  const goNext = () => setIndex((index + 1) % images.length);

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
        Diagrams & Pictures
      </h2>
      <div className="overflow-hidden rounded border border-gray-200 lg:-mx-16 xl:-mx-36">
        <div className="relative flex aspect-[4/3] max-h-[75vh] w-full items-center justify-center bg-gray-50 p-2">
          <Image
            src={current.src}
            alt={current.alt}
            quality={100}
            sizes="(max-width: 1280px) 100vw, 1184px"
            className="h-auto max-h-full w-auto max-w-full cursor-zoom-in object-contain"
            onClick={() => setExpanded(true)}
            title="Click to enlarge"
          />
          {showArrows && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full border border-gray-200 bg-white/90 p-2 text-gray-600 shadow-sm transition hover:bg-white hover:text-black"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full border border-gray-200 bg-white/90 p-2 text-gray-600 shadow-sm transition hover:bg-white hover:text-black"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-gray-200 px-4 py-3">
          <p className="text-sm text-gray-600">{current.caption}</p>
          {showArrows && (
            <span className="shrink-0 text-sm text-gray-400">
              {index + 1} / {images.length}
            </span>
          )}
        </div>
      </div>
      {showArrows && (
        <div className="mt-3 flex justify-center gap-2">
          {images.map((image, i) => (
            <button
              key={image.src.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index
                  ? "bg-orange-highlight"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
      {expanded && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-50 flex cursor-zoom-out flex-col items-center justify-center gap-3 bg-black/85 p-4 sm:p-8"
          onClick={() => setExpanded(false)}
        >
          <Image
            src={current.src}
            alt={current.alt}
            quality={100}
            sizes="100vw"
            className="h-auto max-h-[85vh] w-auto max-w-full object-contain"
          />
          <p className="text-sm text-white/80">
            {current.caption} (click anywhere or press Esc to close)
          </p>
        </div>
      )}
    </section>
  );
}
