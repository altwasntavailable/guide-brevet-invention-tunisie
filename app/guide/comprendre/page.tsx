import GuidePage from "@/components/GuidePage";
import { ArticleRef, Callout, DataTable } from "@/components/ui";

export const metadata = {
  title: "Comprendre le brevet d'invention",
  description:
    "Définition de l'invention et du brevet, droit exclusif, durée de protection, titularité et inventions des salariés en Tunisie.",
};

export default function ComprendrePage() {
  return (
    <GuidePage
      href="/guide/comprendre"
      eyebrow="Comprendre"
      title="Comprendre le brevet d'invention"
      intro="Avant de constituer un dossier, il faut savoir ce qui peut être protégé, qui détient le droit au brevet et ce que le titre confère réellement à son titulaire."
      sources={[
        "Guide « Le brevet d'invention » — INNORPI, pages 1 à 4.",
        "Loi n° 2000-84 du 24 août 2000, articles 1 à 18 et 36.",
      ]}
    >
      <h2 className="not-prose mt-0 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Qu'est-ce qu'une invention ?
      </h2>
      <p>
        L'invention est une solution technique à un problème technique. Toute invention d'un
        produit ou d'un procédé de fabrication peut être protégée par un brevet d'invention.
      </p>
      <p>
        La loi précise que toute invention d'un produit ou d'un procédé de fabrication peut être
        protégée par un titre dénommé brevet d'invention, délivré par l'Organisme chargé de la
        propriété industrielle, dans les conditions qu'elle détermine.
        <ArticleRef>Art 1er</ArticleRef>
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Qu'est-ce qu'un brevet d'invention ?
      </h2>
      <p>
        Le brevet d'invention est un titre de la propriété industrielle qui confère à son titulaire
        un droit exclusif temporaire d'exploitation de l'invention dont il est l'objet.
      </p>
      <p>
        Concrètement, le brevet confère à son titulaire ou à ses ayants droit un droit exclusif
        d'exploitation. Sont interdits aux tiers, sans le consentement du titulaire ou de ses ayants
        droit : la fabrication, l'offre, la mise dans le commerce, l'utilisation, l'importation ou la
        détention aux fins précitées du produit objet du brevet ; l'utilisation du procédé de
        fabrication objet du brevet ; et, plus généralement, les actes portant sur le produit obtenu
        directement par le procédé breveté.
        <ArticleRef>Art 46</ArticleRef>
      </p>

      <Callout tone="info" title="Un droit temporaire">
        La durée de protection du brevet d'invention est de vingt ans à compter de la date de dépôt
        de la demande.
        <span className="ml-1 text-xs font-semibold uppercase tracking-wide text-brand-800">Art 36</span>
      </Callout>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        À qui appartient le droit au brevet ?
      </h2>
      <p>
        Le droit à un brevet d'invention appartient à l'inventeur ou à ses ayants droit. Dans la
        procédure suivie auprès de l'Organisme chargé de la propriété industrielle, le déposant de
        la demande est réputé avoir droit au brevet.
      </p>
      <p>
        Lorsque plusieurs personnes ont, indépendamment les unes des autres, fait la même invention,
        le droit au brevet appartient à celle qui a procédé au dépôt en premier. Lorsque plusieurs
        personnes ont fait collectivement une invention, le droit au brevet appartient en commun à
        ces personnes.
        <ArticleRef>Art 7</ArticleRef>
      </p>

      <h3>Contester la propriété d'une demande ou d'un brevet</h3>
      <p>
        Si un brevet a été demandé pour une invention soustraite à l'inventeur ou à ses ayants droit,
        ou en violation d'une obligation légale ou conventionnelle, la personne lésée peut
        revendiquer la propriété de la demande ou du brevet délivré devant le tribunal compétent.
        L'action se prescrit dans un délai de trois ans à compter de la publication de l'avis de
        délivrance. Si la mauvaise foi du titulaire au moment de la délivrance ou de l'acquisition
        est prouvée, le délai de trois ans court à compter de l'expiration du brevet.
        <ArticleRef>Art 8</ArticleRef>
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Les inventions des salariés
      </h2>
      <p>
        La loi consacre une section spécifique aux inventions réalisées dans le cadre d'une relation
        de travail. Elle définit l'employé comme l'agent du secteur privé et l'agent du secteur
        public, et l'employeur comme l'État, les collectivités locales, les établissements et les
        entreprises publics et tout établissement de droit privé.
        <ArticleRef>Art 9</ArticleRef>
      </p>

      <h3>Qui est propriétaire de l'invention ?</h3>
      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-ink-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Employeur</p>
          <p className="mt-2 text-sm leading-6 text-ink-700">
            L'invention faite dans le cadre d'une relation de travail, par un employé tenu par ses
            fonctions effectives d'exercer une activité inventive, des études et des recherches qui
            lui sont expressément confiées, appartient à l'employeur.
          </p>
        </div>
        <div className="rounded-xl border border-ink-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Employé</p>
          <p className="mt-2 text-sm leading-6 text-ink-700">
            L'invention faite dans le domaine d'activité de l'employeur, par un employé non tenu par
            son travail d'exercer une activité inventive, et grâce à l'utilisation de données ou de
            moyens qui lui sont accessibles du fait de son emploi, appartient à l'employé — sauf si
            l'employeur notifie son intérêt dans les conditions prévues par la loi.
          </p>
        </div>
      </div>
      <p className="text-sm text-ink-500">
        Article 10 de la loi. Le mécanisme de notification d'intérêt renvoie à l'article 16.
      </p>

      <h3>La déclaration de l'employé</h3>
      <p>
        L'employé auteur d'une invention en fait immédiatement la déclaration à l'employeur. En cas
        de pluralité d'inventeurs, une déclaration conjointe peut être faite par tous les inventeurs
        ou par certains d'entre eux seulement.
        <ArticleRef>Art 11</ArticleRef>
      </p>
      <p>La déclaration contient notamment :</p>
      <ul>
        <li>l'objet de l'invention ainsi que les applications envisagées ;</li>
        <li>les circonstances de réalisation de l'invention.</li>
      </ul>
      <p>
        Elle est accompagnée d'une description qui expose le problème posé par l'employé, compte
        tenu le cas échéant de l'état de la technique antérieure, la solution à laquelle il est
        parvenu et le mode de réalisation de l'invention, accompagné le cas échéant des dessins.
        <ArticleRef>Art 12</ArticleRef>
      </p>

      <h3>Déclaration d'intérêt et compensation</h3>
      <p>
        Si l'employeur fait la déclaration d'intérêt prévue par la loi, le droit au brevet est
        considéré comme lui ayant appartenu dès l'origine. L'employé inventeur a droit à une
        compensation équitable, tenant compte de la valeur économique de l'invention et de tout
        bénéfice découlant de son exploitation au profit de l'employeur. À défaut d'accord sur le
        montant, le tribunal compétent fixe la compensation.
      </p>
      <p>
        Toute disposition contractuelle moins favorable à l'employé inventeur que les dispositions de
        l'article 13 est nulle et non avenue. Le délai ouvert à l'employeur pour revendiquer le droit
        d'attribution est de quatre mois, sauf accord contraire entre les parties ; tout accord doit
        être écrit et postérieur à la déclaration.
        <ArticleRef>Art 13</ArticleRef>
      </p>

      <DataTable
        caption="Délais et formes des déclarations entre employé et employeur"
        headers={["Situation", "Règle issue de la loi"]}
        rows={[
          [
            "Déclaration incomplète",
            "L'employeur notifie les indications à compléter dans les deux mois de la réception ; à défaut, la déclaration est réputée acceptée (Art 14).",
          ],
          [
            "Point de départ du délai de revendication",
            "Date de réception de la déclaration complète ou, en cas de demande justifiée de renseignements, date à laquelle elle a été complétée (Art 15).",
          ],
          [
            "Forme des déclarations et notifications",
            "Lettre recommandée avec accusé de réception ou tout autre moyen prouvant la réception (Art 16).",
          ],
          [
            "Confidentialité",
            "Employé et employeur se communiquent tout renseignement utile et s'abstiennent de toute divulgation compromettant les droits ; en cas de litige, pas de divulgation tant qu'il n'a pas été statué (Art 17 et 18).",
          ],
        ]}
      />

      <Callout tone="warning" title="En cas de litige">
        Si l'une des parties dépose une demande de brevet pour conserver ses droits, elle notifie
        sans délai une copie des pièces du dépôt à l'autre partie.
        <span className="ml-1 text-xs font-semibold uppercase tracking-wide text-sand-800">Art 18</span>
      </Callout>
    </GuidePage>
  );
}
