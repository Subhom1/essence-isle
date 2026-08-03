"use client";

import { ArrowRight, Check } from "lucide-react";
import { FormEvent, useState } from "react";

const chapters = [
  {
    id: "opening",
    number: "01",
    question: "How should your scent enter the room?",
    options: ["Bright & sparkling", "Soft & inviting", "Cool & composed"],
  },
  {
    id: "heart",
    number: "02",
    question: "What should live at its heart?",
    options: ["A dewy floral", "A vivid memory", "A quiet contrast"],
  },
  {
    id: "trail",
    number: "03",
    question: "How should it be remembered?",
    options: ["Warm on skin", "Mysterious & woody", "Clean & weightless"],
  },
];

export default function AIScentFinder() {
  const [choices, setChoices] = useState<Record<string, string>>({
    opening: chapters[0].options[0],
    heart: chapters[1].options[0],
    trail: chapters[2].options[0],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="atelier" className="section-pad overflow-hidden bg-porcelain">
      <div className="site-shell">
        <div className="grid gap-12 border-b border-ink/12 pb-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="eyebrow mb-6">The Signature Atelier</p>
            <h2 className="max-w-3xl font-serif text-5xl leading-[0.96] tracking-[-0.04em] text-ink md:text-7xl">
              Design your scent.
              <span className="block italic text-burgundy">Define your presence.</span>
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-ink/62">
              Your memories, contrasts and instincts become the brief. We translate them into a
              fragrance direction that belongs to you—and only you.
            </p>
            <p className="mt-5 font-serif text-xl italic text-ink">The smell lingers. The uniqueness is yours.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 grid gap-px bg-ink/12 lg:grid-cols-3">
          {chapters.map((chapter) => (
            <fieldset key={chapter.id} className="min-w-0 bg-porcelain p-7 md:p-10">
              <legend className="sr-only">{chapter.question}</legend>
              <span className="text-[0.58rem] tracking-[0.25em] text-gold">{chapter.number}</span>
              <h3 className="mt-5 min-h-14 max-w-xs font-serif text-2xl leading-tight text-ink">{chapter.question}</h3>
              <div className="mt-8 space-y-2">
                {chapter.options.map((option) => {
                  const active = choices[chapter.id] === option;
                  return (
                    <label
                      key={option}
                      className={`group flex cursor-pointer items-center justify-between border px-4 py-4 text-xs uppercase tracking-[0.14em] transition-colors ${
                        active ? "border-burgundy bg-burgundy text-white" : "border-ink/12 text-ink/60 hover:border-ink/35"
                      }`}
                    >
                      <input
                        type="radio"
                        name={chapter.id}
                        value={option}
                        checked={active}
                        onChange={() => {
                          setChoices((current) => ({ ...current, [chapter.id]: option }));
                          setSubmitted(false);
                        }}
                        className="sr-only"
                      />
                      {option}
                      {active && <Check size={14} strokeWidth={1.5} aria-hidden="true" />}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}

          <div className="bg-blush p-7 lg:col-span-3 md:p-10">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[0.58rem] uppercase tracking-[0.22em] text-ink/45">Your first direction</p>
                <p className="mt-3 font-serif text-2xl text-ink md:text-3xl">
                  {choices.opening} <span className="text-gold">/</span> {choices.heart} <span className="text-gold">/</span> {choices.trail}
                </p>
              </div>
              <button type="submit" className="button button-dark shrink-0">
                Begin my scent brief <ArrowRight size={15} strokeWidth={1.4} />
              </button>
            </div>
            <p aria-live="polite" className={`mt-5 text-sm text-burgundy ${submitted ? "block" : "hidden"}`}>
              Your direction is ready. Private scent consultations are opening soon.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
