import AIScentFinder from "@/components/AIScentFinder";
import FeaturedFragrances from "@/components/FeaturedFragrances";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-porcelain text-ink">
      <Navbar />
      <Hero />

      <section id="manifesto" className="section-pad bg-porcelain">
        <div className="site-shell text-center">
          <p className="eyebrow mb-8">Essence Isle · The house of personal fragrance</p>
          <h2 className="mx-auto max-w-5xl font-serif text-[clamp(2.8rem,6vw,6.2rem)] leading-[0.98] tracking-[-0.04em] text-ink">
            Fragrance should not introduce a character.
            <span className="block italic text-burgundy">It should reveal yours.</span>
          </h2>
          <p className="mx-auto mt-9 max-w-xl text-sm leading-7 text-ink/58">
            We create scents for those who want more than something beautiful: a signature shaped by memory,
            instinct and the way they choose to be remembered.
          </p>
        </div>
      </section>

      <FeaturedFragrances />

      <section className="relative min-h-[82svh] overflow-hidden bg-ink">
        <Image
          src="/images/skinglow-rosee-ritual.png"
          alt="A woman applying fragrance at her dressing table"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,18,19,0.78),rgba(28,18,19,0.08)_68%)] max-md:bg-[linear-gradient(0deg,rgba(28,18,19,0.85),rgba(28,18,19,0.04)_72%)]" />
        <div className="site-shell relative z-10 flex min-h-[82svh] items-end pb-16 text-white md:items-center md:pb-0">
          <div className="max-w-lg">
            <p className="eyebrow eyebrow-light mb-7">An intimate ritual</p>
            <blockquote className="font-serif text-4xl leading-[1.04] tracking-[-0.025em] md:text-6xl">
              Not made to fill a room.
              <span className="block italic text-rose">Made to stay in memory.</span>
            </blockquote>
            <p className="mt-7 max-w-sm text-sm leading-7 text-white/66">
              A softly addictive trail that reveals itself through proximity, warmth and movement.
            </p>
          </div>
        </div>
      </section>

      <AIScentFinder />

      <section id="philosophy" className="section-pad bg-soft-white">
        <div className="site-shell grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-24">
          <div className="relative aspect-square overflow-hidden bg-blush">
            <Image
              src="/images/skinglow-rosee-flatlay.png"
              alt="Skinglow Rosée surrounded by white roses and luminous stones"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
          <div className="max-w-lg">
            <p className="eyebrow mb-7">Our point of view</p>
            <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.035em] md:text-7xl">
              Luxury is
              <span className="block italic text-burgundy">recognition.</span>
            </h2>
            <p className="mt-8 text-base leading-8 text-ink/62">
              Not recognition by everyone. Recognition of yourself. Essence Isle makes the language of
              perfumery personal and approachable, without surrendering the care, restraint and beautiful
              materials that make scent feel precious.
            </p>
            <Link href="#atelier" className="mt-9 inline-flex items-center gap-3 border-b border-ink/25 pb-2 text-[0.65rem] uppercase tracking-[0.2em] text-ink transition-colors hover:border-burgundy hover:text-burgundy">
              Enter the Signature Atelier <ArrowUpRight size={14} strokeWidth={1.3} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-porcelain">
        <div className="site-shell grid gap-14 border-b border-white/10 py-16 md:grid-cols-[1.4fr_0.6fr_0.6fr] md:py-20">
          <div>
            <p className="font-essence text-xl tracking-[0.2em]">ESSENCE ISLE</p>
            <p className="mt-5 max-w-sm font-serif text-2xl italic leading-relaxed text-porcelain/72">
              Design your scent. Design your identity.
            </p>
          </div>
          <div>
            <p className="footer-label">Discover</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-porcelain/55">
              <Link href="#rosee" className="hover:text-white">Skinglow Rosée</Link>
              <Link href="#notes" className="hover:text-white">The composition</Link>
              <Link href="#atelier" className="hover:text-white">Signature Atelier</Link>
            </div>
          </div>
          <div>
            <p className="footer-label">Follow the story</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-porcelain/55">
              <span>Instagram</span>
              <span>Pinterest</span>
              <span>Dublin, Ireland</span>
            </div>
          </div>
        </div>
        <div className="site-shell flex flex-col gap-3 py-6 text-[0.55rem] uppercase tracking-[0.18em] text-porcelain/35 sm:flex-row sm:justify-between">
          <span>© 2026 Essence Isle</span>
          <span>Small-batch fragrance · Personal presence</span>
        </div>
      </footer>
    </main>
  );
}
