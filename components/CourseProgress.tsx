"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import { courseSteps } from "@/lib/navigation";

const STORAGE_KEY = "parcours-brevet-progression";

function readProgress(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export default function CourseProgress({ variant = "compact" }: { variant?: "compact" | "full" }) {
  const [done, setDone] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDone(readProgress());
    setReady(true);
  }, []);

  function toggle(slug: string) {
    setDone((current) => {
      const next = current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug];
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Le stockage local peut être indisponible : la progression reste en mémoire.
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

  const percent = useMemo(
    () => Math.round((done.length / courseSteps.length) * 100),
    [done.length],
  );

  if (variant === "full") {
    return (
      <section
        aria-labelledby="progression-titre"
        className="rounded-2xl border border-ink-200 bg-white p-5 shadow-card sm:p-6"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              Votre parcours
            </p>
            <h2 id="progression-titre" className="mt-1 text-lg font-semibold text-ink-950">
              {ready ? `${done.length} étape${done.length > 1 ? "s" : ""} sur ${courseSteps.length} validée${done.length > 1 ? "s" : ""}` : "Progression"}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-semibold tabular-nums text-ink-950">{percent}%</span>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 px-2.5 py-1.5 text-xs font-medium text-ink-600 hover:bg-ink-50"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Réinitialiser
            </button>
          </div>
        </div>

        <div
          className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-ink-100"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progression dans le parcours de dépôt"
        >
          <div
            className="h-full rounded-full bg-brand-600 transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>

        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {courseSteps.map((step, index) => {
            const isDone = done.includes(step.slug);
            return (
              <li key={step.slug}>
                <div className="flex items-center gap-3 rounded-xl border border-ink-100 bg-sand-50/60 p-3">
                  <button
                    type="button"
                    onClick={() => toggle(step.slug)}
                    aria-pressed={isDone}
                    aria-label={`${isDone ? "Décocher" : "Valider"} l'étape ${step.title}`}
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                      isDone
                        ? "border-brand-600 bg-brand-600 text-white"
                        : "border-ink-300 bg-white text-ink-500 hover:border-brand-500"
                    }`}
                  >
                    {isDone ? <Check className="h-4 w-4" /> : index + 1}
                  </button>
                  <div className="min-w-0">
                    <Link
                      href={step.href}
                      className={`block text-sm font-semibold hover:text-brand-700 ${
                        isDone ? "text-ink-500 line-through" : "text-ink-900"
                      }`}
                    >
                      {step.title}
                    </Link>
                    <p className="truncate text-xs text-ink-500">{step.summary}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-xs text-ink-500">
          Votre progression est enregistrée dans votre navigateur (stockage local). Aucune donnée
          n'est envoyée à un serveur.
        </p>
      </section>
    );
  }

  return (
    <div className="rounded-xl border border-ink-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
          Parcours de dépôt
        </p>
        <span className="text-xs font-semibold tabular-nums text-brand-700">{percent}%</span>
      </div>
      <div
        className="mt-2 h-2 w-full overflow-hidden rounded-full bg-ink-100"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progression dans le parcours de dépôt"
      >
        <div
          className="h-full rounded-full bg-brand-600 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-2 text-xs leading-5 text-ink-500">
        {ready
          ? `${done.length}/${courseSteps.length} étapes validées. `
          : "Suivez les étapes et cochez-les au fil de votre avancement. "}
        <Link href="/guide" className="font-medium text-brand-700 underline underline-offset-2">
          Voir le parcours
        </Link>
      </p>
    </div>
  );
}
