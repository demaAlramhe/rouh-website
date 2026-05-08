import Image from "next/image";
import { assets, hero, siteMeta } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Badge } from "@/components/ui/Badge";

const heroPills = ["هدوء", "حضور", "وعي"];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-24 pt-40 sm:px-8 lg:pb-28 lg:pt-40"
    >
      <div className="absolute inset-0 -z-10 bg-rouh-radial" />
      <Image
        src={assets.rose}
        alt=""
        width={460}
        height={460}
        className="pointer-events-none absolute -left-28 bottom-10 -z-10 hidden rotate-[-22deg] opacity-[0.1] blur-[1px] lg:block"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="animate-reveal order-2 flex flex-col items-center text-center lg:order-none">
          <div className="mx-auto flex w-full max-w-md flex-col items-center">
            <Badge>{hero.eyebrow}</Badge>

            <h1 className="text-balance mt-8 font-display text-[2.4rem] font-bold leading-[1.22] tracking-[-0.02em] text-rouh-ink sm:text-[2.85rem] lg:text-[3.2rem]">
              {hero.title}
            </h1>

            <p className="text-pretty mt-6 max-w-md text-base leading-8 text-rouh-ink/72 sm:text-lg sm:leading-9">
              {hero.text}
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <ButtonLink href="/free-workshop">الورشة المجانية</ButtonLink>
              <ButtonLink href={siteMeta.courseUrl} variant="secondary">
                الكورس الحالي
              </ButtonLink>
            </div>

            <div className="mt-9 flex flex-wrap justify-center gap-2.5">
              {heroPills.map((value) => (
                <span
                  key={value}
                  className="rounded-full bg-white/45 px-5 py-2.5 text-sm font-bold text-rouh-ink/62 ring-1 ring-white/70 backdrop-blur"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-none">
          <div className="relative mx-auto w-full max-w-[480px] pb-16">
            <div className="absolute -right-10 top-6 size-44 rounded-full bg-rouh-blue/22 blur-3xl" />
            <div className="absolute -left-10 bottom-10 size-52 rounded-full bg-rouh-wine/16 blur-3xl" />
            <div className="absolute inset-x-6 top-2 h-[78%] rounded-full border border-rouh-rose/18" />

            <div className="luxury-card relative rounded-[2.6rem] bg-premium-card p-2.5 shadow-glow ring-1 ring-white/75 backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.15rem]">
                <Image
                  src={assets.profile}
                  alt="أسيل عمر"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 90vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rouh-ink/42 via-rouh-ink/4 to-transparent" />
              </div>
            </div>

            <div className="absolute inset-x-6 -bottom-2 mx-auto w-[calc(100%-3rem)] max-w-xs rounded-[1.6rem] bg-rouh-sand/96 px-5 py-4 text-center shadow-petal ring-1 ring-white/80 backdrop-blur sm:left-1/2 sm:-bottom-1 sm:right-auto sm:w-full sm:-translate-x-1/2 sm:px-6 sm:py-5">
              <p className="font-display text-xl font-bold text-rouh-wine sm:text-2xl">
                أسيل عمر
              </p>
              <p className="mt-1.5 text-sm leading-6 text-rouh-ink/72">
                معالجة ومدرّبة في العلاج بالصوت منذ 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
