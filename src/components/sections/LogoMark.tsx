import { motion } from "framer-motion";
import { brand, imagery } from "@/lib/content";
import { easings } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

// "The Mark" — featured logo section. Sits right after the hero on the
// home page and acts as a deliberate contrast break (cream paper bg).
// Mobile-first: badge dominates the center, text stacks cleanly below.
// Desktop: three-column with flanking trophy labels.
export function LogoMark() {
  const { ref, inView } = useReveal<HTMLDivElement>(0.2);

  return (
    <section className="relative overflow-hidden bg-paper text-ink pt-[88px] md:pt-0">
      {/* Subtle topographic line texture */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: "url(/images/topo-map.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Top + bottom hairlines */}
      <div className="absolute inset-x-0 top-[88px] md:top-0 h-[3px] bg-ink" />
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-ink" />

      <div className="container-wide relative py-14 md:py-28 lg:py-32" data-version="v3-mobile-first">

        {/* Top crossbar — coordinate stamps */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: easings.expoOut }}
          className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between gap-1.5 md:gap-3 pb-6 md:pb-10 border-b border-ink/30 font-mono text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.22em] text-ink text-center md:text-left"
        >
          <span>Lac La Biche · Alberta · Canada</span>
          <span className="text-ink/70">{brand.coordinates}</span>
          <span>{brand.established}</span>
        </motion.div>

        {/* The badge — center stage on every screen */}
        <div className="flex flex-col items-center justify-center gap-8 md:gap-10 py-10 md:py-14">
          {/* Mobile: small "Trophy Pike & Walleye" intro */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2, ease: easings.expoOut }}
            className="md:hidden block font-mono text-[0.7rem] uppercase tracking-[0.28em] text-ink/70 text-center"
          >
            Trophy Pike &amp; Class Walleye
          </motion.span>

          <div className="flex w-full items-center justify-center gap-4 md:gap-12">
            {/* Desktop-only flanking label LEFT */}
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.4, ease: easings.expoOut }}
              className="hidden md:block flex-1 text-right font-display heavy text-ink leading-[0.92] text-4xl lg:text-6xl"
            >
              Trophy
              <br />
              Pike.
            </motion.span>

            {/* The badge */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.94 }}
              transition={{ duration: 1.4, ease: easings.expoOut }}
              className="relative shrink-0 mx-auto"
            >
              <CornerTicks />
              <img
                src={imagery.logo}
                alt={brand.full}
                className={cn(
                  // Mobile: big centerpiece. Caps at viewport so it never overflows.
                  "block h-auto",
                  "w-[min(82vw,360px)] sm:w-[400px] md:w-[420px] lg:w-[480px]",
                  "drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)]",
                )}
              />
            </motion.div>

            {/* Desktop-only flanking label RIGHT */}
            <motion.span
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.4, ease: easings.expoOut }}
              className="hidden md:block flex-1 text-left font-display heavy text-ink leading-[0.92] text-4xl lg:text-6xl"
            >
              Class
              <br />
              <span className="text-gold-deep">Walleye.</span>
            </motion.span>
          </div>

          {/* Mobile-only: pair of headlines stacked under the badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.5, ease: easings.expoOut }}
            className="md:hidden flex flex-col items-center gap-2 text-center"
          >
            <span className="font-display heavy text-ink leading-[0.92] text-5xl">
              Trophy Pike.
            </span>
            <span className="font-display heavy text-gold-deep leading-[0.92] text-5xl">
              Class Walleye.
            </span>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.7, ease: easings.expoOut }}
          className="flex flex-col items-center gap-3 md:gap-5 pt-8 md:pt-12 border-t border-ink/30 text-center"
        >
          <p className="font-display heavy text-ink leading-[0.95] text-2xl sm:text-3xl md:text-5xl lg:text-6xl max-w-3xl">
            <span>The Mark of</span>{" "}
            <span className="text-gold-deep">Three Decades</span>{" "}
            <span>on Alberta Water.</span>
          </p>
          <p className="font-mono text-[0.6rem] sm:text-[0.65rem] md:text-xs uppercase tracking-[0.22em] text-ink/70 max-w-xl">
            Owner-operated · Fully insured · Licensed Alberta guide · First Aid certified
          </p>
        </motion.div>

        {/* Bottom marks row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.9, ease: easings.expoOut }}
          className="mt-10 md:mt-14 grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-6 pt-6 border-t border-ink/30"
        >
          <Mark label="Pike" value="40&quot;+" />
          <Mark label="Walleye" value="28&quot;+" />
          <Mark label="Charter" value="2026" />
          <Mark label="Vessel" value="Crestliner" className="hidden md:block" />
          <Mark label="Power" value="200hp" className="hidden md:block" />
        </motion.div>
      </div>
    </section>
  );
}

function CornerTicks() {
  return (
    <>
      <span className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 border-l-2 border-t-2 border-ink/60" />
      <span className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 border-r-2 border-t-2 border-ink/60" />
      <span className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 border-l-2 border-b-2 border-ink/60" />
      <span className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 border-r-2 border-b-2 border-ink/60" />
    </>
  );
}

function Mark({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <span
        className="block font-display heavy text-ink text-xl sm:text-2xl md:text-4xl leading-none"
        dangerouslySetInnerHTML={{ __html: value }}
      />
      <span className="mt-1 md:mt-2 block font-mono text-[0.55rem] md:text-[0.65rem] uppercase tracking-[0.22em] text-ink/65">
        {label}
      </span>
    </div>
  );
}
