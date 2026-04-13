import Image from "next/image";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/hero.png"
          alt="Hero image"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(20,12,8,0.25)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1
            className="whitespace-nowrap text-center text-[clamp(2.8rem,6vw,7rem)] text-[#F2EDE8]"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontStyle: "italic",
              letterSpacing: "0.15em",
            }}
          >
            FIA HOUSTON-HAMILTON
          </h1>
        </div>
      </section>
    </main>
  );
}