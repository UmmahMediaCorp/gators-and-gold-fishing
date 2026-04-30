import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

interface Props {
  image: string;
  alt?: string;
  // Optional eyebrow + headline overlay
  stamp?: string;
  headline?: string;
  accentLine?: string; // shown in gold beneath headline
  // Layout toggles
  height?: "tall" | "regular" | "short";
  align?: "left" | "right" | "center";
}

// Full-bleed image break with optional overlay headline.
// Used between text-heavy sections to add visual punch.
export function AtmosphericBreak({
  image,
  alt = "",
  stamp,
  headline,
  accentLine,
  height = "regular",
  align = "left",
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const { ref: revealRef, inView } = useReveal<HTMLDivElement>(0.1);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = window.innerHeight + rect.height;
      const seen = window.innerHeight - rect.top;
      const p = Math.max(0, Math.min(1, seen / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heightClass = {
    tall: "min-h-[100vh]",
    regular: "min-h-[70vh] md:min-h-[80vh]",
    short: "min-h-[50vh] md:min-h-[55vh]",
  }[height];

  const alignClass = {
    left: "items-start text-left",
    right: "items-end text-right",
    center: "items-center text-center",
  }[align];

  return (
    <section
      ref={sectionRef}
      className={cn("relative w-full overflow-hidden bg-ink grain", heightClass)}
    >
      {/* Parallax image */}
      <div
        ref={revealRef}
        className="absolute inset-0"
        style={{
          transform: `translate3d(0, ${(0.5 - progress) * 80}px, 0)`,
        }}
      >
        <img
          src={image}
          alt={alt}
          className={cn(
            "h-full w-full object-cover cinematic-img transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            inView ? "scale-100" : "scale-105",
          )}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,10,8,0.6) 0%, rgba(12,10,8,0.15) 30%, rgba(12,10,8,0.45) 70%, rgba(12,10,8,0.85) 100%)",
          }}
        />
      </div>

      {/* Optional overlay copy */}
      {(stamp || headline) && (
        <div className={cn("relative z-10 container-wide flex flex-col justify-end h-full", heightClass, alignClass, "py-16 md:py-20")}>
          {stamp && <span className="stamp mb-6">{stamp}</span>}
          {headline && (
            <h3 className="font-display heavy text-paper leading-[0.88] text-[clamp(2rem,7vw,7rem)] max-w-5xl">
              {headline}
              {accentLine && (
                <span className="block text-gold">{accentLine}</span>
              )}
            </h3>
          )}
        </div>
      )}
    </section>
  );
}
