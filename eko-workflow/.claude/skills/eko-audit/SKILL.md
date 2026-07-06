---
name: eko-audit
description: >
  Auditer le portfolio Eko de Marie Arnaud avec le regard critique et exigeant de
  profils seniors (Senior Product Designer et Head of Design). Utiliser cette skill
  quand Marie veut une évaluation experte de la crédibilité et de la maturité de son
  portfolio, au-delà de l'utilisabilité : grille de lecture par profil, méthodologie
  (audit heuristique, speed review 30-90 s, deep dive, debrief), grille de critères
  notés de 1 à 5, et scorecard finale avec points forts, red flags et écarts de
  perception. Déclencher pour « audite mon portfolio », « est-ce qu'un Head of Design
  me shortlisterait », « évalue la crédibilité senior de mon site ».
---

# Audit — Regard expert senior

## Différence avec le Test

Le test mesure l'utilisabilité et la première impression. L'audit **simule le regard
critique de recruteurs seniors**, avec une grille bien plus experte et exigeante. On
ne juge pas seulement le rendu visuel : on juge la **qualité du raisonnement design**
et la **maturité du process**.

## Cible de l'audit

Senior Product Designer et Head of Design. Idéalement 2 à 3 « auditeurs » par profil,
incarnés par Claude.

## Objectifs

- Évaluer la qualité du **raisonnement design** (pas juste le rendu visuel).
- Vérifier que le portfolio démontre une **maturité de process** (recherche, itération,
  décisions).
- Juger la **crédibilité professionnelle** perçue par un recruteur senior.
- Vérifier que le contenu répond aux critères tacites d'un Head of Design en phase de
  **shortlist** (souvent 30-90 s par candidat).
- Repérer les **signaux de craft** (typographie, hiérarchie, micro-détails) qu'un œil
  senior repère instantanément.

## Grille de lecture selon le profil

**Product Designer (pair)**
- Focus : qualité du process, craft, méthodo.
- Cherche : « comment il/elle pense », détails d'exécution.
- Sensible à : cohérence UI, systèmes, prototypes.
- Red flags : UI générique, absence de process visible.

**Head of Design (décideur)**
- Focus : impact business, leadership, jugement stratégique.
- Cherche : « peut-il/elle porter un projet seul·e / manager ».
- Sensible à : storytelling, métriques, collaboration cross-fonctionnelle.
- Red flags : pas de contexte business, rôle flou dans le projet.

## Méthodologie (à combiner)

1. **Audit heuristique guidé** : chaque auditeur remplit la grille de critères
   indépendamment, avant toute discussion, pour éviter les biais de groupe.
2. **Cognitive walkthrough côté hiring** : l'auditeur simule le geste « je shortlist
   ou pas » en verbalisant à voix haute.
3. **Speed review (30-90 s)** : reproduire le tri de CV réel — montrer la page,
   chronométrer, demander le verdict à chaud.
4. **Deep dive (15-20 min)** : lecture complète d'un case study avec questions
   approfondies.
5. **Debrief structuré** : entretien semi-directif pour creuser le « pourquoi »
   derrière chaque note.

## Grille de critères à noter (1 à 5)

**Premières impressions (0-10 s)**
- Positionnement clair (type de designer, séniorité perçue).
- Qualité visuelle immédiate (typo, grille, espace, cohérence).
- Absence de fautes, de liens morts, de placeholder.

**Contenu / case studies**
- Structure narrative claire : contexte → problème → process → décisions → résultat
  → apprentissage.
- Rôle explicite : ce que Marie a fait vs l'équipe.
- Preuves de recherche utilisateur et de méthodo (pas juste des mockups finaux).
- Itérations montrées (les faux départs comptent, pas seulement la solution finale).
- Métriques ou impact business (conversion, rétention, NPS, temps gagné…).
- Contraintes réelles (techniques, business, deadline) et comment elles ont été gérées.

**Craft & exécution**
- Qualité de la hiérarchie visuelle et de la mise en page.
- Cohérence du design system / des composants.
- Qualité des prototypes / interactions si montrés.

**Signaux « senior » (pour Head of Design)**
- Preuves de collaboration cross-fonctionnelle (PM, dev, data, business).
- Capacité à justifier des choix face à un désaccord.
- Vision produit/stratégique au-delà de l'exécution.
- Storytelling clair à l'écrit (souvent sous-estimé, très regardé).

**Technique / UX du site lui-même**
- Navigation et accès rapide au contact / CV.
- Performance de chargement.
- Responsive / mobile.

## Questions à poser aux auditeurs

- « En 30 secondes, est-ce que vous le/la shortlisteriez ? Pourquoi ? »
- « Quel niveau de séniorité lui attribuez-vous spontanément ? »
- « Qu'est-ce qui manque pour être convaincu du niveau produit/business ? »
- « Y a-t-il un projet qui vous donne envie d'en discuter en entretien ? Lequel, et
  pourquoi ? »
- « Qu'est-ce qui vous ferait douter ou hésiter ? »

## Livrable de l'audit

Une **synthèse sous forme de scorecard par critère** (moyenne des auditeurs +
verbatims clés), avec :
- **Top 3 points forts** perçus.
- **Top 3 red flags** à corriger en priorité.
- **Écarts de perception** entre Product Designers et Head of Design (souvent le plus
  instructif).

Boucler ensuite sur **eko-build** pour corriger, puis **eko-debug** avant la prod.
