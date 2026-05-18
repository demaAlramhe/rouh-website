import { SectionShell } from "@/components/ui/SectionShell";
import { SoundJourneyPromoCard } from "@/components/sections/SoundJourneyPromoCard";
import { homeSectionHeaderSpacing, homeSectionSpacing } from "@/components/sections/homeSectionSpacing";

export function SoundJourneySection() {
  return (
    <SectionShell
      id="sound-journey"
      className={homeSectionSpacing}
      headerClassName={homeSectionHeaderSpacing}
    >
      <SoundJourneyPromoCard />
    </SectionShell>
  );
}
