import Image from "next/image";
import { assets } from "@/data/siteContent";

const rosePlacements = [
  "absolute -left-[5.5rem] top-[2%] w-[min(19rem,44vw)] -rotate-[18deg] opacity-[0.09]",
  "absolute -right-[4.5rem] top-[14%] w-[min(17rem,40vw)] rotate-[10deg] opacity-[0.075]",
  "absolute -left-[6rem] top-[32%] w-[min(16rem,36vw)] -rotate-[8deg] opacity-[0.065]",
  "absolute -right-[5rem] top-[48%] w-[min(18rem,38vw)] rotate-[14deg] opacity-[0.08]",
  "absolute -left-[4rem] top-[66%] w-[min(15rem,34vw)] -rotate-[12deg] opacity-[0.07]",
  "absolute -right-[6rem] top-[78%] w-[min(20rem,42vw)] rotate-[6deg] opacity-[0.085]",
  "absolute left-1/2 top-[92%] w-[min(14rem,32vw)] -translate-x-1/2 rotate-[-6deg] opacity-[0.06]",
] as const;

export function HomeRoseBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {rosePlacements.map((className) => (
        <Image
          key={className}
          src={assets.rose}
          alt=""
          width={520}
          height={520}
          className={`${className} max-w-none mix-blend-multiply blur-[0.3px]`}
          sizes="(min-width: 1024px) 304px, 40vw"
        />
      ))}
    </div>
  );
}
