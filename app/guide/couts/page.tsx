import GuidePage from "@/components/GuidePage";
import { ArticleRef, Callout, DataTable } from "@/components/ui";
import { annuityRows, deadlineRows, feeRows } from "@/lib/content";

export const metadata = {
  title: "Coûts et délais",
  description:
    "Redevances de dépôt, revendications et priorité, annuités de maintien en vigueur et principaux délais du brevet d'invention en Tunisie.",
};

export default function CoutsPage() {
  return (
    <GuidePage
      href="/guide/couts"
      eyebrow="Coûts et délais"
      title="Coûts et délais à prévoir"
      intro="Les montants ci-dessous sont ceux indiqués dans le guide INNORPI. La loi prévoit en outre les règles de paiement des annuités, le délai de grâce et la déchéance."
      sources={[
        "Guide « Le brevet d'invention » — INNORPI, pages 3 et 4.",
        "Loi n° 2000-84, articles 29 à 33, 40, 51, 52, 61, 88 et 95.",
      ]}
    >
      <h2 className="not-prose mt-0 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Redevances de dépôt
      </h2>
      <div className="not-prose my-6 overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-ink-200 text-left text-sm">
          <caption className="border-b border-ink-200 bg-ink-50 px-4 py-3 text-left text-sm font-semibold text-ink-900">
            Montants indiqués dans le guide INNORPI
          </caption>
          <thead className="bg-sand-50">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold text-ink-700">Redevance</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold text-ink-700">Montant</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {feeRows.map((row) => (
              <tr key={row.label}>
                <td className="px-4 py-3 text-ink-700">{row.label}</td>
                <td className="whitespace-nowrap px-4 py-3 text-right font-semibold tabular-nums text-ink-950">
                  {row.amount}
                  <span className="ml-1 text-xs font-normal text-ink-500">{row.note}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Ces montants s'entendent en dinar tunisien (TND), toute taxe comprise (TTC).
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Les annuités de maintien en vigueur
      </h2>
      <p>
        À la date anniversaire du dépôt de la demande, le déposant doit payer chaque année les
        annuités de maintien en vigueur. En cas de non-paiement, un délai de grâce de six mois est
        accordé avec un paiement de surtaxe pour chaque mois. À défaut de paiement, les droits sur
        les brevets sont déchus.
      </p>
      <div className="not-prose my-6 overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-ink-200 text-left text-sm">
          <caption className="border-b border-ink-200 bg-ink-50 px-4 py-3 text-left text-sm font-semibold text-ink-900">
            Annuités par tranches
          </caption>
          <thead className="bg-sand-50">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold text-ink-700">Période</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold text-ink-700">Montant</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {annuityRows.map((row) => (
              <tr key={row.period}>
                <td className="px-4 py-3 text-ink-700">{row.period}</td>
                <td className="whitespace-nowrap px-4 py-3 text-right font-semibold tabular-nums text-ink-950">
                  {row.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        La loi précise que la redevance de dépôt couvre le dépôt et la première annuité. Elle est
        réputée acquise au moment du dépôt, même si la demande est rejetée. Lorsque la demande
        comporte plus de dix revendications, une redevance supplémentaire est due pour chaque
        revendication à partir de la onzième.
        <ArticleRef>Art 52</ArticleRef>
      </p>
      <p>
        La redevance annuelle est due pour chaque année de la durée du brevet. Son paiement se fait
        annuellement et vient à échéance le dernier jour du mois de la date anniversaire du dépôt.
        En cas de retard, l'intéressé dispose de six mois pour payer, moyennant une redevance de
        retard. Les montants sont fixés par décret.
      </p>

      <Callout tone="danger" title="Déchéance et restauration">
        À défaut de paiement, le titulaire est déchu de tous ses droits. Il peut, dans les trois
        mois suivant la notification de la décision de déchéance, présenter un recours en
        restauration s'il justifie d'une excuse légitime de non-paiement, en acquittant la redevance
        de restauration. La décision de restauration est sans effet si les redevances échues ne sont
        pas acquittées dans les trois mois de sa notification.
        <span className="ml-1 text-xs font-semibold uppercase tracking-wide text-red-800">Art 60 et 61</span>
      </Callout>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Les principaux délais
      </h2>
      <DataTable
        caption="Délais cités dans les documents sources"
        headers={["Délai", "Objet", "Référence"]}
        rows={deadlineRows.map((row) => [row.delay, row.subject, row.source])}
      />

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Ce que la loi ne fixe pas elle-même
      </h2>
      <p>
        Plusieurs montants sont renvoyés à un décret : la redevance de dépôt et de première annuité,
        les redevances annuelles, la redevance de retard, la redevance de revendication à partir de
        la onzième, la redevance de priorité, la redevance de modification d'une revendication, la
        redevance de division, la redevance de rectification, la redevance de retrait, la redevance
        d'inscription au registre, la redevance de restauration, etc. Le guide INNORPI fournit les
        montants reproduits sur cette page ; pour tout autre montant, la loi renvoie au décret.
      </p>
      <p className="text-sm text-ink-500">
        Cette page ne calcule pas de total : elle reproduit les montants et règles des deux
        documents fournis.
      </p>
    </GuidePage>
  );
}
