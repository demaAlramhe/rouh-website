import type { Metadata } from "next";
import { FrontalCourseGallerySection } from "@/components/sections/FrontalCourseGallerySection";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { VideoPreviewLightbox } from "@/components/ui/VideoPreviewLightbox";
import { siteMeta } from "@/data/siteContent";

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
    <ul className="mt-6 space-y-3.5 text-rouh-ink/78">
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

export default function FrontalCoursePage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-20 pt-44 sm:px-8 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-rouh-radial" />
        <div className="absolute inset-x-8 top-32 -z-10 h-px bg-gradient-to-l from-transparent via-rouh-wine/14 to-transparent" />
        <div className="absolute -left-24 top-1/3 -z-10 size-72 rounded-full bg-rouh-blue/12 blur-3xl" />
        <div className="absolute -right-16 bottom-24 -z-10 size-64 rounded-full bg-rouh-rose/16 blur-3xl" />

        <div className="mx-auto max-w-4xl text-center sm:max-w-[42rem]">
          <p className="animate-reveal font-display text-xl font-bold text-rouh-ink sm:text-2xl">
            رحلة استرخاء مجانية برفقة الترددات
          </p>

          <div className="mt-10">
            <Badge>كورس حضوري — الطاسات التبتية</Badge>
          </div>

          <h1 className="text-balance mt-7 font-display text-[2.65rem] font-bold leading-[1.12] tracking-[-0.02em] text-rouh-ink sm:text-6xl">
            كورس فن العلاج بالطاسات التبتية
          </h1>

          <p className="text-pretty mx-auto mt-8 max-w-2xl text-lg leading-[1.85] text-rouh-ink/74 sm:max-w-[36rem]">
            تعلمي كيف تستخدمي الصوت والترددات لدعم الاسترخاء، التوازن، والحضور العلاجي بوعي ومهنية 🤍
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={siteMeta.paymentUrl}>الدفع والحجز</ButtonLink>
            <ButtonLink href="/" variant="secondary">
              العودة للرئيسية
            </ButtonLink>
            <ButtonLink href="/#courses" variant="ghost">
              قسم الورشات والكورسات
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="px-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <VideoPreviewLightbox
            videoId={FRONTAL_COURSE_VIDEO_ID}
            title="لمحة من رحلة الكورس — العلاج بالطاسات التبتية"
            caption="يُشغَّل تلقائيًا بصمت عند التمرير — اضغطي «تشغيل الصوت» أعلى الفيديو أو من مشغّل YouTube لسماع الصوت"
            autoPlayWhenVisible
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
              <h2 className="font-display text-3xl font-bold text-rouh-ink sm:text-4xl">
                مقدمة الكورس
              </h2>
            </div>
            <div className="mt-8 space-y-7 text-pretty text-lg leading-[1.85] text-rouh-ink/72">
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
            <h2 className="font-display text-3xl font-bold text-rouh-ink sm:text-4xl">
              ماذا ستتعلمين في الكورس؟
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="rounded-[1.75rem] bg-white/45 p-7 ring-1 ring-rouh-ink/8 backdrop-blur-sm">
                <h3 className="font-display text-xl font-bold text-rouh-wine">الجانب النظري</h3>
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
                <h3 className="font-display text-xl font-bold text-rouh-wine">الجانب العملي</h3>
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
            <h2 className="font-display text-3xl font-bold text-rouh-ink sm:text-4xl">
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
            <p className="text-pretty mt-10 rounded-[1.5rem] bg-rouh-sand/55 px-6 py-5 text-lg leading-[1.85] text-rouh-ink/76 ring-1 ring-rouh-wine/10">
              يشمل الكورس ملف تدريبي، شهادة مشاركة، ودعم ومتابعة بعد انتهاء الكورس.
            </p>
          </article>

          <SectionDivider />

          <article className="luxury-card rounded-[2.4rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75 sm:p-11">
            <h2 className="font-display text-3xl font-bold text-rouh-ink sm:text-4xl">
              المهنيّة بالكورس
            </h2>
            <p className="text-pretty mt-8 text-lg leading-[1.85] text-rouh-ink/72">
              من المهم إلنا إنكِ تتعلمي الساوند هيلينغ بطريقة واعية، مهنية، وعميقة… مش بس كيف تعزفي
              الطاسات، بل كيف تستخدميها بمسؤولية وحضور حقيقي 🤍
            </p>
            <p className="mt-6 font-bold text-rouh-ink">لذلك بالكورس رح نتعلّم:</p>
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
            <h2 className="relative font-display text-3xl font-bold text-rouh-ink sm:text-4xl">
              الجانب الشخصي بالكورس
            </h2>
            <div className="relative mt-8 space-y-7 text-pretty text-lg leading-[1.85] text-rouh-ink/72">
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
            <h2 className="font-display text-3xl font-bold text-rouh-ink sm:text-4xl">
              لمن يناسب الكورس؟
            </h2>
            <p className="mt-6 text-lg font-bold text-rouh-ink/85">الكورس مناسب لـ:</p>
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
            <h2 className="font-display text-3xl font-bold text-rouh-ink sm:text-4xl">
              الأسئلة الشائعة
            </h2>

            <div className="mt-10 space-y-8">
              <div className="rounded-[1.75rem] bg-white/50 p-7 ring-1 ring-rouh-ink/8">
                <h3 className="font-display text-xl font-bold text-rouh-wine">
                  هل يجب أن أكون موسيقية؟
                </h3>
                <p className="text-pretty mt-4 text-lg leading-[1.85] text-rouh-ink/72">
                  أبدًا 🤍 ما بتحتاجي أي خبرة موسيقية أو معرفة سابقة.
                </p>
                <p className="text-pretty mt-4 text-lg leading-[1.85] text-rouh-ink/72">
                  الكورس مصمم بطريقة بسيطة وعملية، لكن بنفس الوقت بمهنية ووضوح، حتى تتعلمي استخدام
                  الطاسات والترددات بشكل صحيح، واعي، وآمن.
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-white/50 p-7 ring-1 ring-rouh-ink/8">
                <h3 className="font-display text-xl font-bold text-rouh-wine">
                  هل يمكنني العمل بعد الكورس؟
                </h3>
                <p className="text-pretty mt-4 text-lg leading-[1.85] text-rouh-ink/72">
                  نعم. الكورس يمنحكِ أساسًا عمليًا ونظريًا يساعدكِ على البدء بتقديم جلسات فردية
                  وجماعية.
                </p>
              </div>
            </div>
          </article>

          <SectionDivider />

          <article className="luxury-card rounded-[2.4rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75 sm:p-11">
            <h2 className="font-display text-3xl font-bold text-rouh-ink sm:text-4xl">
              نتائج وتجارب
            </h2>
            <p className="mt-6 text-lg font-bold text-rouh-ink/85">الكثير من المشاركات بدأن:</p>
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

        <FrontalCourseGallerySection className="mt-14 lg:mt-16" />

        <div className="mx-auto mt-14 max-w-4xl space-y-14 lg:mt-16">
          <SectionDivider />

          <article className="luxury-card rounded-[2.4rem] bg-ink-glow p-8 text-center text-white shadow-glow ring-1 ring-white/20 sm:p-12">
            <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl">
              الخاتمة
            </h2>
            <p className="text-pretty mx-auto mt-7 max-w-2xl text-lg leading-[1.85] text-white/88 sm:mt-8 sm:max-w-[36rem]">
              إذا كنتِ تشعرين بنداء تجاه الصوت والترددات… ربما هذه بداية طريق جديد لكِ
            </p>
            <div className="mt-9 flex flex-col items-center gap-3.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <ButtonLink href={siteMeta.paymentUrl}>الدفع والحجز</ButtonLink>
              <ButtonLink href="/" variant="light">
                العودة للرئيسية
              </ButtonLink>
              <ButtonLink
                href="/#courses"
                variant="ghost"
                className="!text-white !shadow-[0_14px_34px_rgba(0,0,0,0.18)] !ring-white/45 !bg-white/14 hover:!bg-white/22 hover:!text-white hover:!ring-white/55"
              >
                قسم الورشات والكورسات
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
