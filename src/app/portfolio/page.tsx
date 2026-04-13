import Link from "next/link";
import { SectionShell } from "@/components/site/SectionShell";

const projects = [
  { slug: "maison-noir", title: "Maison Noir", tone: "bg-[var(--brand-blush)]" },
  { slug: "rey-collective", title: "Rey Collective", tone: "bg-[var(--brand-gold)]" },
  { slug: "pink-vintage", title: "Pink Vintage", tone: "bg-[var(--brand-olive)]/70" },
  { slug: "atelier-north", title: "Atelier North", tone: "bg-[var(--brand-deep)]/15" },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-14">
        <SectionShell>
          <p className="kicker mb-6">Portfolio</p>
          <h1 className="editorial-display max-w-4xl text-4xl leading-tight md:text-6xl">
            A staggered index of narrative-first projects.
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-12">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className={`group ${index % 2 === 0 ? "md:col-span-7" : "md:col-span-5 md:pt-14"}`}
              >
                <div className={`aspect-[4/5] w-full ${project.tone}`} />
                <div className="mt-4 flex items-center justify-between">
                  <h2 className="text-2xl">{project.title}</h2>
                  <span className="utility-mono text-[0.62rem] text-[var(--brand-olive)]">View</span>
                </div>
              </Link>
            ))}
          </div>
        </SectionShell>
      </div>
    </main>
  );
}
