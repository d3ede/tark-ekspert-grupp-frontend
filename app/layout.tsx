import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin", "cyrillic"] });
const serif = Lora({ variable: "--font-serif", subsets: ["latin", "cyrillic"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tarkekspertgrupp.ee"),
  title: { default: "Tark Ekspert Grupp OÜ", template: "%s — Tark Ekspert Grupp OÜ" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="et-EE" data-scroll-behavior="smooth" className={`${sans.variable} ${serif.variable}`}><body>{children}<Analytics/><SpeedInsights/></body></html>;
}
