"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#rosee", label: "Skinglow Rosée" },
  { href: "#notes", label: "The notes" },
  { href: "#atelier", label: "Design your scent" },
  { href: "#philosophy", label: "Our philosophy" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-ink/10 backdrop-blur-xl transition-all duration-500 ${
        scrolled || open
          ? "bg-porcelain/96 py-4"
          : "bg-porcelain/78 py-5"
      }`}
    >
      <div className="site-shell flex items-center justify-between">
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {links.slice(0, 2).map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#top"
          aria-label="Essence Isle home"
          className="relative whitespace-nowrap text-left text-ink md:absolute md:left-1/2 md:-translate-x-1/2 md:text-center"
        >
          <span className="block font-essence text-[1.05rem] tracking-[0.22em] md:text-[1.22rem]">
            ESSENCE ISLE
          </span>
          <span className="nav-subtitle mt-0.5 hidden text-[0.5rem] uppercase tracking-[0.34em] text-ink/65 sm:block">
            The private scent atelier
          </span>
        </Link>

        <nav aria-label="Secondary navigation" className="hidden items-center gap-8 md:flex">
          {links.slice(2).map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center border border-ink/15 text-ink transition-colors hover:border-ink/40 md:hidden"
        >
          {open ? <X size={18} strokeWidth={1.3} /> : <Menu size={19} strokeWidth={1.3} />}
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-full h-[calc(100vh-73px)] bg-porcelain transition-all duration-500 md:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="site-shell flex h-full flex-col justify-center gap-7 pb-24">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="mobile-nav-link flex items-baseline gap-5 border-b border-ink/10 pb-5 text-3xl text-ink"
            >
              <span className="text-[0.58rem] tracking-[0.25em] text-gold">0{index + 1}</span>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
