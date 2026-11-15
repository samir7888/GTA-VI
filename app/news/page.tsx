import type { Metadata } from "next";
import Link from "next/link";
import { NEWS } from "@/lib/guide-content";

export const metadata: Metadata = {
  title: "GTA VI News & Confirmed Updates",
  description: "Source-linked GTA VI briefings on official announcements, characters, launch details, and what remains unconfirmed.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:pt-12">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-lagoon">Source-led briefings</p>
      <h1 className="mt-3 font-display text-5xl sm:text-6xl">GTA VI News</h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-cream/70">A static editorial roundup of published facts and open questions. These are briefings, not breaking-news claims; each item links to its primary source.</p>
      <ul className="mt-9 grid gap-5 md:grid-cols-2">
        {NEWS.map((article) => (
          <li key={article.slug}>
            <Link href={`/news/${article.slug}`} className="group flex h-full flex-col rounded-2xl border border-cream/10 bg-plum/70 p-6 transition hover:border-sun/50 sm:p-8">
              <div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-wider">
                <span className="text-lagoon">{article.category}</span>
                <time dateTime={article.date} className="text-cream/45">{article.date}</time>
              </div>
              <h2 className="mt-5 font-display text-3xl leading-tight group-hover:text-sun">{article.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-cream/70">{article.summary}</p>
              <span className="mt-6 text-sm font-semibold text-sun">Read briefing <span aria-hidden="true">→</span></span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-xs text-cream/45">Briefings are dated November 15, 2026 and should be rechecked against linked official sources before republishing or relying on time-sensitive details.</p>
    </section>
  );
}
