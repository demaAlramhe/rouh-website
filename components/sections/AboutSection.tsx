import Image from "next/image";
import { aboutParagraphs, assets, journeyItems } from "@/data/siteContent";
import { SectionShell } from "@/components/ui/SectionShell";
import { homeSectionHeaderSpacing, homeSectionSpacing } from "@/components/sections/homeSectionSpacing";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="من أنا"
      description="قصة أسيل مع الرحلات، الطبيعة، الموسيقى، والترددات — ومسار مهني يجمع بين الوعي، الجسد، الإرشاد، والجمال."
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

      <div className="mt-12 lg:mt-16">
        <div className="h-px bg-gradient-to-l from-transparent via-rouh-wine/18 to-transparent" aria-hidden />
        <p className="mt-10 text-center font-display text-xl font-bold text-rouh-wine sm:text-2xl">
          رحلتي المهنية
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {journeyItems.map((item, index) => (
            <article
              key={item}
              className="luxury-card group rounded-[1.85rem] bg-premium-card p-6 shadow-soft ring-1 ring-white/75 transition duration-500 hover:-translate-y-1.5 hover:shadow-petal"
            >
              <span className="mb-5 grid size-12 place-items-center rounded-full bg-rouh-blue/11 font-sans text-sm font-bold text-rouh-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ring-1 ring-rouh-blue/16 antialiased sm:font-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold leading-8 text-rouh-ink/88">{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
