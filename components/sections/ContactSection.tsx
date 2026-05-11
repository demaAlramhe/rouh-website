import { siteMeta } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionShell } from "@/components/ui/SectionShell";

const WHATSAPP_URL = "https://wa.me/972509071900";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="تواصل"
      title="لحجز جلسة أو الاستفسار عن الكورسات"
      description="اختاري الطريقة الأقرب لكِ، وسنترك المساحة الأولى للهدوء والوضوح."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="luxury-card rounded-[2.2rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75">
          <p className="text-sm font-bold text-rouh-blue">الهاتف</p>
          <a
            href={`tel:${siteMeta.phone}`}
            className="mt-3 block font-display text-4xl font-bold tracking-[-0.02em] text-rouh-ink"
          >
            {siteMeta.phone}
          </a>
          <p className="mt-4 leading-8 text-rouh-ink/68">
            للحجز، مواعيد الجلسات، أو أسئلة حول الورشات والكورسات.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`tel:${siteMeta.phone}`} className="w-full sm:w-auto">
              اتصال مباشر
            </ButtonLink>
            <ButtonLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              تواصل عبر واتساب
            </ButtonLink>
          </div>
        </div>

        <div className="luxury-card rounded-[2.2rem] bg-premium-card p-8 shadow-soft ring-1 ring-white/75">
          <p className="text-sm font-bold text-rouh-blue">Instagram</p>
          <p className="mt-3 break-words font-display text-4xl font-bold tracking-[-0.02em] text-rouh-ink">
            @_aseelomar_
          </p>
          <p className="mt-4 leading-8 text-rouh-ink/68">
            تابعي الرحلات، الفيديوهات، الورشات القادمة، ولمحات من مساحات Rouh.
          </p>
          <ButtonLink href={siteMeta.instagram} className="mt-7">
            زيارة إنستغرام
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
