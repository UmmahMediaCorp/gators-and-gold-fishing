# Gators & Gold Fishing — Cinematic Site Rebuild

Heritage-outfitter marketing site rebuild for **Gators & Gold Fishing Charters**
— Rob Clarke's trophy walleye and pike charters on Lac La Biche & Pinehurst
Lake, Alberta.

Design intent: Filson / YETI / MeatEater visual language — vintage badge logo,
heavy blocky display type (Big Shoulders), black + gold + pine + amber palette,
documentary photography of real trophy moments. Built as a proposal demo by
**Ummah Media Corporation**.

> Photography © Gators & Gold Fishing Charters — used here in a proposal-build
> context. The site code (design system, components, copy structure) is open.

---

## Stack

- **Vite 7** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-based `@theme` tokens — no `tailwind.config.js`)
- **Framer Motion** for choreographed reveals
- **Lenis** for smooth, weighted scroll
- **Wouter** for lightweight client-side routing

No backend. Booking opens a prefilled `mailto:` to Rob.

---

## Run it

```bash
pnpm install      # or npm install / yarn install
pnpm dev          # http://localhost:5173
pnpm build        # production build into ./dist
pnpm preview      # serve the production build locally
```

---

## Routes

| Path           | Page          | Notes                                              |
| -------------- | ------------- | -------------------------------------------------- |
| `/`            | Home          | Hero, manifesto, seasons, numbers, guide, trip log |
| `/open-water`  | Open Water    | Spring–fall pricing, Crestliner, Pinehurst hunt    |
| `/ice-fishing` | Ice Fishing   | Run-and-gun method, hard-water pricing             |
| `/your-guide`  | Rob's Story   | Editorial bio, pull quotes, two generations        |
| `/gallery`     | The Wall      | Filterable trophy grid                             |
| `/book`        | Book Now      | Charter form, pricing snapshot, FAQ                |
| any other      | 404           | "Lost in the Weed Line"                            |

---

## What's beyond the original site

The live `gatorsandgoldfishing.ca` site has Home, Open Water, Ice Fishing, Book
Now, Your Guide, and Gallery. This rebuild keeps every piece of that content
and adds:

- **Trip Log** — three recent catch reports with species / length / water meta
- **Trophy Numbers** grid — 40"+ Pike, 28"+ Walleye, 30+ years, 200hp Mercury
- **Testimonials** with species tags
- **3-step "A day on the ice"** explainer
- **Crestliner spec sheet** — model, motor, electronics, capacity
- **Pinehurst Trophy Hunt** as its own feature block
- **FAQ accordion** on the booking page (license, weather, kids, first-timers)
- **Pricing snapshot sidebar** on the booking page
- **Custom 404** — "Lost in the Weed Line"
- **Heavy gold scoreboard footer marquee**
- **Choreographed page reveals**, **smooth scroll**, **branded selection**,
  **focus rings**, **topographic map textures**, **subtle film grain**

---

## Editing copy

All copy lives in **`src/lib/content.ts`** — brand, navigation, services,
pricing, guide bio, FAQs, trip log entries, testimonials, imagery paths. One
file edit and the entire site updates.

---

## Imagery

The 12 images in `public/images/` were pulled from the live
`gatorsandgoldfishing.ca` site — Rob's own photography of trophy catches,
clients on the boat, the Crestliner at sunset, and a topographic map texture.

The badge logo (`public/images/logo.png`) drives the visual identity:
black + gold, pike + walleye flanking a maple leaf, ribbon banner.

To swap or add photos, drop new files into `public/images/` and update the
`imagery` and `galleryImages` exports in `src/lib/content.ts`.

---

## Design tokens

Defined as CSS custom properties in `src/index.css` under `@theme`. Tailwind
picks them up automatically (`bg-ink`, `text-gold`, `font-display`, etc.).

| Token             | Value     | Use                                          |
| ----------------- | --------- | -------------------------------------------- |
| `--color-ink`     | `#0c0a08` | Warm cabin black — primary background        |
| `--color-paper`   | `#f3ead4` | Vintage parchment cream — primary text       |
| `--color-bone`    | `#ddd2b8` | Aged paper — body text on dark               |
| `--color-gold`    | `#d4a82c` | Logo gold — primary accent                   |
| `--color-pine-deep` | `#1a221a` | Forest deep — section variant              |
| `--color-amber`   | `#c87832` | Sunset / copper                              |
| `--color-rust`    | `#8b3a1f` | Rust red — life jackets, lures               |
| `--color-lake`    | `#1c3a4d` | Deep lake blue                               |
| `--font-display`  | Big Shoulders Display | Heavy condensed all-caps banner    |
| `--font-slab`     | Roboto Slab | Sturdy heritage serif for quotes           |
| `--font-sans`     | Inter     | Body                                          |
| `--font-mono`     | JetBrains Mono | Stamps / coordinates / meta             |

---

## Performance notes

- Fonts loaded with `display=swap` and preconnect headers
- Images: lazy-loaded below the fold; subtle CSS color grade
- Animations: GPU-only properties (`transform`, `opacity`)
- Custom cubic-bezier easings (no `ease` / `linear`)
- Smooth scroll respects `prefers-reduced-motion`

---

## Deploy

The build output is a static SPA in `./dist`. Deploys to Vercel, Netlify, or
any static host out of the box. SPA-routing fallback for Vercel is already in
`vercel.json`.

---

Built by [Ummah Media Corporation](https://github.com/UmmahMediaCorp) — April 2026.
