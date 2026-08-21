import type { Service } from "./types";

export const projection: Service = {
  id: "projection",

  title: "Projection vidéo",

  category: "Vidéo",

  heroImage:
    "/images/services/projection-hero.webp",

  cardImage:
    "/images/services/projecteur.webp",

  startingPrice: 55,

  shortDescription:
    "Location de vidéoprojecteur Full HD et écran 150 pouces pour vos événements en Nièvre, Yonne et Cher.",

  description:
    "Pour vos mariages, anniversaires, réunions, soirées, présentations ou événements professionnels, nous proposons à la location un vidéoprojecteur Full HD 4500 lumens, disponible seul ou avec un écran de projection de 150 pouces. Nous intervenons notamment autour de Varzy, Nevers et plus largement en Nièvre, Yonne et Cher.",

  /* ============================================================
     SEO
  ============================================================ */

  seo: {
    title:
      "Location vidéoprojecteur Nièvre, Nevers, Yonne et Cher dès 55 €",

    description:
      "Location de vidéoprojecteur Full HD 4500 lumens dès 55 € en Nièvre, Yonne et Cher. Écran de projection 150 pouces disponible pour mariages, réunions, soirées et événements.",
  },

  /* ============================================================
     INCLUS
  ============================================================ */

  included: [
    "Matériel testé avant chaque location",
    "Conseils d'installation et de branchement",
    "Assistance si besoin",
    "Location possible avec ou sans écran de projection",
  ],

  /* ============================================================
     TARIFS
  ============================================================ */

  pricing: [
    {
      label: "Vidéoprojecteur",
      price: 55,
      description:
        "Vidéoprojecteur Full HD 4500 lumens pour présentations, films, diaporamas et événements.",
    },

    {
      label: "Écran 150 pouces",
      price: 30,
      description:
        "Grand écran de projection disponible seul ou en complément du vidéoprojecteur.",
    },
  ],

  options: [],

  gallery: [],

  /* ============================================================
     FAQ
  ============================================================ */

  faq: [
    {
      question:
        "Le vidéoprojecteur peut-il être loué sans écran ?",

      answer:
        "Oui. Le vidéoprojecteur peut être loué seul si vous disposez déjà d'un mur clair ou d'un écran adapté.",
    },

    {
      question:
        "Peut-on louer uniquement l'écran de projection ?",

      answer:
        "Oui. L'écran de projection 150 pouces peut également être loué indépendamment du vidéoprojecteur.",
    },

    {
      question:
        "Le vidéoprojecteur convient-il pour un mariage ou un anniversaire ?",

      answer:
        "Oui. Il peut être utilisé pour diffuser des photos, vidéos, diaporamas, souvenirs, présentations ou animations pendant un mariage, un anniversaire ou une soirée.",
    },

    {
      question:
        "Le matériel convient-il pour un événement professionnel ?",

      answer:
        "Oui. Le vidéoprojecteur est également adapté aux réunions, présentations, conférences, événements d'entreprise et manifestations associatives.",
    },

    {
      question:
        "Le vidéoprojecteur est-il testé avant la location ?",

      answer:
        "Oui. Le matériel est testé avant chaque location afin de vérifier son bon fonctionnement.",
    },

    {
      question:
        "Dans quelles zones proposez-vous la location de vidéoprojecteur ?",

      answer:
        "Nous intervenons principalement en Nièvre, dans l'Yonne et dans le Cher, notamment autour de Varzy et Nevers. Les déplacements plus éloignés peuvent être étudiés sur devis.",
    },
  ],
};