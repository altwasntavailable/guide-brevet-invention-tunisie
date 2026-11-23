import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CircleDollarSign,
  FileCheck2,
  FileText,
  Landmark,
  Scale,
  ShieldCheck,
} from "lucide-react";
import CourseProgress from "@/components/CourseProgress";
import { keyFigures } from "@/lib/content";
import { guideNav } from "@/lib/navigation";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-200 bg-ink-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_80%_-10%,rgba(39,143,124,0.35),transparent_60%),radial-gradient(40rem_25rem_at_10%_110%,rgba(202,160,95,0.16),transparent_60%)]"
        />
        <div className="relative mx-auto grid max-w-content gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-sand-200">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
              Loi n° 2000-84 · Guide INNORPI · Tunisie
            </p>
            <h1 className="mt-6 text-balance font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Protégez votre invention, étape par étape.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-200">
              Un guide clair pour savoir ce qu'est un brevet d'invention, vérifier les conditions
              de brevetabilité, préparer le dossier exigé par l'INNORPI, anticiper les redevances
              et connaître vos droits après la délivrance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/guide/comprendre"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-950/30 transition-colors hover:bg-brand-400"
              >
                Commencer le parcours
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/loi"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Lire le texte de loi
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-300">
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-400" aria-hidden="true" />
                Contenu issu des deux PDF fournis
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-400" aria-hidden="true" />
                Textes et montants reproduits
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-400" aria-hidden="true" />
                Navigation accessible
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/95 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-7">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  L'essentiel
                </p>
                <span className="rounded-full bg-sand-100 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-sand-800">
                  À retenir
                </span>
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-3">
                {keyFigures.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-ink-100 bg-sand-50/70 p-4">
                    <dt className="text-xs font-medium text-ink-500">{item.label}</dt>
                    <dd className="mt-1 text-xl font-semibold tracking-tight text-ink-950">
                      {item.value}
                    </dd>
                    <p className="mt-1 text-[0.72rem] leading-4 text-ink-500">{item.detail}</p>
                  </div>
                ))}
              </dl>
              <div className="mt-5 rounded-xl bg-ink-950 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-sand-300">
                  Dépôt auprès de
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  INNORPI — département de la propriété industrielle
                </p>
                <p className="mt-1 text-xs leading-5 text-ink-300">
                  La loi désigne l'Organisme chargé de la propriété industrielle.
                </p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-4 hidden h-24 w-24 rounded-2xl border border-brand-400/30 bg-brand-500/10 lg:block"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="parcours-titre" className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Le parcours de création
            </p>
            <h2 id="parcours-titre" className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
              De l'idée au brevet en huit étapes
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-600">
              Chaque étape correspond à un chapitre du guide et aux articles de la loi. Votre
              progression est conservée dans votre navigateur.
            </p>
          </div>
          <Link
            href="/guide"
            className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 shadow-sm hover:border-brand-300 hover:text-brand-800"
          >
            Voir la vue d'ensemble
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guideNav.filter((item) => item.step).map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-2xl border border-ink-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold tabular-nums text-ink-400">
                    Étape {item.step}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold leading-6 text-ink-950 group-hover:text-brand-800">
                  {item.shortLabel}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-ink-600">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-700">
                  Consulter
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-ink-200 bg-white">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Ce que vous trouverez
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink-950">
              Un guide complet, sans jargon inutile
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-600">
              Le site reprend l'intégralité du contenu des deux PDF : le guide pratique du brevet
              d'invention et la loi n° 2000-84 du 24 août 2000, article par article.
            </p>
            <div className="mt-8">
              <CourseProgress variant="full" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: BookOpen,
                title: "Comprendre",
                text: "Définition de l'invention et du brevet, titularité, durée, inventions des salariés.",
                href: "/guide/comprendre",
              },
              {
                icon: ShieldCheck,
                title: "Vérifier",
                text: "Nouveauté, activité inventive, application industrielle et exclusions légales.",
                href: "/guide/brevetabilite",
              },
              {
                icon: FileText,
                title: "Déposer",
                text: "Pièces à fournir, langue, priorité, modifications, division et retrait.",
                href: "/guide/depot",
              },
              {
                icon: Landmark,
                title: "Suivre l'examen",
                text: "Contrôles de forme et de fond, publication, délivrance et recours.",
                href: "/guide/examen",
              },
              {
                icon: CircleDollarSign,
                title: "Payer",
                text: "Redevances de dépôt, revendications, priorité et annuités par tranches.",
                href: "/guide/couts",
              },
              {
                icon: Scale,
                title: "Défendre",
                text: "Droit exclusif, exceptions, exploitation obligatoire, déchéance et nullité.",
                href: "/guide/droits",
              },
              {
                icon: FileCheck2,
                title: "Licencier",
                text: "Licences contractuelles, obligatoires et d'office, cession et transmission.",
                href: "/guide/licences",
              },
              {
                icon: ShieldCheck,
                title: "Agir",
                text: "Contrefaçon, sanctions, preuve, mesures douanières et prescription.",
                href: "/guide/contrefacon",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-ink-100 bg-sand-50/60 p-5 transition-colors hover:border-brand-200 hover:bg-brand-50/60"
                >
                  <Icon className="h-5 w-5 text-brand-700" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-semibold text-ink-950">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink-600">{item.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-3xl border border-sand-300 bg-sand-100 p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand-800">
                Avant de commencer
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
                Une invention doit être une solution technique à un problème technique.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-700">
                Toute invention d'un produit ou d'un procédé de fabrication peut être protégée par
                un brevet. Mais toutes les créations ne sont pas brevetables : vérifiez les
                conditions et les exclusions avant de préparer votre dossier.
              </p>
            </div>
            <Link
              href="/guide/brevetabilite"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink-950 px-5 py-3.5 text-sm font-semibold text-white hover:bg-ink-800"
            >
              Vérifier la brevetabilité
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
