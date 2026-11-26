import type { Metadata } from "next";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import GuideArt from "@/components/GuideArt";
import Newsletter from "@/components/Newsletter";
import JsonLd from "@/components/JsonLd";
import RegionMap from "@/components/RegionMap";
import { GUIDE_CATEGORIES, GUIDES, NEWS, type GuideCategory } from "@/lib/guide-content";
import { FAQ, GEAR, REGIONS, SITE } from "@/lib/data";

const HERO_IMAGE = "https://www.rockstargames.com/VI/_next/static/media/poster_full.0az_iud2g3y4j.jpg";
const FEATURED_GUIDE_SLUGS = ["jason-duval", "lucia-caminos", "cars-and-road-vehicles"];
const FEATURED_GUIDES = GUIDES.filter((guide) => FEATURED_GUIDE_SLUGS.includes(guide.slug));

export const metadata: Metadata = {
  title: "GTA VI Guide: The Leonida Field Atlas — Out Now on PS5 & Xbox",
  description: "GTA VI is out now. Explore all six regions of Leonida, meet Jason and Lucia, browse nearly 600 vehicles, 60+ weapons, gameplay tips, and cheat code rules.",
  openGraph: {
    title: "GTA VI Guide: The Leonida Field Atlas — Out Now",
    description: "GTA VI launched November 19, 2026 on PS5 and Xbox Series X|S. In-game verified guides for characters, vehicles, weapons, tips, and all six Leonida regions.",
    images: [{ url: HERO_IMAGE, alt: "Official Grand Theft Auto VI promotional artwork — Leonida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTA VI Guide: The Leonida Field Atlas — Out Now",
    description: "GTA VI launched November 19, 2026 on PS5 and Xbox Series X|S. In-game verified guides for characters, vehicles, weapons, tips, and all six Leonida regions.",
    images: [HERO_IMAGE],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "VideoGame", name: "Grand Theft Auto VI", publisher: { "@type": "Organization", name: "Rockstar Games" }, gamePlatform: ["PlayStation 5", "Xbox Series X|S"], datePublished: "2026-11-19", numberOfPlayers: { "@type": "QuantitativeValue", minValue: 1 }, description: "GTA VI is set in the fictional state of Leonida, following protagonists Jason Duval and Lucia Caminos across a 5-chapter, 91-mission campaign. Features nearly 600 vehicles, 60+ weapons, and six distinct regions." }} />
      <section className="relative isolate min-h-[620px] overflow-hidden sm:min-h-[700px]">
        <img
          src={HERO_IMAGE}
          alt="Official Grand Theft Auto VI promotional artwork"
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover object-[center_30%]"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-dusk via-dusk/75 to-dusk/15" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-dusk via-transparent to-dusk/25" />
        <div className="mx-auto flex min-h-[620px] max-w-6xl items-center px-5 py-20 sm:min-h-[700px]">
          <div className="sun max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-dusk/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lagoon backdrop-blur">
              <span aria-hidden="true" className="size-2 rounded-full bg-lagoon" />
              Out now — PS5 & Xbox Series X|S
            </p>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] sm:text-8xl">WELCOME TO<br />LEONIDA</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-xl">
              GTA VI is out. Explore all six regions, follow Jason and Lucia's story across 91 missions, and find all 281 Standout Vehicles hidden across Leonida.
            </p>
            <div className="mt-7 inline-flex flex-col gap-2 rounded-2xl border border-white/15 bg-dusk/65 p-4 backdrop-blur sm:flex-row sm:items-center sm:gap-5">
              <span className="text-sm font-semibold text-cream/75">GTA VI launched</span>
              <Countdown to={SITE.release} />
            </div>
            <p className="mt-3 text-sm text-cream/70">Thursday, November 19, 2026 · PlayStation 5 and Xbox Series X|S · 91 missions · 65+ hours</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/tracker" className="rounded-full bg-sun px-7 py-3 font-semibold text-dusk transition-colors hover:bg-cream">Start my checklist</Link>
              <Link href="#regions" className="rounded-full border border-cream/50 bg-dusk/30 px-7 py-3 backdrop-blur transition-colors hover:border-sun">Explore Leonida</Link>
              <Link href="/news" className="rounded-full border border-cream/50 bg-dusk/30 px-7 py-3 backdrop-blur transition-colors hover:border-sun">Read briefings</Link>
            </div>
            <a href="https://www.rockstargames.com/VI/media" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-xs text-cream/60 underline decoration-cream/30 underline-offset-4 hover:text-cream">
              Hero artwork: Rockstar Games
            </a>
          </div>
        </div>
      </section>
      <section id="regions" className="mx-auto max-w-6xl px-5 pt-16">
        <h2 className="font-display text-4xl">Six regions of Leonida</h2>
        <p className="mt-2 max-w-2xl text-cream/75">Explore Rockstar's fictional Florida. GTA VI spans six distinct regions — from the neon coast of Vice City to the swamps of Grassrivers and the wilderness of Mount Kalaga.</p>
        <RegionMap />
        <p className="mt-3 text-xs text-cream/50">Illustrative layout only; it is not an official or geographically accurate map.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map((r) => (
            <li key={r.slug}><Link href={`/region/${r.slug}`} className="block h-full rounded-2xl p-6 transition-transform hover:-translate-y-1" style={{ background: `linear-gradient(135deg, ${r.from}, ${r.to})` }}>
              <h3 className="font-display text-3xl text-dusk">{r.name}</h3>
              <p className="mt-1 font-semibold text-dusk/80">Inspired by {r.inspiredBy}</p>
              <p className="mt-3 text-dusk/90">{r.vibe}</p></Link></li>
          ))}
        </ul>
      </section>
      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lagoon">Official imagery · sourced guides</p>
            <h2 className="mt-2 font-display text-4xl">A field guide to Leonida</h2>
            <p className="mt-2 max-w-2xl text-cream/70">Verified in-game character profiles, confirmed vehicle models, weapon rosters, and gameplay tips — with unknown details clearly called out.</p>
          </div>
          <a href="https://www.rockstargames.com/VI/media" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-sun hover:text-cream">Rockstar media →</a>
        </div>
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {FEATURED_GUIDES.map((guide) => (
            <li key={guide.slug} className="overflow-hidden rounded-2xl border border-cream/10 bg-plum/70 transition-colors hover:border-sun/50">
              <GuideArt
                illustration={guide.illustration}
                image={guide.image}
                imageAlt={guide.imageAlt}
                imageCredit={guide.imageCredit}
                imageLicense={guide.imageLicense}
                imageSourceUrl={guide.imageSourceUrl ?? guide.sourceUrl}
                name={guide.name}
              />
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-lagoon">{GUIDE_CATEGORIES[guide.category].title}</p>
                <h3 className="mt-2 font-display text-2xl">{guide.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{guide.summary}</p>
                <Link href={`/database/${guide.category}/${guide.slug}`} className="mt-4 inline-block text-sm font-semibold text-sun hover:text-cream">Open guide →</Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lagoon">Built for explorers</p>
            <h2 className="mt-2 font-display text-4xl">Browse the field guides</h2>
            <p className="mt-2 max-w-2xl text-cream/70">Characters, vehicles (nearly 600), weapons (60+), and in-game verified tips — with unknowns and unverified details clearly labeled.</p>
          </div>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(GUIDE_CATEGORIES) as GuideCategory[]).map((category) => (
            <li key={category}>
              <Link href={`/${category}`} className="group block h-full rounded-2xl border border-cream/10 bg-plum/70 p-5 transition hover:border-sun/50">
                <h3 className="font-display text-2xl group-hover:text-sun">{GUIDE_CATEGORIES[category].title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{GUIDE_CATEGORIES[category].description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-sun">Browse guides →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lagoon">Source-linked updates</p>
            <h2 className="mt-2 font-display text-4xl">Latest briefings</h2>
          </div>
          <Link href="/news" className="text-sm font-semibold text-sun hover:text-cream">All briefings →</Link>
        </div>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {NEWS.slice(0, 3).map((article) => (
            <li key={article.slug}>
              <Link href={`/news/${article.slug}`} className="group block h-full rounded-2xl border border-cream/10 bg-plum/70 p-5 transition hover:border-sun/50 sm:p-6">
                <div className="flex justify-between gap-3 text-xs font-bold uppercase tracking-wider">
                  <span className="text-lagoon">{article.category}</span>
                  <time dateTime={article.date} className="text-cream/45">{article.date}</time>
                </div>
                <h3 className="mt-4 font-display text-2xl leading-tight group-hover:text-sun">{article.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{article.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl bg-plum p-8">
          <h2 className="font-display text-3xl">Your Leonida checklist</h2>
          <p className="mt-2 max-w-xl text-cream/75">Track regions, 91 story missions, Standout Vehicles, and activities. Saves in your browser. If you need gear:</p>
          <ul className="mt-4 flex flex-wrap gap-3">{GEAR.map((g) => <li key={g.label}><a rel="sponsored nofollow noopener" target="_blank" href={g.href} className="rounded-full border border-lagoon px-5 py-2 text-lagoon hover:bg-lagoon hover:text-dusk">{g.label}</a></li>)}</ul>
          <p className="mt-3 text-xs text-cream/50">Affiliate links: we may earn a commission at no cost to you.</p>
        </div>
      </section>
      <section id="faq" className="mx-auto mt-16 max-w-3xl px-5">
        <h2 className="font-display text-4xl">GTA VI — answered</h2>
        <div className="mt-6 space-y-3">{FAQ.map((f) => <details key={f.q} className="rounded-xl bg-plum p-5"><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="mt-3 text-cream/85">{f.a}</p></details>)}</div>
      </section>
      <section className="mx-auto mt-16 max-w-3xl px-5">
        <div className="rounded-3xl border border-cream/10 bg-plum p-6 shadow-xl shadow-black/10 sm:p-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-lagoon">Post-launch guide updates</p>
          <h2 className="font-display text-3xl sm:text-4xl">Stay up with Leonida</h2>
          <p className="mb-6 mt-2 max-w-xl text-cream/75">Get one email when new guides, Standout Vehicle lists, and cheat code verifications go live.</p>
          <Newsletter />
        </div>
      </section>
    </>
  );
}
