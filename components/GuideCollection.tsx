import Link from "next/link";
import { GUIDE_CATEGORIES, type GuideCategory, type GuideEntry } from "@/lib/guide-content";
import GuideArt from "@/components/GuideArt";

export default function GuideCollection({ category, entries }: { category: GuideCategory; entries: GuideEntry[] }) {
  const info = GUIDE_CATEGORIES[category];
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:pt-12">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-lagoon">GTA VI field guide</p>
      <h1 className="mt-3 font-display text-5xl sm:text-6xl">{info.title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-cream/70">{info.description}</p>
      <div className="mt-8 flex flex-wrap gap-2" aria-label="Guide categories">
        {(Object.keys(GUIDE_CATEGORIES) as GuideCategory[]).map((key) => (
          <Link key={key} href={`/${key}`} aria-current={key === category ? "page" : undefined} className={`rounded-full border px-4 py-2 text-sm capitalize transition-colors ${key === category ? "border-sun bg-sun text-dusk" : "border-cream/15 text-cream/75 hover:border-sun/60 hover:text-sun"}`}>
            {GUIDE_CATEGORIES[key].title}
          </Link>
        ))}
        <Link href="/news" className="rounded-full border border-cream/15 px-4 py-2 text-sm text-cream/75 transition-colors hover:border-sun/60 hover:text-sun">News</Link>
      </div>
      <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <li key={entry.slug}>
            <Link href={`/database/${entry.category}/${entry.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream/10 bg-plum/70 transition hover:-translate-y-1 hover:border-sun/40">
              <GuideArt illustration={entry.illustration} image={entry.image} imageAlt={entry.imageAlt} imageCredit={entry.imageCredit} imageLicense={entry.imageLicense} imageSourceUrl={entry.imageSourceUrl} name={entry.name} />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-lagoon">{entry.status}</span>
                <h2 className="mt-2 font-display text-2xl group-hover:text-sun">{entry.name}</h2>
                <p className="mt-2 flex-1 leading-relaxed text-cream/70">{entry.summary}</p>
                <span className="mt-5 text-sm font-semibold text-sun">Read guide <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-xs leading-relaxed text-cream/45">Images link to their source and license. Illustrative images are not verified GTA VI assets.</p>
    </section>
  );
}
