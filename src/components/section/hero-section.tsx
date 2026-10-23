import React from "react";
import { ChevronDown } from "lucide-react";
import ClockField from "@/components/ui/clock-field";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white px-6">
      <ClockField />

      <div className="relative z-10 flex flex-col items-center gap-5 text-center">
        <p className="text-sm tracking-[0.3em] text-gray-600 uppercase md:text-base">
          Hello, I&apos;m
        </p>

        <div className="relative inline-block pb-3">
          <span
            className="text-suit-teal text-6xl font-bold md:text-8xl lg:text-9xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Brian Ngo.
          </span>
          <span className="bg-orange-highlight absolute bottom-0 left-0 h-[4px] w-full" />
        </div>

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
