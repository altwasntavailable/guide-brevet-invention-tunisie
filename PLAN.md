# Plan du site et correspondance PDF → pages

## 1. Principe

Les deux PDF fournis sont la seule source de vérité :

- `brevet.pdf` : guide pratique « Le brevet d'invention » (INNORPI), 4 pages ;
- `loi relative aux brevets.pdf` : loi n° 2000-84 du 24 août 2000, 12 pages, 103 articles.

Le brief demandait un guide de création d'entreprise, mais les PDF ne contiennent aucune
information sur ce sujet. Le plan ci-dessous suit donc **le contenu réel des PDF** : le brevet
d'invention en Tunisie. Aucun contenu de création d'entreprise n'a été ajouté.

## 2. Arborescence du site

```text
/                                   Accueil
/guide                              Vue d'ensemble du parcours
/guide/comprendre                   Comprendre le brevet
/guide/brevetabilite                Vérifier la brevetabilité
/guide/depot                        Préparer et déposer la demande
/guide/examen                       Examen, publication et délivrance
/guide/couts                        Coûts et délais
/guide/droits                       Droits et obligations
/guide/licences                     Licences et transmission
/guide/contrefacon                  Contrefaçon et frontières
/loi                                Texte intégral (14 chapitres, 103 articles)
/faq                                Questions fréquentes
/checklist                          Checklist de préparation
```

## 3. Mapping détaillé

### 3.1 Guide INNORPI (`brevet.pdf`)

| Contenu du PDF | Page du site | Traitement |
|---|---|---|
| Titre « Le brevet d'invention » | Accueil | Présentation du guide et du parcours. |
| Qu'est-ce qu'une invention ? | `/guide/comprendre` | Repris mot pour mot, avec référence à l'article 1er. |
| Qu'est-ce qu'un brevet d'invention ? | `/guide/comprendre` | Repris mot pour mot, complété par l'article 46. |
| Conditions de la brevetabilité | `/guide/brevetabilite` | Les trois conditions + renvois aux articles 2, 4, 5 et 6. |
| La nouveauté | `/guide/brevetabilite` | Définition, état de la technique, divulgation de douze mois. |
| L'inventivité | `/guide/brevetabilite` | Définition et appréciation par l'homme du métier. |
| L'application industrielle | `/guide/brevetabilite` | Fabrication ou utilisation dans l'industrie ou l'agriculture. |
| Ne sont pas considérées comme inventions | `/guide/brevetabilite` | Liste a à f de l'article 2, reprise intégralement. |
| Le brevet ne peut être délivré pour | `/guide/brevetabilite` | Variétés végétales, races animales, procédés biologiques, ordre public, etc. |
| Comment déposer une demande ? | `/guide/depot` | Dépôt auprès du département de la propriété industrielle de l'INNORPI. |
| Pièces à fournir (requête, description, revendications, dessins, abrégé, pouvoir, redevances, priorité) | `/guide/depot` | Liste complète, avec le détail légal des articles 20 et 21. |
| Qui peut déposer ? | `/guide/depot` | Personnes physiques ou morales, résidents, non-résidents, mandataire. |
| Combien coûte la protection ? | `/guide/couts` | Tableau des trois redevances et mention TND/TTC. |
| Durée de protection | `/guide/comprendre` et `/guide/couts` | Vingt ans à compter du dépôt. |
| Maintien en vigueur des droits | `/guide/couts` | Annuités, date anniversaire, délai de grâce de six mois, surtaxe, déchéance. |
| Annuités de la 2e à la 20e | `/guide/couts` | Tableau des quatre tranches, montants TTC. |

### 3.2 Loi n° 2000-84 (`loi relative aux brevets.pdf`)

