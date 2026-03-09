"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initial entry animation for the panels
        const ctx = gsap.context(() => {
            gsap.from(".split-panel", {
                opacity: 0,
                y: 20,
                duration: 1.2,
                stagger: 0.3,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="h-screen w-full flex split-container overflow-hidden bg-white"
            id="hero"
        >
            {/* Left: Rose De Jour */}
            <div className="split-panel relative h-full group cursor-pointer interactive">
                <div className="absolute inset-0 z-0 bg-brand-deep">
                    <Image
                        src="/images/rose.png"
                        alt="Rose De Jour"
                        fill
                        className="bg-image object-cover opacity-80 group-hover:opacity-40"
                        priority
                    />
                </div>
                <div className="content-overlay absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-20 text-white">
                    <span className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4 block">
                        La Collection Privée
                    </span>
                    <h2 className="font-serif text-3xl md:text-7xl mb-4">Rose De Jour</h2>
                    <p className="text-lg md:text-xl font-serif italic text-white/90 mb-6">
                        A luminous modern rose fragrance
                    </p>
                    <p className="text-white/70 max-w-sm leading-relaxed mb-10">
                        Crafted from emotion, memory, and artistry. A sophisticated dialogue
                        between floral lightness and woody depth.
                    </p>
                    <div>
                        <button className="border border-brand-gold text-brand-gold px-8 py-4 rounded-custom tracking-widest uppercase text-xs hover:bg-brand-gold hover:text-brand-deep transition-all duration-300 interactive">
                            Discover Rose
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-12 left-12 z-10 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="font-serif text-white text-2xl tracking-widest uppercase">
                        Rose De Jour
                    </h3>
                </div>
            </div>

            {/* Right: Mountain Breeze */}
            <div className="split-panel relative h-full group cursor-pointer interactive">
                <div className="absolute inset-0 z-0 bg-brand-deep">
                    <Image
                        src="/images/mountain.png"
                        alt="Mountain Breeze"
                        fill
                        className="bg-image object-cover opacity-80 group-hover:opacity-40"
                        priority
                    />
                </div>
                <div className="content-overlay absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-20 text-white">
                    <span className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4 block">
                        Curated Essentials
                    </span>
                    <h2 className="font-serif text-3xl md:text-7xl mb-4">Mountain Breeze</h2>
                    <p className="text-lg md:text-xl font-serif italic text-white/90 mb-6">
                        A crisp, alpine-inspired scent
                    </p>
                    <p className="text-white/70 max-w-sm leading-relaxed mb-10">
                        Inspired by the pure essence of peak summits. A breath of fresh air
                        captured in a bottle, ozone meets sharp juniper.
                    </p>
                    <div>
                        <button className="border border-brand-gold text-brand-gold px-8 py-4 rounded-custom tracking-widest uppercase text-xs hover:bg-brand-gold hover:text-brand-deep transition-all duration-300 interactive">
                            Discover Breeze
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-12 right-12 z-10 group-hover:opacity-0 transition-opacity duration-300 text-right">
                    <h3 className="font-serif text-white text-2xl tracking-widest uppercase">
                        Mountain Breeze
                    </h3>
                </div>
            </div>
        </section>
    );
}
