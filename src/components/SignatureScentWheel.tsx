"use client";

import { ArrowLeft, ArrowRight, Check, Info, RotateCcw, Sparkles } from "lucide-react";
import { CSSProperties, useMemo, useState } from "react";
import Link from "next/link";

type ScentFamily = {
  id: string;
  label: string;
  shortLabel: string;
  family: string;
  notes: string;
  story: string;
  angle: number;
  pyramid: [string, string, string];
};

type PresenceOption = {
  id: string;
  label: string;
  description: string;
  cue: string;
};

type TraceOption = {
  id: string;
  label: string;
  description: string;
  notes: string;
};

const scentFamilies: ScentFamily[] = [
  {
    id: "citrus",
    label: "Sunlit citrus",
    shortLabel: "Bright",
    family: "Citrus · white floral",
    notes: "bergamot · neroli · warm skin",
    story: "A scent that enters like daylight and makes the air feel generous.",
    angle: 0,
    pyramid: ["Bergamot", "Neroli", "White musk"],
  },
  {
    id: "bloom",
    label: "Velvet bloom",
    shortLabel: "Petal",
    family: "Floral · powdery",
    notes: "rose · iris · soft suede",
    story: "Flowers with a little shadow: elegant, tactile and close to the skin.",
    angle: 45,
    pyramid: ["Pink pepper", "Rose absolute", "Iris suede"],
  },
  {
    id: "green",
    label: "Green crush",
    shortLabel: "Botanical",
    family: "Green · aromatic",
    notes: "fig leaf · basil · crushed stems",
    story: "Leaves rubbed between fingers, sap, rain and the snap of something alive.",
    angle: 90,
    pyramid: ["Basil leaf", "Fig leaf", "Vetiver"],
  },
  {
    id: "mineral",
    label: "Mineral air",
    shortLabel: "Clear",
    family: "Aquatic · clean musk",
    notes: "cold air · salt · transparent musk",
    story: "Quiet, lucid and impossible to mistake for a heavy cloud.",
    angle: 135,
    pyramid: ["Bergamot water", "Sea salt", "Clean musk"],
  },
  {
    id: "spice",
    label: "Spiced skin",
    shortLabel: "Warm",
    family: "Amber · spicy",
    notes: "cardamom · amber · toasted skin",
    story: "Warmth that feels lived-in: a pulse, a room, a memory that keeps glowing.",
    angle: 180,
    pyramid: ["Cardamom", "Saffron", "Golden amber"],
  },
  {
    id: "woods",
    label: "Soft woods",
    shortLabel: "Grounded",
    family: "Woody · skin scent",
    notes: "cedar · sandalwood · cashmere musk",
    story: "Polished wood, clean fabric and the comfort of something enduring.",
    angle: 225,
    pyramid: ["Juniper", "Cedar", "Sandalwood"],
  },
  {
    id: "fruit",
    label: "Juicy color",
    shortLabel: "Playful",
    family: "Fruity · sheer floral",
    notes: "pear · blackcurrant · luminous petals",
    story: "The flash of color: bright, charming and a little unexpected.",
    angle: 270,
    pyramid: ["Pear", "Peony", "Ambrette"],
  },
  {
    id: "smoke",
    label: "Quiet smoke",
    shortLabel: "Mysterious",
    family: "Tea · incense",
    notes: "black tea · incense · dry cedar",
    story: "A second reading: paper, ritual and something not fully explained.",
    angle: 315,
    pyramid: ["Bergamot tea", "Orris", "Incense wood"],
  },
];

const presenceOptions: PresenceOption[] = [
  {
    id: "whisper",
    label: "A private whisper",
    description: "Discovered by the person standing beside you.",
    cue: "intimate",
  },
  {
    id: "halo",
    label: "A soft halo",
    description: "Follows your movement like warmth left in a room.",
    cue: "radiant",
  },
  {
    id: "trail",
    label: "A memorable trail",
    description: "Arrives before you and stays as an afterthought.",
    cue: "magnetic",
  },
];

