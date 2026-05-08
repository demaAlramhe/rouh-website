type VideoFrameProps = {
  title: string;
  embedUrl?: string;
  className?: string;
};

export function VideoFrame({ title, embedUrl, className = "" }: VideoFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.25rem] bg-rouh-ink shadow-glow ring-1 ring-white/35 ${className}`}
    >
      <div className="aspect-video">
        {embedUrl ? (
          <iframe
            className="h-full w-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(248,241,223,0.24),transparent_28%),linear-gradient(135deg,rgba(90,157,176,0.78),rgba(127,42,70,0.86))] p-8 text-center text-white">
            <div className="mb-5 grid size-20 place-items-center rounded-full bg-white/16 text-3xl shadow-[0_18px_42px_rgba(0,0,0,0.16)] ring-1 ring-white/30 backdrop-blur">
              ▶
            </div>
            <p className="text-balance font-display text-3xl font-bold">{title}</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/78">
              مساحة مهيّأة لفيديو YouTube أو Vimeo. أضيفي رابط التضمين لاحقًا من ملف المحتوى.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
