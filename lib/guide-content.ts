export type GuideCategory = "characters" | "vehicles" | "weapons" | "tips";
export type GuideIllustration = "person" | "car" | "boat" | "aircraft" | "weapon" | "compass";

export type GuideEntry = {
  slug: string;
  category: GuideCategory;
  name: string;
  summary: string;
  status: string;
  illustration: GuideIllustration;
  paragraphs: string[];
  sourceUrl: string;
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
  imageSourceUrl?: string;
  imageLicense?: string;
};

export const GUIDE_CATEGORIES: Record<GuideCategory, { title: string; description: string }> = {
  characters: {
    title: "Characters",
    description: "Profiles of the confirmed cast in GTA VI — from protagonists Jason and Lucia to the supporting players across Vice City and Leonida.",
  },
  vehicles: {
    title: "Vehicles",
    description: "GTA VI features nearly 600 vehicles including cars, motorcycles, boats, and aircraft across Leonida. Browse confirmed models and vehicle classes.",
  },
  weapons: {
    title: "Weapons",
    description: "Over 60 confirmed weapons in GTA VI — from Girardi pistols and shotguns to assault rifles, sniper rifles, melee, and throwables. GTA VI uses a loadout system tied to trunks and Ammu-Nation lockers.",
  },
  tips: {
    title: "Tips & Tricks",
    description: "In-game verified mechanics, gameplay systems, and practical advice for playing smarter across Leonida — from Focus mode and Criminal Profiles to cheat code rules.",
  },
};

const rockstarMedia = "https://www.rockstargames.com/VI/media";
const officialCharacters = "https://www.rockstargames.com/VI/only-in-leonida";
export const DEFAULT_SOCIAL_IMAGE = "https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_02.1486~7_v40cn..jpg?akim=1&imdensity=1&imwidth=1200";

