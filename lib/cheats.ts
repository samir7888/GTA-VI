export const CHEAT_CATEGORIES = ["Player", "Combat", "Spawn Vehicle", "Environment", "Screen Filters"] as const;
export type CheatCategory = (typeof CHEAT_CATEGORIES)[number];
export type CheatStatus = "confirmed" | "reported" | "unconfirmed";

export type Cheat = {
  name: string;
  category: CheatCategory;
  effect: string;
  unlock: string;
  code: string;
  status: CheatStatus;
  note?: string;
};

type CheatRow = [CheatCategory, string, string, string, string?, CheatStatus?, string?];

// Codes are published directional inputs shown as arrow glyphs (↑ ↑ ↓ ← →).
// Status: "confirmed" = same sequence in two or more published guides,
// "reported" = published but disputed or containing a source typo,
// "unconfirmed" = no sequence published by the sources we track.
const ROWS: CheatRow[] = [
  // ── PLAYER (10) ─────────────────────────────────────────────────────────────
  ["Player", "$250,000", "Instantly gives you $250,000. This is the only money cheat.", "Finish the story.", "↑→↓←↑←↓→", "confirmed", "Polygon lists the individual challenge as making $250,000 from fenced goods; other guides simply list finishing the story."],
  ["Player", "Drunk", "Instantly makes you and your partner drunk.", "Spend $2,500 on alcohol.", "↑←→↑↑←→↑←→"],
  ["Player", "Raise Heat Level", "Raises your level of heat across the map.", "Lose a 3-star Wanted level 25 times.", "←↓→↓↑↓↑"],
  ["Player", "Raise Wanted Level", "Raises your Wanted level across the map.", "Lose a 3-star Wanted level 50 times.", "←↓→↓↑→↑"],
  ["Player", "Unlimited Focus", "Focus never runs out.", "Finish the story.", "↓↑↑↓↑↓↑↓↑→"],
  ["Player", "No Fall Damage", "You are immune to fall damage.", "Survive a freefall from 40 feet 20 times."],
  ["Player", "Parachute", "Adds a parachute to your loadout.", "Complete 50 skydives or base jumps from 300 feet or higher."],
  ["Player", "Body Armor", "Adds body armor to your loadout.", "Complete 100 workouts.", "↓↑←↑↑↑↑↑↓↓"],
  ["Player", "Repair Vehicle", "Fully repairs your current vehicle.", "Get 1st place in 10 races at Gellhorn Raceway, Thrillbilly Mud Club and Boone Speedway."],
  ["Player", "Unlimited Nitrous", "Nitrous and fuel never run out on vehicles.", "Complete 50 stunt jumps."],

  // ── COMBAT (11) ─────────────────────────────────────────────────────────────
  ["Combat", "Max Ammo", "Fills all ammo to maximum.", "Win 25 bronze medals or higher at shooting ranges.", "↓↑→↓←←↑↑↓←"],
  ["Combat", "Infinite Ammo", "Ammo never runs out.", "Win 25 silver medals or higher at shooting ranges.", "↓↑→↓←←↑↓↓↓"],
  ["Combat", "No Reload", "Ammo never runs out with no need to reload.", "Win 25 gold medals at shooting ranges.", "↓↑→↓←←↑↓↓↑"],
  ["Combat", "All Explosive Weapons", "Adds all explosive weapons to your loadout with full ammo.", "Throw 100 grenades."],
  ["Combat", "Incendiary Ammo", "All ammo is incendiary.", "Burn 100 enemies with fire damage."],
  ["Combat", "Exploding Bottles", "All bottles explode when damaged.", "Throw 100 molotovs."],
  ["Combat", "Explosive Shotgun", "Adds a Mason & Keen Shortstraw that fires explosive shells.", "Hit 100 enemies with explosive damage."],
  ["Combat", "Hauners H-AT", "Adds a Hauners H-AT to your loadout.", "Blow up 100 vehicles."],
  ["Combat", "Attack Force", "Bullets and melee attacks launch targets on impact.", "Finish the story.", "↓↑←→↓↓↑↓", "reported", "Sources disagree: GameSpot and GTA Wiki list ↓↑←→↓↓↑↓ (8 inputs); Polygon and GTA6 Explained list ↓↑←←→↓↓↑↓ (9 inputs)."],
  ["Combat", "Exploding Balls", "Sports balls explode on impact.", "Hit 20 enemies with explosive damage.", "↓↑←←→↓↓↑→"],
  ["Combat", "Vehicle Force", "Vehicle collisions launch targets.", "Kill 25 enemies with a vehicle.", "↓↑←←→↓↓←↑↓", "reported", "GameSpot and GTA Wiki print the final two inputs as “Up Down” with a missing comma, so the exact sequence needs in-game confirmation."],

  // ── SPAWN VEHICLES (21) ─────────────────────────────────────────────────────
  ["Spawn Vehicle", "Interstate Ambulance", "Spawns an Interstate Ambulance.", "Discover the Interstate Ambulance in the Progress menu."],
  ["Spawn Vehicle", "Airboat 09", "Spawns an Airboat 09.", "Complete 5 survival challenges."],
  ["Spawn Vehicle", "Bravado Banshee", "Spawns a Bravado Banshee.", "Complete all combat challenges."],
  ["Spawn Vehicle", "Tuff BMX", "Spawns a Tuff BMX.", "Complete 5 fitness challenges."],
  ["Spawn Vehicle", "Maibatsu Boomazoom", "Spawns a Maibatsu Boomazoom at your current location.", "Complete 5 shopping challenges.", "←↑→↓←←↑←"],
  ["Spawn Vehicle", "Nagasaki Carbon RS", "Spawns a Nagasaki Carbon RS.", "Complete all exploration challenges."],
  ["Spawn Vehicle", "’65 Vapid Dominator", "Spawns a ’65 Vapid Dominator.", "Complete all fitness challenges."],
  ["Spawn Vehicle", "Progen Emerus", "Spawns a Progen Emerus.", "Complete all vehicle challenges."],
  ["Spawn Vehicle", "Inflatable Flamingo", "Spawns an inflatable flamingo.", "Destroy 50 cocaine flamingos."],
  ["Spawn Vehicle", "MTL Pumper", "Spawns an MTL Pumper at your current location.", "Discover the MTL Pumper in the Progress menu.", "←↑→↓←→→↑"],
  ["Spawn Vehicle", "Vapid Stanier G2 Taxi", "Spawns a Vapid Stanier G2 Taxi.", "Complete 5 sports challenges."],
  ["Spawn Vehicle", "Hauners P-996 Lazer", "Spawns a Hauners P-996 Lazer.", "Complete all challenges."],
  ["Spawn Vehicle", "HVY Bulldozer", "Spawns an HVY Bulldozer.", "Discover the HVY Bulldozer in the Progress menu.", "←↑→↓←→→↓"],
  ["Spawn Vehicle", "Lapwing Mallard", "Spawns a Lapwing Mallard.", "Complete 5 vehicle challenges."],
  ["Spawn Vehicle", "Brimstone Golfer", "Spawns a Brimstone Golfer.", "Complete all sports challenges."],
  ["Spawn Vehicle", "Nagasaki Sea Sparrow", "Spawns a Nagasaki Sea Sparrow.", "Complete 5 exploration challenges."],
  ["Spawn Vehicle", "Maibatsu Sanchez", "Spawns a Maibatsu Sanchez.", "Complete 5 criminal challenges."],
  ["Spawn Vehicle", "Hauners Rhino Tank", "Spawns a Hauners Rhino Tank.", "Complete all survival challenges."],
  ["Spawn Vehicle", "Speeder 700 GT", "Spawns a Speeder 700 GT.", "Complete 5 combat challenges."],
  ["Spawn Vehicle", "Truffade Thrax", "Spawns a Truffade Thrax.", "Complete all shopping challenges."],
  ["Spawn Vehicle", "Western Zombie Bobber", "Spawns a Western Zombie Bobber.", "Complete all criminal challenges."],

  // ── ENVIRONMENT (3) ─────────────────────────────────────────────────────────
  ["Environment", "Move Time Forward", "Moves the time of day forward.", "Find 10 collectible watches."],
  ["Environment", "Pause Time of Day", "Pauses the current time of day.", "Find 20 collectible watches."],
  ["Environment", "Cycle Weather", "Adjusts the weather conditions.", "Finish the story.", "↓→↑↓→↑→", "confirmed", "GameSpot lists “Finish the story”; Polygon and GTA6 Explained list “Reveal the entire map”."],

  // ── SCREEN FILTERS (16) ─────────────────────────────────────────────────────
  ["Screen Filters", "Golden Hour", "Applies a golden filter with a widescreen aspect ratio.", "Spend 4 hours holding hands."],
  ["Screen Filters", "Powdered Sugar", "Turns the world white with sparkling highlights.", "Scan all space debris with WAiNK."],
  ["Screen Filters", "Pinhole", "Applies a pinhole camera filter.", "Clear 25 gang operations with your partner."],
  ["Screen Filters", "Neon Jungle", "Applies neon highlights to the world.", "Discover all 16 Girlypop vehicles."],
  ["Screen Filters", "Yesteryear", "Applies a black & white CRT TV filter.", "Discover the Ridgway."],
  ["Screen Filters", "Cataclysm", "Fills the world with murky smoke.", "Discover Martha’s Vamos in the Progress menu.", "↓↓↑→→↑←←→→"],
  ["Screen Filters", "Videotape", "Applies a videotape-style filter.", "Complete 50 activities with your partner."],
  ["Screen Filters", "Dark Mirror", "Flips the world upside down and turns it black.", "Make $500,000 selling vehicles."],
  ["Screen Filters", "Migraine", "Applies a blurred, distorted filter.", "Survive 6 minutes with a 6-star Wanted level."],
  ["Screen Filters", "Dollhouse", "Applies a vivid filter with a narrow aspect ratio.", "Spend eight hours with your partner.", "↓↓↑→→↑←←↓→"],
  ["Screen Filters", "Bubblegum", "Turns the world purple and yellow with sparkling highlights.", "Find all 24 collectible cards for the Vice City Flamingo."],
  ["Screen Filters", "Fast Forward", "Applies a motion blur and accelerates cloud movements.", "Complete 50 meditations."],
  ["Screen Filters", "Fisheye", "Applies a fisheye filter.", "Catch 100 fish."],
  ["Screen Filters", "Faded Glory", "Applies a color CRT TV filter.", "Rob 50 stores with your partner.", "↓↓↑→→↑←←←→"],
  ["Screen Filters", "Pixel Art", "Applies a pixelated filter.", "Make $250,000 selling collectibles."],
  ["Screen Filters", "Hellscape", "Turns the world red and orange with a heat haze.", "Steal 100 cop vehicles."],
];

