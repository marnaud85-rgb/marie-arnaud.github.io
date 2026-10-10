import type { Dict } from './fr';

// Traduction EN — à relire par Marie (ton : simple, rigoureux, humble, une pointe d'humour).
export const en: Dict = {
  meta: {
    title: 'Eko Design — Marie Arnaud, Product Designer',
    description:
      'Marie Arnaud — senior Product Designer specialising in conversion experience. Sephora, SNCF, Pandacraft, Aigle. Nantes / Paris.',
    ogLocale: 'en_GB',
  },
  skipLink: 'Skip to content',
  nav: {
    label: 'Main navigation',
    logo: 'Eko Design',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    linkedin: 'LinkedIn',
    behance: 'Behance',
    theme: 'Switch theme',
    switchLabel: 'Voir le site en français',
    switchText: 'FR',
    switchLang: 'fr',
  },
  hero: { alt: 'Eko Design — Marie, product designer, with Moka the cat' },
  marquee: [
    'Kaamelott', 'Severance', 'Burger Quiz', 'Sin City', 'Malcolm', 'Kill Bill',
    'Succession', 'Zelda TOTK', 'Spirited Away', 'Naruto Shippuden',
  ],
  moka: {
    title: 'Ask Moka anything 🐱',
    greeting: "Hi! I'm Moka, Marie's assistant. What would you like to know? 😊",
    placeholder: 'Type a message…',
    inputLabel: 'Message to Moka',
    send: 'Send',
    questions: 'questions',
    limitReached: 'Limit reached — contact Marie directly!',
    linkedinReply: "Marie's LinkedIn profile 👉",
    errorPrefix: 'Error:',
    connection: 'Connection failed. Please try again in a moment.',
    pills: [
      { label: 'Sum up her profile', q: "Sum up Marie's profile in 3 key points" },
      { label: 'Passions', q: "What are Marie's passions?" },
      { label: 'Projects', q: 'Which projects has Marie shipped to production?' },
      { label: 'Contact', q: 'How can I contact Marie?' },
    ],
  },
  about: {
    label: 'About',
    title: 'Marie Arnaud',
    profile: {
      label: 'Profile',
      title: 'Senior product designer, conversion specialist',
      paragraphs: [
        'I moved from agency mode to product mode. The agency taught me speed and versatility. A UI project on Monday, a complex topic by Wednesday.',
        'Sephora gave me depth: Scrum, large-scale processes and solid experience in conversion funnels.',
        "I'm curious and ambitious, and I love pushing the boundaries of innovation in my projects. My method? I secure and de-risk my design choices with user feedback and data, then deliver creative, tailor-made solutions. A true early adopter, I spend my time testing the latest Figma betas. This site is a demo of my craft. Feel free to ask Moka your questions!",
      ],
    },
    passions: {
      label: 'Beyond design',
      title: 'Passions',
      items: ['Zelda: Tears of the Kingdom', 'Interior design', 'Japanese culture', 'Reading'],
    },
    role: {
      label: 'Current role · 4 years',
      title: 'Sephora',
      scope: 'Scope Convert · Web & App · International',
      text: "I own the checkout experience, from cart to purchase confirmation. Reconciling business, tech and legal constraints into a smooth journey: that's my daily work.",
    },
    skills: {
      label: 'Expertise',
      title: 'A bit of everything',
      items: [
        'Design system', 'Maze', 'UX research', 'User testing', 'Content square',
        'Aninix', 'iOS 26', 'Baymard & more', 'Dev Notion Web', 'json / lottie',
      ],
    },
  },
  projects: {
    label: 'Projects',
    title: 'Hands-on',
    note: "ℹ️ Most of the client projects I've worked on are under NDA. The work shown here is what I got permission to share.",
    visit: 'Visit the site',
    items: [
      {
        label: 'E-commerce',
        title: 'Pandacraft',
        href: 'https://www.pandacraft.fr',
        text: 'UX optimisation of the subscription funnel, UI improvements on the product range and kit modules, and a coherent design system built from scratch.',
        quote: 'I was lucky to work with Swan Robbes for a good while. We collaborated daily through an Asana backlog, a tool I really like, much nicer than Jira in my opinion. 😊',
      },
      {
        label: 'Transport',
        title: 'SNCF Abonnement',
        href: 'https://www.abonnement-regional.sncf/region/PDL/produit/UF08_DIGITAL_Abonnement%20tutti%20annuel%20monomodal%20NASA',
        text: 'Redesign of a white-label subscription platform for TER regional trains. Subscription, payment and a responsive subscriber area.',
        quote: "I worked directly with SNCF's design teams, with the work split by product. That's where I really got started on accessibility.",
      },
      {
        label: 'Fashion & Outdoor',
        title: 'Aigle',
        href: 'https://www.aigle.com/fr/fr/p/aiw25mout003-BJ99_avocat.html',
        text: 'Product page redesign to showcase technical features and improve conversion.',
        quote: 'Plenty of UX research too: user tests, benchmarks… The idea was to de-risk our hypotheses, from the page hierarchy down to the selection mechanisms.',
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: "Let's talk",
    behance: 'Behance — Marie Arnaud',
    linkedin: 'LinkedIn — Marie Arnaud',
    email: 'Email Marie Arnaud',
  },
  footer: { logoAlt: 'Eko Design', copy: '© Marie Arnaud · 2026 · Nantes / Paris' },
};
