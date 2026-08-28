import type { Service } from "./types";

export const sonorisation: Service = {
  id: "sonorisation",

  title: "Sonorisation",

  category: "Audio",

  heroImage:
    "/images/services/sonorisation-hero.webp",

  cardImage:
    "/images/services/sonorisation-hero.webp",

  startingPrice: 100,

  shortDescription:
    "Location de sonorisation pour mariages, anniversaires, soirées et événements en Nièvre, Yonne et Cher.",

  description:
    "Profitez d'un matériel de sonorisation adapté à vos mariages, anniversaires, soirées privées, événements associatifs ou professionnels. Nos packs peuvent inclure enceintes, table de mixage, caisson de basses, jeux de lumière et machine à fumée. Nous proposons également la location de matériel à l'unité autour de Varzy, Nevers et plus largement en Nièvre, Yonne et Cher.",

  /* ============================================================
     SEO
  ============================================================ */

  seo: {
    title:
      "Location sonorisation Nièvre, Nevers, Yonne et Cher dès 100 €",

    description:
      "Location de sonorisation pour mariage, anniversaire, soirée et événement dès 100 €. Enceintes, table de mixage, micro HF, caisson, jeux de lumière et matériel disponible à l'unité.",
  },

  /* ============================================================
     INCLUS
  ============================================================ */

  included: [
    "Matériel vérifié avant chaque location",
    "Conseils de mise en service",
    "Matériel professionnel",
    "Livraison possible selon le lieu de l'événement",
  ],

  /* ============================================================
     TARIFS
  ============================================================ */

  pricing: [
    {
      label:
        "Pack Enceintes + Table de mixage",
      price: 100,
      description:
        "Une solution simple pour sonoriser votre événement avec enceintes et table de mixage.",
    },

    {
      label:
        "Pack Ambiance",
      price: 140,
      description:
        "Enceintes + caisson de basses + jeux de lumière + machine à fumée.",
    },
  ],

  /* ============================================================
     OPTIONS
  ============================================================ */

  options: [
    {
      name: "Jeu de lumière",
      price: 10,
    },
  ],

  /* ============================================================
     LOCATION À L'UNITÉ
  ============================================================ */

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

  /* ============================================================
     FAQ
  ============================================================ */

  faq: [
    {
      question:
        "Quel matériel de sonorisation peut-on louer ?",

      answer:
        "Nous proposons notamment des enceintes, une table de mixage, des micros HF, des pieds de micro et des packs complets avec caisson de basses, jeux de lumière et machine à fumée.",
    },

    {
      question:
        "La sonorisation convient-elle pour un mariage ou un anniversaire ?",

      answer:
        "Oui. Nos packs sont adaptés aux mariages, anniversaires, soirées privées, événements associatifs et événements professionnels.",
    },

    {
      question:
        "Peut-on louer uniquement une enceinte ou un micro ?",

      answer:
        "Oui. Une partie du matériel peut être louée à l'unité selon vos besoins, notamment les enceintes, micros HF, pieds de micro et tables de mixage.",
    },

    {
      question:
        "Le matériel est-il vérifié avant la location ?",

      answer:
        "Oui. Le matériel est contrôlé avant chaque location afin de garantir son bon fonctionnement lors de votre événement.",
    },

    {
      question:
        "Proposez-vous la livraison du matériel de sonorisation ?",

      answer:
        "Oui, la livraison peut être proposée selon le lieu de votre événement. Les conditions de déplacement sont précisées lors de la demande de devis.",
    },

    {
      question:
        "Dans quelles zones proposez-vous la location de sonorisation ?",

      answer:
        "Nous intervenons principalement en Nièvre, dans l'Yonne et dans le Cher, notamment autour de Varzy et Nevers. Les déplacements plus éloignés peuvent être étudiés sur devis.",
    },
  ],
};