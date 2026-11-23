import Link from "next/link";
import { ArrowLeft, ArrowRight, BookMarked } from "lucide-react";
import CourseProgress from "@/components/CourseProgress";
import GuideSidebar from "@/components/GuideSidebar";
import { guideNav } from "@/lib/navigation";

type GuidePageProps = {
  title: string;
  eyebrow: string;
  intro: string;
  href: string;
  children: React.ReactNode;
  sources?: string[];
};

export default function GuidePage({
  title,
  eyebrow,
  intro,
  href,
  children,
  sources = [],
}: GuidePageProps) {
  const index = guideNav.findIndex((item) => item.href === href);
  const previous = index > 0 ? guideNav[index - 1] : null;
  const next = index >= 0 && index < guideNav.length - 1 ? guideNav[index + 1] : null;

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-ink-500">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-brand-700">Accueil</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/guide" className="hover:text-brand-700">Le parcours</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-ink-800" aria-current="page">{eyebrow}</li>
        </ol>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0">
          <header className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-balance font-serif text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink-600">{intro}</p>
          </header>

          <div className="mt-8 max-w-3xl lg:hidden">
            <CourseProgress />
          </div>

          <div className="prose-guide mt-10 max-w-3xl">{children}</div>

          {sources.length > 0 ? (
            <aside className="mt-10 max-w-3xl rounded-xl border border-sand-200 bg-sand-100/70 p-4">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-sand-800">
                <BookMarked className="h-4 w-4" aria-hidden="true" />
                Sources de cette page
              </p>
              <ul className="mt-2 space-y-1 text-sm text-ink-600">
                {sources.map((source) => (
                  <li key={source}>{source}</li>
                ))}
              </ul>
            </aside>
          ) : null}

          <nav
            aria-label="Navigation entre les étapes"
            className="mt-12 flex flex-col gap-3 border-t border-ink-200 pt-6 sm:flex-row sm:justify-between"
          >
            {previous ? (
              <Link
                href={previous.href}
                className="group inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-ink-700 shadow-sm hover:border-brand-300 hover:text-brand-800"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
                <span>
                  <span className="block text-[0.68rem] uppercase tracking-wide text-ink-400">Précédent</span>
                  {previous.shortLabel ?? previous.label}
                </span>
              </Link>
            ) : <span />}
            {next ? (
              <Link
                href={next.href}
                className="group inline-flex items-center justify-end gap-2 rounded-xl border border-ink-200 bg-white px-4 py-3 text-right text-sm font-medium text-ink-700 shadow-sm hover:border-brand-300 hover:text-brand-800"
              >
                <span>
                  <span className="block text-[0.68rem] uppercase tracking-wide text-ink-400">Suivant</span>
                  {next.shortLabel ?? next.label}
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            ) : null}
          </nav>
        </div>

        <aside className="hidden lg:block">
          <CourseProgress />
          <div className="mt-4">
            <GuideSidebar />
          </div>
        </aside>
      </div>
    </div>
  );
}
