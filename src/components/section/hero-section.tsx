import React from "react";
import { ChevronDown } from "lucide-react";
import ClockField from "@/components/ui/clock-field";
import AnimatedButton from "@/components/ui/animatedbutton";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-white px-6">
      <ClockField />

      {/* White spotlight that fades the clock lines out behind the name */}
      <div
        className="pointer-events-none absolute inset-0 bg-radial from-white from-35% to-transparent to-70%"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center gap-5 text-center">
        <p className="text-sm tracking-[0.3em] text-gray-600 uppercase md:text-base">
          Hello, I&apos;m
        </p>

        <div className="relative inline-block pb-3">
          <h1
            className="text-suit-teal text-5xl font-bold sm:text-6xl md:text-8xl lg:text-9xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Brian Ngo.
          </h1>
          <span className="bg-orange-highlight absolute bottom-0 left-0 h-[4px] w-full" />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold tracking-wide text-black md:text-2xl">
            ECE @ WVU
          </p>
          <p className="text-base text-gray-600 md:text-lg">
            Interested in FPGAs and ASIC design
          </p>
        </div>

        <a
          href="/documents/brian_ngo_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2"
        >
          <AnimatedButton variant="white">View Resume</AnimatedButton>
        </a>
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
