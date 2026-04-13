export function NewsletterSignup() {
  return (
    <form className="mt-8 flex w-full max-w-xl overflow-hidden border border-[var(--brand-ink)]/25">
      <input
        type="email"
        placeholder="Your email"
        className="h-14 flex-1 bg-[var(--brand-cream)] px-4 text-sm outline-none placeholder:text-[var(--brand-ink)]/50"
      />
      <button
        type="button"
        className="utility-mono h-14 bg-[var(--brand-deep)] px-6 text-[0.66rem] text-[var(--brand-cream)]"
      >
        Subscribe
      </button>
    </form>
  );
}
