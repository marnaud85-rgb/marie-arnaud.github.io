---
name: eko-securite
description: >
  Sécuriser le module de chat IA (« Moka ») du portfolio Eko de Marie Arnaud et
  maîtriser les coûts de l'API Anthropic. Utiliser cette skill dès qu'on touche au
  chatbot, à l'appel API, à la clé, au déploiement du backend ou à la facturation :
  architecture serveur (jamais de clé côté client), rate limiting, limite de tokens,
  anti-bot, plafonds de dépense, choix du modèle, protection du system prompt et
  monitoring. Déclencher pour « branche le chatbot », « sécurise l'appel API »,
  « comment éviter que ma facture explose », « déploie le worker », « protège ma clé ».
---

# Sécurité — Module de chat IA & maîtrise des coûts

## Architecture obligatoire (non négociable)

**Jamais d'appel direct à l'API depuis le navigateur.** La clé ne doit jamais être
exposée côté client.

```
Navigateur (message texte seulement)
      ↓
Votre serveur / fonction (ajoute la clé côté serveur)
      ↓
api.anthropic.com  (clé présente uniquement ici)
      ↓
Réponse renvoyée au visiteur
```

Concrètement avec **Cloudflare Workers** :
1. Le Worker reçoit la requête du visiteur (juste le message texte).
2. Il ajoute la clé API **côté serveur** (variable d'environnement, **jamais en dur
   dans le code**).
3. Il appelle Claude.
4. Il renvoie **uniquement la réponse** au visiteur.

## Résumé des priorités (dans l'ordre)

1. **Clé jamais côté client** — non négociable.
2. **Clé dédiée** à ce projet, avec un **plafond de dépense bas** dans le Console.
3. **Rate limiting par IP** + **limite de tokens** par réponse.
4. **Modèle Haiku** plutôt que Sonnet/Opus pour ce cas d'usage.
5. **Anti-bot léger** (Turnstile) devant le formulaire de chat.
6. **Surveillance manuelle** régulière de l'onglet Usage.

## Limiter les dégâts (même si quelqu'un abuse)

Même avec cette architecture, quelqu'un peut spammer l'endpoint. Plusieurs couches :

- **Rate limiting par IP/session** : ex. 5 messages/minute par visiteur (IP ou cookie
  de session). Outils : Upstash Redis (gratuit en serverless) ou le rate limiting
  intégré de Cloudflare.
- **Limite de tokens par requête** : fixer un `max_tokens` bas côté serveur (ex.
  300-500), jamais illimité. Tronquer/refuser côté serveur les messages trop longs
  **avant même** d'appeler l'API.
- **Limite de conversation** : borner le nombre de tours d'une même conversation (ex.
  10 messages max), sinon une session peut rester ouverte des heures.
- **Anti-bot** : challenge léger type **Cloudflare Turnstile** (gratuit, invisible
  pour un humain) devant le formulaire, pour bloquer les scripts.

## Filets de sécurité côté Anthropic (à faire absolument)

Dans le Console (`console.anthropic.com`) :
- Créer une **clé API dédiée** à ce site (pas la clé principale, pas de clé partagée).
- Lui fixer un **plafond de dépense bas** et cohérent avec l'usage réel attendu (ex.
  quelques euros/mois).
- Aller dans **Settings → Limits** pour vérifier/ajuster le plafond de dépense
  organisationnel global. Une fois la limite mensuelle atteinte, l'usage de l'API est
  suspendu jusqu'au mois suivant (sauf demande d'augmentation).
- **Il n'y a pas de notification automatique** avant d'atteindre la limite : surveiller
  proactivement l'onglet **Usage** pour repérer tout pic anormal.

> Ces mécaniques de facturation et de limites évoluent. Vérifier l'état actuel dans le
> Console et la doc (`platform.claude.com/docs`) au moment du déploiement.

## Choix du modèle = levier de coût direct

Pour un chatbot de portfolio (pas une tâche complexe), pas besoin d'Opus. **Haiku**
suffit largement pour répondre à des questions sur le profil/les projets et coûte
nettement moins par token. Un modèle mal dimensionné est souvent la vraie cause d'une
facture qui grimpe.

## Protéger le prompt système

- **Aucune information sensible** dans le system prompt (mots de passe, clés, données
  perso non destinées au public) : un visiteur peut tenter de le faire « fuiter » par
  prompt injection.
- **Limiter explicitement le rôle de l'IA** dans le system prompt (ex. « tu réponds
  uniquement aux questions sur le profil professionnel de Marie, tu refuses tout autre
  sujet ») pour éviter que le chatbot soit détourné pour générer du contenu hors sujet
  aux frais de Marie.
- Le contenu de référence du chatbot Moka (identité, parcours, ton) vit dans
  `knowledge/profil-marie.md` et `knowledge/personal-branding.md`.

## Monitoring minimal

- Logger **côté serveur** (pas côté client) : nombre de requêtes/jour, tokens
  consommés, IP si besoin de debug.
- Une **alerte simple** (email, ou webhook Slack/Discord) si le nombre de requêtes
  journalier dépasse un seuil anormal.

## Squelette de Worker (référence)

Structure conforme aux règles ci-dessus. La clé vient de `env`, jamais du code.

```js
export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    // 1. Récupérer + valider l'entrée (tronquer les messages trop longs,
    //    borner le nombre de tours) AVANT tout appel API.
    const { messages } = await request.json();

    // 2. (Recommandé) rate limiting par IP/session + vérif Turnstile ici.

    // 3. Appel Claude — clé côté serveur, max_tokens bas, modèle Haiku.
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,   // jamais en dur
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 250,
        system: env.MOKA_SYSTEM_PROMPT,       // ou une constante non sensible
        messages,
      }),
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json', ...CORS },
    });
  },
};

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
```

> En production, restreindre `Access-Control-Allow-Origin` au domaine
> `marie-arnaud.com` plutôt que `*`.
