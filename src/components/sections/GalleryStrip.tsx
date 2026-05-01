import { Link } from "wouter";
import { galleryImages } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function GalleryStrip() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="relative bg-ink-2 py-16 md:py-32 border-y border-rule overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-4 md:gap-6 mb-8 md:mb-16 items-end">
          <div className="col-span-12 md:col-span-7">
            <span className="stamp mb-3">No. 07 — The Wall</span>
            <h2 className="mt-3 md:mt-4 font-display heavy text-paper leading-[0.9] text-[clamp(2.25rem,5.5vw,5rem)]">
              <span className="block">The Catches.</span>
              <span className="block text-gold">The Smiles.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:justify-end">
            <Link href="/gallery" className="btn outline">
              Open the Wall →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 grid-rows-[auto_auto] gap-2 md:gap-4">
          {preview.map((img, i) => (
            <GalleryTile
              key={img.src}
              src={img.src}
              alt={img.alt}
              tag={img.tag}
              index={i}
              spans={tileSpans[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const tileSpans = [
  "col-span-7 md:col-span-5 row-span-2 aspect-[4/5]",
  "col-span-5 md:col-span-4 aspect-[4/3]",
  "col-span-12 md:col-span-3 aspect-[1/1]",
  "col-span-6 md:col-span-4 aspect-[1/1]",
  "col-span-6 md:col-span-3 aspect-[1/1]",
  "col-span-12 md:col-span-5 aspect-[16/10]",
];

function GalleryTile({
  src,
  alt,
  tag,
  index,
  spans,
}: {
  src: string;
  alt: string;
  tag: string;
  index: number;
  spans: string;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden bg-ink-3 border border-rule",
        spans,
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover cinematic-img transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent transition-opacity duration-700 opacity-50 group-hover:opacity-90" />
      <span className="stamp absolute bottom-3 left-3 bg-ink/80">{tag}</span>
    </div>
  );
}
