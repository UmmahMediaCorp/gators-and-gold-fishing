import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
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
      <Promise />

      {/* Atmospheric break — dawn mist on the lake */}
      <AtmosphericBreak
        image={imagery.lakeDawnMist}
        alt="Lac La Biche at dawn"
        stamp="0:5:47 — First Light"
        headline="From Dawn"
        accentLine="to Dark."
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
      <TestimonialsScroll />
      <GalleryStrip />
      <FinalCTA />
    </PageShell>
  );
}
