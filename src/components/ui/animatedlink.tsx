import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedLinkProps {
    href?: string;
    children: React.ReactNode;
    duration?: number;
    color?: string;
    className?: string;
}

const underlineVariants = (color: string | undefined, duration: number | undefined): Variants => ({
    rest: { width: 0 },
    hover: { width: "100%", transition: { duration: duration ?? 0.2 } },
});

export default function AnimatedLink({
    href = "#",
    children,
    duration = 0.2,
    color = "black",
    className = "",
}: AnimatedLinkProps) {
    const variants = underlineVariants("orange", duration);

    return (
        <motion.a
            href={href}
            className={className}
            style={{ position: "relative", textDecoration: "none", color: "black" }}
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {children}
            <motion.span
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: "2px",
                    backgroundColor: "orange",
                    display: "block",
                }}
                variants={variants}
            />
        </motion.a>
    );
}
