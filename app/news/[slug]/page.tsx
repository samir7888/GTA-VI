import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_SOCIAL_IMAGE, getNewsArticle, NEWS } from "@/lib/guide-content";
import { SITE } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return NEWS.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      url: `/news/${article.slug}`,
      images: [{ url: DEFAULT_SOCIAL_IMAGE, alt: "GTA VI character artwork from Rockstar Games" }],
    },
    twitter: { card: "summary_large_image", title: article.title, description: article.summary, images: [DEFAULT_SOCIAL_IMAGE] },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) notFound();

  const pageUrl = `${SITE.url}/news/${article.slug}`;
  return (
    <article className="mx-auto max-w-4xl px-5 pb-16 pt-6 sm:pt-10">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: article.title,
        description: article.summary,
        datePublished: `${article.date}T12:00:00Z`,
        dateModified: `${article.date}T12:00:00Z`,
        mainEntityOfPage: pageUrl,
        author: { "@type": "Organization", name: SITE.name },
        publisher: { "@type": "Organization", name: SITE.name },
      }} />
      <nav aria-label="Breadcrumb" className="mb-7 text-sm text-cream/60">
        <Link href="/" className="hover:text-sun">Home</Link>
        <span className="px-2 text-cream/30">/</span>
        <Link href="/news" className="hover:text-sun">News</Link>
      </nav>
      <header className="border-b border-cream/10 pb-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-lagoon">{article.category}</p>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">{article.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-cream/70">{article.summary}</p>
        <time dateTime={article.date} className="mt-5 block text-sm text-cream/45">Published {article.date}</time>
      </header>
      <div className="mt-8 space-y-6">
        {article.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-relaxed text-cream/85">{paragraph}</p>
        ))}
      </div>
      <aside className="mt-9 rounded-2xl border border-cream/10 bg-plum/70 p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-lagoon">Primary source</p>
        <p className="mt-2 text-sm leading-relaxed text-cream/65">This briefing summarizes official material and marks unknowns explicitly. Follow the source for the latest announcement.</p>
        <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-sun underline decoration-sun/40 underline-offset-4 hover:text-cream">Read the Rockstar Games source ↗</a>
      </aside>
      <Link href="/news" className="mt-8 inline-flex rounded-full border border-cream/20 px-5 py-2.5 text-sm font-semibold hover:border-sun hover:text-sun">← All briefings</Link>
    </article>
  );
}
