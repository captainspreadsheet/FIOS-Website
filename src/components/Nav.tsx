"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = ["Home", "About", "Services", "Portfolio", "Course", "Journal", "Contact"];

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="fixed left-0 top-0 z-[100] w-full border-b border-black/5 bg-[#F2EDE8] transition-all duration-[400ms] ease-in-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-8">
          <p
            className="text-xs tracking-[0.22em] text-[#1C1C1A]"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            FIA HOUSTON-HAMILTON
          </p>

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsOpen(true)}
            className="grid h-9 w-9 place-items-center"
          >
            <span className="flex w-6 flex-col gap-[5px]">
              <span className="h-[1.5px] w-6 bg-[#1C1C1A]" />
              <span className="h-[1.5px] w-6 bg-[#1C1C1A]" />
              <span className="h-[1.5px] w-6 bg-[#1C1C1A]" />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[110] bg-[#4A0E0E] transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
          className="absolute right-6 top-6 text-4xl leading-none text-[#F2EDE8]"
        >
          ×
        </button>

        <div className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
          {links.map((label, index) => (
            <Link
              key={label}
              href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`text-[#F2EDE8] transition-all duration-500 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "3.75rem",
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
