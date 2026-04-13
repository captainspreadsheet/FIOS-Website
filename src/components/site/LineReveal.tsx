import { CSSProperties } from "react";

type LineRevealProps = {
  lines: string[];
  className?: string;
};

export function LineReveal({ lines, className = "" }: LineRevealProps) {
  return (
    <div className={className}>
      {lines.map((line, index) => (
        <p
          key={`${line}-${index}`}
          className="line-reveal"
          style={{ "--line-delay": `${index * 120}ms` } as CSSProperties}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
