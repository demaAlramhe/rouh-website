import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { SessionsSection } from "@/components/sections/SessionsSection";
import { SoundJourneySection } from "@/components/sections/SoundJourneySection";
import { VideosSection } from "@/components/sections/VideosSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <SoundJourneySection />
      <CoursesSection />
      <SessionsSection />
      <VideosSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
