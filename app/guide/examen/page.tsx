import GuidePage from "@/components/GuidePage";
import { ArticleRef, Callout, DataTable } from "@/components/ui";

export const metadata = {
  title: "Examen, publication et délivrance",
  description:
    "Examen de forme et de fond, publication au bulletin officiel, délivrance du brevet, registre national et recours en Tunisie.",
};

export default function ExamenPage() {
  return (
    <GuidePage
      href="/guide/examen"
      eyebrow="Examen"
      title="Examen, publication et délivrance"
      intro="Après le dépôt, l'Organisme chargé de la propriété industrielle contrôle la forme puis le fond. La demande est publiée, le brevet est délivré et inscrit au registre national."
      sources={[
        "Loi n° 2000-84, articles 29 à 45.",
        "Guide « Le brevet d'invention » — INNORPI.",
      ]}
    >
      <h2 className="not-prose mt-0 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        L'examen de forme
      </h2>
      <p>
        L'organisme examine si, quant à la forme, la demande est conforme aux articles 20, 21 et 22.
        S'il constate que ces dispositions ne sont pas respectées, il rejette la demande après avoir
        invité le déposant à combler les insuffisances dans un délai de trois mois à compter de la
        notification. La décision de rejet doit être motivée et notifiée au déposant ou à son
        mandataire par envoi recommandé avec accusé de réception.
        <ArticleRef>Art 29</ArticleRef>
      </p>
      <Callout tone="warning" title="Délai de trois mois">
        Les notifications d'insuffisances de forme ouvrent un délai de trois mois pour régulariser.
      </Callout>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        L'examen au fond
      </h2>
      <p>
        L'organisme vérifie si :
        <ArticleRef>Art 30</ArticleRef>
      </p>
      <ul>
        <li>
          ce qui est revendiqué n'est pas manifestement exclu des inventions brevetables en vertu de
          l'alinéa 2 de l'article 2 et de l'article 3 ;
        </li>
        <li>ce qui est revendiqué correspond à la définition de l'article 6 ;</li>
        <li>la description satisfait aux exigences de l'alinéa 3 de l'article 21 ;</li>
        <li>les revendications satisfont aux exigences de l'alinéa 4 de l'article 21 ;</li>
        <li>la demande satisfait aux exigences de l'article 23 ;</li>
        <li>
          la demande divisionnaire ne s'étend pas au-delà de la divulgation faite dans la demande
          initiale ;
        </li>
        <li>
          tous les documents demandés en vertu de l'alinéa 3 de l'article 24 ont été fournis.
        </li>
      </ul>
      <p>
        Si les conditions ne sont pas remplies, l'organisme notifie au déposant ou à son mandataire
        et l'invite à modifier sa demande ou à formuler des observations dans un délai de trois mois.
        Si le déposant régularise sa demande dans ce délai, l'examen reprend moyennant le paiement
        d'une redevance. À défaut, la demande est rejetée.
      </p>
      <p>
        Si, après observations ou modifications, les conditions sont satisfaites, la demande est
        maintenue. À défaut, une nouvelle notification est faite avec un délai de trois mois. Si les
        conditions ne sont toujours pas satisfaites à l'issue du délai, la demande est rejetée. Toute
        décision de rejet doit être motivée et notifiée par écrit, par envoi recommandé avec accusé
        de réception.
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Publication de la demande
      </h2>
      <p>
        Si la demande est conforme, mention de son dépôt est publiée au bulletin officiel de
        l'organisme dans un délai de dix-huit mois à compter de la date de dépôt.
        <ArticleRef>Art 31</ArticleRef>
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Délivrance du brevet
      </h2>
      <p>
        Le brevet est délivré au nom du ou des demandeurs par décision du représentant légal de
        l'organisme si, dans les deux mois à compter de la publication, aucune action au sens de
        l'article 34 n'a été introduite.
        <ArticleRef>Art 33</ArticleRef>
      </p>
      <p>
        La délivrance est notifiée au titulaire ou à son mandataire, inscrite au registre national
        des brevets et publiée au bulletin officiel. La date de délivrance est celle de la signature
        du brevet. Le brevet délivré prend effet à la date du dépôt de la demande.
      </p>

      <h3>Suspension de la procédure</h3>
      <p>
        La procédure de délivrance est suspendue si une personne justifie, dans les deux mois de la
        publication, qu'elle a intenté une action en justice contestant la brevetabilité de la
        demande au sens des articles 2 à 6 ou revendiquant la propriété de la demande. La procédure
        reprend dès que la décision a acquis la force de la chose jugée. En cas d'action en
        revendication de propriété, elle peut reprendre à tout moment avec le consentement écrit,
        irrévocable, de la personne ayant agi.
        <ArticleRef>Art 34</ArticleRef>
      </p>
      <p>
        À compter du jour où une personne justifie avoir intenté une action, le déposant ne peut
        retirer la demande qu'en cas d'accord des deux parties. La suspension et la reprise sont
        inscrites au registre national. À l'issue d'une action en revendication, le propriétaire est
        la personne désignée par le tribunal.
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Registre national et accès aux dossiers
      </h2>
      <p>
        L'organisme tient un registre dénommé « le registre national des brevets ». Y sont inscrits
        toutes les demandes, les brevets et tous les actes qui les affectent. Aucune inscription ne
        peut être portée avant la publication du dépôt.
        <ArticleRef>Art 37</ArticleRef>
      </p>
      <p>
        En cas de non-conformité d'une demande d'inscription, une notification motivée est adressée
        au demandeur ou à son mandataire, avec un délai d'un mois pour régulariser ou présenter des
        observations. À défaut, la demande est rejetée. Toute personne peut consulter le registre et
        obtenir des extraits moyennant une redevance.
      </p>
      <p>
        Toute personne a le droit d'accéder à un dossier relatif à un brevet ou à une demande et
        d'en obtenir copie moyennant une redevance. La consultation ou la copie d'une demande non
        publiée exige l'autorisation écrite et signée du demandeur ou de son mandataire.
        <ArticleRef>Art 38</ArticleRef>
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Les recours
      </h2>
      <p>
        Les recours contre les décisions du représentant légal de l'organisme en matière de
        délivrance ou de rejet sont portés devant les tribunaux compétents.
        <ArticleRef>Art 39</ArticleRef>
      </p>
      <DataTable
        caption="Procédure de recours"
        headers={["Étape", "Règle", "Référence"]}
        rows={[
          ["Délai", "Un mois à partir de la date de notification de la décision contestée.", "Art 40"],
          [
            "Forme",
            "Requête écrite adressée ou remise au greffe du tribunal compétent, avec les mentions exigées sous peine d'irrecevabilité.",
            "Art 41",
          ],
          [
            "Mentions",
            "Identité du requérant (personne physique ou morale), date et objet de la décision, identité du propriétaire du brevet ou du titulaire de la demande si le requérant n'a pas cette qualité. Une copie de la décision est jointe.",
            "Art 41",
          ],
          [
            "Moyens",
            "Si la requête ne contient pas l'exposé des moyens, il doit être déposé au greffe au moins sept jours avant la première audience, sous peine d'irrecevabilité.",
            "Art 41",
          ],
          [
            "Notification",
            "Copie de la requête et, le cas échéant, de l'exposé ultérieur notifiées à l'organisme par huissier notaire. L'organisme transmet le dossier au greffe dans un mois.",
            "Art 42",
          ],
          [
            "Appel en cause",
            "Si le recours est formé par une personne autre que le propriétaire du brevet ou le titulaire de la demande, celui-ci est appelé en cause par huissier notaire.",
            "Art 43",
          ],
          [
            "Représentation",
            "Le requérant peut se faire représenter devant le tribunal par un mandataire.",
            "Art 44",
          ],
          [
            "Jugement",
            "Le jugement est notifié aux autres parties par la partie la plus diligente.",
            "Art 45",
          ],
        ]}
      />

      <Callout tone="info" title="Pas de garantie de l'État">
        La délivrance ne vaut pas garantie de la réalité, de la nouveauté ou du mérite de
        l'invention, ni de l'exactitude de la description.
        <span className="ml-1 text-xs font-semibold uppercase tracking-wide text-brand-800">Art 35</span>
      </Callout>
    </GuidePage>
  );
}
