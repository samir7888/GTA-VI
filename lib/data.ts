export const SITE = {
  name: "GTA VI",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://leonidalog.com",
  release: "2026-11-19T00:00:00",
  tagline: "Your progress tracker and map guide for GTA VI",
};
export const OFFICIAL_GAME_SOURCE = {
  label: "Rockstar Games — Grand Theft Auto VI",
  url: "https://www.rockstargames.com/VI",
  checkedAt: "November 15, 2026",
};
export type Region = { slug: string; name: string; inspiredBy: string; blurb: string; vibe: string; thingsToDo: string[]; mapPosition: { x: number; y: number }; from: string; to: string };
export const REGIONS: Region[] = [
  { slug: "vice-city", name: "Vice City", inspiredBy: "Miami", vibe: "Neon, beaches, Art Deco nightlife", blurb: "The centrepiece of Leonida: a modern Vice City built on contemporary Miami, with beaches, nightlife and the crime that follows.", thingsToDo: ["Explore the Miami-inspired city and its waterfront.", "Take in the beaches and nightlife.", "Look out for activities shown across Leonida, including racing and water sports."], mapPosition: { x: 77, y: 38 }, from: "#ff3d81", to: "#ff9a3c" },
  { slug: "leonida-keys", name: "Leonida Keys", inspiredBy: "The Florida Keys", vibe: "Tropical islands linked by bridges", blurb: "A chain of tropical islands south of the mainland, tied together by bridges and boat routes.", thingsToDo: ["Follow the bridges between the tropical islands.", "Explore the coastline and boat routes at your own pace.", "Keep an eye out for water activities shown across Leonida, such as kayaking, scuba diving and jet skiing."], mapPosition: { x: 56, y: 87 }, from: "#2ee6d6", to: "#3a7bff" },
  { slug: "grassrivers", name: "Grassrivers", inspiredBy: "The Everglades", vibe: "Swamps, mangroves, wildlife", blurb: "Wetland country far from the city lights, with swamps, mangroves and plenty of wildlife.", thingsToDo: ["Venture into the wetlands and mangrove country.", "Watch for wildlife away from the city lights.", "Look for ways to explore the waterways, including kayaking shown in GTA VI footage."], mapPosition: { x: 70, y: 54 }, from: "#7ddc5a", to: "#1f8a70" },
  { slug: "port-gellhorn", name: "Port Gellhorn", inspiredBy: "Panama City Beach", vibe: "Forgotten coast, working port", blurb: "Leonida's forgotten coast: cheap motels, shut-down attractions and empty strip malls around a working port.", thingsToDo: ["Explore the working port and its surrounding coast.", "Look out for cheap motels and shut-down attractions.", "Trace the empty strip malls that give this region its faded feel."], mapPosition: { x: 23, y: 38 }, from: "#ff9a3c", to: "#b3472d" },
  { slug: "ambrosia", name: "Ambrosia", inspiredBy: "Rural Florida", vibe: "Lake country, sugar refinery", blurb: "Inland region beside Lake Leonida, dominated by a sugar refinery. Rockstar frames it as a place where fortunes are fought over.", thingsToDo: ["Explore the countryside around Lake Leonida.", "Visit the sugar-refinery landscape that dominates the region.", "Keep an eye out for the local conflicts hinted at in the region's description."], mapPosition: { x: 30, y: 70 }, from: "#ffd36b", to: "#c2562f" },
  { slug: "mount-kalaga", name: "Mount Kalaga National Park", inspiredBy: "Northern Florida wilderness", vibe: "Forest, trails, wild animals", blurb: "The northern national park, a break from the coast with wilderness and wildlife.", thingsToDo: ["Trade the coast for the park's forested wilderness.", "Explore the trails and look for wild animals.", "Set aside time to roam away from Leonida's cities."], mapPosition: { x: 50, y: 20 }, from: "#6aa84f", to: "#274e3f" },
];
export const ACTIVITIES = ["base jumping", "kayaking", "scuba diving", "jet skiing", "racing"];
export const PREP = ["Pre-load the game and confirm free storage", "Update your console and controller", "Charge a second controller", "Block out your first play session", "Decide your first stop in Vice City"];
export const GEAR = [{ label: "Extra controller", href: "https://example.com/affiliate/controller" }, { label: "1TB+ SSD for consoles", href: "https://example.com/affiliate/ssd" }];
export const FAQ = [
  { q: "When does GTA VI release?", a: "GTA VI launches Thursday, November 19, 2026 on PlayStation 5 and Xbox Series X|S. A PC version has not been announced." },
  { q: "Where is GTA VI set?", a: "In the fictional state of Leonida, Rockstar's version of Florida, with a modern Vice City at its centre." },
  { q: "What are the regions in GTA VI?", a: "Rockstar has confirmed six: Vice City, the Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia and Mount Kalaga National Park." },
  { q: "Who are the main characters?", a: "Rockstar's official artwork and trailers feature two protagonists, Jason and Lucia." },
  { q: "What can you do besides missions?", a: "Rockstar has shown activities like base jumping, kayaking, scuba diving, jet skiing and racing." },
  { q: "Is this site official?", a: "No. This is an unofficial GTA VI fan project and is not affiliated with Rockstar Games or Take-Two Interactive." },
];
