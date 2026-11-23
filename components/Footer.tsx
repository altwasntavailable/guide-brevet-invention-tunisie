import Link from "next/link";
import { Info, Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-200 bg-ink-950 text-ink-200">
      <div className="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white">
                <Scale className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-base font-semibold text-white">Guide du brevet d'invention</p>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-ink-300">
              Un guide pratique en français pour comprendre, préparer et déposer une demande de
              brevet d'invention en Tunisie, à partir de la loi n° 2000-84 du 24 août 2000 et du
              guide INNORPI fournis.
            </p>
          </div>

          <nav aria-label="Plan du site">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sand-300">
              Explorer
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link className="hover:text-white" href="/guide">Le parcours</Link></li>
              <li><Link className="hover:text-white" href="/guide/comprendre">Comprendre le brevet</Link></li>
              <li><Link className="hover:text-white" href="/guide/couts">Coûts et délais</Link></li>
              <li><Link className="hover:text-white" href="/loi">Texte de loi</Link></li>
              <li><Link className="hover:text-white" href="/faq">FAQ</Link></li>
              <li><Link className="hover:text-white" href="/checklist">Checklist</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sand-300">
              Source de vérité
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-300">
              <li>Loi n° 2000-84 du 24 août 2000 relative aux brevets d'invention.</li>
              <li>Guide « Le brevet d'invention » — INNORPI.</li>
              <li>Journal Officiel de la République Tunisienne, n° 68 du 25 août 2000.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink-800 pt-6 text-xs text-ink-400 sm:flex-row sm:items-start sm:justify-between">
          <p>
            © {new Date().getFullYear()} Guide du brevet d'invention. Site informatif, sans
            valeur de conseil juridique.
          </p>
          <p className="inline-flex max-w-xl items-start gap-2">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-sand-400" aria-hidden="true" />
            <span>
              Les montants et délais reproduisent les documents sources. Seul le texte officiel
              fait foi ; vérifiez toute évolution réglementaire auprès de l'INNORPI.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
