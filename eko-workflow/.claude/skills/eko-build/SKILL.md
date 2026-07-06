---
name: eko-build
description: >
  Concevoir et développer une page ou un composant du portfolio Eko de Marie Arnaud,
  à partir d'une maquette Figma ou d'une idée sans maquette. Utiliser cette skill dès
  qu'il s'agit de créer, coder, intégrer ou faire évoluer une section du site :
  gestion des tokens/variables Tailwind, thèmes light/dark, accessibilité RGAA AA,
  responsive en grid bento, éco-conception, et production d'une démo HTML de validation
  avant toute mise en production. Déclencher même si Marie ne dit pas explicitement
  « build » — par exemple « crée le hero », « intègre cette section », « fais-moi
  cette page à partir du Figma ».
---

# Build — Concevoir & développer une page

## Deux points d'entrée

### A. On part d'une maquette designée (Figma)
1. **Commence par regarder le Figma** : structure de la page, hiérarchie des blocs,
   contenus. Ne code rien avant d'avoir compris l'intention.
2. Si Marie demande de créer une page à partir du Figma, **respecte le ou les
   mockups** : positions, hiérarchie, contenus, spacings et margins fournis.
3. Récupère les tokens depuis les variables Figma (voir règles d'or ci-dessous).

### B. On part d'une idée sans maquette
1. **Commence par étudier la demande / la problématique** et **challenge-la par des
   questions** avant de produire quoi que ce soit. Objectif, cible, contenu réel,
   contraintes, place dans le parcours.
2. Une fois l'intention claire, propose une structure, puis passe au build en
   respectant les mêmes règles d'or.

Les deux chemins **convergent ensuite** vers : vérification accessibilité +
éco-conception → démo HTML de validation → (après validation) mise en production.

## Règles d'or (non négociables)

### Design system & tokens
- Tokens couleurs et variables **toujours basés sur Tailwind**.
- **Light theme** → couleurs de la colonne *light* du Figma.
- **Dark theme** → couleurs de la colonne *dark* du Figma.
- **Contrainte forte** : jamais **plus de variables en production que dans le Figma**.
  Si une couleur manque pour un besoin d'accessibilité, la créer — mais la répercuter
  aussi dans le Figma pour garder la parité.

### Accessibilité
- Cible **RGAA 100 % niveau AA**.
- Fonts responsives.
- Couleurs qui matchent entre elles ET contrastes conformes AA (texte, composants,
  états de focus visibles, navigation clavier, attributs ARIA quand nécessaire, alt
  sur les images).

### Responsive & mise en page
- Fonts responsives (échelle fluide).
- Parti pris **grid bento**.
- Respecter spacings et margins quand ils sont fournis.
- Points de contrôle : 375 px / 768 px / 1440 px / 1920 px.

### Éco-conception
- Optimiser images (formats modernes, tailles adaptées, lazy-loading), limiter le
  poids des polices, réduire le JavaScript, privilégier le statique et le CSS natif.
- Un site sobre = plus rapide, meilleur Lighthouse, moins d'empreinte.

## Étape de validation (obligatoire)
- **Toujours fabriquer un HTML ou une démo pour validation avant la mise en
  production.** Présenter la démo, attendre le feu vert de Marie, ne jamais pousser
  en prod directement.

## Check final avant de considérer une page « prête à valider »
- [ ] Fidèle au Figma (si maquette) ou à l'intention validée (si idée).
- [ ] Tokens Tailwind branchés, thèmes light ET dark corrects.
- [ ] Pas plus de variables qu'en Figma.
- [ ] Contrastes AA vérifiés, navigation clavier OK.
- [ ] Responsive vérifié aux 4 breakpoints.
- [ ] Poids optimisé (images, fonts, JS).
- [ ] Démo HTML prête à montrer.

Après validation, enchaîner sur la skill **eko-test** puis **eko-audit** ; avant la
prod, dérouler **eko-debug**.
