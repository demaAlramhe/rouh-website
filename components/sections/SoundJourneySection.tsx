import Image from "next/image";
import { assets, soundJourney } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionShell } from "@/components/ui/SectionShell";
import { VideoFrame } from "@/components/ui/VideoFrame";

export function SoundJourneySection() {
  return (
    <SectionShell id="sound-journey" className="py-16 lg:py-24">
      <div className="luxury-card relative overflow-hidden rounded-[3rem] bg-premium-card p-6 text-rouh-ink shadow-glow ring-1 ring-white/75 sm:p-8 lg:p-12">
        <Image
          src={assets.rose}
          alt=""
          width={520}
          height={520}
          className="pointer-events-none absolute -left-24 -top-24 opacity-[0.18]"
        />
        <div className="absolute inset-x-10 top-8 h-px bg-gradient-to-l from-transparent via-rouh-wine/16 to-transparent" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="mb-4 text-sm font-bold tracking-[0.28em] text-rouh-blue">
              الرحلة الصوتية الأساسية
            </p>
            <h2 className="text-balance font-display text-[2.45rem] font-bold leading-[1.17] text-rouh-ink sm:text-5xl">
              {soundJourney.title}
            </h2>
            <p className="text-pretty mt-6 text-lg leading-9 text-rouh-ink/72">
              {soundJourney.text}
            </p>
            <div className="mt-8 rounded-[1.9rem] bg-white/55 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ring-1 ring-white/70 backdrop-blur">
              <h3 className="font-display text-2xl font-bold text-rouh-wine">
                ابدئي من الورشة المجانية
              </h3>
              <p className="mt-3 leading-8 text-rouh-ink/70">
                شاهدي الفيديو، حمّلي الكتيّب المجاني، وتعرّفي على الخطوة التالية في الكورس
                الفرونتالي.
              </p>
              <ButtonLink href="/free-workshop" className="mt-6">
                الانتقال للورشة والكتيّب
              </ButtonLink>
            </div>
          </div>
          <VideoFrame title="فيديو الرحلة الصوتية" embedUrl={soundJourney.videoUrl} />
        </div>
      </div>
    </SectionShell>
  );
}
