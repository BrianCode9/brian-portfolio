import React from "react";
import {
  CLOCK_VIEW_H,
  CLOCK_VIEW_W,
  buildChannel,
  clockChannels,
} from "@/data/hero-clock";

const ClockField = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex flex-col justify-between overflow-hidden"
      aria-hidden="true"
    >
      {clockChannels.map((c) => {
        const geo = buildChannel(c);
        return (
          <svg
            key={c.id}
            viewBox={`0 0 ${CLOCK_VIEW_W} ${CLOCK_VIEW_H}`}
            fill="none"
            className="w-full shrink-0"
            style={{ opacity: c.opacity }}
          >
            <g
              style={{
                ["--clock-shift" as string]: `${-geo.shift}px`,
                animation: `clock-scroll ${c.scrollMs}ms linear ${geo.scrollDelayMs}ms infinite`,
              }}
            >
              <path
                d={geo.d}
                strokeWidth={3}
                className="stroke-orange-highlight"
                style={{
                  ["--clock-length" as string]: geo.length,
                  animation: `clock-draw ${c.drawMs}ms linear ${c.delayMs}ms forwards`,
                }}
              />
            </g>
          </svg>
        );
      })}
    </div>
  );
};

export default ClockField;
