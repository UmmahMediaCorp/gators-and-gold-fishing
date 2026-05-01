import { imagery } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function Promise() {
  const { ref: imgRef, inView: imgIn } = useReveal<HTMLDivElement>(0.15);

  return (
    <section className="relative bg-ink-2 py-16 md:py-32 overflow-hidden border-y border-rule">
      <div className="absolute inset-0 topo-bg pointer-events-none" />

      <div className="container-wide relative">
        {/* Heading first on mobile */}
        <div className="grid grid-cols-12 gap-4 md:gap-10 mb-10 md:mb-16">
          <div className="col-span-12 md:col-span-3">
            <span className="stamp">No. 01 — The Year</span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display heavy text-paper leading-[0.9] text-[clamp(2.25rem,7vw,6.5rem)]">
              <span className="block">Spring Spawn,</span>
              <span className="block text-gold">Fall Turnover,</span>
              <span className="block">Hard Water in Between.</span>
            </h2>
          </div>
        </div>

        {/* Image first on mobile (it's the proof), copy after */}
        <div className="grid grid-cols-12 gap-4 md:gap-10 items-end">
          <div
            ref={imgRef}
            className={cn(
              "col-span-12 lg:col-span-7 relative aspect-[4/3] md:aspect-[16/10] overflow-hidden",
              "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
              imgIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <img
              src={imagery.crestliner}
              alt="2026 Crestliner 1850 Fish Hawk at sunset on Lac La Biche"
              className="absolute inset-0 h-full w-full object-cover cinematic-img"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 flex flex-wrap items-end justify-between gap-2">
              <span className="stamp bg-ink/80">2026 Crestliner 1850 Fish Hawk</span>
              <span className="stamp bg-ink/80">200hp Mercury</span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 space-y-4 md:space-y-6">
            <p className="font-slab text-paper text-lg md:text-2xl leading-snug">
              You're hiring a working guide who has been running these lakes
              since 1994. Forward-facing sonar finds the fish.
              Thirty years of lake reading puts you on the right water at
              the right hour.
            </p>
            <p className="text-bone leading-relaxed text-sm md:text-base">
              Pike and walleye on Lac La Biche from May to October. Trophy
              Northern Pike on Pinehurst's fall structure. Heated UTV ice
              charters from December through March. One operator, one boat,
              one mission per trip — the fish you came for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
