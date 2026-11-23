import Link from "next/link";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import ChecklistClient from "@/components/ChecklistClient";

export const metadata = {
  title: "Checklist de préparation du dossier",
  description:
    "Checklist imprimable des pièces, vérifications et démarches pour déposer une demande de brevet d'invention en Tunisie.",
};

export default function ChecklistPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="max-w-3xl">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
          Checklist
        </p>
        <h1 className="mt-3 text-balance font-serif text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
          Vérifiez votre dossier avant de déposer
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink-600">
          Une synthèse opérationnelle des exigences du guide INNORPI et de la loi. Cochez les points
          au fur et à mesure ; la progression est conservée dans votre navigateur.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <ChecklistClient />

        <aside className="no-print space-y-4">
          <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-ink-950">Où déposer ?</h2>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Auprès du département de la propriété industrielle de l'INNORPI. Les non-résidents
              doivent être représentés par un mandataire domicilié en Tunisie.
            </p>
            <Link
              href="/guide/depot"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 underline underline-offset-4"
            >
              Détail des pièces
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-2xl border border-sand-200 bg-sand-100/70 p-5">
            <h2 className="text-sm font-semibold text-ink-900">À ne pas oublier</h2>
            <ul className="mt-2 space-y-2 text-xs leading-5 text-ink-600">
              <li>Description et revendications en double exemplaire.</li>
              <li>Pouvoir du mandataire sans légalisation, s'il y a lieu.</li>
              <li>Paiement des redevances de dépôt.</li>
              <li>Copie certifiée de la demande antérieure sous trois mois en cas de priorité.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
