import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This page doesn't exist in the GTA VI Leonida field guide.",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-lagoon">404</p>
      <h1 className="mt-4 font-display text-6xl sm:text-8xl">OFF THE MAP</h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/70">
        This page doesn&apos;t exist in Leonida. Head back to the guide to keep exploring.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-sun px-7 py-3 font-semibold text-dusk transition-colors hover:bg-cream"
        >
          Back to home
        </Link>
        <Link
          href="/news"
          className="rounded-full border border-cream/50 bg-dusk/30 px-7 py-3 backdrop-blur transition-colors hover:border-sun"
        >
          Latest briefings
        </Link>
      </div>
    </section>
  );
}
