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
  metadataBase: new URL("https://essenceisle.com"),
  title: "Essence Isle | Skinglow Rosée",
  description:
    "Meet Skinglow Rosée, the first fragrance from Essence Isle—a glowing floral skin scent, and an invitation to design a scent that is entirely your own.",
  openGraph: {
    title: "Skinglow Rosée by Essence Isle",
    description: "A glowing floral skin scent. Fresh, feminine, creamy and radiant.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Skinglow Rosée by Essence Isle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skinglow Rosée by Essence Isle",
    description: "A glowing floral skin scent. Fresh, feminine, creamy and radiant.",
    images: ["/og.png"],
  },
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
