import { offerings } from "@/data/siteContent";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionShell } from "@/components/ui/SectionShell";

export function CoursesSection() {
  return (
    <SectionShell
      id="courses"
      eyebrow="الورشات والكورسات"
      title="مسارات ناعمة للتعلّم، التجربة، والتوسّع"
      description="صممت هذه المساحات لتناسب من تبدأ رحلتها، ومن ترغب بالتعمّق المهني في العلاج بالصوت."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {offerings.map((offering) => (
          <article
            key={offering.title}
            className="luxury-card group flex min-h-[380px] flex-col rounded-[2.15rem] bg-premium-card p-7 text-rouh-ink shadow-soft ring-1 ring-white/75 transition duration-500 hover:-translate-y-2 hover:bg-white/72"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <Badge>{offering.label}</Badge>
              <span className="text-2xl text-rouh-wine/34 transition duration-500 group-hover:rotate-45">
                ✦
              </span>
            </div>
            <h3 className="font-display text-[2.15rem] font-bold leading-tight">
              {offering.title}
            </h3>
            <p className="text-pretty mt-5 grow leading-8 text-rouh-ink/68">
              {offering.description}
            </p>
            {offering.price && (
              <div className="mt-6 rounded-2xl bg-rouh-ink/[0.06] px-4 py-3 text-sm font-bold text-rouh-ink/78 ring-1 ring-rouh-ink/8">
                {offering.price}
              </div>
            )}
            <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink href={offering.href}>{offering.cta}</ButtonLink>
              {offering.secondaryCta && offering.secondaryHref && (
                <ButtonLink href={offering.secondaryHref} variant="secondary">
                  {offering.secondaryCta}
                </ButtonLink>
              )}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
