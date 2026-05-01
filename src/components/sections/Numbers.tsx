import { trophyStats, trophyStatsImagery, imagery } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function Numbers() {
  return (
    <section className="relative py-20 md:py-32 border-y-2 border-gold/30 overflow-hidden">
      {/* Background — northern lights */}
      <div className="absolute inset-0 -z-10">
        <img
          src={imagery.northernLights}
          alt=""
          aria-hidden
          className="h-full w-full object-cover cinematic-img opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,10,8,0.88) 0%, rgba(26,34,26,0.92) 50%, rgba(12,10,8,0.96) 100%)",
          }}
        />
      </div>
      <div className="absolute inset-0 topo-bg pointer-events-none" />

      <div className="container-wide relative">
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-16">
          <div className="col-span-12 md:col-span-4">
            <span className="stamp mb-4">No. 03 — By the Numbers</span>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display heavy text-paper leading-[0.9] text-[clamp(2rem,5.5vw,5rem)]">
              <span className="block">What the Lake</span>
              <span className="block text-gold">Gives Back.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/30">
          {trophyStats.map((stat, i) => (
            <NumberCell key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NumberCell({
  stat,
  index,
}: {
  stat: (typeof trophyStats)[number];
  index: number;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.2);
  const cellImg = trophyStatsImagery[stat.label];

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden p-5 md:p-8 flex flex-col justify-between min-h-[260px] md:min-h-[300px]",
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Per-cell image — visible faintly behind, sharp on hover */}
      {cellImg && (
        <div className="absolute inset-0 -z-10">
          <img
            src={cellImg}
            alt=""
            aria-hidden
            className="h-full w-full object-cover cinematic-img opacity-25 transition-opacity duration-700 hover:opacity-45"
          />
          <div className="absolute inset-0 bg-ink/75" />
        </div>
      )}

      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-stone">
          0{index + 1}
        </span>
        <div className="h-px w-10 bg-gold" />
      </div>

      <div className="mt-auto">
        <span className="block font-display heavy text-paper text-6xl md:text-8xl leading-[0.85]">
          {stat.figure}
        </span>
        <span className="mt-2 block font-display text-sm md:text-base font-extrabold uppercase tracking-[0.06em] text-gold">
          {stat.label}
        </span>
        <p className="mt-2 md:mt-3 text-bone leading-snug text-xs md:text-sm">
          {stat.caption}
        </p>
      </div>
    </div>
  );
}
