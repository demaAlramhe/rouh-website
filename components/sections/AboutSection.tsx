import Image from "next/image";
import { aboutParagraphs, assets } from "@/data/siteContent";
import { SectionShell } from "@/components/ui/SectionShell";
import { homeSectionHeaderSpacing, homeSectionSpacing } from "@/components/sections/homeSectionSpacing";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="من أنا"
      title="مساحة تنبع من تجربة حقيقية وشغف عميق بالصوت"
      description="قصة أسيل مع الرحلات، الطبيعة، الموسيقى، والترددات تحوّلت إلى طريقة مهنية وناعمة لمرافقة النساء نحو الهدوء."
      className={homeSectionSpacing}
      headerClassName={homeSectionHeaderSpacing}
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
        <div className="luxury-card flex h-full min-h-[min(88vw,26rem)] flex-col overflow-hidden rounded-[2.4rem] bg-premium-card p-3 shadow-petal ring-1 ring-white/75 sm:min-h-[28rem] lg:sticky lg:top-32">
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.7rem]">
            <Image
              src={assets.personalImg}
              alt="أسيل عمر — Rouh"
              fill
              unoptimized
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rouh-wine/34 via-transparent to-transparent" />
          </div>
        </div>

        <div className="luxury-card flex h-full flex-col rounded-[2.4rem] bg-premium-card p-6 shadow-soft ring-1 ring-white/75 backdrop-blur sm:p-9 lg:p-12">
          <div className="space-y-6 text-[1.05rem] leading-10 text-rouh-ink/75 sm:text-lg">
            {aboutParagraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? "font-semibold text-rouh-ink/86" : "text-pretty"}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
