import GuidePage from "@/components/GuidePage";
import { ArticleRef, Callout, DataTable } from "@/components/ui";

export const metadata = {
  title: "Vérifier la brevetabilité",
  description:
    "Les trois conditions de brevetabilité et les exclusions prévues par la loi tunisienne sur les brevets d'invention.",
};

export default function BrevetabilitePage() {
  return (
    <GuidePage
      href="/guide/brevetabilite"
      eyebrow="Brevetabilité"
      title="Vérifier la brevetabilité de votre invention"
      intro="Le brevet est délivré pour les inventions nouvelles, impliquant une activité inventive et susceptibles d'application industrielle. La loi prévoit aussi des exclusions expresses."
      sources={[
        "Guide « Le brevet d'invention » — INNORPI, pages 1 et 2.",
        "Loi n° 2000-84, articles 2 à 6.",
      ]}
    >
      <h2 className="not-prose mt-0 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Les trois conditions
      </h2>
      <p>
        Le brevet est délivré pour les inventions nouvelles impliquant une activité inventive et
        susceptibles d'application industrielle.
        <ArticleRef>Art 2</ArticleRef>
      </p>

      <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "Nouveauté",
            text: "L'invention ne doit pas être comprise dans l'état de la technique.",
          },
          {
            title: "Activité inventive",
            text: "Elle ne doit pas être évidente pour un homme du métier au regard de l'état de la technique.",
          },
          {
            title: "Application industrielle",
            text: "Elle doit pouvoir être fabriquée ou utilisée dans tout genre d'industrie ou dans l'agriculture.",
          },
        ].map((item, index) => (
          <div key={item.title} className="rounded-xl border border-ink-200 bg-white p-4">
            <span className="text-xs font-semibold text-brand-700">0{index + 1}</span>
            <h3 className="mt-1 text-base font-semibold text-ink-950">{item.title}</h3>
            <p className="mt-1 text-sm leading-6 text-ink-600">{item.text}</p>
          </div>
        ))}
      </div>

      <h3>La nouveauté</h3>
      <p>
        Est nouvelle l'invention qui n'est pas comprise dans l'état de la technique. L'état de la
        technique est constitué par tout ce qui a été rendu accessible au public, avant la date de
        dépôt de la demande ou la date de priorité valablement revendiquée pour cette demande, et ce,
        par une description écrite ou orale, un usage ou tout autre moyen.
        <ArticleRef>Art 4</ArticleRef>
      </p>
      <p>
        L'état de la technique comprend également le contenu de toute demande de brevet tunisien
        dont la date de dépôt ou, le cas échéant, de priorité est antérieure à la date de la demande,
        et qui n'a été publiée qu'à cette date ou à une date postérieure.
      </p>
      <Callout tone="info" title="Divulgation dans les douze mois">
        Une divulgation n'est pas prise en considération si elle est intervenue dans les douze mois
        qui précèdent la date de dépôt ou la date de priorité, et si elle a résulté directement ou
        indirectement d'un abus évident à l'égard du déposant ou de son prédécesseur en droit.
        <span className="ml-1 text-xs font-semibold uppercase tracking-wide text-brand-800">Art 4</span>
      </Callout>

      <h3>L'activité inventive</h3>
      <p>
        Une invention implique une activité inventive si, pour un homme du métier, elle n'est pas
        évidente en comparaison avec l'état de la technique à la date du dépôt ou à la date de la
        priorité valablement revendiquée.
      </p>
      <p>
        L'état de la technique est considéré dans son ensemble, y compris non seulement les éléments
        distincts ou les parties de ces éléments considérés séparément, mais également les
        combinaisons de tels éléments ou parties d'éléments lorsque ces combinaisons sont évidentes
        pour un homme du métier.
        <ArticleRef>Art 5</ArticleRef>
      </p>

      <h3>L'application industrielle</h3>
      <p>
        Une invention est considérée comme susceptible d'application industrielle si son objet peut
        être fabriqué ou utilisé dans tout genre d'industrie, ou dans l'agriculture.
        <ArticleRef>Art 6</ArticleRef>
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Ce qui n'est pas considéré comme une invention
      </h2>
      <p>
        Ne sont pas considérées comme inventions au sens de l'article 2, notamment :
        <ArticleRef>Art 2</ArticleRef>
      </p>
      <ul>
        <li>les créations purement ornementales ;</li>
        <li>
          les découvertes et les théories scientifiques ainsi que les méthodes mathématiques ;
        </li>
        <li>
          les plans, principes et méthodes destinés à être utilisés dans l'exercice d'activités
          purement intellectuelles, en matière de jeu, dans le domaine des activités économiques ou
          en matière de logiciels ;
        </li>
        <li>
          les méthodes de traitement thérapeutique et chirurgical du corps humain ou de l'animal et
          les méthodes de diagnostic appliquées au corps humain ou à l'animal — ces dispositions ne
          s'appliquent pas aux préparations, notamment aux produits et compositions utilisés aux fins
          de l'application de l'une de ces méthodes ;
        </li>
        <li>les présentations d'informations ;</li>
        <li>toutes sortes de substances vivantes existant dans la nature.</li>
      </ul>
      <p>
        Les exceptions concernant la brevetabilité des éléments énumérés ne s'appliquent qu'aux dits
        éléments considérés en tant que tels.
      </p>

      <h2 className="not-prose mt-10 font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Ce pour quoi le brevet ne peut pas être délivré
      </h2>
      <p>
        Le brevet ne peut être délivré pour :
        <ArticleRef>Art 3</ArticleRef>
      </p>
      <ul>
        <li>
          les variétés végétales, les races animales ou les procédés essentiellement biologiques
          d'obtention de végétaux ou d'animaux — cette disposition ne s'applique pas aux procédés
          biologiques médicaux et aux produits obtenus par ces procédés ;
        </li>
        <li>
          les inventions dont la publication ou la mise en œuvre seraient contraires aux bonnes
          mœurs, à l'ordre public, à la santé publique ou à la sauvegarde de l'environnement.
        </li>
      </ul>
      <p>
        La mise en œuvre du brevet ne peut être considérée comme contraire du seul fait qu'elle est
        limitée par une disposition légale ou réglementaire.
      </p>

      <DataTable
        caption="Récapitulatif des conditions et exclusions"
        headers={["Point", "Contenu de la loi", "Référence"]}
        rows={[
          ["Nouveauté", "Ne pas être comprise dans l'état de la technique accessible au public avant le dépôt ou la priorité.", "Art 4"],
          ["Activité inventive", "Ne pas être évidente pour un homme du métier au regard de l'état de la technique.", "Art 5"],
          ["Application industrielle", "Pouvoir être fabriquée ou utilisée dans tout genre d'industrie ou dans l'agriculture.", "Art 6"],
          ["Exclusions de brevetabilité", "Créations ornementales, découvertes, théories, méthodes, logiciels, méthodes de traitement, présentations d'informations, substances vivantes existantes dans la nature.", "Art 2"],
          ["Interdictions absolues", "Variétés végétales, races animales, procédés essentiellement biologiques (sauf procédés biologiques médicaux et produits obtenus), atteintes aux bonnes mœurs, à l'ordre public, à la santé publique ou à l'environnement.", "Art 3"],
        ]}
      />

      <Callout tone="warning" title="Le brevet n'est pas une garantie de validité">
        Les brevets sont délivrés aux risques et périls des demandeurs et sans la garantie de l'État,
        quant à la réalité, la nouveauté et le mérite de l'invention, ou quant à l'exactitude de la
        description.
        <span className="ml-1 text-xs font-semibold uppercase tracking-wide text-sand-800">Art 35</span>
      </Callout>
    </GuidePage>
  );
}
