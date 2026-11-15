import type { Metadata } from "next";
import GuideCollection from "@/components/GuideCollection";
import { GUIDES } from "@/lib/guide-content";

export const metadata: Metadata = {
  title: "GTA VI Weapons Guide",
  description: "A source-aware GTA VI weapons guide. Exact weapon names, stats, and locations are only added when verified.",
  alternates: { canonical: "/weapons" },
};

export default function WeaponsPage() {
  return <GuideCollection category="weapons" entries={GUIDES.filter((guide) => guide.category === "weapons")} />;
}
