"use client";

import Image from "next/image";
import { lockBodyScroll } from "@/lib/bodyScrollLock";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

type VideoPreviewLightboxProps = {
  videoId: string;
  title: string;
  orientation?: "landscape" | "portrait";
  /** Custom still (e.g. `/images/course-cover.jpg`). Defaults to a high-res frame from the video. */
  posterSrc?: string;
  caption?: string;
  className?: string;
  /**
   * Muted inline player: autoplays only after the user has scrolled/wheeled/touched the page and
   * this block is sufficiently in view; unmounts when it leaves the viewport (pauses). Does not
   * autoplay on first paint even if the block is already visible.
   */
  autoPlayWhenVisible?: boolean;
  /** مع `autoPlayWhenVisible`: تشغيل صامت عند الظهور دون انتظار تمرير الصفحة أولًا */
  autoPlayImmediate?: boolean;
  /**
   * مع `autoPlayWhenVisible`: تشغيل الصوت بعد أول تمرير/لمس/نقرة على الصفحة (سياسة المتصفح).
   * لا يُفعَّل الصوت من أول ثانية دون أي تفاعل.
   */
  autoUnmuteOnInteraction?: boolean;
  /** Inside another card (e.g. podcast grid) — skips duplicate luxury shell. */
  embedded?: boolean;
  /** Title under the play icon on the poster; off when the parent card already shows it. */
  showTitleOnPreview?: boolean;
};

