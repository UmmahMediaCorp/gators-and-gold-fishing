import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brand, navigation, imagery } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <>
      {/* Top utility strip — like a national park sign */}
      <div className="fixed inset-x-0 top-0 z-50 bg-ink border-b border-rule">
        <div className="container-wide flex items-center justify-between py-1.5 text-[0.65rem] font-mono uppercase tracking-[0.22em] text-stone">
          <span className="hidden md:inline">{brand.coordinates}</span>
          <span className="md:hidden">{brand.region}</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold">2026 Season — Open</span>
          </span>
          <span className="hidden md:inline">{brand.established}</span>
        </div>
      </div>

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className={cn(
          "fixed inset-x-0 top-[28px] z-50 transition-all duration-500",
          "before:absolute before:inset-0 before:-z-10 before:transition-all before:duration-500",
          scrolled
            ? "before:bg-[rgba(12,10,8,0.92)] before:backdrop-blur-xl before:border-b before:border-rule"
            : "before:bg-gradient-to-b before:from-ink/80 before:to-transparent",
        )}
      >
        <div className="container-wide flex items-center justify-between py-3 md:py-4">
          {/* Logo lockup */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Gators & Gold home"
          >
            <img
              src={imagery.logo}
              alt="Gators & Gold Fishing Charters"
              className={cn(
                "h-12 md:h-14 w-auto transition-all duration-500",
                "drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]",
              )}
            />
            <span className="hidden xl:flex flex-col leading-tight border-l border-rule pl-3">
              <span className="font-display text-base font-extrabold tracking-wide text-paper">
                Gators &amp; Gold
              </span>
              <span className="text-[0.6rem] font-mono uppercase tracking-[0.18em] text-stone">
                Trophy Pike &amp; Walleye · Lac La Biche
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = location === item.href;
              if (item.emphasized) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="ml-3 btn !py-2.5 !px-5 !text-[0.78rem]"
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative px-4 py-2 font-display text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-300",
                    isActive ? "text-gold" : "text-paper hover:text-gold",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-[2px] origin-center bg-gold transition-transform duration-500",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden flex flex-col gap-[5px] px-3 py-3 -mr-3"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={cn("h-[2px] w-7 bg-paper transition-transform duration-500", open && "translate-y-[7px] rotate-45")} />
            <span className={cn("h-[2px] w-7 bg-paper transition-opacity duration-300", open && "opacity-0")} />
            <span className={cn("h-[2px] w-7 bg-paper transition-transform duration-500", open && "-translate-y-[7px] -rotate-45")} />
          </button>
        </div>
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-ink"
          >
            <div className="container-wide flex flex-col h-full pt-32 pb-12">
              <nav className="flex flex-col">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-baseline justify-between border-b border-rule py-5"
                    >
                      <span className="font-display text-5xl font-extrabold uppercase tracking-tight text-paper group-hover:text-gold transition-colors">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-stone">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto pt-12 border-t border-rule">
                <p className="eyebrow mb-3">Reach Rob direct</p>
                <a href={`mailto:${brand.email}`} className="block font-display text-2xl font-bold text-gold hover:text-paper transition-colors">
                  {brand.email}
                </a>
                <a href={`sms:${brand.phone.replace(/-/g, "")}`} className="mt-1 block font-display text-2xl font-bold text-gold hover:text-paper transition-colors">
                  {brand.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
