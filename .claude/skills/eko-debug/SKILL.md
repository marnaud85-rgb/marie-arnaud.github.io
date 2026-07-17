---
name: eko-debug
description: >
  Vérifier et déboguer le portfolio Eko de Marie Arnaud avant de déclarer « c'est
  corrigé » ou de mettre en production. Utiliser cette skill dès qu'un bug est signalé,
  qu'une correction vient d'être faite, ou avant tout déploiement : checklist express
  de non-régression (build de prod local, console, network, thèmes light/dark, breakpoints,
  contenu réel, multi-navigateurs, Lighthouse) et liste des bugs fréquents à re-tester.
  Déclencher pour « corrige ce bug », « vérifie avant la mise en prod », « est-ce que
  c'est bon pour déployer », « ça marche pas en prod ».
---

# Dé-bug — Vérification avant « c'est corrigé »

## Contexte technique du site

- Nom de domaine sur OVH : `marie-arnaud.com`.
- Site hébergé sur GitHub.
- Clé Anthropic créée pour le module de chat IA (voir skill **eko-securite**).

## Règle d'or

Ne jamais déclarer « c'est corrigé » ni pousser en prod sans avoir déroulé la
checklist ci-dessous **en entier**. Une correction non vérifiée sur tous les axes est
une correction non finie.

## Checklist express avant de déclarer « c'est corrigé »

- [ ] **Build de prod testé en local** (`npm run build && npm run preview`).
- [ ] **Console sans erreur** (aucune erreur rouge).
- [ ] **Onglet Network sans 404**.
- [ ] **Thème clair ET sombre** vérifiés visuellement, section par section.
- [ ] Testé à **375 px / 768 px / 1440 px / 1920 px**.
- [ ] Testé avec du **contenu réel** (pas juste la démo / le lorem).
- [ ] Testé sur **au moins 2 navigateurs différents**.
- [ ] **Lighthouse relancé** après la correction.

## Autres bugs fréquents à re-vérifier

| Catégorie | Vérification rapide |
|---|---|
| **Console JS** | Aucune erreur rouge dans la console en prod. |
| **Cross-browser** | Tester au minimum Chrome, Safari, Firefox (Safari casse souvent des choses que Chrome laisse passer). |
| **Formulaire de contact** | Envoyer un vrai message test **en prod** (le comportement en local diffère parfois : clé API ou endpoint différent). |
| **Liens externes** | Vérifier qu'ils s'ouvrent bien et pointent vers la bonne URL (pas de lien de dev oublié). |
| **Performance** | Lancer Lighthouse (Performance, Accessibilité, SEO, Bonnes pratiques). |
| **SEO de base** | `title`, `meta description` et `og:image` présents et corrects. |

## Réflexe

Si un doute subsiste sur un point de la checklist, considérer que ce n'est **pas**
corrigé. Reprendre, re-tester, puis seulement valider.
