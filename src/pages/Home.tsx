import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { LogoMark } from "@/components/sections/LogoMark";
import { TrophyReel } from "@/components/sections/TrophyReel";
import { Promise } from "@/components/sections/Promise";
import { Seasons } from "@/components/sections/Seasons";
import { Numbers } from "@/components/sections/Numbers";
import { GuidePreview } from "@/components/sections/GuidePreview";
import { FieldNotes } from "@/components/sections/FieldNotes";
import { TestimonialsScroll } from "@/components/sections/TestimonialsScroll";
import { GalleryStrip } from "@/components/sections/GalleryStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { AtmosphericBreak } from "@/components/sections/AtmosphericBreak";
import { imagery } from "@/lib/content";

export default function Home() {
  return (
    <PageShell title="Gators & Gold Fishing Charters — Lac La Biche">
      <Hero />

      {/* The Mark — featured badge section, cream contrast break */}
      <LogoMark />

      {/* Trophy reel — fishing as the main attraction */}
      <TrophyReel
        stamp="The Wall · Recent Trophies"
        headline="The Catches"
        accentLine="Speak for Themselves."
        copy="Real anglers, real fish, real days on Lac La Biche & Pinehurst. Swipe through some of the trophies that came aboard the Crestliner."
      />

      <Promise />

      {/* Atmospheric break — boat tied at dock, first light */}
      <AtmosphericBreak
        image={imagery.dockFirstLight}
        alt="Boat tied at the dock at first light"
        stamp="0:5:47 — Pre-Launch"
        headline="The Day Begins"
        accentLine="Before the Sun Does."
        height="regular"
        align="left"
      />

      <Seasons />
      <Numbers />

      {/* Atmospheric break — vintage tackle, heritage gear moment */}
      <AtmosphericBreak
        image={imagery.vintageTackle}
        alt="Vintage tackle box of classic lures"
        stamp="No. 04 — The Tools"
        headline="Premier Rods,"
        accentLine="Specialized Bait."
        height="short"
        align="right"
      />

      <GuidePreview />
      <FieldNotes />

      {/* Shore lunch atmospheric break */}
      <AtmosphericBreak
        image={imagery.shoreLunch}
        alt="Shore lunch over the campfire"
        stamp="The Tradition"
        headline="Shore Lunch."
        accentLine="The Day's Real Trophy."
        height="short"
        align="right"
      />

      <TestimonialsScroll />
      <GalleryStrip />
      <FinalCTA />
    </PageShell>
  );
}
