import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedFragrances from "@/components/FeaturedFragrances";
import AIScentFinder from "@/components/AIScentFinder";

export default function Home() {
  return (
    <main className="min-h-screen bg-lavender text-deep-plum">
      <Navbar />

      <Hero />

      <section className="py-24 bg-lavender snap-start">
        <div className="container mx-auto px-6 text-center">
          <div className="w-[1px] h-24 bg-gradient-to-b from-gold to-transparent mx-auto mb-12" />
          <h2 className="text-3xl md:text-4xl font-serif max-w-2xl mx-auto italic text-deep-plum/90 leading-relaxed">
            “Fragrance is the most intense form of memory, <br />
            and the most subtle form of presence.”
          </h2>
        </div>
      </section>

      {/* <FeaturedFragrances /> */}

      <div className="snap-start">
        <AIScentFinder />
      </div>

      {/* Philosophy Section Preview */}
      <section id="philosophy" className="py-32 bg-lavender border-t border-deep-plum/5 snap-start">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 mb-8 leading-tight">Crafted for the <br /><span className="italic">Individual</span></h2>
            <p className="text-deep-plum/60 leading-loose text-sm mb-12 font-light">
              We believe a perfume shouldn’t just smell good—it should reflect your internal world.
              Our small-batch scents are developed with rare ingredients sourced from the
              hidden corners of the world, designed to linger like a whispered secret.
            </p>
            <button className="text-xs uppercase tracking-[0.3em] text-gold border-b border-gold/30 pb-2 hover:border-gold transition-all">
              Read Our Story
            </button>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-deep-plum/5 bg-lavender text-deep-plum/40 snap-start">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif text-deep-plum mb-6 tracking-widest uppercase">Essence Isle</h3>
            <p className="text-xs max-w-xs leading-relaxed mb-8 italic">
              A hidden realm where every fragrance reveals a different aura.
            </p>
            <div className="flex gap-6">
              <span className="text-[10px] uppercase tracking-widest cursor-pointer hover:text-gold transition-colors">Instagram</span>
              <span className="text-[10px] uppercase tracking-widest cursor-pointer hover:text-gold transition-colors">Pinterest</span>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-deep-plum/60 mb-6">Explore</h4>
            <ul className="text-xs space-y-4">
              <li className="hover:text-gold cursor-pointer transition-colors">Collection</li>
              <li className="hover:text-gold cursor-pointer transition-colors">Scent Finder</li>
              <li className="hover:text-gold cursor-pointer transition-colors">Bespoke Services</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-deep-plum/60 mb-6">Journal</h4>
            <p className="text-xs leading-relaxed mb-6">
              Join our circle for exclusive aura insights and new releases.
            </p>
            <div className="border-b border-deep-plum/20 flex items-center py-2">
              <input type="email" placeholder="E-MAIL" className="bg-transparent border-none text-[10px] w-full focus:ring-0 placeholder:text-deep-plum/20" />
              <button className="text-[10px] text-gold font-bold">JOIN</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
