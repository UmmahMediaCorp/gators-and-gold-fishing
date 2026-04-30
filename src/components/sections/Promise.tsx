import { imagery } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function Promise() {
  const { ref: imgRef, inView: imgIn } = useReveal<HTMLDivElement>(0.15);

  return (
    <section className="relative bg-ink-2 py-24 md:py-32 overflow-hidden border-y border-rule">
      {/* Subtle topographic background */}
      <div className="absolute inset-0 topo-bg pointer-events-none" />

      <div className="container-wide relative">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
          <div className="col-span-12 md:col-span-3">
            <span className="stamp">No. 01 — The Charter</span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display heavy text-paper leading-[0.9] text-[clamp(2.5rem,7.5vw,7rem)]">
              <span className="block">Real Boat.</span>
              <span className="block text-gold">Real Guide.</span>
              <span className="block">Real Trophies.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div
            ref={imgRef}
            className={cn(
              "col-span-12 lg:col-span-7 relative aspect-[16/10] overflow-hidden",
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
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <span className="stamp bg-ink/80">2026 Crestliner 1850 Fish Hawk</span>
              <span className="stamp bg-ink/80">200hp Mercury</span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 space-y-6">
            <p className="font-slab text-paper text-xl md:text-2xl leading-snug">
              You're hiring a working guide who has been running these lakes
              since 1994. Forward-facing sonar finds the fish.
              Thirty years of lake reading puts you on the right water at
              the right hour.
            </p>
            <p className="text-bone leading-relaxed">
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
