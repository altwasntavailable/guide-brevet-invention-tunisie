import Link from "next/link";
import { ArrowRight, CalendarClock, FileStack, ListChecks, ShieldCheck } from "lucide-react";
import CourseProgress from "@/components/CourseProgress";
import { guideNav } from "@/lib/navigation";

export const metadata = {
  title: "Le parcours de dépôt",
  description:
    "Les huit étapes pour comprendre, vérifier, préparer, déposer et exploiter un brevet d'invention en Tunisie.",
};

export default function GuidePage() {
  const steps = guideNav.filter((item) => item.step);

  return (
    <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          Le parcours
        </p>
        <h1 className="mt-3 text-balance font-serif text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
          De l'idée au brevet d'invention
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink-600">
          Ce parcours reprend l'ordre logique des démarches décrites dans le guide INNORPI et la
          loi n° 2000-84. Il ne remplace pas le texte officiel : chaque page renvoie aux articles
          applicables.
        </p>
      </header>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.href}
                className="group relative rounded-2xl border border-ink-200 bg-white p-5 shadow-sm transition-colors hover:border-brand-300 sm:p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                        Étape {step.step}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-ink-300" aria-hidden="true" />
                      <span className="text-xs text-ink-500">{step.shortLabel}</span>
                    </div>
                    <h2 className="mt-1 text-xl font-semibold tracking-tight text-ink-950">
                      <Link href={step.href} className="after:absolute after:inset-0 after:content-['']">
                        {step.label}
                      </Link>
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-600">
                      {step.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                      Ouvrir l'étape
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="space-y-4">
          <CourseProgress variant="full" />
          <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-ink-950">
              <ListChecks className="h-4 w-4 text-brand-700" aria-hidden="true" />
              À garder en tête
            </h2>
            <ul className="mt-3 space-y-3 text-sm text-ink-600">
              <li className="flex gap-2">
                <FileStack className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" aria-hidden="true" />
                La demande doit comporter une requête, une description, des revendications, les
                dessins nécessaires et un abrégé.
              </li>
              <li className="flex gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" aria-hidden="true" />
                Le brevet est délivré aux risques et périls du demandeur, sans garantie de l'État.
              </li>
              <li className="flex gap-2">
                <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" aria-hidden="true" />
                Les annuités se paient à la date anniversaire du dépôt, avec un délai de grâce de
                six mois.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-ink-950 p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sand-300">
              Checklist
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-200">
              Une liste imprimable pour vérifier les pièces et les échéances avant de déposer.
            </p>
            <Link
              href="/checklist"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-3.5 py-2 text-sm font-semibold text-white hover:bg-brand-400"
            >
              Ouvrir la checklist
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
