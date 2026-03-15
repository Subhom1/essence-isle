"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isMobile = window.innerWidth < 768;
            const threshold = isMobile ? window.innerHeight * 3.8 : 50;
            setScrolled(window.scrollY > threshold);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const navLinks = [
        // { name: "Collection", href: "#collection" },
        { name: "Scent Finder", href: "#finder" },
        { name: "Philosophy", href: "#philosophy" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled || isMenuOpen ? "bg-lavender/95 backdrop-blur-lg py-4 shadow-md" : "bg-gradient-to-b from-black/20 to-transparent py-6"
                    }`}
            >
                <div className={`container mx-auto px-6 flex items-center justify-between transition-colors duration-500 ${scrolled || isMenuOpen ? "text-deep-plum" : "text-white"}`}>

                    {/* Desktop Navigation */}
                    <div className="flex items-center gap-8">
                        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.2em]">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="hover:text-gold transition-colors">
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 -ml-2 hover:text-gold transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                        </button>
                    </div>

                    {/* Centered Logo */}
                    <Link
                        href="/"
                        className="absolute left-1/2 -translate-x-1/2 group flex items-center gap-1"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="text-lg md:text-2xl font-essence tracking-[0.2em] group-hover:text-gold transition-colors text-right logo-part-left">
                            ESSENCE
                        </span>
                        <span className="text-lg md:text-2xl font-isle tracking-[0.1em] group-hover:text-gold transition-colors text-left logo-part-right">
                            ISLE
                        </span>
                    </Link>

                    {/* Right Side Icons */}
                    <div className="flex items-center gap-4">
                        <button className="hover:text-gold transition-colors">
                            <ShoppingBag size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-lavender flex flex-col justify-center px-10 md:hidden"
                    >
                        <nav className="flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-3xl font-serif text-deep-plum hover:text-gold transition-colors block"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="absolute bottom-12 left-10">
                            <p className="text-xs uppercase tracking-[0.3em] text-deep-plum/40 mb-4">La Collection Privée</p>
                            <div className="flex gap-6 text-xs uppercase tracking-[0.2em] text-deep-plum">
                                <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                                <a href="#" className="hover:text-gold transition-colors">Journal</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
