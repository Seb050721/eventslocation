import type { Service } from "./types";

export const sonorisation: Service = {
  id: "sonorisation",

  title: "Sonorisation",

  category: "Audio",

  heroImage: "/images/services/sonorisation-hero.webp",

  cardImage: "/images/services/sonorisation.webp",

  startingPrice: 100,

  shortDescription:
    "Des packs de sonorisation adaptés à tous vos événements.",

  description:
    "Choisissez un pack complet ou louez uniquement le matériel dont vous avez besoin.",

  // SEO
  seo: {
    title:
      "Location sonorisation en Nièvre, Yonne et Cher dès 100 €",

    description:
      "Location de sonorisation pour mariage, anniversaire, soirée et événement en Nièvre, Yonne et Cher. Packs dès 100 € et matériel disponible à l'unité.",
  },

  included: [
    "Matériel vérifié avant chaque location",
    "Conseils de mise en service",
    "Livraison possible",
  ],

  pricing: [
    {
      label: "Pack Enceintes + Table de mixage",
      price: 100,
    },
    {
      label: "Pack Ambiance",
      price: 140,
      description:
        "Enceintes + Caisson de basses + Jeux de lumière + Machine à fumée",
    },
  ],

  options: [
    {
      name: "Jeu de lumière",
      price: 10,
    },
  ],

  equipments: [
    {
      name: "Micro HF",
      price: 15,
    },
    {
      name: "Pied de micro",
      price: 5,
    },
    {
      name: "Enceinte",
      price: 30,
    },
    {
      name: "Table de mixage",
      price: 20,
    },
  ],

  gallery: [],

  faq: [],
};