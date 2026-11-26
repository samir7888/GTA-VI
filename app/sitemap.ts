import type { MetadataRoute } from "next";
import { REGIONS, SITE } from "@/lib/data";
import { GUIDES, NEWS } from "@/lib/guide-content";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls = [
    SITE.url,
    `${SITE.url}/tracker`,
    `${SITE.url}/news`,
    `${SITE.url}/characters`,
    `${SITE.url}/vehicles`,
    `${SITE.url}/weapons`,
    `${SITE.url}/tips`,
    `${SITE.url}/cheats`,
    ...REGIONS.map((region) => `${SITE.url}/region/${region.slug}`),
    ...GUIDES.map((guide) => `${SITE.url}/database/${guide.category}/${guide.slug}`),
    ...NEWS.map((article) => `${SITE.url}/news/${article.slug}`),
  ];
  return urls.map((url) => ({ url, lastModified: now }));
}
