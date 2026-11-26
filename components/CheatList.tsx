"use client";
import { useState } from "react";
import { CHEAT_CATEGORIES, type Cheat, type CheatCategory, type CheatStatus } from "@/lib/cheats";

const DIRECTIONS: Record<string, string> = { "↑": "Up", "↓": "Down", "←": "Left", "→": "Right" };
const STATUS: Record<CheatStatus, { label: string; className: string }> = {
  confirmed: { label: "Code confirmed", className: "border-lagoon/40 bg-lagoon/10 text-lagoon" },
  reported: { label: "Code disputed", className: "border-sun/40 bg-sun/10 text-sun" },
  unconfirmed: { label: "Code not published", className: "border-cream/15 bg-cream/5 text-cream/55" },
};
const slug = (category: CheatCategory) => category.toLowerCase().replaceAll(" ", "-");

export default function CheatList({ cheats }: { cheats: Cheat[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CheatCategory | "All">("All");
  const [withCodesOnly, setWithCodesOnly] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const normalizedQuery = query.trim().toLowerCase();
  const visible = cheats.filter((cheat) => {
    if (category !== "All" && cheat.category !== category) return false;
    if (withCodesOnly && !cheat.code) return false;
    if (!normalizedQuery) return true;
    return `${cheat.name} ${cheat.effect} ${cheat.unlock} ${cheat.category}`.toLowerCase().includes(normalizedQuery);
  });
  const groups = CHEAT_CATEGORIES.filter((name) => visible.some((cheat) => cheat.category === name));

  const copy = async (cheat: Cheat) => {
    try {
      await navigator.clipboard.writeText(cheat.code);
      setCopied(cheat.name);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

  return (
    <div className="mt-12">
      <div className="rounded-2xl border border-cream/10 bg-plum/70 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-sm">
            <label htmlFor="cheat-search" className="text-xs font-bold uppercase tracking-[0.18em] text-lagoon">Search cheats</label>
            <input
              id="cheat-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try ammo, tank, focus, weather…"
              className="mt-2 w-full rounded-full bg-dusk px-5 py-3 placeholder:text-cream/40"
            />
          </div>
          <button
            type="button"
            onClick={() => setWithCodesOnly((value) => !value)}
            aria-pressed={withCodesOnly}
            className={`self-start rounded-full border px-5 py-2.5 text-sm font-semibold transition sm:self-auto ${withCodesOnly ? "border-sun bg-sun text-dusk" : "border-cream/20 text-cream/75 hover:border-sun/60 hover:text-sun"}`}
          >
            Published codes only
          </button>
        </div>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Filter cheats by category">
          {(["All", ...CHEAT_CATEGORIES] as const).map((name) => {
            const count = name === "All" ? cheats.length : cheats.filter((cheat) => cheat.category === name).length;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setCategory(name)}
                aria-pressed={category === name}
                className={`rounded-full border px-4 py-2 text-sm transition ${category === name ? "border-sun bg-sun text-dusk" : "border-cream/15 text-cream/75 hover:border-sun/60 hover:text-sun"}`}
              >
                {name} <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="mt-4 text-sm text-cream/60">Showing {visible.length} of {cheats.length} cheats</p>
      </div>

      {groups.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-cream/10 bg-plum/70 p-8 text-center text-cream/70">No cheats match that search. Try a different word or clear the filters.</p>
      ) : (
        groups.map((group) => (
          <section key={group} id={slug(group)} className="mt-10">
            <h2 className="font-display text-3xl">{group} <span className="font-sans text-base font-normal text-cream/50">({visible.filter((cheat) => cheat.category === group).length})</span></h2>
            <ul className="mt-4 grid gap-4 lg:grid-cols-2">
              {visible.filter((cheat) => cheat.category === group).map((cheat) => {
                const status = STATUS[cheat.status];
                return (
                  <li key={cheat.name} className="flex h-full flex-col rounded-2xl border border-cream/10 bg-plum/70 p-5 sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="font-display text-2xl leading-tight">{cheat.name}</h3>
                      <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${status.className}`}>{status.label}</span>
                    </div>
                    <p className="mt-2 text-cream/75">{cheat.effect}</p>
                    <p className="mt-4 text-sm text-cream/65"><span className="font-bold uppercase tracking-wider text-cream/45">Unlock: </span>{cheat.unlock}</p>
                    {cheat.code ? (
                      <div className="mt-4 rounded-xl border border-cream/10 bg-dusk p-3">
                        <div className="flex flex-wrap items-center gap-1.5" aria-label={`Input sequence: ${[...cheat.code].map((arrow) => DIRECTIONS[arrow] ?? arrow).join(", ")}`}>
                          {[...cheat.code].map((arrow, index) => (
                            <span key={index} aria-hidden="true" className="grid size-8 place-items-center rounded-md border border-lagoon/25 bg-lagoon/10 font-mono text-lg text-lagoon">{arrow}</span>
                          ))}
                        </div>
                        <button type="button" onClick={() => copy(cheat)} className="mt-3 rounded-full border border-cream/20 px-4 py-1.5 text-xs font-semibold text-cream/75 transition hover:border-sun hover:text-sun">
                          {copied === cheat.name ? "Copied" : "Copy sequence"}
                        </button>
                      </div>
                    ) : (
                      <p className="mt-4 rounded-xl border border-dashed border-cream/15 p-3 text-sm text-cream/50">No input sequence published by our tracked sources yet. The cheat still needs its individual unlock challenge.</p>
                    )}
                    {cheat.note && <p className="mt-3 text-xs leading-relaxed text-sun/75">{cheat.note}</p>}
                  </li>
                );
              })}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
