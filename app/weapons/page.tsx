import type { Metadata } from "next";
import GuideCollection from "@/components/GuideCollection";
import { GUIDES } from "@/lib/guide-content";

export const metadata: Metadata = {
  title: "GTA VI Weapons Guide: Pistols, Shotguns, Rifles & More",
  description: "GTA VI has over 60 confirmed weapons — Girardi pistols, Hawk & Little revolvers, Shrewsbury shotguns, SMGs, sniper rifles, melee weapons, and throwables. The game uses a physical loadout system with Ammu-Nation locker storage.",
  alternates: { canonical: "/weapons" },
};

export default function WeaponsPage() {
  return <GuideCollection category="weapons" entries={GUIDES.filter((guide) => guide.category === "weapons")} />;
}
