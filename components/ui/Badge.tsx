import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-rouh-blue/10 px-4 py-1.5 text-xs font-bold text-rouh-blue ring-1 ring-rouh-blue/15">
      {children}
    </span>
  );
}
