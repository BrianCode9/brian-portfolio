"use client";

import Link from "next/link";
import AnimatedButton from "./animatedbutton";

interface WorkInProgressProps {
  backHref?: string;
  backLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function WorkInProgress({
  backHref = "/projects",
  backLabel = "Back to Projects",
  secondaryHref,
  secondaryLabel,
}: WorkInProgressProps) {
  return (
    <main className="bg-suit-teal flex min-h-screen flex-col items-center justify-center gap-10 px-6 text-center text-white">
      <div className="max-w-lg space-y-6">
        <div>
          <h1 className="mb-2 text-5xl font-bold md:text-7xl">
            Work in Progress
          </h1>
          <div className="bg-orange-highlight mx-auto h-1 w-16" />
        </div>
        <p className="text-lg text-white/80 md:text-xl">
          This page is still being built. Check back soon.
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link href={backHref}>
          <AnimatedButton variant="teal">{backLabel}</AnimatedButton>
        </Link>
        {secondaryHref && secondaryLabel && (
          <Link href={secondaryHref}>
            <AnimatedButton variant="teal">{secondaryLabel}</AnimatedButton>
          </Link>
        )}
      </div>
    </main>
  );
}
