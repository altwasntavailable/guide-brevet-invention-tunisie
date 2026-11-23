"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Printer, RotateCcw } from "lucide-react";
import { checklistGroups } from "@/lib/content";

const STORAGE_KEY = "checklist-brevet";

export default function ChecklistClient() {
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      if (Array.isArray(parsed)) setDone(parsed.filter((item) => typeof item === "string"));
    } catch {
      // Stockage local indisponible : la checklist reste utilisable en mémoire.
    }
  }, []);

  const allItems = useMemo(
    () => checklistGroups.flatMap((group) => group.items.map((item) => `${group.title}::${item}`)),
    [],
  );

  const total = allItems.length;
  const percent = Math.round((done.length / total) * 100);

  function toggle(key: string) {
    setDone((current) => {
      const next = current.includes(key)
        ? current.filter((item) => item !== key)
        : [...current, key];
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ignoré volontairement.
      }
      return next;
    });
  }

  function reset() {
    setDone([]);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignoré volontairement.
    }
  }

  return (
    <div>
      <div className="no-print sticky top-[4.5rem] z-30 mb-6 rounded-2xl border border-ink-200 bg-white/95 p-4 shadow-sm backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-[12rem] flex-1">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-ink-900">Progression de la checklist</p>
              <span className="text-sm font-semibold tabular-nums text-brand-700">
                {done.length}/{total}
              </span>
            </div>
            <div
              className="mt-2 h-2 w-full overflow-hidden rounded-full bg-ink-100"
              role="progressbar"
              aria-valuenow={percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progression de la checklist"
            >
              <div
                className="h-full rounded-full bg-brand-600 transition-all duration-300"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 px-3 py-2 text-xs font-medium text-ink-600 hover:bg-ink-50"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Réinitialiser
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-ink-950 px-3 py-2 text-xs font-semibold text-white hover:bg-ink-800"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              Imprimer
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {checklistGroups.map((group) => {
          const groupDone = group.items.filter((item) => done.includes(`${group.title}::${item}`)).length;
          return (
            <section
              key={group.title}
              aria-labelledby={`groupe-${group.title.replace(/\s/g, "-")}`}
              className="print-break-avoid rounded-2xl border border-ink-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2
                  id={`groupe-${group.title.replace(/\s/g, "-")}`}
                  className="text-lg font-semibold tracking-tight text-ink-950"
                >
                  {group.title}
                </h2>
                <span className="rounded-full bg-sand-100 px-2.5 py-1 text-xs font-medium text-sand-800">
                  {groupDone}/{group.items.length}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => {
                  const key = `${group.title}::${item}`;
                  const checked = done.includes(key);
                  return (
                    <li key={key}>
                      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-transparent p-2 transition-colors hover:border-ink-100 hover:bg-sand-50/70">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(key)}
                          className="peer sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand-500 ${
                            checked
                              ? "border-brand-600 bg-brand-600 text-white"
                              : "border-ink-300 bg-white text-transparent"
                          }`}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span
                          className={`text-sm leading-6 ${
                            checked ? "text-ink-400 line-through" : "text-ink-700"
                          }`}
                        >
                          {item}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>

      <p className="no-print mt-6 text-xs leading-5 text-ink-500">
        La checklist est enregistrée dans votre navigateur (stockage local). Elle ne remplace pas
        les formulaires officiels de l'INNORPI.
      </p>
    </div>
  );
}
