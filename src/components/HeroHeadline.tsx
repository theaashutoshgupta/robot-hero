"use client";

import { motion } from "framer-motion";

const lines = ["Future.", "Robotics.", "Redefined."];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.6,
        },
    },
};

const lineVariants = {
    hidden: { opacity: 0, y: 30, skewY: 2 },
    visible: {
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
};

export default function HeroHeadline() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="absolute bottom-[6%] left-[3%] z-20"
        >
            {/* Semantic h1 with clamp() responsive typography and sr-only full text */}
            <h1 id="hero-heading" className="sr-only">
                Future. Robotics. Redefined.
            </h1>

            {lines.map((line, i) => (
                <motion.div key={i} variants={lineVariants} className="overflow-hidden">
                    <span
                        aria-hidden="true"
                        className="block font-orbitron uppercase text-primary-foreground font-bold leading-[0.95] tracking-tight"
                        style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
                    >
                        {line}
                    </span>
                </motion.div>
            ))}

        </motion.div>
    );
}
