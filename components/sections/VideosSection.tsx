import { videos } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionShell } from "@/components/ui/SectionShell";
import { VideoPreviewLightbox } from "@/components/ui/VideoPreviewLightbox";
import { homeSectionHeaderSpacing, homeSectionSpacing } from "@/components/sections/homeSectionSpacing";

const YOUTUBE_PAGE_URL = "https://youtube.com/@aseelomar6707?si=4p2XMk5hMJnb_6Ve";

const VIDEOS_SECTION_DESCRIPTION =
  "العلاج بالطاسات التبتية هو نوع من العلاج بالصوت، يعتمد على الترددات والاهتزازات العميقة التي تُصدرها الطاسات لدعم الاسترخاء، التوازن، وتهدئة الجهاز العصبي 🌿 على عكس الموسيقى العادية، تحمل الطاسات ترددات يمكن للجسم أن يشعر بها بعمق، مما قد يؤثر علينا نفسيًا وجسديًا، ويساعد على إدخال الجسم بحالة أهدأ وأكثر حضورًا ✨ تُساهم هذه الترددات في تفعيل الجهاز العصبي اللاودي (Parasympathetic Nervous System)، المسؤول عن التهدئة، تنظيم التنفّس، خفض معدل ضربات القلب، والشعور بالأمان والراحة. كما تساعد الجلسات على تهدئة التفكير الزائد، دعم التأمل العميق، وخلق مساحة داخلية من السكون والتوازن 🧘🏻‍♀️ يمكن اعتباره نوعًا من العلاج بالموسيقى، لكن بطريقة أعمق وتجربة حسّية مختلفة يعيشها الجسد عبر الصوت والاهتزاز.";

export function VideosSection() {
  return (
    <SectionShell
      id="videos"
      eyebrow="فيديوهات وبودكاست"
      title="مساحة للاستماع والتعرّف أكثر على عالم الصوت والترددات"
      className={homeSectionSpacing}
      headerClassName={`${homeSectionHeaderSpacing} sm:max-w-[min(100%,52rem)] lg:max-w-[56rem]`}
      description={
        <p className="text-pretty mx-auto max-w-[min(100%,48rem)] text-[0.9375rem] leading-[1.78] text-rouh-ink/68 sm:max-w-[52rem] sm:text-[1.015rem] sm:leading-[1.82] lg:max-w-[56rem] lg:text-[1.045rem] lg:leading-[1.84]">
          {VIDEOS_SECTION_DESCRIPTION}
        </p>
      }
    >
      <div className="grid gap-6 md:grid-cols-3 md:items-start">
        {videos.map((video) => (
          <article
            key={video.title}
            className="luxury-card flex flex-col overflow-hidden rounded-[2.15rem] bg-premium-card shadow-soft ring-1 ring-white/75"
          >
            <div className="bg-gradient-to-b from-rouh-sand/28 via-rouh-sand/12 to-transparent px-3 pb-4 pt-5 sm:px-4 sm:pt-6">
              <VideoPreviewLightbox
                videoId={video.videoId}
                title={video.title}
                orientation="portrait"
                embedded
                showTitleOnPreview={false}
              />
            </div>
            <div className="flex flex-1 flex-col p-6 pt-4">
              <h3 className="text-pretty text-center font-display text-xl font-bold leading-snug text-rouh-ink sm:text-2xl sm:leading-normal">
                {video.title}
              </h3>
              <p className="text-pretty mt-3 flex-1 text-center leading-7 text-rouh-ink/66">{video.description}</p>
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
