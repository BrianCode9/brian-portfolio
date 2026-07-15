"use client";

import React, { useState } from "react";

const ORANGE = "#FF5733";
const TEAL = "#193e52";
const WHITE = "#ffffff";

// variant='teal'  → on dark teal bg:  white border/text, orange fill on hover
// variant='white' → on white bg:      teal border/text,  teal fill on hover
// variant='grey'  → on grey bg:       orange border/text, teal fill on hover
const STYLES = {
  teal: { border: WHITE, text: WHITE, fill: ORANGE },
  white: { border: TEAL, text: TEAL, fill: TEAL },
  grey: { border: ORANGE, text: ORANGE, fill: TEAL },
};

export interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: "teal" | "white" | "grey";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function AnimatedButton({
  children,
  variant = "white",
  onClick,
  className = "",
  type = "button",
}: AnimatedButtonProps) {
  const [hovered, setHovered] = useState(false);
  const { border, text, fill } = STYLES[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        padding: "14px 36px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        fontWeight: 700,
        fontSize: "13px",
        color: hovered ? WHITE : text,
        background: hovered ? fill : "transparent",
        border: `2px solid ${hovered ? fill : border}`,
        borderRadius: "30px",
        cursor: "pointer",
        outline: "none",
        transition: "color 0.2s ease, background 0.2s ease, border 0.2s ease",
      }}
    >
      {children}
    </button>
  );
}
