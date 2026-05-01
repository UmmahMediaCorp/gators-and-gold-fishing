import { Link } from "wouter";
import { PageShell } from "@/components/layout/PageShell";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { AtmosphericBreak } from "@/components/sections/AtmosphericBreak";
import { TrophyReel } from "@/components/sections/TrophyReel";
import { useReveal } from "@/hooks/useReveal";
import { brand, guide, imagery } from "@/lib/content";
import { motion } from "framer-motion";
import { easings, cn } from "@/lib/utils";

export default function Guide() {
  return (
    <PageShell title="Your Guide — Rob Clarke · Gators & Gold">
      {/* Editorial portrait hero */}
      <section className="relative bg-ink overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 grain">
        <div className="container-wide grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: easings.expoOut }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="stamp">Your Guide</span>
              <span className="stamp">Est. 1994</span>
            </motion.div>
            <h1 className="font-display heavy text-paper leading-[0.85]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.4, ease: easings.expoOut }}
                className="block text-[clamp(3.5rem,12vw,9.5rem)]"
              >
                Rob
              </motion.span>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.55, ease: easings.expoOut }}
                className="block text-[clamp(3.5rem,12vw,9.5rem)] -mt-2 md:-mt-4 text-gold"
              >
                Clarke.
              </motion.span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.95, ease: easings.expoOut }}
              className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3"
            >
              {guide.credentials.map((c) => (
                <span key={c} className="stamp">{c}</span>
              ))}
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.4, ease: easings.expoOut }}
              className="relative aspect-[4/5] overflow-hidden border-2 border-gold/30"
            >
              <img
                src={imagery.yamahaPike}
                alt="Rob Clarke on Lac La Biche"
                className="absolute inset-0 h-full w-full object-cover cinematic-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Long-form bio */}
      <section className="bg-ink-2 py-24 md:py-32 border-y border-rule overflow-hidden">
        <div className="absolute inset-0 topo-bg pointer-events-none" />
        <div className="container-wide relative grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <span className="stamp">The Story</span>
            <p className="mt-4 font-mono text-xs text-stone leading-relaxed max-w-[14rem]">
              How a kid with his dad's tackle box became Lac La Biche's
              full-time guide.
            </p>
          </div>

          <div className="col-span-12 md:col-span-9 lg:col-span-7">
            <h2 className="font-display heavy text-paper leading-[0.9] text-[clamp(2rem,4.5vw,3.75rem)]">
              <span className="block">From a Father's Tackle Box</span>
              <span className="block text-gold">to a Working Guide's Boat.</span>
            </h2>

            <div className="mt-10 space-y-6 text-bone leading-relaxed text-md">
              {guide.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trophy reel — what 30 years on the water looks like */}
      <TrophyReel
        stamp="Rob's Wall · 30 Years"
        headline="The Days"
        accentLine="that Built the Boat."
        copy="A few of the trophies guests have brought to the net under Rob's guidance."
      />

      {/* Atmospheric break — vintage tackle / heritage */}
      <AtmosphericBreak
        image={imagery.vintageTackle}
        alt="Vintage tackle from Rob's box"
        stamp="The Tools of the Trade"
        headline="Three Decades."
        accentLine="Same Lake. Same Mission."
        height="short"
        align="left"
      />

      {/* Pull quotes */}
      <section className="bg-ink py-24 md:py-32 overflow-hidden">
        <div className="container-wide space-y-20 md:space-y-24">
          {guide.quotes.map((quote, i) => (
            <PullQuote key={i} quote={quote} index={i} />
          ))}
        </div>
      </section>

      {/* Tradition block */}
      <section className="bg-ink-2 py-24 md:py-32 border-y border-rule overflow-hidden">
        <div className="container-wide grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 lg:col-span-7">
            <span className="stamp mb-4">Tradition</span>
            <h2 className="mt-4 font-display heavy text-paper leading-[0.9] text-[clamp(2.25rem,5.5vw,5rem)]">
              <span className="block">Two Generations.</span>
              <span className="block text-gold">Same Lake.</span>
            </h2>
            <p className="mt-8 max-w-xl text-bone leading-relaxed">
              Rob's father introduced him to angling here. Now he runs charters
              his father couldn't have imagined — but built every one of these
              days on the lessons that came before.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <FloatingImage src={imagery.twoGenerations} />
          </div>
        </div>
      </section>

      {/* Atmospheric break — rod bent at sunset */}
      <AtmosphericBreak
        image={imagery.rodBentSunset}
        alt="Rod bent at sunset"
        stamp="See You at the Launch"
        headline="The Boat."
        accentLine="The Bait. The Bite."
        height="regular"
        align="right"
      />

      {/* Call to action */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-wide grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-9">
            <span className="stamp mb-4">Make the Call</span>
            <h2 className="mt-4 font-display heavy text-paper leading-[0.85] text-[clamp(3rem,8vw,8rem)]">
              <span className="block">See You at</span>
              <span className="block text-gold">the Launch.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-3">
            <Link href="/book" className="btn">
              Book with Rob →
            </Link>
            <a href={`mailto:${brand.email}`} className="btn outline">Email Rob</a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageShell>
  );
}

function PullQuote({ quote, index }: { quote: string; index: number }) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.25);
  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-12 gap-6 items-start",
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
      )}
    >
      <div className="col-span-12 md:col-span-2">
        <span className="stamp">Quote 0{index + 1}</span>
      </div>
      <blockquote className="col-span-12 md:col-span-10 font-slab text-paper text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.15] border-l-4 border-gold pl-6 md:pl-10">
        <span className="block text-gold text-6xl mb-2 leading-none">"</span>
        {quote}
        <footer className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-stone not-italic font-normal">
          — Rob Clarke, owner &amp; guide
        </footer>
      </blockquote>
    </div>
  );
}

function FloatingImage({ src }: { src: string }) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      className={cn(
        "relative aspect-[4/5] overflow-hidden border-2 border-gold/30",
        "transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
      )}
    >
      <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover cinematic-img" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
    </div>
  );
}
