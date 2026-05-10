import Image from "next/image";
import { frontalCourseGallery } from "@/data/frontalCourseGallery";

type FrontalCourseGallerySectionProps = {
  className?: string;
};

export function FrontalCourseGallerySection({ className = "" }: FrontalCourseGallerySectionProps) {
  const { title, subtitle, images } = frontalCourseGallery;

  return (
    <section
      className={`relative ${className}`.trim()}
      aria-labelledby="frontal-course-gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-9 max-w-3xl text-center sm:mb-11">
          <p className="mb-3 text-xs font-black tracking-[0.28em] text-rouh-blue sm:text-sm">
            لقطات من الاستوديو
          </p>
          <h2
            id="frontal-course-gallery-heading"
            className="text-balance font-display text-[2.15rem] font-bold leading-[1.15] text-rouh-ink sm:text-4xl lg:text-[2.65rem]"
          >
            {title}
          </h2>
          <p className="text-pretty mx-auto mt-4 max-w-2xl text-base leading-8 text-rouh-ink/70 sm:text-lg sm:leading-9">
            {subtitle}
          </p>
        </header>

        <div className="luxury-card rounded-[2.4rem] bg-gradient-to-br from-white/80 via-rouh-mist/28 to-rouh-sand/38 p-4 shadow-soft ring-1 ring-white/80 sm:p-6 md:p-7">
          <div
            className="gallery-h-scroll -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-3 pt-1 sm:gap-5 md:gap-6"
            tabIndex={0}
            role="region"
            aria-label="معرض صور قابل للتمرير أفقيًا"
          >
            {images.map((item) => (
              <figure
                key={item.src}
                className="shrink-0 snap-center sm:snap-start"
              >
                <div className="relative w-[min(76vw,17.5rem)] overflow-hidden rounded-[1.35rem] bg-rouh-ink/8 shadow-soft ring-1 ring-white/90 sm:w-[min(38vw,18.5rem)] md:w-[min(32vw,19.5rem)] lg:w-[17.75rem]">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 284px, (min-width: 640px) 38vw, 76vw"
                    />
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
