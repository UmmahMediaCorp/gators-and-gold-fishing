// Single source of truth for all site copy and image paths.
// Voice: direct, confident, outdoorsman. No precious metaphors.

export const brand = {
  name: "Gators & Gold",
  full: "Gators & Gold Fishing Charters",
  tagline: "Trophy Pike & Walleye Charters · Lac La Biche, Alberta",
  promise:
    "Guided fishing trips for Trophy Northern Pike and Walleye on the lakes Rob has fished for thirty years. Open water, hard water, and the rare fall trophy hunts that put real Gators on the leader.",
  email: "gatorsandgold@gmail.com",
  phone: "587-991-4234",
  region: "Lac La Biche, Alberta",
  established: "Est. 1994",
  coordinates: "54.7666° N · 111.9683° W",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Open Water", href: "/open-water" },
  { label: "Ice Fishing", href: "/ice-fishing" },
  { label: "Your Guide", href: "/your-guide" },
  { label: "Gallery", href: "/gallery" },
  { label: "Book Now", href: "/book", emphasized: true },
];

export const trophyStats = [
  { figure: "40\"+", label: "Trophy Pike", caption: "Northern Pike landed on Pinehurst structure each fall." },
  { figure: "28\"+", label: "Class Walleye", caption: "Lac La Biche walleye that hit the trophy slot every season." },
  { figure: "30+", label: "Years on Water", caption: "Rob Clarke guiding pike and walleye since 1994." },
  { figure: "200hp", label: "Mercury 4-Stroke", caption: "Aboard the 2026 Crestliner 1850 Fish Hawk." },
];

export const services = [
  {
    id: "open-water",
    name: "Open Water",
    season: "May 15 — Oct 15",
    species: "Walleye · Northern Pike",
    primary: "Lac La Biche",
    secondary: "Pinehurst Lake (Sept – Oct trophy hunts)",
    summary:
      "Pike and walleye charters from spring spawn to fall turnover, plus exclusive trophy pike hunts on Pinehurst Lake when the water cools.",
    intro:
      "Lac La Biche fishes hard from May through October. Forward-facing sonar shows you fish you'd never find. Thirty seasons of memory tells us where the giants live. The boat does the rest.",
    highlights: [
      "Premier rods, reels & tackle",
      "Forward-facing sonar electronics",
      "Live & artificial bait — species-specific",
      "Onboard washroom",
      "Non-alcoholic beverages",
      "Fully insured · licensed · first-aid certified",
    ],
    href: "/open-water",
  },
  {
    id: "ice-fishing",
    name: "Ice Fishing",
    season: "Dec 15 — Mar 31",
    species: "Walleye · Northern Pike",
    primary: "Lac La Biche",
    secondary: "Run-and-gun by heated UTV",
    summary:
      "Heated UTV. Heated tent. Forward-facing flasher. We move when the bite moves — no shacks-in-place sit-and-wait.",
    intro:
      "Hard water on Lac La Biche is not sit-and-shiver. We run a heated UTV between high-percentage GPS marks. When the bite slides, we slide with it. You stay warm. The fish doesn't get a break.",
    highlights: [
      "Insulated, heated, fully equipped tent",
      "Heated UTV transport",
      "Premier rods, reels, technique-specific bait",
      "Forward-facing sonar electronics",
      "Filleting available · $25 per legal catch",
      "Pending safe ice — your safety is non-negotiable",
    ],
    href: "/ice-fishing",
  },
];

export const pricing = {
  openWater: [
    {
      label: "Half Day · Lac La Biche",
      hours: "4 hrs · 8a–12p or 1p–5p",
      tiers: [
        { who: "1–2 anglers", price: "$400" },
        { who: "3 anglers", price: "$500" },
      ],
    },
    {
      label: "Full Day · Lac La Biche",
      hours: "8 hrs · flexible start",
      tiers: [
        { who: "1–2 anglers", price: "$600" },
        { who: "3 anglers", price: "$700" },
      ],
    },
    {
      label: "Trophy Pike Hunt · Pinehurst",
      hours: "8 hrs · Sept 1 — Oct 15",
      tiers: [{ who: "1–2 anglers (max)", price: "$700" }],
    },
  ],
  ice: [
    {
      label: "Half Day on the Hard Water",
      hours: "4 hrs · 8a–12p or 1p–5p",
      tiers: [
        { who: "1–2 anglers", price: "$300" },
        { who: "3 anglers", price: "$350" },
      ],
    },
    {
      label: "Full Day on the Hard Water",
      hours: "8 hrs · flexible start",
      tiers: [
        { who: "1–2 anglers", price: "$500" },
        { who: "3 anglers", price: "$550" },
      ],
    },
  ],
  perks: [
    "Children under 16 fish FREE with a paying adult",
    "10% off — first responders, military, veterans",
    "$200 deposit confirms your date — Interac e-Transfer preferred",
  ],
};

