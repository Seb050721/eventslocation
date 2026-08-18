import type { Service } from "./types";

export const feux: Service = {
  id: "feux",

  title: "Smoke Puff",

  category: "Animation premium",

  heroImage: "/images/services/feux-hero.webp",

  cardImage: "/images/services/feux.webp",

  startingPrice: 155,

  shortDescription:
    "Des fumigènes de jour colorés pour créer un effet spectaculaire lors de vos événements.",

  description:
    "Les Smoke Puff produisent une puissante colonne de fumée colorée. Vous pouvez choisir la couleur selon le thème de votre événement. Ils sont parfaits pour les sorties de mairie ou d'église, les Gender Reveal, les ouvertures de bal, les entrées des mariés, les lancements de soirée ou les moments forts de votre événement.",

  seo: {
    title:
      "Location Smoke Puff colorés en Nièvre, Yonne et Cher dès 155 €",

    description:
      "Location de Smoke Puff et fumigènes de jour colorés pour mariage, Gender Reveal et événement en Nièvre, Yonne et Cher dès 155 €. Couleur au choix et installation comprise.",
  },

  included: [
    "Déclencheur HF fourni",
    "Installation comprise",
    "Mise en sécurité",
    "Choix de la couleur",
    "Conseils d'utilisation",
    "Livraison gratuite jusqu'à 20 km",
  ],

  pricing: [
    {
      label: "1 feu",
      price: 79,
    },
    {
      label: "2 feux",
      price: 129,
    },
    {
      label: "3 feux",
      price: 179,
    },
    {
      label: "4 feux",
      price: 229,
    },
    {
      label: "5 feux",
      price: 279,
    },
  ],

  options: [
    {
      name: "Choix de la couleur",
      description: "Selon les couleurs disponibles",
    },
    {
      name: "Synchronisation avec la musique",
      description: "Sur demande",
    },
  ],

  gallery: [],

  faq: [
    {
      question: "Peut-on choisir la couleur des Smoke Puff ?",
      answer:
        "Oui. Plusieurs couleurs sont disponibles afin d'adapter l'effet au thème de votre mariage, de votre Gender Reveal ou de votre événement.",
    },
    {
      question: "L'installation est-elle comprise ?",
      answer:
        "Oui, nous installons et préparons entièrement le matériel avant votre événement.",
    },
  ],
};