import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/course", label: "Course" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--brand-ink)]/15 bg-[var(--brand-cream)]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-6 py-4 md:px-10 lg:px-14">
        <Link href="/" className="utility-mono text-[0.66rem] text-[var(--brand-ink)]">
          FIOS STUDIO
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="utility-mono text-[0.62rem] text-[var(--brand-ink)]/75">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