export const CHEATS: Cheat[] = ROWS.map(([category, name, effect, unlock, code = "", status, note]) => ({
  category,
  name,
  effect,
  unlock,
  code,
  status: status ?? (code ? "confirmed" : "unconfirmed"),
  ...(note ? { note } : {}),
}));

export const CHEAT_SOURCES = [
  { label: "GameSpot — All GTA 6 Cheats And How To Unlock Them", url: "https://www.gamespot.com/articles/all-gta-6-cheats-and-how-to-unlock-them/", checked: "Updated November 23, 2026", detail: "Primary list of all 61 cheats, effects, unlock challenges and published inputs." },
  { label: "Polygon — All cheat codes in GTA 6", url: "https://www.polygon.com/gta-6-cheat-codes-list-unlock/", checked: "Updated November 21, 2026", detail: "Category breakdown, activation steps and cross-check of published codes." },
  { label: "GTA Wiki — Cheats in Grand Theft Auto VI", url: "https://gta.fandom.com/wiki/Cheats_in_GTA_VI", checked: "Accessed November 26, 2026", detail: "Community cross-check of 18 published sequences." },
  { label: "GTA6 Explained — Cheats & Secret Codes", url: "https://gta6explained.com/cheats", checked: "Accessed November 26, 2026", detail: "Database of all 61 cheats with six marked code-ready." },
];
