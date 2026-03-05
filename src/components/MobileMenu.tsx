"use client";

import { motion } from "framer-motion";

interface MobileMenuProps {
    onClose: () => void;
}

const menuItems = [
    {
        label: "Search",
        icon: (
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
            >
                <circle cx="11" cy="11" r="7" />
                <path d="M16 16l4.5 4.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: "Cart",
        icon: (
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
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
        ),
    },
    {
        label: "Contact",
        icon: (
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
            >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
];

export default function MobileMenu({ onClose }: MobileMenuProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-3 rounded-2xl bg-primary border border-white/10 overflow-hidden"
        >
            {menuItems.map((item, i) => (
                <button
                    key={item.label}
                    onClick={onClose}
                    className={`w-full flex items-center gap-4 px-5 py-4 text-primary-foreground hover:bg-white/5 transition-colors cursor-pointer ${i < menuItems.length - 1 ? "border-b border-white/5" : ""
                        }`}
                >
                    <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                        {item.icon}
                    </span>
                    <span className="font-orbitron text-sm tracking-[0.15em] uppercase">
                        {item.label}
                    </span>
                </button>
            ))}
        </motion.div>
    );
}
