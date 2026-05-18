import Link from "next/link";
import { NavHashLink } from "@/components/layout/NavHashLink";
import { navItems } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/70 bg-[#f8f1df]/78 px-3 py-3 shadow-[0_18px_60px_rgba(50,27,34,0.1)] backdrop-blur-2xl lg:rounded-full lg:px-4">
        <div className="flex items-center justify-between gap-4">
        <NavHashLink
          href="/#home"
          aria-label="Rouh الرئيسية"
          className="flex items-center ms-2 sm:ms-3 transition hover:opacity-90"
        >
          <span className="rouh-logo-mark" aria-hidden="true" />
          <span className="sr-only">Rouh</span>
        </NavHashLink>

        <nav aria-label="روابط الموقع" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavHashLink
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-bold text-rouh-ink/66 transition duration-300 hover:bg-white/72 hover:text-rouh-wine"
            >
              {item.label}
            </NavHashLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/free-workshop" className="px-4 py-2.5 text-xs sm:px-5 sm:text-sm">
            رحلة استرخاء مجانية
          </ButtonLink>
        </div>
        </div>

        <nav
          aria-label="روابط الموقع المختصرة"
          className="mt-3 flex gap-2 overflow-x-auto pb-1 pt-1 text-nowrap lg:hidden"
        >
          {navItems.map((item) => (
            <NavHashLink
              key={item.href}
              href={item.href}
              className="rounded-full bg-white/45 px-3.5 py-2 text-xs font-bold text-rouh-ink/68 ring-1 ring-white/60"
            >
              {item.label}
            </NavHashLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
