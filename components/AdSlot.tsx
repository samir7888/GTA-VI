// Replace with your AdSense/Mediavine unit. Fixed height prevents layout shift (good for Core Web Vitals).
export default function AdSlot({ id }: { id: string }) {
  return <aside data-slot={id} aria-label="Advertisement" className="mx-auto my-10 flex h-24 max-w-3xl items-center justify-center rounded-xl border border-dashed border-cream/20 text-sm text-cream/40">Ad slot: {id}</aside>;
}
