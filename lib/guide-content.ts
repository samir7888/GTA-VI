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
    description: "Profiles of the people Rockstar has introduced for GTA VI, with story details kept separate from speculation.",
  },
  vehicles: {
    title: "Vehicles",
    description: "A spoiler-light field guide to vehicle types seen in official GTA VI promotional material. Exact model names and performance details are not assumed.",
  },
  weapons: {
    title: "Weapons",
    description: "A cautious look at the weapon categories shown in promotional material. Exact names, stats, availability, and locations await in-game verification.",
  },
  tips: {
    title: "Tips & Tricks",
    description: "Practical, spoiler-free advice for getting ready and exploring. Game-specific controls and systems are only included once verified.",
  },
};

const rockstarMedia = "https://www.rockstargames.com/VI/media";
const officialCharacters = "https://www.rockstargames.com/VI/only-in-leonida";
export const DEFAULT_SOCIAL_IMAGE = "https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_02.1486~7_v40cn..jpg?akim=1&imdensity=1&imwidth=1200";

export const GUIDES: GuideEntry[] = [
  {
    slug: "jason-duval",
    category: "characters",
    name: "Jason Duval",
    summary: "A former soldier trying to find a simpler life in the Leonida Keys, until Lucia changes the stakes.",
    status: "Official Rockstar profile",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_02.1486~7_v40cn..jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Jason driving in an official GTA VI promotional image",
    paragraphs: [
      "Rockstar describes Jason as someone who grew up around criminals, served in the Army, and later worked for local drug runners in the Keys. He wants a quieter life, but his relationship with Lucia pulls him into a larger criminal story.",
      "What is confirmed: Jason is one of the two protagonists and his story is tied to Lucia and the state of Leonida. Mission order, abilities, and detailed gameplay systems have not been confirmed in the profile.",
      "Spoiler-free watchlist: note how Jason's life in the Keys contrasts with Lucia's recent release from prison, and how the pair's trust is framed in official trailers.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "lucia-caminos",
    category: "characters",
    name: "Lucia Caminos",
    summary: "A determined protagonist recently released from prison and ready to take control of her future.",
    status: "Official Rockstar profile",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_01.0a7yqvewctkfp.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Lucia training in an official GTA VI promotional image",
    paragraphs: [
      "Rockstar's official profile says Lucia learned to fight from her father and served time in Leonida Penitentiary after fighting for her family. She is focused on building the better life her mother wanted for them.",
      "Lucia is one of GTA VI's two protagonists. Rockstar presents her partnership with Jason as central to the story, but has not published a complete mission list or a full breakdown of her gameplay abilities.",
      "Spoiler-free watchlist: follow how Lucia's plans, family history, and partnership with Jason are introduced in official material. Treat detailed plot claims outside Rockstar's releases as unverified.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "cal-hampton",
    category: "characters",
    name: "Cal Hampton",
    summary: "Jason's friend, a homebody with a conspiratorial streak and an interest in Coast Guard communications.",
    status: "Official Rockstar profile",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/Cal_Hampton_01.0xlil231_osh4.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Cal Hampton at a mini-golf course in official GTA VI artwork",
    paragraphs: [
      "Rockstar introduces Cal as Jason's friend and an associate of Brian. He prefers staying home, monitoring Coast Guard communications, and entertaining theories about what is happening around him.",
      "His profile suggests a supporting role in the wider Leonida story. Rockstar has not published a complete character list or confirmed how Cal's role develops across the campaign.",
      "Keep confirmed character descriptions separate from fan theories about his online activity or possible missions.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "boobie-ike",
    category: "characters",
    name: "Boobie Ike",
    summary: "A Vice City entrepreneur whose businesses span real estate, nightlife, and music.",
    status: "Official Rockstar profile",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/Boobie_Ike_03.0neka36~z25b5.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Boobie Ike in a Vice City club in official GTA VI artwork",
    paragraphs: [
      "Rockstar presents Boobie as an established Vice City figure with a business empire that includes real estate, a club, and a recording studio.",
      "His partnership with aspiring music executive Dre'Quan Priest and the label Only Raw Records is part of the official character setup. Specific missions or business-management mechanics have not been confirmed.",
      "This guide will add verified story and gameplay details after they are available in the released game.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "drequan-priest",
    category: "characters",
    name: "Dre'Quan Priest",
    summary: "A music-focused hustler working to build a name in Vice City's entertainment scene.",
    status: "Official Rockstar profile",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/DreQuan_Priest_02.02u69e~nkk3eo.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Dre'Quan Priest at a nighttime event in official GTA VI artwork",
    paragraphs: [
      "Rockstar describes Dre'Quan as an aspiring music executive who has worked his way toward the Vice City music business. He is associated with Boobie Ike and Only Raw Records.",
      "His profile connects the street-level setting to the city's music scene. Any claims about playable missions, unlocks, or a full soundtrack role remain unconfirmed until Rockstar or the game verifies them.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "real-dimez",
    category: "characters",
    name: "Real Dimez",
    summary: "A social-media-savvy rap duo connected to Vice City's music scene.",
    status: "Official Rockstar profile",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/Real_Dimez_02.1366u9.x.yp0_.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Real Dimez performing in official GTA VI artwork",
    paragraphs: [
      "Rockstar introduces Real Dimez as a duo whose viral videos and music have helped build their name. Their story connects them to Dre'Quan Priest and Vice City's recording scene.",
      "The official profile introduces the group, but does not publish a complete mission list or confirm whether either member is playable.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "raul-bautista",
    category: "characters",
    name: "Raul Bautista",
    summary: "A confident, experienced bank robber whose appetite for risk puts the spotlight on his crew.",
    status: "Official Rockstar profile",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/Raul_Bautista_03.0-x4xbav_6c40.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Raul Bautista aboard a boat in official GTA VI artwork",
    paragraphs: [
      "Rockstar's official character material presents Raul as an experienced bank robber who is willing to take bigger risks. His presence adds another criminal thread to the wider Leonida story.",
      "The public profile does not establish a full mission arc or detailed gameplay role. Those details remain open until officially confirmed or verified in-game.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "brian-heder",
    category: "characters",
    name: "Brian Heder",
    summary: "A Keys-based drug runner with a long history in the local business.",
    status: "Official Rockstar profile",
    illustration: "person",
    image: "https://www.rockstargames.com/VI/_next/static/media/Brian_Heder_01.0r.ute88os9k-.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Brian Heder and Jason in a car in official GTA VI artwork",
    paragraphs: [
      "Rockstar places Brian in the Leonida Keys, where he works as a drug runner and has a history with Jason. His profile also connects him to Cal Hampton.",
      "The official description establishes the characters' broad connection, not the full chronology or outcome of their story.",
    ],
    sourceUrl: officialCharacters,
  },
  {
    slug: "cars-and-road-vehicles",
    category: "vehicles",
    name: "Cars & road vehicles",
    summary: "Road traffic is a major part of Leonida's visual identity, from city streets to long coastal drives.",
    status: "Vehicle class guide · model roster unconfirmed",
    illustration: "car",
    image: "https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_02.1486~7_v40cn..jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "A car in an official GTA VI promotional image",
    paragraphs: [
      "Official GTA VI promotional footage depicts road vehicles in urban, rural, and coastal settings. This page deliberately avoids assigning real-world makes, in-game names, handling ratings, or prices without an authoritative source.",
      "When the game is available, a useful vehicle entry should record its in-game name, class, where it was found, whether the location is repeatable, and what was tested on each platform.",
      "Player tip: capture a screenshot of the in-game vehicle name and location when documenting a discovery. Trailer lookalikes and fan-made vehicle lists are not enough to verify a model.",
    ],
    sourceUrl: rockstarMedia,
  },
  {
    slug: "motorcycles",
    category: "vehicles",
    name: "Motorcycles",
    summary: "A road-vehicle category to track once in-game models and handling are confirmed.",
    status: "Vehicle class guide · details unconfirmed",
    illustration: "car",
    image: "https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_01.07m377xeb6jhq.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "Jason on a motorcycle in an official GTA VI promotional image",
    paragraphs: [
      "Motorcycle model names, classes, customization options, and spawn locations have not been verified for this guide. We will not infer those details from real-world resemblance.",
      "At launch, record the exact in-game name and test handling in a safe area before publishing performance advice. Separate story unlocks from vehicles found in free roam.",
    ],
    sourceUrl: rockstarMedia,
  },
  {
    slug: "boats-and-watercraft",
    category: "vehicles",
    name: "Boats & watercraft",
    summary: "A practical catalog for water-going vehicles in a state shaped by coastlines, islands, and wetlands.",
    status: "Vehicle class guide · model roster unconfirmed",
    illustration: "boat",
    image: "https://www.rockstargames.com/VI/_next/static/media/Raul_Bautista_03.0-x4xbav_6c40.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "A boat in an official GTA VI promotional image",
    paragraphs: [
      "Leonida's official setting includes coastal and island regions. Specific boat names, handling, storage, and acquisition methods should be verified in the game rather than assumed from earlier Grand Theft Auto titles.",
      "When testing, note whether a watercraft is found docked, acquired during a mission, or purchased. A trailer appearance alone does not establish a reliable spawn location.",
    ],
    sourceUrl: rockstarMedia,
  },
  {
    slug: "aircraft",
    category: "vehicles",
    name: "Aircraft",
    summary: "Aircraft details will be added after the in-game roster and flight systems can be tested.",
    status: "Vehicle class guide · availability unconfirmed",
    illustration: "aircraft",
    image: "https://www.rockstargames.com/VI/_next/static/media/Brian_Heder_03.10ntuqh2h6upf.jpg?akim=1&imdensity=1&imwidth=1280",
    imageAlt: "A small plane in an official GTA VI promotional image",
    paragraphs: [
      "This entry is a placeholder for verified aircraft models, flight controls, landing locations, and acquisition methods. No aircraft roster or statistics are being presented as confirmed here.",
      "After release, record the exact model name and platform tested. Do not rely on leaks or assume a vehicle from a previous game returns unchanged.",
    ],
    sourceUrl: rockstarMedia,
  },
  {
    slug: "firearms",
    category: "weapons",
    name: "Firearms",
    summary: "A place for verified sidearms and long guns, with names and behavior tested in the released game.",
    status: "Weapon guide · exact roster unconfirmed",
    illustration: "weapon",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Defenders_maintain_readiness_with_new_M18_pistol_%286291060%29.jpg/960px-Defenders_maintain_readiness_with_new_M18_pistol_%286291060%29.jpg",
    imageAlt: "U.S. Air Force airmen training with an M18 pistol; illustrative only, not a GTA VI asset",
    imageCredit: "Senior Airman Eugene Oliver / U.S. Air Force",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Defenders_maintain_readiness_with_new_M18_pistol_(6291060).jpg",
    imageLicense: "U.S. public domain",
    paragraphs: [
      "Promotional material offers glimpses of armed characters, but it does not provide a complete, verified weapon catalog. This guide does not assign exact model names or stats based on visual resemblance.",
      "For each confirmed weapon, we plan to record its in-game name, category, unlock or purchase method, tested behavior, and whether the information differs by platform.",
      "No cheat codes or weapon unlock methods are listed unless they are verified in-game.",
    ],
    sourceUrl: rockstarMedia,
  },
  {
    slug: "melee-weapons",
    category: "weapons",
    name: "Melee weapons",
    summary: "A tracker for close-combat items once their names, availability, and mechanics are verified.",
    status: "Weapon guide · details unconfirmed",
    illustration: "weapon",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Custom_wood_bat_01.webp/960px-Custom_wood_bat_01.webp",
    imageAlt: "Illustrative wooden baseball bat rendering; not a GTA VI asset",
    imageCredit: "Wikideas1",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Custom_wood_bat_01.webp",
    imageLicense: "CC0 1.0",
    paragraphs: [
      "The exact melee roster and combat mechanics have not been documented here. Older GTA games are not reliable proof that a particular item, move, or upgrade returns in GTA VI.",
      "Once confirmed, entries will distinguish ordinary pickups from mission-specific items and note any tested limitations.",
    ],
    sourceUrl: rockstarMedia,
  },
  {
    slug: "first-session",
    category: "tips",
    name: "Plan your first session",
    summary: "A spoiler-free checklist to make launch night smoother without relying on unverified game details.",
    status: "General preparation",
    illustration: "compass",
    paragraphs: [
      "Before launch, update your console, check available storage against the final official requirement, and make sure your account can sign in. Avoid deleting saves or content until you have a backup plan.",
      "For a relaxed first session, decide how much time you have, keep a controller charged, and consider avoiding social feeds if you want to stay spoiler-free.",
      "Once you start playing, take time to learn the controls from the game itself. Do not assume controls or accessibility settings match earlier entries.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },
  {
    slug: "explore-without-spoilers",
    category: "tips",
    name: "Explore Leonida without spoilers",
    summary: "A low-spoiler approach for discovering the regions at your own pace.",
    status: "General exploration advice",
    illustration: "compass",
    paragraphs: [
      "Start with the areas the story introduces, then use the in-game map and signs to choose your own route. This is general open-world advice, not a claim about a specific GTA VI unlock or activity system.",
      "Keep a short note of locations you want to revisit. If a guide includes mission spoilers, wait until you have completed that section before reading further.",
      "Our region pages separate setting details from speculative activity suggestions. Check the source note before treating a tip as confirmed.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI/only-in-leonida",
  },
  {
    slug: "verify-before-you-follow",
    category: "tips",
    name: "Verify a tip before you follow it",
    summary: "A quick source-checking routine for vehicles, weapons, missions, and cheat codes.",
    status: "Editorial standard",
    illustration: "compass",
    paragraphs: [
      "Look for a reproducible in-game result, the exact game version, platform, and a source that shows the complete steps. Treat cropped clips, unsourced lists, and AI-generated posts as leads rather than proof.",
      "For a location tip, record a map reference and whether it is available before or after a mission. For a cheat, test the exact input and note any save or achievement restrictions before recommending it.",
      "This site labels information as official, tested, or unconfirmed so readers can judge the evidence for themselves.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI/media",
  },
  {
    slug: "keep-your-guide-spoiler-safe",
    category: "tips",
    name: "Keep your guide spoiler-safe",
    summary: "Simple ways to browse character and launch coverage without exposing major story beats.",
    status: "Spoiler-free advice",
    illustration: "compass",
    paragraphs: [
      "Use the character and region overviews before mission walkthroughs, and be cautious with video thumbnails and social feeds, which can reveal story events without warning.",
      "When sharing a discovery, describe the region and activity without naming late-game events. We will label any future walkthroughs clearly before adding story spoilers.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },
];

export const NEWS = [
  {
    slug: "gta-vi-launch-facts-november-2026",
    title: "GTA VI pre-launch briefing: release date, platforms, and what is confirmed",
    date: "2026-11-15",
    category: "Fact check",
    summary: "A source-led summary of the release information Rockstar has published, with unknowns called out rather than guessed.",
    paragraphs: [
      "As of November 15, 2026, Rockstar's official GTA VI page lists November 19, 2026 as the release date and PlayStation 5 and Xbox Series X|S as platforms.",
      "The game is set in the fictional state of Leonida, with Vice City at its center. Rockstar's official character material introduces Jason Duval and Lucia Caminos as the two protagonists.",
      "This is an editorial fact briefing, not a claim that new information was announced today. PC timing, a full vehicle and weapon roster, and verified GTA VI cheat codes should not be treated as confirmed unless Rockstar publishes them or they are tested in the released game.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI",
  },
  {
    slug: "meet-jason-and-lucia",
    title: "Meet Jason and Lucia: the confirmed starting point for GTA VI's story",
    date: "2026-11-15",
    category: "Characters",
    summary: "What Rockstar's character profiles establish about the central duo—and what they leave unanswered.",
    paragraphs: [
      "Rockstar's official profiles establish Jason Duval and Lucia Caminos as GTA VI's protagonists. Jason's background includes Army service and work with local drug runners in the Keys; Lucia has recently left Leonida Penitentiary and is focused on changing her circumstances.",
      "The official setup places their partnership at the center of the story. It does not reveal a complete mission sequence, every character relationship, or the consequences of player choices.",
      "For spoiler-light summaries, see our individual character profiles and follow the linked Rockstar source for the original material.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI/only-in-leonida",
  },
  {
    slug: "vehicles-weapons-and-cheats-status",
    title: "Vehicles, weapons, and cheats: separating confirmed details from guesses",
    date: "2026-11-15",
    category: "Guide update",
    summary: "Why our catalogs focus on verified categories and hold back on model names, stats, and cheat inputs.",
    paragraphs: [
      "Promotional material can show a vehicle or weapon without confirming its in-game name, stats, spawn location, or availability. Real-world lookalikes are not reliable identification.",
      "Rockstar has not provided a complete public GTA VI vehicle or weapon database on its official game page. We are preparing the catalog structure now and will add exact entries after sources or in-game testing support them.",
      "We do not publish rumored cheat inputs as working codes. Any future code entry should identify the platform and be tested in-game.",
    ],
    sourceUrl: "https://www.rockstargames.com/VI/media",
  },
];

export const getGuide = (category: string, slug: string) =>
  GUIDES.find((guide) => guide.category === category && guide.slug === slug);

export const getNewsArticle = (slug: string) => NEWS.find((article) => article.slug === slug);
