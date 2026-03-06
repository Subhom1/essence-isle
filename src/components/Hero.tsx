"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_bg_pastel.png"
                    alt="Ethereal Mist"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-lavender/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 text-deep-plum">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <span className="text-deep-plum uppercase tracking-[0.4em] text-xs mb-4 block">
                        The Aura of Individualism
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif mb-6 max-w-4xl mx-auto leading-tight">
                        Discover Your Aura <br />
                        <span className="italic">Through Scent</span>
                    </h1>
                    <p className="text-deep-plum/80 text-sm md:text-base max-w-xl mx-auto mb-10 tracking-wide font-light">
                        “A hidden realm where every fragrance reveals a different aura.”
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        <a
                            href="#finder"
                            className="inline-block px-10 py-4 border border-deep-plum/20 hover:border-gold hover:text-gold transition-all duration-500 uppercase tracking-[0.2em] text-xs backdrop-blur-sm"
                        >
                            Find Your Scent
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-deep-plum/40">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-deep-plum/20 to-transparent" />
            </motion.div>
        </section>
    );
}
