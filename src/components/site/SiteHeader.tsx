"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/course", label: "Course" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-[var(--brand-cream)]/92 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[var(--container-max)] items-center justify-between px-5 py-4 md:px-8 lg:px-10">
        <Link href="/" className="utility-mono text-[0.66rem] text-[var(--brand-ink)]">
          FIOS STUDIO
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`utility-mono border-b pb-1 text-[0.62rem] transition ${
                pathname === link.href
                  ? "border-[var(--brand-deep)] text-[var(--brand-deep)]"
                  : "border-transparent text-[var(--brand-ink)]/78 hover:text-[var(--brand-ink)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
