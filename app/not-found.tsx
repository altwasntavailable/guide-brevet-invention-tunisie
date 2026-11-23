import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
        <Compass className="h-7 w-7" aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-ink-950">
        Page introuvable
      </h1>
      <p className="mt-3 text-base leading-7 text-ink-600">
        Cette page n'existe pas ou a été déplacée. Revenez au parcours pour trouver l'étape qui vous
        intéresse.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/guide"
          className="inline-flex items-center gap-2 rounded-xl bg-ink-950 px-5 py-3 text-sm font-semibold text-white hover:bg-ink-800"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Revenir au parcours
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-5 py-3 text-sm font-semibold text-ink-700 hover:border-brand-300"
        >
          Accueil
        </Link>
      </div>
    </div>
  );
}
