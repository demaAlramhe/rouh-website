import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteMeta } from "@/data/siteContent";

export function CtaSection() {
  return (
    <section className="px-4 py-10 sm:px-8 sm:py-12 lg:py-14">
      <div className="relative isolate mx-auto max-w-7xl rounded-[2.25rem] bg-[radial-gradient(circle_at_22%_14%,rgba(248,241,223,0.18),transparent_26%),linear-gradient(135deg,#5a9db0,#7f2a46)] px-5 py-9 text-center text-white shadow-glow ring-1 ring-white/20 sm:overflow-hidden sm:rounded-[3rem] sm:p-12 lg:p-16">
        <div className="pointer-events-none absolute inset-x-6 top-7 h-px bg-gradient-to-l from-transparent via-white/22 to-transparent sm:inset-x-10 sm:top-8" />
        <div className="relative z-10 mx-auto w-full min-w-0 max-w-3xl">
          <p className="text-xs font-bold tracking-normal text-white/68 sm:text-sm sm:tracking-[0.28em]">
            دعوة للبدء
          </p>
          <h2 className="text-balance mx-auto mt-4 w-full font-display text-[clamp(1.55rem,5.5vw,2.12rem)] font-bold leading-[1.42] tracking-normal sm:text-5xl sm:leading-[1.18] sm:tracking-[-0.02em]">
            خذي لحظة هادئة، وافتحي باب العودة إلى نفسك
          </h2>
          <p className="cta-section-prose mx-auto mt-5 w-full max-w-[34rem] text-base leading-8 text-white/75 sm:text-lg sm:leading-9">
            رحلة استرخاء مجانية والكتيّب هما نقطة بداية لطيفة قبل اختيار الجلسة أو المسار
            التدريبي الأنسب لكِ.
          </p>
        </div>
        <div className="relative z-10 mt-8 flex w-full min-w-0 flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="/free-workshop" variant="light">
            ابدئي رحلة استرخاء مجانية
          </ButtonLink>
          <ButtonLink
            href={siteMeta.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            className="bg-white/10 text-white ring-white/20 hover:bg-white/18"
          >
            تواصلي مع أسيل
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
