import Image from "next/image";
import { frontalCourseTestimonials } from "@/data/frontalCourseTestimonials";

type FrontalCourseTestimonialsSectionProps = {
  className?: string;
};

export function FrontalCourseTestimonialsSection({ className = "" }: FrontalCourseTestimonialsSectionProps) {
  const { eyebrow, title, subtitle, images } = frontalCourseTestimonials;

  return (
    <section
      id="frontal-testimonials"
      className={`relative ${className}`.trim()}
      aria-labelledby="frontal-course-testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-9 max-w-[min(100%,21rem)] text-center sm:mb-11 sm:max-w-3xl">
          <p className="mb-3 font-sans text-[0.8125rem] font-bold leading-snug tracking-normal text-rouh-blue antialiased sm:text-sm sm:font-black sm:leading-normal sm:tracking-[0.28em]">
            {eyebrow}
          </p>
          <h2
            id="frontal-course-testimonials-heading"
            className="text-pretty font-display text-[1.95rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:text-balance sm:text-4xl sm:leading-[1.15] sm:tracking-[-0.02em] lg:text-[2.65rem]"
          >
            {title}
          </h2>
          <p className="text-pretty mx-auto mt-4 max-w-2xl text-base leading-8 text-rouh-ink/70 sm:text-lg sm:leading-9">
            {subtitle}
          </p>
        </header>

        <div className="luxury-card rounded-[2.4rem] bg-gradient-to-br from-white/82 via-rouh-mist/26 to-rouh-sand/36 p-4 shadow-soft ring-1 ring-white/80 sm:p-6 md:p-7">
          <div
            className="gallery-h-scroll -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-3 pt-1 sm:gap-5 md:gap-6"
            tabIndex={0}
            role="region"
            aria-label="معرض آراء المشاركات — تمرير أفقي"
          >
            {images.map((item) => (
              <figure key={item.src} className="shrink-0 snap-center sm:snap-start">
                <div className="relative w-[min(82vw,19rem)] overflow-hidden rounded-[1.35rem] bg-rouh-ink/8 shadow-soft ring-1 ring-white/90 sm:w-[min(42vw,20rem)] md:w-[min(34vw,21rem)] lg:w-[19.5rem]">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      unoptimized
                      className="object-contain bg-white/40"
                      sizes="(min-width: 1024px) 312px, (min-width: 640px) 42vw, 82vw"
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
