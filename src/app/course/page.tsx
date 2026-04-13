import { SectionShell } from "@/components/site/SectionShell";

const modules = [
  "Module 01 - Narrative Positioning",
  "Module 02 - Visual Vocabulary",
  "Module 03 - Editorial Website System",
  "Module 04 - Launch Cadence",
];

export default function CoursePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-[var(--container-max)] px-5 md:px-8 lg:px-10">
        <SectionShell className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <p className="kicker mb-6">Course</p>
            <h1 className="editorial-display text-4xl leading-tight md:text-6xl">
              Placeholder long-form sales page for your digital product.
            </h1>
            <p className="mt-6 max-w-md text-[var(--brand-deep)]/80">
              Structured for premium conversion while preserving an editorial reading experience.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {modules.map((module) => (
                <div key={module} className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--brand-cream)] p-6">
                  <p className="utility-mono text-[0.62rem] text-[var(--brand-ink)]/65">Included</p>
                  <h2 className="mt-3 text-2xl">{module}</h2>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>
      </div>
    </main>
  );
}
