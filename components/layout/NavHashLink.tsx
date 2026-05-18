"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type NavHashLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/** Hash links with fixed header offset; avoids Next.js scroll/router quirks on `/#section`. */
export function NavHashLink({ href, onClick, ...props }: NavHashLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex) || "/";
    const id = href.slice(hashIndex + 1);
    if (!id) return;

    const normalizedPath =
      path === "/" ? "/" : path.replace(/\/$/, "") || "/";
    const currentPath =
      window.location.pathname.replace(/\/$/, "") || "/";

    if (normalizedPath !== currentPath) return;

    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
  };

  return <Link href={href} prefetch={false} onClick={handleClick} {...props} />;
}
