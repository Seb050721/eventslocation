import type { Service } from "./types";

export const feux: Service = {
  id: "feux",

  title: "Effets spéciaux",

  category: "Animation premium",

  heroImage: "/images/services/feux-hero.webp",

  cardImage: "/images/services/feux.webp",

  startingPrice: 155,

  shortDescription:
    "Des fontaines d'étincelles froides pour sublimer les moments les plus importants de votre événement.",

  description:
    "Les Smoke Puff produisent une magnifique colonne de fumée blanche idéale pour les ouvertures de bal, les entrées des mariés, les Gender Reveal, les lancements de soirée ou encore les arrivées de gâteau.",

  included: [
    "Déclencheur HF fourni",
    "Installation comprise",
    "Mise en sécurité",
    "Conseils d'utilisation",
    "Livraison gratuite jusqu'à 20 km"
  ],

  pricing: [
    {
      label: "1 feu",
      price: 155
    },
    {
      label: "2 feux",
      price: 255
    },
    {
      label: "4 feux",
      price: 455
    },
    {
      label: "6 feux",
      price: 655
    }
  ],

  options: [
    {
      name: "Synchronisation avec la musique",
      description: "Sur demande"
    }
  ],

  gallery: [],

  faq: [
    {
      question: "Les feux sont-ils dangereux ?",
      answer:
        "Non. Il s'agit de fontaines d'étincelles froides spécialement conçues pour les événements."
    },
    {
      question: "L'installation est-elle comprise ?",
      answer:
        "Oui, nous installons et préparons entièrement le matériel avant votre événement."
    }
  ]
};