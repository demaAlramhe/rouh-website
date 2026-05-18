import Image from "next/image";
import { assets } from "@/data/siteContent";
import { homeFeedback } from "@/data/homeFeedback";
import { homeSectionHeaderSpacing, homeSectionSpacing } from "@/components/sections/homeSectionSpacing";
import { SectionShell } from "@/components/ui/SectionShell";

function FeedbackCardFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="shrink-0 snap-center sm:snap-start">
      <div className="relative w-[min(82vw,19rem)] overflow-hidden rounded-[1.35rem] shadow-soft ring-1 ring-white/90 sm:w-[min(42vw,20rem)] md:w-[min(34vw,21rem)] lg:w-[19.5rem]">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-rouh-sand/70 via-rouh-mist/45 to-rouh-blue/12"
        />
        <Image
          src={assets.rose}
          alt=""
          width={360}
          height={360}
          className="pointer-events-none absolute left-1/2 top-1/2 size-[min(88%,14rem)] -translate-x-1/2 -translate-y-1/2 opacity-[0.14] mix-blend-multiply"
        />
        <div className="relative aspect-[3/4] w-full p-2 sm:p-2.5">
          <Image
            src={src}
            alt={alt}
            fill
            className="relative z-[1] object-contain drop-shadow-[0_8px_24px_rgba(50,27,34,0.08)]"
            sizes="(min-width: 1024px) 312px, (min-width: 640px) 42vw, 82vw"
          />
        </div>
      </div>
    </figure>
  );
}

export function HomeFeedbackSection() {
  const { images } = homeFeedback;

  return (
    <SectionShell
      id="feedback"
      eyebrow={homeFeedback.eyebrow}
      title={homeFeedback.title}
      description={homeFeedback.subtitle}
      className={homeSectionSpacing}
      headerClassName={homeSectionHeaderSpacing}
    >
      <div className="luxury-card relative overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-white/82 via-rouh-mist/26 to-rouh-sand/36 p-4 shadow-soft ring-1 ring-white/80 sm:p-6 md:p-7">
        <Image
          src={assets.rose}
          alt=""
          width={520}
          height={520}
          className="pointer-events-none absolute -left-20 -top-20 opacity-[0.16] sm:-left-24 sm:-top-24"
        />
        <Image
          src={assets.rose}
          alt=""
          width={420}
          height={420}
          className="pointer-events-none absolute -bottom-16 -right-16 hidden opacity-[0.1] sm:block"
        />
        <div
          className="gallery-h-scroll relative z-[1] -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-3 pt-1 sm:gap-5 md:gap-6"
          tabIndex={0}
          role="region"
          aria-label="معرض آراء وتجارب المشاركات — تمرير أفقي"
        >
          {images.map((item) => (
            <FeedbackCardFrame key={item.src} src={item.src} alt={item.alt} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
