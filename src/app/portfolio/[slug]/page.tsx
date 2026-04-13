import { SectionShell } from "@/components/site/SectionShell";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-14">
        <SectionShell>
          <p className="kicker mb-6">Project</p>
          <h1 className="editorial-display text-4xl leading-tight capitalize md:text-6xl">
            {slug.replace(/-/g, " ")}
          </h1>
          <div className="mt-12 space-y-8">
            <div className="aspect-[16/9] w-full bg-[var(--brand-blush)]" />
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="aspect-[4/5] w-full bg-[var(--brand-gold)]" />
              </div>
              <div className="md:col-span-5">
                <p className="text-lg text-[var(--brand-deep)]/85">
                  Placeholder case-study narrative: challenge, strategic framing, creative direction, and outcomes.
                </p>
                <div className="mt-6 border-t border-[var(--brand-ink)]/20 pt-6 utility-mono text-[0.62rem] text-[var(--brand-olive)]">
                  Industry / Scope / Year
                </div>
              </div>
            </div>
          </div>
        </SectionShell>
      </div>
    </main>
  );
}
