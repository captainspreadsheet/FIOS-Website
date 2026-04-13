import { SectionShell } from "@/components/site/SectionShell";

const services = [
  {
    title: "Brand Strategy",
    description: "Placeholder scope: positioning, messaging direction, and strategic narrative architecture.",
  },
  {
    title: "Creative Direction",
    description: "Placeholder scope: visual language, campaign art direction, and brand world cohesion.",
  },
  {
    title: "Editorial Systems",
    description: "Placeholder scope: web hierarchy, content cadence, and premium storytelling templates.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-[var(--container-max)] px-5 md:px-8 lg:px-10">
        <SectionShell>
          <p className="kicker mb-6">Services</p>
          <h1 className="editorial-display max-w-4xl text-4xl leading-tight md:text-6xl">
            Structured creative services for brands that want resonance, not noise.
          </h1>
          <div className="mt-12 divide-y divide-[var(--border-subtle)]">
            {services.map((service) => (
              <details key={service.title} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-2xl">
                  {service.title}
                  <span className="utility-mono text-[0.62rem] text-[var(--brand-ink)]/68 group-open:hidden">Reveal</span>
                  <span className="utility-mono hidden text-[0.62rem] text-[var(--brand-ink)]/68 group-open:block">Close</span>
                </summary>
                <p className="mt-4 max-w-3xl text-[var(--brand-deep)]/85">{service.description}</p>
              </details>
            ))}
          </div>
        </SectionShell>
      </div>
    </main>
  );
}
