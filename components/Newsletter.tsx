"use client";
import { useState } from "react";
export default function Newsletter() {
  const [st, setSt] = useState<"idle" | "ok" | "err">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    try {
      const r = await fetch("/api/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      setSt(r.ok ? "ok" : "err");
    } catch {
      setSt("err");
    }
  }
  return (
    <form onSubmit={submit} className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
      <label htmlFor="email" className="sr-only">Email address</label>
      <input id="email" name="email" type="email" required placeholder="you@email.com" className="w-full min-w-0 rounded-xl border border-cream/15 bg-dusk px-5 py-3 text-cream placeholder:text-cream/40" />
      <button type="submit" className="rounded-xl bg-pink px-6 py-3 font-semibold text-dusk transition-colors hover:bg-sun">Get launch-week updates</button>
      <p aria-live="polite" className="text-sm text-cream/75 sm:col-span-2">{st === "ok" ? "You're in. Check your inbox." : st === "err" ? "That email didn't work. Check it and try again." : ""}</p>
    </form>
  );
}
