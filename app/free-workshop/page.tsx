import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionShell } from "@/components/ui/SectionShell";
import { VideoPreviewLightbox } from "@/components/ui/VideoPreviewLightbox";
import { siteMeta } from "@/data/siteContent";

const FREE_WORKSHOP_VIDEO_ID = "8gFt-RCiFlI";

export const metadata: Metadata = {
  title: "الورشة المجانية والكتيّب | Rouh by Aseel Omar",
  description: "صفحة الورشة المجانية من Rouh مع فيديو تمهيدي وكتيّب PDF قابل للتحميل.",
};

export default function FreeWorkshopPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-20 pt-48 sm:px-8 lg:pb-28 lg:pt-44">
        <div className="absolute inset-0 -z-10 bg-rouh-radial" />
        <div className="absolute inset-x-10 top-28 -z-10 h-px bg-gradient-to-l from-transparent via-rouh-wine/16 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-[22%] -z-10 size-[min(32rem,88vw)] -translate-x-1/2 rounded-full bg-rouh-blue/12 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[8%] left-1/2 -z-10 size-72 -translate-x-1/2 rounded-full bg-rouh-rose/14 blur-3xl" />

        <div className="animate-reveal relative mx-auto max-w-3xl text-center">
          <Badge>ورشة مجانية + كتيّب مرافق</Badge>
          <h1 className="text-balance mt-8 font-display text-[3.1rem] font-bold leading-[1.14] tracking-[-0.025em] text-rouh-ink sm:text-[3.35rem] lg:text-6xl">
            بداية هادئة للتعرّف إلى عالم الترددات والعودة إلى نفسك
          </h1>
          <div className="text-pretty mx-auto mt-8 max-w-2xl space-y-5 text-lg leading-9 text-rouh-ink/72">
            <p>
              في هذه الصفحة ستجدين الورشة المجانية مع الكتيّب المرافق،
              <br />
              لتعيشي تجربة أولى بسيطة وملهمة مع الترددات والصوت.
            </p>
            <p>
              مساحة لطيفة تساعدك على الفهم، الهدوء، والاقتراب أكثر من هذا العالم بخطوة مريحة
              وواضحة.
            </p>
          </div>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={siteMeta.booklet} download>
              تحميل الكتيّب المجاني
            </ButtonLink>
            <ButtonLink href="/#courses" variant="secondary">
              مشاهدة الكورس الحالي
            </ButtonLink>
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="فيديو الورشة"
        title="شاهدي الورشة في مساحة هادئة"
        description="اضغطي على المعاينة للاستماع والمشاهدة في نافذة هادئة دون إزعاج بقية الصفحة."
        className="pt-8"
      >
        <VideoPreviewLightbox
          videoId={FREE_WORKSHOP_VIDEO_ID}
          title="فيديو الورشة المجانية"
          caption="شاهدي الورشة عندما تكونين جاهزة — اضغطي للتشغيل"
        />
      </SectionShell>

      <SectionShell
        eyebrow="بعد الورشة"
        title="اختاري الخطوة التالية في رحلتك"
        description="هذه الصفحة تربط الورشة المجانية بمسارات Rouh المدفوعة بطريقة واضحة وناعمة."
      >
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="luxury-card rounded-[2.4rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75 sm:p-10">
            <Badge>متاح الآن</Badge>
            <h2 className="text-balance mt-6 font-display text-4xl font-bold leading-tight text-rouh-ink">
              الكورس الفرونتالي للعلاج بالصوت
            </h2>
            <p className="text-pretty mt-5 max-w-2xl text-lg leading-9 text-rouh-ink/70">
              مسار حضوري عميق للتدرّب على الطاسات التبتية والترددات العلاجية بوعي، مهنية،
              وحضور. زر الدفع أدناه رابط خارجي وهمي وجاهز للاستبدال.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteMeta.paymentUrl}>الدفع والحجز</ButtonLink>
              <ButtonLink href="/#contact" variant="secondary">
                أسئلة قبل التسجيل
              </ButtonLink>
            </div>
          </article>

          <article className="luxury-card rounded-[2.4rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75 sm:p-10">
            <Badge>قريبًا</Badge>
            <h2 className="text-balance mt-6 font-display text-4xl font-bold leading-tight text-rouh-ink">
              الكورس الأونلاين
            </h2>
            <p className="text-pretty mt-5 text-lg leading-9 text-rouh-ink/70">
              نسخة رقمية قيد التحضير لمن ترغب بتعلّم أساسيات الرحلة من البيت وبإيقاع مرن.
            </p>
            <ButtonLink href={siteMeta.instagram} variant="secondary" className="mt-8">
              تابعي موعد الإطلاق
            </ButtonLink>
          </article>
        </div>
      </SectionShell>

      <section className="px-5 py-16 sm:px-8">
        <div className="luxury-card mx-auto max-w-4xl rounded-[2.4rem] bg-premium-card p-8 text-center shadow-soft ring-1 ring-white/75 sm:p-12">
          <h2 className="text-balance font-display text-4xl font-bold text-rouh-ink">
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
