# Terre d'Eywar - Agence de Voyage Algérienne 🇩🇿

## 📋 Description du Projet

Terre d'Eywar, une agence de voyage basée en Algérie. Spécialisée dans l'organisation de circuits touristiques tout inclus. Ce projet exécuter avec React & Next.js nous offre une expérience utilisateur optimale pour découvrir et réserver des voyages authentiques en Algérie.

## 🏗️ Architecture du Projet

### Structure des Pages

Le site comprend plusieurs pages principales accessibles via la navigation :

- **Page d'Accueil** ([`/`](src/app/page.tsx)) : Présentation générale de l'agence et mise en avant des circuits phares.
- **Nos Circuits** ([`/circuits`](src/app/circuits/page.tsx)) : Catalogue complet des circuits proposés par l'agence.
- **Circuit [...]** ([`/circuitId`](src/app/circuits/slug/page.tsx)) : Les détails du circuit sélectionné.
- **Notre Histoire** ([`/about`](src/app/about/page.tsx)) : Présentation de l'agence, son histoire et ses valeurs.
- **Contactez-nous** ([`/contact`](src/app/contact/page.tsx)) : Formulaire de contact et informations pratiques.

### Pages Complémentaires (Footer)

**Contenu & Engagement :**

- **Témoignages Clients** ([`/testimonials`](src/app/testimonials/page.tsx)) : Avis et retours d'expérience des clients.
- **Blog Voyage** ([`/blog`](src/app/blog/page.tsx)) : Articles et conseils de voyage sur l'Algérie.
- **FAQ** ([`/faq`](src/app/faq/page.tsx)) : Questions fréquemment posées et réponses.

**Pages Légales :**

- **Mentions légales** ([`/legal`](src/app/legal/page.tsx)) : Informations légales de l'agence.
- **Politique de confidentialité** ([`/privacy`](src/app/privacy/page.tsx)) : Traitement des données personnelles.
- **Conditions Générales d'Utilisation** ([`/terms`](src/app/terms/page.tsx)) : CGU du site et services.

### Navigation et Structure

La navigation est définie dans [`headerLinks`](src/utils/data.ts) et comprend :

- Liens de navigation principaux dans le [`Header`](src/components/common/Header.tsx).
- Liens utiles organisés en blocs dans le [`Footer`](src/components/common/Footer.tsx) via [`footerBlocs`](src/utils/data.ts).
- Bouton de réservation accessible depuis toutes les pages.

## 🚀 Étapes de Développement

### Phase 1 : Développement "Dur" (Statique)

1. **Setup initial** : Configuration React, Next.js avec TypeScript et SCSS.
2. **Structure de base** : Création du layout principal avec Header/Footer.
3. **Pages statiques** : Développement des pages avec contenu fixe.
4. **Styles globaux** : Mise en place du système de design avec variables et mixins SCSS.

### Phase 2 : Développement Dynamique et Refactorisation

1. **Factorisation des composants** : Extraction de composants réutilisables.
2. **Segmentation du code** : Organisation modulaire pour une meilleure lisibilité.
3. **Gestion des données** : Implémentation de la gestion dynamique du contenu.
4. **Optimisation** : Performance et accessibilité.

## 🛠️ Technologies Utilisées

- **Framework** : React et Next.js 15.4.4 avec App Router.
- **Language** : TypeScript pour un code type-safe.
- **Styling** : SCSS avec architecture modulaire.
- **Qualité** : ESLint avec règles strictes et workflows GitHub Actions.
- **Fonts** : Bebas Neue (titres) et Titillium Web (texte).

## 📁 Structure du Code

### Composants Communs

- [`Header`](src/components/common/Header.tsx) : Navigation principale avec logo et menu.
- [`Footer`](src/components/common/Footer.tsx) : Liens organisés et informations légales.
- [`Button`](src/components/common/Button.tsx) : Composant bouton réutilisable.

### Styles

- [`globals.scss`](src/styles/globals.scss) : Styles globaux et imports.
- [`variables.scss`](src/styles/utils/variables.scss) : Variables de couleurs, tailles et polices.
- [`mixins.scss`](src/styles/utils/mixins.scss) : Mixins pour typography, breakpoints et layout.

### Données

- [`data.ts`](src/utils/data.ts) : Configuration des liens de navigation et footer.

## 🎨 Système de Design

### Palette de Couleurs

- **Primaire** : `#50300A` (brun terreux)
- **Background** : `#E4D3B9` (beige chaleureux)
- **Contraste** : Blanc et noir

### Typography

- **Titres** : Bebas Neue (caractère fort et moderne)
- **Texte** : Titillium Web (lisibilité optimale)

### Responsive Design

Breakpoints définis pour une expérience optimale :

- Mobile : ≤ 767px
- Tablet : ≤ 1023px
- Small Desktop : ≤ 1279px
- Medium Desktop : ≤ 1414px

## 🔧 Scripts de Développement

```bash
# Lancement du serveur de développement
npm run dev

# Build de production
npm run build

# Vérification du code (ESLint)
npm run lint

# Démarrage en production
npm start
```

## 📊 Qualité du Code

### ESLint Configuration

Le projet utilise une configuration ESLint stricte avec :

- **Qualité** : Prévention des erreurs courantes.
- **Bonnes pratiques** : Égalité stricte, gestion d'erreurs.
- **Lisibilité** : Formatage cohérent. (quotes simples, point-virgules, ...)
- **React/Next.js** : Règles optimisées pour React 17+ et Next.js.
- **Accessibilité** : Règles JSX pour une meilleure UX.

### GitHub Actions

Workflows automatisés pour :

- **CI/CD** : Tests sur push/PR (branches main).
- **Lint** : Vérification qualité code avec déclenchement manuel.
- **Multi-version** : Tests Node.js 18.x et 20.x

## 🚦 Getting Started

1. **Installation des dépendances**

    ```bash
    npm install
    ```

2. **Lancement du serveur de développement**

    ```bash
    npm run dev
    ```

3. **Accès à l'application**
   Ouvrir [http://localhost:3000](http://localhost:3000)

## 📝 Prochaines Étapes

1. **Contenu dynamique** : Intégration d'une API pour les circuits.
2. **Système de réservation** : Implémentation du processus de booking.
3. **Galerie photos** : Ajout d'un système de galerie pour les destinations.
4. **Blog voyage** : Section blog pour le contenu éditorial.
5. **SEO** : Optimisation pour les moteurs de recherche.

---

Développé avec ❤️ pour promouvoir le tourisme authentique en Algérie 🇩🇿
