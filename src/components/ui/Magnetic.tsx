import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: "outline" | "solid";
  strength?: number;
};

type AsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type AsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type Props = AsLink | AsButton;

export const Magnetic = forwardRef<HTMLElement, Props>(function Magnetic(
  { children, className, variant = "outline", strength = 0.25, ...rest },
  _ref,
) {
  const wrapRef = useMagnetic<HTMLDivElement>(strength);
  const classes = cn("magnetic", variant === "solid" && "solid", className);

  if ("href" in rest && rest.href !== undefined) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <div ref={wrapRef} className="inline-block">
        <a {...anchorProps} className={classes}>
          {children}
        </a>
      </div>
    );
  }
  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <div ref={wrapRef} className="inline-block">
      <button {...buttonProps} className={classes}>
        {children}
      </button>
    </div>
  );
});
