import type { Service } from "./types";

export const mobilier: Service = {
  id: "mobilier",

  title: "Mobilier",

  category: "Location de mobilier",

  heroImage:
    "/images/services/mobilier-hero.webp",

  cardImage:
    "/images/services/mobilier.webp",

  startingPrice: 2,

  shortDescription:
    "Location de tables, chaises, mange-debout, tabourets et tente pour vos événements en Nièvre, Yonne et Cher.",

  description:
    "Pour votre mariage, anniversaire, réception ou événement professionnel, nous proposons à la location du mobilier événementiel propre, robuste et prêt à l'emploi : tables rondes, tables rectangulaires, tables hautes, chaises, tabourets et tente 4 × 8 m. Nous intervenons notamment autour de Varzy, Auxerre, Nevers et plus largement en Nièvre, Yonne et Cher.",

  /* ============================================================
     SEO
  ============================================================ */

  seo: {
    title:
      "Location mobilier événementiel Nièvre, Auxerre, Nevers, Yonne et Cher",

    description:
      "Location de mobilier événementiel en Nièvre, Yonne et Cher : tables, chaises, mange-debout, tabourets, housses et tente 4 × 8 m pour mariages, anniversaires et réceptions.",
  },

  /* ============================================================
     INCLUS
  ============================================================ */

  included: [
    "Matériel contrôlé avant chaque location",
    "Conseils sur les quantités selon votre événement",
    "Installation possible",
    "Livraison gratuite dans un rayon de 20 km",
  ],

  /* ============================================================
     TARIFS
  ============================================================ */

  pricing: [
    {
      label: "Table ronde Ø152 cm",
      price: 12,
      description:
        "Idéale pour les repas de mariage, anniversaires et réceptions.",
    },

    {
      label: "Table rectangulaire",
      price: 10,
    },

    {
      label: "Table haute",
      price: 6,
      description:
        "Parfaite pour cocktails, apéritifs et espaces conviviaux.",
    },

    {
      label: "Tabouret",
      price: 2,
    },

    {
      label: "Chaise",
      price: 4,
    },

    {
      label: "Tente 4 × 8 m",
      price: 150,
      description:
        "Solution adaptée pour vos réceptions et événements en extérieur.",
    },
  ],

  /* ============================================================
     OPTIONS
  ============================================================ */

  options: [
    {
      name: "Nappe de table",
      price: 7,
      description:
        "Disponible en blanc ou en noir.",
    },

    {
      name: "Housse de chaise",
      price: 2,
    },
  ],

  /* ============================================================
     GALERIE
  ============================================================ */

  gallery: [
    {
      src:
        "/images/services/mobilier/table-ronde.webp",

      alt:
        "Table ronde de 152 cm disponible à la location pour mariage et réception",

      label:
        "Table ronde Ø152 cm",
    },

    {
      src:
        "/images/services/mobilier/table-rectangulaire.webp",

      alt:
        "Table rectangulaire disponible à la location pour événement",

      label:
        "Table rectangulaire",
    },

    {
      src:
        "/images/services/mobilier/mange-debout.webp",

      alt:
        "Mange-debout disponible à la location pour cocktail et réception",

      label:
        "Mange-debout",
    },

    {
      src:
        "/images/services/mobilier/chaise.webp",

      alt:
        "Chaise disponible à la location pour mariage et événement",

      label:
        "Chaise",
    },

    {
      src:
        "/images/services/mobilier/tabouret.webp",

      alt:
        "Tabouret disponible à la location pour événement",

      label:
        "Tabouret",
    },

    {
      src:
        "/images/services/mobilier/nappe.webp",

      alt:
        "Table avec nappe disponible pour réception et événement",

      label:
        "Nappe de table",
    },

    {
      src:
        "/images/services/mobilier/housse-chaise.webp",

      alt:
        "Chaise avec housse disponible pour mariage et réception",

      label:
        "Housse de chaise",
    },

    {
      src:
        "/images/services/mobilier/tente-4x8.webp",

      alt:
        "Tente 4 par 8 mètres installée pour une réception",

      label:
        "Tente 4 × 8 m",
    },
  ],

  /* ============================================================
     FAQ
  ============================================================ */

  faq: [
    {
      question:
        "Le mobilier est-il nettoyé avant chaque location ?",

      answer:
        "Oui. Chaque élément est nettoyé et contrôlé avant chaque location afin d'être prêt à être utilisé lors de votre événement.",
    },

    {
      question:
        "Pouvez-vous installer le mobilier sur place ?",

      answer:
        "Oui. La livraison et l'installation du mobilier peuvent être proposées selon le lieu et les besoins de votre événement.",
    },

    {
      question:
        "Quel mobilier peut-on louer pour un mariage ou une réception ?",

      answer:
        "Nous proposons notamment des tables rondes, tables rectangulaires, tables hautes, chaises, tabourets, housses et une tente 4 × 8 m.",
    },

    {
      question:
        "Pouvez-vous nous conseiller sur le nombre de tables et de chaises ?",

      answer:
        "Oui. Nous pouvons vous conseiller sur les quantités à prévoir en fonction du nombre d'invités et de l'organisation de votre réception.",
    },

    {
      question:
        "La livraison du mobilier est-elle comprise ?",

      answer:
        "La livraison est offerte dans un rayon de 20 km autour de Varzy. Au-delà, les frais de déplacement sont étudiés lors de la demande de devis.",
    },

    {
      question:
        "Dans quelles zones proposez-vous la location de mobilier événementiel ?",

      answer:
        "Nous intervenons principalement en Nièvre, dans l'Yonne et dans le Cher, notamment autour de Varzy, Auxerre et Nevers. Les déplacements plus éloignés peuvent être étudiés sur devis.",
    },
  ],
};