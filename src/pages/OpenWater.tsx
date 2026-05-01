import { Link } from "wouter";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { AtmosphericBreak } from "@/components/sections/AtmosphericBreak";
import { TrophyReel } from "@/components/sections/TrophyReel";
import { useReveal } from "@/hooks/useReveal";
import { boat, imagery, pricing, services, whatToBring } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function OpenWater() {
  const service = services[0];

  return (
    <PageShell title="Open Water Charters — Gators & Gold Fishing">
      <PageHero
        stamp="May 15 — Oct 15"
        title="Open Water"
        accentTitle="Charters."
        subtitle={service.intro}
        image={imagery.womanTrophyPike}
        meta="Lac La Biche · Pinehurst"
      />

      {/* Manifesto */}
      <section className="bg-ink-2 py-20 md:py-28 border-y border-rule overflow-hidden relative">
        <div className="absolute inset-0 topo-bg pointer-events-none" />
        <div className="container-wide relative grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <span className="stamp">The Plan</span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display heavy text-paper leading-[0.92] text-[clamp(2rem,4.5vw,3.5rem)]">
              <span className="block">Spring Spawn through Fall Turnover.</span>
              <span className="block text-gold mt-2">
                Read the Lake. Run the Day.
              </span>
            </h2>
            <p className="mt-8 max-w-3xl text-bone leading-relaxed text-md">
              Some days it's run-and-gun — temperature breaks, weed lines, wind
              direction. Some days the right cove holds them all. We adapt to
              the lake, you adapt to nothing — that's the deal.
            </p>
          </div>
        </div>
      </section>

      {/* Trophy reel — open water catches */}
      <TrophyReel
        stamp="Open Water · The Wall"
        headline="What Comes Up"
        accentLine="From May to October."
        copy="Walleye, pike, and the days that produced them. Swipe through the recent open-water trophies."
      />

      {/* Action break — pike strike */}
      <AtmosphericBreak
        image={imagery.pikeStrike}
        alt="Pike strike at the boat side"
        stamp="When It Connects"
        headline="The Strike."
        accentLine="Then the Fight."
        height="regular"
        align="left"
      />

      {/* Pricing */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div>
              <span className="stamp mb-4">Charters</span>
              <h2 className="mt-4 font-display heavy text-paper leading-[0.9] text-[clamp(2rem,5vw,4.5rem)]">
                <span className="block">Pick the Trip.</span>
                <span className="block text-gold">Pick the Day.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/30">
            {pricing.openWater.map((p, i) => (
              <PriceCard key={p.label} item={p} index={i} highlight={i === 2} />
            ))}
          </div>

          <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {pricing.perks.map((perk) => (
              <li
                key={perk}
                className="flex items-start gap-3 text-bone text-sm leading-relaxed"
              >
                <span className="mt-1.5 block h-2 w-2 bg-gold flex-shrink-0" />
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Boat showcase + sonar dashboard */}
      <section className="bg-ink-2 py-24 md:py-32 border-y border-rule overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <span className="stamp mb-4">The Vessel</span>
              <h2 className="mt-4 font-display heavy text-paper leading-[0.9] text-[clamp(2.25rem,6vw,5.5rem)]">
                <span className="block">Crestliner.</span>
                <span className="block text-gold">Built for the Chase.</span>
              </h2>
              <p className="mt-8 max-w-xl text-bone leading-relaxed">
                The 2026 Crestliner 1850 Fish Hawk — wide deck, soft ride, dialled
                electronics. A 200-horse Mercury 4-stroke gets you from lily pad
                to weed edge in minutes.
              </p>

              <dl className="mt-10 grid grid-cols-2 gap-px bg-gold/30 max-w-xl">
                <Spec label="Hull" value={boat.model} />
                <Spec label="Power" value={boat.motor} />
                <Spec label="Electronics" value={boat.electronics} />
                <Spec label="Capacity" value={boat.capacity} />
              </dl>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <BoatVisual src={imagery.crestliner} caption="2026 Fish Hawk · 200hp Mercury" />
            </div>
          </div>

          {/* Two-up: sonar dashboard + tackle */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <BoatVisual src={imagery.boatSonar} caption="Forward-facing sonar · live fish marks" aspect="aspect-[16/10]" />
            <BoatVisual src={imagery.vintageTackle} caption="Premier rods, reels & specialized bait" aspect="aspect-[16/10]" />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="stamp mb-6">What's included</h3>
              <ul className="space-y-3">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-bone leading-relaxed">
                    <span className="mt-1.5 block h-2 w-2 bg-gold flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="stamp mb-6">What you bring</h3>
              <ul className="space-y-3">
                {whatToBring.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-bone leading-relaxed">
                    <span className="mt-1.5 block h-2 w-2 bg-stone flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shore lunch — the tradition */}
      <AtmosphericBreak
        image={imagery.shoreLunch}
        alt="Shore lunch over the campfire"
        stamp="Optional"
        headline="Shore Lunch."
        accentLine="Add It to the Day."
        height="short"
        align="center"
      />

      {/* Pinehurst trophy hunt */}
      <section className="relative bg-ink py-24 md:py-32 overflow-hidden">
        <div className="container-wide grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
            <BoatVisual src={imagery.pikeYellow} caption="44-inch class · Pinehurst structure" />
          </div>
          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
            <span className="stamp mb-4">Sept 1 — Oct 15</span>
            <h2 className="mt-4 font-display heavy text-paper leading-[0.88] text-[clamp(2.5rem,6.5vw,6rem)]">
              <span className="block">Pinehurst.</span>
              <span className="block text-gold">The Trophy Hunt.</span>
            </h2>
            <p className="mt-8 max-w-md text-bone leading-relaxed">
              When the water cools and Pinehurst's giants come to the shallows,
              we shift gears. Eight hours, two anglers max, one mission: the
              biggest Gator we can put a leader on.
            </p>
            <Link href="/book" className="mt-10 btn">
              Book the Hunt →
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageShell>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-ink-2 p-5">
      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-stone">{label}</dt>
      <dd className="mt-2 font-display font-extrabold text-paper text-lg uppercase leading-tight tracking-tight">
        {value}
      </dd>
    </div>
  );
}

function PriceCard({
  item,
  index,
  highlight,
}: {
  item: (typeof pricing.openWater)[number];
  index: number;
  highlight?: boolean;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      className={cn(
        "p-7 md:p-9 flex flex-col min-h-[340px]",
        highlight ? "bg-pine-deep" : "bg-ink-2",
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.22em]">
        <span className="text-stone">No. 0{index + 1}</span>
        <span className="text-gold">{item.hours}</span>
      </div>
      <h3 className="mt-auto pt-12 font-display heavy text-paper leading-[0.92] text-3xl md:text-4xl">
        {item.label}
      </h3>
      <ul className="mt-6 space-y-3 border-t-2 border-gold/40 pt-5">
        {item.tiers.map((t) => (
          <li key={t.who} className="flex items-baseline justify-between gap-4">
            <span className="text-bone text-sm">{t.who}</span>
            <span className="font-display heavy text-3xl text-gold">{t.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BoatVisual({
  src,
  caption,
  aspect = "aspect-[4/3]",
}: {
  src: string;
  caption?: string;
  aspect?: string;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden border-2 border-gold/30",
        aspect,
        "transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
    >
      <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover cinematic-img" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
      {caption && (
        <span className="stamp absolute bottom-4 left-4 bg-ink/80">{caption}</span>
      )}
    </div>
  );
}
