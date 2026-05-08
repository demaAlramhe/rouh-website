import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(135deg,#5a9db0,#4c8fa3)] text-white shadow-button hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(90,157,176,0.34),inset_0_1px_0_rgba(255,255,255,0.36)]",
  secondary:
    "bg-white/72 text-rouh-wine shadow-[0_14px_34px_rgba(50,27,34,0.07)] ring-1 ring-rouh-wine/12 hover:-translate-y-1.5 hover:bg-white hover:ring-rouh-wine/22",
  ghost:
    "bg-white/5 text-rouh-ink ring-1 ring-rouh-ink/10 hover:-translate-y-1.5 hover:bg-white/55 hover:ring-rouh-blue/18",
  light:
    "bg-[linear-gradient(135deg,#fffaf0,#f8f1df)] text-rouh-ink shadow-[0_16px_36px_rgba(50,27,34,0.13),inset_0_1px_0_rgba(255,255,255,0.85)] ring-1 ring-white/70 hover:-translate-y-1.5 hover:bg-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const classes = `group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-bold tracking-[-0.01em] transition duration-300 ease-out after:absolute after:inset-y-0 after:-right-1/2 after:-z-10 after:w-1/2 after:skew-x-[-18deg] after:bg-white/22 after:opacity-0 after:blur-md after:transition after:duration-500 hover:after:right-[120%] hover:after:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rouh-blue ${variantClasses[variant]} ${className}`;

  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
