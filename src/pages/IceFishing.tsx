import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { AtmosphericBreak } from "@/components/sections/AtmosphericBreak";
import { useReveal } from "@/hooks/useReveal";
import { imagery, pricing, services, whatToBringIce } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function IceFishing() {
  const service = services[1];

  return (
    <PageShell title="Ice Fishing Charters — Gators & Gold">
      <PageHero
        stamp="Dec 15 — Mar 31"
        title="Hard Water"
        accentTitle="Charters."
        subtitle={service.intro}
        image={imagery.iceFishingGolden}
        meta="Pending safe ice"
      />

      {/* Method banner with UTV background */}
      <section className="relative py-20 md:py-28 border-y border-rule overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={imagery.utvOnIce}
            alt=""
            aria-hidden
            className="h-full w-full object-cover cinematic-img opacity-40"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(12,10,8,0.85) 0%, rgba(12,10,8,0.6) 50%, rgba(12,10,8,0.92) 100%)",
            }}
          />
        </div>
        <div className="absolute inset-0 topo-bg pointer-events-none" />

        <div className="container-wide relative grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <span className="stamp">Method</span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display heavy text-paper leading-[0.9] text-[clamp(2rem,5vw,4rem)]">
              <span className="block">Heated UTV.</span>
              <span className="block">Heated Tent.</span>
              <span className="block text-gold">We Move when the Bite Moves.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* 3-step process — now with imagery */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-4">
              <span className="stamp mb-4">A Day on the Ice</span>
              <h2 className="mt-4 font-display heavy text-paper leading-[0.9] text-[clamp(2rem,4.5vw,3.75rem)]">
                <span className="block">Three Steps.</span>
                <span className="block text-gold">No Wasted Minutes.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <p className="text-bone leading-relaxed">
                Ice fishing on Lac La Biche is not sit-and-shiver. It's GPS,
                modern mapping, and a heated UTV that moves you between
                high-percentage spots until the rods double over.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/30">
            <Step
              num="01"
              title="Find Them"
              body="Forward-facing sonar shows fish 30+ feet away. We drill, drop, and read the screen before we ever set the rod."
              image={imagery.iceHoleSonar}
              index={0}
            />
            <Step
              num="02"
              title="Chase Them"
              body="When the school slides off, we don't. The heated UTV punches us to the next mark in minutes — not miles of cold."
              image={imagery.utvOnIce}
              index={1}
            />
            <Step
              num="03"
              title="Land Them"
              body="Insulated tent up. Heater on. Premier rods and species-specific bait. You fish warm. The fish doesn't get a break."
              image={imagery.iceFishingGolden}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Atmospheric break — northern lights */}
      <AtmosphericBreak
        image={imagery.northernLights}
        alt="Northern lights over Lac La Biche"
        stamp="Northern Wilderness"
        headline="Hard Water."
        accentLine="True North."
        height="regular"
        align="center"
      />

      {/* Pricing */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div>
              <span className="stamp mb-4">Charters</span>
              <h2 className="mt-4 font-display heavy text-paper leading-[0.9] text-[clamp(2rem,5vw,4.5rem)]">
                <span className="block">Half Day.</span>
                <span className="block text-gold">Full Day.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/30">
            {pricing.ice.map((p, i) => (
              <PriceCard key={p.label} item={p} index={i} />
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

      {/* What's included / what to bring with image accent */}
      <section className="bg-ink-2 py-24 md:py-32 border-y border-rule overflow-hidden">
        <div className="container-wide grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 lg:col-span-4">
            <FloatingImage src={imagery.iceHoleSonar} caption="Forward-facing sonar · live fish marks" />
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
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
                {whatToBringIce.map((h) => (
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

      <FinalCTA />
    </PageShell>
  );
}

function Step({
  num,
  title,
  body,
  image,
  index,
}: {
  num: string;
  title: string;
  body: string;
  image: string;
  index: number;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      className={cn(
        "group bg-ink-2 flex flex-col overflow-hidden",
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover cinematic-img transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <span className="absolute top-4 left-4 stamp bg-ink/80">Step {num}</span>
      </div>
      <div className="p-7 md:p-9 flex flex-col gap-4 flex-1">
        <h4 className="font-display heavy text-paper text-4xl md:text-5xl leading-none">
          {title}
        </h4>
        <p className="mt-auto text-bone leading-relaxed text-sm">{body}</p>
      </div>
    </div>
  );
}

function PriceCard({
  item,
  index,
}: {
  item: (typeof pricing.ice)[number];
  index: number;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      className={cn(
        "bg-ink p-8 md:p-12 flex flex-col min-h-[320px]",
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.22em]">
        <span className="text-stone">No. 0{index + 1}</span>
        <span className="text-gold">{item.hours}</span>
      </div>
      <h3 className="mt-auto pt-12 font-display heavy text-paper leading-[0.92] text-4xl md:text-5xl">
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

function FloatingImage({ src, caption }: { src: string; caption?: string }) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      className={cn(
        "relative aspect-[4/5] overflow-hidden border-2 border-gold/30",
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
