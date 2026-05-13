"use client";

import { useEffect, useRef, useState, type SVGProps } from "react";

type ToggleKey =
  | "highContrast"
  | "grayscale"
  | "readableFont"
  | "underlineLinks"
  | "highlightHeadings"
  | "highlightInteractive"
  | "pauseAnimations";

type A11yState = Record<ToggleKey, boolean> & {
  fontStep: number;
};

const DEFAULT_STATE: A11yState = {
  fontStep: 0,
  highContrast: false,
  grayscale: false,
  readableFont: false,
  underlineLinks: false,
  highlightHeadings: false,
  highlightInteractive: false,
  pauseAnimations: false,
};

const STORAGE_KEY = "rouh-a11y-prefs";
const FONT_BASE_PX = 16;
const FONT_STEP_PX = 1.5;
const FONT_MIN_STEP = -2;
const FONT_MAX_STEP = 4;

const TOGGLES: Array<{ key: ToggleKey; label: string; description: string }> = [
  { key: "highContrast", label: "تباين عالٍ", description: "خلفية داكنة مع نصوص ساطعة." },
  { key: "grayscale", label: "أبيض وأسود", description: "تحييد جميع الألوان." },
  {
    key: "readableFont",
    label: "خط قراءة مريح",
    description: "تبديل الخط ليكون أوضح للقراءة.",
  },
  {
    key: "underlineLinks",
    label: "تسطير الروابط",
    description: "إبراز كل الروابط بخط واضح.",
  },
  {
    key: "highlightHeadings",
    label: "إبراز العناوين",
    description: "إطار ناعم حول العناوين الرئيسية.",
  },
  {
    key: "highlightInteractive",
    label: "إبراز الأزرار والروابط",
    description: "إطار حول العناصر التفاعلية.",
  },
  {
    key: "pauseAnimations",
    label: "إيقاف الحركة",
    description: "إيقاف جميع الانتقالات والحركات.",
  },
];

function applyState(state: A11yState) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  root.style.fontSize = `${FONT_BASE_PX + state.fontStep * FONT_STEP_PX}px`;
  if (state.fontStep === 0) {
    root.style.removeProperty("font-size");
  }

  for (const { key } of TOGGLES) {
    root.classList.toggle(`a11y-${key}`, state[key]);
  }
}

