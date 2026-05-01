import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { brand, imagery } from "@/lib/content";
import { easings } from "@/lib/utils";

// Cycling background photos — fishing as the main attraction.
const HERO_PHOTOS = [
  imagery.hero,
  imagery.pikeYellow,
  imagery.fatherSon,
  imagery.iceFishingGolden,
];

export function Hero() {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActivePhoto((p) => (p + 1) % HERO_PHOTOS.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink grain pt-[80px] md:pt-[96px]">
      {/* Cycling photo background */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="sync">
          <motion.img
            key={activePhoto}
            src={HERO_PHOTOS[activePhoto]}
            alt=""
            aria-hidden
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.6, ease: easings.expoOut }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </AnimatePresence>
        {/* Strong gradient — logo and CTAs need to read clearly */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,10,8,0.65) 0%, rgba(12,10,8,0.55) 30%, rgba(12,10,8,0.4) 55%, rgba(12,10,8,0.92) 100%)",
          }}
        />
        {/* Side darkening for legibility */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(12,10,8,0.55), rgba(12,10,8,0) 35%, rgba(12,10,8,0) 65%, rgba(12,10,8,0.45))",
          }}
        />
      </div>

      <div className="container-wide relative z-10 flex flex-col min-h-[calc(100svh-80px)] md:min-h-[calc(100svh-96px)]">
        {/* Top stamp row */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: easings.expoOut }}
          className="flex items-center gap-2 flex-wrap pt-4 md:pt-6"
        >
          <span className="stamp">Est. 1994</span>
          <span className="stamp hidden sm:inline-flex">N 54.7666° / W 111.9683°</span>
          <span className="stamp ml-auto">2026 Season Open</span>
        </motion.div>

        {/* Centered logo + content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-8 md:py-12">
          {/* THE BADGE — the brand DNA, hero of the hero */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: easings.expoOut }}
            className="relative"
          >
            <img
              src={imagery.logo}
              alt="Gators & Gold Fishing Charters"
              className="block w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] h-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
            />
          </motion.div>

          {/* Tagline below logo */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.95, ease: easings.expoOut }}
            className="mt-6 md:mt-8 font-display heavy text-paper text-3xl sm:text-4xl md:text-5xl leading-[0.95] max-w-3xl"
          >
            Trophy Pike <span className="text-gold">&amp;</span> Walleye.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05, ease: easings.expoOut }}
            className="mt-3 md:mt-4 font-mono text-xs md:text-sm uppercase tracking-[0.22em] text-gold"
          >
            Lac La Biche · Pinehurst Lake · Alberta
          </motion.p>

          {/* Promise */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.15, ease: easings.expoOut }}
            className="mt-6 md:mt-8 max-w-xl text-bone text-sm md:text-md leading-[1.6]"
          >
            {brand.promise}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: easings.expoOut }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto max-w-sm sm:max-w-none"
          >
            <Link href="/book" className="btn">Book a Charter →</Link>
            <Link href="/your-guide" className="btn outline">Meet Rob</Link>
          </motion.div>
        </div>

        {/* Bottom — photo cycle indicator + stats strip */}
        <div className="pb-6 md:pb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: easings.expoOut }}
            className="flex items-center justify-center gap-2 mb-4 md:mb-6"
          >
            {HERO_PHOTOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActivePhoto(i)}
                aria-label={`Show hero photo ${i + 1}`}
                className={`block h-[3px] transition-all duration-500 ${
                  activePhoto === i ? "w-10 bg-gold" : "w-4 bg-stone/50 hover:bg-stone"
                }`}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4, ease: easings.expoOut }}
            className="grid grid-cols-4 gap-px bg-gold/30"
          >
            <Stat figure="40&quot;+" label="Trophy Pike" />
            <Stat figure="28&quot;+" label="Walleye" />
            <Stat figure="30+" label="Years" />
            <Stat figure="200hp" label="Crestliner" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ figure, label }: { figure: string; label: string }) {
  return (
    <div className="bg-ink/85 backdrop-blur-sm px-3 py-3 md:px-5 md:py-4 flex flex-col items-center text-center">
      <span
        className="font-display heavy text-paper text-xl sm:text-2xl md:text-4xl leading-none"
        dangerouslySetInnerHTML={{ __html: figure }}
      />
      <span className="mt-1 md:mt-1.5 font-mono text-[0.55rem] md:text-[0.65rem] uppercase tracking-[0.18em] text-gold">
        {label}
      </span>
    </div>
  );
}
