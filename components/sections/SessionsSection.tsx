import Image from "next/image";
import { sessions } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionShell } from "@/components/ui/SectionShell";

const WHATSAPP_URL = "https://wa.me/972509071900";

export function SessionsSection() {
  return (
    <SectionShell
      id="sessions"
      eyebrow="الجلسات"
      title="رحلات صوتية مصممة حسب احتياجك"
      description="جلسات فردية، زوجية، وجماعية تفتح مساحة للهدوء، الاسترخاء، والاتصال الداخلي."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {sessions.map((session) => (
          <article
            key={session.title}
            className="luxury-card group flex flex-col overflow-hidden rounded-[2.25rem] bg-premium-card shadow-soft ring-1 ring-white/75 transition duration-500 hover:-translate-y-2 hover:shadow-petal"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={session.image}
                alt={session.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rouh-ink/52 via-transparent to-transparent" />
            </div>
            <div className="relative flex flex-1 flex-col p-7">
              <h3 className="font-display text-[2rem] font-bold leading-tight text-rouh-ink">
                {session.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-rouh-blue/10 px-3.5 py-1.5 text-xs font-bold text-rouh-blue ring-1 ring-rouh-blue/10">
                  {session.duration}
                </span>
                <span className="rounded-full bg-rouh-wine/10 px-3.5 py-1.5 text-xs font-bold text-rouh-wine ring-1 ring-rouh-wine/10">
                  {session.price}
                </span>
              </div>
              <div className="mt-5 space-y-4 text-sm leading-7 text-rouh-ink/68">
                {session.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-auto pt-7">
                <ButtonLink
                  href={WHATSAPP_URL}
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
