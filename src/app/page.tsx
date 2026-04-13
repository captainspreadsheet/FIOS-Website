import Link from "next/link";
import { LineReveal } from "@/components/site/LineReveal";
import { MarqueeRow } from "@/components/site/MarqueeRow";
import { NewsletterSignup } from "@/components/site/NewsletterSignup";
import { SectionShell } from "@/components/site/SectionShell";

export default function Home() {
  const bannerLinks = [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#course", label: "Course" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <main id="top" className="min-h-screen bg-[var(--brand-cream)] text-[var(--brand-ink)]">
      <section className="relative min-h-[calc(100vh-65px)] overflow-hidden border-b border-[var(--brand-ink)]/15">
        <div className="absolute inset-0 bg-[linear-gradient(140deg,var(--brand-deep),var(--brand-ink)_35%,var(--brand-gold)_95%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(230,196,188,0.22),transparent_52%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(239,238,234,0.18),transparent_50%)]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-65px)] w-full max-w-[1500px] flex-col justify-end px-6 py-14 md:px-10 md:py-16 lg:px-14 lg:py-20">
          <p className="utility-mono text-[0.62rem] text-[var(--brand-cream)]/85">FIOS Studio</p>
          <h1 className="editorial-display mt-5 max-w-4xl text-4xl leading-[1.04] text-[var(--brand-cream)] sm:text-5xl md:text-7xl lg:text-8xl">
            Design that tells your story and makes people feel something.
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-[var(--brand-cream)]/85 sm:text-base md:text-lg">
            Placeholder hero shot space. Replace with your final image and this overlay keeps the cinematic lead-in.
          </p>
          <div className="mt-8 md:mt-10">
            <Link href="#homepage-banner" className="utility-mono text-[0.64rem] text-[var(--brand-cream)]">
              Scroll
            </Link>
          </div>
        </div>
      </section>

      <section
        id="homepage-banner"
        className="sticky top-[64px] z-30 border-b border-[var(--brand-ink)]/15 bg-[var(--brand-cream)]/95 backdrop-blur"
      >
        <div className="mx-auto flex w-full max-w-[1500px] flex-wrap items-center gap-x-4 gap-y-2 px-6 py-3 md:gap-x-6 md:px-10 md:py-4 lg:px-14">
          {bannerLinks.map((linkItem) => (
            <Link
              key={linkItem.label}
              href={linkItem.href}
              className="utility-mono text-[0.62rem] text-[var(--brand-ink)]/80 transition hover:text-[var(--brand-deep)]"
            >
              {linkItem.label}
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-14">
        <MarqueeRow text={["Intentional", "Editorial", "Warm", "Weighted", "Studio-Led", "Cinematic"]} />

        <SectionShell id="portfolio" className="pt-14 md:pt-20">
          <div className="mb-12 grid items-end gap-6 md:grid-cols-12">
            <h2 className="editorial-display text-4xl leading-tight md:col-span-8 md:text-6xl">
              Our Work Speaks For Itself
            </h2>
            <p className="md:col-span-4 text-base text-[var(--brand-deep)]/80">
              Placeholder supporting paragraph for your curated portfolio introduction.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            <article className="border border-[var(--brand-ink)]/20 bg-[var(--brand-cream)] p-4">
              <div className="image-reveal">
                <div className="aspect-[3/4] w-full bg-[var(--brand-blush)]" />
              </div>
              <h3 className="mt-4 text-2xl text-[var(--brand-deep)] md:text-3xl">Pink Vintage</h3>
            </article>
            <article className="border border-[var(--brand-ink)]/20 bg-[var(--brand-cream)] p-4">
              <div className="image-reveal">
                <div className="aspect-[3/4] w-full bg-[var(--brand-gold)]" />
              </div>
              <h3 className="mt-4 text-2xl text-[var(--brand-deep)] md:text-3xl">Rey Collective</h3>
            </article>
            <article className="border border-[var(--brand-ink)]/20 bg-[var(--brand-cream)] p-4">
              <div className="image-reveal">
                <div className="aspect-[3/4] w-full bg-[var(--brand-ink)]/15" />
              </div>
              <h3 className="mt-4 text-2xl text-[var(--brand-deep)] md:text-3xl">Maison Noir</h3>
            </article>
          </div>
          <Link
            href="/portfolio"
            className="utility-mono mt-10 block w-full rounded-full border border-[var(--brand-deep)]/35 bg-[var(--brand-blush)] px-7 py-5 text-center text-[0.74rem] text-[var(--brand-deep)]"
          >
            View The Projects
          </Link>
        </SectionShell>

        <SectionShell id="services">
          <div className="mb-10 flex flex-wrap items-start justify-between gap-5">
            <h2 className="editorial-display text-4xl leading-tight text-[var(--brand-deep)] md:text-6xl">
              Our Signature Services
            </h2>
            <p className="utility-mono max-w-[220px] text-[0.62rem] leading-relaxed text-[var(--brand-deep)]/80">
              A full suite of creative solutions to bring your brand to life.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <article className="relative mx-auto w-full max-w-[22rem] pt-16 md:pt-20">
              <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full border border-[var(--brand-ink)]/20 bg-[var(--brand-gold)] md:h-36 md:w-36" />
              <div className="rounded-t-[6rem] bg-[var(--brand-deep)] px-5 pb-7 pt-16 text-center text-[var(--brand-cream)] md:rounded-t-[7rem] md:px-6 md:pb-8 md:pt-20">
                <h3 className="text-2xl leading-tight md:text-3xl">Social Strategy & Creation</h3>
                <p className="mt-3 text-sm text-[var(--brand-cream)]/85 md:mt-4">
                  Placeholder copy for service summary and ideal client outcomes.
                </p>
                <button className="utility-mono mt-5 w-full rounded-full border border-[var(--brand-cream)]/60 bg-[var(--brand-blush)] px-6 py-3 text-[0.62rem] text-[var(--brand-deep)] md:mt-6 md:w-auto md:px-7 md:py-4 md:text-[0.64rem]">
                  Learn More
                </button>
              </div>
            </article>
            <article className="relative mx-auto w-full max-w-[22rem] pt-16 md:pt-20">
              <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full border border-[var(--brand-ink)]/20 bg-[var(--brand-blush)] md:h-36 md:w-36" />
              <div className="rounded-t-[6rem] border border-[var(--brand-deep)]/20 bg-[var(--brand-cream)] px-5 pb-7 pt-16 text-center md:rounded-t-[7rem] md:px-6 md:pb-8 md:pt-20">
                <h3 className="text-2xl leading-tight text-[var(--brand-deep)] md:text-3xl">Brand Story & Strategy</h3>
                <p className="mt-3 text-sm text-[var(--brand-deep)]/80 md:mt-4">
                  Placeholder copy for positioning work, messaging, and editorial voice.
                </p>
                <button className="utility-mono mt-5 w-full rounded-full border border-[var(--brand-deep)]/30 bg-[var(--brand-blush)] px-6 py-3 text-[0.62rem] text-[var(--brand-deep)] md:mt-6 md:w-auto md:px-7 md:py-4 md:text-[0.64rem]">
                  Learn More
                </button>
              </div>
            </article>
            <article className="relative mx-auto w-full max-w-[22rem] pt-16 md:pt-20">
              <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full border border-[var(--brand-ink)]/20 bg-[var(--brand-olive)]/65 md:h-36 md:w-36" />
              <div className="rounded-t-[6rem] bg-[var(--brand-deep)] px-5 pb-7 pt-16 text-center text-[var(--brand-cream)] md:rounded-t-[7rem] md:px-6 md:pb-8 md:pt-20">
                <h3 className="text-2xl leading-tight md:text-3xl">Experience & Campaign Design</h3>
                <p className="mt-3 text-sm text-[var(--brand-cream)]/85 md:mt-4">
                  Placeholder copy for launches, campaigns, and conversion-focused design.
                </p>
                <button className="utility-mono mt-5 w-full rounded-full border border-[var(--brand-cream)]/60 bg-[var(--brand-blush)] px-6 py-3 text-[0.62rem] text-[var(--brand-deep)] md:mt-6 md:w-auto md:px-7 md:py-4 md:text-[0.64rem]">
                  Learn More
                </button>
              </div>
            </article>
          </div>
        </SectionShell>

        <SectionShell id="blog">
          <h2 className="editorial-display text-5xl leading-[1.02] text-[var(--brand-deep)] md:text-7xl">
            The Full Archive:
          </h2>
          <p className="editorial-display mt-2 text-3xl italic text-[var(--brand-deep)]/90 md:text-5xl">
            all posts - from day one to now
          </p>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            <article>
              <div className="aspect-[4/3] rounded-[2.2rem] bg-[var(--brand-ink)]/12" />
              <p className="utility-mono mt-6 text-[0.62rem] text-[var(--brand-deep)]">Entrepreneurship</p>
              <h3 className="mt-3 text-4xl leading-tight text-[var(--brand-deep)]">Turning Ideas Into Action</h3>
            </article>
            <article>
              <div className="aspect-[4/3] rounded-[2.2rem] bg-[var(--brand-gold)]/65" />
              <p className="utility-mono mt-6 text-[0.62rem] text-[var(--brand-deep)]">Courses & Learning</p>
              <h3 className="mt-3 text-4xl leading-tight text-[var(--brand-deep)]">Step-By-Step Strategy Tips</h3>
            </article>
            <article>
              <div className="aspect-[4/3] rounded-[2.2rem] bg-[var(--brand-blush)]" />
              <p className="utility-mono mt-6 text-[0.62rem] text-[var(--brand-deep)]">Tips & Tutorials</p>
              <h3 className="mt-3 text-4xl leading-tight text-[var(--brand-deep)]">How To Plan Your Content</h3>
            </article>
          </div>
        </SectionShell>

        <SectionShell id="about">
          <div className="max-w-2xl">
            <p className="kicker">Manifesto</p>
            <h2 className="editorial-display mt-5 text-3xl leading-tight md:text-5xl">
              Design that feels cinematic, strategic, and unmistakably yours.
            </h2>
            <LineReveal
              className="mt-6 max-w-xl space-y-2 text-base text-[var(--brand-deep)]/80 md:text-lg"
              lines={[
                "Placeholder narrative introducing your lens and creative philosophy.",
                "Built to feel tactile like print, but fluid like a contemporary studio.",
              ]}
            />
            <NewsletterSignup />
            <div id="course" className="mt-10 border-t border-[var(--brand-ink)]/20 pt-8">
              <p className="kicker">Course</p>
              <h3 className="editorial-display mt-3 text-3xl text-[var(--brand-deep)] md:text-4xl">
                A structured learning experience for building your brand world.
              </h3>
              <p className="mt-4 max-w-xl text-[var(--brand-deep)]/80">
                Placeholder course summary block to keep the full homepage narrative connected.
              </p>
            </div>
            <div className="mt-8">
              <Link href="#contact" className="utility-mono text-[0.64rem] text-[var(--brand-ink)]/75">
                Start Here
              </Link>
            </div>
          </div>
        </SectionShell>

        <footer id="contact" className="section-shell flex items-center justify-between py-10 text-sm text-[var(--brand-olive)]">
          <p>© FIOS Studio</p>
          <p className="utility-mono text-[0.62rem]">Editorial Hybrid</p>
        </footer>
      </div>
    </main>
  );
}