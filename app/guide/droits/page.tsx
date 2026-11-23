import GuidePage from "@/components/GuidePage";
import { ArticleRef, Callout, DataTable } from "@/components/ui";

export const metadata = {
  title: "Droits et obligations du titulaire",
  description:
    "Droit exclusif, exceptions, droit du prior user, obligation d'exploiter, renonciation, nullité et déchéance du brevet en Tunisie.",
};

export default function DroitsPage() {
  return (
    <GuidePage
      href="/guide/droits"
      eyebrow="Droits et obligations"
      title="Droits et obligations du titulaire"
      intro="Le brevet confère un droit exclusif d'exploitation, mais il impose aussi des obligations. Certains actes échappent au monopole, et le titre peut être perdu ou annulé."
      sources={[
        "Loi n° 2000-84, articles 46 à 61.",
        "Guide « Le brevet d'invention » — INNORPI.",
      ]}
    >
      <h2 className="not-prose mt-0 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Le droit exclusif d'exploitation
      </h2>
      <p>
        Le brevet confère à son titulaire ou à ses ayants droit un droit exclusif d'exploitation.
        Sont interdits aux tiers, sans le consentement du titulaire ou de ses ayants droit :
        <ArticleRef>Art 46</ArticleRef>
      </p>
      <ul>
        <li>
          la fabrication, l'offre, la mise dans le commerce, l'utilisation ou l'importation ou la
          détention aux fins précitées du produit objet du brevet ;
        </li>
        <li>l'utilisation du procédé de fabrication objet du brevet ;</li>
        <li>
          l'offre, la mise dans le commerce ou l'utilisation, ou l'importation ou la détention aux
          fins précitées du produit obtenu directement par le procédé objet du brevet.
        </li>
      </ul>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Les actes qui échappent au droit exclusif
      </h2>
      <p>Les droits conférés par le brevet ne s'étendent pas :</p>
      <div className="not-prose my-6 space-y-2">
        {[
          ["a", "aux actes accomplis dans un cadre privé et à des fins non commerciales ;"],
          ["b", "aux actes accomplis à titre expérimental qui portent sur l'objet de l'invention brevetée ;"],
          [
            "c",
            "à la préparation de médicaments faite extemporanément et par unités dans les officines de pharmacie sur ordonnance médicale, ni aux actes concernant les médicaments ainsi préparés ;",
          ],
          [
            "d",
            "à l'offre, l'importation, la détention ou l'utilisation du produit breveté ou du produit obtenu par un procédé breveté, effectués sur le territoire tunisien, après que ce produit a été mis de manière licite dans le commerce de n'importe quel pays, par le propriétaire du brevet ou avec son consentement explicite ;",
          ],
          [
            "e",
            "aux actes nécessaires à la fabrication des médicaments génériques. Toutefois, l'exploitation des produits nés de ces activités à des fins commerciales ne peut être réalisée qu'après expiration de la période de protection du brevet ;",
          ],
          [
            "f",
            "à l'utilisation d'objets à bord d'aéronefs, de véhicules terrestres ou de navires étrangers qui pénètrent temporairement ou accidentellement dans l'espace aérien, sur le territoire ou dans les eaux territoriales de la République Tunisienne.",
          ],
        ].map(([letter, text]) => (
          <div key={letter} className="flex gap-3 rounded-lg border border-ink-100 bg-white p-3 text-sm leading-6 text-ink-700">
            <span className="font-semibold text-brand-700">{letter}</span>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Le droit du prior user
      </h2>
      <p>
        Toute personne qui, de bonne foi, à la date de dépôt de la demande ou à la date de priorité
        revendiquée, exploitait l'invention en Tunisie, a le droit, à titre personnel, de continuer à
        l'exploiter malgré l'existence du brevet. Ce droit appartient aussi à celui qui avait fait
        des préparatifs sérieux en vue de l'exploiter en Tunisie.
      </p>
      <p>
        Ce droit ne peut être transmis aux tiers qu'avec le fonds de commerce, l'entreprise ou la
        partie de l'entreprise auquel il est attaché.
        <ArticleRef>Art 48</ArticleRef>
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Importation pour l'intérêt public et brevets de perfectionnement
      </h2>
      <p>
        Le Ministre chargé de l'Industrie peut, sur proposition des autorités concernées, décider
        que, nonobstant la délivrance d'un brevet, des biens d'équipement, accessoires et pièces
        détachées s'y rapportant peuvent être importés, pour la sauvegarde de l'intérêt public et à
        des fins non commerciales.
        <ArticleRef>Art 49</ArticleRef>
      </p>
      <p>
        Le titulaire d'un brevet portant sur un perfectionnement apporté à une invention déjà
        brevetée ne peut exploiter son invention sans l'autorisation du titulaire du brevet
        principal ; celui-ci ne peut exploiter le perfectionnement breveté sans l'autorisation du
        titulaire du brevet de perfectionnement.
        <ArticleRef>Art 50</ArticleRef>
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        L'obligation d'exploiter
      </h2>
      <p>
        Le titulaire a l'obligation d'exploiter l'invention dans un délai de quatre ans à compter du
        dépôt de la demande ou de trois ans à compter de la délivrance du brevet, en tenant compte
        du délai le plus long. Si le produit est soumis à une autorisation administrative préalable
        de mise sur le marché, le délai est augmenté de deux ans après expiration de ces périodes.
        <ArticleRef>Art 51</ArticleRef>
      </p>
      <Callout tone="warning" title="Licence obligatoire">
        Après l'expiration de ce délai, une licence obligatoire peut être demandée dans les cas
        prévus à l'article 69 : défaut d'exploitation en Tunisie, commercialisation insuffisante
        pour le marché tunisien, ou abandon de l'exploitation industrielle ou commerciale depuis
        plus de trois ans en Tunisie.
      </Callout>

      <h3>Le brevet de perfectionnement</h3>
      <p>
        Le tribunal peut accorder, à la demande du titulaire du brevet de perfectionnement, une
        licence d'exploitation du brevet principal lorsque l'intérêt public l'exige et après
        l'expiration du délai prévu à l'article 69. Cette licence est limitée à ce qui est nécessaire
        à l'exploitation du perfectionnement et suppose un progrès technique et un intérêt économique
        important. Elle ne peut être transmise qu'avec le brevet de perfectionnement. Le titulaire du
        premier brevet peut obtenir, sur requête au tribunal, une licence sur le brevet de
        perfectionnement.
        <ArticleRef>Art 53</ArticleRef>
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Renonciation, nullité et déchéance
      </h2>
      <DataTable
        caption="Les trois atteintes au brevet"
        headers={["Mécanisme", "Règles essentielles", "Référence"]}
        rows={[
          [
            "Renonciation",
            "Le titulaire peut renoncer en tout ou en partie par requête signée. Un pouvoir spécial est exigé pour le mandataire. Le consentement écrit de tous les propriétaires et des titulaires de droits de gage ou de licence est requis, sous peine d'irrecevabilité. La renonciation prend effet à l'inscription au registre.",
            "Art 54",
          ],
          [
            "Nullité",
            "Le brevet est déclaré nul par décision de justice si son objet n'est pas brevetable, si l'invention n'est pas décrite de façon claire et complète, ou si son objet s'étend au-delà du contenu de la demande déposée (ou de la demande initiale pour une divisionnaire). La nullité partielle ne concerne que les revendications visées. L'action est ouverte à toute personne intéressée ; le ministère public peut agir. La décision a un effet absolu.",
            "Art 55 à 59",
          ],
          [
            "Déchéance",
            "Est déchu de tous ses droits le titulaire qui n'a pas acquitté une annuité. La déchéance est constatée par décision du représentant légal de l'organisme, à la requête du breveté ou d'un tiers, après décision motivée. Elle prend effet à la date de l'échéance de l'annuité non acquittée.",
            "Art 60",
          ],
        ]}
      />

      <h3>Le recours en restauration</h3>
      <p>
        Le titulaire peut, dans les trois mois suivant la notification de la déchéance, présenter un
        recours en restauration s'il justifie d'une excuse légitime de non-paiement. Le recours est
        écrit, adressé à l'organisme et accompagné de la justification du paiement de la redevance de
        restauration. La restauration est accordée par décision motivée, notifiée, inscrite au
        registre et publiée.
        <ArticleRef>Art 61</ArticleRef>
      </p>
      <p>
        La décision de restauration est sans effet si les redevances échues ne sont pas acquittées
        dans les trois mois de sa notification. Les recours contre les décisions de déchéance ou de
        restauration sont portés devant les tribunaux compétents, selon les formes du chapitre V.
      </p>

      <Callout tone="info" title="Inscription au registre">
        Les actes qui affectent le brevet doivent être inscrits au registre national des brevets pour
        être opposables aux tiers, notamment les cessions, licences et saisies.
      </Callout>
    </GuidePage>
  );
}
