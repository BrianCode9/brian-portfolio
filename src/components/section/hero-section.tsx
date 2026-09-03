import React from "react";
import { ChevronDown } from "lucide-react";

// One period of the clock: rise, hold high, fall, hold low.
const PERIOD = 120;
const HIGH = 8;
const LOW = 32;
const CYCLES = 10;

const clockPath =
  `M 0 ${LOW} ` +
  Array.from({ length: CYCLES }, (_, i) => {
    const x = i * PERIOD;
    const mid = x + PERIOD / 2;
    return `L ${x} ${HIGH} L ${mid} ${HIGH} L ${mid} ${LOW} L ${x + PERIOD} ${LOW}`;
  }).join(" ");

// Total drawn length, in viewBox units, for the left-to-right stroke reveal.
const clockLength = CYCLES * (2 * (LOW - HIGH) + PERIOD);

const ClockWave = () => (
  <svg
    className="w-full"
    viewBox={`0 0 ${CYCLES * PERIOD} 40`}
    fill="none"
    aria-hidden="true"
  >
    <path
      d={clockPath}
      strokeWidth={4}
      style={{ "--clock-length": clockLength } as React.CSSProperties}
      className="stroke-orange-highlight animate-clock-draw motion-reduce:animate-none"
    />
  </svg>
);

const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-white px-6">
      <div className="flex w-full max-w-4xl flex-col items-center gap-6 text-center">
        <p className="text-sm tracking-[0.3em] text-gray-600 uppercase md:text-base">
          Hello, I&apos;m
        </p>

        <ClockWave />

        <span
          className="text-suit-teal text-6xl font-bold md:text-8xl lg:text-9xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Brian Ngo.
        </span>

        <ClockWave />

        <p className="text-lg tracking-wide text-gray-600 md:text-xl">
          ECE Student at WVU
        </p>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-black"
      >
        <ChevronDown size={36} />
      </a>
    </div>
  );
};

export default HeroSection;
