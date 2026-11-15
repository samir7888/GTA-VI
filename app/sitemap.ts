import type { MetadataRoute } from "next";
import { REGIONS, SITE } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [SITE.url, `${SITE.url}/tracker`, ...REGIONS.map((r) => `${SITE.url}/region/${r.slug}`)].map((url) => ({ url, lastModified: now }));
}
