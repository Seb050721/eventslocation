import type { Service } from "./types";

export const effets: Service = {
  id: "effets",

  title: "Machines à effets",

  category: "Effets spéciaux",

  heroImage:
    "/images/services/effets-hero.webp",

  cardImage:
    "/images/services/effets.webp",

  startingPrice: 15,

  shortDescription:
    "Location de machines à fumée et à bulles pour vos mariages, anniversaires et soirées en Nièvre, Yonne et Cher.",

  description:
    "Ajoutez une ambiance originale à votre mariage, anniversaire, soirée privée ou événement professionnel grâce à nos machines à effets. Machine à fumée ou machine à bulles, le matériel est proposé avec le liquide nécessaire et peut être installé sur place. Nous intervenons notamment autour de Varzy, Nevers et plus largement en Nièvre, Yonne et Cher.",

  /* ============================================================
     SEO
  ============================================================ */

  seo: {
    title:
      "Location machine à fumée et bulles Nièvre, Nevers, Yonne et Cher",

    description:
      "Location de machine à fumée et machine à bulles dès 15 € pour mariage, anniversaire et soirée en Nièvre, Yonne et Cher. Liquide fourni et installation possible.",
  },

  /* ============================================================
     INCLUS
  ============================================================ */

  included: [
    "Liquide fourni",
    "Installation comprise si nécessaire",
    "Conseils d'utilisation",
    "Matériel contrôlé avant chaque location",
    "Livraison gratuite dans un rayon de 20 km",
  ],

  /* ============================================================
     TARIFS
  ============================================================ */

  pricing: [
    {
      label: "Machine à fumée",
      price: 20,
      description:
        "Idéale pour renforcer l'ambiance d'une soirée et mettre en valeur les jeux de lumière.",
    },

    {
      label: "Machine à bulles",
      price: 15,
      description:
        "Une animation originale pour mariages, anniversaires, fêtes et événements.",
    },
  ],

  /* ============================================================
     OPTIONS
  ============================================================ */

  options: [
    {
      name: "Canon CO₂",
      description:
        "Bientôt disponible",
    },
  ],

  gallery: [],

  /* ============================================================
     FAQ
  ============================================================ */

  faq: [
    {
      question:
        "Le liquide est-il fourni avec les machines à effets ?",

      answer:
        "Oui. Le liquide nécessaire au fonctionnement de la machine à fumée ou de la machine à bulles est inclus dans la location.",
    },

    {
      question:
        "L'installation des machines est-elle comprise ?",

      answer:
        "Oui. Nous pouvons installer le matériel si nécessaire et vous expliquer son utilisation.",
    },

    {
      question:
        "Peut-on louer uniquement une machine à fumée ?",

      answer:
        "Oui. La machine à fumée peut être louée indépendamment des autres prestations.",
    },

    {
      question:
        "Peut-on louer uniquement une machine à bulles ?",

      answer:
        "Oui. La machine à bulles peut être louée seule pour votre mariage, anniversaire, fête ou autre événement.",
    },

    {
      question:
        "La machine à fumée fonctionne-t-elle avec les jeux de lumière ?",

      answer:
        "Oui. La fumée permet notamment de mieux faire ressortir les faisceaux des jeux de lumière et de créer une ambiance plus immersive pendant une soirée.",
    },

    {
      question:
        "Dans quelles zones proposez-vous la location de machines à effets ?",

      answer:
        "Nous intervenons principalement en Nièvre, dans l'Yonne et dans le Cher, notamment autour de Varzy et Nevers. La livraison est offerte dans un rayon de 20 km autour de Varzy et les déplacements plus éloignés peuvent être étudiés sur devis.",
    },
  ],
};