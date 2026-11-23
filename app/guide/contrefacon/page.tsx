import GuidePage from "@/components/GuidePage";
import { ArticleRef, Callout, DataTable } from "@/components/ui";

export const metadata = {
  title: "Contrefaçon et mesures frontières",
  description:
    "Sanctions de la contrefaçon, preuve, saisie, référé, prescription et mesures douanières prévues par la loi tunisienne sur les brevets.",
};

export default function ContrefaconPage() {
  return (
    <GuidePage
      href="/guide/contrefacon"
      eyebrow="Contrefaçon"
      title="Contrefaçon et mesures à la frontière"
      intro="Toute atteinte au droit exclusif du titulaire constitue un délit de contrefaçon. La loi organise la preuve, les sanctions civiles et pénales, ainsi que la retenue douanière des produits présumés contrefaits."
      sources={[
        "Loi n° 2000-84, articles 82 à 99.",
        "Guide « Le brevet d'invention » — INNORPI.",
      ]}
    >
      <h2 className="not-prose mt-0 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Le délit de contrefaçon
      </h2>
      <p>
        Toute atteinte portée aux droits du titulaire, tels que définis à l'article 46, constitue un
        délit de contrefaçon. La contrefaçon engage la responsabilité civile et pénale de son auteur.
        <ArticleRef>Art 82</ArticleRef>
      </p>
      <p>
        L'offre, la mise dans le commerce, l'utilisation, la détention en vue de l'utilisation ou la
        mise dans le commerce d'un produit contrefait, commises par une autre personne que le
        fabricant, n'engagent la responsabilité de leur auteur que si les faits ont été commis en
        connaissance de cause.
      </p>
      <p>
        Les faits antérieurs à la publication de la demande ne constituent pas un délit et ne peuvent
        motiver une condamnation, même au civil, sauf s'ils sont postérieurs à la notification au
        présumé contrefacteur d'une copie officielle de la demande de brevet.
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Les sanctions
      </h2>
      <DataTable
        caption="Peines et poursuites"
        headers={["Point", "Règle", "Référence"]}
        rows={[
          [
            "Amende",
            "Le délit de contrefaçon est puni d'une amende de 5 000 à 50 000 dinars, sous réserve des peines prévues par des textes spéciaux.",
            "Art 83",
          ],
          [
            "Récidive",
            "En cas de récidive, un emprisonnement de un à six mois peut être prononcé outre l'amende, qui est portée au double.",
            "Art 83",
          ],
          [
            "Plainte",
            "Le ministère public ne peut déclencher les poursuites que sur la base d'une plainte de la partie lésée.",
            "Art 83",
          ],
          [
            "Fausse qualité",
            "Est puni d'une amende de 1 000 à 5 000 dinars quiconque se prévaut indûment de la qualité de titulaire d'une demande de brevet ou d'un brevet. En cas de récidive, l'amende est portée au double.",
            "Art 90",
          ],
          [
            "Prescription",
            "Les actions en contrefaçon se prescrivent dans un délai de trois ans à compter de la réalisation des faits.",
            "Art 88",
          ],
        ]}
      />

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Qui peut agir ?
      </h2>
      <p>
        L'action civile en contrefaçon est exercée par le titulaire du brevet ou de la demande. Le
        cotitulaire peut exercer une action à son seul profit et doit notifier une copie de
        l'assignation aux autres cotitulaires.
        <ArticleRef>Art 84</ArticleRef>
      </p>
      <ul>
        <li>
          Le titulaire d'une licence contractuelle exclusive peut, sauf clause contraire, agir si
          après mise en demeure le titulaire n'exerce pas l'action.
        </li>
        <li>
          Le titulaire d'une licence obligatoire ou d'une licence d'office peut agir dans les mêmes
          conditions.
        </li>
        <li>
          Le titulaire peut intervenir dans l'instance engagée par un licencié ; tout licencié peut
          intervenir dans l'instance engagée par le titulaire pour obtenir réparation de son propre
          préjudice.
        </li>
      </ul>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        La preuve
      </h2>
      <p>
        Le titulaire peut faire la preuve de la contrefaçon par tout moyen. Si le brevet porte sur un
        procédé de fabrication d'un produit, le tribunal peut ordonner au défendeur de prouver que le
        procédé utilisé pour obtenir un produit identique est différent du procédé breveté. Faute de
        preuve, tout produit identique fabriqué sans consentement est présumé obtenu par le procédé
        breveté si le produit est nouveau. Les intérêts légitimes du défendeur sont pris en compte
        pour protéger ses secrets de fabrication et de commerce.
        <ArticleRef>Art 85</ArticleRef>
      </p>

      <h3>Description et saisie</h3>
      <p>
        Les personnes pouvant agir en contrefaçon peuvent, en vertu d'une ordonnance sur requête du
        président du tribunal, faire procéder par huissier notaire assisté d'un expert à la
        description détaillée, avec ou sans saisie réelle, des produits ou procédés prétendus
        contrefaits. La saisie réelle se limite aux échantillons nécessaires pour prouver la
        contrefaçon. L'ordonnance peut imposer un cautionnement.
        <ArticleRef>Art 86</ArticleRef>
      </p>
      <p>
        Avant la saisie, l'huissier doit remettre copie de l'ordonnance aux détenteurs des objets et,
        le cas échéant, l'acte de dépôt du cautionnement. Une copie du procès-verbal leur est remise.
        À défaut d'action en justice dans les quinze jours, la saisie ou la description est nulle de
        plein droit, sans préjudice des dommages-intérêts.
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        L'interdiction provisoire
      </h2>
      <p>
        Lorsque le tribunal est saisi d'une action en contrefaçon, son président, statuant en référé,
        peut interdire à titre provisoire et sous astreinte la poursuite des actes de contrefaçon
        présumés, ou subordonner leur poursuite à la constitution de garanties destinées à
        l'indemnisation du titulaire.
        <ArticleRef>Art 87</ArticleRef>
      </p>
      <p>
        La demande n'est admise que si l'action apparaît sérieuse au fond et a été engagée dans le
        mois de la connaissance des faits. Le juge peut subordonner l'interdiction à la constitution,
        par le demandeur, de garanties pour le préjudice éventuel du défendeur si l'action est
        finalement jugée non fondée.
      </p>
      <p>
        Les dispositions du chapitre XII ne font pas obstacle au recours à l'arbitrage dans les
        conditions prévues par le code de l'arbitrage.
        <ArticleRef>Art 89</ArticleRef>
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Les mesures à la frontière
      </h2>
      <p>
        Le propriétaire d'un brevet ou ses ayants droit peut, s'il dispose de motifs sérieux lui
        faisant soupçonner une importation de produits contrefaits, présenter aux services des
        douanes une demande écrite pour réclamer la suspension du dédouanement à l'importation. Il
        doit informer les douanes si son droit n'est plus valablement enregistré ou est arrivé à
        expiration.
        <ArticleRef>Art 91</ArticleRef>
      </p>
      <p>La demande doit contenir :</p>
      <ul>
        <li>les nom et prénom ou la dénomination sociale du demandeur, son domicile ou son siège ;</li>
        <li>une justification établissant qu'il est titulaire d'un droit sur les produits en litige ;</li>
        <li>
          une description des produits suffisamment précise pour permettre aux douanes de les
          reconnaître.
        </li>
      </ul>
      <p>
        Le demandeur doit fournir toutes les autres informations utiles, sans que leur présentation
        soit une condition de recevabilité : lieu où les produits sont situés ou destination prévue,
        identification de l'envoi ou des colis, date d'arrivée ou de dépôt prévue, moyen de transport,
        identification de l'importateur, de l'exportateur ou du détenteur.
        <ArticleRef>Art 92</ArticleRef>
      </p>

      <DataTable
        caption="Déroulement d'une retenue douanière"
        headers={["Étape", "Règle", "Référence"]}
        rows={[
          [
            "Examen de la demande",
            "Les douanes examinent la demande et informent sans délai le demandeur par écrit de la décision, dûment motivée. Elles peuvent exiger un cautionnement pour les frais de maintien sous contrôle douanier.",
            "Art 93",
          ],
          [
            "Retenue",
            "Si les produits correspondent à la demande, les douanes procèdent à la retenue, informent immédiatement le titulaire ou ses ayants droit, ainsi que le demandeur et l'importateur. Ils peuvent examiner les produits et prélever des échantillons.",
            "Art 94",
          ],
          [
            "Informations",
            "Au vu d'une ordonnance sur requête et aux fins d'actions en justice, les douanes informent le demandeur des noms et adresses de l'exportateur, de l'importateur et du destinataire, ainsi que de la quantité des produits.",
            "Art 94",
          ],
          [
            "Délai de dix jours",
            "La retenue est levée de plein droit si, dans les dix jours ouvrables de la notification, le demandeur ne justifie pas d'une action civile ou correctionnelle, de mesures conservatoires ou d'un cautionnement suffisant. Le délai peut être prorogé de dix jours ouvrables au maximum.",
            "Art 95",
          ],
          [
            "Levée par le propriétaire",
            "Le propriétaire, l'importateur ou le destinataire peut obtenir la levée en consignant un cautionnement fixé par le tribunal et suffisant pour protéger le demandeur, si les formalités douanières sont accomplies.",
            "Art 95",
          ],
          [
            "Jugement",
            "S'il est jugé que les produits sont contrefaits, le tribunal décide de leur destruction sous contrôle des douanes ou de leur exclusion du circuit commercial, sans porter atteinte aux droits du titulaire.",
            "Art 96",
          ],
          [
            "Initiative des douanes",
            "Les services des douanes peuvent suspendre de leur propre initiative le dédouanement des produits présumés contrefaits.",
            "Art 97",
          ],
          [
            "Responsabilité",
            "La responsabilité des douanes ne peut être engagée si elles ne parviennent pas à reconnaître les produits présumés contrefaits.",
            "Art 98",
          ],
          [
            "Bagages personnels",
            "Les dispositions du chapitre ne s'appliquent pas aux produits sans caractère commercial contenus dans les bagages personnels des voyageurs, dans la limite des quantités fixées par les lois et règlements.",
            "Art 99",
          ],
        ]}
      />

      <Callout tone="warning" title="Agir vite">
        La retenue douanière est limitée dans le temps et l'action en contrefaçon se prescrit par
        trois ans. Les délais de procédure doivent être suivis avec précision.
      </Callout>
    </GuidePage>
  );
}
