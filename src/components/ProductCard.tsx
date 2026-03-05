"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="hidden md:block absolute bottom-4 right-6 lg:bottom-5 lg:right-8 z-20"
        >
            {/* Navigation arrows above the card — min 44px tap targets */}
            <div className="flex items-center justify-end gap-2 mb-2" role="group" aria-label="Product navigation">
                <button
                    className="w-11 h-11 rounded-full bg-primary border border-white/15 hover:border-white/30 flex items-center justify-center cursor-pointer transition-colors"
                    aria-label="Previous product"
                >
                    <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button
                    className="w-11 h-11 rounded-full bg-primary-foreground flex items-center justify-center cursor-pointer"
                    aria-label="Next product"
                >
                    <svg className="w-4 h-4" fill="none" stroke="black" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Product card — full bleed background image */}
            <article className="relative overflow-hidden rounded-2xl w-[280px] md:w-[320px] h-[160px] md:h-[180px] border border-white/10 bg-black/60 backdrop-blur-sm" aria-label="Novabot product card">
                {/* Image with descriptive alt and explicit dimensions to prevent CLS */}
                <Image
                    src="/secondary.png"
                    alt="Novabot humanoid robot in dark jacket, a compact personal robotics assistant by BOTLABS"
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-contain object-[left_center]"
                    loading="lazy"
                    decoding="async"
                />

                {/* Dark overlay for WCAG text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/80" aria-hidden="true" />

                {/* Text overlay */}
                <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center pr-6 md:pr-8">
                    <p className="font-orbitron text-[10px] tracking-[0.15em] uppercase text-primary-foreground/90">
                        Novabot
                    </p>
                    <p className="font-orbitron text-xl md:text-2xl font-bold text-primary-foreground mt-1">
                        $600
                    </p>
                </div>
            </article>
        </motion.div>
    );
}
