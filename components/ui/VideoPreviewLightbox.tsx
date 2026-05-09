"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";

type VideoPreviewLightboxProps = {
  videoId: string;
  title: string;
  /** Custom still (e.g. `/images/course-cover.jpg`). Defaults to a high-res frame from the video. */
  posterSrc?: string;
  caption?: string;
  className?: string;
};

function PlayGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M9.5 7.5v9l7-4.5-7-4.5z" />
    </svg>
  );
}

export function VideoPreviewLightbox({
  videoId,
  title,
  posterSrc,
  caption,
  className = "",
}: VideoPreviewLightboxProps) {
  const [open, setOpen] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const [posterUrl, setPosterUrl] = useState(
    posterSrc ?? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
  );
  const titleId = useId();
  const dialogId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);

  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  const close = useCallback(() => {
    setOpen(false);
    setShowIframe(false);
    openRef.current?.focus();
  }, []);

  const openModal = useCallback(() => {
    setOpen(true);
    setShowIframe(true);
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

  const onPosterError = () => {
    setPosterUrl(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
  };

  return (
    <div className={className}>
      <div className="luxury-card relative overflow-hidden rounded-[2.25rem] shadow-glow ring-1 ring-white/35">
        <div className="relative aspect-video bg-rouh-ink">
          <Image
            src={posterUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority={false}
            onError={onPosterError}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-rouh-ink/72 via-rouh-ink/18 to-rouh-blue/10"
            aria-hidden
          />
          <button
            ref={openRef}
            type="button"
            onClick={openModal}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-white outline-none transition focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-rouh-ink/40"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls={dialogId}
          >
            <span className="sr-only">تشغيل الفيديو: {title}</span>
            <span
              className="relative grid size-[4.25rem] place-items-center rounded-full bg-white/18 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-1 ring-white/45 backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:bg-white/26 group-hover:ring-white/60 sm:size-[4.75rem]"
              aria-hidden
            >
              <PlayGlyph className="ms-1 size-9 opacity-95 sm:size-10" />
            </span>
            <span className="max-w-[90%] text-center font-display text-base font-bold text-white/95 sm:text-lg">
              {title}
            </span>
          </button>
        </div>
      </div>

      {caption ? (
        <p className="text-pretty mt-5 text-center text-sm leading-7 text-rouh-ink/58">
          {caption}
        </p>
      ) : null}

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
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] bg-rouh-ink shadow-[0_40px_120px_rgba(0,0,0,0.45)] ring-1 ring-white/22"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/12 bg-[linear-gradient(135deg,rgba(50,27,34,0.96),rgba(36,16,24,0.98))] px-4 py-3 sm:px-5">
              <p id={titleId} className="text-pretty font-display text-sm font-bold text-white/92 sm:text-base">
                {title}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="grid size-10 shrink-0 place-items-center rounded-full text-white/88 ring-1 ring-white/22 transition hover:bg-white/12 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rouh-blue"
                aria-label="إغلاق"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="relative aspect-video bg-black">
              {showIframe ? (
                <iframe
                  className="h-full w-full"
                  src={embedSrc}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
