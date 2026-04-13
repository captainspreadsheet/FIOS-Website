type MarqueeRowProps = {
  text: string[];
};

export function MarqueeRow({ text }: MarqueeRowProps) {
  const content = [...text, ...text];

  return (
    <div className="overflow-hidden border-y border-[var(--brand-ink)]/15 py-3">
      <div className="marquee utility-mono text-[0.62rem] text-[var(--brand-ink)]/70">
        {content.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
