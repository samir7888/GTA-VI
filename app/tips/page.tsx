import type { Metadata } from "next";
import GuideCollection from "@/components/GuideCollection";
import { GUIDES } from "@/lib/guide-content";

export const metadata: Metadata = {
  title: "GTA VI Tips & Tricks: Focus Mode, Criminal Profiles, Heists & More",
  description: "In-game verified GTA VI tips — master Focus mode (L3+R3), understand Criminal Profiles, plan heists, build stats, manage cheats safely, and explore all six regions of Leonida.",
  alternates: { canonical: "/tips" },
};

export default function TipsPage() {
  return <GuideCollection category="tips" entries={GUIDES.filter((guide) => guide.category === "tips")} />;
}
