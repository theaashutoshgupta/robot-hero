"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
    isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
                    role="status"
                    aria-label="Loading page content"
                    aria-live="polite"
                >
                    {/* Skeletal layout mimicking the hero */}
                    <div className="w-full h-full relative p-4 md:p-6 lg:p-8" aria-hidden="true">
                        {/* Top nav skeleton */}
                        <div className="flex items-center justify-between">
                            <div className="w-20 h-11 md:h-14 rounded-full bg-white/5 animate-pulse" />
                            <div className="hidden md:flex items-center gap-2">
                                <div className="w-14 h-14 rounded-full bg-white/5 animate-pulse" />
                                <div className="w-14 h-14 rounded-full bg-white/5 animate-pulse" />
                                <div className="w-32 h-14 rounded-full bg-white/5 animate-pulse" />
                            </div>
                            <div className="md:hidden w-11 h-11 rounded-full bg-white/5 animate-pulse" />
                        </div>

                        {/* Center area — robot placeholder */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
                            <div className="w-24 h-24 rounded-full bg-white/5 animate-pulse" />
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse" />
                                <div className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: "0.15s" }} />
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse" style={{ animationDelay: "0.3s" }} />
                            </div>
                            <p className="font-orbitron text-xs tracking-[0.3em] uppercase text-white/30 animate-pulse">
                                Loading
                            </p>
                        </div>

                        {/* Bottom-left headline skeleton */}
                        <div className="absolute bottom-[6%] left-[3%] space-y-2">
                            <div className="w-48 md:w-64 h-8 md:h-10 rounded bg-white/5 animate-pulse" />
                            <div className="w-56 md:w-72 h-8 md:h-10 rounded bg-white/5 animate-pulse" />
                            <div className="w-52 md:w-68 h-8 md:h-10 rounded bg-white/5 animate-pulse" />
                        </div>

                        {/* Bottom-right card skeleton */}
                        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                            <div className="w-64 md:w-72 h-24 md:h-28 rounded-2xl bg-white/5 animate-pulse" />
                        </div>
                    </div>

                    {/* Screen-reader-only loading text */}
                    <span className="sr-only">Loading, please wait...</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
