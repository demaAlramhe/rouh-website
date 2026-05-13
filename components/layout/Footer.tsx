import Link from "next/link";
import { navItems, siteMeta } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="px-5 pb-8 sm:px-8">
      <div className="luxury-card relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-premium-card p-8 text-rouh-ink shadow-soft ring-1 ring-white/75 sm:p-10">
        <div className="absolute inset-x-10 top-8 h-px bg-gradient-to-l from-transparent via-rouh-wine/16 to-transparent" />
        <div className="grid gap-10 text-center lg:grid-cols-[1.2fr_1fr_1fr] lg:items-start">
          <div className="flex flex-col items-center">
            <div className="mb-5">
              <p className="text-pretty font-display text-3xl font-bold leading-snug tracking-normal text-rouh-ink sm:text-4xl sm:leading-none sm:tracking-[-0.02em]">
                Rouh
              </p>
              <p className="mt-1 text-sm tracking-[0.18em] text-rouh-ink/60">by Aseel Omar</p>
            </div>
            <p className="max-w-md text-base leading-8 text-rouh-ink/72">
              مساحة ناعمة للعلاج بالصوت، الترددات، والطاسات التبتية. دعوة للهدوء، الحضور،
              والعودة إلى الذات بلطف.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="mb-4 font-bold text-rouh-ink">روابط سريعة</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-center text-sm text-rouh-ink/70">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-rouh-wine"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="mb-4 font-bold text-rouh-ink">تواصل</p>
            <div className="space-y-3 text-center text-sm text-rouh-ink/72">
              <a
                className="block transition hover:text-rouh-wine"
                href={`tel:${siteMeta.phone}`}
              >
                {siteMeta.phone}
              </a>
              <a
                className="block transition hover:text-rouh-wine"
                href={siteMeta.instagram}
              >
                Instagram @_aseelomar_
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-rouh-ink/10 pt-6 text-center text-xs text-rouh-ink/52 sm:flex-row sm:justify-between sm:gap-4">
          <p>© {new Date().getFullYear()} Rouh by Aseel Omar. جميع الحقوق محفوظة.</p>
          <p>
            تصميم وتطوير{" "}
            <a
              href="https://demadigitalsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-rouh-ink/70 underline-offset-4 transition hover:text-rouh-wine hover:underline"
            >
              Dema Digital Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
