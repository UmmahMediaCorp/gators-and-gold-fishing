import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
}

// A single line with mask + slide-up reveal. Wrap inside larger blocks line-by-line.
export function RevealText({ children, as: Tag = "span", className, delay = 0 }: RevealTextProps) {
  const { ref, inView } = useReveal<HTMLSpanElement>(0.1);

  return (
    <Tag className={cn("reveal-mask", inView && "is-in", className)}>
      <span
        ref={ref}
        className="reveal-inner"
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </span>
    </Tag>
  );
}

// Splits a phrase into words and reveals them with a stagger.
export function RevealWords({
  text,
  className,
  wordClassName,
  baseDelay = 0,
  stagger = 80,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  baseDelay?: number;
  stagger?: number;
}) {
  const { ref, inView } = useReveal<HTMLSpanElement>(0.05);
  const words = text.split(" ");

  return (
    <span ref={ref} className={cn("inline", className)}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className={cn("reveal-mask", inView && "is-in", wordClassName)}
        >
          <span
            className="reveal-inner"
            style={{ transitionDelay: `${baseDelay + i * stagger}ms` }}
          >
            {w}
            {i < words.length - 1 && " "}
          </span>
        </span>
      ))}
    </span>
  );
}
