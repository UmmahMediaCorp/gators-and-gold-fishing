import { Link } from "wouter";
import { services, imagery } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function Seasons() {
  return (
    <section className="relative bg-ink py-24 md:py-32 overflow-hidden">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-6">
          <div>
            <span className="stamp mb-4">No. 02 — Two Seasons</span>
            <h2 className="mt-4 font-display heavy text-paper leading-[0.9] text-[clamp(2.5rem,7vw,6.5rem)]">
              <span className="block">When You</span>
              <span className="block text-gold">Want to Fish.</span>
            </h2>
          </div>
          <p className="max-w-sm text-bone leading-relaxed">
            Open water from May 15 through October 15. Hard water from December
            15 through March 31, ice permitting. Pick the season — the rest
            we'll handle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <SeasonCard
              key={service.id}
              service={service}
              image={i === 0 ? imagery.fatherSon : imagery.lakeSunset}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SeasonCard({
  service,
  image,
  index,
}: {
  service: (typeof services)[number];
  image: string;
  index: number;
}) {
  const { ref, inView } = useReveal<HTMLAnchorElement>(0.15);
  return (
    <Link
      ref={ref}
      href={service.href}
      className={cn(
        "group relative block overflow-hidden border-2 border-rule hover:border-gold transition-all duration-500",
        "bg-ink-3",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
      )}
    >
      {/* Photo */}
      <div className="relative aspect-[5/3] overflow-hidden">
        <img
          src={image}
          alt={service.name}
          className="absolute inset-0 h-full w-full object-cover cinematic-img transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />

        {/* Index */}
        <span className="absolute top-5 right-5 font-mono text-xs uppercase tracking-[0.22em] text-paper bg-ink/60 px-2 py-1">
          0{index + 1} / 02
        </span>

        {/* Big title */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gold mb-2">
            {service.season}
          </p>
          <h3 className="font-display heavy text-paper leading-[0.85] text-6xl md:text-8xl">
            {service.name}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8 border-t-2 border-rule">
        <p className="text-bone leading-relaxed">{service.summary}</p>

        <div className="mt-6 flex items-center justify-between gap-4 pt-5 border-t border-rule">
          <div className="flex items-center gap-6">
            <div>
              <span className="block font-mono text-[0.6rem] uppercase tracking-[0.22em] text-stone">
                Species
              </span>
              <span className="block text-paper font-display font-bold text-sm uppercase tracking-wide mt-1">
                {service.species}
              </span>
            </div>
            <div>
              <span className="block font-mono text-[0.6rem] uppercase tracking-[0.22em] text-stone">
                Water
              </span>
              <span className="block text-paper font-display font-bold text-sm uppercase tracking-wide mt-1">
                {service.primary}
              </span>
            </div>
          </div>
          <span className="font-display text-base font-extrabold uppercase tracking-[0.06em] text-gold flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
            Explore
            <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
