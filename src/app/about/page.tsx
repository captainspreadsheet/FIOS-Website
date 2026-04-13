import { LineReveal } from "@/components/site/LineReveal";
import { SectionShell } from "@/components/site/SectionShell";

const timeline = [
  { year: "2019", text: "Placeholder milestone: studio foundations and philosophy." },
  { year: "2021", text: "Placeholder milestone: expanded into editorial-first digital work." },
  { year: "2024", text: "Placeholder milestone: refined cinematic and strategic practice." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-14">
        <SectionShell className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <p className="kicker mb-6">About</p>
            <h1 className="editorial-display text-4xl leading-tight md:text-6xl">
              A manifesto-led studio built around clarity, feeling, and timeless expression.
            </h1>
          </div>
          <div className="space-y-12 lg:col-span-7">
            <LineReveal
              className="space-y-2 text-lg leading-relaxed text-[var(--brand-deep)]/80"
              lines={[
                "Placeholder narrative introducing your perspective and values.",
                "Use this section to position your process as both artistic and strategic.",
              ]}
            />
            {timeline.map((item) => (
              <div key={item.year} className="border-t border-[var(--brand-ink)]/20 pt-8">
                <p className="utility-mono text-[0.62rem] text-[var(--brand-olive)]">{item.year}</p>
                <p className="mt-3 text-xl">{item.text}</p>
              </div>
            ))}
          </div>
        </SectionShell>
      </div>
    </main>
  );
}
