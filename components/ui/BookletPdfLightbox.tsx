"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";

type BookletPdfLightboxProps = {
  pdfUrl: string;
  coverSrc: string;
  coverAlt: string;
  heading: string;
  modalTitle: string;
  className?: string;
};

export function BookletPdfLightbox({
  pdfUrl,
  coverSrc,
  coverAlt,
  heading,
  modalTitle,
  className = "",
}: BookletPdfLightboxProps) {
  const [open, setOpen] = useState(false);
  const [showFrame, setShowFrame] = useState(false);
  const titleId = useId();
  const dialogId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setShowFrame(false);
    openRef.current?.focus();
  }, []);

  const openModal = useCallback(() => {
    setOpen(true);
    setShowFrame(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <div className={`flex flex-col ${className}`}>
      {/* يطابق ارتفاع سطر «فيديو الرحلة» لمحاذاة العناوين أفقياً */}
      <p
        className="invisible pointer-events-none select-none text-center text-xs font-bold tracking-[0.22em] text-rouh-blue"
        aria-hidden
      >
        فيديو الرحلة
      </p>
      <h2 className="text-pretty mt-2 text-center font-display text-xl font-bold leading-snug tracking-normal text-rouh-ink sm:text-balance sm:text-3xl sm:leading-normal sm:tracking-[-0.02em]">
        {heading}
      </h2>
      {/* يطابق فقرة الوصف تحت عنوان الفيديو لمحاذاة أعلى غلاف الكتيّب مع معاينة الفيديو */}
      <p
        className="invisible text-pretty mt-2 text-center text-sm leading-7 text-rouh-ink/58"
        aria-hidden
      >
        مساحة واسعة للمشاهدة — اضغطي للتشغيل في نافذة هادئة.
      </p>
      <button
        ref={openRef}
        type="button"
        onClick={openModal}
        className="group mt-5 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-rouh-blue focus-visible:ring-offset-2 focus-visible:ring-offset-rouh-sand"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={dialogId}
      >
        <span className="sr-only">فتح معاينة الكتيّب داخل الموقع</span>
        <div className="rounded-[1.65rem] bg-white p-2.5 shadow-[0_28px_70px_rgba(50,27,34,0.2)] ring-1 ring-rouh-ink/10 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_34px_80px_rgba(127,42,70,0.18)] sm:p-3">
          <img
            src={coverSrc}
            alt={coverAlt}
            decoding="async"
            fetchPriority="high"
            className="mx-auto block h-auto w-auto max-w-full rounded-[1.1rem]"
          />
        </div>
      </button>
      <ButtonLink href={pdfUrl} download className="mt-6 w-full !px-6 !py-4 !text-base">
        تحميل الكتيّب PDF
      </ButtonLink>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="presentation"
        >
          <div
            className="absolute inset-0 bg-rouh-ink/68 backdrop-blur-md"
            aria-hidden
            onClick={close}
          />
          <div
            id={dialogId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] bg-rouh-ink shadow-[0_40px_120px_rgba(0,0,0,0.45)] ring-1 ring-white/22"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/12 bg-[linear-gradient(135deg,rgba(50,27,34,0.96),rgba(36,16,24,0.98))] px-4 py-3 sm:px-5">
              <p
                id={titleId}
                className="text-pretty font-display text-sm font-bold text-white/92 sm:text-base"
              >
                {modalTitle}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="grid size-10 shrink-0 place-items-center rounded-full text-white/88 ring-1 ring-white/22 transition hover:bg-white/12 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rouh-blue"
                aria-label="إغلاق"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="min-h-0 flex-1 bg-[#f5f2eb]">
              {showFrame ? (
                <iframe
                  src={pdfUrl}
                  title={modalTitle}
                  className="h-[min(78vh,820px)] w-full sm:h-[min(80vh,860px)]"
                />
              ) : null}
            </div>
            <div className="shrink-0 border-t border-white/12 bg-[linear-gradient(135deg,rgba(50,27,34,0.96),rgba(36,16,24,0.98))] px-4 py-3 text-center">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-white/88 underline decoration-white/40 underline-offset-4 transition hover:text-white"
              >
                فتح PDF في تبويب جديد
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
