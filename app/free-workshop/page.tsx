import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { BookletPdfLightbox } from "@/components/ui/BookletPdfLightbox";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionShell } from "@/components/ui/SectionShell";
import { VideoPreviewLightbox } from "@/components/ui/VideoPreviewLightbox";
import { SoundJourneyPromoCard } from "@/components/sections/SoundJourneyPromoCard";
import { assets, siteMeta } from "@/data/siteContent";

const FREE_WORKSHOP_VIDEO_ID = "tisi5HDtkCY";

const FREE_WORKSHOP_VIDEO_INTRO_LINES = [
  "رحلة صوت تعيدكِ إلى نفسك وسط ضجيج العالم الخارجي.",
  "مساحة من الهدوء، الحضور، والوعي عبر الترددات العلاجية والطاسات التبتية.",
] as const;

export const metadata: Metadata = {
  title: "رحلة استرخاء مجانية والكتيّب | Rouh by Aseel Omar",
  description: "صفحة رحلة استرخاء مجانية من Rouh مع فيديو تمهيدي وكتيّب PDF قابل للتحميل.",
};

export default function FreeWorkshopPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-14 pt-48 sm:px-8 lg:pb-16 lg:pt-44">
        <div className="absolute inset-0 -z-10 bg-rouh-radial" />
        <div className="absolute inset-x-10 top-28 -z-10 h-px bg-gradient-to-l from-transparent via-rouh-wine/16 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-[14%] -z-10 size-[min(28rem,85vw)] -translate-x-1/2 rounded-full bg-rouh-blue/11 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[8%] left-1/2 -z-10 size-64 -translate-x-1/2 rounded-full bg-rouh-rose/12 blur-3xl" />

        <div className="animate-reveal relative mx-auto max-w-3xl text-center">
          <Badge>رحلة استرخاء مجانية + كتيّب مرافق</Badge>
          <h1 className="text-pretty mx-auto mt-5 max-w-[min(100%,22rem)] font-display text-[2.12rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:max-w-none sm:text-balance sm:text-5xl sm:leading-[1.18] sm:tracking-[-0.02em] lg:text-[3.05rem]">
            ابدئي رحلتك المجانية مع الترددات والصوت
          </h1>
          <p className="text-pretty mx-auto mt-4 max-w-xl text-base leading-8 text-rouh-ink/72 sm:text-lg sm:leading-9">
            شاهدي رحلة استرخاء مجانية وحمّلي الكتيّب المرافق لتتعرّفي بشكل أوضح على هذا العالم،
            وتبدئي بخطوة لطيفة نحو الهدوء والحضور الداخلي.
          </p>
        </div>

        <div className="relative mx-auto mt-8 max-w-7xl sm:mt-10">
          <article
            id="free-workshop-media"
            className="luxury-card overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-white/88 via-rouh-mist/35 to-rouh-sand/42 p-6 shadow-glow ring-1 ring-white/80 sm:p-8 lg:p-10"
          >
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12 lg:gap-x-14">
              {/* RTL: عمود أول يمين = الكتيّب (~ثُلث) */}
              <BookletPdfLightbox
                className="order-2 lg:order-none"
                pdfUrl={siteMeta.booklet}
                coverSrc={assets.bookletCover}
                coverAlt="غلاف الكتيّب المرافق لرحلة استرخاء مجانية"
                heading="الكتيّب المرافق للرحلة"
                modalTitle="معاينة الكتيّب — رحلة استرخاء مجانية"
                columnSyncDescriptionLines={FREE_WORKSHOP_VIDEO_INTRO_LINES}
              />

              {/* عمود ثانٍ يسار = الفيديو (~ثُلثان) */}
              <div className="order-1 flex min-w-0 flex-col lg:order-none">
                <h2 className="text-pretty text-center font-display text-xl font-bold leading-snug tracking-normal text-rouh-ink sm:text-balance sm:text-3xl sm:leading-normal sm:tracking-[-0.02em]">
                  الرحلة الصوتية الأساسية
                </h2>
                <div className="text-pretty mx-auto mt-3 max-w-xl text-center text-sm leading-7 text-rouh-ink/68 sm:mt-4 sm:text-base sm:leading-8">
                  <p>{FREE_WORKSHOP_VIDEO_INTRO_LINES[0]}</p>
                  <p className="mt-2.5 text-rouh-ink/62 sm:mt-3">{FREE_WORKSHOP_VIDEO_INTRO_LINES[1]}</p>
                </div>
                <VideoPreviewLightbox
                  className="mt-5"
                  videoId={FREE_WORKSHOP_VIDEO_ID}
                  title="الرحلة الصوتية الأساسية"
                />
              </div>
            </div>
          </article>

          <SoundJourneyPromoCard
            className="mt-10 scroll-mt-28 sm:mt-12"
            showFreeJourneyCta={false}
            copyEyebrow="فيديو الرحلة"
            copyTitle="شاهدي رحلة استرخاء مجانية"
            copyLead=""
            copyTitleClassName="!text-[1.68rem] !leading-snug sm:!text-[2rem] sm:!leading-[1.22] md:!text-[2.2rem] lg:!text-[clamp(1.85rem,2.1vw+1.35rem,2.55rem)] lg:!whitespace-nowrap xl:!text-[clamp(2rem,2.2vw+1.2rem,2.85rem)]"
            videoOverlayTitle="فيديو الرحلة"
            embedVideoId="8gFt-RCiFlI"
          />
        </div>
      </section>

      <SectionShell
        eyebrow="بعد الرحلة"
        title="اختاري الخطوة التالية في رحلتك"
        className="pt-4"
      >
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="luxury-card rounded-[2.4rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75 sm:p-10">
            <Badge>متاح الآن</Badge>
            <h2 className="text-pretty mt-6 font-display text-3xl font-bold leading-snug tracking-normal text-rouh-ink sm:text-balance sm:text-4xl sm:leading-tight sm:tracking-[-0.02em]">
              كورس وجاهي للعلاج بالصوت
            </h2>
            <p className="text-pretty mt-5 max-w-2xl text-lg leading-9 text-rouh-ink/70">
              مسار حضوري عميق للتدرّب على الطاسات التبتية والترددات العلاجية بوعي، مهنية، وحضور.
            </p>
            <ButtonLink href={siteMeta.courseUrl} variant="primary" className="mt-8">
              تعرّفي أكثر على الكورس
            </ButtonLink>
          </article>

          <article className="luxury-card rounded-[2.4rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75 sm:p-10">
            <Badge>قريبًا</Badge>
            <h2 className="text-pretty mt-6 font-display text-3xl font-bold leading-snug tracking-normal text-rouh-ink sm:text-balance sm:text-4xl sm:leading-tight sm:tracking-[-0.02em]">
              الكورس الأونلاين
            </h2>
            <p className="text-pretty mt-5 text-lg leading-9 text-rouh-ink/70">
              نسخة رقمية قيد التحضير لمن ترغب بتعلّم أساسيات الرحلة من البيت وبإيقاع مرن.
            </p>
            <ButtonLink href={siteMeta.instagram} variant="primary" className="mt-8">
              تابعي موعد الإطلاق
            </ButtonLink>
          </article>
        </div>
      </SectionShell>

      <section className="px-5 py-16 sm:px-8">
        <div className="luxury-card mx-auto max-w-4xl rounded-[2.4rem] bg-premium-card p-8 text-center shadow-soft ring-1 ring-white/75 sm:p-12">
          <h2 className="text-pretty font-display text-3xl font-bold leading-snug tracking-normal text-rouh-ink sm:text-balance sm:text-4xl sm:leading-none sm:tracking-[-0.02em]">
            هل ترغبين بالعودة للصفحة الرئيسية؟
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-rouh-ink/68">
            ستجدين هناك قصة أسيل، الجلسات، الورشات، والفيديوهات التعليمية.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[linear-gradient(135deg,#5a9db0,#4c8fa3)] px-7 py-3.5 text-sm font-bold text-white shadow-button transition hover:-translate-y-1.5"
          >
            العودة إلى الرئيسية
          </Link>
        </div>
      </section>
    </>
  );
}
