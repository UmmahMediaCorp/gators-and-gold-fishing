import { Link } from "wouter";
import { PageShell } from "@/components/layout/PageShell";
import { motion } from "framer-motion";
import { easings } from "@/lib/utils";
import { imagery } from "@/lib/content";

export default function NotFound() {
  return (
    <PageShell title="404 — Off the Map · Gators & Gold">
      <section className="relative min-h-screen w-full overflow-hidden bg-ink grain">
        <div className="absolute inset-0">
          <img
            src={imagery.lakeSunset}
            alt=""
            aria-hidden
            className="h-full w-full object-cover cinematic-img opacity-40"
          />
          <div className="absolute inset-0 vignette" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink" />
        </div>

        <div className="container-wide relative z-10 flex flex-col justify-center min-h-screen pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: easings.expoOut }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="stamp">404 — Off the Map</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: easings.expoOut }}
            className="font-display heavy text-paper leading-[0.85] text-[clamp(4rem,16vw,14rem)]"
          >
            <span className="block">Lost in the</span>
            <span className="block text-gold">Weed Line.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: easings.expoOut }}
            className="mt-10 max-w-md text-bone leading-relaxed"
          >
            That page slipped the leader. But the dock's still there — and so
            is the next charter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: easings.expoOut }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link href="/" className="btn">Back to Home →</Link>
            <Link href="/book" className="btn outline">Reserve a Date</Link>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
