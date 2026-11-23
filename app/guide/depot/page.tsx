import GuidePage from "@/components/GuidePage";
import { ArticleRef, Callout, DataTable } from "@/components/ui";

export const metadata = {
  title: "Préparer et déposer la demande",
  description:
    "Pièces à fournir, langue, priorité, modifications, division, rectification et retrait d'une demande de brevet en Tunisie.",
};

export default function DepotPage() {
  return (
    <GuidePage
      href="/guide/depot"
      eyebrow="Dépôt"
      title="Préparer et déposer la demande"
      intro="La demande se dépose auprès du département de la propriété industrielle de l'INNORPI. Le dossier doit respecter des exigences de forme précises, sous peine de rejet."
      sources={[
        "Guide « Le brevet d'invention » — INNORPI, pages 2 et 3.",
        "Loi n° 2000-84, articles 19 à 28 et 32.",
      ]}
    >
      <h2 className="not-prose mt-0 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Où déposer ?
      </h2>
      <p>
        Les demandes sont déposées auprès du département de la propriété industrielle de l'INNORPI.
        La loi emploie l'expression « Organisme chargé de la propriété industrielle ».
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Qui peut déposer ?
      </h2>
      <p>
        Le dépôt d'une demande de brevet peut être effectué par toute personne physique ou morale,
        indépendamment de sa nationalité et du lieu de son domicile.
      </p>
      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-ink-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            Domicilié en Tunisie
          </p>
          <p className="mt-2 text-sm leading-6 text-ink-700">
            Le demandeur dépose directement sa demande auprès de l'INNORPI ou est représenté par un
            mandataire.
          </p>
        </div>
        <div className="rounded-xl border border-ink-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            Non-résident en Tunisie
          </p>
          <p className="mt-2 text-sm leading-6 text-ink-700">
            Le demandeur doit être représenté par un mandataire domicilié en Tunisie et muni d'un
            pouvoir signé par le demandeur.
          </p>
        </div>
      </div>
      <p>
        Si le déposant est représenté par un mandataire, un pouvoir établi par un acte sous seing
        privé doit être joint à la demande. Le pouvoir doit spécifier l'étendue du mandat. Sauf
        stipulations contraires, il s'étend à tous les actes affectant le brevet, y compris les
        notifications, excepté le retrait ou la renonciation qui nécessitent un pouvoir spécial. En
        cas de pluralité de déposants, un mandataire commun doit être constitué.
        <ArticleRef>Art 20</ArticleRef>
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Les pièces à fournir
      </h2>
      <p>
        Le guide INNORPI énumère les pièces suivantes :
      </p>
      <ol>
        <li>
          <strong>Une requête</strong> qui énonce le titre de l'invention, le nom et prénom du
          déposant et son adresse, le nom et prénom de l'inventeur et, le cas échéant, le nom,
          prénom et adresse du mandataire.
        </li>
        <li>
          <strong>Une description de l'invention en double exemplaire</strong>, suffisamment claire
          et complète pour qu'une personne du métier dans le domaine correspondant de la technologie
          puisse l'exécuter.
        </li>
        <li>
          <strong>Une ou plusieurs revendications en double exemplaire</strong> précisant le ou les
          éléments de nouveauté et qui doivent se fonder sur la description et indiquer l'étendue de
          la protection demandée.
        </li>
        <li>
          <strong>Un ou plusieurs dessins en double exemplaire</strong> s'ils sont nécessaires à
          l'intelligence de la description.
        </li>
        <li>
          <strong>Un abrégé descriptif</strong> qui énonce brièvement les principaux éléments
          techniques de l'invention.
        </li>
        <li>
          <strong>Un pouvoir du mandataire</strong> s'il y a lieu, sans légalisation.
        </li>
        <li>
          <strong>Le paiement des redevances</strong> prescrites en matière de dépôt.
        </li>
        <li>
          <strong>L'indication du droit de priorité</strong> attaché à un précédent dépôt à
          l'étranger, s'il y a lieu.
        </li>
      </ol>
      <p>
        La loi reprend ces éléments : requête, description en double exemplaire, revendications en
        double exemplaire, dessins s'ils sont nécessaires, abrégé descriptif. Elle précise que
        l'abrégé sert exclusivement à des fins d'information technique.
        <ArticleRef>Art 21</ArticleRef>
      </p>

      <Callout tone="info" title="La description et les revendications">
        La description doit permettre à une personne du métier d'exécuter l'invention. Les
        revendications doivent se fonder sur la description et indiquer l'étendue de la protection
        demandée par le brevet.
      </Callout>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Langue et unité de la demande
      </h2>
      <p>
        La demande doit être présentée par écrit et dans l'une des trois langues suivantes :
        l'arabe, le français ou l'anglais. Elle est soumise au paiement de redevances dont les
        montants sont fixés par décret.
        <ArticleRef>Art 22</ArticleRef>
      </p>
      <p>
        Une demande de brevet ne peut porter que sur une seule invention ou une pluralité
        d'inventions liées entre elles de sorte qu'elles ne forment qu'un seul concept inventif
        général.
        <ArticleRef>Art 23</ArticleRef>
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Revendiquer une priorité étrangère
      </h2>
      <p>
        Le déposant qui veut se prévaloir de la priorité d'une demande antérieure déposée dans un
        pays étranger membre de l'Union de Paris ou membre de l'Organisation mondiale du commerce
        doit joindre à sa demande une déclaration écrite indiquant la date de dépôt, le pays dans
        lequel ce dépôt a été effectué et les nom et prénom du déposant, et acquitter la redevance
        de priorité.
        <ArticleRef>Art 24</ArticleRef>
      </p>
      <p>
        Sous peine de déchéance du droit de priorité, il doit produire dans les trois mois à compter
        de la date du dépôt une copie de la demande antérieure certifiée conforme à l'original par
        l'organisme chargé de la propriété industrielle du pays où cette demande a été déposée,
        accompagnée de sa traduction dans la langue de la demande tunisienne.
      </p>
      <p>
        L'organisme peut demander tout autre document au sujet de la demande antérieure, notamment
        une copie des pièces relatives aux résultats de recherche ou d'examen, une copie de toute
        autre demande portant sur la même invention ou essentiellement la même invention, et une
        copie de toute décision définitive rejetant la demande.
      </p>
      <p>
        Des priorités multiples peuvent être revendiquées, même depuis des pays différents, et
        plusieurs priorités peuvent être revendiquées pour une même revendication. Les délais ayant
        pour point de départ la date de priorité sont alors calculés à compter de la priorité la plus
        ancienne. Le droit de brevet ne couvre que les éléments de la demande dont la priorité est
        revendiquée.
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Date de dépôt et refus de dépôt
      </h2>
      <p>
        La date de dépôt est celle à laquelle le demandeur a présenté la demande conformément aux
        articles 20, 21 et 22. L'organisme refuse le dépôt s'il constate qu'au moment du dépôt, il
        n'était pas satisfait aux exigences de ces articles.
        <ArticleRef>Art 25</ArticleRef>
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Modifier, diviser ou rectifier la demande
      </h2>
      <DataTable
        caption="Opérations possibles sur la demande"
        headers={["Opération", "Conditions et effets", "Référence"]}
        rows={[
          [
            "Modification",
            "Jusqu'à la publication, le déposant peut modifier sa demande, y compris formuler de nouvelles revendications, sans aller au-delà de la divulgation faite dans la demande initiale. Toute modification d'une revendication est soumise à une redevance.",
            "Art 26",
          ],
          [
            "Division",
            "Jusqu'à la publication, le déposant peut diviser sa demande sans aller au-delà de la divulgation initiale. Chaque demande divisionnaire est séparée mais conserve la date de dépôt initiale et, le cas échéant, la priorité. Elle est déposée dans les formes des articles 20 et 21 et donne lieu aux redevances de l'article 22.",
            "Art 27",
          ],
          [
            "Rectification",
            "Jusqu'à la délivrance, le déposant peut demander la rectification des fautes d'expression ou de transcription et des erreurs des pièces déposées. Pour la description, les revendications ou les dessins, la rectification doit s'imposer à l'évidence. La requête est écrite, motivée et accompagnée du paiement d'une redevance.",
            "Art 28",
          ],
        ]}
      />

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Retirer la demande
      </h2>
      <p>
        La demande peut être retirée à tout moment avant la délivrance du brevet, par une
        déclaration écrite, avec paiement d'une redevance. La déclaration ne peut viser qu'une seule
        demande et est formulée par le demandeur ou son mandataire ; un pouvoir spécial de retrait
        doit être joint à la déclaration du mandataire.
        <ArticleRef>Art 32</ArticleRef>
      </p>
      <ul>
        <li>
          Si la demande a été déposée aux noms de plusieurs personnes, son retrait doit être requis
          par l'ensemble de celles-ci ou par un mandataire commun.
        </li>
        <li>
          Si des droits de gage ou de licence sont inscrits au registre national des brevets, le
          retrait doit être accompagné du consentement écrit des titulaires de ces droits.
        </li>
        <li>
          Si la demande est retirée après publication, le retrait est inscrit d'office au registre
          national des brevets.
        </li>
        <li>
          Dans tous les cas, un exemplaire de la demande est conservé par l'organisme.
        </li>
      </ul>

      <Callout tone="warning" title="Ne pas dépasser la divulgation initiale">
        Les modifications et divisions ne doivent jamais aller au-delà de la divulgation faite dans
        la demande initiale.
      </Callout>
    </GuidePage>
  );
}
