import Image from "next/image";
import { assets, soundJourney } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { VideoPreviewLightbox } from "@/components/ui/VideoPreviewLightbox";

type SoundJourneyPromoCardProps = {
  className?: string;
  /** زر الانتقال للرحلة والكتيّب — على صفحة الرحلة المجانية يُفضّل التمرير لأعلى المربع */
  journeyCtaHref?: string;
  /** إخفاء مربع «ابدئي من رحلة استرخاء مجانية» والزر (مثلاً على صفحة الرحلة نفسها) */
  showFreeJourneyCta?: boolean;
  /** نصوص بديلة بجانب الفيديو (مثلاً صفحة الرحلة المجانية) — الافتراضي من `soundJourney` */
  copyEyebrow?: string;
  copyTitle?: string;
  copyLead?: string;
  videoOverlayTitle?: string;
  videoCaption?: string;
  /** كلاسات إضافية لعنوان النسخة البديلة (مثلاً ضبط الحجم لسطر واحد) */
  copyTitleClassName?: string;
  /** معرّف فيديو يوتيوب للمعاينة — الافتراضي من `soundJourney.videoId` */
  embedVideoId?: string;
};

export function SoundJourneyPromoCard({
  className = "",
  journeyCtaHref = "/free-workshop",
  showFreeJourneyCta = true,
  copyEyebrow,
  copyTitle,
  copyLead,
  videoOverlayTitle,
  videoCaption,
  copyTitleClassName,
  embedVideoId,
}: SoundJourneyPromoCardProps) {
  const resolvedVideoId = embedVideoId ?? soundJourney.videoId;
  const eyebrow = copyEyebrow ?? "جلسة استرخاء";
  const title = copyTitle ?? soundJourney.title;
  const lead = copyLead ?? soundJourney.text;
  const showLead = lead.trim().length > 0;
  const overlayTitle = videoOverlayTitle ?? "فيديو الرحلة الصوتية";
  const hasCopyOverrides = copyEyebrow != null || copyTitle != null || copyLead != null;
  const caption: string | undefined =
    videoCaption !== undefined
      ? videoCaption || undefined
      : hasCopyOverrides
        ? undefined
        : "اضغطي للتشغيل والمشاهدة في مساحة هادئة";
  return (
    <div className={`luxury-card relative overflow-hidden rounded-[3rem] bg-premium-card p-6 text-rouh-ink shadow-glow ring-1 ring-white/75 sm:p-8 lg:p-12 ${className}`}>
      <Image
        src={assets.rose}
        alt=""
        width={520}
        height={520}
        className="pointer-events-none absolute -left-24 -top-24 opacity-[0.18]"
      />
      <div className="absolute inset-x-10 top-8 h-px bg-gradient-to-l from-transparent via-rouh-wine/16 to-transparent" />
      <div className="relative grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="flex flex-col items-center text-center">
          {hasCopyOverrides ? (
            <div className="flex w-full max-w-full flex-col items-center gap-1.5 text-pretty sm:gap-2">
              <p className="shrink-0 text-center font-sans text-sm font-bold leading-snug tracking-normal text-rouh-blue antialiased sm:tracking-[0.28em]">
                {eyebrow}
              </p>
              <h2
                className={`max-w-full text-pretty text-center font-display text-[2.12rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:text-5xl sm:leading-[1.17] sm:tracking-[-0.02em] ${copyTitleClassName ?? ""}`}
              >
                {title}
              </h2>
            </div>
          ) : (
            <div className="flex w-full flex-col items-center">
              <p className="mb-4 text-center font-sans text-sm font-bold leading-snug tracking-normal text-rouh-blue antialiased sm:tracking-[0.28em]">
                {eyebrow}
              </p>
              <h2
                className={`text-pretty mx-auto max-w-[22rem] text-center font-display text-[2.12rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:max-w-2xl sm:text-balance sm:text-5xl sm:leading-[1.17] sm:tracking-[-0.02em] ${copyTitleClassName ?? ""}`}
              >
                {title}
              </h2>
            </div>
          )}
          {showLead ? (
            <p className="text-pretty mx-auto mt-6 max-w-2xl text-lg leading-9 text-rouh-ink/72">{lead}</p>
          ) : null}
          {showFreeJourneyCta ? (
            <div className="mt-8 flex w-full max-w-md flex-col items-center rounded-[1.9rem] bg-white/55 p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ring-1 ring-white/70 backdrop-blur sm:p-8">
              <h3 className="text-pretty font-display text-xl font-bold leading-snug text-rouh-wine sm:text-2xl sm:leading-normal">
                ابدئي من رحلة استرخاء مجانية
              </h3>
              <ButtonLink href={journeyCtaHref} className="mt-6 w-full max-w-xs">
                الانتقال للكورس المصغّر
              </ButtonLink>
            </div>
          ) : null}
        </div>
        <VideoPreviewLightbox
          videoId={resolvedVideoId}
          title={overlayTitle}
          caption={caption}
        />
      </div>
    </div>
  );
}
