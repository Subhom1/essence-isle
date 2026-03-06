"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-lavender/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between text-deep-plum">
                <div className="flex items-center gap-8">
                    <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.2em]">
                        <Link href="#collection" className="hover:text-gold transition-colors">Collection</Link>
                        <Link href="#finder" className="hover:text-gold transition-colors">Scent Finder</Link>
                        <Link href="#philosophy" className="hover:text-gold transition-colors">Philosophy</Link>
                    </nav>
                </div>

                <Link href="/" className="absolute left-1/2 -translate-x-1/2 group flex items-baseline gap-2">
                    <span className="text-2xl font-essence tracking-[0.15em] group-hover:text-gold transition-colors">
                        ESSENCE
                    </span>
                    <span className="text-2xl font-isle tracking-[0.05em] group-hover:text-gold transition-colors">
                        ISLE
                    </span>
                </Link>
            </div>
        </motion.nav>
    );
}
