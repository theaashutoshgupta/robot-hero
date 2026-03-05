"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 right-0 z-30 p-4 md:p-5 lg:p-6" aria-label="Main navigation">
            <div className="flex items-center justify-between">
                {/* Logo — top left */}
                <motion.a
                    href="/"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="block h-20 md:h-28 -mt-2 cursor-pointer"
                    aria-label="BOTLABS — Go to homepage"
                >
                    <Image
                        src="/logo.png"
                        alt="BOTLABS company logo"
                        width={240}
                        height={48}
                        className="h-full w-auto object-contain brightness-0 invert"
                        loading="eager"
                        fetchPriority="high"
                    />
                </motion.a>

                {/* Desktop nav — right */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="hidden md:flex items-center gap-2"
                    role="group"
                    aria-label="Site actions"
                >
                    {/* Search — 56px = 3.5rem, above 44px min */}
                    <button
                        className="w-14 h-14 rounded-full bg-primary border border-white/10 hover:border-white/30 transition-colors flex items-center justify-center cursor-pointer"
                        aria-label="Search products"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="M16 16l4.5 4.5" strokeLinecap="round" />
                        </svg>
                    </button>

                    {/* Cart — 56px */}
                    <button
                        className="w-14 h-14 rounded-full bg-primary border border-white/10 hover:border-white/30 transition-colors flex items-center justify-center cursor-pointer"
                        aria-label="Shopping cart"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                                strokeLinejoin="round"
                            />
                            <path d="M3 6h18" strokeLinecap="round" />
                            <path
                                d="M16 10a4 4 0 01-8 0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* Contact pill — h-14 = 56px */}
                    <button
                        className="h-14 rounded-full bg-primary border border-white/10 hover:border-white/30 transition-colors flex items-center gap-3 pl-1.5 pr-6 cursor-pointer"
                        aria-label="Contact us"
                    >
                        <div className="w-11 h-11 rounded-full bg-primary-foreground flex items-center justify-center">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="black"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <span className="text-primary-foreground font-orbitron text-xs tracking-[0.15em] uppercase">
                            Contact
                        </span>
                    </button>
                </motion.div>

                {/* Mobile hamburger — 44px (w-11 h-11) minimum tap target */}
                <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="md:hidden w-11 h-11 rounded-full bg-primary border border-white/10 hover:border-white/30 transition-colors flex items-center justify-center cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                >
                    <div className="flex flex-col gap-1.5" aria-hidden="true">
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="block w-5 h-[1.5px] bg-primary-foreground origin-center"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-5 h-[1.5px] bg-primary-foreground"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="block w-5 h-[1.5px] bg-primary-foreground origin-center"
                        />
                    </div>
                </motion.button>
            </div>

            {/* Mobile menu dropdown */}
            <AnimatePresence>
                {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
            </AnimatePresence>
        </nav>
    );
}
