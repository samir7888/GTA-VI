import type { Metadata } from "next";
import GuideCollection from "@/components/GuideCollection";
import { GUIDES } from "@/lib/guide-content";

export const metadata: Metadata = {
  title: "GTA VI Vehicles Guide: Cars, Motorcycles, Boats & Aircraft",
  description: "GTA VI has nearly 600 vehicles including confirmed models like the Declasse Vamos, Truffade Thrax, Progen Emerus, Seashark Westbound Azure, and Buckingham Dragonfly Volatus. Plus 281 Standout Vehicles hidden across Leonida.",
  alternates: { canonical: "/vehicles" },
};

export default function VehiclesPage() {
  return <GuideCollection category="vehicles" entries={GUIDES.filter((guide) => guide.category === "vehicles")} />;
}
