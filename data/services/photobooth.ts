import type { Service } from "./types";

export const photobooth: Service = {
  id: "photobooth",

  title: "Photo Booth",

  category: "Animation",

  heroImage: "/images/services/photobooth-hero.webp",

  cardImage: "/images/services/photobooth.webp",

  startingPrice: 169,

  shortDescription:
    "Immortalisez votre événement grâce à notre Photo Booth professionnel.",

  description:
    "Notre Photo Booth est disponible à la journée ou durant tout le week-end. Profitez d'une animation incontournable avec des impressions instantanées et une galerie numérique.",

  // SEO
  seo: {
    title:
      "Location Photo Booth en Nièvre, Yonne et Cher dès 169 €",

    description:
      "Location de Photo Booth pour mariage, anniversaire et événement en Nièvre, Yonne et Cher dès 169 €. Installation comprise et livraison offerte dans un rayon de 20 km.",
  },

  included: [
    "Installation comprise",
    "Utilisation à la journée ou tout le week-end",
    "Galerie photo en ligne",
    "Personnalisation du cadre photo",
    "Assistance si besoin",
    "Livraison gratuite dans un rayon de 20 km",
  ],

  pricing: [
    {
      label: "Numérique",
      price: 169,
    },
    {
      label: "100 impressions",
      price: 199,
    },
    {
      label: "150 impressions",
      price: 219,
    },
    {
      label: "200 impressions",
      price: 239,
    },
    {
      label: "300 impressions",
      price: 279,
    },
    {
      label: "400 impressions",
      price: 309,
    },
  ],

  options: [
    {
      name: "Flash additionnel",
      price: 10,
    },
    {
      name: "Toile de fond avec structure",
      price: 15,
    },
    {
      name: "Fil à photos",
      price: 5,
    },
    {
      name: "Clé USB",
      price: 15,
    },
    {
      name: "Décoration",
      description: "Sur devis",
    },
  ],

  gallery: [],

  faq: [
    {
      question: "Combien de temps puis-je conserver le Photo Booth ?",
      answer:
        "Le Photo Booth est disponible à la journée ou pendant tout le week-end.",
    },
    {
      question: "La livraison est-elle comprise ?",
      answer:
        "Oui, la livraison est offerte dans un rayon de 20 km. Au-delà, un devis est établi.",
    },
  ],
};