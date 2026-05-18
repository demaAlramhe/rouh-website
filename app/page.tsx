import { HomeRoseBackdrop } from "@/components/layout/HomeRoseBackdrop";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { HomeFeedbackSection } from "@/components/sections/HomeFeedbackSection";
import { SessionsSection } from "@/components/sections/SessionsSection";
import { SoundJourneySection } from "@/components/sections/SoundJourneySection";
import { VideosSection } from "@/components/sections/VideosSection";

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <HomeRoseBackdrop />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <SoundJourneySection />
      <CoursesSection />
      <SessionsSection />
      <HomeFeedbackSection />
      <VideosSection />
      <CtaSection />
      <ContactSection />
    </div>
  );
}
