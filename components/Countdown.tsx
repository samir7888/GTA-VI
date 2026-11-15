"use client";
import { useEffect, useState } from "react";
export default function Countdown({ to }: { to: string }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => { setNow(Date.now()); const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  if (now === null) return <div className="h-28" aria-hidden />;
  const ms = Math.max(0, new Date(to).getTime() - now);
  if (ms === 0) return <p className="font-display text-5xl text-sun">It's live. Welcome to Leonida.</p>;
  const parts = [["days", Math.floor(ms / 864e5)], ["hours", Math.floor(ms / 36e5) % 24], ["min", Math.floor(ms / 6e4) % 60], ["sec", Math.floor(ms / 1e3) % 60]] as const;
  return (
    <div role="timer" aria-label="Time until GTA VI release" className="flex gap-3 sm:gap-6">
      {parts.map(([l, v]) => (
        <div key={l} className="text-center">
          <div className="font-display text-6xl leading-none tabular-nums sm:text-8xl bg-gradient-to-b from-sun to-pink bg-clip-text text-transparent">{String(v).padStart(2, "0")}</div>
          <div className="mt-1 text-sm text-cream/70">{l}</div>
        </div>
      ))}
    </div>
  );
}
