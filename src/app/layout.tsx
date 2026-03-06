import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";

const essenceFont = localFont({
  src: "../../public/fonts/ESSENCEISLE-Montserrat.otf",
  variable: "--font-essence",
});

const isleLuxFont = localFont({
  src: "../../public/fonts/ISLE-Lux-Classic.otf",
  variable: "--font-isle-lux",
});

export const metadata: Metadata = {
  title: "Essence Isle | Discover Your Aura",
  description: "A hidden realm where every fragrance reveals a different aura. Niche perfumes focusing on individuality, mystery, and presence.",
  other: {
    "p:domain_verify": "bed9382e26d50c302c3420a4872dcf0c",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${essenceFont.variable} ${isleLuxFont.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
