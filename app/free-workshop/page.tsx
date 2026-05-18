import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { BookletPdfLightbox } from "@/components/ui/BookletPdfLightbox";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionShell } from "@/components/ui/SectionShell";
import { VideoPreviewLightbox } from "@/components/ui/VideoPreviewLightbox";
import { assets, siteMeta } from "@/data/siteContent";

const FIRST_VIDEO_ID = "tisi5HDtkCY";
const RELAXATION_VIDEO_ID = "8gFt-RCiFlI";

export const metadata: Metadata = {
  title: "رحلة استرخاء مجانية والكتيّب | Rouh by Aseel Omar",
  description: "صفحة رحلة استرخاء مجانية من Rouh مع فيديو تمهيدي وكتيّب PDF قابل للتحميل.",
};

function VideoBlock({
  intro,
  outro,
  videoId,
  videoTitle,
  autoPlayWhenVisible = false,
  autoPlayImmediate = false,
  autoUnmuteOnInteraction = false,
}: {
  intro: ReactNode;
  outro?: ReactNode;
  videoId: string;
  videoTitle: string;
  autoPlayWhenVisible?: boolean;
  autoPlayImmediate?: boolean;
  autoUnmuteOnInteraction?: boolean;
}) {
  return (
    <article className="luxury-card overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-white/88 via-rouh-mist/35 to-rouh-sand/42 p-6 shadow-glow ring-1 ring-white/80 sm:p-8 lg:p-10">
      <div className="mx-auto max-w-3xl text-center">{intro}</div>
      <VideoPreviewLightbox
        className="mx-auto mt-8 max-w-4xl sm:mt-10"
        videoId={videoId}
        title={videoTitle}
        autoPlayWhenVisible={autoPlayWhenVisible}
        autoPlayImmediate={autoPlayImmediate}
        autoUnmuteOnInteraction={autoUnmuteOnInteraction}
        showTitleOnPreview={false}
      />
      {outro ? <div className="mx-auto mt-8 max-w-2xl text-center sm:mt-10">{outro}</div> : null}
    </article>
  );
}

export default function FreeWorkshopPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-10 pt-48 sm:px-8 lg:pb-12 lg:pt-44">
        <div className="absolute inset-0 -z-10 bg-rouh-radial" />
        <div className="absolute inset-x-10 top-28 -z-10 h-px bg-gradient-to-l from-transparent via-rouh-wine/16 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-[14%] -z-10 size-[min(28rem,85vw)] -translate-x-1/2 rounded-full bg-rouh-blue/11 blur-3xl" />

        <div className="animate-reveal relative mx-auto max-w-3xl text-center">
          <Badge>رحلة استرخاء مجانية + كتيّب مرافق</Badge>
          <h1 className="text-pretty mx-auto mt-5 max-w-[min(100%,22rem)] font-display text-[2.12rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:max-w-none sm:text-balance sm:text-5xl sm:leading-[1.18] sm:tracking-[-0.02em] lg:text-[3.05rem]">
            ابدئي رحلتك المجانية مع الترددات والصوت
          </h1>
        </div>

        <div className="relative mx-auto mt-10 flex max-w-4xl flex-col gap-10 sm:mt-12 sm:gap-12 lg:gap-14">
          <VideoBlock
            videoId={FIRST_VIDEO_ID}
            videoTitle="قبل أن نفهم العالم بالكلمات"
            autoPlayWhenVisible
            autoPlayImmediate
            autoUnmuteOnInteraction
            intro={
              <div className="space-y-4 text-pretty font-display text-xl font-bold leading-[1.55] text-rouh-ink sm:text-2xl sm:leading-[1.5]">
                <p>قبل أن نفهم العالم بالكلمات...</p>
                <p>عرفناه عبر الصوت</p>
                <p className="pt-2 text-base font-sans font-semibold leading-8 text-rouh-ink/72 sm:text-lg sm:leading-9">
                  فلماذا أصبح الصوت أداة يستخدمها كثير من المعالجين داخل جلساتهم؟
                </p>
              </div>
            }
          />

          <VideoBlock
            videoId={RELAXATION_VIDEO_ID}
            videoTitle="رحلة استرخاء مجانية"
            autoPlayWhenVisible
            autoPlayImmediate
            autoUnmuteOnInteraction
            intro={
              <p className="text-pretty font-display text-xl font-bold leading-snug text-rouh-ink sm:text-3xl sm:leading-normal">
                شاهدي رحلة استرخاء مجانية واحصلي على الكتيّب المرافق ✨
              </p>
            }
            outro={
              <div className="space-y-2 text-pretty text-base leading-8 text-rouh-ink/72 sm:text-lg sm:leading-9">
                <p>لتتعرفي بشكل أعمق على تأثير الترددات والصوت،</p>
                <p>وتبدئي خطوة لطيفة نحو الهدوء والحضور الداخلي</p>
              </div>
            }
          />

          <article
            id="free-workshop-booklet"
            className="luxury-card scroll-mt-28 overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-white/88 via-rouh-mist/35 to-rouh-sand/42 p-6 shadow-glow ring-1 ring-white/80 sm:p-8 lg:p-10"
          >
            <BookletPdfLightbox
              pdfUrl={siteMeta.booklet}
              coverSrc={assets.bookletCover}
              coverAlt="غلاف الكتيّب المرافق لرحلة استرخاء مجانية"
              heading="الكتيّب المرافق للرحلة"
              modalTitle="معاينة الكتيّب — رحلة استرخاء مجانية"
            />
          </article>
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
