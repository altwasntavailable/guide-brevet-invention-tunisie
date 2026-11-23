import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { faqItems } from "@/lib/content";

export const metadata = {
  title: "Questions fréquentes",
  description:
    "Réponses issues des documents sources sur la brevetabilité, le dépôt, les coûts, les délais, les droits et la contrefaçon.",
};

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          Questions fréquentes
        </p>
        <h1 className="mt-3 text-balance font-serif text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
          Vos questions sur le brevet d'invention
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink-600">
          Ces réponses reprennent uniquement les informations du guide INNORPI et de la loi
          n° 2000-84. Elles ne constituent pas un conseil juridique personnalisé.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-xl border border-ink-200 bg-white p-1 shadow-sm open:border-brand-300"
            >
              <summary className="flex cursor-pointer list-none items-start gap-3 rounded-lg px-4 py-4 text-left text-base font-semibold text-ink-900 marker:content-none hover:text-brand-800 [&::-webkit-details-marker]:hidden">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-semibold text-brand-700">
                  {index + 1}
                </span>
                <span className="flex-1">{item.question}</span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 text-xl leading-none text-ink-400 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="border-t border-ink-100 px-4 pb-4 pt-3 text-sm leading-7 text-ink-700 sm:pl-14">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-semibold text-ink-950">
              <HelpCircle className="h-4 w-4 text-brand-700" aria-hidden="true" />
              Une question précise ?
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Le texte de loi contient les articles applicables. Le parcours replace chaque règle
              dans l'ordre de la démarche.
            </p>
            <div className="mt-4 space-y-2">
              <Link
                href="/loi"
                className="flex items-center justify-between rounded-lg border border-ink-200 px-3 py-2 text-sm font-medium text-ink-700 hover:border-brand-300 hover:text-brand-800"
              >
                Texte de loi
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/guide"
                className="flex items-center justify-between rounded-lg border border-ink-200 px-3 py-2 text-sm font-medium text-ink-700 hover:border-brand-300 hover:text-brand-800"
              >
                Le parcours
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-sand-200 bg-sand-100/70 p-5">
            <p className="text-sm font-semibold text-ink-900">Rappel</p>
            <p className="mt-2 text-xs leading-5 text-ink-600">
              Les montants et délais peuvent évoluer. Vérifiez les textes en vigueur et les
              formulaires auprès de l'INNORPI avant tout dépôt.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
