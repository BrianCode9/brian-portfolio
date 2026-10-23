// Channel definitions for the hero's stacked clock signals.
// Each channel draws itself on from the left, then hands off to a slow
// infinite scroll. Vary period and timing so the stack does not read as
// one wave copied seven times.

export interface ClockChannel {
  id: string;
  /** viewBox units per cycle. Bigger reads as a slower clock. */
  period: number;
  /** Time for the sweep to draw the whole path, including the offscreen half. */
  drawMs: number;
  /** Time for one scroll loop once the sweep hands off. */
  scrollMs: number;
  /** Staggers the onset down the stack. */
  delayMs: number;
  opacity: number;
}

export const CLOCK_VIEW_W = 1200;
export const CLOCK_VIEW_H = 100;
const HIGH = 22;
const LOW = 78;
/** Minimum scroll distance, rounded up to a whole number of periods. */
const MIN_SHIFT = 600;

export const clockChannels: ClockChannel[] = [
  {
    id: "c1",
    period: 200,
    drawMs: 2800,
    scrollMs: 14000,
    delayMs: 0,
    opacity: 0.26,
  },
  {
    id: "c2",
    period: 120,
    drawMs: 2400,
    scrollMs: 11000,
    delayMs: 160,
    opacity: 0.2,
  },
  {
    id: "c3",
    period: 300,
    drawMs: 3200,
    scrollMs: 18000,
    delayMs: 320,
    opacity: 0.3,
  },
  {
    id: "c4",
    period: 100,
    drawMs: 2200,
    scrollMs: 9500,
    delayMs: 480,
    opacity: 0.16,
  },
  {
    id: "c5",
    period: 240,
    drawMs: 3000,
    scrollMs: 16000,
    delayMs: 640,
    opacity: 0.24,
  },
  {
    id: "c6",
    period: 150,
    drawMs: 2600,
    scrollMs: 12000,
    delayMs: 800,
    opacity: 0.19,
  },
  {
    id: "c7",
    period: 400,
    drawMs: 3400,
    scrollMs: 20000,
    delayMs: 960,
    opacity: 0.28,
  },
];

export interface ChannelGeometry {
  d: string;
  /** Path length in viewBox units, for the stroke-dashoffset reveal. */
  length: number;
  /** Scroll distance, always a whole number of periods so the loop is seamless. */
  shift: number;
  /** When the sweep clears the right edge and the scroll should take over. */
  scrollDelayMs: number;
}

export function buildChannel(c: ClockChannel): ChannelGeometry {
  const shift = Math.ceil(MIN_SHIFT / c.period) * c.period;
  // Enough cycles that the scrolled tail never exposes an undrawn edge.
  const cycles = Math.ceil((CLOCK_VIEW_W + shift) / c.period) + 1;
  const span = cycles * c.period;

  const d =
    `M 0 ${LOW} ` +
    Array.from({ length: cycles }, (_, i) => {
      const x = i * c.period;
      const mid = x + c.period / 2;
      return `L ${x} ${HIGH} L ${mid} ${HIGH} L ${mid} ${LOW} L ${x + c.period} ${LOW}`;
    }).join(" ");

  return {
    d,
    length: cycles * (2 * (LOW - HIGH) + c.period),
    shift,
    // The sweep is linear, so the fraction of the path onscreen is the
    // fraction of the draw time before it leaves the viewBox.
    scrollDelayMs: c.delayMs + c.drawMs * (CLOCK_VIEW_W / span),
  };
}
