"use client";
import React from "react";
import { useReducedMotion } from "framer-motion";
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

const INPUTS = [
  { node: "a", label: "A", bit: 2 },
  { node: "b", label: "B", bit: 1 },
  { node: "cin", label: "Cin", bit: 0 },
] as const;

// Signals settle stage by stage, so a change visibly ripples toward Cout.
const settle = (depth: number): React.CSSProperties => ({
  transition: "stroke 200ms ease, fill 200ms ease",
  transitionDelay: `${depth * STAGE_DELAY_MS}ms`,
});

// Counts through the truth table on its own until the visitor flips an
// input, then hands control over. Never auto-plays under reduced motion.
const FullAdder = () => {
  const [step, setStep] = React.useState(0);
  const [manual, setManual] = React.useState(false);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (manual || reduceMotion) return;
    const id = setInterval(
      () => setStep((s) => (s + 1) % COMBO_COUNT),
      TICK_MS
    );
    return () => clearInterval(id);
  }, [manual, reduceMotion]);

  const toggle = (bit: number) => {
    setManual(true);
    setStep((s) => s ^ (1 << bit));
  };

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
              level[p.node] ? "fill-orange-highlight" : "fill-gray-500"
            }
            style={settle(p.depth)}
          >
            {p.text}
          </text>
        ))}
      </svg>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        {INPUTS.map((input) => {
          const on = level[input.node] === 1;
          return (
            <button
              key={input.node}
              type="button"
              onClick={() => toggle(input.bit)}
              aria-pressed={on}
              aria-label={`Toggle input ${input.label}, currently ${level[input.node]}`}
              className={`rounded-full border-2 px-4 py-1.5 font-mono text-sm font-semibold transition-colors duration-200 ${
                on
                  ? "border-orange-highlight bg-orange-highlight text-white"
                  : "hover:border-suit-teal border-gray-300 text-gray-600"
              }`}
            >
              {input.label}={level[input.node]}
            </button>
          );
        })}
        <span className="font-mono text-sm text-gray-500">-&gt;</span>
        <span className="font-mono text-sm text-gray-600">
          S={level.s} Cout={level.cout}
        </span>
      </div>
      <p className="mt-2 text-center text-sm text-gray-500">
        {manual || reduceMotion
          ? "Click the inputs to try other combinations."
          : "Cycling through the truth table. Click an input to take over."}
      </p>
    </div>
  );
};

export default FullAdder;
