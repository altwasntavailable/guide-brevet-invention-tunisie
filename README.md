# Guide du brevet d'invention en Tunisie

Site web en français, construit avec **Next.js (App Router)** et **Tailwind CSS**, qui transforme
les deux PDF fournis en un guide pratique :

1. le guide **« Le brevet d'invention »** (INNORPI) ;
2. la **loi n° 2000-84 du 24 août 2000** relative aux brevets d'invention.

## Liens

- **Site en ligne :** <https://guide-brevet-invention-tunisie.vercel.app>
- **Dépôt GitHub :** <https://github.com/altwasntavailable/guide-brevet-invention-tunisie>
- **Archive du dépôt :** <https://github.com/altwasntavailable/guide-brevet-invention-tunisie/archive/refs/heads/main.zip>

Le déploiement Vercel est automatisé par GitHub Actions à chaque push sur `main`
(`.github/workflows/deploy.yml`).

> **Remarque importante sur le brief initial**
>
> Le fichier `message.txt` demandait un guide de création d'entreprise. Or les deux PDF présents
> dans le dossier ne traitent pas de création d'entreprise : ils portent exclusivement sur le
> **brevet d'invention en Tunisie**. Les PDF étant la seule source de vérité, le site a été adapté
> au contenu réel : un guide complet du brevet d'invention, de la brevetabilité au dépôt, aux
> coûts, aux droits, aux licences, à la contrefaçon et aux mesures douanières. Aucune information
> de création d'entreprise n'a été inventée.

## Fonctionnalités

- Parcours guidé en 8 étapes avec barre de progression et validation des étapes (stockage local).
- Sommaire latéral sur toutes les pages du guide.
- Checklist imprimable et interactive (pièces, priorités, échéances).
- Texte intégral de la loi : 14 chapitres, 103 articles, ancres par chapitre et par article.
- FAQ construite à partir des questions explicites et implicites des documents.
- Design responsive, contrastes soignés, navigation clavier, `aria-label`, lien d'évitement.
- Pages statiques optimisées pour Vercel, métadonnées SEO, sitemap et robots.

## Structure du projet

```text
.
├── app/
│   ├── layout.tsx              # En-tête, pied de page, métadonnées globales
│   ├── page.tsx                # Accueil
│   ├── globals.css             # Styles Tailwind + styles éditoriaux
│   ├── not-found.tsx           # Page 404
│   ├── robots.ts               # robots.txt
│   ├── sitemap.ts              # sitemap.xml
│   ├── guide/
│   │   ├── page.tsx            # Vue d'ensemble du parcours
│   │   ├── comprendre/         # Définition, titularité, salariés
│   │   ├── brevetabilite/      # Nouveauté, inventivité, exclusions
│   │   ├── depot/              # Pièces, priorité, modifications
│   │   ├── examen/             # Examen, publication, recours
│   │   ├── couts/              # Redevances, annuités, délais
│   │   ├── droits/             # Droit exclusif, obligations, déchéance
│   │   ├── licences/           # Licences et transmission
│   │   └── contrefacon/        # Sanctions et douanes
│   ├── loi/                    # Texte intégral de la loi
│   ├── faq/                    # Questions fréquentes
│   └── checklist/              # Checklist de dépôt
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── GuidePage.tsx           # Gabarit commun des pages du guide
│   ├── GuideSidebar.tsx
│   ├── CourseProgress.tsx      # Progression (localStorage)
│   ├── ChecklistClient.tsx     # Checklist interactive
│   ├── PrintButton.tsx
│   └── ui.tsx                  # Callout, tableaux, références d'articles
├── lib/
│   ├── content.ts              # Montants, délais, FAQ, checklist
│   ├── loi.ts                  # Texte intégral structuré (103 articles)
│   └── navigation.ts           # Navigation et étapes du parcours
├── .github/workflows/deploy.yml
├── vercel.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Installation locale

Prérequis : **Node.js 20+** et npm.

```bash
npm install
npm run dev
```

Le site est disponible sur <http://localhost:3000>.

Autres commandes :

```bash
npm run build   # compilation de production
npm run start   # serveur de production local
npm run lint    # vérification ESLint
```

## Contenu et sources

- `brevet.pdf` : guide INNORPI, 4 pages.
- `loi relative aux brevets.pdf` : loi n° 2000-84, 12 pages du Journal Officiel.
- Les montants, délais et règles sont reproduits tels quels ; aucun montant n'est calculé.
- Page de référence : `/loi` (texte intégral).
- Le site est informatif et ne remplace pas un conseil juridique ni les formulaires officiels.

## Déploiement sur Vercel

Le projet est déjà déployé :

- **Production :** <https://guide-brevet-invention-tunisie.vercel.app>
- **GitHub :** <https://github.com/altwasntavailable/guide-brevet-invention-tunisie>

### Redéployer après une modification

```bash
git add .
git commit -m "Description de la modification"
git push
```

Le workflow GitHub Actions `.github/workflows/deploy.yml` compile le projet et le déploie en
production. Les secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` et `VERCEL_PROJECT_ID` sont configurés
dans le dépôt GitHub.

