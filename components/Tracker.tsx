"use client";
import { useEffect, useState } from "react";
import { REGIONS, ACTIVITIES, PREP } from "@/lib/data";
type Item = { id: string; label: string; group: string };
const BASE: Item[] = [
  ...PREP.map((l) => ({ id: "p-" + l, label: l, group: "Before launch" })),
  ...REGIONS.map((r) => ({ id: "r-" + r.slug, label: `Reach ${r.name}`, group: "Explore Leonida" })),
  ...ACTIVITIES.map((a) => ({ id: "a-" + a, label: `Try ${a}`, group: "Activities" })),
];
type Save = { done: Record<string, boolean>; custom: Item[]; streak: number; last: string };
const KEY = "ll:v1";
const iso = (t: number) => new Date(t).toISOString().slice(0, 10);
export default function Tracker() {
  const [s, setS] = useState<Save>({ done: {}, custom: [], streak: 0, last: "" });
  const [ready, setReady] = useState(false);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    let v: Save = { done: {}, custom: [], streak: 0, last: "" };
    try { const raw = localStorage.getItem(KEY); if (raw) v = { ...v, ...JSON.parse(raw) }; } catch {}
    const t = iso(Date.now());
    if (v.last !== t) { v.streak = v.last === iso(Date.now() - 864e5) ? v.streak + 1 : 1; v.last = t; }
    setS(v); setReady(true);
  }, []);
  useEffect(() => { if (ready) try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} }, [s, ready]);
  const items = [...BASE, ...s.custom];
  const doneN = items.filter((i) => s.done[i.id]).length;
  const pct = items.length ? Math.round((doneN / items.length) * 100) : 0;
  const groups = [...new Set(items.map((i) => i.group))];
  const toggle = (id: string) => setS((p) => ({ ...p, done: { ...p.done, [id]: !p.done[id] } }));
  const add = () => { const l = text.trim(); if (!l) return; setS((p) => ({ ...p, custom: [...p.custom, { id: "c-" + Date.now(), label: l, group: "My list" }] })); setText(""); };
  const share = async () => {
    const msg = `I'm ${pct}% through my GTA VI checklist. ${window.location.href}`;
    try { if (navigator.share) await navigator.share({ text: msg }); else { await navigator.clipboard.writeText(msg); setCopied(true); setTimeout(() => setCopied(false), 2000); } } catch {}
  };
  return (
    <div>
      <div className="rounded-2xl bg-plum p-6">
        <div className="flex items-end justify-between gap-4">
          <div><p className="font-display text-6xl text-sun">{pct}%</p><p className="text-cream/70">{doneN} of {items.length} done</p></div>
          <div className="text-right"><p className="font-display text-3xl text-lagoon">{s.streak}-day streak</p><p className="text-sm text-cream/70">Visit daily to keep it going</p></div>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-dusk" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}><div className="h-full bg-gradient-to-r from-pink to-sun transition-all" style={{ width: pct + "%" }} /></div>
        <button onClick={share} className="mt-4 rounded-full border border-cream/30 px-5 py-2 text-sm hover:border-sun">{copied ? "Copied to clipboard" : "Share my progress"}</button>
      </div>
      {groups.map((g) => (
        <fieldset key={g} className="mt-8"><legend className="font-display text-2xl">{g}</legend>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {items.filter((i) => i.group === g).map((i) => (
              <li key={i.id}><label className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl bg-plum px-4 py-3 hover:bg-plum/70">
                <input type="checkbox" checked={!!s.done[i.id]} onChange={() => toggle(i.id)} className="size-5 accent-pink" />
                <span className={s.done[i.id] ? "line-through opacity-50" : ""}>{i.label}</span></label></li>
            ))}
          </ul>
        </fieldset>
      ))}
      <div className="mt-8 flex gap-2">
        <label htmlFor="new" className="sr-only">Add your own goal</label>
        <input id="new" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && add()} placeholder="Add your own goal, like a collectible you found" className="flex-1 rounded-full bg-plum px-5 py-3 placeholder:text-cream/40" />
        <button onClick={add} className="rounded-full bg-pink px-6 py-3 font-semibold text-dusk">Add goal</button>
      </div>
      <p className="mt-3 text-sm text-cream/60">Progress saves in this browser only. Collectible lists will be added once they are verified in the released game.</p>
    </div>
  );
}
