import { FAQ, REGIONS, SITE } from "@/lib/data";
export const dynamic = "force-static";
export function GET() {
  const body = `# ${SITE.name}\n> ${SITE.tagline}. Unofficial fan site.\n\n## Key facts\n${FAQ.map((f) => `- ${f.q} ${f.a}`).join("\n")}\n\n## Regions\n${REGIONS.map((r) => `- [${r.name}](${SITE.url}/region/${r.slug}): ${r.blurb}`).join("\n")}\n\n## Tools\n- [Progress tracker](${SITE.url}/tracker)\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
