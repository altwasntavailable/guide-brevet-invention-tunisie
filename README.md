# Guide du brevet d'invention en Tunisie

Site web en français, construit avec **Next.js (App Router)** et **Tailwind CSS**, qui transforme
les deux PDF fournis en un guide pratique :

1. le guide **« Le brevet d'invention »** (INNORPI) ;
2. la **loi n° 2000-84 du 24 août 2000** relative aux brevets d'invention.

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

### 1. Initialiser Git et pousser sur GitHub

```bash
git init
git add .
git commit -m "Guide du brevet d'invention en Tunisie"
git branch -M main
```

Avec GitHub CLI (recommandé) :

```bash
gh repo create guide-brevet-tunisie --public --source=. --remote=origin --push
```

Sans GitHub CLI :

1. créez un dépôt vide sur <https://github.com/new> ;
2. puis exécutez :

```bash
git remote add origin https://github.com/VOTRE_COMPTE/guide-brevet-tunisie.git
git push -u origin main
```

### 2. Importer le dépôt sur Vercel

1. Connectez-vous à <https://vercel.com> avec votre compte GitHub.
2. Cliquez sur **Add New… → Project**.
3. Sélectionnez le dépôt `guide-brevet-tunisie`, puis **Import**.
4. Vercel détecte automatiquement **Next.js** :
   - Framework Preset : `Next.js` ;
   - Build Command : `npm run build` ;
   - Output Directory : `.next` ;
   - Install Command : `npm install`.
5. Aucune variable d'environnement n'est nécessaire.
6. Cliquez sur **Deploy**. Le site est publié sur une URL du type
   `https://guide-brevet-tunisie.vercel.app`.

Chaque push sur `main` redéploie automatiquement le site via l'intégration Git de Vercel.

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

### 4. Déploiement automatique via GitHub Actions (optionnel)

L'intégration Git de Vercel suffit dans la plupart des cas. Le workflow
`.github/workflows/deploy.yml` permet aussi de déployer depuis GitHub Actions.

1. Récupérez les identifiants du projet :

```bash
npx vercel login
npx vercel link
cat .vercel/project.json
```

2. Dans GitHub : **Settings → Secrets and variables → Actions → New repository secret**.
   Ajoutez :
   - `VERCEL_TOKEN` : jeton créé sur <https://vercel.com/account/tokens> ;
   - `VERCEL_ORG_ID` : valeur `orgId` de `.vercel/project.json` ;
   - `VERCEL_PROJECT_ID` : valeur `projectId` de `.vercel/project.json`.

3. Poussez sur `main`. Le workflow compile puis déploie en production.

> Si vous activez à la fois l'intégration Git Vercel et ce workflow, vous aurez deux déploiements
> par push. Dans ce cas, désactivez l'un des deux mécanismes.

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
