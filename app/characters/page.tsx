import type { Metadata } from "next";
import GuideCollection from "@/components/GuideCollection";
import { GUIDES } from "@/lib/guide-content";

export const metadata: Metadata = {
  title: "GTA VI Characters: Jason, Lucia & the Full Cast",
  description: "Meet Jason Duval, Lucia Caminos, and the full supporting cast of GTA VI — Boobie Ike, Dre'Quan Priest, Raul Bautista, Brian Heder, Cal Hampton, and Real Dimez. All confirmed by Rockstar.",
  alternates: { canonical: "/characters" },
};

export default function CharactersPage() {
  return <GuideCollection category="characters" entries={GUIDES.filter((guide) => guide.category === "characters")} />;
}
