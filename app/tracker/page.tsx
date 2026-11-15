import type { Metadata } from "next";
import Tracker from "@/components/Tracker";
export const metadata: Metadata = { title: "GTA VI progress tracker and checklist", description: "Free GTA VI checklist: prep for launch, visit every region, try every activity, and keep a daily streak. Saves in your browser.", alternates: { canonical: "/tracker" } };
export default function Page() {
  return (<div className="mx-auto max-w-4xl px-5 pt-8"><h1 className="font-display text-5xl">Your GTA VI checklist</h1><p className="mb-8 mt-2 text-cream/75">Tick things off, add your own goals and share your progress.</p><Tracker /></div>);
}
