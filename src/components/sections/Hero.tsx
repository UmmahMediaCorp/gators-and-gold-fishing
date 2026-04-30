import { motion } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { brand, imagery } from "@/lib/content";
import { easings } from "@/lib/utils";

export function Hero() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(Math.min(window.scrollY, window.innerHeight));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink grain pt-[88px] md:pt-[96px]">
      {/* Background — real trophy walleye photograph, parallax */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          transform: `translate3d(0, ${scrolled * 0.25}px, 0) scale(${1 + scrolled * 0.0003})`,
        }}
      >
        <img
          src={imagery.hero}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-[center_30%]"
        />
        {/* Heavy gradient — bottom darker so type holds; top dark so nav blends */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,10,8,0.7) 0%, rgba(12,10,8,0.25) 22%, rgba(12,10,8,0.4) 60%, rgba(12,10,8,0.95) 100%)",
          }}
        />
        {/* Color grade — warm cabin amber tint */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-30"
          style={{
            background:
              "linear-gradient(180deg, rgba(212,168,44,0.15), transparent 40%, rgba(28,58,77,0.2))",
          }}
        />
      </motion.div>

      <div className="container-wide relative z-10 flex flex-col justify-end min-h-[calc(100vh-88px)] pb-12 md:pb-20">
        {/* Stamp row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: easings.expoOut }}
          className="flex items-center gap-3 mb-6 md:mb-10"
        >
          <span className="stamp">Est. 1994</span>
          <span className="stamp">N 54.7666° / W 111.9683°</span>
          <span className="stamp hidden md:inline-flex">Trophy Class</span>
        </motion.div>

        {/* Massive blocky banner — the signature moment */}
        <h1 className="font-display text-paper leading-[0.85]">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: easings.expoOut }}
            className="block text-[clamp(4.5rem,16vw,16rem)] font-black"
            style={{ fontStretch: "115%" }}
          >
            Trophy Pike
          </motion.span>
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.65, ease: easings.expoOut }}
            className="block text-[clamp(4.5rem,16vw,16rem)] font-black -mt-2 md:-mt-4 text-gold"
            style={{ fontStretch: "115%" }}
          >
            &amp; Walleye.
          </motion.span>
        </h1>

        {/* Sub band — promise + meta */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.95, ease: easings.expoOut }}
          className="mt-10 grid grid-cols-12 gap-6 items-end pt-8 border-t-2 border-gold/40"
        >
          <p className="col-span-12 lg:col-span-6 text-bone text-md md:text-lg leading-[1.55]">
            {brand.promise}
          </p>
          <div className="col-span-12 lg:col-span-3 lg:col-start-8 flex flex-col gap-3">
            <Link href="/book" className="btn">
              Book a Charter →
            </Link>
            <Link href="/your-guide" className="btn outline">
              Meet Rob
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-2 lg:text-right">
            <span className="block font-mono text-[0.6rem] uppercase tracking-[0.22em] text-stone">
              Open Water
            </span>
            <span className="block font-display text-2xl font-extrabold text-paper mt-1">
              MAY — OCT
            </span>
            <span className="block font-mono text-[0.6rem] uppercase tracking-[0.22em] text-stone mt-3">
              Hard Water
            </span>
            <span className="block font-display text-2xl font-extrabold text-paper mt-1">
              DEC — MAR
            </span>
          </div>
        </motion.div>

        {/* Trophy stat strip — like a nat-park welcome sign */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: easings.expoOut }}
          className="mt-10 grid grid-cols-4 gap-px bg-gold/20"
        >
          <Stat figure="40&quot;+" label="Trophy Pike" />
          <Stat figure="28&quot;+" label="Class Walleye" />
          <Stat figure="30+" label="Years guiding" />
          <Stat figure="200hp" label="Crestliner" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ figure, label }: { figure: string; label: string }) {
  return (
    <div className="bg-ink/80 backdrop-blur-sm px-4 py-4 md:px-6 md:py-5 flex flex-col">
      <span className="font-display text-3xl md:text-5xl font-black text-paper leading-none" dangerouslySetInnerHTML={{ __html: figure }} />
      <span className="mt-1.5 md:mt-2 font-mono text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.18em] text-gold">
        {label}
      </span>
    </div>
  );
}
