import { tripLog } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

// "Trip Log" — catch reports with photos
export function FieldNotes() {
  return (
    <section className="relative bg-ink-2 py-16 md:py-32 overflow-hidden border-y border-rule">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-4 md:gap-6 mb-10 md:mb-16 flex-wrap">
          <div>
            <span className="stamp mb-3">No. 05 — Trip Log</span>
            <h2 className="mt-3 md:mt-4 font-display heavy text-paper leading-[0.9] text-[clamp(2.25rem,5.5vw,5rem)]">
              <span className="block">Recent Days</span>
              <span className="block text-gold">on the Water.</span>
            </h2>
          </div>
          <p className="max-w-sm text-bone leading-relaxed text-sm md:text-base">
            Real catches from real days. No fluff — just dates, fish, and what
            the lake taught us that morning.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/20">
          {tripLog.map((entry, i) => (
            <LogEntry key={entry.title} entry={entry} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function LogEntry({
  entry,
  index,
}: {
  entry: (typeof tripLog)[number];
  index: number;
}) {
  const { ref, inView } = useReveal<HTMLLIElement>(0.2);
  return (
    <li
      ref={ref}
      className={cn(
        "group relative bg-ink-2 flex flex-col cursor-default overflow-hidden",
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[5/4] md:aspect-[4/3] overflow-hidden">
        <img
          src={entry.image}
          alt={entry.title}
          className="absolute inset-0 h-full w-full object-cover cinematic-img transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
        <span className="stamp absolute top-3 left-3 bg-ink/80">
          Log #{String(index + 1).padStart(3, "0")}
        </span>
        <span className="absolute bottom-3 right-3 font-display heavy text-2xl md:text-3xl text-gold drop-shadow">
          {entry.length}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 md:p-8 flex flex-col flex-1">
        <span className="font-mono text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.22em] text-stone">
          {entry.date}
        </span>

        <h3 className="mt-3 md:mt-4 font-display heavy text-paper leading-[0.95] text-2xl md:text-3xl">
          {entry.title}
        </h3>
        <p className="mt-2 md:mt-3 text-bone leading-relaxed text-sm">{entry.excerpt}</p>

        <div className="mt-auto pt-4 md:pt-5 border-t border-rule grid grid-cols-2 gap-3 font-mono text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.18em]">
          <div>
            <span className="block text-stone">Species</span>
            <span className="block text-paper mt-1">{entry.species}</span>
          </div>
          <div>
            <span className="block text-stone">Water</span>
            <span className="block text-gold mt-1">{entry.location}</span>
          </div>
        </div>
      </div>
    </li>
  );
}
