export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-neutral-900">

      {/* HERO */}
      <section className="px-6 py-32 md:px-12">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
          FIOS
        </p>
        <h1 className="max-w-4xl text-5xl leading-tight md:text-7xl">
          A premium editorial experience built with clarity, restraint, and depth.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-neutral-600">
          Placeholder copy for your positioning. This will evolve, but the structure stays.
        </p>
      </section>

      {/* SELECTED WORK */}
      <section className="border-t border-neutral-200 px-6 py-24 md:px-12">
        <h2 className="text-2xl md:text-4xl">Selected Work</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="aspect-[4/5] bg-neutral-200" />
          <div className="aspect-[4/5] bg-neutral-300 md:translate-y-12" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-neutral-200 px-6 py-24 md:px-12">
        <h2 className="text-2xl md:text-4xl">Services</h2>
        <div className="mt-10 space-y-6">
          <div className="flex justify-between border-b border-neutral-300 pb-4">
            <span>Strategy</span>
            <span className="text-neutral-500">Placeholder</span>
          </div>
          <div className="flex justify-between border-b border-neutral-300 pb-4">
            <span>Creative Direction</span>
            <span className="text-neutral-500">Placeholder</span>
          </div>
          <div className="flex justify-between border-b border-neutral-300 pb-4">
            <span>Editorial Systems</span>
            <span className="text-neutral-500">Placeholder</span>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-t border-neutral-200 px-6 py-32 md:px-12">
        <h2 className="max-w-3xl text-3xl leading-relaxed md:text-5xl">
          This is where your philosophy lives. It should feel editorial, considered, and intentional.
        </h2>
      </section>

      {/* JOURNAL */}
      <section className="border-t border-neutral-200 px-6 py-24 md:px-12">
        <h2 className="text-2xl md:text-4xl">Journal</h2>
        <div className="mt-10 space-y-6">
          <div>
            <p className="text-sm text-neutral-500">Strategy</p>
            <h3 className="text-xl">Example article title goes here</h3>
          </div>
          <div>
            <p className="text-sm text-neutral-500">Design</p>
            <h3 className="text-xl">Another article title placeholder</h3>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-neutral-200 px-6 py-32 md:px-12">
        <h2 className="text-2xl md:text-4xl">Subscribe</h2>
        <p className="mt-4 max-w-xl text-neutral-600">
          Placeholder for Substack integration.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 px-6 py-12 md:px-12">
        <p className="text-sm text-neutral-500">
          © FIOS
        </p>
      </footer>

    </main>
  );
}