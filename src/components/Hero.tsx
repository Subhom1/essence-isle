"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-porcelain">
      <Image
        src="/images/skinglow-rosee-hero.png"
        alt="Skinglow Rosée perfume bottle in warm afternoon light"
        fill
        priority
        sizes="100vw"
        className="hero-image object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,243,237,0.98)_0%,rgba(247,243,237,0.9)_30%,rgba(247,243,237,0.18)_62%,rgba(35,20,22,0.04)_100%)] max-md:bg-[linear-gradient(180deg,rgba(247,243,237,0.96)_0%,rgba(247,243,237,0.74)_42%,rgba(36,19,22,0.14)_78%,rgba(36,19,22,0.42)_100%)]" />
      <div className="grain absolute inset-0 opacity-25" />

      <div className="site-shell relative z-10 flex min-h-[100svh] items-center pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[44rem] max-md:self-start max-md:pt-[5vh]"
        >
          <p className="eyebrow mb-7">Chapter No. 01 · A fragrance for her</p>
          <h1 className="font-serif text-[clamp(4.6rem,9.2vw,9.6rem)] leading-[0.76] tracking-[-0.055em] text-ink">
            Skinglow
            <span className="mt-4 block pl-[0.42em] italic text-burgundy">Rosée</span>
          </h1>
          <p className="mt-10 max-w-md font-serif text-xl leading-relaxed text-ink/72 md:text-2xl">
            A glowing floral skin scent—fresh, feminine, creamy and radiant.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#rosee" className="button button-dark">
              Discover Rosée
            </Link>
            <Link href="#atelier" className="button button-light">
              Design your scent
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-0 right-0 z-10">
        <div className="site-shell flex items-end justify-between">
          <p className="hidden max-w-[18rem] text-[0.62rem] uppercase leading-loose tracking-[0.2em] text-ink/55 md:block">
            Sparkling citrus · Dewy rose · Amber musk
          </p>
          <Link href="#manifesto" className="ml-auto flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.24em] text-white md:text-ink/60">
            Enter the story <ArrowDownRight size={15} strokeWidth={1.2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
