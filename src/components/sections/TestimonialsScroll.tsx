import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials, imagery } from "@/lib/content";
import { easings } from "@/lib/utils";

export function TestimonialsScroll() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Background — bent rod at sunset */}
      <div className="absolute inset-0 -z-10">
        <img
          src={imagery.rodBentSunset}
          alt=""
          aria-hidden
          className="h-full w-full object-cover cinematic-img opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,10,8,0.95) 0%, rgba(12,10,8,0.7) 30%, rgba(12,10,8,0.7) 70%, rgba(12,10,8,0.95) 100%)",
          }}
        />
      </div>

      <div className="container-wide relative">
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-16">
          <div className="col-span-12 md:col-span-3">
            <span className="stamp">No. 06 — Word of Mouth</span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display heavy text-paper leading-[0.9] text-[clamp(2rem,5vw,4.5rem)]">
              <span className="block">From the Anglers</span>
              <span className="block text-gold">Who Showed Up.</span>
            </h2>
          </div>
        </div>

        {/* Quote + photo grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-10 items-stretch">
          {/* Photo — larger on mobile so it's not just text */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4 order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: easings.expoOut }}
                className="relative aspect-[4/5] overflow-hidden border-2 border-gold/30"
              >
                <img
                  src={t.image}
                  alt={`Catch from ${t.author}`}
                  className="absolute inset-0 h-full w-full object-cover cinematic-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="stamp absolute top-4 left-4 bg-ink/80">
                  {t.species}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-gold">
                    Verified guest
                  </span>
                  <span className="block font-display heavy text-paper text-2xl mt-1">
                    {t.author}
                  </span>
                  <span className="block font-mono text-[0.6rem] uppercase tracking-[0.22em] text-bone">
                    {t.location}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quote */}
          <div className="col-span-12 md:col-span-7 lg:col-span-8 order-2 md:order-1 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: easings.expoOut }}
                className="flex-1 font-slab text-paper text-[clamp(1.25rem,3vw,2.5rem)] leading-[1.25]"
              >
                <span className="block text-gold text-5xl md:text-6xl mb-2 md:mb-4 leading-none">"</span>
                {t.quote}
              </motion.blockquote>
            </AnimatePresence>

            {/* Counter strip */}
            <div className="mt-8 md:mt-10 flex items-center gap-3 pt-6 border-t border-rule">
              {testimonials.map((tt, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className="group flex items-center gap-2"
                >
                  <span
                    className={`block h-px transition-all duration-500 ${
                      active === i ? "w-12 bg-gold" : "w-6 bg-stone/40 group-hover:bg-stone"
                    }`}
                  />
                  <span
                    className={`font-display font-extrabold text-sm uppercase tracking-[0.06em] transition-colors duration-500 ${
                      active === i ? "text-gold" : "text-stone"
                    }`}
                  >
                    {tt.species}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
