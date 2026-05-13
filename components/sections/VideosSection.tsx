import Image from "next/image";
import { videos } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionShell } from "@/components/ui/SectionShell";

const YOUTUBE_PAGE_URL = "https://youtube.com/";

export function VideosSection() {
  return (
    <SectionShell
      id="videos"
      eyebrow="فيديوهات وبودكاست"
      title="مساحة للاستماع والتعرّف أكثر على عالم الصوت والترددات"
      description="مجموعة مختارة من فيديوهات وبودكاست تساعدكِ على التعرّف أكثر على العلاج بالصوت، الطاسات التبتية، وتأثير الترددات على الجسد والحضور الداخلي."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {videos.map((video) => (
          <article
            key={video.title}
            className="luxury-card group overflow-hidden rounded-[2.15rem] bg-premium-card shadow-soft ring-1 ring-white/75 transition duration-500 hover:-translate-y-2 hover:shadow-petal"
          >
            <div className="relative aspect-video overflow-hidden">
              {video.embedUrl ? (
                <iframe
                  className="h-full w-full"
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rouh-ink/66 via-rouh-ink/8 to-transparent" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid size-16 place-items-center rounded-full bg-white/20 text-white shadow-[0_14px_34px_rgba(0,0,0,0.16)] ring-1 ring-white/35 backdrop-blur transition duration-500 group-hover:scale-110">
                      ▶
                    </span>
                  </div>
                </>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-pretty font-display text-xl font-bold leading-snug text-rouh-ink sm:text-2xl sm:leading-normal">
                {video.title}
              </h3>
              <p className="text-pretty mt-3 leading-7 text-rouh-ink/66">{video.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <ButtonLink
          href={YOUTUBE_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-[15rem]"
        >
          شاهدي المزيد على يوتيوب
        </ButtonLink>
      </div>
    </SectionShell>
  );
}
