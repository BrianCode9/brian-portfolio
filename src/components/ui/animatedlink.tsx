import React from "react";
import { motion, Variants } from "framer-motion";

// Matches --color-orange-highlight and ORANGE in animatedbutton.tsx
const ORANGE = "#FF5733";

interface AnimatedLinkProps {
  href?: string;
  children: React.ReactNode;
  duration?: number;
  color?: string;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const underlineVariants = (
  color: string | undefined,
  duration: number | undefined
): Variants => ({
  rest: { width: 0 },
  hover: { width: "100%", transition: { duration: duration ?? 0.2 } },
});

export default function AnimatedLink({
  href = "#",
  children,
  duration = 0.2,
  className = "",
  target,
  rel,
  onClick,
}: AnimatedLinkProps) {
  const variants = underlineVariants("orange", duration);

  return (
    <motion.a
      href={href}
      className={className}
      style={{
        position: "relative",
        textDecoration: "none",
        color: "black",
        // Keeps the underline the width of the text, not the container, when
        // the link is a stretched item in a column flex (mobile nav dropdown)
        display: "inline-block",
        width: "fit-content",
      }}
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={onClick}
      {...(target && { target })}
      {...(rel && { rel })}
    >
      {children}
      <motion.span
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          height: "2px",
          backgroundColor: ORANGE,
          display: "block",
        }}
        variants={variants}
      />
    </motion.a>
  );
}
