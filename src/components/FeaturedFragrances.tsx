"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fragrances = [
    {
        name: "MOUNTAIN BREEZE",
        image: "/images/mountain.png",
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
        name: "Velvet Nuit",
        image: "/images/velvet.png",
        aura: "Luminous & Warm",
        description: "A date night special with hints of musk and warmth."
    }
];

export default function FeaturedFragrances() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title reveal
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                }
            });

            // Cards reveal with stagger
            gsap.from(cardsRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

            // Individual card image parallax
            cardsRef.current.forEach((card) => {
                const img = card.querySelector("img");
                if (img) {
                    gsap.to(img, {
                        y: 30,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        }
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="collection" className="py-24 bg-lavender text-text-dark overflow-hidden">
            <div className="container mx-auto px-6">
                <div ref={titleRef} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-gold uppercase tracking-[0.3em] text-[10px] mb-2 block">Our Collection</span>
                        <h2 className="text-4xl md:text-5xl font-serif luxury-heading-hover cursor-pointer">
                            Signature <span className="italic opacity-60">Auras</span>
                        </h2>
                    </div>
                    <p className="opacity-50 text-[10px] uppercase tracking-widest max-w-[200px] text-right leading-loose">
                        Each fragrance is a key to a different realm of your subconscious.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {fragrances.map((item, idx) => (
                        <div
                            key={item.name}
                            ref={(el) => { if (el) cardsRef.current[idx] = el; }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden bg-white shadow-sm mb-6 product-image-container">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-deep-plum/5 group-hover:bg-deep-plum/0 transition-colors duration-500" />
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-serif tracking-widest mb-1 luxury-heading-hover">{item.name}</h3>
                                    <p className="text-gold text-[10px] uppercase tracking-widest mb-3">{item.aura}</p>
                                    <p className="opacity-0 group-hover:opacity-60 text-xs leading-relaxed max-w-[240px] transition-opacity duration-500">
                                        {item.description}
                                    </p>
                                </div>
                                <ArrowRight className="w-5 h-5 opacity-20 group-hover:opacity-100 group-hover:text-gold transition-all" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
