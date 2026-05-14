import { SectionShell } from "@/components/ui/SectionShell";
import { SoundJourneyPromoCard } from "@/components/sections/SoundJourneyPromoCard";

export function SoundJourneySection() {
  return (
    <SectionShell id="sound-journey" className="py-16 lg:py-24">
      <SoundJourneyPromoCard />
    </SectionShell>
  );
}