const traceOptions: TraceOption[] = [
  { id: "linen", label: "Sun-warmed linen", description: "Clean, airy and softened by skin.", notes: "sheer musk · cotton flower · pale woods" },
  { id: "stone", label: "Rain on stone", description: "Cool mineral clarity with a green edge.", notes: "petrichor · wet moss · mineral amber" },
  { id: "cedar", label: "Old book & cedar", description: "Dry pages, polished wood and mystery.", notes: "paper accord · cedar · soft incense" },
  { id: "skin", label: "Warm skin", description: "A softly addictive finish that feels entirely yours.", notes: "ambrette · cashmere musk · vanilla bean" },
];

const steps = ["Signal", "Presence", "Trace", "Direction"];

function makeScentId(value: string) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) % 99999;
  }

  return `EI-SIG-${String(hash).padStart(5, "0")}`;
}

function getWheelPosition(angle: number): CSSProperties {
  const radians = (angle * Math.PI) / 180;
  const orbit = 35;

  return {
    left: `${50 + orbit * Math.sin(radians)}%`,
    top: `${50 - orbit * Math.cos(radians)}%`,
    transform: "translate(-50%, -50%)",
  };
}

export default function SignatureScentWheel() {
  const [step, setStep] = useState(0);
  const [familyId, setFamilyId] = useState<string | null>(null);
  const [presenceId, setPresenceId] = useState<string | null>(null);
  const [traceId, setTraceId] = useState<string | null>(null);

  const family = scentFamilies.find((option) => option.id === familyId) ?? null;
  const presence = presenceOptions.find((option) => option.id === presenceId) ?? null;
  const trace = traceOptions.find((option) => option.id === traceId) ?? null;
  const scentId = useMemo(
    () => makeScentId(`${familyId ?? "open"}-${presenceId ?? "air"}-${traceId ?? "skin"}`),
    [familyId, presenceId, traceId]
  );
  const startOver = () => {
    setStep(0);
    setFamilyId(null);
    setPresenceId(null);
    setTraceId(null);
  };

  return (
    <main className="min-h-screen bg-porcelain text-ink">
      <div className="site-shell py-8 md:py-12">
        <Link href="/" className="inline-flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.2em] text-ink/55 hover:text-burgundy">
          <ArrowLeft size={15} strokeWidth={1.3} /> Essence Isle
        </Link>
      </div>

      <section className="section-pad pt-10 md:pt-16">
        <div className="site-shell">
          <div className="max-w-4xl">
            <p className="eyebrow mb-6">The Signature Scent Finder</p>
            <h1 className="font-serif text-[clamp(3.4rem,8vw,8rem)] leading-[0.84] tracking-[-0.05em]">
              Find the scent
              <span className="block italic text-burgundy">you already leave behind.</span>
            </h1>
            <p className="mt-9 max-w-xl text-base leading-8 text-ink/62">
              No perfume vocabulary. No personality quiz. Follow the image that catches you, then shape its
              presence and the trace it leaves behind.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-y border-ink/12 py-5">
            <ol className="flex flex-wrap items-center gap-3 sm:gap-5" aria-label="Scent finder progress">
              {steps.map((label, index) => (
                <li key={label} className="flex items-center gap-3">
                  <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-[0.58rem] ${index <= step ? "border-burgundy bg-burgundy text-white" : "border-ink/20 text-ink/45"}`}>
                    {index < step ? <Check size={13} strokeWidth={1.5} aria-hidden="true" /> : `0${index + 1}`}
                  </span>
                  <span className={`text-[0.58rem] uppercase tracking-[0.18em] ${index === step ? "text-ink" : "text-ink/42"}`}>{label}</span>
                  {index < steps.length - 1 && <span className="hidden h-px w-5 bg-ink/12 sm:block" aria-hidden="true" />}
                </li>
              ))}
            </ol>
            <p className="text-[0.58rem] uppercase tracking-[0.2em] text-ink/42">One minute · Follow your pull</p>
          </div>

          {step === 0 && (
            <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <div className="relative mx-auto aspect-square w-full max-w-[35rem] overflow-hidden rounded-full border border-ink/12 bg-[#efe3d5] p-5 sm:p-8">
              <div className="absolute inset-4 rounded-full sm:inset-8">
                <div
                  className="pointer-events-none absolute inset-0 rounded-full opacity-70"
                  style={{ background: "conic-gradient(from -22.5deg, #dba45e 0deg 45deg, #b76e73 45deg 90deg, #7c9365 90deg 135deg, #83a9a2 135deg 180deg, #9a5c3d 180deg 225deg, #725e4c 225deg 270deg, #ae5f68 270deg 315deg, #594951 315deg 360deg)" }}
                  aria-hidden="true"
                />
                <div className="pointer-events-none absolute inset-1 rounded-full border border-white/45" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-[31%] rounded-full border border-ink/10 bg-porcelain shadow-[0_16px_50px_rgba(36,23,25,0.1)]" aria-hidden="true" />
                <div
                  className="absolute inset-0 z-10"
                  role="radiogroup"
                  aria-label="Choose the scent signal that catches you first"
                >
                  {scentFamilies.map((option) => {
                    const active = option.id === familyId;

                    return (
                      <button
                        key={option.id}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        aria-label={`${option.label}, ${option.family}`}
                        onClick={() => setFamilyId(option.id)}
                        className={`absolute left-1/2 top-1/2 flex h-[4.8rem] w-[4.8rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border px-2 text-center transition duration-300 sm:h-[6.1rem] sm:w-[6.1rem] ${active ? "z-40 scale-105 border-burgundy bg-burgundy text-white shadow-[0_10px_30px_rgba(111,37,56,0.26)]" : "border-white/55 bg-porcelain text-ink hover:z-10 hover:scale-105 hover:border-burgundy/60"}`}
                        style={getWheelPosition(option.angle)}
                      >
                        <span className="mb-1 text-[0.4rem] uppercase tracking-[0.14em] opacity-55">{option.shortLabel}</span>
                        <span className="font-serif text-[0.78rem] leading-[0.95] sm:text-base">{option.label}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center p-12 text-center sm:p-20">
                  <div className="mx-auto max-w-[10rem]">
                    <Sparkles size={16} strokeWidth={1.2} className="mx-auto mb-3 text-gold" aria-hidden="true" />
                    <p className="text-[0.52rem] uppercase tracking-[0.24em] text-ink/48">Your first signal</p>
                    <p className="mt-3 font-serif text-[1.35rem] leading-[0.9] text-ink sm:text-[1.8rem]">{family ? family.shortLabel : "Follow your pull"}</p>
                    <p className="mx-auto mt-3 max-w-[8rem] text-[0.56rem] leading-5 text-ink/55">{family ? family.notes : "Tap your first instinct."}</p>
                  </div>
                </div>
              </div>
              </div>

              <div className="max-w-xl">
                <p className="text-[0.58rem] uppercase tracking-[0.22em] text-gold">01 / Follow the pull</p>
                <h2 className="mt-5 font-serif text-4xl leading-[0.98] tracking-[-0.03em] md:text-5xl">Choose the atmosphere you can almost feel.</h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-ink/62">The wheel is a map of fragrance families, not a test. The one you tap first is useful because it is instinctive.</p>
                {family ? (
                  <div className="mt-8 border-l-2 border-burgundy pl-5">
                    <p className="text-[0.58rem] uppercase tracking-[0.2em] text-ink/42">{family.family}</p>
                    <p className="mt-3 font-serif text-2xl leading-tight">{family.story}</p>
                    <p className="mt-3 text-xs uppercase leading-6 tracking-[0.14em] text-ink/48">{family.notes}</p>
                  </div>
                ) : (
                  <div className="mt-8 flex gap-3 border border-ink/12 bg-soft-white p-5 text-sm leading-6 text-ink/58">
                    <Info size={16} strokeWidth={1.4} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                    <p>Look for the scene, color or texture that makes you pause. Do not overthink it.</p>
                  </div>
                )}
                <button type="button" disabled={!family} onClick={() => setStep(1)} className="button button-dark mt-9 disabled:cursor-not-allowed disabled:opacity-35">Keep this signal <ArrowRight size={15} strokeWidth={1.4} /></button>
              </div>
            </div>
          )}

          {step === 1 && (
            <ChoiceStep title="Decide how close the scent should sit." eyebrow="02 / Shape the presence" description="Projection is part of personality. Choose how the fragrance meets the world around you." onBack={() => setStep(0)} onNext={() => setStep(2)} disabled={!presence}>
              <div className="grid gap-px bg-ink/12 md:grid-cols-3">
                {presenceOptions.map((option, index) => {
                  const active = option.id === presenceId;

                  return <button key={option.id} type="button" aria-pressed={active} onClick={() => setPresenceId(option.id)} className={`min-h-[18rem] p-7 text-left transition-colors md:p-10 ${active ? "bg-burgundy text-white" : "bg-soft-white hover:bg-blush"}`}><span className={`text-[0.58rem] tracking-[0.25em] ${active ? "text-rose" : "text-gold"}`}>0{index + 1}</span><span className="mt-14 block font-serif text-3xl leading-none md:text-4xl">{option.label}</span><span className={`mt-5 block text-sm leading-7 ${active ? "text-white/70" : "text-ink/58"}`}>{option.description}</span><span className={`mt-8 inline-flex items-center gap-2 text-[0.56rem] uppercase tracking-[0.2em] ${active ? "text-white" : "text-ink/45"}`}>{active ? <><Check size={14} strokeWidth={1.5} /> Selected</> : "Choose"}</span></button>;
                })}
              </div>
            </ChoiceStep>
          )}

          {step === 2 && (
            <ChoiceStep title="What should linger after you leave?" eyebrow="03 / Choose the trace" description="The base is the memory of a perfume. Choose the texture that feels most like your own kind of beautiful aftermath." onBack={() => setStep(1)} onNext={() => setStep(3)} disabled={!trace}>
              <div className="grid gap-px bg-ink/12 sm:grid-cols-2">
                {traceOptions.map((option, index) => {
                  const active = option.id === traceId;

                  return <button key={option.id} type="button" aria-pressed={active} onClick={() => setTraceId(option.id)} className={`min-h-[15rem] p-7 text-left transition-colors md:p-10 ${active ? "bg-blush" : "bg-soft-white hover:bg-soft-white/70"}`}><div className="flex items-start justify-between gap-5"><span className="text-[0.58rem] tracking-[0.25em] text-gold">0{index + 1}</span><span className={`inline-flex h-7 w-7 items-center justify-center rounded-full border ${active ? "border-burgundy bg-burgundy text-white" : "border-ink/15 text-transparent"}`}><Check size={13} strokeWidth={1.5} /></span></div><span className="mt-10 block font-serif text-3xl leading-none">{option.label}</span><span className="mt-4 block text-sm leading-7 text-ink/58">{option.description}</span><span className="mt-6 block text-[0.58rem] uppercase leading-5 tracking-[0.16em] text-ink/42">{option.notes}</span></button>;
                })}
              </div>
            </ChoiceStep>
          )}

          {step === 3 && family && presence && trace && (
            <div className="mt-12 grid gap-px bg-ink/12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-ink p-7 text-white md:p-12">
                <div className="flex flex-wrap items-start justify-between gap-7"><div><p className="text-[0.58rem] uppercase tracking-[0.22em] text-rose">Your signature direction</p><h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] md:text-7xl">{family.label}</h2></div><span className="border border-white/20 px-3 py-2 text-[0.56rem] uppercase tracking-[0.17em] text-white/55">{scentId}</span></div>
                <p className="mt-8 max-w-xl font-serif text-2xl leading-tight text-white/84">{family.story}</p>
                <p className="mt-6 max-w-xl text-sm leading-7 text-white/58">A {presence.cue} {family.family.toLowerCase()} with the afterglow of {trace.label.toLowerCase()}.</p>
                <div className="mt-10 grid grid-cols-3 gap-px bg-white/12">{["Top", "Heart", "Base"].map((label, index) => <div key={label} className="bg-white/5 p-4 md:p-5"><p className="text-[0.54rem] uppercase tracking-[0.2em] text-rose">{label}</p><p className="mt-3 font-serif text-lg text-white/88 md:text-xl">{family.pyramid[index]}</p></div>)}</div>
                <div className="mt-8 flex items-start gap-3 border-t border-white/12 pt-6"><Info size={16} strokeWidth={1.4} className="mt-0.5 shrink-0 text-rose" /><p className="text-xs leading-6 text-white/52">Perfume families are a helpful map, not a box. Skin, weather, dosage and materials will keep shaping the final scent.</p></div>
              </div>
              <div className="bg-soft-white p-7 md:p-12"><p className="text-[0.58rem] uppercase tracking-[0.22em] text-ink/45">The first brief</p><h3 className="mt-5 font-serif text-4xl leading-[0.98] tracking-[-0.03em]">A perfumer can take it from here.</h3><p className="mt-6 text-sm leading-7 text-ink/62">This first version turns an instinctive choice into a direction you can wear, edit and make more yours.</p><div className="mt-9 border-t border-ink/12 pt-6"><p className="text-[0.56rem] uppercase tracking-[0.2em] text-ink/42">Chosen trace</p><p className="mt-3 font-serif text-2xl">{trace.label}</p><p className="mt-3 text-xs uppercase leading-6 tracking-[0.14em] text-ink/45">{trace.notes}</p></div><button type="button" onClick={startOver} className="button button-dark mt-9 w-full">Try another direction <RotateCcw size={15} strokeWidth={1.4} /></button></div>
              <div className="col-span-full flex flex-wrap items-center justify-between gap-4 bg-porcelain pt-8"><button type="button" onClick={() => setStep(2)} className="inline-flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.2em] text-ink/55 hover:text-burgundy"><ArrowLeft size={15} strokeWidth={1.3} /> Edit the trace</button><span className="text-[0.6rem] uppercase tracking-[0.18em] text-ink/40">Keep this scent id: {scentId}</span></div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function ChoiceStep({ children, description, disabled, eyebrow, onBack, onNext, title }: { children: React.ReactNode; description: string; disabled: boolean; eyebrow: string; onBack: () => void; onNext: () => void; title: string }) {
  return <div className="mt-12"><div className="max-w-2xl"><p className="text-[0.58rem] uppercase tracking-[0.22em] text-gold">{eyebrow}</p><h2 className="mt-5 font-serif text-4xl leading-[0.98] tracking-[-0.03em] md:text-6xl">{title}</h2><p className="mt-6 max-w-xl text-sm leading-7 text-ink/62">{description}</p></div><div className="mt-10">{children}</div><div className="mt-9 flex flex-wrap items-center justify-between gap-4"><button type="button" onClick={onBack} className="inline-flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.2em] text-ink/55 hover:text-burgundy"><ArrowLeft size={15} strokeWidth={1.3} /> Back</button><button type="button" disabled={disabled} onClick={onNext} className="button button-dark disabled:cursor-not-allowed disabled:opacity-35">Continue <ArrowRight size={15} strokeWidth={1.4} /></button></div></div>;
}
