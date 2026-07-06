# Eko Workflow — Kit de collaboration avec Claude

Ce dossier transforme ton board FigJam « Eko workflow » en fichiers exploitables
par Claude pour concevoir ton portfolio, que tu passes par **Claude Code** ou par la
**fonctionnalité Projets** de Claude.ai.

## Ce qu'il y a dans le dossier

```
eko-workflow/
├── README.md                          ← ce fichier (installation + collaboration)
├── CLAUDE.md                          ← l'orchestrateur : contexte, règles d'or, aiguillage
├── knowledge/                         ← la connaissance de référence (toujours utile)
│   ├── goal.md                        ← l'objectif & les critères de réussite
│   ├── profil-marie.md                ← ton parcours, expertise, projets, personnalité
│   └── personal-branding.md           ← ton de voix, vocabulaire, messaging
└── .claude/skills/                    ← les 5 skills = les 5 phases du workflow
    ├── eko-build/SKILL.md             ← concevoir/développer une page
    ├── eko-test/SKILL.md              ← tests utilisateurs simulés (personas)
    ├── eko-audit/SKILL.md             ← audit expert (PM / Head of Design)
    ├── eko-debug/SKILL.md             ← checklist avant mise en prod
    └── eko-securite/SKILL.md          ← sécuriser le chatbot & maîtriser les coûts API
```

**Différence entre les deux types de fichiers :**
- Les fichiers `knowledge/` sont de la **connaissance de référence** (qui est Marie,
  quel ton, quel objectif). Ils servent en permanence.
- Les **skills** sont des **modes d'emploi de procédure** (comment builder, comment
  tester…). Claude ne les charge que quand la phase concernée se présente.

---

## Option A — Claude Code (recommandé pour construire/coder le site)

Claude Code lit automatiquement `CLAUDE.md` à la racine du dépôt et découvre les
skills placées dans `.claude/skills/`.

### Installation

1. **Prérequis** : avoir Claude Code installé (vérifier avec `claude --version`).
   Sinon, suivre `https://docs.claude.com/en/docs/claude-code/overview`.
2. Place le contenu de ce dossier **à la racine de ton dépôt Git** (celui de ton
   site). Tu dois obtenir, à la racine : `CLAUDE.md`, `knowledge/`, et `.claude/`.
3. Lance Claude Code depuis ce dossier : `claude`.
4. Vérifie que les skills sont bien détectées : tape `/skills`. Tu dois voir
   `eko-build`, `eko-test`, `eko-audit`, `eko-debug`, `eko-securite`.

> **Perso ou projet ?**
> - Placées dans **`.claude/skills/`** du dépôt (comme ici), les skills sont
>   *versionnées avec le projet* et suivent le repo.
> - Si tu veux les réutiliser sur **tous** tes projets, copie les dossiers de skills
>   dans **`~/.claude/skills/`** (dossier personnel). `CLAUDE.md` et `knowledge/`,
>   eux, restent propres à ce projet.

### En pratique

Tu n'as rien à invoquer manuellement : quand tu écris « crée le hero à partir du
Figma » ou « fais passer des tests utilisateurs », Claude Code charge la bonne skill.
Tu peux aussi la nommer explicitement, ex. « utilise eko-audit sur la page projets ».

---

## Option B — Projets Claude.ai (recommandé pour piloter, rédiger, tester sans coder)

Un Projet Claude.ai bundle des **instructions personnalisées** + une **base de
connaissance** (fichiers) partagées par toutes les conversations du projet.

### Installation

1. Va sur `claude.ai/projects` → **« + New Project »**. Nomme-le p. ex.
   « Portfolio Eko — Marie ».
2. **Instructions du projet** : ouvre `CLAUDE.md`, copie son contenu dans le champ
   *Custom instructions*. (Le champ accepte ~8 000 caractères ; `CLAUDE.md` tient
   largement dedans.)
3. **Base de connaissance** : via le bouton **« + »** du panneau de connaissance,
   ajoute les 3 fichiers de `knowledge/` **et** les 5 fichiers `SKILL.md`.
   - Astuce : renomme chaque `SKILL.md` de façon parlante avant l'upload
     (`eko-build.md`, `eko-test.md`, etc.) pour t'y retrouver — les fichiers d'un même
     projet sont dans une liste à plat.
4. Démarre une conversation dans le projet. Tout est chargé automatiquement.

> Les **skills** au sens strict (chargement automatique et progressif) sont une
> mécanique de Claude Code / de l'app. Dans un Projet, les mêmes contenus fonctionnent
> très bien comme **documents de connaissance** : demande simplement à Claude de suivre
> « la procédure eko-audit » et il ira lire le bon document.
>
> Alternative avancée : sur les offres Pro/Max/Team/Enterprise (avec exécution de code),
> tu peux empaqueter une skill en `.zip` et l'installer via **Réglages → Fonctionnalités**.
> C'est global (pas par projet) et facultatif ici.

---

## Comment bien collaborer avec Claude (l'essentiel)

**Choisir le bon outil.**
- **Claude Code** quand il y a du fichier à écrire, du code à intégrer, du Git : il
  agit directement sur ton dépôt.
- **Projet Claude.ai** quand tu réfléchis, rédiges, testes des personas, prépares le
  contenu, ou pilotes sans mettre les mains dans le code.
- Les deux partagent la **même source de vérité** (ces fichiers), donc tu peux passer
  de l'un à l'autre sans te répéter.

**Travailler par phase.** Suis l'ordre du board : Build → démo HTML → Test → Audit →
corrections → Dé-bug → prod. Annonce la phase (« on passe à l'audit »), Claude charge
le bon cadre.

**Partir du Figma quand tu as une maquette.** Donne l'URL/le nœud Figma et dis
« respecte le mockup ». Sans maquette, laisse Claude te challenger par des questions
avant de produire — c'est prévu dans `eko-build`.

**Valider avant la prod.** Exige toujours une démo HTML avant de pousser (règle d'or).
Fais dérouler `eko-debug` en entier avant chaque déploiement.

**Itérer sur les fichiers eux-mêmes.** Après quelques sessions, tu verras Claude
répéter une erreur ou redemander un contexte. Mets à jour `CLAUDE.md` ou le fichier
`knowledge/` concerné : la qualité se cumule au fil du temps. Date tes modifs.

**Garder la base propre.** Une petite base de fichiers nets et à jour vaut mieux qu'un
tiroir fourre-tout. Mets à jour le profil et le branding quand ils évoluent.

**Sécurité du chatbot d'abord.** Dès que tu touches à « Moka », déroule `eko-securite` :
clé jamais côté client, plafond de dépense, rate limiting, modèle Haiku.
