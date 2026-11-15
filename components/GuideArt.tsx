import type { GuideIllustration } from "@/lib/guide-content";

const paths: Record<GuideIllustration, string> = {
  person: "M50 54a15 15 0 1 0 0-30 15 15 0 0 0 0 30Zm-27 34c2-15 12-23 27-23s25 8 27 23",
  car: "M20 61h60l-6-18a7 7 0 0 0-7-5H36a7 7 0 0 0-7 5l-9 18Zm-5 0v13h9v-7h52v7h9V61M31 38l4-12h30l5 12M29 61h.1M71 61h.1",
  boat: "M17 60h66L70 78H33L17 60Zm18-21h30l8 21H27l8-21Zm15-17v17m-9-17h18",
  aircraft: "m14 55 31-8 9-27 8 2-2 23 19 10-1 6-24-4-10 18-6-1 3-19-24 6Z",
  weapon: "M18 45h43l12 8-8 8H48l-4 18H32l1-20H18Zm43 0v-8h14v8",
  compass: "M50 17a33 33 0 1 0 0 66 33 33 0 0 0 0-66Zm11 22-7 18-18 7 7-18 18-7Zm-11 11h.1",
};

export default function GuideArt({ illustration, image, imageAlt, imageCredit, imageLicense, imageSourceUrl, name }: {
  illustration: GuideIllustration;
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
  imageLicense?: string;
  imageSourceUrl?: string;
  name: string;
}) {
  if (image) {
    return (
      <div className="relative aspect-16/10 overflow-hidden bg-plum">
        <img src={image} alt={imageAlt ?? `${name} official artwork`} loading="lazy" className="size-full object-cover" />
        <a href={imageSourceUrl ?? "https://www.rockstargames.com/VI/media"} target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-3 max-w-[90%] rounded-full border border-white/20 bg-dusk/85 px-3 py-1.5 text-[10px] font-semibold leading-tight text-cream backdrop-blur hover:text-lagoon">
          Image: {imageCredit ?? "Rockstar Games"}{imageLicense ? ` · ${imageLicense}` : ""}
        </a>
      </div>
    );
  }

  return (
    <div className="relative flex aspect-16/10 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,154,60,.28),transparent_42%),linear-gradient(135deg,#351653,#1a0b2e)]">
      <div aria-hidden="true" className="absolute -bottom-16 -left-10 size-48 rounded-full border border-cream/10 sm:size-64" />
      <svg aria-hidden="true" viewBox="0 0 100 100" className="relative size-24 stroke-sun stroke-3 fill-none drop-shadow-lg sm:size-28">
        <path d={paths[illustration]} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-dusk/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream/60">Illustrative</span>
    </div>
  );
}
