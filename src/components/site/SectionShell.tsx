import { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({ id, className = "", children }: SectionShellProps) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      {children}
    </section>
  );
}
