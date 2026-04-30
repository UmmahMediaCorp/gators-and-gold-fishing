import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { galleryImages } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";
import { cn, easings } from "@/lib/utils";

const TAGS = ["All", "Walleye", "Trophy Pike", "Open Water", "Tradition", "Fleet"] as const;

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof TAGS)[number]>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? galleryImages
        : galleryImages.filter((g) => g.tag === filter),
    [filter],
  );

  return (
    <PageShell title="Gallery — Gators & Gold">
      <section className="relative bg-ink overflow-hidden pt-32 pb-16 md:pt-40 grain">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: easings.expoOut }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="stamp">G&amp;G Gallery</span>
            <span className="stamp">The Wall</span>
          </motion.div>
          <h1 className="font-display heavy text-paper leading-[0.85]">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 0.4, ease: easings.expoOut }}
              className="block text-[clamp(3rem,12vw,10rem)]"
            >
              The Catches.
            </motion.span>
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 0.55, ease: easings.expoOut }}
              className="block text-[clamp(3rem,12vw,10rem)] -mt-2 md:-mt-4 text-gold"
            >
              The Smiles.
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.95, ease: easings.expoOut }}
            className="mt-8 max-w-xl text-bone leading-relaxed"
          >
            Real anglers, real fish, real days on Lac La Biche and Pinehurst
            Lake. No staging — just the moments the lake gave back.
          </motion.p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-ink-2 border-y-2 border-gold/30 sticky top-[88px] z-30">
        <div className="container-wide flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={cn(
                "shrink-0 px-4 py-2 border-2 transition-all duration-300 font-display font-extrabold text-xs uppercase tracking-[0.08em]",
                filter === tag
                  ? "border-gold bg-gold text-ink"
                  : "border-rule text-bone hover:border-gold hover:text-gold",
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-ink py-12 md:py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
            {filtered.map((img, i) => (
              <Tile
                key={img.src + filter}
                src={img.src}
                alt={img.alt}
                tag={img.tag}
                index={i}
                size={
                  i % 7 === 0
                    ? "col-span-2 md:col-span-7 aspect-[16/10]"
                    : i % 5 === 0
                    ? "col-span-2 md:col-span-5 aspect-[4/5]"
                    : i % 3 === 0
                    ? "col-span-2 md:col-span-4 aspect-square"
                    : "col-span-1 md:col-span-3 aspect-[4/5]"
                }
              />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageShell>
  );
}

function Tile({
  src,
  alt,
  tag,
  index,
  size,
}: {
  src: string;
  alt: string;
  tag: string;
  index: number;
  size: string;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.05);
  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden bg-ink-3 border border-rule",
        size,
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      )}
      style={{ transitionDelay: `${(index % 8) * 60}ms` }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover cinematic-img transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-90" />
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <span className="stamp bg-ink/80">{tag}</span>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {String(index + 1).padStart(3, "0")}
        </span>
      </div>
    </div>
  );
}