export const GUIDES: GuideEntry[] = [
  // ── CHARACTERS ──────────────────────────────────────────────────────────────
  {
    slug: "jason-duval",
    category: "characters",
    name: "Jason Duval",
    summary: "A former soldier running drugs in the Leonida Keys — until a routine score goes wrong and pulls him and Lucia into something far bigger.",
    status: "Confirmed protagonist · in-game verified",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_02.1486~7_v40cn..jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Jason driving in an official GTA VI promotional image",
    paragraphs: [
      "Jason Duval grew up around grifters and low-level criminals, served in the Army, and settled into running drugs with Brian Heder in the Leonida Keys. He wants a quieter life — but his partnership with Lucia keeps pulling them both toward bigger risks.",
      "Jason is one of GTA VI's two playable protagonists. The story opens in the Keys region (around Key Lento) and expands outward as the criminal conspiracy widens. His playstyle tilts toward tactical planning: early in the game, grabbing a suppressor from Ammu-Nation lets you handle early encounters without triggering full police responses.",
      "Jason's stats — health, stamina, and focus — are shaped by player choices. Eating, sleeping, and training at the gym raise his caps. Working out with Lucia gives both characters the bonus simultaneously. His Criminal Profile (Professional vs Violent) shifts based on whether you favour stealth or brute force.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "lucia-caminos",
    category: "characters",
    name: "Lucia Caminos",
    summary: "Freshly released from Leonida Penitentiary, Lucia is determined to secure a better life — whatever it takes.",
    status: "Confirmed protagonist · in-game verified",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_01.0a7yqvewctkfp.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Lucia training in an official GTA VI promotional image",
    paragraphs: [
      "Lucia learned to fight from her father and served time in Leonida Penitentiary after going to bat for her family. After release, she is focused and determined — critics have described her as the emotional core of the story, with her drive providing the momentum that pulls Jason along.",
      "She is one of GTA VI's two playable protagonists and her dynamic with Jason has been widely compared to a modern Bonnie and Clyde. The story spans 5 chapters and 91 missions, and Lucia's perspective is woven throughout.",
      "Like Jason, Lucia's stamina, health, and focus stats are upgraded through eating, sleeping, and gym workouts. The Focus mechanic (L3+R3 / LS+RS) — which triggers slow-motion targeting and environmental scanning — is shared between both protagonists.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "cal-hampton",
    category: "characters",
    name: "Cal Hampton",
    summary: "Jason's conspiracy-minded friend in the Keys — a homebody who monitors Coast Guard communications and keeps tabs on what's going on around him.",
    status: "Official Rockstar profile · confirmed",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/Cal_Hampton_01.0xlil231_osh4.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Cal Hampton at a mini-golf course in official GTA VI artwork",
    paragraphs: [
      "Cal is Jason's friend and an associate of Brian Heder. He prefers staying home, monitoring Coast Guard communications, and spinning theories about what is actually happening in the Keys — his corner of Leonida feels local, grounded, and a world apart from Vice City.",
      "He provides the Keys-based supporting infrastructure early in the story, connecting Jason's past to the wider criminal network that the main narrative unravels.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "boobie-ike",
    category: "characters",
    name: "Boobie Ike",
    summary: "A well-connected Vice City entrepreneur with a business empire spanning real estate, nightlife, and music — the city's power-broker underside in human form.",
    status: "Official Rockstar profile · confirmed",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/Boobie_Ike_03.0neka36~z25b5.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Boobie Ike in a Vice City club in official GTA VI artwork",
    paragraphs: [
      "Boobie is an established Vice City fixture whose business empire spans real estate, a nightclub, and a recording studio (Only Raw Records). His reach connects the city's surface glamour to its criminal substrate.",
      "His partnership with aspiring music executive Dre'Quan Priest anchors the Vice City music storyline. Boobie represents the established order that Jason and Lucia eventually collide with as their operation expands from the Keys into the city.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "drequan-priest",
    category: "characters",
    name: "Dre'Quan Priest",
    summary: "A hungry music executive working his way into Vice City's entertainment scene through Only Raw Records.",
    status: "Official Rockstar profile · confirmed",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/DreQuan_Priest_02.02u69e~nkk3eo.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Dre'Quan Priest at a nighttime event in official GTA VI artwork",
    paragraphs: [
      "Dre'Quan is an aspiring music executive who has built his way into Vice City's entertainment scene alongside Boobie Ike at Only Raw Records. He connects the story's street-level Keys action to the city's glossy music industry.",
      "His association with Real Dimez and the wider Vice City rap scene makes him a bridge between the cultural and criminal threads running through the game's second and third acts.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "real-dimez",
    category: "characters",
    name: "Real Dimez",
    summary: "A viral rap duo whose social-media presence and music have made them stars in Vice City's recording scene.",
    status: "Official Rockstar profile · confirmed",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/Real_Dimez_02.1366u9.x.yp0_.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Real Dimez performing in official GTA VI artwork",
    paragraphs: [
      "Real Dimez are a duo whose viral videos and recordings made their name before the story begins. They are connected to Dre'Quan Priest and the Only Raw Records network — Vice City's music scene given a satirical social-media edge.",
      "Their arc weaves Vice City's entertainment landscape into the wider story, reflecting Rockstar's satirical take on influencer culture and the hustle behind music-industry success.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "raul-bautista",
    category: "characters",
    name: "Raul Bautista",
    summary: "An experienced, risk-hungry bank robber whose appetite for bigger scores draws everyone around him into dangerous territory.",
    status: "Official Rockstar profile · confirmed",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/Raul_Bautista_03.0-x4xbav_6c40.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Raul Bautista aboard a boat in official GTA VI artwork",
    paragraphs: [
      "Raul is a seasoned criminal with a track record of bank jobs and an escalating taste for risk. His presence in the story adds another criminal thread that eventually intersects with Jason and Lucia's expanding operation.",
      "GTA VI's heist missions range from small convenience-store robberies to major bank jobs requiring careful planning and partner coordination. Raul embodies the game's mechanics at their highest stakes.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "brian-heder",
    category: "characters",
    name: "Brian Heder",
    summary: "Jason's boss in the Keys — a long-time local drug runner whose operation sets the stage for the story's opening.",
    status: "Official Rockstar profile · confirmed",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/Brian_Heder_01.0r.ute88os9k-.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Brian Heder and Jason in a car in official GTA VI artwork",
    paragraphs: [
      "Brian runs drug operations in the Leonida Keys, where Jason works for him at the story's start. He has a long history with Jason and is connected to Cal Hampton — together they form the Keys-based network that the game's first chapter operates within.",
      "Brian's established operation is what makes the initial routine score feel routine — until it isn't. His role grounds the story's opening before the conspiracy pulls Jason and Lucia far beyond the Keys.",
    ],
    sourceUrl: officialCharacters,
  },

  // ── VEHICLES ────────────────────────────────────────────────────────────────
  {
    slug: "cars-and-road-vehicles",
    category: "vehicles",
    name: "Cars & road vehicles",
    summary: "Nearly 600 total vehicles are in GTA VI, including everyday sedans, sports cars, muscle cars, supercars, and trucks across all of Leonida.",
    status: "In-game confirmed · ~600 total vehicles",
    illustration: "car",
    image: "https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_02.1486~7_v40cn..jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "A car in an official GTA VI promotional image",
    paragraphs: [
      "GTA VI features nearly 600 total vehicles — the largest roster in series history. Confirmed returning and new car models include the Declasse Vamos, Grotti Dolce Vita RSX, Truffade Thrax, Progen Emerus, Mamba GT, Sentinel Classic Cabriolet, and Vapid Stanier '55, alongside a wide range of everyday sedans, coupes, pickups, and off-roaders.",
      "GTA VI introduces 281 'Standout Vehicles' — rare, custom-liveried configurations of standard cars hidden across Vice City and Leonida. Finding them all is a major collectible layer of the open world.",
      "Vehicle management is deeper than any previous GTA: cars now have functional fuel gauges requiring gas station refueling, and engine condition stats that degrade with damage. Weapons and illegal goods are stored in vehicle trunks, which you can access to change your loadout while seated in any registered vehicle.",
    ],
    sourceUrl: rockstarMedia,
  },
  {
    slug: "motorcycles",
    category: "vehicles",
    name: "Motorcycles & bikes",
    summary: "A wide spectrum of street bikes, choppers, dirt bikes, and bicycles — integrated into Leonida's street racer subcultures.",
    status: "In-game confirmed · models vary by region",
    illustration: "car",
    image: "https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_01.07m377xeb6jhq.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Jason on a motorcycle in an official GTA VI promotional image",
    paragraphs: [
      "Motorcycles in GTA VI range from sport bikes and choppers to dirt bikes and standard bicycles. They are woven into the game's street racer subcultures across Vice City and the wider state of Leonida.",
      "Like all vehicles, motorcycles have fuel gauges and are subject to the game's enhanced damage model. Dirt bikes suit the off-road terrain of Grassrivers and Mount Kalaga, while sport bikes are part of Vice City's racing scene.",
    ],
    sourceUrl: rockstarMedia,
  },
  {
    slug: "boats-and-watercraft",
    category: "vehicles",
    name: "Boats & watercraft",
    summary: "From luxury powerboats and personal watercraft to swamp airboats — Leonida's coastline, keys, and wetlands demand a full naval roster.",
    status: "In-game confirmed · includes airboats and jet skis",
    illustration: "boat",
    image: "https://www.rockstargames.com/VI/_next/static/media/Raul_Bautista_03.0-x4xbav_6c40.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "A boat in an official GTA VI promotional image",
    paragraphs: [
      "Confirmed watercraft include the Seashark Westbound Azure personal watercraft, the Airgator Dr Sheehan's Airboat and Airgator Naughty Boy Airboat for swamp navigation in Grassrivers, and a range of high-speed luxury powerboats.",
      "Boats are essential for exploring the Leonida Keys archipelago and the coastal regions. Water activities including kayaking, scuba diving, and jet skiing are available across the state. The Grassrivers wetlands in particular reward players who invest in airboat and swamp-capable watercraft.",
    ],
    sourceUrl: rockstarMedia,
  },
  {
    slug: "aircraft",
    category: "vehicles",
    name: "Aircraft",
    summary: "From civilian puddle-jumpers to luxury helicopters and high-end private jets — Leonida's skies have a full roster of confirmed aircraft.",
    status: "In-game confirmed · includes helicopters and jets",
    illustration: "aircraft",
    image: "https://www.rockstargames.com/VI/_next/static/media/Brian_Heder_03.10ntuqh2h6upf.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "A small plane in an official GTA VI promotional image",
    paragraphs: [
      "Confirmed aircraft include the Buckingham Dragonfly Volatus helicopter, the Diamond Jubilee, and the Shamal private jet, alongside military transport platforms and smaller civilian puddle-jumpers found at airports and hangars across Leonida.",
      "Helicopters can be found on corporate rooftops in Vice City and at dedicated helipads. Private jets spawn at airports. As with all GTA VI vehicles, aircraft now have fuel management systems and enhanced damage physics.",
    ],
    sourceUrl: rockstarMedia,
  },

  // ── WEAPONS ─────────────────────────────────────────────────────────────────
  {
    slug: "pistols-and-revolvers",
    category: "weapons",
    name: "Pistols & revolvers",
    summary: "GTA VI's sidearm roster is extensive — from everyday Girardi and Klose pistols to premium Hawk & Little revolvers and the powerful Fairview Kalinga .50.",
    status: "In-game confirmed · verified roster",
    illustration: "weapon",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Defenders_maintain_readiness_with_new_M18_pistol_%286291060%29.jpg/960px-Defenders_maintain_readiness_with_new_M18_pistol_%286291060%29.jpg",
    imageAlt: "Illustrative pistol image; not a GTA VI asset",
    imageCredit: "Senior Airman Eugene Oliver / U.S. Air Force",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Defenders_maintain_readiness_with_new_M18_pistol_(6291060).jpg",
    imageLicense: "U.S. public domain",
    paragraphs: [
      "Confirmed pistols include the Girardi ES9, Girardi ES18, Klose K17, Klose K17 MCD, Scorpio Nipper .38, Schlamm DRX, Duke 1922, and Fairview Kalinga .50. Revolvers include the Duke Mustang .357, Hawk & Little .38, Hawk & Little Morgan, Scorpio Akulus, and Wortham WCR1.",
      "Sidearms are purchased through Ammu-Nation (across Everyday, Premium, Hunting, and Pawn tiers) or found in the world. As part of GTA VI's loadout system, Jason and Lucia can carry two sidearms in their active loadout. Suppressors are available early — grabbing one from Ammu-Nation in Key Lento in Chapter 1 is recommended for quieter takedowns.",
      "Cheats that unlock weapons require story progression to access and immediately disable saving and achievements when activated.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },
  {
    slug: "shotguns",
    category: "weapons",
    name: "Shotguns",
    summary: "GTA VI has one of the deepest shotgun rosters in the series — from the Shrewsbury Drifter to the Girardi Super400 and the premium Mason & Keen Longshot.",
    status: "In-game confirmed · verified roster",
    illustration: "weapon",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Custom_wood_bat_01.webp/960px-Custom_wood_bat_01.webp",
    imageAlt: "Illustrative image; not a GTA VI asset",
    imageCredit: "Wikideas1",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Custom_wood_bat_01.webp",
    imageLicense: "CC0 1.0",
    paragraphs: [
      "Confirmed shotguns: Fortune & Son Gorse 425, Fortune & Son Moreland 850, Girardi AZ1200, Girardi Super400, Girardi Verro, Goodwin Comshot 12, Kozlov KVGA-12, Mason & Keen Longshot, Mason & Keen Shortstraw, Shrewsbury Drifter, and Shrewsbury Hobo.",
      "Shotguns are effective at close range and available in Ammu-Nation's standard and premium tiers. They are part of the longarm slot in Jason and Lucia's two-longarm active loadout. Extra shotguns and ammo can be stashed in vehicle trunks.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },
  {
    slug: "firearms",
    category: "weapons",
    name: "SMGs, rifles & heavy weapons",
    summary: "GTA VI's mid-to-late game arsenal includes SMGs, tactical rifles, assault rifles, sniper rifles, and high-explosive launchers — many unlocked through story progression.",
    status: "In-game confirmed · partial verified roster",
    illustration: "weapon",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Defenders_maintain_readiness_with_new_M18_pistol_%286291060%29.jpg/960px-Defenders_maintain_readiness_with_new_M18_pistol_%286291060%29.jpg",
    imageAlt: "Illustrative firearms image; not a GTA VI asset",
    imageCredit: "Senior Airman Eugene Oliver / U.S. Air Force",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Defenders_maintain_readiness_with_new_M18_pistol_(6291060).jpg",
    imageLicense: "U.S. public domain",
    paragraphs: [
      "Confirmed SMGs and machine pistols include the ADB PD-90, BZI Vatra, and Deever Tech DSG. Assault and tactical rifles feature heavily in mid-to-late game and become available through expanded Ammu-Nation inventory and military drops. The Fairview Island Poacher FF-50 is a confirmed long-range sniper rifle.",
      "Heavy weapons including rocket launchers and high-explosive ordnance are found through high-tier military sources and top-level Ammu-Nation inventories. GTA VI's loadout system means these must often be stored in vehicle trunks and retrieved when needed.",
      "Many of the most powerful weapons unlock through story progression milestones. Using cheats to spawn weapons disables saving and achievement tracking for the session — always hard-save before experimenting.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },
  {
    slug: "melee-weapons",
    category: "weapons",
    name: "Melee weapons & equipment",
    summary: "GTA VI's melee roster and equipment system is the most detailed in the series — from baseball bats and combat knives to lockpicks, zipties, and trauma kits.",
    status: "In-game confirmed · verified roster",
    illustration: "weapon",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Custom_wood_bat_01.webp/960px-Custom_wood_bat_01.webp",
    imageAlt: "Illustrative wooden baseball bat rendering; not a GTA VI asset",
    imageCredit: "Wikideas1",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Custom_wood_bat_01.webp",
    imageLicense: "CC0 1.0",
    paragraphs: [
      "Confirmed melee weapons: Baseball Bat, Baton, Brass Knuckles, Bushcraft Knife, Combat Knife, Diving Knife, EDC Knife, Hunting Knife, Survival Knife, Switchblade, and various hammers.",
      "GTA VI also includes a detailed equipment and throwables system: Jerry Can, Molotov Cocktails, Proximity Mines, Flashlights, Binoculars, Lockpicks, Zipties, Body Armor, Taser, and Trauma Kits. These support the game's stealth and planning mechanics — lockpicks for quiet entry, zipties for restraining targets, trauma kits for field recovery.",
      "Non-lethal melee approaches (using the Taser or restrained takedowns) contribute to a Professional Criminal Profile rating, while aggressive approaches shift your profile toward Violent.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },

  // ── TIPS ────────────────────────────────────────────────────────────────────
  {
    slug: "first-session",
    category: "tips",
    name: "Plan your first session",
    summary: "The story opens in the southern Keys. Here is what to do — and not do — in your first hours in Leonida.",
    status: "In-game verified",
    illustration: "compass",
    paragraphs: [
      "GTA VI opens in the Leonida Keys region around Key Lento. The story begins with Jason and Lucia's small-time operation — take time to learn the region before rushing north. The Keys introduce the game's mechanics at a manageable pace.",
      "Head to Ammu-Nation in Key Lento early and grab a suppressor for your sidearm. It costs little and prevents small encounters from spiralling into full police responses while your stats are still low.",
      "Before you do anything else: check Settings > Gameplay for accessibility options including Accessible Combat (reduced incoming damage, increased outgoing) and Reduced Vehicle Damage. Set them now if you want a smoother entry. And always create a manual save before experimenting with cheats — activating any cheat disables saving and turns off trophies for that session.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },
  {
    slug: "stats-and-fitness",
    category: "tips",
    name: "Build stats early",
    summary: "Health, stamina, and focus are upgradeable in GTA VI — eating, sleeping, and gym workouts matter from the first chapter.",
    status: "In-game verified",
    illustration: "compass",
    paragraphs: [
      "Jason and Lucia have upgradeable stat caps for health, stamina, and focus. Eat and drink coffee after waking up at a safehouse for temporary stamina and focus buffs. Skipping sleep applies stamina penalties over time.",
      "Working out at a gym raises your maximum health and stamina. Train with your partner and both characters benefit from the boost simultaneously — efficient when you can access a gym early in the story.",
      "These stat systems are persistent across the campaign. Investing time in fitness during slower story chapters pays off significantly during high-intensity heist sequences later.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },
  {
    slug: "focus-mode-and-controls",
    category: "tips",
    name: "Master Focus mode and controls",
    summary: "Focus mode (L3+R3) is GTA VI's key new combat tool — it scans environments and triggers slow-motion targeting on foot and in vehicles.",
    status: "In-game verified",
    illustration: "compass",
    paragraphs: [
      "Focus mode is unlocked early in Chapter 1 (Down to Earth mission). Press L3 and R3 simultaneously on PlayStation (LS+RS on Xbox) to activate it. On foot, it highlights points of interest and enables slow-motion targeting. In vehicles, it triggers a slow-motion driving aim.",
      "Pay attention to reticle feedback during combat: a white marker means the target is hit but active, yellow means incapacitated/alive, and red means fatally wounded.",
      "Two useful vehicle controls to learn: hold B/Circle while seated to duck and avoid line of sight from police or enemies; double-tap Y/Triangle when exiting a vehicle to leave the engine running for a quick getaway. Use D-pad Right to open the partner command menu during operations — issue commands to have Lucia or Jason hold positions or drive a secondary vehicle.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },
  {
    slug: "criminal-profile-and-stealth",
    category: "tips",
    name: "Understand Criminal Profiles",
    summary: "GTA VI tracks how you play — stealth and non-lethal choices build a Professional profile; chaos builds a Violent one. Both change how the world responds.",
    status: "In-game verified",
    illustration: "compass",
    paragraphs: [
      "GTA VI's Criminal Profile system evolves based on your choices throughout the campaign. Consistently using stealth, suppressors, lockpicks, and non-lethal takedowns builds a Professional profile. Spraying bullets, triggering mass police attention, and destroying property shifts you toward a Violent or Psycho profile.",
      "The profile is not locked — it reflects your recent behaviour rather than a permanent choice. Changing approach over several missions will shift the profile accordingly.",
      "The police AI has also been fully overhauled in GTA VI to be more dynamic and reactive. Witnesses call in crimes, officers coordinate responses, and wanted levels escalate faster than in previous games. Ducking in a vehicle (hold B/Circle) and changing the car's appearance break line of sight more reliably than simply driving fast.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },
  {
    slug: "heists-and-robberies",
    category: "tips",
    name: "Heists and robbery planning",
    summary: "GTA VI robbery scales from convenience stores to major bank heists. Planning approach, loadout, and escape route makes the difference.",
    status: "In-game verified",
    illustration: "compass",
    paragraphs: [
      "Robberies in GTA VI range from small convenience store hold-ups to major bank heists requiring full tactical planning. Smaller jobs need a weapon and an escape route; larger operations need a full loadout in your vehicle trunk, a prepared getaway vehicle, and partner coordination.",
      "Use the partner command menu (D-pad Right) to position Lucia or Jason during multi-step operations. Securing a garage property early in the game lets you store getaway vehicles safely and stash illegal goods without risk.",
      "Clean up local side content and treasure diving in the Keys before moving north — the Keys introduce the robbery loop at a low-stakes scale, and the rewards fund your mainland operation. Driving back from Vice City to the Keys is time-consuming in the early game.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },
  {
    slug: "explore-without-spoilers",
    category: "tips",
    name: "Explore Leonida without spoilers",
    summary: "Six distinct regions, nearly 600 vehicles, 91 missions, and 281 Standout Vehicles to find. A spoiler-light approach to seeing everything.",
    status: "General exploration advice",
    illustration: "compass",
    paragraphs: [
      "Leonida spans six regions: Vice City, the Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga National Park. Each has its own character, activities, and vehicle types. The main story progresses roughly south-to-north, but the open world is accessible throughout.",
      "The 281 Standout Vehicles — rare custom-liveried cars hidden across specific locations — are a major collectible layer. Treat the open world as a scavenger hunt between missions rather than rushing the story.",
      "Our region pages separate confirmed setting details from speculation. Check the source note on each guide before treating a tip as verified.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI/only-in-leonida",
  },
  {
    slug: "verify-before-you-follow",
    category: "tips",
    name: "Verify a tip before you follow it",
    summary: "A quick source-checking routine for cheats, vehicles, weapons, and mission guides in GTA VI.",
    status: "Editorial standard",
    illustration: "compass",
    paragraphs: [
      "Look for a reproducible in-game result, the exact game version tested, the platform (PS5 or Xbox Series X|S), and a source that shows the complete steps. Treat cropped clips, unsourced lists, and AI-generated posts as leads rather than proof.",
      "For cheat codes specifically: GTA VI's 61 cheats are gated behind story progression. Any guide publishing a full list of cheats without mentioning the unlock requirement may be incomplete. All cheats must be entered via the in-game phone interface (D-pad Up) — not controller button sequences.",
      "This site labels information as official, in-game verified, or unconfirmed so readers can judge the evidence for themselves.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI/media",
  },
];

export const NEWS = [
  {
    slug: "gta-vi-is-out-november-2026",
    title: "GTA VI is out: everything confirmed from day one",
    date: "2026-11-19",
    category: "Launch",
    summary: "GTA VI launched November 19, 2026 on PS5 and Xbox Series X|S — breaking entertainment records and earning near-universal critical acclaim. Here is what we know from day one.",
    paragraphs: [
      "Grand Theft Auto VI launched worldwide on November 19, 2026 for PlayStation 5 and Xbox Series X|S, immediately shattering entertainment industry launch records. The game secured the largest launch in PlayStation history, drawing tens of millions of players in its opening weekend.",
      "Set in the fictional state of Leonida — Rockstar's satirical take on modern Florida — the game follows Lucia Caminos and Jason Duval across a main campaign spanning 5 chapters and 91 missions, averaging 65+ hours of playtime. Critics have called it a 'masterpiece' and 'unrivaled open-world simulator'.",
      "Key confirmed facts: six regions (Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, Mount Kalaga), nearly 600 vehicles, over 60 weapons, a Focus mechanic, Criminal Profile system, and a full stat upgrade loop for health, stamina, and focus. A PC release date has not been announced.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },
  {
    slug: "gta-vi-critical-reception",
    title: "GTA VI reviews: what the critics said",
    date: "2026-11-19",
    category: "Review roundup",
    summary: "Near-universal critical acclaim greeted GTA VI's launch — reviewers praised its technical achievement, character work, and open-world detail while debating pacing and pricing.",
    paragraphs: [
      "GTA VI received near-perfect scores across major outlets at launch. Reviewers described it as a 'masterpiece', an 'unrivaled open-world simulator', and a 'surprisingly poignant character-driven love story set against a backdrop of extreme corporate and cultural satire'.",
      "Critical praise centred on: the staggering level of environmental detail (realistic physics, dynamic weather, NPC crowd density), the character dynamic between Jason and Lucia (widely compared to a modern Bonnie and Clyde), and the scope of the five-chapter, 91-mission campaign.",
      "Points of community debate included aspects of mission pacing in the later chapters, platform performance scaling, and the game's high baseline retail price. These are minority concerns against an otherwise exceptional critical reception.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },
  {
    slug: "meet-jason-and-lucia",
    title: "Meet Jason and Lucia: GTA VI's confirmed protagonists",
    date: "2026-11-15",
    category: "Characters",
    summary: "What Rockstar's character profiles and the released game establish about the central duo — their backgrounds, their dynamic, and what players should expect.",
    paragraphs: [
      "Jason Duval — former Army soldier, current drug runner in the Leonida Keys — and Lucia Caminos — recently released from Leonida Penitentiary, determined to build a better life — are GTA VI's two playable protagonists. Their dynamic is the spine of the story.",
      "After a routine score goes wrong, the pair find themselves entangled in a state-wide criminal conspiracy that takes them from the Keys to Vice City and beyond across five chapters. Critics have consistently compared their relationship to a contemporary Bonnie and Clyde.",
      "Both characters have fully upgradeable stat profiles. Their health, stamina, and focus caps rise through eating, sleeping, and gym workouts. The Criminal Profile system tracks how each player handles conflicts and shifts the game's tone accordingly.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI/only-in-leonida",
  },
  {
    slug: "vehicles-weapons-and-cheats-status",
    title: "Vehicles, weapons, and cheats: the confirmed picture",
    date: "2026-11-19",
    category: "Guide update",
    summary: "GTA VI has nearly 600 vehicles, over 60 weapons, 281 Standout Vehicles, and 61 cheat codes — here is the confirmed picture from the released game.",
    paragraphs: [
      "GTA VI ships with nearly 600 total vehicles, over 60 base weapons across all categories, and 281 rare 'Standout Vehicles' hidden across Leonida. The weapon system uses a physical loadout: two active sidearms, two active longarms, plus melee and throwables. Extra weapons go in vehicle trunks or Ammu-Nation lockers.",
      "The game's 61 cheat codes are gated behind story progression — not all are available from the start. Cheats are entered via the in-game phone interface (D-pad Up) using directional sequences. Activating any cheat immediately disables saving and turns off trophies/achievements for that session.",
      "Vehicle management is deeper than any prior GTA: fuel gauges, engine condition degradation, and trunk storage are persistent systems. Rockstar has not published a complete official vehicle or weapon database — this guide will continue to update as the community verifies entries.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI/media",
  },
  {
    slug: "gta-vi-launch-facts-november-2026",
    title: "GTA VI pre-launch briefing: release date, platforms, and what was confirmed",
    date: "2026-11-15",
    category: "Fact check",
    summary: "A source-led summary of the release information Rockstar published ahead of the November 19, 2026 launch on PS5 and Xbox Series X|S.",
    paragraphs: [
      "Rockstar's official GTA VI page listed November 19, 2026 as the release date and PlayStation 5 and Xbox Series X|S as the launch platforms. This briefing was accurate: GTA VI launched on that date without delay.",
      "The game is set in the fictional state of Leonida. Rockstar's official character material introduced Jason Duval and Lucia Caminos as the two protagonists, alongside a supporting cast including Cal Hampton, Boobie Ike, Dre'Quan Priest, Real Dimez, Raul Bautista, and Brian Heder.",
      "PC timing remains unannounced. Full vehicle and weapon rosters and all cheat codes continue to be verified by the community after launch.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },
];

export const getGuide = (category: string, slug: string) =>
  GUIDES.find((guide) => guide.category === category && guide.slug === slug);

export const getNewsArticle = (slug: string) => NEWS.find((article) => article.slug === slug);
