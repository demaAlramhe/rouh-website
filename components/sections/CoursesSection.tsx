import { offerings } from "@/data/siteContent";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionShell } from "@/components/ui/SectionShell";
import { homeSectionHeaderSpacing, homeSectionSpacing } from "@/components/sections/homeSectionSpacing";

export function CoursesSection() {
  return (
    <SectionShell
      id="courses"
      eyebrow="الكورسات"
      title="مسارات ناعمة للتعلّم، التجربة، والتوسّع"
      className={homeSectionSpacing}
      headerClassName={homeSectionHeaderSpacing}
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {offerings.map((offering) => {
          const price = (offering as { price?: string }).price;
          return (
          <article
            key={offering.title}
            className="luxury-card group flex min-h-[380px] flex-col items-center rounded-[2.15rem] bg-premium-card p-7 text-center text-rouh-ink shadow-soft ring-1 ring-white/75 transition duration-500 hover:-translate-y-2 hover:bg-white/72"
          >
            <div className="mb-6 flex flex-col items-center gap-3">
              <Badge>{offering.label}</Badge>
              <span className="text-2xl text-rouh-wine/34 transition duration-500 group-hover:rotate-45" aria-hidden>
                ✦
              </span>
            </div>
            <h3 className="text-balance w-full font-display text-[1.95rem] font-bold leading-[1.34] tracking-normal sm:text-[2.15rem] sm:leading-tight sm:tracking-[-0.01em]">
              {offering.title}
            </h3>
            <p className="text-pretty mx-auto mt-5 max-w-[34ch] grow leading-8 text-rouh-ink/68">
              {offering.description}
            </p>
            {price && (
              <div className="mt-6 w-full max-w-xs rounded-2xl bg-rouh-ink/[0.06] px-4 py-3 text-sm font-bold text-rouh-ink/78 ring-1 ring-rouh-ink/8">
                {price}
              </div>
            )}
            <div className="mt-auto flex w-full max-w-xs flex-col items-center gap-3 pt-7">
              {offering.cta && offering.href && (
                <ButtonLink href={offering.href} className="w-full">
                  {offering.cta}
                </ButtonLink>
              )}
              {offering.secondaryCta && offering.secondaryHref && (
                <ButtonLink href={offering.secondaryHref} variant="primary" className="w-full">
                  {offering.secondaryCta}
                </ButtonLink>
              )}
            </div>
          </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
