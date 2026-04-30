import { Link } from "wouter";
import { brand, imagery, navigation } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink border-t-2 border-gold">
      {/* Big trophy banner — heavy stadium-scoreboard marquee */}
      <div className="relative overflow-hidden bg-gold py-3">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-2xl font-extrabold uppercase tracking-wide text-ink">
                Trophy Pike &amp; Walleye
              </span>
              <span className="text-ink text-xl">✦</span>
              <span className="font-display text-2xl font-extrabold uppercase tracking-wide text-ink">
                Lac La Biche · Pinehurst
              </span>
              <span className="text-ink text-xl">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 py-20 lg:py-24">
        {/* Logo + manifesto */}
        <div className="lg:col-span-5">
          <img
            src={imagery.logo}
            alt="Gators & Gold Fishing Charters badge"
            className="h-32 w-auto"
          />
          <p className="mt-8 max-w-md text-bone leading-relaxed">
            Trophy Pike and Walleye charters on Lac La Biche and Pinehurst Lake.
            Rob Clarke has guided these waters since 1994 — open water, hard
            water, and the trophy hunts that put real Gators on the leader.
          </p>
          <p className="mt-6 stamp">{brand.coordinates}</p>
        </div>

        {/* Reach Rob */}
        <div className="lg:col-span-3">
          <p className="eyebrow mb-5">Reach Rob</p>
          <ul className="space-y-3 text-bone">
            <li>
              <a
                href={`mailto:${brand.email}`}
                className="hover:text-gold transition-colors duration-300 break-all"
              >
                {brand.email}
              </a>
            </li>
            <li>
              <a
                href={`sms:${brand.phone.replace(/-/g, "")}`}
                className="hover:text-gold transition-colors duration-300"
              >
                Text {brand.phone}
              </a>
            </li>
            <li className="text-stone">{brand.region}</li>
          </ul>
        </div>

        {/* Navigate */}
        <div className="lg:col-span-2">
          <p className="eyebrow mb-5">Navigate</p>
          <ul className="space-y-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-bone hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Booking note */}
        <div className="lg:col-span-2">
          <p className="eyebrow mb-5">Book direct</p>
          <p className="text-bone leading-relaxed text-sm">
            $200 deposit. Interac e-Transfer preferred.
          </p>
          <p className="mt-3 text-stone leading-relaxed text-sm">
            Kids under 16 fish FREE. 10% off for first responders, military, and veterans.
          </p>
          <Link href="/book" className="mt-6 btn outline w-full">
            Reserve a date →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-rule">
        <div className="container-wide flex flex-col md:flex-row items-start md:items-center justify-between gap-3 py-5 text-stone text-xs font-mono uppercase tracking-[0.18em]">
          <span>© {year} Gators &amp; Gold Fishing Charters</span>
          <span>{brand.established} · Lac La Biche, Alberta · Canada</span>
        </div>
      </div>
    </footer>
  );
}
