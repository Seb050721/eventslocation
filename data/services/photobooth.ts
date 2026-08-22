import type { Service } from "./types";

export const photobooth: Service = {
  id: "photobooth",

  title: "Photo Booth",

  category: "Animation",

  heroImage:
    "/images/services/photobooth-hero.webp",

  cardImage:
    "/images/services/photobooth.webp",

  startingPrice: 169,

  shortDescription:
    "Location de Photo Booth pour mariages, anniversaires et événements en Nièvre, Yonne et Cher.",

  description:
    "Animez votre mariage, anniversaire ou événement avec notre Photo Booth professionnel. Disponible à la journée ou durant tout le week-end, il permet à vos invités de repartir avec leurs photos imprimées instantanément tout en profitant d'une galerie numérique. Nous intervenons notamment autour de Varzy, Nevers et dans la Nièvre, l'Yonne et le Cher.",

  /* ============================================================
     SEO
  ============================================================ */

  seoContent: {
  title: "Location de Photobooth en Nièvre (58)",

  paragraphs: [
    "Vous recherchez un photobooth en Nièvre pour votre mariage, anniversaire ou événement ? Event'S Location propose la location de Photo Booth depuis Varzy pour vos événements dans la Nièvre.",

    "Notre Photo Booth est disponible dès 169 € en formule numérique. Plusieurs formules avec impressions sont également proposées, jusqu'à 400 impressions photo, avec galerie en ligne et personnalisation du cadre photo.",

    "La livraison est gratuite dans un rayon de 20 km autour de Varzy. Nous pouvons également intervenir à Nevers et dans les autres communes de la Nièvre, ainsi que dans l'Yonne et le Cher, sur devis.",

    "Installé pour la journée ou pour tout le week-end, le Photo Booth permet à vos invités de réaliser leurs photos librement et de conserver un souvenir personnalisé de votre événement.",
  ],
},

  /* ============================================================
     INCLUS
  ============================================================ */

  included: [
    "Installation comprise",
    "Utilisation à la journée ou tout le week-end",
    "Galerie photo en ligne",
    "Personnalisation du cadre photo",
    "Assistance si besoin",
    "Livraison gratuite dans un rayon de 20 km",
  ],

  /* ============================================================
     TARIFS
  ============================================================ */

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

  /* ============================================================
     OPTIONS
  ============================================================ */

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
      description:
        "Personnalisation sur devis selon le thème de votre événement.",
    },
  ],

  gallery: [],

  /* ============================================================
     FAQ
  ============================================================ */

  faq: [
    {
      question:
        "Combien de temps puis-je conserver le Photo Booth ?",

      answer:
        "Le Photo Booth peut être loué à la journée ou pendant tout le week-end, selon votre événement.",
    },

    {
      question:
        "La livraison du Photo Booth est-elle comprise ?",

      answer:
        "Oui, la livraison est offerte dans un rayon de 20 km autour de Varzy. Au-delà, un tarif de déplacement est établi sur devis.",
    },

    {
      question:
        "Le Photo Booth convient-il pour un mariage ou un anniversaire ?",

      answer:
        "Oui. Le Photo Booth convient particulièrement aux mariages, anniversaires, soirées privées, événements associatifs et événements d'entreprise.",
    },

    {
      question:
        "Les photos sont-elles imprimées immédiatement ?",

      answer:
        "Oui, selon la formule choisie, les photos sont imprimées directement pendant l'événement. Une formule entièrement numérique est également disponible.",
    },

    {
      question:
        "Peut-on personnaliser le cadre des photos ?",

      answer:
        "Oui. Le cadre photo est personnalisé pour votre événement afin de reprendre votre thème, vos couleurs, vos prénoms ou la date de votre événement.",
    },

    {
      question:
        "Dans quelles zones proposez-vous la location de Photo Booth ?",

      answer:
        "Nous proposons principalement la location de Photo Booth en Nièvre, dans l'Yonne et dans le Cher, avec notamment des interventions autour de Varzy et Nevers. Les déplacements plus éloignés peuvent être étudiés sur devis.",
    },
  ],
};