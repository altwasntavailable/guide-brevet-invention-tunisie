import Link from "next/link";
import { BookMarked, FileText } from "lucide-react";
import PrintButton from "@/components/PrintButton";
import { loiChapitres, loiMeta } from "@/lib/loi";

export const metadata = {
  title: "Texte intégral de la loi n° 2000-84",
  description:
    "Loi n° 2000-84 du 24 août 2000 relative aux brevets d'invention : texte intégral, chapitre par chapitre et article par article.",
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function LoiPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          Source de vérité
        </p>
        <h1 className="mt-3 text-balance font-serif text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
          Loi n° 2000-84 du 24 août 2000
        </h1>
        <p className="mt-3 text-lg text-ink-600">Relative aux brevets d'invention</p>
        <p className="mt-5 text-base leading-7 text-ink-600">
          Texte intégral repris du Journal Officiel de la République Tunisienne. Les 103 articles
          sont classés selon les chapitres et sections du document source.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-3 py-2 text-xs font-medium text-ink-600">
            <FileText className="h-4 w-4 text-brand-700" aria-hidden="true" />
            14 chapitres · 103 articles
          </span>
          <a
            href="#debut-texte"
            className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-3 py-2 text-xs font-medium text-ink-600 hover:border-brand-300"
          >
            <BookMarked className="h-4 w-4 text-brand-700" aria-hidden="true" />
            Aller au texte
          </a>
          <PrintButton />
        </div>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <aside className="no-print">
          <nav aria-label="Sommaire de la loi" className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-sm">
              <p className="px-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                Chapitres
              </p>
              <ul className="mt-3 max-h-[65vh] space-y-0.5 overflow-y-auto pr-1">
                {loiChapitres.map((chapitre) => (
                  <li key={chapitre.id}>
                    <a
                      href={`#${chapitre.id}`}
                      className="block rounded-md px-2 py-2 text-sm leading-5 text-ink-600 hover:bg-ink-50 hover:text-brand-800"
                    >
                      {chapitre.title.replace(" — ", " · ")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-3 px-2 text-xs leading-5 text-ink-500">
              Les intitulés et le contenu sont reproduits depuis le PDF fourni. Seul le Journal
              Officiel fait foi.
            </p>
          </nav>
        </aside>

        <div className="min-w-0">
          <article
            id="debut-texte"
            className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card sm:p-8 lg:p-10"
          >
            <header className="border-b border-ink-200 pb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
                République Tunisienne
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight text-ink-950">
                {loiMeta.title}
              </h2>
              <div className="mt-4 space-y-1 text-sm leading-6 text-ink-600">
                {loiMeta.preamble.split("\n").map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="mt-4 text-xs italic text-ink-500">{loiMeta.note}</p>
            </header>

            <div className="mt-8 space-y-12">
              {loiChapitres.map((chapitre) => (
                <section key={chapitre.id} id={chapitre.id} aria-labelledby={`${chapitre.id}-titre`}>
                  <h2
                    id={`${chapitre.id}-titre`}
                    className="font-serif text-xl font-semibold tracking-tight text-ink-950"
                  >
                    {chapitre.title}
                  </h2>
                  <div className="mt-5 space-y-7">
                    {chapitre.articles.map((article) => {
                      const id = slugify(article.number);
                      return (
                        <article key={article.number} id={id} className="scroll-mt-28">
                          <h3 className="text-base font-semibold text-ink-900">
                            {article.number}
                            {article.title ? (
                              <span className="ml-2 text-xs font-medium uppercase tracking-wide text-brand-700">
                                {article.title}
                              </span>
                            ) : null}
                          </h3>
                          <div className="mt-2 space-y-3 text-[0.97rem] leading-7 text-ink-700">
                            {article.text.split("\n\n").map((paragraph, index) => (
                              <p key={index} className="whitespace-pre-line">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            <footer className="mt-12 border-t border-ink-200 pt-6">
              <div className="space-y-1 text-sm leading-6 text-ink-600">
                {loiMeta.signature.split("\n").map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="mt-4 text-xs text-ink-500">{loiMeta.source}</p>
            </footer>
          </article>

          <div className="no-print mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-sand-200 bg-sand-100/70 p-4 text-sm text-ink-600">
            <p>Le texte de loi est aussi disponible page par page dans le guide.</p>
            <Link href="/guide" className="font-semibold text-brand-800 underline underline-offset-4">
              Revenir au parcours
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
