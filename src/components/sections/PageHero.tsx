import { motion } from "framer-motion";
import { easings } from "@/lib/utils";

interface Props {
  stamp: string;
  title: string;          // e.g. "Open Water"
  accentTitle?: string;   // e.g. "Charters" — colored gold
  subtitle: string;
  image: string;
  meta?: string;
}

// Inner-page hero — same heritage banner approach as Home, slightly shorter.
export function PageHero({ stamp, title, accentTitle, subtitle, image, meta }: Props) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-ink grain pt-[88px] md:pt-[96px]">
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-[center_30%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,10,8,0.7) 0%, rgba(12,10,8,0.25) 22%, rgba(12,10,8,0.45) 60%, rgba(12,10,8,0.95) 100%)",
          }}
        />
      </div>

      <div className="container-wide relative z-10 flex flex-col justify-end min-h-[calc(80vh-88px)] pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: easings.expoOut }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="stamp">{stamp}</span>
          {meta && <span className="stamp">{meta}</span>}
        </motion.div>

        <h1 className="font-display heavy text-paper leading-[0.85]">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.4, ease: easings.expoOut }}
            className="block text-[clamp(3.5rem,12vw,11rem)]"
          >
            {title}
          </motion.span>
          {accentTitle && (
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 0.55, ease: easings.expoOut }}
              className="block text-[clamp(3.5rem,12vw,11rem)] -mt-2 md:-mt-4 text-gold"
            >
              {accentTitle}
            </motion.span>
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: easings.expoOut }}
          className="mt-8 max-w-2xl text-bone text-md md:text-lg leading-[1.55] pt-6 border-t-2 border-gold/40"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
