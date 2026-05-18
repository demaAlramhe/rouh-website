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
      <div className="grid gap-5 md:grid-cols-2">
        <div className="luxury-card rounded-[2.2rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75">
          <p className="text-sm font-bold text-rouh-blue">واتساب</p>
          <a
            href={siteMeta.whatsappUrl}
            {...whatsappLinkProps}
            className="mt-3 block text-pretty font-display text-3xl font-bold leading-snug tracking-normal text-rouh-ink transition hover:text-rouh-wine sm:text-4xl sm:leading-none sm:tracking-[-0.02em]"
          >
            {siteMeta.phone}
          </a>
          <p className="mt-4 leading-8 text-rouh-ink/68">
            للحجز، مواعيد الجلسات، أو أسئلة حول الكورسات — راسليني على واتساب وسأردّ بأقرب وقت.
          </p>
          <ButtonLink
            href={siteMeta.whatsappUrl}
            className="mt-7 w-full sm:w-auto"
            {...whatsappLinkProps}
          >
            تواصل عبر واتساب
          </ButtonLink>
        </div>

        <div className="luxury-card rounded-[2.2rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75">
          <p className="text-sm font-bold text-rouh-blue">Instagram</p>
          <p className="mt-3 break-words text-pretty font-display text-3xl font-bold leading-snug tracking-normal text-rouh-ink sm:text-4xl sm:leading-none sm:tracking-[-0.02em]">
            @_aseelomar_
          </p>
          <p className="mt-4 leading-8 text-rouh-ink/68">
            تابعي الرحلات، الفيديوهات، الورشات القادمة، ولمحات من مساحات Rouh.
          </p>
          <ButtonLink href={siteMeta.instagram} className="mt-7" target="_blank" rel="noopener noreferrer">
            زيارة إنستغرام
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
