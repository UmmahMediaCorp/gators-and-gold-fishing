import { Link } from "wouter";
import { brand, imagery } from "@/lib/content";

export function FinalCTA() {
  return (
    <section className="relative bg-ink overflow-hidden">
      {/* Background — sunset on Lac La Biche */}
      <div className="absolute inset-0">
        <img
          src={imagery.lakeSunset}
          alt=""
          aria-hidden
          className="h-full w-full object-cover cinematic-img opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,10,8,0.95) 0%, rgba(12,10,8,0.5) 30%, rgba(12,10,8,0.4) 70%, rgba(12,10,8,1) 100%)",
          }}
        />
      </div>

      <div className="container-wide relative z-10 py-16 md:py-32">
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-end">
          <div className="col-span-12 lg:col-span-9">
            <span className="stamp mb-4 md:mb-6">No. 08 — Book the Day</span>
            <h2 className="mt-3 md:mt-4 font-display heavy text-paper leading-[0.85] text-[clamp(3rem,11vw,12rem)]">
              <span className="block">Now Let's</span>
              <span className="block text-gold">Go Fishing.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-3 mt-6 lg:mt-0">
            <p className="text-bone leading-relaxed mb-2 text-sm md:text-base">
              Send Rob your dates. He confirms within 24 hours. $200 deposit
              locks the date.
            </p>
            <Link href="/book" className="btn">
              Reserve a Date →
            </Link>
            <a href={`mailto:${brand.email}`} className="btn outline">
              Email Rob
            </a>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/20 pt-px">
          <ContactCell label="Email" value={brand.email} href={`mailto:${brand.email}`} />
          <ContactCell label="Text" value={brand.phone} href={`sms:${brand.phone.replace(/-/g, "")}`} />
          <ContactCell label="Region" value={brand.region} />
        </div>
      </div>
    </section>
  );
}

function ContactCell({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <>
      <span className="eyebrow">{label}</span>
      <span className="mt-2 md:mt-3 block font-display heavy text-paper text-xl md:text-3xl uppercase tracking-tight break-all">
        {value}
      </span>
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        className="bg-ink p-5 md:p-8 transition-colors duration-500 hover:bg-pine-deep"
      >
        {Inner}
      </a>
    );
  }
  return <div className="bg-ink p-5 md:p-8">{Inner}</div>;
}
