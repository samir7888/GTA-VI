import Link from "next/link";
import Countdown from "@/components/Countdown";
import Newsletter from "@/components/Newsletter";
import JsonLd from "@/components/JsonLd";
import RegionMap from "@/components/RegionMap";
import { FAQ, GEAR, REGIONS, SITE } from "@/lib/data";
export default function Home() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "VideoGame", name: "Grand Theft Auto VI", publisher: { "@type": "Organization", name: "Rockstar Games" }, gamePlatform: ["PlayStation 5", "Xbox Series X|S"], datePublished: "2026-11-19" }} />
      <section className="relative overflow-hidden px-5 pb-16 pt-10" style={{ background: "radial-gradient(ellipse at 50% 100%, #ff3d81 0%, #8a2a74 35%, transparent 70%)" }}>
        <div className="sun mx-auto max-w-6xl">
          <h1 className="font-display text-5xl leading-[1.05] sm:text-7xl">GTA VI launches in</h1>
          <div className="mt-6"><Countdown to={SITE.release} /></div>
          <p className="mt-6 max-w-xl text-lg text-cream/85">Thursday, November 19, 2026 on PS5 and Xbox Series X|S. Track your progress, plan your first hours in Leonida, and keep a daily streak.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/tracker" className="rounded-full bg-sun px-7 py-3 font-semibold text-dusk hover:bg-cream transition-colors">Start my checklist</Link>
            <Link href="#regions" className="rounded-full border border-cream/40 px-7 py-3 hover:border-sun">Explore the six regions</Link>
          </div>
        </div>
      </section>
      <section id="regions" className="mx-auto max-w-6xl px-5 pt-16">
        <h2 className="font-display text-4xl">Six regions of Leonida</h2>
        <p className="mt-2 max-w-2xl text-cream/75">Explore Rockstar's fictional Florida. Choose a region on the schematic overview or browse the guides below.</p>
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
      <section className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl bg-plum p-8">
          <h2 className="font-display text-3xl">Get ready checklist</h2>
          <p className="mt-2 max-w-xl text-cream/75">Pre-load, free up storage and charge a second controller. If you need gear:</p>
          <ul className="mt-4 flex flex-wrap gap-3">{GEAR.map((g) => <li key={g.label}><a rel="sponsored nofollow noopener" target="_blank" href={g.href} className="rounded-full border border-lagoon px-5 py-2 text-lagoon hover:bg-lagoon hover:text-dusk">{g.label}</a></li>)}</ul>
          <p className="mt-3 text-xs text-cream/50">Affiliate links: we may earn a commission at no cost to you.</p>
        </div>
      </section>
      <section id="faq" className="mx-auto mt-16 max-w-3xl px-5">
        <h2 className="font-display text-4xl">GTA VI questions, answered</h2>
        <div className="mt-6 space-y-3">{FAQ.map((f) => <details key={f.q} className="rounded-xl bg-plum p-5"><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="mt-3 text-cream/85">{f.a}</p></details>)}</div>
      </section>
      <section className="mx-auto mt-16 max-w-3xl px-5">
        <div className="rounded-3xl border border-cream/10 bg-plum p-6 shadow-xl shadow-black/10 sm:p-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-lagoon">Launch week updates</p>
          <h2 className="font-display text-3xl sm:text-4xl">Don't miss launch week</h2>
          <p className="mb-6 mt-2 max-w-xl text-cream/75">One email when new guides and collectible lists go live.</p>
          <Newsletter />
        </div>
      </section>
    </>
  );
}
