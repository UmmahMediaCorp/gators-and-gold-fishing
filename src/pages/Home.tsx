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

export default function Home() {
  return (
    <PageShell title="Gators & Gold Fishing Charters — Lac La Biche">
      <Hero />
      <Promise />
      <Seasons />
      <Numbers />
      <GuidePreview />
      <FieldNotes />
      <TestimonialsScroll />
      <GalleryStrip />
      <FinalCTA />
    </PageShell>
  );
}