| Chapitre / articles | Page du site | Traitement |
|---|---|---|
| Chapitre premier — articles 1 à 6 | `/guide/comprendre`, `/guide/brevetabilite`, `/loi` | Définitions, conditions, exclusions, nouveauté, activité inventive, application industrielle. |
| Chapitre II — articles 7 et 8 | `/guide/comprendre`, `/loi` | Droit au brevet, premier déposant, invention collective, action en revendication. |
| Chapitre II, section 2 — articles 9 à 18 | `/guide/comprendre`, `/loi` | Inventions des salariés, déclaration, compensation, délais, confidentialité. |
| Chapitre III — articles 19 à 28 | `/guide/depot`, `/loi` | Forme de la demande, mandataire, pièces, langue, unité, priorité, date, modifications, division, rectification. |
| Chapitre III, section 2 — articles 29 à 31 | `/guide/examen`, `/loi` | Examen de forme, examen au fond, publication à dix-huit mois. |
| Chapitre III, section 3 — article 32 | `/guide/depot`, `/loi` | Retrait de la demande et consentements requis. |
| Chapitre IV — articles 33 à 38 | `/guide/examen`, `/loi` | Délivrance, suspension, absence de garantie, durée, registre national, accès aux dossiers. |
| Chapitre V — articles 39 à 45 | `/guide/examen`, `/loi` | Recours, délai d'un mois, requête, notification, représentation. |
| Chapitre VI — articles 46 à 50 | `/guide/droits`, `/loi` | Droit exclusif, actes interdits, exceptions, prior user, importation d'intérêt public, perfectionnement. |
| Chapitre VI, section 2 — articles 51 à 53 | `/guide/droits`, `/guide/couts`, `/guide/licences`, `/loi` | Obligation d'exploiter, redevances et annuités, licence du brevet de perfectionnement. |
| Chapitre VII — articles 54 à 61 | `/guide/droits`, `/loi` | Renonciation, nullité, déchéance, restauration. |
| Chapitre VIII — article 62 | `/guide/licences`, `/loi` | Cession, transmission, saisie, inscription au registre. |
| Chapitre IX — articles 63 à 68 | `/guide/licences`, `/loi` | Licences contractuelles, exclusivité, territoire, sous-licence, fin du contrat, restitution. |
| Chapitre X — articles 69 à 77 | `/guide/licences`, `/loi` | Licences obligatoires : cas, procédure, conditions, cession, retrait. |
| Chapitre XI — articles 78 à 81 | `/guide/licences`, `/loi` | Licences d'office : mise en demeure, santé publique, défense, effets. |
| Chapitre XII — articles 82 à 90 | `/guide/contrefacon`, `/loi` | Contrefaçon, sanctions, action civile, preuve, saisie, référé, prescription, arbitrage, fausse qualité. |
| Chapitre XIII — articles 91 à 99 | `/guide/contrefacon`, `/loi` | Demande douanière, contenu, retenue, délais, destruction, initiative des douanes, bagages personnels. |
| Chapitre XIV — articles 100 à 103 | `/loi` | Dispositions transitoires, étrangers, abrogation, produits pharmaceutiques et agricoles. |

## 4. Navigation et parcours

Le parcours principal reprend l'ordre logique de la démarche :

1. Comprendre le brevet.
2. Vérifier la brevetabilité.
3. Préparer et déposer la demande.
4. Suivre l'examen et la délivrance.
5. Payer les redevances et annuités.
6. Exploiter et défendre le brevet.
7. Conclure une licence ou transmettre le brevet.
8. Agir en contrefaçon et utiliser les mesures frontières.

La barre de progression est enregistrée dans le navigateur (stockage local), sans transmission de
données.

## 5. Pages transverses

| Page | Rôle |
|---|---|
| `/loi` | Texte intégral, chapitres et articles, avec sommaire ancré. |
| `/faq` | 25 questions/réponses strictement issues des deux PDF. |
| `/checklist` | Checklist interactive et imprimable des pièces et échéances. |
| Accueil | Synthèse, chiffres clés, accès aux huit étapes. |
