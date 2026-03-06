"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const fragrances = [
    {
        name: "MOUNTAIN BREEZE",
        image: "/images/mountain-breeze.png",
        aura: "Ephemeral & Radiant",
        description: "A breath of crisp alpine air, where icy peaks meet the first light of dawn."
    },
    {
        name: "ROSE DE JOUR",
        image: "/images/rose.png",
        aura: "Elegant & Floral",
        description: "The timeless grace of a morning rose, soft, velvety, and undeniably radiant."
    },
    {
        name: "CRYSTALINE EMBER",
        image: "/images/crystaline.png",
        aura: "Luminous & Warm",
        description: "A date night special "
    }
];

export default function FeaturedFragrances() {
    return (
        <section id="collection" className="py-24 bg-lavender text-deep-plum">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-gold uppercase tracking-[0.3em] text-[10px] mb-2 block">Our Collection</span>
                        <h2 className="text-4xl md:text-5xl font-serif">Signature <span className="italic text-deep-plum/60 text-3xl md:text-4xl">Auras</span></h2>
                    </div>
                    <p className="text-deep-plum/50 text-xs uppercase tracking-widest max-w-xs text-right leading-loose">
                        Each fragrance is a key to a different realm of your subconscious.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {fragrances.map((item, idx) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden bg-sand/5 mb-6">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-deep-plum/5 group-hover:bg-deep-plum/0 transition-colors duration-500" />
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-serif tracking-widest mb-1">{item.name}</h3>
                                    <p className="text-gold text-[10px] uppercase tracking-widest mb-3">{item.aura}</p>
                                    <p className="text-deep-plum/60 text-xs leading-relaxed max-w-[240px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {item.description}
                                    </p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-deep-plum/30 group-hover:text-gold transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
