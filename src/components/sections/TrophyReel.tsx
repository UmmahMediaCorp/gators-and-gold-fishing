import { useReveal } from "@/hooks/useReveal";
import { trophyReel } from "@/lib/content";
import { cn } from "@/lib/utils";

interface Props {
  stamp?: string;
  headline?: string;
  accentLine?: string;
  copy?: string;
  /** Limit number of cards (defaults to all). */
  limit?: number;
}

// Mobile-first horizontal scroll, snaps to cards. Becomes a full grid on lg.
// Built specifically to fight long black-text scrolls on mobile —
// every screen has photos right there, swipeable.
export function TrophyReel({
  stamp = "The Catches",
  headline = "Trophy",
  accentLine = "Wall.",
  copy = "Real anglers, real fish, real days. Swipe through some of the recent trophies that came aboard the Crestliner.",
  limit,
}: Props) {
  const items = limit ? trophyReel.slice(0, limit) : trophyReel;

  return (
    <section className="relative bg-ink py-16 md:py-24 overflow-hidden">
      <div className="container-wide mb-8 md:mb-12">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-7">
            <span className="stamp mb-4">{stamp}</span>
            <h2 className="mt-4 font-display heavy text-paper leading-[0.9] text-[clamp(2.25rem,6vw,5rem)]">
              <span className="block">{headline}</span>
              <span className="block text-gold">{accentLine}</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-bone leading-relaxed">{copy}</p>
          </div>
        </div>
      </div>

      {/* Mobile: horizontal scroll · Desktop (lg+): full grid */}
      <div
        className="lg:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 px-[max(1.25rem,3vw)] scrollbar-none"
        style={{ scrollPaddingInline: "max(1.25rem, 3vw)" }}
      >
        {items.map((item, i) => (
          <Card key={item.src + i} item={item} index={i} mobile />
        ))}
      </div>
      <div className="hidden lg:block container-wide">
        <div className="grid grid-cols-4 gap-3">
          {items.map((item, i) => (
            <Card key={item.src + i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  item,
  index,
  mobile = false,
}: {
  item: (typeof trophyReel)[number];
  index: number;
  mobile?: boolean;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.05);
  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden bg-ink-3 border border-rule",
        "snap-start aspect-[4/5]",
        mobile
          ? "shrink-0 w-[78vw] sm:w-[60vw] md:w-[44vw]"
          : "w-full",
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
      )}
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
    >
      <img
        src={item.src}
        alt={`${item.species} on ${item.location}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover cinematic-img transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />

      {/* Top corner stamp */}
      <span className="absolute top-3 left-3 stamp bg-ink/80 text-[0.55rem]">
        No. {String(index + 1).padStart(2, "0")}
      </span>

      {/* Bottom info block */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <span className="block font-mono text-[0.6rem] uppercase tracking-[0.22em] text-gold">
          {item.location}
        </span>
        <span className="mt-1.5 block font-display heavy text-paper leading-[0.9] text-2xl md:text-3xl">
          {item.species}
        </span>
        <span className="mt-1 block font-display font-extrabold text-gold uppercase tracking-[0.05em] text-base">
          {item.size}
        </span>
      </div>
    </div>
  );
}
