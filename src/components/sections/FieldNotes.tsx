import { tripLog } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

// Renamed concept: "Trip Log" — catch reports like a hunting/fishing journal
export function FieldNotes() {
  return (
    <section className="relative bg-ink-2 py-24 md:py-32 overflow-hidden border-y border-rule">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-6 mb-12 md:mb-16 flex-wrap">
          <div>
            <span className="stamp mb-4">No. 05 — Trip Log</span>
            <h2 className="mt-4 font-display heavy text-paper leading-[0.9] text-[clamp(2.25rem,5.5vw,5rem)]">
              <span className="block">Recent Days</span>
              <span className="block text-gold">on the Water.</span>
            </h2>
          </div>
          <p className="max-w-sm text-bone leading-relaxed">
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
        "group relative bg-ink-2 p-6 md:p-8 flex flex-col min-h-[320px] cursor-default",
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.22em]">
        <span className="text-stone">{entry.date}</span>
        <span className="text-gold">Log #{String(index + 1).padStart(3, "0")}</span>
      </div>

      <h3 className="mt-auto pt-12 font-display heavy text-paper leading-[0.92] text-3xl md:text-4xl">
        {entry.title}
      </h3>
      <p className="mt-4 text-bone leading-relaxed text-sm">{entry.excerpt}</p>

      <div className="mt-6 pt-5 border-t border-rule grid grid-cols-3 gap-3 font-mono text-[0.6rem] uppercase tracking-[0.18em]">
        <div>
          <span className="block text-stone">Species</span>
          <span className="block text-paper mt-1">{entry.species}</span>
        </div>
        <div>
          <span className="block text-stone">Length</span>
          <span className="block text-gold mt-1">{entry.length}</span>
        </div>
        <div>
          <span className="block text-stone">Water</span>
          <span className="block text-paper mt-1">{entry.location}</span>
        </div>
      </div>
    </li>
  );
}
