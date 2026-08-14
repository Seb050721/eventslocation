import type { Service } from "./types";

export const mobilier: Service = {
  id: "mobilier",

  title: "Mobilier",

  category: "Location de mobilier",

  heroImage: "/images/services/mobilier-hero.webp",

  cardImage: "/images/services/mobilier.webp",

  startingPrice: 2,

  shortDescription:
    "Tables, chaises, mange-debout et tentes pour tous vos événements.",

  description:
    "Que ce soit pour un mariage, un anniversaire, une réception ou un événement professionnel, nous mettons à votre disposition du mobilier propre, robuste et prêt à l'emploi.",

  // SEO
  seo: {
    title:
      "Location mobilier événementiel en Nièvre, Yonne et Cher",

    description:
      "Location de mobilier événementiel en Nièvre, Yonne et Cher : tables, chaises, mange-debout, tabourets et tente 4 × 8 m pour mariages et réceptions.",
  },

  included: [
    "Matériel contrôlé avant chaque location",
    "Conseils sur les quantités",
    "Installation possible",
    "Livraison gratuite dans un rayon de 20 km",
  ],

  pricing: [
    {
      label: "Table ronde Ø152 cm",
      price: 12,
    },
    {
      label: "Table rectangulaire",
      price: 10,
    },
    {
      label: "Table haute",
      price: 5,
    },
    {
      label: "Tabouret",
      price: 2,
    },
    {
      label: "Chaise",
      price: 4,
    },
    {
      label: "Tente 4 × 8 m",
      price: 150,
    },
  ],

  options: [
    {
      name: "Housse de table",
      price: 5,
      description: "Blanche ou noire",
    },
    {
      name: "Housse de chaise",
      price: 2,
    },
  ],

  gallery: [],

  faq: [
    {
      question: "Le mobilier est-il nettoyé ?",
      answer:
        "Oui, chaque élément est nettoyé et contrôlé avant chaque location.",
    },
    {
      question: "Pouvez-vous installer le mobilier ?",
      answer:
        "Oui, nous pouvons assurer la livraison ainsi que l'installation sur devis.",
    },
  ],
};