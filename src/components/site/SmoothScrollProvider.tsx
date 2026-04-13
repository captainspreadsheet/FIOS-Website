"use client";

import { ReactNode, useEffect } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.style.scrollBehavior = "smooth";

    return () => {
      root.style.scrollBehavior = "";
    };
  }, []);

  return <>{children}</>;
}
