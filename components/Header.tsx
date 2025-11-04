"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Vue d'ensemble" },
  { id: "steps", label: "Feuille de route" },
  { id: "programs", label: "Formations" },
  { id: "funding", label: "Financements" },
  { id: "checklist", label: "Checklist Visa" },
  { id: "faq", label: "FAQ" }
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur transition ${
        scrolled ? "shadow" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#overview" className="font-heading text-lg font-semibold text-primary-700">
          Cap France | Renouvelables
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="transition hover:text-primary-600"
            >
              {section.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-focus transition hover:bg-primary-500"
        >
          Ressources
        </Link>
      </div>
    </header>
  );
};
