import { SectionShell } from "@/components/site/SectionShell";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-14">
        <SectionShell>
          <div className="mx-auto w-full max-w-3xl">
            <p className="kicker mb-6">Contact</p>
            <h1 className="editorial-display text-4xl leading-tight md:text-6xl">
              Let’s build something with clarity, tension, and emotional depth.
            </h1>
            <form className="mt-10 space-y-5 border border-[var(--brand-ink)]/20 bg-[var(--brand-cream)] p-8">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-[var(--brand-ink)]/40 bg-transparent px-1 pb-3 outline-none placeholder:text-[var(--brand-ink)]/55"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-[var(--brand-ink)]/40 bg-transparent px-1 pb-3 outline-none placeholder:text-[var(--brand-ink)]/55"
              />
              <textarea
                placeholder="Project details"
                rows={5}
                className="w-full border-b border-[var(--brand-ink)]/40 bg-transparent px-1 pb-3 outline-none placeholder:text-[var(--brand-ink)]/55"
              />
              <button type="button" className="utility-mono bg-[var(--brand-deep)] px-5 py-3 text-[0.62rem] text-[var(--brand-cream)]">
                Send Inquiry
              </button>
            </form>
          </div>
        </SectionShell>
      </div>
    </main>
  );
}
