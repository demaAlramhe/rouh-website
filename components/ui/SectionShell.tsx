import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  headerClassName = "",
}: SectionShellProps) {
  return (
    <section id={id} className={`relative scroll-mt-28 px-5 py-[4.5rem] sm:px-8 sm:py-[5.5rem] lg:py-[7.5rem] ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div
            className={`mx-auto mb-12 max-w-[min(100%,21rem)] text-center sm:mb-16 sm:max-w-3xl ${headerClassName}`}
          >
            {eyebrow && (
              <p className="mb-4 font-sans text-[0.8125rem] font-bold leading-snug tracking-normal text-rouh-blue antialiased sm:text-sm sm:font-black sm:leading-normal sm:tracking-[0.32em]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-pretty font-display text-[2.12rem] font-bold leading-[1.36] tracking-normal text-rouh-ink sm:text-balance sm:text-5xl sm:leading-[1.18] sm:tracking-[-0.02em] lg:text-[3.35rem]">
                {title}
              </h2>
            )}
            {description ? (
              <div className="text-pretty mt-5 text-base leading-8 text-rouh-ink/68 sm:text-lg sm:leading-9">
                {description}
              </div>
            ) : null}
          </div>
        )}
        <div className={id === "videos" ? "" : "animate-reveal"}>{children}</div>
      </div>
    </section>
  );
}
