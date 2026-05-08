import Image from "next/image";
import { aboutParagraphs, assets } from "@/data/siteContent";
import { SectionShell } from "@/components/ui/SectionShell";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="من أنا"
      title="مساحة تنبع من تجربة حقيقية وشغف عميق بالصوت"
      description="قصة أسيل مع الرحلات، الطبيعة، الموسيقى، والترددات تحوّلت إلى طريقة مهنية وناعمة لمرافقة النساء نحو الهدوء."
      className="relative"
    >
      <div className="grid items-start gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="sticky top-32 hidden lg:block">
          <div className="luxury-card relative overflow-hidden rounded-[2.4rem] bg-premium-card p-3 shadow-petal ring-1 ring-white/75">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem]">
              <Image
                src={assets.hero}
                alt="رحلة هادئة مع Rouh"
                fill
                className="object-cover"
                sizes="420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rouh-wine/34 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="luxury-card rounded-[2.4rem] bg-premium-card p-6 shadow-soft ring-1 ring-white/75 backdrop-blur sm:p-9 lg:p-12">
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
