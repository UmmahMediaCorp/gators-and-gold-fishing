import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  separator?: string;
}

export function Marquee({ items, className, separator = "✦" }: MarqueeProps) {
  return (
    <div className={cn("relative w-full overflow-hidden py-8", className)}>
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-display text-[clamp(3rem,8vw,7rem)] uppercase tracking-tight">
              {item}
            </span>
            <span className="text-gold text-2xl">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
