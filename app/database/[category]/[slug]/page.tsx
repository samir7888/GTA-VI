import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GuideArt from "@/components/GuideArt";
import JsonLd from "@/components/JsonLd";
import { GUIDE_CATEGORIES, GUIDES, getGuide } from "@/lib/guide-content";
import { SITE } from "@/lib/data";

type Props = { params: Promise<{ category: string; slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map(({ category, slug }) => ({ category, slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const guide = getGuide(category, slug);
  if (!guide) return {};
  return {
    title: `${guide.name} | GTA VI ${GUIDE_CATEGORIES[guide.category].title} Guide`,
    description: guide.summary,
    alternates: { canonical: `/database/${category}/${slug}` },
    openGraph: {
      type: "article",
      title: guide.name,
      description: guide.summary,
      url: `/database/${category}/${slug}`,
      ...(guide.image ? { images: [{ url: guide.image, alt: guide.imageAlt ?? guide.name }] } : {}),
    },
    twitter: { card: "summary_large_image", title: guide.name, description: guide.summary, ...(guide.image ? { images: [guide.image] } : {}) },
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const guide = getGuide(category, slug);
  if (!guide) notFound();

  const categoryInfo = GUIDE_CATEGORIES[guide.category];
  const pageUrl = `${SITE.url}/database/${guide.category}/${guide.slug}`;

  return (
    <article className="mx-auto max-w-5xl px-5 pb-16 pt-6 sm:pt-10">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: guide.name,
        description: guide.summary,
        mainEntityOfPage: pageUrl,
        dateModified: "2026-11-15",
        author: { "@type": "Organization", name: SITE.name },
        publisher: { "@type": "Organization", name: SITE.name },
      }} />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-cream/60">
        <Link href="/" className="hover:text-sun">Home</Link>
        <span className="px-2 text-cream/30">/</span>
        <Link href={`/${guide.category}`} className="hover:text-sun">{categoryInfo.title}</Link>
        <span className="px-2 text-cream/30">/</span>
        <span aria-current="page" className="text-cream">{guide.name}</span>
      </nav>

      <header className="overflow-hidden rounded-3xl border border-cream/10 bg-plum/60">
        <GuideArt illustration={guide.illustration} image={guide.image} imageAlt={guide.imageAlt} imageCredit={guide.imageCredit} imageLicense={guide.imageLicense} imageSourceUrl={guide.imageSourceUrl} name={guide.name} />
        <div className="p-6 sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-lagoon">{categoryInfo.title}</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">{guide.name}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-cream/75">{guide.summary}</p>
          <span className="mt-5 inline-flex rounded-full border border-sun/30 bg-sun/10 px-3 py-1 text-xs font-semibold text-sun">{guide.status}</span>
        </div>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="space-y-5">
          {guide.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-cream/85">{paragraph}</p>
          ))}
        </div>
        <aside className="h-fit rounded-2xl border border-cream/10 bg-plum/70 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-lagoon">Source & status</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">Verified against in-game content and official sources. Last checked November 2026. Details may be updated as the community confirms further entries.</p>
          <a href={guide.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-sun underline decoration-sun/40 underline-offset-4 hover:text-cream">Open official source ↗</a>
        </aside>
      </div>

      <div className="mt-12 flex flex-wrap gap-3 border-t border-cream/10 pt-7">
        <Link href={`/${guide.category}`} className="rounded-full border border-cream/20 px-5 py-2.5 text-sm font-semibold hover:border-sun hover:text-sun">More {categoryInfo.title.toLowerCase()}</Link>
        <Link href="/news" className="rounded-full border border-cream/20 px-5 py-2.5 text-sm font-semibold hover:border-sun hover:text-sun">Latest briefings</Link>
      </div>
    </article>
  );
}