export const guide = {
  name: "Rob Clarke",
  role: "Owner · Head Guide",
  yearsActive: "30+",
  basedIn: "Lac La Biche, AB",
  credentials: ["Fully insured", "Licensed Alberta guide", "First Aid certified"],
  bio: [
    "Rob's father taught him to fish on these same waters. Three decades later the lessons stuck — and the rods got better and the boat got bigger.",
    "He's chased pike and walleye across the Lakeland his whole life. Today he runs Gators & Gold full-time — summer charters out of Lac La Biche, winter ice runs on the same lakes that raised him.",
  ],
  quotes: [
    "I'll adapt to you — not the other way around.",
    "You can't catch the fish of a lifetime sitting at home. So I'll see you at the launch.",
  ],
};

export const boat = {
  model: "2026 Crestliner 1850 Fish Hawk",
  motor: "200hp Mercury 4-Stroke",
  electronics: "Forward-Facing Sonar · GPS Mapping",
  capacity: "Up to 3 anglers",
  includes: [
    "Coast Guard safety equipment",
    "Personal flotation devices",
    "Onboard washroom",
    "Premier rods, reels & tackle",
    "Live & artificial bait",
    "Cooler · non-alcoholic beverages",
  ],
};

export const whatToBring = [
  "Alberta Fishing License (age 16+)",
  "Weather-appropriate clothing & rain gear",
  "Closed-toe footwear",
  "Polarized sunglasses & sunscreen",
  "Personal food and snacks",
];

export const whatToBringIce = [
  "Alberta Fishing License (age 16+)",
  "Hat, jacket, gloves or mitts, snow pants",
  "Warm, waterproof footwear",
  "Polarized sunglasses & hand-warmer packets",
  "Personal food and snacks",
];

export const policy = {
  deposit: "$200 deposit confirms your booking.",
  payment:
    "Interac e-Transfer to gatorsandgold@gmail.com is preferred — instant, no fees. Credit / AMEX accepted with processing fee.",
  cancellation:
    "Guide-initiated cancellation (weather, ice, mechanical): minimum 48 hrs notice — full refund or reschedule. Client-initiated: 48 hrs notice required to reschedule; less than 48 hrs forfeits deposit.",
  waiver: "Each adult signs a brief waiver before the boat leaves the launch. Parents sign for under-16 anglers.",
};

export const faqs = [
  {
    q: "Do I need a fishing license?",
    a: "Yes. Anyone 16 or older needs a valid Alberta Fishing License. Buy one online in three minutes — we'll send you the link with your booking confirmation.",
  },
  {
    q: "Is the trip catch-and-release?",
    a: "We follow Alberta's regulations to the letter. Trophies go back. Eaters within the slot can come home — and we'll fillet them on shore for $25 per legal catch.",
  },
  {
    q: "What happens if the weather turns?",
    a: "Safety first, always. If I cancel, you get a full refund or a free reschedule. If you're unsure, text me the morning of and we'll make the call together.",
  },
  {
    q: "Can I bring my kids?",
    a: "Absolutely. Kids under 16 fish free with a paying adult. The boat is stable, the washroom is clean, and they'll leave with a story.",
  },
  {
    q: "First time on a fishing boat?",
    a: "Most of our guests are. I'll show you everything — rods, reels, knots, technique. We adapt to you, not the other way around.",
  },
  {
    q: "Where do we launch from?",
    a: "Lac La Biche for most charters; Pinehurst Lake for fall trophy pike hunts. I'll send exact launch coordinates and a what-to-bring list once you're booked.",
  },
];

// "Trip Log" — recent days on the water, presented as catch reports.
export const tripLog = [
  {
    date: "Sept 22, 2025",
    title: "44-incher off Pinehurst's east arm",
    excerpt:
      "Cold-front day, no sun, four-foot rollers. Big rubber over a weed edge. She ate it on the second drift.",
    species: "Northern Pike",
    length: "44\"",
    location: "Pinehurst Lake",
    image: "/images/pike-trophy-yellow.jpg",
  },
  {
    date: "July 14, 2025",
    title: "Mid-summer walleye gold rush",
    excerpt:
      "Twenty-two walleye over twenty-two inches in a single morning. Forward-facing sonar made the difference — no guessing.",
    species: "Walleye",
    length: "22\"+",
    location: "Lac La Biche",
    image: "/images/two-generations-walleye.jpg",
  },
  {
    date: "Feb 02, 2025",
    title: "Hard water, soft bite",
    excerpt:
      "Six inches of fresh snow on top of glare ice. Smallest jig in the box. We moved every fifteen minutes until the rods folded.",
    species: "Walleye",
    length: "26\"",
    location: "Lac La Biche · Hard Water",
    image: "/images/ice-fishing-golden.jpg",
  },
];

