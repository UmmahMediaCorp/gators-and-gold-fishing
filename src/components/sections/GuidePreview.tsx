import { Link } from "wouter";
import { guide, imagery } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function GuidePreview() {
  const { ref, inView } = useReveal<HTMLDivElement>(0.2);

  return (
    <section className="relative bg-ink py-24 md:py-32 border-t border-rule overflow-hidden">
      <div className="container-wide grid grid-cols-12 gap-6 md:gap-10 items-stretch">
        {/* Portrait — Rob holding pike (most iconic guide shot) */}
        <div className="col-span-12 lg:col-span-5">
          <div
            ref={ref}
            className={cn(
              "relative aspect-[4/5] overflow-hidden border-2 border-gold/30",
              "transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <img
              src={imagery.pikeGreen}
              alt="Rob Clarke holding a trophy Northern Pike on Lac La Biche"
              className="absolute inset-0 h-full w-full object-cover cinematic-img"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="stamp bg-ink/80">Your Guide</span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-gold">
                  Owner · Head Guide
                </span>
                <span className="block mt-1 font-display heavy text-3xl md:text-4xl text-paper">
                  Rob Clarke
                </span>
              </div>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-paper">
                Est. '94
              </span>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="col-span-12 lg:col-span-7 lg:pl-10 flex flex-col">
          <span className="stamp self-start mb-4">No. 04 — The Guide</span>
          <h2 className="font-display heavy text-paper leading-[0.9] text-[clamp(2.25rem,5.5vw,5.5rem)]">
            <span className="block">30 Years Reading</span>
            <span className="block text-gold">these Lakes.</span>
          </h2>

          <div className="mt-10 space-y-6 text-bone leading-relaxed text-md max-w-2xl">
            {guide.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Pull quote — slab serif, bold, no italic precious-ness */}
          <blockquote className="mt-10 pl-6 border-l-4 border-gold">
            <p className="font-slab text-paper text-2xl md:text-3xl leading-snug">
              "{guide.quotes[0]}"
            </p>
            <footer className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-stone">
              — Rob Clarke, owner &amp; guide
            </footer>
          </blockquote>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {guide.credentials.map((c) => (
              <span key={c} className="stamp">{c}</span>
            ))}
          </div>

          <Link href="/your-guide" className="mt-10 btn outline self-start">
            Read Rob's Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
