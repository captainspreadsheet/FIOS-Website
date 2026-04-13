export function NewsletterSignup() {
  return (
    <form className="mt-8 flex w-full max-w-xl flex-col gap-2 sm:flex-row sm:items-end" aria-label="Newsletter signup">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Your email"
        className="h-12 flex-1 rounded-[12px] border border-[var(--border-subtle)] bg-[var(--brand-cream)] px-4 text-sm placeholder:text-[var(--brand-ink)]/50"
      />
      <button type="button" className="pill-button utility-mono text-[0.66rem]">
        Subscribe
      </button>
    </form>
  );
}
