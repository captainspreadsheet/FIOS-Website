import { SectionShell } from "@/components/site/SectionShell";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-[var(--container-max)] px-5 md:px-8 lg:px-10">
        <SectionShell>
          <div className="mx-auto w-full max-w-3xl">
            <p className="kicker mb-6">Contact</p>
            <h1 className="editorial-display text-4xl leading-tight md:text-6xl">
              Let’s build something with clarity, tension, and emotional depth.
            </h1>
            <form className="mt-10 space-y-5 rounded-[16px] border border-[var(--border-subtle)] bg-[var(--brand-cream)] p-8">
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Name"
                className="w-full border-b border-[var(--border-subtle)] bg-transparent px-1 pb-3 placeholder:text-[var(--brand-ink)]/55"
              />
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="Email"
                className="w-full border-b border-[var(--border-subtle)] bg-transparent px-1 pb-3 placeholder:text-[var(--brand-ink)]/55"
              />
              <label htmlFor="contact-project-details" className="sr-only">
                Project details
              </label>
              <textarea
                id="contact-project-details"
                placeholder="Project details"
                rows={5}
                className="w-full border-b border-[var(--border-subtle)] bg-transparent px-1 pb-3 placeholder:text-[var(--brand-ink)]/55"
              />
              <button type="button" className="pill-button utility-mono text-[0.62rem]">
                Send Inquiry
              </button>
            </form>
          </div>
        </SectionShell>
      </div>
    </main>
  );
}
