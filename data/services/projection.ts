import type { Service } from "./types";

export const projection: Service = {
  id: "projection",

  title: "Projection vidéo",

  category: "Vidéo",

  heroImage: "/images/services/projection-hero.webp",

  cardImage: "/images/services/projecteur.webp",

  startingPrice: 55,

  shortDescription:
    "Vidéoprojecteur Full HD 4500 lumens pour tous vos événements.",

  description:
    "Le vidéoprojecteur est proposé seul ou accompagné d'un écran de projection de 150 pouces.",

  included: [
    "Conseils d'installation",
    "Matériel testé avant location"
  ],

  pricing: [
    {
      label: "Vidéoprojecteur",
      price: 55
    },
    {
      label: "Écran 150 pouces",
      price: 30
    }
  ],

  options: [],

  gallery: [],

  faq: []
};