# Eko Workflow — Portfolio de Marie Arnaud

> Ce fichier est le point d'entrée du projet. Il définit le contexte, les règles
> permanentes et oriente vers les skills spécialisées selon la phase de travail.
> Dernière mise à jour : juillet 2026.

## Contexte du projet

Marie Arnaud (Eko Design) construit un portfolio one-pager pour être **recrutée
comme Product Designer senior ou Design System Manager**. La cible qui compte :
des **PM et Head of Design** capables de juger un profil en 30 à 90 secondes.

Le site est designé sur Figma (avec variables/tokens), développé avec l'aide de
Claude, hébergé sur GitHub, avec un nom de domaine OVH (`marie-arnaud.com`) et un
module de chat IA (« Moka ») branché sur l'API Anthropic.

Deux documents de référence sont à charger en priorité au démarrage d'une session :

- `knowledge/profil-marie.md` — parcours, expertise, projets, ton personnel.
- `knowledge/personal-branding.md` — tone of voice, vocabulaire, messaging.
- `knowledge/goal.md` — l'objectif et les critères de réussite.

Quand une information sur Marie manque, s'appuyer sur ces fichiers plutôt que
d'inventer. Si l'info n'y est pas, poser la question à Marie.

## Les 5 phases du workflow

Chaque phase correspond à une skill dédiée. Charger la skill correspondante dès
qu'on entre dans la phase concernée.

1. **Build** (`eko-build`) — Concevoir/développer une page à partir du Figma ou
   d'une idée. Règles d'or design system, accessibilité, responsive, éco-conception.
2. **Test** (`eko-test`) — Tests utilisateurs simulés avec des personas virtuels.
3. **Audit** (`eko-audit`) — Audit expert par des profils seniors (PM, Head of Design).
4. **Dé-bug** (`eko-debug`) — Checklist de vérification avant de déclarer « c'est corrigé ».
5. **Sécurité** (`eko-securite`) — Sécuriser le module de chat IA et maîtriser les coûts API.

Ordre logique d'un cycle : Build → démo HTML de validation → Test → Audit →
corrections → Dé-bug → mise en production. La Sécurité s'applique dès qu'on touche
au module de chat.

## Règles d'or permanentes (valables dans toutes les phases)

Ces règles viennent de la section « Build » du board et s'appliquent en continu.

### Design system & tokens
- Les tokens de couleurs et les variables sont **toujours basés sur Tailwind**.
- **Light theme** : prendre les couleurs de la colonne *light* du Figma.
- **Dark theme** : prendre les couleurs de la colonne *dark* du Figma.
- **Contrainte forte** : il ne peut jamais y avoir **plus de variables dans le site
  en production que dans le Figma**. Si une couleur manque pour un besoin
  d'accessibilité, la créer — mais la répercuter aussi dans le Figma.

### Accessibilité
- Cible **RGAA 100 % niveau AA**.
- Fonts responsives.
- Les couleurs doivent matcher entre elles ET rester accessibles (contrastes AA).

### Responsive & mise en page
- Fonts responsives.
- **Grid bento** comme parti pris de mise en page.
- Respecter les spacings et margins quand ils sont fournis dans le Figma.

### Éco-conception
- Optimiser le poids (images, polices, scripts), limiter le JavaScript inutile,
  privilégier le statique. Un site sobre est aussi plus rapide et mieux noté.

### Validation
- **Toujours produire un HTML ou une démo pour validation avant toute mise en
  production.** Jamais de passage direct en prod sans revue visuelle.

## Ton et posture attendus de Claude

- Suivre le tone of voice de Marie (voir `personal-branding.md`) : simple, rigoureux,
  humble, avec une pointe d'humour.
- **Challenger** les demandes plutôt que d'exécuter aveuglément : poser des questions
  quand on part d'une idée sans maquette.
- Expliquer le « pourquoi » des décisions design/techniques.
- Ne jamais utiliser de dark patterns.
