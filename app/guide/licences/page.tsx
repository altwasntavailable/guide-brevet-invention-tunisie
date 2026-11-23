import GuidePage from "@/components/GuidePage";
import { ArticleRef, Callout, DataTable } from "@/components/ui";

export const metadata = {
  title: "Licences et transmission",
  description:
    "Cession, transmission, saisie, licences contractuelles, licences obligatoires et licences d'office d'un brevet d'invention en Tunisie.",
};

export default function LicencesPage() {
  return (
    <GuidePage
      href="/guide/licences"
      eyebrow="Licences"
      title="Licences, cession et transmission"
      intro="Le brevet peut être cédé, transmis ou exploité par des tiers. La loi encadre les licences contractuelles, les licences obligatoires et les licences d'office."
      sources={[
        "Loi n° 2000-84, articles 62 à 81.",
        "Guide « Le brevet d'invention » — INNORPI.",
      ]}
    >
      <h2 className="not-prose mt-0 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Cession, transmission et saisie
      </h2>
      <p>
        Les droits découlant d'un brevet ou d'une demande peuvent être cédés ou transmis en tout ou
        en partie. Lorsque plusieurs personnes sont déposantes ou cotitulaires, chacune peut
        séparément céder ou transmettre sa quote-part. La cession ou la transmission est constatée
        par écrit, sous peine de nullité.
        <ArticleRef>Art 62</ArticleRef>
      </p>
      <p>
        La saisie d'un brevet est effectuée selon le code de procédure civile et commerciale. Le
        requérant doit, sous peine de nullité, signifier l'acte de saisie au titulaire, à l'organisme
        et aux personnes possédant des droits sur le brevet. Toute cession, transmission ou
        inscription de saisie doit, sous peine de non-opposabilité aux tiers, être inscrite au
        registre national des brevets après paiement d'une redevance.
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Les licences contractuelles
      </h2>
      <p>
        Le titulaire d'une demande ou d'un brevet peut, par contrat, donner à toute personne physique
        ou morale une licence d'exploitation de l'invention. Chacun des cotitulaires peut donner une
        licence en accord avec tous les autres cotitulaires. Le contrat doit, sous peine de nullité,
        être établi par écrit et signé par les cotitulaires. Le contrat, ses modifications et
        renouvellements doivent être inscrits au registre national pour être opposables aux tiers.
        <ArticleRef>Art 63</ArticleRef>
      </p>
      <DataTable
        caption="Effets des clauses du contrat de licence"
        headers={["Point", "Règle par défaut", "Référence"]}
        rows={[
          [
            "Exclusivité",
            "Sauf stipulations contraires, l'octroi d'une licence n'empêche ni le donneur de consentir d'autres licences ni d'exploiter lui-même. Si la licence est exclusive, le donneur ne peut autoriser un tiers ni accomplir lui-même en Tunisie les actes couverts par le contrat.",
            "Art 64",
          ],
          [
            "Territoire et applications",
            "Sauf stipulations contraires, l'accord du donneur s'étend à tous les actes visés à l'article 46 sur tout le territoire tunisien et pour toute application de l'invention.",
            "Art 65",
          ],
          [
            "Sous-licence",
            "Sauf stipulations contraires, le preneur ne peut pas autoriser un tiers à accomplir en Tunisie les actes objet de sa licence.",
            "Art 66",
          ],
          [
            "Fin du contrat",
            "En cas de retrait, rejet définitif, annulation définitive, déchéance ou expiration de la protection, le preneur n'est plus tenu aux paiements à compter de l'événement. Il peut obtenir la restitution des paiements déjà effectués s'il n'a pas ou pratiquement pas profité de la licence, sauf clause contraire.",
            "Art 67 et 68",
          ],
        ]}
      />

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Les licences obligatoires
      </h2>
      <p>
        Toute personne intéressée peut, après l'expiration du délai prévu à l'article 51, obtenir à
        tout moment une licence obligatoire dans l'un des cas suivants :
        <ArticleRef>Art 69</ArticleRef>
      </p>
      <ul>
        <li>
          l'invention n'a pas commencé à être exploitée industriellement ou n'a pas fait l'objet de
          préparatifs effectifs et sérieux en vue de cette exploitation en Tunisie dans le délai de
          l'article 51 ;
        </li>
        <li>
          le produit objet de l'invention n'a pas été commercialisé en quantité suffisante pour
          satisfaire aux besoins du marché tunisien ;
        </li>
        <li>
          l'exploitation industrielle ou commerciale de l'invention a été abandonnée depuis plus de
          trois ans en Tunisie.
        </li>
      </ul>

      <h3>Procédure devant le tribunal</h3>
      <p>
        La demande est adressée au tribunal compétent. Le demandeur doit prouver qu'il s'est
        préalablement adressé par lettre recommandée avec accusé de réception au titulaire pour
        demander une licence contractuelle, sans l'obtenir à des conditions et modalités
        commerciales raisonnables et dans un délai raisonnable. Il doit aussi prouver qu'il est en
        mesure d'exploiter l'invention de manière effective et sérieuse.
        <ArticleRef>Art 70</ArticleRef>
      </p>
      <p>
        Une licence obligatoire pour défaut ou insuffisance d'exploitation ne peut être accordée si
        le titulaire justifie d'une excuse légitime. La licence est non exclusive et les droits
        attachés ne peuvent être transmis qu'avec le fonds de commerce, l'entreprise ou la partie de
        l'entreprise auxquels ils sont attachés.
      </p>
      <ul>
        <li>
          Le demandeur doit, sous peine d'irrecevabilité, communiquer une copie de l'assignation à
          l'organisme par lettre recommandée avec accusé de réception, dans les quinze jours de
          l'assignation.
          <ArticleRef>Art 71</ArticleRef>
        </li>
        <li>
          Le représentant légal de l'organisme peut présenter au tribunal un mémoire contenant ses
          observations.
          <ArticleRef>Art 72</ArticleRef>
        </li>
        <li>
          Ces dispositions s'appliquent en cas de recours en appel.
          <ArticleRef>Art 73</ArticleRef>
        </li>
        <li>
          Le tribunal statue après avoir entendu les parties ou leurs représentants et fixe les
          conditions : durée, champ d'application et montant à verser au titulaire, en rapport avec
          l'importance de l'exploitation. Ces conditions peuvent être modifiées en cas de faits
          nouveaux.
          <ArticleRef>Art 74</ArticleRef>
        </li>
        <li>
          Toute cession d'une licence obligatoire est, sous peine de nullité, soumise à
          l'autorisation du tribunal.
          <ArticleRef>Art 75</ArticleRef>
        </li>
        <li>
          Si le bénéficiaire ne respecte pas les conditions, le titulaire et, le cas échéant, les
          autres licenciés peuvent demander le retrait de la licence.
          <ArticleRef>Art 76</ArticleRef>
        </li>
        <li>
          Les décisions judiciaires sont notifiées à l'organisme par le bénéficiaire ; les décisions
          définitives sont inscrites au registre national.
          <ArticleRef>Art 77</ArticleRef>
        </li>
      </ul>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Les licences d'office
      </h2>
      <p>
        Le ministre chargé de l'industrie peut mettre les propriétaires de brevets en demeure d'en
        entreprendre l'exploitation pour satisfaire aux besoins de l'économie nationale ou aux
        besoins de sauvegarde de l'environnement. Si la mise en demeure n'est pas suivie d'effet dans
        un délai d'un an et que l'absence d'exploitation ou son insuffisance porte gravement
        préjudice au développement économique et à l'intérêt public, les brevets peuvent être soumis
        par arrêté au régime de la licence d'office.
        <ArticleRef>Art 78</ArticleRef>
      </p>
      <p>
        Le ministre peut prolonger ce délai lorsque le titulaire justifie d'excuses légitimes dues
        aux exigences de l'économie nationale. Si l'intérêt de la santé publique l'exige, les brevets
        délivrés pour des médicaments, des produits nécessaires à leur obtention ou des procédés de
        fabrication de tels produits peuvent être soumis au régime de la licence d'office, à la
        demande du ministre de la santé publique, lorsque ces médicaments ne sont mis à disposition
        qu'en qualité ou quantités insuffisantes ou à des prix anormalement élevés.
      </p>
      <p>
        L'État peut, à tout moment, pour les besoins de la défense ou de la sécurité nationale,
        obtenir d'office une licence pour l'exploitation d'une invention, que cette exploitation soit
        faite par lui-même ou par un tiers.
      </p>

      <Callout tone="info" title="Effet de la licence d'office">
        Dès la publication de l'arrêté, toute personne peut demander au ministre l'octroi d'une
        licence d'exploitation. La licence est accordée par arrêté, à des conditions déterminées,
        notamment sa durée et son champ d'application, à l'exclusion de la contrepartie financière.
        À défaut d'accord amiable, la contrepartie est fixée par le tribunal. La licence prend effet
        à la date de publication de l'arrêté.
        <span className="ml-1 text-xs font-semibold uppercase tracking-wide text-brand-800">Art 79</span>
      </Callout>
      <p>
        La licence d'office est non exclusive et les droits attachés ne peuvent être transmis qu'avec
        le fonds de commerce, l'entreprise ou la partie de l'entreprise. Les modifications des
        conditions sont décidées et publiées selon la procédure d'octroi ; le titulaire peut demander
        le retrait pour inexécution des obligations.
        <ArticleRef>Art 80 et 81</ArticleRef>
      </p>
    </GuidePage>
  );
}
