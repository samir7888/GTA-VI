import type { Metadata } from "next";
import GuideCollection from "@/components/GuideCollection";
import { GUIDES } from "@/lib/guide-content";

export const metadata: Metadata = {
  title: "GTA VI Characters: Jason, Lucia & Cast",
  description: "Meet Jason Duval, Lucia Caminos, and the supporting characters Rockstar has officially introduced for GTA VI.",
  alternates: { canonical: "/characters" },
};

export default function CharactersPage() {
  return <GuideCollection category="characters" entries={GUIDES.filter((guide) => guide.category === "characters")} />;
}
