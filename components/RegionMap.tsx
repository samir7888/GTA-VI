import Link from "next/link";
import { REGIONS } from "@/lib/data";

export default function RegionMap() {
  return (
    <div className="relative isolate mt-8 h-[430px] overflow-hidden rounded-3xl border border-cream/10 bg-[#211039] sm:h-[500px]">
      <svg aria-hidden="true" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 size-full">
        <defs>
          <pattern id="map-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#fff4e6" strokeOpacity=".045" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1000" height="500" fill="url(#map-grid)" />
        <path d="M176 93 C251 50 346 54 421 78 C493 101 562 111 624 157 C683 201 722 264 692 328 C667 384 628 425 568 442 C513 458 463 412 417 380 C364 343 329 315 284 272 C227 217 151 155 176 93Z" fill="#2b5b5c" fillOpacity=".42" stroke="#2ee6d6" strokeOpacity=".25" strokeWidth="2" />
        <path d="M474 383 C507 409 530 435 556 464 C568 477 580 486 592 500" fill="none" stroke="#2ee6d6" strokeOpacity=".3" strokeWidth="16" strokeLinecap="round" />
        <path d="M198 106 C280 159 373 206 473 243 C556 273 616 302 663 339" fill="none" stroke="#ff9a3c" strokeOpacity=".22" strokeWidth="2" strokeDasharray="7 12" />
        <circle cx="488" cy="248" r="5" fill="#ff9a3c" fillOpacity=".7" />
        <circle cx="532" cy="268" r="4" fill="#ff9a3c" fillOpacity=".55" />
        <circle cx="573" cy="290" r="4" fill="#ff9a3c" fillOpacity=".4" />
      </svg>
      <p className="absolute left-4 top-4 z-10 rounded-full border border-cream/10 bg-dusk/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-cream/70 backdrop-blur sm:left-6 sm:top-6">SCHEMATIC OVERVIEW · NOT TO SCALE</p>
      {REGIONS.map((region) => (
        <Link
          key={region.slug}
          href={`/region/${region.slug}`}
          className="absolute z-10 flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col rounded-xl border border-white/20 p-3 text-dusk shadow-lg transition hover:z-20 hover:scale-105 focus-visible:z-20 sm:w-48 sm:p-4"
          style={{ left: `${region.mapPosition.x}%`, top: `${region.mapPosition.y}%`, background: `linear-gradient(135deg, ${region.from}, ${region.to})` }}
        >
          <span className="font-display text-sm leading-tight sm:text-lg">{region.name}</span>
          <span className="mt-1 text-[10px] font-medium leading-tight text-dusk/75 sm:text-xs">{region.inspiredBy}</span>
        </Link>
      ))}
    </div>
  );
}
