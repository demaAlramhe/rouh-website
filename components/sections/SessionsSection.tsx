import Image from "next/image";
import { sessions, siteMeta } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionShell } from "@/components/ui/SectionShell";
import { homeSectionHeaderSpacing, homeSectionSpacing } from "@/components/sections/homeSectionSpacing";

export function SessionsSection() {
  return (
    <SectionShell
      id="sessions"
      eyebrow="الجلسات"
      title="رحلات صوتية مصممة حسب احتياجك"
      description="جلسات فردية، زوجية، وجماعية تفتح مساحة للهدوء، الاسترخاء، والاتصال الداخلي."
      className={homeSectionSpacing}
      headerClassName={homeSectionHeaderSpacing}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {sessions.map((session) => (
          <article
            key={session.title}
            className="luxury-card group flex flex-col overflow-hidden rounded-[2.25rem] bg-premium-card shadow-soft ring-1 ring-white/75 transition duration-500 hover:-translate-y-2 hover:shadow-petal"
          >
            <div className="flex justify-center px-3 pb-1 pt-4 sm:px-4">
              <div className="relative aspect-[3/4] w-full max-w-[15.75rem] overflow-hidden rounded-[1.35rem] shadow-[0_14px_44px_rgba(50,27,34,0.12)] ring-1 ring-white/80 sm:max-w-[16.75rem]">
                <Image
                  src={session.image}
                  alt={session.title}
                  fill
                  unoptimized
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 280px, 72vw"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-rouh-ink/38 via-rouh-ink/8 to-transparent" />
              </div>
            </div>
            <div className="relative flex flex-1 flex-col p-7">
              <h3 className="text-pretty text-center font-display text-[1.82rem] font-bold leading-[1.34] tracking-normal text-rouh-ink sm:text-2xl sm:leading-tight sm:tracking-[-0.01em]">
                {session.title}
              </h3>
              <div className="mt-6 space-y-4 text-sm leading-7 text-rouh-ink/68">
                {session.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-auto flex w-full flex-col items-center gap-4 pt-7">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-rouh-blue/10 px-3.5 py-1.5 text-xs font-bold text-rouh-blue ring-1 ring-rouh-blue/10">
                    {session.duration}
                  </span>
                  <span className="rounded-full bg-rouh-wine/10 px-3.5 py-1.5 text-xs font-bold text-rouh-wine ring-1 ring-rouh-wine/10">
                    {session.price}
                  </span>
                </div>
                <ButtonLink
                  href={siteMeta.whatsappUrl}
                  variant="secondary"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  حجز الجلسة
                </ButtonLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
