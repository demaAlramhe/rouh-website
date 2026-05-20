import type { Metadata } from "next";
import { FrontalCourseGallerySection } from "@/components/sections/FrontalCourseGallerySection";
import { FrontalCourseTestimonialsSection } from "@/components/sections/FrontalCourseTestimonialsSection";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { VideoPreviewLightbox } from "@/components/ui/VideoPreviewLightbox";
import { frontalCourseWhatsApp } from "@/data/siteContent";

const whatsappLinkProps = {
  target: "_blank" as const,
  rel: "noopener noreferrer",
};

const FRONTAL_COURSE_VIDEO_ID = "BSBgYBJi9jQ";

export const metadata: Metadata = {
  title: "كورس فن العلاج بالطاسات التبتية | Rouh by Aseel Omar",
  description:
    "تعلّمي استخدام الصوت والترددات والطاسات التبتية بمهنية ووعي — كورس حضوري من أكاديمية Rouh.",
};

function SectionDivider() {
  return (
    <div
      className="mx-auto my-14 max-w-lg"
      aria-hidden
    >
      <div className="h-px bg-gradient-to-l from-transparent via-rouh-wine/22 to-transparent" />
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3.5 text-rouh-ink">
      {items.map((item) => (
        <li
          key={item}
          className="relative pr-7 text-pretty leading-[1.75] before:absolute before:right-0 before:top-[0.55em] before:size-2 before:rounded-full before:bg-gradient-to-br before:from-rouh-blue before:to-rouh-wine/80"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function FrontalDateCardInvestment() {
  return (
    <p
      className="flex min-w-0 flex-nowrap items-baseline justify-start gap-x-1.5 overflow-x-auto text-[clamp(0.75rem,1.8vw+0.42rem,1.0625rem)] tabular-nums leading-snug [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-x-2.5 sm:overflow-visible [&::-webkit-scrollbar]:hidden"
      aria-label="الاستثمار في نفسك: السعر الحالي 2500 شيكل، السعر السابق 2700 شيكل"
    >
      <span className="shrink-0 font-semibold text-rouh-ink/58">الاستثمار في نفسك:</span>
      <span className="shrink-0 font-semibold text-rouh-ink/42 line-through decoration-rouh-ink/22 decoration-1">
        2700₪
      </span>
      <span className="shrink-0 font-bold text-rouh-ink [font-size:max(1em,1.05rem)] sm:[font-size:1.08em]">
        2500₪
      </span>
    </p>
  );
}

export default function FrontalCoursePage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-20 pt-44 sm:px-8 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-rouh-radial" />
        <div className="absolute inset-x-8 top-32 -z-10 h-px bg-gradient-to-l from-transparent via-rouh-wine/14 to-transparent" />
        <div className="absolute -left-24 top-1/3 -z-10 size-72 rounded-full bg-rouh-blue/12 blur-3xl" />
        <div className="absolute -right-16 bottom-24 -z-10 size-64 rounded-full bg-rouh-rose/16 blur-3xl" />

        <div className="mx-auto max-w-4xl text-center sm:max-w-[42rem]">
          <p className="animate-reveal font-display text-lg font-bold leading-snug text-rouh-ink sm:text-2xl sm:leading-normal">
            رحلة استرخاء مجانية برفقة الترددات
          </p>

          <div className="mt-10">
            <Badge>كورس حضوري — الطاسات التبتية</Badge>
          </div>

          <h1 className="text-pretty mx-auto mt-7 max-w-[min(100%,22rem)] font-display text-[2.35rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:max-w-none sm:text-balance sm:text-6xl sm:leading-[1.12] sm:tracking-[-0.02em]">
            كورس فن العلاج بالطاسات التبتية
          </h1>

          <p className="text-pretty mx-auto mt-8 max-w-2xl text-lg leading-[1.85] text-rouh-ink sm:max-w-[36rem]">
            تعلمي كيف تستخدمي الصوت والترددات لدعم الاسترخاء، التوازن، والحضور العلاجي بوعي ومهنية 🤍
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={frontalCourseWhatsApp.general} {...whatsappLinkProps}>
              تواصلي للحجز عبر واتساب
            </ButtonLink>
            <ButtonLink href="/" variant="secondary">
              العودة للرئيسية
            </ButtonLink>
            <ButtonLink href="/#courses" variant="ghost">
              قسم الكورسات
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="px-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <VideoPreviewLightbox
            videoId={FRONTAL_COURSE_VIDEO_ID}
            title="لمحة من رحلة الكورس — العلاج بالطاسات التبتية"
            orientation="portrait"
            autoPlayWhenVisible
            autoPlayImmediate
            autoUnmuteOnInteraction
            showTitleOnPreview={false}
          />
        </div>
      </div>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl space-y-14">
          <article className="luxury-card rounded-[2.4rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75 sm:p-11">
            <div className="flex items-center gap-3 text-rouh-wine">
              <span className="text-2xl" aria-hidden>
                ✦
              </span>
              <h2 className="text-pretty font-display text-[1.68rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:text-balance sm:text-4xl sm:leading-tight sm:tracking-[-0.02em]">
                مقدمة الكورس
              </h2>
            </div>
            <div className="mt-8 space-y-7 text-pretty text-lg leading-[1.85] text-rouh-ink">
              <p>
                الساوند هيلينغ مش بس صوت… هو مساحة تهدئة، حضور، وتنظيم للجسد والجهاز العصبي 🌿
              </p>
              <p>
                بهالأكاديمية رح تتعلمي كيف تستخدمي الطاسات التبتية بشكل عملي ومهني، لتدعمي نفسك
                ومتعالجينك عبر الترددات والصوت بوعي وثقة.
              </p>
              <p>
                نؤمن إنو الصوت مش بس يُسمَع… هو شيء بينلمَس بالجسد والمشاعر، وبيساعد الإنسان يرجع
                لحاله الطبيعية 🌿
              </p>
              <p>
                وهدفنا نخرّج معالِجات يشتغلوا بحضور، إحساس، وفهم أعمق لتأثير الصوت على الإنسان.
              </p>
            </div>
          </article>

          <SectionDivider />

          <article className="luxury-card rounded-[2.4rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75 sm:p-11">
            <h2 className="text-pretty font-display text-[1.68rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:text-balance sm:text-4xl sm:leading-tight sm:tracking-[-0.02em]">
              ماذا ستتعلمين في الكورس؟
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="rounded-[1.75rem] bg-white/45 p-7 ring-1 ring-rouh-ink/8 backdrop-blur-sm">
                <h3 className="text-pretty font-display text-lg font-bold leading-snug text-rouh-wine sm:text-xl sm:leading-normal">الجانب النظري</h3>
                <BulletList
                  items={[
                    "ما هو العلاج بالصوت؟",
                    "كيف يؤثر الصوت على الجسد والجهاز العصبي؟",
                    "كيف تؤثر الترددات على مناطق مختلفة في الجسم؟",
                    "فهم الهارمونيكس والترددات",
                    "فهم العلاقة بين الصوت، المشاعر، والجهاز العصبي",
                    "فهم الانتقال من التوتر إلى الاسترخاء",
                  ]}
                />
              </div>

              <div className="rounded-[1.75rem] bg-white/45 p-7 ring-1 ring-rouh-ink/8 backdrop-blur-sm">
                <h3 className="text-pretty font-display text-lg font-bold leading-snug text-rouh-wine sm:text-xl sm:leading-normal">الجانب العملي</h3>
                <BulletList
                  items={[
                    "كيفية استخدام الطاسات التبتية بشكل صحيح",
                    "تقنيات إصدار الأصوات المختلفة",
                    "6 تقنيات مختلفة للعلاج الفردي والجماعي",
                    "كيفية بناء جلسة علاج متكاملة",
                    "كيفية فتح وإغلاق الجلسة",
                    "كيفية ملاءمة الجلسة حسب الشخص واحتياجه",
                    "العمل مع الحدس والحضور أثناء الجلسة",
                    "قراءة استجابات الجسد خلال العلاج",
                    "استخدام أدوات صوتية إضافية",
                  ]}
                />
              </div>
            </div>
          </article>

          <SectionDivider />

          <article className="luxury-card rounded-[2.4rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75 sm:p-11">
            <h2 className="text-pretty font-display text-[1.68rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:text-balance sm:text-4xl sm:leading-tight sm:tracking-[-0.02em]">
              ماذا يميز هذا الكورس؟
            </h2>
            <BulletList
              items={[
                "تعلم عملي حقيقي وليس فقط معلومات نظرية",
                "استخدام الطاسات والترددات بشكل واعي ومهني",
                "تطبيق تقنيات بجلسات فردية وجماعية",
                "كيفية تهيئة مساحة علاجية مريحة وآمنة",
                "فهم اختلاف الترددات وتأثيرها",
                "كيفية ملاءمة الجلسة حسب الشخص واحتياجه",
                "تطوير الحضور، الإصغاء، والإحساس أثناء العلاج",
                "تجربة شخصية عميقة بالعلاج بالصوت خلال الكورس",
                "مرافقة ودعم خلال التعلم وبعد انتهاء الكورس",
                "مساحة تساعدكِ تطوري ثقتك وحضورك كمعالِجة 🤍",
              ]}
            />
            <p className="text-pretty mt-10 rounded-[1.5rem] bg-rouh-sand/55 px-6 py-5 text-lg leading-[1.85] text-rouh-ink ring-1 ring-rouh-wine/10">
              يشمل الكورس ملف تدريبي، شهادة مشاركة، ودعم ومتابعة بعد انتهاء الكورس.
            </p>
          </article>

          <SectionDivider />

          <article className="luxury-card rounded-[2.4rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75 sm:p-11">
            <h2 className="text-pretty font-display text-[1.68rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:text-balance sm:text-4xl sm:leading-tight sm:tracking-[-0.02em]">
              المهنيّة بالكورس
            </h2>
            <p className="text-pretty mt-8 text-lg leading-[1.85] text-rouh-ink">
              من المهم إلنا إنكِ تتعلمي الساوند هيلينغ بطريقة واعية، مهنية، وعميقة… مش بس كيف تعزفي
              الطاسات، بل كيف تستخدميها بمسؤولية وحضور حقيقي 🤍
            </p>
            <p className="mt-6 font-bold text-rouh-wine">لذلك بالكورس رح نتعلّم:</p>
            <BulletList
              items={[
                "كيف نستخدم الأدوات بشكل صحيح وآمن",
                "كيف نبني جلسة مريحة ومتوازنة",
                "متى يناسب العلاج بالصوت ومتى لا يناسب",
                "أساسيات التعامل مع المتعالجين بوعي ومهنية",
                "أهمية الحضور، الإصغاء، وإدارة المساحة العلاجية",
              ]}
            />
          </article>

          <SectionDivider />

          <article className="luxury-card relative overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-white/82 via-rouh-mist/45 to-rouh-sand/55 p-8 shadow-petal ring-1 ring-white/75 sm:p-11">
            <div className="absolute -left-8 top-1/2 size-40 -translate-y-1/2 rounded-full bg-rouh-blue/10 blur-2xl" />
            <h2 className="relative text-pretty font-display text-[1.68rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:text-balance sm:text-4xl sm:leading-tight sm:tracking-[-0.02em]">
              الجانب الشخصي بالكورس
            </h2>
            <div className="relative mt-8 space-y-7 text-pretty text-lg leading-[1.85] text-rouh-ink">
              <p>
                الكورس ليس فقط تعلّم تقنيات… بل أيضًا تجربة شخصية تساعدكِ تتواصلي أكثر مع إحساسك، تطوري
                حضورك وثقتك، وتعيشي تأثير الصوت والترددات على حالتك الداخلية بشكل حقيقي 🤍
              </p>
              <p>
                رح تعيشي مساحة فيها هدوء، إصغاء، وحضور، ونؤمن إنو جزء كبير من تأثير العلاج… مش بس
                بالأدوات أو الترددات، بل بحضورك والطاقة اللي بتخلقيها داخل الجلسة.
              </p>
            </div>
          </article>

          <SectionDivider />

          <article className="luxury-card rounded-[2.4rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75 sm:p-11">
            <h2 className="text-pretty font-display text-[1.68rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:text-balance sm:text-4xl sm:leading-tight sm:tracking-[-0.02em]">
              لمن يناسب الكورس؟
            </h2>
            <p className="mt-6 text-lg font-bold text-rouh-wine">الكورس مناسب لـ:</p>
            <BulletList
              items={[
                "المعالجين والمعالجات",
                "مدربي اليوغا والبيلاتس",
                "المعالجين الجسديين والسوماتيك",
                "المدربين والمرافقين",
                "المهتمين بعالم الترددات والوعي",
                "أي شخص يشعر بانجذاب لعالم العلاج بالصوت",
              ]}
            />
          </article>

          <SectionDivider />

          <article className="luxury-card rounded-[2.4rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75 sm:p-11">
            <h2 className="text-pretty font-display text-[1.68rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:text-balance sm:text-4xl sm:leading-tight sm:tracking-[-0.02em]">
              الأسئلة الشائعة
            </h2>

            <div className="mt-10 space-y-8">
              <div className="rounded-[1.75rem] bg-white/50 p-7 ring-1 ring-rouh-ink/8">
                <h3 className="text-pretty font-display text-lg font-bold leading-snug text-rouh-wine sm:text-xl sm:leading-normal">
                  هل يجب أن أكون موسيقية؟
                </h3>
                <p className="text-pretty mt-4 text-lg leading-[1.85] text-rouh-ink">
                  أبدًا 🤍 ما بتحتاجي أي خبرة موسيقية أو معرفة سابقة.
                </p>
                <p className="text-pretty mt-4 text-lg leading-[1.85] text-rouh-ink">
                  الكورس مصمم بطريقة بسيطة وعملية، لكن بنفس الوقت بمهنية ووضوح، حتى تتعلمي استخدام
                  الطاسات والترددات بشكل صحيح، واعي، وآمن.
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-white/50 p-7 ring-1 ring-rouh-ink/8">
                <h3 className="text-pretty font-display text-lg font-bold leading-snug text-rouh-wine sm:text-xl sm:leading-normal">
                  هل يمكنني العمل بعد الكورس؟
                </h3>
                <p className="text-pretty mt-4 text-lg leading-[1.85] text-rouh-ink">
                  نعم. الكورس يمنحكِ أساسًا عمليًا ونظريًا يساعدكِ على البدء بتقديم جلسات فردية
                  وجماعية.
                </p>
              </div>
            </div>
          </article>

          <SectionDivider />

          <article className="luxury-card rounded-[2.4rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75 sm:p-11">
            <h2 className="text-pretty font-display text-[1.68rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:text-balance sm:text-4xl sm:leading-tight sm:tracking-[-0.02em]">
              نتائج وتجارب
            </h2>
            <p className="mt-6 text-lg font-bold text-rouh-wine">الكثير من المشاركات بدأن:</p>
            <BulletList
              items={[
                "بدمج الطاسات بجلساتهن العلاجية",
                "بتمرير جلسات جماعية",
                "باستخدام الصوت ضمن عملهن المهني",
                "بالشعور بثقة وحضور أكبر",
                "بفهم أعمق للجسد والمشاعر",
              ]}
            />
          </article>

          <SectionDivider />
        </div>

        <div className="mx-auto mt-14 max-w-4xl lg:mt-16">
          <article className="luxury-card rounded-[2.4rem] bg-gradient-to-br from-white/82 via-rouh-mist/34 to-rouh-sand/45 p-8 shadow-soft ring-1 ring-white/80 sm:p-11">
            <div className="mx-auto max-w-[min(100%,21rem)] text-center sm:max-w-3xl">
              <p className="text-xs font-black tracking-[0.28em] text-rouh-wine sm:text-sm">
                المجموعات القادمة
              </p>
              <h2 className="mt-4 text-pretty font-display text-[1.68rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:text-balance sm:text-4xl sm:leading-tight sm:tracking-[-0.02em]">
                المواعيد المتاحة حاليًا
              </h2>
              <p className="text-pretty mx-auto mt-5 max-w-2xl text-base leading-8 text-rouh-ink sm:text-lg sm:leading-9">
                اختاري الموعد والموقع الأنسب لكِ، ثم تواصلي معنا عبر واتساب لتأكيد الحجز.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="rounded-[1.85rem] bg-white/78 p-6 shadow-[0_18px_52px_rgba(50,27,34,0.08)] ring-1 ring-white/80 backdrop-blur sm:p-7">
                <h3 className="text-pretty font-display text-xl font-bold leading-snug text-rouh-wine sm:text-2xl sm:leading-normal">زيمر 📍</h3>
                <div className="mt-5 space-y-2.5 text-base font-bold text-rouh-ink sm:text-lg">
                  <p>19/20 يونيو</p>
                  <p>10:00–17:00 🕰️</p>
                  <p>14 ساعة تعليمية</p>
                  <FrontalDateCardInvestment />
                </div>
                <ButtonLink
                  href={frontalCourseWhatsApp.zimmer}
                  className="mt-7 w-full"
                  {...whatsappLinkProps}
                >
                  حجز زيمر — واتساب
                </ButtonLink>
              </article>

              <article className="rounded-[1.85rem] bg-white/78 p-6 shadow-[0_18px_52px_rgba(50,27,34,0.08)] ring-1 ring-white/80 backdrop-blur sm:p-7">
                <h3 className="text-pretty font-display text-xl font-bold leading-snug text-rouh-wine sm:text-2xl sm:leading-normal">مجدل شمس 📍</h3>
                <div className="mt-5 space-y-2.5 text-base font-bold text-rouh-ink sm:text-lg">
                  <p>26/27 يونيو</p>
                  <p>10:00–17:00 🕰️</p>
                  <p>14 ساعة تعليمية</p>
                  <FrontalDateCardInvestment />
                </div>
                <ButtonLink
                  href={frontalCourseWhatsApp.majdalShams}
                  className="mt-7 w-full"
                  {...whatsappLinkProps}
                >
                  حجز مجدل شمس — واتساب
                </ButtonLink>
              </article>
            </div>
          </article>
        </div>

        <FrontalCourseGallerySection className="mt-14 lg:mt-16" />

        <FrontalCourseTestimonialsSection className="mt-14 lg:mt-16" />

        <div className="mx-auto mt-14 max-w-4xl space-y-14 lg:mt-16">
          <SectionDivider />

          <article className="luxury-card rounded-[2.4rem] bg-ink-glow p-8 text-center text-white shadow-glow ring-1 ring-white/20 sm:p-12">
            <h2 className="text-pretty font-display text-[1.68rem] font-bold leading-[1.36] tracking-normal sm:text-balance sm:text-3xl sm:leading-tight sm:tracking-[-0.02em] lg:text-4xl">
              الخاتمة
            </h2>
            <p className="text-pretty mx-auto mt-7 max-w-2xl text-lg leading-[1.85] text-white/88 sm:mt-8 sm:max-w-[36rem]">
              إذا كنتِ تشعرين بنداء تجاه الصوت والترددات… ربما هذه بداية طريق جديد لكِ
            </p>
            <div className="mt-9 flex flex-col items-center gap-3.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <ButtonLink href={frontalCourseWhatsApp.general} {...whatsappLinkProps}>
              تواصلي للحجز عبر واتساب
            </ButtonLink>
              <ButtonLink href="/" variant="light">
                العودة للرئيسية
              </ButtonLink>
              <ButtonLink
                href="/#courses"
                variant="ghost"
                className="!text-white !shadow-[0_14px_34px_rgba(0,0,0,0.18)] !ring-white/45 !bg-white/14 hover:!bg-white/22 hover:!text-white hover:!ring-white/55"
              >
                قسم الكورسات
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
