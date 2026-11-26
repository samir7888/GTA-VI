import type { Metadata } from "next";
import Link from "next/link";
import CheatList from "@/components/CheatList";
import JsonLd from "@/components/JsonLd";
import { CHEATS, CHEAT_SOURCES } from "@/lib/cheats";

export const metadata: Metadata = {
  title: "GTA VI Cheat Codes: All 61 Cheats, Inputs & Unlock Requirements",
  description: "Every GTA VI cheat code in one place: all 61 cheats with effects, unlock challenges, and the directional phone sequences published so far. Includes the $250,000 money cheat, weapon and vehicle spawns, filters, and warnings about saving and trophies.",
  alternates: { canonical: "/cheats" },
};

const CHEAT_FAQ = [
  { q: "How do you enter cheat codes in GTA VI?", a: "Press Up on the D-pad to pull out the in-game phone, hold L1 + R1 on PlayStation 5 (LB + RB on Xbox Series X|S), then enter the directional sequence with the D-pad. Codes only work after you finish the main story and unlock the individual cheat in the Progression > Cheats menu." },
  { q: "Do GTA VI cheats disable saving and trophies?", a: "Yes. Activating any cheat disables saving and turns off trophies and achievements for that play session. Save manually before experimenting, then reload your save to return to normal progression." },
  { q: "Why are some cheat codes blank?", a: "GTA VI has 61 confirmed cheats, but the community has only published reliable input sequences for some of them. We list the effect and unlock requirement for every cheat, and mark sequences as confirmed, disputed, or not yet published instead of inventing codes." },
  { q: "What is the GTA VI money cheat?", a: "The $250,000 cheat is the only money cheat. Its sequence is Up, Right, Down, Left, Up, Left, Down, Right, entered on the phone while holding the bumpers after unlocking the cheat." },
  { q: "Can you use cheats before finishing the story?", a: "No. Every cheat is locked until the main story is complete, and each one also has its own challenge, such as winning shooting-range medals, completing races, or discovering a specific vehicle." },
];

