import Link from "next/link";
import { LineReveal } from "@/components/site/LineReveal";
import { MarqueeRow } from "@/components/site/MarqueeRow";
import { NewsletterSignup } from "@/components/site/NewsletterSignup";
import { SectionShell } from "@/components/site/SectionShell";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--brand-cream)] text-[var(--brand-ink)]">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-14">
        <section className="section-shell grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="kicker mb-8">FIOS Studio</p>
            <h1 className="editorial-display max-w-4xl text-5xl leading-[1.05] text-[var(--brand-ink)] md:text-7xl lg:text-8xl">
              A modern editorial hybrid for warm, cinematic brand worlds.
            </h1>
            <LineReveal
              className="mt-10 max-w-xl space-y-2 text-base text-[var(--brand-deep)]/80 md:text-lg"
              lines={[
                "Placeholder narrative introducing your lens and creative philosophy.",
                "Built to feel tactile like print, but fluid like a contemporary studio.",
              ]}
            />
            <div className="mt-10">
              <Link href="#selected-work" className="utility-mono text-[0.64rem] text-[var(--brand-ink)]/75">
                Scroll
              </Link>
            </div>
          </div>
          <div className="image-reveal lg:col-span-5">
            <div className="aspect-[4/5] w-full border border-[var(--brand-ink)]/20 bg-[var(--brand-blush)]" />
          </div>
        </section>

        <MarqueeRow text={["Intentional", "Editorial", "Warm", "Weighted", "Studio-Led", "Cinematic"]} />

        <SectionShell id="selected-work">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="editorial-display text-3xl leading-tight md:text-5xl">Selected Work</h2>
            <p className="kicker hidden md:block">Featured stories</p>
          </div>
          <div className="grid gap-6 md:grid-cols-12 md:gap-8 lg:gap-10">
            <article className="md:col-span-7">
              <div className="image-reveal">
                <div className="aspect-[5/6] w-full bg-[var(--brand-blush)]" />
              </div>
              <div className="mt-5 flex items-center justify-between text-sm text-[var(--brand-ink)]/80">
                <p>Campaign Narrative</p>
                <p>Placeholder</p>
              </div>
            </article>
            <article className="md:col-span-5 md:pt-16">
              <div className="image-reveal">
                <div className="aspect-[4/5] w-full bg-[var(--brand-gold)]" />
              </div>
              <div className="mt-5 flex items-center justify-between text-sm text-[var(--brand-ink)]/80">
                <p>Identity Study</p>
                <p>Placeholder</p>
              </div>
            </article>
            <article className="md:col-span-4 md:-mt-10">
              <div className="image-reveal">
                <div className="aspect-[3/4] w-full bg-[var(--brand-olive)]/70" />
              </div>
              <div className="mt-5 flex items-center justify-between text-sm text-[var(--brand-ink)]/80">
                <p>Editorial Build</p>
                <p>Placeholder</p>
              </div>
            </article>
            <article className="md:col-span-8">
              <div className="image-reveal">
                <div className="aspect-[16/9] w-full bg-[var(--brand-deep)]/15" />
              </div>
              <div className="mt-5 flex items-center justify-between text-sm text-[var(--brand-ink)]/80">
                <p>Launch Sequence</p>
                <p>Placeholder</p>
              </div>
            </article>
          </div>
        </SectionShell>

        <SectionShell>
          <div className="max-w-4xl">
            <p className="kicker">Services</p>
            <div className="mt-8 divide-y divide-[var(--brand-deep)]/20">
              <div className="flex items-center justify-between py-5 text-lg md:text-xl">
                <span>Brand Strategy</span>
                <span className="utility-mono text-[0.62rem] text-[var(--brand-olive)]">Reveal</span>
              </div>
              <div className="flex items-center justify-between py-5 text-lg md:text-xl">
                <span>Creative Direction</span>
                <span className="utility-mono text-[0.62rem] text-[var(--brand-olive)]">Reveal</span>
              </div>
              <div className="flex items-center justify-between py-5 text-lg md:text-xl">
                <span>Editorial Systems</span>
                <span className="utility-mono text-[0.62rem] text-[var(--brand-olive)]">Reveal</span>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell>
          <p className="kicker mb-8">Manifesto</p>
          <h2 className="editorial-display max-w-5xl text-4xl leading-[1.16] md:text-6xl lg:text-7xl">
            We build experiences that feel composed and human, where every frame serves the story.
          </h2>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-[var(--brand-deep)]/80 md:text-lg">
            Placeholder supporting statement for your philosophy and method.
          </p>
        </SectionShell>

        <SectionShell>
          <h2 className="editorial-display text-3xl md:text-5xl">Journal</h2>
          <div className="mt-12 max-w-3xl space-y-10">
            <article className="border-b border-[var(--brand-ink)]/25 pb-8">
              <p className="kicker">Strategy</p>
              <h3 className="mt-3 text-2xl leading-tight md:text-3xl">
                How pace and contrast shape a premium homepage
              </h3>
            </article>
            <article className="border-b border-[var(--brand-ink)]/25 pb-8">
              <p className="kicker">Design</p>
              <h3 className="mt-3 text-2xl leading-tight md:text-3xl">
                Placeholder editorial note on visual hierarchy and warmth
              </h3>
            </article>
          </div>
        </SectionShell>

        <SectionShell>
          <div className="max-w-2xl">
            <p className="kicker">Newsletter</p>
            <h2 className="editorial-display mt-5 text-3xl leading-tight md:text-5xl">
              Subscribe for occasional perspective and studio notes.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--brand-deep)]/80 md:text-lg">
              Placeholder copy for future Substack integration.
            </p>
            <NewsletterSignup />
          </div>
        </SectionShell>

        <footer className="section-shell flex items-center justify-between py-10 text-sm text-[var(--brand-olive)]">
          <p>© FIOS Studio</p>
          <p className="utility-mono text-[0.62rem]">Editorial Hybrid</p>
        </footer>
      </div>
    </main>
  );
}