import type { Service } from "./types";

export const effets: Service = {
  id: "effets",

  title: "Machines à effets",

  category: "Effets spéciaux",

  heroImage: "/images/services/effets-hero.webp",

  cardImage: "/images/services/effets.webp",

  startingPrice: 15,

  shortDescription:
    "Créez une ambiance spectaculaire grâce à nos effets spéciaux.",

  description:
    "Nos machines à effets apportent une véritable valeur ajoutée à vos événements. Mariages, anniversaires, soirées privées ou événements professionnels.",

  // SEO
  seo: {
    title:
      "Location machines à effets en Nièvre, Yonne et Cher",

    description:
      "Location de machines à fumée et à bulles pour mariages, anniversaires et soirées en Nièvre, Yonne et Cher. Matériel dès 15 €, liquide fourni.",
  },

  included: [
    "Liquide fourni",
    "Installation comprise",
    "Conseils d'utilisation",
    "Livraison gratuite dans un rayon de 20 km",
  ],

  pricing: [
    {
      label: "Machine à fumée",
      price: 20,
    },
    {
      label: "Machine à bulles",
      price: 15,
    },
  ],

  options: [
    {
      name: "Canon CO₂",
      description: "Bientôt disponible",
    },
  ],

  gallery: [],

  faq: [
    {
      question: "Le liquide est-il fourni ?",
      answer:
        "Oui, le liquide est inclus dans chaque location.",
    },
    {
      question: "L'installation est-elle comprise ?",
      answer:
        "Oui, nous installons le matériel si nécessaire.",
    },
  ],
};