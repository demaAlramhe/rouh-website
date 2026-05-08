import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionShell } from "@/components/ui/SectionShell";
import { VideoFrame } from "@/components/ui/VideoFrame";
import { assets, siteMeta } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "الورشة المجانية والكتيّب | Rouh by Aseel Omar",
  description: "صفحة الورشة المجانية من Rouh مع فيديو تمهيدي وكتيّب PDF قابل للتحميل.",
};

export default function FreeWorkshopPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-48 sm:px-8 lg:pb-24 lg:pt-44">
        <div className="absolute inset-0 -z-10 bg-rouh-radial" />
        <div className="absolute inset-x-10 top-28 -z-10 h-px bg-gradient-to-l from-transparent via-rouh-wine/16 to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="animate-reveal text-center lg:text-right">
            <Badge>ورشة مجانية + كتيّب PDF</Badge>
            <h1 className="text-balance mt-7 font-display text-[3.1rem] font-bold leading-[1.14] tracking-[-0.025em] text-rouh-ink sm:text-6xl">
              بداية هادئة لفهم الترددات والعودة إلى حضورك الداخلي
            </h1>
            <p className="text-pretty mx-auto mt-6 max-w-2xl text-lg leading-9 text-rouh-ink/72 lg:mx-0">
              هذه الصفحة مهيّأة لتضم فيديو الورشة المجانية، شرحًا مختصرًا، وكتيّبًا قابلًا
              للتحميل. يمكن استبدال رابط الفيديو والملف لاحقًا من ملف المحتوى أو مجلد docs.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <ButtonLink href={siteMeta.booklet} download>
                تحميل الكتيّب المجاني
              </ButtonLink>
              <ButtonLink href="/#courses" variant="secondary">
                مشاهدة الكورس الحالي
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 top-8 size-48 rounded-full bg-rouh-blue/18 blur-3xl" />
            <div className="absolute -left-10 bottom-10 size-52 rounded-full bg-rouh-wine/14 blur-3xl" />
            <div className="luxury-card relative rounded-[2.7rem] bg-premium-card p-3 shadow-glow ring-1 ring-white/75">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.15rem]">
                <Image
                  src={assets.workshopCover}
                  alt="غلاف الورشة المجانية"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 90vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rouh-ink/48 via-transparent to-transparent" />
                <div className="absolute bottom-7 right-5 max-w-xs rounded-[1.7rem] bg-rouh-sand/92 p-5 text-right shadow-petal ring-1 ring-white/70 backdrop-blur sm:right-7">
                  <p className="font-display text-2xl font-bold text-rouh-wine">
                    ورشة Rouh المجانية
                  </p>
                  <p className="mt-2 text-sm leading-6 text-rouh-ink/70">
                    فيديو تمهيدي وكتيّب عملي كبداية لطيفة للرحلة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="فيديو الورشة"
        title="شاهدي الورشة في مساحة هادئة"
        description="اتركي هنا رابط التضمين للفيديو عندما يصبح جاهزًا."
        className="pt-8"
      >
        <VideoFrame title="فيديو الورشة المجانية" />
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
