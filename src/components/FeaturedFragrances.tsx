import Image from "next/image";
import Link from "next/link";

const noteFamilies = [
  {
    number: "01",
    label: "The opening",
    title: "Light, caught in citrus",
    notes: "Grapefruit · Sweet orange · Bergamot · Petitgrain",
    body: "A polished, sparkling first impression with a delicate green edge.",
  },
  {
    number: "02",
    label: "The heart",
    title: "A rose before morning",
    notes: "Dewy rose · White florals · Neroli · Violet petals · Ylang-ylang",
    body: "Translucent petals and creamy floral warmth, composed to remain weightless.",
  },
  {
    number: "03",
    label: "The trail",
    title: "Warmth upon the skin",
    notes: "Amberwood · White musk · Vanilla · Coconut milk · Benzoin · Vetiver · Patchouli",
    body: "A quietly addictive, creamy amber-musk trail with subtle woody structure.",
  },
];

export default function FeaturedFragrances() {
  return (
    <>
      <section id="rosee" className="section-pad bg-porcelain">
        <div className="site-shell grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
          <div className="relative mx-auto aspect-[1.02] w-full max-w-[42rem] overflow-hidden bg-blush">
            <Image
              src="/images/skinglow-rosee-bottle.png"
              alt="Skinglow Rosée pink glass perfume bottle with black ribbon"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover transition-transform duration-[1600ms] hover:scale-[1.025]"
            />
            <span className="absolute bottom-5 left-5 bg-porcelain/92 px-4 py-2 text-[0.56rem] uppercase tracking-[0.24em] text-ink backdrop-blur">
              First release · For women
            </span>
          </div>

          <div className="max-w-xl lg:py-14">
            <p className="eyebrow mb-6">The debut fragrance</p>
            <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.03em] text-ink md:text-7xl">
              Radiance,
              <span className="block italic text-burgundy">worn close.</span>
            </h2>
            <p className="mt-9 text-base leading-8 text-ink/65">
              Skinglow Rosée opens in a flash of grapefruit, sweet orange and bergamot. At its heart,
              dewy rose and white florals glow against translucent violet petals. The scent settles
              into amberwood, white musk and a softly creamy trace of vanilla.
            </p>
            <p className="mt-6 font-serif text-2xl italic leading-relaxed text-ink">
              Fresh enough to feel effortless. Distinctive enough to remain.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link href="#notes" className="button button-dark">Explore the composition</Link>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-ink/45">Floral · Rose · Musky · Amber</span>
            </div>
          </div>
        </div>
      </section>

      <section id="notes" className="border-y border-white/10 bg-ink text-porcelain">
        <div className="site-shell grid lg:grid-cols-[0.78fr_1.22fr]">
          <div className="border-white/10 py-20 lg:border-r lg:py-28 lg:pr-20">
            <p className="eyebrow eyebrow-light mb-7">The composition</p>
            <h2 className="max-w-sm font-serif text-5xl leading-none tracking-[-0.035em] md:text-7xl">
              From light
              <span className="block italic text-rose">to linger.</span>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-7 text-porcelain/58">
              Built with contrast: a vivid opening, a petal-soft heart, and a warm base designed to
              settle into the wearer rather than announce itself across the room.
            </p>
          </div>

          <div className="lg:pl-20">
            {noteFamilies.map((family) => (
              <article key={family.number} className="grid gap-4 border-t border-white/10 py-10 first:border-0 lg:grid-cols-[3.2rem_1fr] lg:py-12">
                <span className="text-[0.58rem] tracking-[0.24em] text-gold">{family.number}</span>
                <div>
                  <p className="mb-3 text-[0.58rem] uppercase tracking-[0.24em] text-porcelain/45">{family.label}</p>
                  <h3 className="font-serif text-3xl tracking-[-0.02em] md:text-4xl">{family.title}</h3>
                  <p className="mt-4 text-xs uppercase leading-6 tracking-[0.13em] text-rose">{family.notes}</p>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-porcelain/55">{family.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
