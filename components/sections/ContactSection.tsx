import { siteMeta } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionShell } from "@/components/ui/SectionShell";
import { homeSectionHeaderSpacing, homeSectionSpacing } from "@/components/sections/homeSectionSpacing";

const whatsappLinkProps = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="تواصل"
      title="لحجز جلسة أو الاستفسار عن الكورسات"
      description="اختاري الطريقة الأقرب لكِ، وسنترك المساحة الأولى للهدوء والوضوح."
      className={homeSectionSpacing}
      headerClassName={homeSectionHeaderSpacing}
    >
      <div className="grid gap-5 md:grid-cols-2 md:items-stretch">
        <div className="luxury-card flex min-h-[22rem] w-full flex-col items-center self-stretch rounded-[2.2rem] bg-premium-card p-8 text-center shadow-soft ring-1 ring-white/75 sm:min-h-[24rem]">
          <div className="flex w-full flex-1 flex-col items-center">
            <div className="flex min-h-[7.5rem] w-full flex-col items-center justify-center sm:min-h-[8.25rem]">
              <p className="font-display text-xl font-bold leading-snug text-rouh-ink sm:text-2xl sm:leading-normal">
                هنا تبدأ أول خطوة نحو
                <br />
                التعلّم، الحضور، والتوسّع ✨
              </p>
            </div>
            <p className="text-pretty mx-auto mt-5 max-w-[38ch] leading-8 text-rouh-ink/68">
              للاستفسار عن الكورسات، الجلسات، والتفاصيل الكاملة… يمكنك التواصل معنا عبر واتساب،
              وسنُرافقك بكل حُب 🦋
            </p>
          </div>
          <div className="mt-auto w-full max-w-xs shrink-0 pt-8">
            <ButtonLink href={siteMeta.whatsappUrl} className="w-full" {...whatsappLinkProps}>
              تواصل عبر واتساب
            </ButtonLink>
          </div>
        </div>

        <div className="luxury-card flex min-h-[22rem] w-full flex-col items-center self-stretch rounded-[2.2rem] bg-premium-card p-8 text-center shadow-soft ring-1 ring-white/75 sm:min-h-[24rem]">
          <div className="flex w-full flex-1 flex-col items-center">
            <div className="flex min-h-[7.5rem] w-full flex-col items-center justify-center sm:min-h-[8.25rem]">
              <p className="text-sm font-bold text-rouh-blue">Instagram</p>
              <p className="mt-3 break-words text-pretty font-display text-3xl font-bold leading-snug tracking-normal text-rouh-ink sm:text-4xl sm:leading-none sm:tracking-[-0.02em]">
                {siteMeta.instagramHandle}
              </p>
            </div>
            <p className="text-pretty mx-auto mt-5 max-w-[38ch] leading-8 text-rouh-ink/68">
              تابعي الرحلات، الفيديوهات، الورشات القادمة، ولمحات من مساحات Rouh.
            </p>
          </div>
          <div className="mt-auto w-full max-w-xs shrink-0 pt-8">
            <ButtonLink
              href={siteMeta.instagram}
              className="w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              زيارة إنستغرام
            </ButtonLink>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
