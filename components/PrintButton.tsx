"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-3 py-2 text-xs font-medium text-ink-600 hover:border-brand-300"
    >
      <Printer className="h-4 w-4 text-brand-700" aria-hidden="true" />
      Version imprimable
    </button>
  );
}
