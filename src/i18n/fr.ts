// Dictionnaire FR = source de vérité. `en.ts` doit avoir exactement la même forme.
export const fr = {
  meta: {
    title: 'Eko Design — Marie Arnaud, Product Designer',
    description:
      "Marie Arnaud — Product Designer senior spécialisée dans l'expérience de conversion. Sephora, SNCF, Pandacraft, Aigle. Nantes / Paris.",
    ogLocale: 'fr_FR',
  },
  skipLink: 'Aller au contenu',
  nav: {
    label: 'Navigation principale',
    logo: 'Eko Design',
    about: 'À propos',
    projects: 'Projets',
    contact: 'Contact',
    linkedin: 'LinkedIn',
    behance: 'Behance',
    themeLabel: 'Mode sombre',
    switchLabel: 'Switch to English',
    switchLang: 'en',
  },
  hero: { alt: 'Eko Design — Marie, product designer, avec Moka le chat' },
  marquee: [
    'Kaamelott', 'Severance', 'Burger Quiz', 'Sin City', 'Malcolm', 'Kill Bill',
    'Succession', 'Zelda TOTK', 'Le voyage de Chihiro', 'Naruto Shippuden',
  ],
  moka: {
    title: 'Fiez-vous à Moka 🐱',
    greeting: "Bonjour ! Je suis Moka, l'assistante de Marie, posez-moi n'importe quelle question. 😊",
    placeholder: 'Écrivez un message…',
    inputLabel: 'Message à Moka',
    send: 'Envoyer',
    questions: 'questions',
    limitReached: 'Limite atteinte — contactez Marie directement !',
    linkedinReply: 'Profil LinkedIn de Marie 👉',
    errorPrefix: 'Erreur :',
    connection: 'Connexion impossible. Réessayez dans un instant.',
    pills: [
      { label: 'Résumer le profil', q: 'Résume le profil de Marie en 3 points clés' },
      { label: 'Passions', q: 'Quelles sont les passions de Marie ?' },
      { label: 'Projets', q: 'Quels sont les projets en production de Marie ?' },
      { label: 'Contacts', q: 'Comment contacter Marie ?' },
    ],
  },
  about: {
    label: 'À propos',
    title: 'Marie Arnaud',
    profile: {
      label: 'Profil',
      title: 'Product designer senior, spécialiste conversion',
      paragraphs: [
        "Je suis passée du mode agence au mode produit. L'agence m'a appris la vélocité et la polyvalence. Passer d'un projet UI le lundi à un sujet complexe le mercredi.",
        "Sephora m'a donné la profondeur : méthodo Scrum, grands process, et une expertise forte sur les tunnels de conversion.",
        "Curieuse et ambitieuse, j'adore pousser le curseur de l'innovation dans mes projets. Ma méthode ? Sécuriser et dé-risquer mes choix design grâce aux feedbacks users et à la data, pour ensuite livrer des solutions créatives sur mesure. Véritable early adopter, je passe mon temps à tester les dernières bêtas de Figma. Ce site est une démo de mon savoir-faire. N'hésitez pas à poser vos questions à Moka !",
      ],
    },
    passions: {
      label: 'Hors design',
      title: 'Passions',
      items: ['Zelda Tears of the Kingdom', "Design d'intérieur", 'Culture japonaise', 'Bouquiner'],
    },
    role: {
      label: 'Poste actuel · 4 ans',
      title: 'Sephora',
      scope: 'Scope Convert · Web & App · International',
      text: "Je pilote l'expérience du checkout, du panier à la confirmation d'achat. Réconcilier les contraintes business, tech et légales pour en faire un parcours fluide : c'est mon quotidien.",
    },
    skills: {
      label: 'Expertise',
      title: 'En vrac',
      items: [
        'Design system', 'Maze', 'Ux research', 'User testing', 'Content square',
        'Aninix', 'iOS 26', 'Baymard & autres', 'Dev Notion Web', 'json / lottie',
      ],
    },
  },
  projects: {
    label: 'Projet',
    title: 'Concret',
    note: "ℹ️ À noter que la majorité des projets clients avec lesquels j'ai travaillé ont une clause de confidentialité. Les réalisations présentées ici sont celles pour lesquelles j'ai obtenu l'autorisation de partage.",
    visit: 'Visiter le site',
    items: [
      {
        label: 'E-commerce',
        title: 'Pandacraft',
        href: 'https://www.pandacraft.fr',
        text: "Optimisation UX du tunnel d'abonnement, renforcement UI sur les modules gammes & kits et conception d'un design system cohérent from scratch.",
        quote: "J'ai eu la chance de travailler un bon moment avec Swan Robbes. On collaborait au quotidien via un backlog Asana, un outil que j'apprécie beaucoup, bien plus agréable que Jira à mon goût. 😊",
      },
      {
        label: 'Transport',
        title: 'SNCF Abonnement',
        href: 'https://www.abonnement-regional.sncf/region/PDL/produit/UF08_DIGITAL_Abonnement%20tutti%20annuel%20monomodal%20NASA',
        text: "Refonte d'une plateforme d'abonnement TER en marque blanche. Souscription, paiement et espace abonné responsive.",
        quote: "J'ai collaboré directement avec les équipes design de la SNCF, avec une répartition selon les produits. C'est là que j'ai vraiment mis le pied à l'étrier sur l'accessibilité.",
      },
      {
        label: 'Mode & Outdoor',
        title: 'Aigle',
        href: 'https://www.aigle.com/fr/fr/p/aiw25mout003-BJ99_avocat.html',
        text: 'Refonte de la page produit pour valoriser les caractéristiques techniques et améliorer la conversion.',
        quote: "Beaucoup d'UX Research aussi : tests utilisateurs, benchmarks… L'idée était de dé-risquer nos hypothèses, de la hiérarchisation de la page jusqu'aux mécanismes de sélection.",
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Discutons',
    behance: 'Behance — Marie Arnaud',
    linkedin: 'LinkedIn — Marie Arnaud',
    email: 'Envoyer un email à Marie Arnaud',
  },
  footer: { logoAlt: 'Eko Design', copy: '© Marie Arnaud · 2026 · Nantes / Paris' },
};

export type Dict = typeof fr;
