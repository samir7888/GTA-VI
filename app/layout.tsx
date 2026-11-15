import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Anton, Outfit } from "next/font/google";
import Link from "next/link";
import { SITE } from "@/lib/data";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_SOCIAL_IMAGE } from "@/lib/guide-content";
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
export const viewport: Viewport = { themeColor: "#1a0b2e" };
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: "GTA VI Guide",
  title: { default: "GTA VI Guide: Leonida, Characters, Vehicles & More", template: "%s | GTA VI Guide" },
  description: "Explore Leonida with source-linked GTA VI character, vehicle, weapon, and spoiler-light tip guides, news briefings, and a progress tracker.",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "GTA VI Guide: Explore Leonida",
    description: "Source-linked character, vehicle, weapon, region, and tip guides for GTA VI.",
    url: SITE.url,
    images: [{ url: DEFAULT_SOCIAL_IMAGE, alt: "GTA VI character artwork from Rockstar Games" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTA VI Guide: Explore Leonida",
    description: "Source-linked character, vehicle, weapon, region, and tip guides for GTA VI.",
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  alternates: { canonical: "/" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${outfit.variable}`}>
      <body>
        <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url, description: SITE.tagline }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-3">Skip to content</a>
        <header className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="font-display text-2xl text-sun">GTA VI</Link>
          <nav aria-label="Main" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link href="/#regions" className="hover:text-sun">Regions</Link>
            <Link href="/characters" className="hover:text-sun">Characters</Link>
            <Link href="/vehicles" className="hover:text-sun">Vehicles</Link>
            <Link href="/weapons" className="hover:text-sun">Weapons</Link>
            <Link href="/tips" className="hover:text-sun">Tips</Link>
            <Link href="/news" className="hover:text-sun">News</Link>
            <Link href="/tracker" className="hover:text-sun">Tracker</Link>
            <Link href="/#faq" className="hover:text-sun">FAQ</Link>
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="mx-auto mt-20 max-w-6xl px-5 pb-10 text-sm text-cream/60">This is an unofficial GTA VI fan project. Not affiliated with or endorsed by Rockstar Games or Take-Two Interactive. Grand Theft Auto is a trademark of Take-Two Interactive.</footer>
      </body>
    </html>
  );
}