export function AccessibilityWidget() {
  const [state, setState] = useState<A11yState>(DEFAULT_STATE);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = { ...DEFAULT_STATE, ...JSON.parse(stored) } as A11yState;
        // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate persisted prefs after mount to avoid SSR mismatch
        setState(parsed);
        applyState(parsed);
      }
    } catch {
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    applyState(state);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
    }
  }, [state, hydrated]);

  useEffect(() => {
    if (!open) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    function handleClick(event: MouseEvent) {
      const target = event.target as Node | null;
      if (!target) return;
      if (panelRef.current?.contains(target)) return;
      if (triggerRef.current?.contains(target)) return;
      setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open]);

  function adjustFont(delta: number) {
    setState((prev) => ({
      ...prev,
      fontStep: Math.max(FONT_MIN_STEP, Math.min(FONT_MAX_STEP, prev.fontStep + delta)),
    }));
  }

  function toggleKey(key: ToggleKey) {
    setState((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function reset() {
    setState(DEFAULT_STATE);
  }

  return (
    <div className="a11y-widget" data-a11y-widget>
      <button
        ref={triggerRef}
        type="button"
        aria-label="فتح خيارات إمكانية الوصول"
        aria-expanded={open}
        aria-controls="rouh-a11y-panel"
        onClick={() => setOpen((prev) => !prev)}
        className="group fixed bottom-5 left-5 z-[60] grid size-14 place-items-center rounded-full bg-[linear-gradient(135deg,#5a9db0,#4c8fa3)] text-white shadow-button ring-1 ring-white/30 transition duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rouh-blue sm:bottom-6 sm:left-6"
      >
        <AccessIcon className="size-7 transition duration-500 group-hover:scale-110" />
        <span className="sr-only">إمكانية الوصول</span>
      </button>

      <div
        ref={panelRef}
        id="rouh-a11y-panel"
        role="dialog"
        aria-modal="false"
        aria-label="خيارات إمكانية الوصول"
        aria-hidden={!open}
        className={`fixed bottom-24 left-4 z-[61] max-h-[78vh] w-[min(22rem,calc(100vw-2rem))] origin-bottom-left overflow-y-auto rounded-[1.6rem] bg-[#fdf7ea]/97 p-5 text-rouh-ink shadow-glow ring-1 ring-white/70 backdrop-blur-2xl transition duration-300 sm:bottom-28 sm:left-6 sm:p-6 ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-sans text-[0.8125rem] font-bold leading-snug tracking-normal text-rouh-blue antialiased sm:text-xs sm:tracking-[0.22em]">
              إمكانية الوصول
            </p>
            <h2 className="mt-1 font-display text-xl font-bold text-rouh-ink">
              تخصيص العرض
            </h2>
          </div>
          <button
            type="button"
            aria-label="إغلاق"
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
            }}
            className="grid size-9 place-items-center rounded-full bg-white/70 text-rouh-ink/70 ring-1 ring-white/70 transition hover:bg-white hover:text-rouh-wine"
          >
            <CloseIcon className="size-3.5" />
          </button>
        </div>

        <div className="mt-5 rounded-2xl bg-white/55 p-4 ring-1 ring-white/70">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-rouh-ink/82">حجم النص</p>
              <p className="mt-0.5 text-xs text-rouh-ink/56">تكبير أو تصغير حسب الراحة.</p>
            </div>
            <span className="rounded-full bg-rouh-blue/12 px-3 py-1 text-xs font-bold text-rouh-blue">
              {state.fontStep === 0
                ? "افتراضي"
                : state.fontStep > 0
                  ? `+${state.fontStep}`
                  : `${state.fontStep}`}
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              aria-label="تصغير حجم النص"
              onClick={() => adjustFont(-1)}
              disabled={state.fontStep <= FONT_MIN_STEP}
              className="grid size-10 place-items-center rounded-full bg-rouh-ink/8 text-lg font-bold text-rouh-ink transition hover:bg-rouh-ink/14 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <MinusIcon className="size-4" />
            </button>
            <div className="flex h-2 flex-1 items-center gap-1.5">
              {Array.from({ length: FONT_MAX_STEP - FONT_MIN_STEP + 1 }).map((_, i) => {
                const idxStep = i + FONT_MIN_STEP;
                const active = state.fontStep === idxStep;
                return (
                  <span
                    key={idxStep}
                    className={`h-1.5 flex-1 rounded-full transition ${
                      idxStep <= state.fontStep && state.fontStep > 0 && idxStep > 0
                        ? "bg-rouh-blue"
                        : idxStep >= state.fontStep && state.fontStep < 0 && idxStep < 0
                          ? "bg-rouh-wine"
                          : active
                            ? "bg-rouh-blue"
                            : "bg-rouh-ink/12"
                    }`}
                  />
                );
              })}
            </div>
            <button
              type="button"
              aria-label="تكبير حجم النص"
              onClick={() => adjustFont(1)}
              disabled={state.fontStep >= FONT_MAX_STEP}
              className="grid size-10 place-items-center rounded-full bg-rouh-ink/8 text-lg font-bold text-rouh-ink transition hover:bg-rouh-ink/14 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <PlusIcon className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 grid gap-2">
          {TOGGLES.map(({ key, label, description }) => {
            const active = state[key];
            return (
              <button
                key={key}
                type="button"
                role="switch"
                aria-checked={active}
                onClick={() => toggleKey(key)}
                className={`flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-right text-sm transition ring-1 ${
                  active
                    ? "bg-rouh-blue/12 text-rouh-ink ring-rouh-blue/30"
                    : "bg-white/55 text-rouh-ink/82 ring-white/70 hover:bg-white"
                }`}
              >
                <div className="min-w-0">
                  <p className="font-bold text-rouh-ink">{label}</p>
                  <p className="mt-0.5 text-xs text-rouh-ink/56">{description}</p>
                </div>
                <span
                  className={`relative h-6 w-11 flex-shrink-0 rounded-full transition ${
                    active ? "bg-rouh-blue" : "bg-rouh-ink/15"
                  }`}
                >
                  <span
                    className={`absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                      active ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={reset}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rouh-wine/10 px-5 py-3 text-sm font-bold text-rouh-wine transition hover:bg-rouh-wine/16"
        >
          <ResetIcon className="size-4" />
          إعادة كل الإعدادات
        </button>
      </div>
    </div>
  );
}

function AccessIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="4.7" r="1.7" fill="currentColor" stroke="none" />
      <path d="M5.5 8.3c2.4 1 4.2 1.3 6.5 1.3s4.1-.3 6.5-1.3" />
      <path d="M9.6 9.6 8.4 14l-1.4 5.6" />
      <path d="m14.4 9.6 1.2 4.4 1.4 5.6" />
      <path d="M9 14h6" />
    </svg>
  );
}

function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function MinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function ResetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </svg>
  );
}
