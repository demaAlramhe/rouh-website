import { journeyItems } from "@/data/siteContent";
import { SectionShell } from "@/components/ui/SectionShell";

export function JourneySection() {
  return (
    <SectionShell
      id="journey"
      eyebrow="رحلتي المهنية"
      title="خبرة تجمع بين الوعي، الجسد، الإرشاد، والجمال"
    >
      <div>
        <div className="grid gap-4 md:grid-cols-2">
          {journeyItems.map((item, index) => (
            <article
              key={item}
              className="luxury-card group rounded-[1.85rem] bg-premium-card p-6 shadow-soft ring-1 ring-white/75 transition duration-500 hover:-translate-y-1.5 hover:shadow-petal"
            >
              <span className="mb-5 grid size-12 place-items-center rounded-full bg-rouh-blue/11 font-sans text-sm font-bold text-rouh-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ring-1 ring-rouh-blue/16 antialiased sm:font-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold leading-8 text-rouh-ink/88">{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
