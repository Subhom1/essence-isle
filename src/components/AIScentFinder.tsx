"use client";

import { motion } from "framer-motion";
import { Sparkles, Upload } from "lucide-react";
import { useState } from "react";

export default function AIScentFinder() {
    const [step, setStep] = useState(1);

    return (
        <section id="finder" className="bg-lavender relative overflow-hidden text-deep-plum py-16">
            {/* Decorative blurred glow - subtle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mist/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center border border-deep-plum/5 bg-white/40 backdrop-blur-xl p-8 md:p-16 shadow-[0_15px_40px_rgba(45,27,77,0.03)] rounded-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Sparkles className="w-4 h-4 text-gold" />
                            <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-deep-plum/40">The Curator</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-serif mb-4 italic">AI Scent Discovery</h2>
                        <p className="text-deep-plum/50 text-xs md:text-sm mb-10 max-w-lg mx-auto leading-relaxed">
                            A dialogue between technology and emotion. Share a memory, a vision, or a mood to receive your signature aura profile.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-10 border border-deep-plum/10 bg-white/30 hover:bg-white/60 hover:border-gold/20 transition-all group flex flex-col items-center justify-center cursor-pointer rounded-xl relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Upload className="w-6 h-6 text-deep-plum/20 mb-4 group-hover:text-gold transition-colors" />
                                <span className="text-[9px] uppercase tracking-[0.3em] text-deep-plum/40 group-hover:text-deep-plum font-semibold">Visual Aura</span>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-6 border border-deep-plum/10 bg-white/30 hover:bg-white/60 hover:border-gold/20 transition-all flex flex-col rounded-xl relative"
                            >
                                <textarea
                                    placeholder="Describe a memory..."
                                    className="bg-transparent border-none text-xs text-deep-plum focus:ring-0 placeholder:text-deep-plum/20 resize-none h-full w-full min-h-[100px] leading-relaxed p-0"
                                />
                                <div className="absolute bottom-3 right-4 text-[8px] uppercase tracking-widest text-deep-plum/20 pointer-events-none">Textual Essence</div>
                            </motion.div>
                        </div>

                        <button
                            className="px-10 py-3.5 text-white hover:text-deep-plum transition-all duration-500 uppercase tracking-[0.25em] text-[10px] font-bold shadow-sm rounded-sm"
                            style={{ backgroundColor: 'var(--deep-plum)' }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--luxury-gold)')}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--deep-plum)')}
                        >
                            Analyze My Aura
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
