"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;

            if (!isMobile) {
                // ─── Desktop: simple stagger fade-in ──────────────────────────
                gsap.fromTo(
                    ".split-panel",
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1.2, stagger: 0.3, ease: "power3.out" }
                );
                return;
            }

            // ─── Mobile: cinematic stagger reveal ───────────────────────
            const panels = gsap.utils.toArray<HTMLElement>(".split-panel");

            panels.forEach((panel, i) => {
                const bgImg = panel.querySelector<HTMLElement>(".bg-image");
                const textEls = panel.querySelectorAll<HTMLElement>(
                    ".content-overlay, .label-tag, h2, .sub-tag, button"
                );

                // Ken Burns parallax
                if (bgImg) {
                    gsap.fromTo(
                        bgImg,
                        { scale: 1.18, y: "-8%" },
                        {
                            scale: 1.1,
                            y: "8%",
                            ease: "none",
                            scrollTrigger: {
                                trigger: panel,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: 1.8,
                            },
                        }
                    );
                }

                if (i === 0) {
                    // First panel: load animation
                    gsap.fromTo(
                        panel,
                        { clipPath: "inset(8% 4% 8% 4% round 12px)", opacity: 0.6, scale: 0.97 },
                        {
                            clipPath: "inset(0% 0% 0% 0% round 0px)",
                            opacity: 1,
                            scale: 1,
                            duration: 1.2,
                            ease: "expo.out",
                        }
                    );
                    gsap.fromTo(
                        textEls,
                        { y: 36, opacity: 0 },
                        { y: 0, opacity: 1, stagger: 0.14, duration: 0.85, ease: "power3.out", delay: 0.4 }
                    );
                } else {
                    // Subsequent panels: reveal on scroll
                    const startPos = i === 1 ? "top 80%" : "top 90%";
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: panel,
                            start: startPos,
                            once: true,
                        },
                    });

                    tl.fromTo(
                        panel,
                        { clipPath: "inset(12% 5% 0% 5% round 8px)", opacity: 0.5 },
                        { clipPath: "inset(0% 0% 0% 0% round 0px)", opacity: 1, duration: 0.9, ease: "expo.out" }
                    ).fromTo(
                        textEls,
                        { y: 30, opacity: 0 },
                        { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: "power3.out" },
                        "-=0.45"
                    );
                }
            });

            // Gold shimmer divider lines
            gsap.utils.toArray<HTMLElement>(".panel-divider").forEach((divider) => {
                gsap.fromTo(
                    divider,
                    { scaleX: 0, opacity: 0 },
                    {
                        scaleX: 1,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: divider,
                            start: "top 98%",
                            once: true,
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full flex split-container overflow-hidden bg-black"
            id="hero"
        >
            {/* Panel 1: Mountain Breeze */}
            <div className="split-panel group interactive">
                <div className="absolute inset-0 z-0 bg-black">
                    <Image
                        src="/images/mountain.png"
                        alt="Mountain Breeze"
                        fill
                        className="bg-image object-cover opacity-80 group-hover:opacity-40"
                        priority
                    />
                </div>
                <div className="content-overlay overlay-blue absolute inset-0 z-10 flex flex-col justify-start px-6 md:px-20 text-white pt-[14vh] md:pt-0 md:justify-center">
                    <span className="label-tag text-brand-gold uppercase tracking-[0.3em] text-[10px] md:text-sm mb-2 md:mb-4 block">
                        Curated Essentials
                    </span>
                    <h2 className="font-serif text-2xl md:text-7xl mb-2 md:mb-4 whitespace-nowrap">Mountain Breeze</h2>
                    <p className="sub-tag text-sm md:text-xl font-serif italic text-white/90 mb-3 md:mb-6">
                        A crisp, alpine-inspired scent
                    </p>
                    <p className="hidden md:block text-white/70 max-w-sm text-base leading-relaxed mb-10 whitespace-normal">
                        Inspired by the pure essence of peak summits. A breath of fresh air
                        captured in a bottle, ozone meets sharp juniper.
                    </p>
                    <div>
                        <button className="border border-brand-gold text-brand-gold px-6 md:px-8 py-3 md:py-4 rounded-custom tracking-widest uppercase text-xs hover:bg-brand-gold hover:text-brand-deep transition-all duration-300 interactive">
                            Discover Breeze
                        </button>
                    </div>
                </div>
                <div className="hidden md:block absolute bottom-8 left-8 z-10 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="font-serif text-white text-2xl tracking-widest uppercase">
                        Mountain Breeze
                    </h3>
                </div>
                {/* Gold divider - bottom of panel */}
                <div className="panel-divider md:hidden h-px w-full origin-left" />
            </div>

            {/* Panel 2: Rose De Jour */}
            <div className="split-panel group interactive">
                <div className="absolute inset-0 z-0 bg-black">
                    <Image
                        src="/images/rose.png"
                        alt="Rose De Jour"
                        fill
                        className="bg-image object-cover opacity-80 group-hover:opacity-40"
                        priority
                    />
                </div>
                <div className="content-overlay overlay-pink absolute inset-0 z-10 flex flex-col justify-start md:justify-center px-6 md:px-20 text-white pt-[12vh] md:pt-0">
                    <span className="label-tag text-brand-gold uppercase tracking-[0.3em] text-[10px] md:text-sm mb-2 md:mb-4 block">
                        La Collection Privée
                    </span>
                    <h2 className="font-serif text-2xl md:text-7xl mb-2 md:mb-4 whitespace-nowrap">Rose De Jour</h2>
                    <p className="sub-tag text-sm md:text-xl font-serif italic text-white/90 mb-3 md:mb-6">
                        A luminous modern rose fragrance
                    </p>
                    <p className="hidden md:block text-white/70 max-w-sm text-base leading-relaxed mb-10 whitespace-normal">
                        Crafted from emotion, memory, and artistry. A sophisticated dialogue
                        between floral lightness and woody depth.
                    </p>
                    <div>
                        <button className="border border-brand-gold text-brand-gold px-6 md:px-8 py-3 md:py-4 rounded-custom tracking-widest uppercase text-xs hover:bg-brand-gold hover:text-brand-deep transition-all duration-300 interactive">
                            Discover Rose
                        </button>
                    </div>
                </div>
                <div className="hidden md:block absolute bottom-8 left-8 z-10 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="font-serif text-white text-2xl tracking-widest uppercase">
                        Rose De Jour
                    </h3>
                </div>
                {/* Gold divider - bottom of panel */}
                <div className="panel-divider md:hidden h-px w-full origin-left" />
            </div>

            {/* Panel 3: Velvet Nuit */}
            <div className="split-panel group interactive">
                <div className="absolute inset-0 z-0 bg-black">
                    <Image
                        src="/images/velvet.png"
                        alt="Velvet Nuit"
                        fill
                        className="bg-image object-cover opacity-80 group-hover:opacity-40"
                        priority
                    />
                </div>
                <div className="content-overlay overlay-red absolute inset-0 z-10 flex flex-col justify-start md:justify-center px-6 md:px-20 text-white pt-[12vh] md:pt-0">
                    <span className="label-tag text-brand-gold uppercase tracking-[0.3em] text-[10px] md:text-sm mb-2 md:mb-4 block">
                        Nocturnal Elegance
                    </span>
                    <h2 className="font-serif text-2xl md:text-7xl mb-2 md:mb-4 whitespace-nowrap">Velvet Nuit</h2>
                    <p className="sub-tag text-sm md:text-xl font-serif italic text-white/90 mb-3 md:mb-6">
                        Luminous &amp; Warm
                    </p>
                    <p className="hidden md:block text-white/70 max-w-sm text-base leading-relaxed mb-10 whitespace-normal">
                        A date night special with hints of musk and warmth. Inspired by the
                        velvety texture of a midnight sky.
                    </p>
                    <div>
                        <button className="border border-brand-gold text-brand-gold px-6 md:px-8 py-3 md:py-4 rounded-custom tracking-widest uppercase text-xs hover:bg-brand-gold hover:text-brand-deep transition-all duration-300 interactive">
                            Discover Nuit
                        </button>
                    </div>
                </div>
                <div className="hidden md:block absolute bottom-8 left-8 z-10 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="font-serif text-white text-2xl tracking-widest uppercase">
                        Velvet Nuit
                    </h3>
                </div>
            </div>
        </section>
    );
}