### Recréer le déploiement depuis zéro

```bash
git init
git add .
git commit -m "Guide du brevet d'invention en Tunisie"
git branch -M main
gh repo create guide-brevet-invention-tunisie --public --source=. --remote=origin --push
```

Puis, sur <https://vercel.com>, cliquez sur **Add New… → Project**, importez le dépôt et laissez
Vercel détecter **Next.js** (Build Command `npm run build`, Output Directory `.next`,
Install Command `npm install`). Aucune variable d'environnement n'est nécessaire.

### 3. Brancher un nom de domaine personnalisé

1. Dans le projet Vercel : **Settings → Domains → Add**.
2. Saisissez le domaine (ex. `guide-brevet.tn`) et validez.
3. Vercel affiche les enregistrements DNS à créer chez votre registrar :
   - pour un domaine racine (`exemple.tn`) : un enregistrement **A** vers l'adresse fournie par Vercel ;
   - pour un sous-domaine (`www.exemple.tn`) : un enregistrement **CNAME** vers la cible fournie
     par Vercel (souvent `cname.vercel-dns.com`).
4. Recopiez **exactement** les valeurs affichées dans Vercel, puis attendez la propagation DNS.
5. Vercel génère automatiquement le certificat HTTPS. Choisissez le domaine principal et
   configurez la redirection de `www` vers le domaine racine (ou l'inverse).

### 4. Déploiement automatique via GitHub Actions

Le workflow `.github/workflows/deploy.yml` est déjà configuré. Les secrets du dépôt sont :

- `VERCEL_TOKEN` : jeton d'accès Vercel ;
- `VERCEL_ORG_ID` : identifiant du compte Vercel ;
- `VERCEL_PROJECT_ID` : identifiant du projet Vercel.

Pour recréer cette configuration sur un autre dépôt :

```bash
npx vercel login
npx vercel link
cat .vercel/project.json
```

Puis dans GitHub : **Settings → Secrets and variables → Actions → New repository secret**,
ajoutez les trois secrets ci-dessus. Chaque push sur `main` compile et déploie automatiquement le
site en production.

## Accessibilité et qualité

- Lien d'évitement vers le contenu principal.
- Navigation au clavier et styles `:focus-visible`.
- Contrastes vérifiés sur les textes et boutons.
- `aria-current`, `aria-expanded`, `aria-label`, barres de progression avec `role="progressbar"`.
- Tableaux avec en-têtes `scope` et légendes.
- Respect de `prefers-reduced-motion` pour réduire animations et défilement fluide.

## Personnalisation rapide

- **Montants, délais, FAQ, checklist** : `lib/content.ts`.
- **Texte de loi** : `lib/loi.ts` (tableau `loiChapitres`).
- **Navigation et étapes** : `lib/navigation.ts`.
- **Couleurs et typographie** : `tailwind.config.ts`.
- **URL du site** : `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`.

## Licence et avertissement

Projet informatif. Les textes officiels restent la seule référence opposable. Vérifiez toute
évolution réglementaire et les formulaires en vigueur auprès de l'INNORPI avant tout dépôt.
