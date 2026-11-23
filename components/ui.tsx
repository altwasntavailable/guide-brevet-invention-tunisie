import Link from "next/link";
import { AlertTriangle, ArrowRight, Info, Lightbulb, ShieldAlert } from "lucide-react";

export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "warning" | "success" | "danger";
  title: string;
  children: React.ReactNode;
}) {
  const styles = {
    info: {
      box: "border-brand-200 bg-brand-50/70",
      title: "text-brand-900",
      icon: <Info className="h-5 w-5 text-brand-700" aria-hidden="true" />,
    },
    warning: {
      box: "border-sand-300 bg-sand-100/80",
      title: "text-sand-900",
      icon: <AlertTriangle className="h-5 w-5 text-sand-700" aria-hidden="true" />,
    },
    success: {
      box: "border-emerald-200 bg-emerald-50",
      title: "text-emerald-900",
      icon: <Lightbulb className="h-5 w-5 text-emerald-700" aria-hidden="true" />,
    },
    danger: {
      box: "border-red-200 bg-red-50",
      title: "text-red-900",
      icon: <ShieldAlert className="h-5 w-5 text-red-700" aria-hidden="true" />,
    },
  }[tone];

  return (
    <div className={`not-prose my-6 rounded-xl border p-4 sm:p-5 ${styles.box}`}>
      <p className={`flex items-center gap-2 text-sm font-semibold ${styles.title}`}>
        {styles.icon}
        {title}
      </p>
      <div className="mt-2 text-sm leading-6 text-ink-700">{children}</div>
    </div>
  );
}

export function ArticleRef({ children }: { children: React.ReactNode }) {
  return (
    <span className="not-prose ml-1 inline-flex items-center rounded-full border border-ink-200 bg-white px-2 py-0.5 align-middle text-[0.68rem] font-semibold uppercase tracking-wide text-ink-500">
      {children}
    </span>
  );
}

export function SourceNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="not-prose mt-6 border-l-2 border-sand-300 pl-4 text-sm italic leading-6 text-ink-500">
      {children}
    </p>
  );
}

export function DataTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: (string | React.ReactNode)[][];
}) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-ink-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-ink-200 text-left text-sm">
        <caption className="border-b border-ink-200 bg-ink-50 px-4 py-3 text-left text-sm font-semibold text-ink-900">
          {caption}
        </caption>
        <thead className="bg-sand-50">
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col" className="px-4 py-3 font-semibold text-ink-700">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-100">
          {rows.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-sand-50/40">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 align-top text-ink-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StepCard({
  number,
  title,
  href,
  children,
}: {
  number: number;
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-ink-200 bg-white p-5 shadow-card transition-colors hover:border-brand-300">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-950 text-sm font-semibold text-white">
        {number}
      </span>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink-950">
        <Link href={href} className="after:absolute after:inset-0 after:content-['']">
          {title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-ink-600">{children}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
        Consulter l'étape
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </article>
  );
}

export function KeyValue({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-ink-100 bg-white p-4">
      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">{label}</dt>
      <dd className="mt-1 text-sm leading-6 text-ink-800">{children}</dd>
    </div>
  );
}
