import type { Metadata } from "next";
import GuideCollection from "@/components/GuideCollection";
import { GUIDES } from "@/lib/guide-content";

export const metadata: Metadata = {
  title: "GTA VI Tips & Tricks",
  description: "Spoiler-light GTA VI preparation, exploration, and verification tips. Game-specific mechanics are labeled until confirmed.",
  alternates: { canonical: "/tips" },
};

export default function TipsPage() {
  return <GuideCollection category="tips" entries={GUIDES.filter((guide) => guide.category === "tips")} />;
}
