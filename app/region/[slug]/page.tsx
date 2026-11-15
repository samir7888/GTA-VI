import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OFFICIAL_GAME_SOURCE, REGIONS, SITE } from "@/lib/data";
import JsonLd from "@/components/JsonLd";
type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export async function generateStaticParams() { return REGIONS.map((r) => ({ slug: r.slug })); }
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const r = REGIONS.find((x) => x.slug === slug); if (!r) return {};
  return { title: `${r.name} in GTA VI: what we know`, description: `${r.name} is a confirmed GTA VI region inspired by ${r.inspiredBy}. ${r.blurb}`, alternates: { canonical: `/region/${r.slug}` } };
}
export default async function Region({ params }: P) {
  const { slug } = await params;
  const r = REGIONS.find((x) => x.slug === slug); if (!r) notFound();
  return (
    <article className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:pt-10">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url }, { "@type": "ListItem", position: 2, name: r.name, item: `${SITE.url}/region/${r.slug}` }] }} />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-cream/60">
        <Link href="/" className="transition-colors hover:text-sun">Home</Link>
        <span className="px-2 text-cream/30">/</span>
        <Link href="/#regions" className="transition-colors hover:text-sun">Regions</Link>
        <span className="px-2 text-cream/30">/</span>
        <span aria-current="page" className="text-cream">{r.name}</span>
      </nav>
      <header className="overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12" style={{ background: `linear-gradient(135deg, ${r.from}, ${r.to})` }}>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-dusk/70">GTA VI region guide</p>
        <div className="mt-5 grid gap-8 md:grid-cols-[minmax(0,1fr)_16rem] md:items-end">
          <div>
            <h1 className="font-display text-5xl leading-tight text-dusk sm:text-6xl lg:text-7xl">{r.name}</h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-dusk/80">{r.blurb}</p>
          </div>
          <div className="rounded-2xl border border-dusk/10 bg-dusk/10 p-5 text-dusk">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-dusk/60">Inspired by</p>
            <p className="mt-2 font-display text-2xl">{r.inspiredBy}</p>
            <p className="mt-4 border-t border-dusk/15 pt-4 text-sm leading-relaxed text-dusk/75">{r.vibe}</p>
          </div>
        </div>
      </header>

      <aside aria-label="Sources and verification" className="mt-4 flex flex-col gap-3 rounded-2xl border border-cream/10 bg-plum/50 p-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div>
          <p className="font-semibold text-cream">Fan-made guide · details can change</p>
          <p className="mt-1 text-cream/60">Activity notes are editorial suggestions, not individually confirmed features.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-cream/60">
          <a href={OFFICIAL_GAME_SOURCE.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-lagoon underline decoration-lagoon/40 underline-offset-4 hover:text-cream">
            Official game reference
          </a>
          <span>Checked {OFFICIAL_GAME_SOURCE.checkedAt}</span>
        </div>
      </aside>

      <section aria-labelledby="things-to-do" className="mt-14 sm:mt-16">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-lagoon">Explore the region</p>
          <h2 id="things-to-do" className="mt-2 font-display text-3xl sm:text-4xl">Things to do in {r.name}</h2>
          <p className="mt-3 leading-relaxed text-cream/70">A starting list of places and activities to look out for as you explore. Suggestions are based on the details currently available.</p>
        </div>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {r.thingsToDo.map((thing, index) => (
            <li key={thing} className="flex gap-4 rounded-2xl border border-cream/10 bg-plum/70 p-5 sm:p-6">
              <span aria-hidden="true" className="font-display text-xl text-sun">0{index + 1}</span>
              <p className="leading-relaxed text-cream/90">{thing}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Missions and cheat codes" className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2">
        <div className="rounded-2xl border border-cream/10 bg-plum p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-lagoon">Region intel</p>
          <h2 className="mt-3 font-display text-3xl">Missions</h2>
          <p className="mt-3 leading-relaxed text-cream/70">No verified mission list is available for {r.name} yet. We’ll add confirmed mission names and details when they’re released.</p>
          <span className="mt-5 inline-flex rounded-full border border-sun/30 bg-sun/10 px-3 py-1 text-xs font-semibold text-sun">Not confirmed</span>
        </div>
        <div className="rounded-2xl border border-cream/10 bg-plum p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-lagoon">Quick reference</p>
          <h2 className="mt-3 font-display text-3xl">Cheat codes</h2>
          <p className="mt-3 leading-relaxed text-cream/70">There are no verified cheat codes for {r.name} to list yet. Unconfirmed codes and rumors are intentionally left out.</p>
          <span className="mt-5 inline-flex rounded-full border border-sun/30 bg-sun/10 px-3 py-1 text-xs font-semibold text-sun">None verified</span>
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-cream/10 bg-plum/60 p-6 sm:mt-16 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-lagoon">Make it yours</p>
            <h2 className="mt-2 font-display text-3xl">Track your {r.name} trip</h2>
            <p className="mt-2 text-cream/70">Add this region to your personal GTA VI checklist.</p>
          </div>
          <Link href="/tracker" className="inline-flex shrink-0 justify-center rounded-full bg-sun px-7 py-3 font-semibold text-dusk transition-colors hover:bg-cream">Open my checklist</Link>
        </div>
      </section>

      <section className="mt-14 sm:mt-16" aria-labelledby="other-regions">
        <h2 id="other-regions" className="font-display text-3xl sm:text-4xl">Explore other regions</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.filter((x) => x.slug !== r.slug).map((x) => (
            <li key={x.slug}>
              <Link href={`/region/${x.slug}`} className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-cream/10 bg-plum/70 p-5 transition-colors hover:border-sun/50">
                <span>
                  <span className="block font-display text-xl group-hover:text-sun">{x.name}</span>
                  <span className="mt-1 block text-sm text-cream/60">{x.vibe}</span>
                </span>
                <span aria-hidden="true" className="text-xl text-sun">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
