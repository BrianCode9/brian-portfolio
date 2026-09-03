// Channel definitions for the hero's stacked clock signals.
// Each channel sweeps on once from the left and then holds. Vary period and
// timing so the stack does not read as one wave copied seven times.

export interface ClockChannel {
  id: string;
  /** viewBox units per cycle. Bigger reads as a slower clock. */
  period: number;
  /** Time for the sweep to cross the full width. */
  drawMs: number;
  /** Staggers the onset down the stack, so the sweeps cascade. */
  delayMs: number;
  opacity: number;
}

export const CLOCK_VIEW_W = 1200;
export const CLOCK_VIEW_H = 100;
const HIGH = 22;
const LOW = 78;

// Every period below divides CLOCK_VIEW_W evenly, so each channel finishes
// on a clean edge at the right side rather than mid-cycle.
export const clockChannels: ClockChannel[] = [
  { id: "c1", period: 200, drawMs: 1700, delayMs: 0, opacity: 0.26 },
  { id: "c2", period: 120, drawMs: 1500, delayMs: 160, opacity: 0.2 },
  { id: "c3", period: 300, drawMs: 1850, delayMs: 320, opacity: 0.3 },
  { id: "c4", period: 100, drawMs: 1400, delayMs: 480, opacity: 0.16 },
  { id: "c5", period: 240, drawMs: 1650, delayMs: 640, opacity: 0.24 },
  { id: "c6", period: 150, drawMs: 1600, delayMs: 800, opacity: 0.19 },
  { id: "c7", period: 400, drawMs: 1750, delayMs: 960, opacity: 0.28 },
];

export interface ChannelGeometry {
  d: string;
  /** Path length in viewBox units, for the stroke-dashoffset reveal. */
  length: number;
}

export function buildChannel(c: ClockChannel): ChannelGeometry {
  const cycles = Math.ceil(CLOCK_VIEW_W / c.period);

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
  };
}