export default function CheatsPage() {
  const confirmed = CHEATS.filter((cheat) => cheat.status === "confirmed").length;
  const reported = CHEATS.filter((cheat) => cheat.status === "reported").length;
  const unpublished = CHEATS.filter((cheat) => !cheat.code).length;

  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:pt-12">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: CHEAT_FAQ.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }} />
      <nav aria-label="Breadcrumb" className="text-sm text-cream/60">
        <Link href="/" className="hover:text-sun">Home</Link>
        <span className="px-2 text-cream/30">/</span>
        <span aria-current="page" className="text-cream">Cheat Codes</span>
      </nav>

      <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-lagoon">GTA VI field guide · databases</p>
      <h1 className="mt-3 font-display text-5xl sm:text-6xl">Cheat Codes</h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-cream/70">
        All 61 cheats in Grand Theft Auto VI, with what each one does and how to unlock it. GTA VI hides its cheats behind story completion and individual challenges, and only some input sequences have been published so far — every code below is labelled by how well it is corroborated.
      </p>

      <div className="mt-8 flex flex-wrap gap-2" aria-label="Guide categories">
        <Link href="/characters" className="rounded-full border border-cream/15 px-4 py-2 text-sm capitalize text-cream/75 transition-colors hover:border-sun/60 hover:text-sun">Characters</Link>
        <Link href="/vehicles" className="rounded-full border border-cream/15 px-4 py-2 text-sm capitalize text-cream/75 transition-colors hover:border-sun/60 hover:text-sun">Vehicles</Link>
        <Link href="/weapons" className="rounded-full border border-cream/15 px-4 py-2 text-sm capitalize text-cream/75 transition-colors hover:border-sun/60 hover:text-sun">Weapons</Link>
        <Link href="/tips" className="rounded-full border border-cream/15 px-4 py-2 text-sm capitalize text-cream/75 transition-colors hover:border-sun/60 hover:text-sun">Tips &amp; Tricks</Link>
        <Link href="/cheats" aria-current="page" className="rounded-full border border-sun bg-sun px-4 py-2 text-sm capitalize text-dusk">Cheats</Link>
        <Link href="/news" className="rounded-full border border-cream/15 px-4 py-2 text-sm text-cream/75 transition-colors hover:border-sun/60 hover:text-sun">News</Link>
        <Link href="/tracker" className="rounded-full border border-cream/15 px-4 py-2 text-sm text-cream/75 transition-colors hover:border-sun/60 hover:text-sun">Tracker</Link>
        <Link href="/#faq" className="rounded-full border border-cream/15 px-4 py-2 text-sm text-cream/75 transition-colors hover:border-sun/60 hover:text-sun">FAQ</Link>
      </div>

      <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { value: CHEATS.length, label: "cheats in GTA VI" },
          { value: confirmed, label: "sequences confirmed by multiple guides" },
          { value: reported, label: "sequences disputed by sources" },
          { value: unpublished, label: "sequences not published yet" },
        ].map((stat) => (
          <li key={stat.label} className="rounded-2xl border border-cream/10 bg-plum/70 p-5">
            <p className="font-display text-4xl text-sun">{stat.value}</p>
            <p className="mt-1 text-sm text-cream/65">{stat.label}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-sun/40 bg-sun/10 p-6">
          <h2 className="font-display text-2xl text-sun">Read this before you cheat</h2>
          <p className="mt-3 leading-relaxed text-cream/85">Activating any cheat disables saving and turns off Trophies and Achievements for the rest of that session. Make a manual save first, and reload it when you want your normal progression back.</p>
        </div>
        <div className="rounded-2xl border border-cream/10 bg-plum/70 p-6">
          <h2 className="font-display text-2xl">How to enter a code</h2>
          <ol className="mt-3 space-y-2 text-cream/75">
            <li><span className="font-bold text-lagoon">1.</span> Finish the story, then unlock the cheat in Map → Progression → Cheats.</li>
            <li><span className="font-bold text-lagoon">2.</span> Press Up on the D-pad to open your phone.</li>
            <li><span className="font-bold text-lagoon">3.</span> Hold L1 + R1 (PS5) or LB + RB (Xbox Series X|S).</li>
            <li><span className="font-bold text-lagoon">4.</span> Enter the D-pad sequence while holding the bumpers.</li>
          </ol>
        </div>
      </div>

      <CheatList cheats={CHEATS} />

      <section className="mt-16 border-t border-cream/10 pt-10">
        <h2 className="font-display text-3xl">Sources &amp; verification</h2>
        <p className="mt-3 max-w-3xl text-cream/70">This page cross-checks published guides rather than presenting codes as official Rockstar data. Where sources disagree, both versions are noted. Sequences marked confirmed appear identically in at least two of the guides below.</p>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {CHEAT_SOURCES.map((source) => (
            <li key={source.url} className="rounded-2xl border border-cream/10 bg-plum/70 p-5">
              <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-sun underline decoration-sun/40 underline-offset-4 hover:text-cream">{source.label} ↗</a>
              <p className="mt-2 text-xs uppercase tracking-wider text-lagoon">{source.checked}</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">{source.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="faq" className="mx-auto mt-16 max-w-3xl">
        <h2 className="font-display text-3xl">Cheat codes — answered</h2>
        <div className="mt-6 space-y-3">{CHEAT_FAQ.map((item) => (
          <details key={item.q} className="rounded-xl bg-plum p-5">
            <summary className="cursor-pointer font-semibold">{item.q}</summary>
            <p className="mt-3 leading-relaxed text-cream/85">{item.a}</p>
          </details>
        ))}</div>
      </section>
      <p className="mt-8 text-xs leading-relaxed text-cream/45">Last checked November 26, 2026. Unofficial fan guide — not affiliated with Rockstar Games or Take-Two Interactive. Use cheats at your own risk.</p>
    </section>
  );
}
