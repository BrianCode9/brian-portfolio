'use client'

import Link from 'next/link';
import AnimatedButton from './animatedbutton';

interface WorkInProgressProps {
  backHref?: string;
  backLabel?: string;
}

export default function WorkInProgress({
  backHref = '/projects',
  backLabel = 'Back to Projects',
}: WorkInProgressProps) {
  return (
    <main className="min-h-screen bg-suit-teal flex flex-col items-center justify-center text-white gap-10 px-6 text-center">
      <div className="space-y-6 max-w-lg">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            Work in Progress
          </h1>
          <div className="h-1 w-16 bg-orange-highlight mx-auto" />
        </div>
        <p className="text-lg md:text-xl text-white/80">
          This page is still being built. Check back soon.
        </p>
      </div>
      <Link href={backHref}>
        <AnimatedButton variant="teal">{backLabel}</AnimatedButton>
      </Link>
    </main>
  );
}