function youtubePosterUrl(videoId: string, orientation: "landscape" | "portrait") {
  return orientation === "portrait"
    ? `https://i.ytimg.com/vi/${videoId}/oardefault.jpg`
    : `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
}

function youtubeEmbedUrl(
  videoId: string,
  { autoplay = false, mute = false, chromeless = false }: { autoplay?: boolean; mute?: boolean; chromeless?: boolean },
) {
  const params = new URLSearchParams({
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
  });
  if (autoplay) params.set("autoplay", "1");
  if (mute) params.set("mute", "1");
  if (chromeless) {
    params.set("controls", "0");
    params.set("iv_load_policy", "3");
    params.set("fs", "0");
    params.set("disablekb", "1");
    params.set("cc_load_policy", "3");
    params.set("color", "white");
  } else {
    params.set("controls", "1");
  }
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

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
  orientation = "landscape",
  posterSrc,
  caption,
  className = "",
  autoPlayWhenVisible = false,
  autoPlayImmediate = false,
  autoUnmuteOnInteraction = false,
  embedded = false,
  showTitleOnPreview = true,
}: VideoPreviewLightboxProps) {
  const [open, setOpen] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);
  const [hasUserScrolled, setHasUserScrolled] = useState(false);
  /** After a tap, reload embed with sound (browsers block unmuted autoplay without a gesture). */
  const [inlineSoundOn, setInlineSoundOn] = useState(false);
  const [posterUrl, setPosterUrl] = useState(
    posterSrc ?? youtubePosterUrl(videoId, orientation),
  );
  const titleId = useId();
  const dialogId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);
  const viewportTargetRef = useRef<HTMLDivElement>(null);

  const inlineChromeless = autoPlayWhenVisible;
  const embedSrc = youtubeEmbedUrl(videoId, { autoplay: true });
  const inlineMutedSrc = youtubeEmbedUrl(videoId, { autoplay: true, mute: true, chromeless: inlineChromeless });
  const inlineUnmutedSrc = youtubeEmbedUrl(videoId, { autoplay: true, mute: false, chromeless: inlineChromeless });

  const shouldPlayInline =
    autoPlayWhenVisible && inView && (autoPlayImmediate || hasUserScrolled) && !open;
  const inlineSoundEnabled = shouldPlayInline && inlineSoundOn;
  const inlineActiveSrc = inlineSoundEnabled ? inlineUnmutedSrc : inlineMutedSrc;
  const isPortrait = orientation === "portrait";
  const frameAspectClass = isPortrait ? "aspect-[9/16]" : "aspect-video";
  const previewShellClass =
    embedded || !isPortrait
      ? ""
      : "mx-auto max-w-[min(25rem,100%)] rounded-[2.5rem] bg-gradient-to-br from-white/72 via-rouh-sand/36 to-rouh-blue/10 p-3 shadow-glow ring-1 ring-white/70 sm:p-4";
  const cardClass = embedded
    ? "relative mx-auto w-full max-w-[17.5rem] overflow-hidden rounded-[1.35rem] shadow-[0_18px_48px_rgba(50,27,34,0.14)] ring-1 ring-white/75"
    : isPortrait
      ? "luxury-card relative overflow-hidden rounded-[2rem] shadow-[0_28px_90px_rgba(50,27,34,0.2)] ring-1 ring-white/65"
      : "luxury-card relative overflow-hidden rounded-[2.25rem] shadow-glow ring-1 ring-white/35";
  const modalClass = isPortrait
    ? "relative z-10 flex max-h-[92vh] w-full max-w-[min(28rem,calc((92vh-4.5rem)*9/16),calc(100vw-2rem))] flex-col overflow-hidden rounded-[2rem] bg-rouh-ink shadow-[0_40px_120px_rgba(0,0,0,0.45)] ring-1 ring-white/22"
    : "relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] bg-rouh-ink shadow-[0_40px_120px_rgba(0,0,0,0.45)] ring-1 ring-white/22";

  const close = useCallback(() => {
    setOpen(false);
    setShowIframe(false);
    openRef.current?.focus({ preventScroll: true });
  }, []);

  const openModal = useCallback(() => {
    setOpen(true);
    setShowIframe(true);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const unlockScroll = lockBodyScroll();

    requestAnimationFrame(() => {
      closeRef.current?.focus({ preventScroll: true });
    });

    return () => {
      document.removeEventListener("keydown", onKey);
      unlockScroll();
    };
  }, [open, close]);

  useEffect(() => {
    if (!autoPlayWhenVisible) return;
    const onPageInteraction = () => {
      setHasUserScrolled(true);
      if (autoUnmuteOnInteraction) setInlineSoundOn(true);
    };
    const events = ["scroll", "wheel", "touchstart", "touchmove", "pointerdown", "click", "keydown"] as const;
    for (const event of events) {
      window.addEventListener(event, onPageInteraction, { passive: true });
    }
    return () => {
      for (const event of events) {
        window.removeEventListener(event, onPageInteraction);
      }
    };
  }, [autoPlayWhenVisible, autoUnmuteOnInteraction]);

  useEffect(() => {
    if (!autoPlayWhenVisible) return;
    const el = viewportTargetRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.32);
      },
      { threshold: [0, 0.32, 0.55, 0.85], rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [autoPlayWhenVisible]);

  const onPosterError = () => {
    setPosterUrl((current) => {
      if (posterSrc) return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
      if (current.includes("/oardefault.")) {
        return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
      }
      if (current.includes("/maxresdefault.")) {
        return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
      }
      return current;
    });
  };

  return (
    <div className={className}>
      <div className={previewShellClass}>
        <div ref={viewportTargetRef} className={cardClass}>
          <div className={`relative ${frameAspectClass} bg-black`}>
            {/* Poster stays under the iframe so scroll-autoplay never shows an empty frame while YouTube loads */}
            <Image
              src={posterUrl}
              alt=""
              fill
              className="z-0 object-cover"
              sizes={isPortrait ? "400px" : "(min-width: 1024px) 1024px, 100vw"}
              priority={false}
              onError={onPosterError}
            />
            {!shouldPlayInline ? (
              <>
                <div
                  className="absolute inset-0 z-[1] bg-gradient-to-t from-rouh-ink/72 via-rouh-ink/18 to-rouh-blue/10"
                  aria-hidden
                />
                <button
                  ref={openRef}
                  type="button"
                  onClick={openModal}
                  className="group absolute inset-0 z-[2] flex flex-col items-center justify-center gap-4 text-white outline-none transition focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-0"
                  aria-haspopup="dialog"
                  aria-expanded={open}
                  aria-controls={dialogId}
                >
                  <span className="sr-only">تشغيل الفيديو: {title}</span>
                  <span
                    className={`relative grid place-items-center rounded-full bg-white/18 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-1 ring-white/45 backdrop-blur-md transition-[background-color,box-shadow,ring-color,opacity] duration-300 group-hover:bg-white/26 group-hover:ring-white/60 ${
                      embedded ? "size-[3.75rem] sm:size-16" : "size-[4.25rem] sm:size-[4.75rem] group-hover:scale-105"
                    }`}
                    aria-hidden
                  >
                    <PlayGlyph
                      className={`ms-1 opacity-95 ${embedded ? "size-8 sm:size-9" : "size-9 sm:size-10"}`}
                    />
                  </span>
                  {showTitleOnPreview ? (
                    <span className="max-w-[90%] text-center font-display text-base font-bold text-white/95 sm:text-lg">
                      {title}
                    </span>
                  ) : null}
                </button>
              </>
            ) : (
              <>
                <div className="absolute inset-0 z-[3] overflow-hidden bg-black">
                  <iframe
                    key={inlineActiveSrc}
                    className={
                      inlineChromeless
                        ? "pointer-events-none absolute left-1/2 top-1/2 h-[118%] w-[118%] max-w-none -translate-x-1/2 -translate-y-1/2 border-0 bg-black"
                        : "absolute inset-0 h-full w-full border-0 bg-black"
                    }
                    src={inlineActiveSrc}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={!inlineChromeless}
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                  {inlineChromeless ? (
                    <>
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-12 bg-gradient-to-t from-black/55 via-black/20 to-transparent"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute end-0 top-0 z-[4] h-16 w-24 bg-gradient-to-bl from-black/40 to-transparent"
                        aria-hidden
                      />
                    </>
                  ) : null}
                </div>
                {!inlineSoundEnabled && !autoUnmuteOnInteraction ? (
                  <button
                    type="button"
                    onClick={() => setInlineSoundOn(true)}
                    className="absolute left-1/2 top-4 z-[4] -translate-x-1/2 rounded-full bg-white/18 px-5 py-2.5 text-sm font-bold text-white shadow-[0_14px_44px_rgba(0,0,0,0.4)] ring-1 ring-white/45 backdrop-blur-md transition duration-300 hover:bg-white/28 hover:ring-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75"
                  >
                    تشغيل الصوت
                  </button>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>

      {caption ? (
        <p className="text-pretty mt-5 text-center text-sm leading-7 text-rouh-ink/58">
          {caption}
        </p>
      ) : null}

      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[200] flex items-center justify-center overscroll-none p-4 sm:p-8"
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
            className={modalClass}
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
            <div className={`relative ${frameAspectClass} bg-black`}>
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
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
