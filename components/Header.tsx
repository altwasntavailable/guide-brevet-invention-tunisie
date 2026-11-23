"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import { mainNav } from "@/lib/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Ferme le menu à chaque changement de page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-sand-50/90 backdrop-blur-md">
      <div className="mx-auto flex h-[var(--header-height)] max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-xl py-1"
          aria-label="Guide du brevet d'invention en Tunisie — Accueil"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-950 text-sand-100 shadow-sm transition-colors group-hover:bg-brand-700">
            <Scale className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700">
              Tunisie
            </span>
            <span className="block text-base font-semibold tracking-tight text-ink-950">
              Guide du brevet d'invention
            </span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive(pathname, item.href)
                  ? "bg-ink-950 text-white"
                  : "text-ink-700 hover:bg-ink-100 hover:text-ink-950"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/checklist"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            Préparer mon dossier
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-800 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          className="border-t border-ink-100 bg-sand-50 px-4 pb-5 pt-3 md:hidden"
        >
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={`block rounded-lg px-3 py-3 text-base font-medium ${
                    isActive(pathname, item.href)
                      ? "bg-ink-950 text-white"
                      : "text-ink-800 hover:bg-ink-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/checklist"
            className="mt-4 block rounded-lg bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-700"
          >
            Préparer mon dossier
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
