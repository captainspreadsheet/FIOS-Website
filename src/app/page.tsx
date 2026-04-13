export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 text-neutral-900">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-14">
        {/* HERO */}
        <section className="grid gap-12 py-24 md:py-32 lg:grid-cols-12 lg:gap-10 lg:py-40">
          <div className="lg:col-span-7">
            <p className="mb-8 text-xs uppercase tracking-[0.28em] text-neutral-500">
              FIOS Studio
            </p>
            <h1 className="max-w-4xl text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              A cinematic brand world shaped through editorial rhythm and quiet precision.
            </h1>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
              Placeholder copy for positioning. This space can hold a warm, confident introduction that opens into the visual narrative.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-16">
            <div className="aspect-[4/5] w-full bg-stone-300" />
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="py-20 md:py-28 lg:py-36">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="text-3xl leading-tight tracking-tight md:text-5xl">Selected Work</h2>
            <p className="hidden text-xs uppercase tracking-[0.2em] text-neutral-500 md:block">
              Featured stories
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-12 md:gap-8 lg:gap-10">
            <article className="md:col-span-7">
              <div className="aspect-[5/6] w-full bg-stone-300" />
              <div className="mt-5 flex items-center justify-between text-sm text-neutral-600">
                <p>Campaign Narrative</p>
                <p>Placeholder</p>
              </div>
            </article>
            <article className="md:col-span-5 md:pt-16">
              <div className="aspect-[4/5] w-full bg-stone-400/80" />
              <div className="mt-5 flex items-center justify-between text-sm text-neutral-600">
                <p>Identity Study</p>
                <p>Placeholder</p>
              </div>
            </article>
            <article className="md:col-span-4 md:-mt-10">
              <div className="aspect-[3/4] w-full bg-stone-300/90" />
              <div className="mt-5 flex items-center justify-between text-sm text-neutral-600">
                <p>Editorial Build</p>
                <p>Placeholder</p>
              </div>
            </article>
            <article className="md:col-span-8">
              <div className="aspect-[16/9] w-full bg-stone-200" />
              <div className="mt-5 flex items-center justify-between text-sm text-neutral-600">
                <p>Launch Sequence</p>
                <p>Placeholder</p>
              </div>
            </article>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 md:py-24 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Services</p>
            <div className="mt-8 divide-y divide-neutral-300/60">
              <div className="flex items-center justify-between py-5 text-lg md:text-xl">
                <span>Brand Strategy</span>
                <span className="text-sm uppercase tracking-[0.12em] text-neutral-500">Placeholder</span>
              </div>
              <div className="flex items-center justify-between py-5 text-lg md:text-xl">
                <span>Creative Direction</span>
                <span className="text-sm uppercase tracking-[0.12em] text-neutral-500">Placeholder</span>
              </div>
              <div className="flex items-center justify-between py-5 text-lg md:text-xl">
                <span>Editorial Systems</span>
                <span className="text-sm uppercase tracking-[0.12em] text-neutral-500">Placeholder</span>
              </div>
            </div>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="py-24 md:py-32 lg:py-40">
          <p className="mb-8 text-xs uppercase tracking-[0.22em] text-neutral-500">Manifesto</p>
          <h2 className="max-w-5xl text-4xl leading-[1.18] tracking-tight md:text-6xl lg:text-7xl">
            We build brand experiences that feel composed, human, and enduring, where every decision serves the story and every visual breathes with intent.
          </h2>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Placeholder supporting line for philosophy, values, and point of view.
          </p>
        </section>

        {/* JOURNAL */}
        <section className="py-20 md:py-24 lg:py-28">
          <h2 className="text-3xl tracking-tight md:text-5xl">Journal</h2>
          <div className="mt-12 max-w-3xl space-y-10">
            <article className="border-b border-neutral-300/60 pb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Strategy</p>
              <h3 className="mt-3 text-2xl leading-tight md:text-3xl">How pace and contrast shape a premium homepage</h3>
            </article>
            <article className="border-b border-neutral-300/60 pb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Design</p>
              <h3 className="mt-3 text-2xl leading-tight md:text-3xl">Placeholder editorial note on visual hierarchy and warmth</h3>
            </article>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-24 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Newsletter</p>
            <h2 className="mt-5 text-3xl leading-tight tracking-tight md:text-5xl">Subscribe for occasional perspective and studio notes.</h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
              Placeholder copy for future integration.
            </p>
            <div className="mt-10 h-14 w-full max-w-xl bg-stone-200" />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="flex items-center justify-between border-t border-neutral-300/70 py-10 text-sm text-neutral-500">
          <p>© FIOS</p>
          <p>Placeholder location</p>
        </footer>
      </div>
    </main>
  );
}