export const testimonials = [
  {
    quote:
      "Rob put us on fish from the moment the trolling motor went down. My son landed his first trophy walleye and hasn't stopped talking about it.",
    author: "Mark D.",
    location: "Edmonton, AB",
    species: "Walleye",
  },
  {
    quote:
      "Booked the trophy pike hunt on a hunch. Came home with a 42-incher and a story I'll tell for the rest of my life.",
    author: "Ben H.",
    location: "Calgary, AB",
    species: "Pike",
  },
  {
    quote:
      "First-time ice anglers. Rob taught us everything — knots, sonar, where to set up. The heated tent was a game-changer for the kids.",
    author: "The Reilly Family",
    location: "Sherwood Park, AB",
    species: "Ice",
  },
];

// All imagery is LOCAL.
// Real client photography from gatorsandgoldfishing.ca + AI-generated
// supplemental imagery (Nano Banana 2 / Gemini 3.1 Flash) matched to the
// brand aesthetic where Rob doesn't yet have his own photo.
export const imagery = {
  logo: "/images/logo.png",
  // Real client photography
  hero: "/images/hero-walleye-trophy.jpg",
  pikeYellow: "/images/pike-trophy-yellow.jpg",
  fatherSon: "/images/father-son-walleye-sunset.jpg",
  walleyeCloudy: "/images/walleye-cloudy.jpg",
  pikeTreeline: "/images/pike-treeline.jpg",
  pikeCamo: "/images/pike-camo.jpg",
  twoGenerations: "/images/two-generations-walleye.jpg",
  pikeGreen: "/images/pike-green-jacket.jpg",
  crestliner: "/images/crestliner-sunset.jpg",
  lakeSunset: "/images/lake-sunset.jpg",
  topo: "/images/topo-map.jpg",
  // AI-generated atmospheric + ice fishing imagery
  iceFishingGolden: "/images/ice-fishing-golden.jpg",
  iceHoleSonar: "/images/ice-hole-sonar.jpg",
  utvOnIce: "/images/utv-on-ice.jpg",
  lakeDawnMist: "/images/lake-dawn-mist.jpg",
  rodBentSunset: "/images/rod-bent-sunset.jpg",
  vintageTackle: "/images/vintage-tackle.jpg",
  boatSonar: "/images/boat-sonar-dashboard.jpg",
  northernLights: "/images/northern-lights.jpg",
};

export const galleryImages = [
  { src: imagery.hero,             alt: "Trophy walleye on Lac La Biche",         tag: "Walleye"     },
  { src: imagery.pikeYellow,       alt: "Massive northern pike, yellow jacket",    tag: "Trophy Pike" },
  { src: imagery.iceFishingGolden, alt: "Ice fishing at golden hour",              tag: "Ice Fishing" },
  { src: imagery.fatherSon,        alt: "Father and son with sunset walleye",      tag: "Tradition"   },
  { src: imagery.utvOnIce,         alt: "UTV on the hard water",                   tag: "Ice Fishing" },
  { src: imagery.crestliner,       alt: "Crestliner Fish Hawk at sunset",          tag: "Fleet"       },
  { src: imagery.iceHoleSonar,     alt: "Ice hole with sonar flasher",             tag: "Ice Fishing" },
  { src: imagery.walleyeCloudy,    alt: "Walleye, overcast morning",               tag: "Walleye"     },
  { src: imagery.pikeTreeline,     alt: "Trophy pike, Lakeland treeline",          tag: "Trophy Pike" },
  { src: imagery.twoGenerations,   alt: "Two generations on the boat",             tag: "Tradition"   },
  { src: imagery.lakeSunset,       alt: "Sunset on Lac La Biche",                  tag: "Open Water"  },
  { src: imagery.lakeDawnMist,     alt: "Lake dawn mist on Lac La Biche",          tag: "Open Water"  },
  { src: imagery.pikeCamo,         alt: "Pike landed in green jacket",             tag: "Trophy Pike" },
  { src: imagery.pikeGreen,        alt: "Pike on a clear morning",                 tag: "Trophy Pike" },
  { src: imagery.rodBentSunset,    alt: "Rod bent at sunset",                      tag: "Open Water"  },
  { src: imagery.vintageTackle,    alt: "Vintage tackle box of classic lures",     tag: "Gear"        },
  { src: imagery.northernLights,   alt: "Northern lights over Lac La Biche ice",   tag: "Wilderness"  },
  { src: imagery.boatSonar,        alt: "Crestliner dashboard with forward-facing sonar", tag: "Fleet" },
];
