---
name: eko-test
description: >
  Faire tester le portfolio Eko de Marie Arnaud par des utilisateurs virtuels (personas)
  incarnés par Claude, chacun avec son contexte et ses objectifs propres. Utiliser cette
  skill quand Marie veut évaluer l'utilisabilité et la première impression d'une page :
  tests des 5 secondes, tests de premier clic, scénarios de tâches, questions post-test,
  puis synthèse des retours priorisés par fréquence et impact sur la conversion.
  Déclencher pour « teste le site », « fais passer des tests utilisateurs », « qu'est-ce
  qu'un PM penserait de cette page », « simule des testeurs ».
---

# Test — Tests utilisateurs simulés (personas virtuels)

## Principe

Claude incarne **5 à 8 testeurs virtuels**. Chaque persona accède au site avec **son
contexte propre et ses objectifs individuels**, et réagit de façon crédible à ce qu'il
voit. On teste l'**utilisabilité et la première impression**, pas encore le regard
expert (ça, c'est l'audit).

## Cible à représenter

- **Majoritaire** : Product Designer, PM issu du produit, Head of Design.
- **Aussi** : développeurs, graphistes, profils naïfs (non-spécialistes).

Créer 5 à 8 personas variés couvrant ces profils. Pour chacun : nom, rôle, séniorité,
ce qu'il cherche, son niveau de familiarité avec le design, son état d'esprit (pressé,
curieux, sceptique…).

## Objectifs du test (ce qu'on cherche à apprendre)

- Clarté du message : proposition de valeur, métier, spécialité.
- Facilité à trouver les infos clés : projets, compétences, contact.
- Impression visuelle et crédibilité perçue.
- Comportement de scroll : est-ce que les gens vont jusqu'au bout ?
- Efficacité du call-to-action (contact, téléchargement CV…).
- Expérience mobile.

## Méthodologies à combiner

- **Test des 5 secondes** : montrer la page 5 secondes, puis demander « que fait cette
  personne ? », « quelle impression ça donne ? ». Idéal pour la première impression.
- **Test de premier clic** : « où cliqueriez-vous pour voir ses projets / la
  contacter ? »

## Scénarios / tâches concrètes à faire jouer

- « En 10 secondes, dites-moi ce que fait cette personne. »
- « Trouvez un exemple de projet réalisé par cette personne. »
- « Trouvez comment la contacter. »
- « Est-ce que vous recommanderiez cette personne pour un projet ? Pourquoi ? »
- « Que manque-t-il selon vous sur cette page ? »

## Questions post-test

- Qu'est-ce qui vous a marqué en premier ?
- Qu'est-ce qui vous a semblé confus ou inutile ?
- Sur une échelle de 1 à 10, à quel point cette personne semble crédible/compétente ?
- Auriez-vous cliqué sur le bouton de contact ? Pourquoi ou pourquoi pas ?

## Métriques à suivre

- **Quantitatives** : taux de scroll jusqu'en bas, taux de clic sur le CTA, temps
  passé sur la page, taux de rebond, vitesse de chargement (PageSpeed Insights).
- **Qualitatives** : verbatims des testeurs, points de friction récurrents, mots
  utilisés spontanément pour décrire le profil de Marie.

## Analyse & priorisation (livrable)

1. Regrouper les retours par thème : clarté du message, navigation, design, CTA,
   technique.
2. Prioriser selon deux axes :
   - **Fréquence** : combien de testeurs ont rencontré le problème.
   - **Impact sur la conversion** : est-ce que ça empêche quelqu'un de contacter Marie ?
3. Restituer une liste priorisée d'actions, avec les verbatims marquants à l'appui.

## Comment restituer

Pour chaque persona : jouer honnêtement sa réaction (y compris négative), sans
enjoliver. Puis produire la synthèse transversale priorisée. Rester fidèle au ton et
au niveau d'exigence réel de chaque profil ; s'appuyer sur `knowledge/profil-marie.md`
et `knowledge/goal.md` pour calibrer ce que la cible attend.

Enchaîner avec la skill **eko-audit** pour le regard expert senior.
