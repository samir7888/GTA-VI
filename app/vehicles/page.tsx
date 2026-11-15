import type { Metadata } from "next";
import GuideCollection from "@/components/GuideCollection";
import { GUIDES } from "@/lib/guide-content";

export const metadata: Metadata = {
  title: "GTA VI Vehicles Guide",
  description: "Browse the GTA VI vehicle guide. Model names, performance, and locations are labeled unconfirmed until verified.",
  alternates: { canonical: "/vehicles" },
};

export default function VehiclesPage() {
  return <GuideCollection category="vehicles" entries={GUIDES.filter((guide) => guide.category === "vehicles")} />;
}
