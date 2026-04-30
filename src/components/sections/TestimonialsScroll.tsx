import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials, imagery } from "@/lib/content";
import { easings } from "@/lib/utils";

export function TestimonialsScroll() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background — bent rod at sunset, very atmospheric */}
      <div className="absolute inset-0 -z-10">
        <img
          src={imagery.rodBentSunset}
          alt=""
          aria-hidden
          className="h-full w-full object-cover cinematic-img opacity-30"
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
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
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

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-2 flex md:flex-col gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className="group flex items-center gap-3"
              >
                <span
                  className={`block h-px transition-all duration-500 ${
                    active === i ? "w-12 bg-gold" : "w-6 bg-stone/40 group-hover:bg-stone"
                  }`}
                />
                <span
                  className={`font-display font-extrabold text-base uppercase tracking-[0.06em] transition-colors duration-500 ${
                    active === i ? "text-gold" : "text-stone"
                  }`}
                >
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>

          <div className="col-span-12 md:col-span-10 relative min-h-[18rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.7, ease: easings.expoOut }}
                className="font-slab text-paper text-[clamp(1.5rem,3.2vw,2.75rem)] leading-[1.2]"
              >
                <span className="block text-gold text-5xl mb-4 leading-none">"</span>
                {testimonials[active].quote}
                <footer className="mt-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-stone not-italic font-normal">
                  <span className="block h-px w-10 bg-gold" />
                  <span>
                    {testimonials[active].author}, {testimonials[active].location}
                  </span>
                  <span className="ml-auto stamp">{testimonials[active].species}</span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
