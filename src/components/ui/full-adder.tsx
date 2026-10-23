"use client";
import React from "react";
import {
  COMBO_COUNT,
  STAGE_DELAY_MS,
  VIEW_BOX,
  computeLevels,
  gatePaths,
  gates,
  junctions,
  pinLabels,
  wires,
} from "@/data/full-adder";

const TICK_MS = 1200;

// Signals settle stage by stage, so a change visibly ripples toward Cout.
const settle = (depth: number): React.CSSProperties => ({
  transition: "stroke 200ms ease, fill 200ms ease",
  transitionDelay: `${depth * STAGE_DELAY_MS}ms`,
});

const FullAdder = () => {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(
      () => setStep((s) => (s + 1) % COMBO_COUNT),
      TICK_MS
    );
    return () => clearInterval(id);
  }, []);

  const level = computeLevels(step);
  const hot = (n: keyof typeof level) =>
    level[n] ? "stroke-orange-highlight" : "stroke-gray-300";

  return (
    <div className="w-full">
      <svg
        viewBox={VIEW_BOX}
        fill="none"
        className="w-full"
        role="img"
        aria-label={`Full adder with A ${level.a}, B ${level.b}, Cin ${level.cin}, giving sum ${level.s} and carry out ${level.cout}`}
      >
        {wires.map((w) => (
          <path
            key={w.id}
            d={w.d}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={hot(w.node)}
            style={settle(w.depth)}
          />
        ))}

        {junctions.map((j) => (
          <circle
            key={`${j.node}-${j.cx}`}
            cx={j.cx}
            cy={j.cy}
            r={4}
            className={
              level[j.node] ? "fill-orange-highlight" : "fill-gray-300"
            }
            style={settle(j.depth)}
          />
        ))}

        {gates.map((g) => (
          <g key={g.id} transform={`translate(${g.x},${g.y})`}>
            {gatePaths[g.kind].map((d, i) => (
              <path
                key={i}
                d={d}
                strokeWidth={2.5}
                strokeLinecap="round"
                className="stroke-suit-teal"
                fill={i === 0 ? "white" : "none"}
              />
            ))}
          </g>
        ))}

        {pinLabels.map((p) => (
          <text
            key={p.node}
            x={p.x}
            y={p.y}
            textAnchor={p.anchor}
            fontSize={16}
            fontWeight={700}
            className={
              level[p.node] ? "fill-orange-highlight" : "fill-gray-400"
            }
            style={settle(p.depth)}
          >
            {p.text}
          </text>
        ))}
      </svg>

      <div className="mt-3 flex justify-center gap-4 font-mono text-xs tracking-wider text-gray-500 sm:gap-6 sm:text-sm">
        <span>
          A={level.a} B={level.b} Cin={level.cin}
        </span>
        <span className="text-gray-400">-&gt;</span>
        <span>
          S={level.s} Cout={level.cout}
        </span>
      </div>
    </div>
  );
};

export default FullAdder;
