import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Anton, Outfit } from "next/font/google";
import Link from "next/link";
import { SITE } from "@/lib/data";
import JsonLd from "@/components/JsonLd";
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
export const viewport: Viewport = { themeColor: "#1a0b2e" };
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "GTA VI Tracker, Map Guide and Countdown", template: "%s | GTA VI" },
  description: "Unofficial GTA VI companion: launch countdown (Nov 19, 2026), Leonida region guides, and a progress checklist that saves your streak.",
  openGraph: { type: "website", siteName: SITE.name, title: "GTA VI Tracker and Leonida Map Guide", description: "Countdown, region guides and a progress checklist for GTA VI." },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${outfit.variable}`}>
      <body>
        <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url, description: SITE.tagline }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-3">Skip to content</a>
        <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link href="/" className="font-display text-2xl text-sun">GTA VI</Link>
          <nav aria-label="Main" className="flex gap-5 text-sm"><Link href="/tracker" className="hover:text-sun">Tracker</Link><Link href="/#regions" className="hover:text-sun">Regions</Link><Link href="/#faq" className="hover:text-sun">FAQ</Link></nav>
        </header>
        <main id="main">{children}</main>
        <footer className="mx-auto mt-20 max-w-6xl px-5 pb-10 text-sm text-cream/60">This is an unofficial GTA VI fan project. Not affiliated with or endorsed by Rockstar Games or Take-Two Interactive. Grand Theft Auto is a trademark of Take-Two Interactive.</footer>
      </body>
    </html>
  );
}
