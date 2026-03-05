"use client";

import { motion } from "framer-motion";

interface ProductPinsProps {
    splineLoaded: boolean;
}

export default function ProductPins({ splineLoaded }: ProductPinsProps) {
    return (
        <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)", x: -20 }}
            animate={
                splineLoaded
                    ? { opacity: 1, clipPath: "inset(0 0% 0 0)", x: 0 }
                    : { opacity: 0, clipPath: "inset(0 100% 0 0)", x: -20 }
            }
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex absolute right-[6%] md:right-[25%] top-[28%] md:top-[38%] z-20 items-center gap-0"
            role="status"
            aria-label="Featured product: Kinobot, $1599"
        >
            {/* Dot */}
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full border border-primary-foreground/70 flex-shrink-0" aria-hidden="true" />
            {/* Line */}
            <div className="w-8 md:w-12 h-[1px] bg-primary-foreground/40" aria-hidden="true" />
            {/* Label on right */}
            <div className="pl-2 md:pl-3 whitespace-nowrap">
                <p className="font-orbitron text-[10px] md:text-xs tracking-wider text-primary-foreground/90 uppercase">
                    Kinobot
                </p>
                <p className="font-orbitron text-xs md:text-sm font-semibold text-primary-foreground mt-0.5">
                    $1599
                </p>
            </div>
        </motion.div>
    );
}
