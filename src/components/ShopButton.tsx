"use client";

import { motion } from "framer-motion";

export default function ShopButton() {
    return (
        <motion.a
            href="/shop"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="absolute top-[85px] md:top-[124px] right-4 md:right-5 lg:right-6 z-30 bg-primary-foreground text-primary rounded-full px-6 py-3 md:px-8 md:py-3.5 font-orbitron tracking-[0.15em] uppercase text-xs md:text-sm font-semibold cursor-pointer shadow-lg inline-block text-center no-underline"
            role="link"
            aria-label="Shop now — browse all robots"
        >
            Shop Now
        </motion.a>
    );
}
