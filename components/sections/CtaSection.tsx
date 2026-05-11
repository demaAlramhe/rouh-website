import { ButtonLink } from "@/components/ui/ButtonLink";

export function CtaSection() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-[radial-gradient(circle_at_22%_14%,rgba(248,241,223,0.18),transparent_26%),linear-gradient(135deg,#5a9db0,#7f2a46)] p-8 text-center text-white shadow-glow ring-1 ring-white/20 sm:p-12 lg:p-16">
        <div className="absolute inset-x-10 top-8 h-px bg-gradient-to-l from-transparent via-white/22 to-transparent" />
        <p className="text-sm font-bold tracking-[0.28em] text-white/68">دعوة للبدء</p>
        <h2 className="text-balance mx-auto mt-4 max-w-3xl font-display text-[2.45rem] font-bold leading-[1.18] sm:text-5xl">
          خذي لحظة هادئة، وافتحي باب العودة إلى نفسك
        </h2>
        <p className="text-pretty mx-auto mt-5 max-w-2xl text-lg leading-9 text-white/75">
          رحلة استرخاء مجانية والكتيّب هما نقطة بداية لطيفة قبل اختيار الجلسة أو المسار التدريبي
          الأنسب لكِ.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/free-workshop" variant="light">
            ابدئي رحلة استرخاء مجانية
          </ButtonLink>
          <ButtonLink href="/#contact" variant="ghost" className="bg-white/10 text-white ring-white/20 hover:bg-white/18">
            تواصلي مع أسيل
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
