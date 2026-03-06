"use client";

import { motion } from "framer-motion";
import { Sparkles, Upload } from "lucide-react";
import { useState } from "react";

export default function AIScentFinder() {
    const [step, setStep] = useState(1);

    return (
        <section id="finder" className="py-24 bg-lavender relative overflow-hidden text-deep-plum">
            {/* Decorative blurred glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mist/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center border border-deep-plum/10 bg-white/60 backdrop-blur-2xl p-12 md:p-24 shadow-[0_20px_50px_rgba(45,27,77,0.05)] rounded-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Sparkles className="w-8 h-8 text-gold mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">AI Scent Discovery</h2>
                        <p className="text-deep-plum/60 text-sm md:text-base mb-12 max-w-2xl mx-auto leading-relaxed">
                            Upload an image of your sanctuary, describe a memory, or tell us your lifestyle.
                            Our AI will weave your essence into a personalized fragrance profile.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-12 border border-deep-plum/10 bg-white/50 hover:border-gold/30 hover:shadow-lg transition-all group flex flex-col items-center justify-center cursor-pointer rounded-2xl"
                            >
                                <div className="w-12 h-12 rounded-full bg-lavender flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                                    <Upload className="w-5 h-5 text-deep-plum/30 group-hover:text-gold" />
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-deep-plum/40 group-hover:text-deep-plum font-medium">Upload Scent Aura</span>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-8 border border-deep-plum/10 bg-white/50 hover:border-gold/30 hover:shadow-lg transition-all flex flex-col gap-4 rounded-2xl relative"
                            >
                                <textarea
                                    placeholder="Describe a memory or a mood..."
                                    className="bg-transparent border-none text-sm text-deep-plum focus:ring-0 placeholder:text-deep-plum/20 resize-none h-full w-full min-h-[140px] leading-relaxed"
                                />
                                <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-widest text-deep-plum/20">Memory Lane</div>
                            </motion.div>
                        </div>

                        <button className="px-12 py-4 bg-gold text-white hover:bg-deep-plum transition-all duration-500 uppercase tracking-[0.2em] text-xs font-bold shadow-md">
                            Analyze My Aura
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
