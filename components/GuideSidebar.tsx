"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { guideNav } from "@/lib/navigation";

export default function GuideSidebar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Sommaire du guide" className="lg:sticky lg:top-24">
      <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-sm">
        <p className="px-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
          Sommaire du guide
        </p>
        <ul className="mt-3 space-y-1">
          {guideNav.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group flex items-start gap-3 rounded-lg px-2 py-2 text-sm transition-colors ${
                    active
                      ? "bg-brand-50 text-brand-800"
                      : "text-ink-700 hover:bg-ink-50 hover:text-ink-950"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[0.68rem] font-semibold ${
                      active
                        ? "bg-brand-600 text-white"
                        : "bg-ink-100 text-ink-600 group-hover:bg-ink-200"
                    }`}
                  >
                    {item.step ?? <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
                  </span>
                  <span className="leading-5">{item.shortLabel ?? item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-4 rounded-2xl border border-brand-200 bg-brand-50 p-4">
        <p className="flex items-center gap-2 text-sm font-semibold text-brand-900">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          Avant de déposer
        </p>
        <p className="mt-1.5 text-xs leading-5 text-brand-800">
          Vérifiez les conditions de brevetabilité et réunissez toutes les pièces exigées.
        </p>
        <Link
          href="/checklist"
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-800 underline underline-offset-4 hover:text-brand-900"
        >
          Ouvrir la checklist
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-4 flex items-center justify-between px-1 text-xs text-ink-500">
        <Link href="/guide" className="inline-flex items-center gap-1 hover:text-brand-700">
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Vue d'ensemble
        </Link>
        <Link href="/loi" className="inline-flex items-center gap-1 hover:text-brand-700">
          Texte de loi
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
}
