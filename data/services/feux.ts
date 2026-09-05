import type { Service } from "./types";

export const feux: Service = {
  id: "feux",

  title: "Smoke Puff",

  category: "Animation premium",

  heroImage:
    "/images/services/feux-hero.webp",

  cardImage:
    "/images/services/feux.webp",

  startingPrice: 79,

  shortDescription:
    "Location de Smoke Puff colorés pour mariages, Gender Reveal et événements en Nièvre, Yonne et Cher.",

  description:
    "Créez un moment spectaculaire avec nos Smoke Puff, des fumigènes de jour produisant une puissante colonne de fumée colorée. Ils sont particulièrement adaptés aux sorties de mairie ou d'église, Gender Reveal, entrées des mariés, ouvertures de bal, lancements de soirée et autres temps forts. Plusieurs couleurs sont disponibles afin d'adapter l'effet au thème de votre événement. Nous intervenons notamment autour de Varzy, Nevers et plus largement en Nièvre, Yonne et Cher.",

  /* ============================================================
     SEO
  ============================================================ */

  seo: {
    title:
      "Location Smoke Puff et fumigènes mariage Nièvre, Nevers, Yonne, Cher",

    description:
      "Location de Smoke Puff colorés dès 79 € pour mariage, sortie de mairie, Gender Reveal et événement en Nièvre, Yonne et Cher. Couleurs au choix, déclenchement HF et installation comprise.",
  },

  /* ============================================================
     INCLUS
  ============================================================ */

  included: [
    "Déclencheur HF fourni",
    "Installation comprise",
    "Mise en sécurité du matériel",
    "Choix de la couleur selon disponibilité",
    "Conseils d'utilisation",
    "Livraison gratuite jusqu'à 20 km autour de Varzy",
  ],

  /* ============================================================
     TARIFS
  ============================================================ */

  pricing: [
    {
      label: "1 feu",
      price: 79,
      description:
        "Idéal pour créer un effet ponctuel lors d'un moment fort de votre événement.",
    },

    {
      label: "2 feux",
      price: 129,
      description:
        "Une configuration symétrique idéale pour une entrée, une sortie ou une mise en scène.",
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
      description:
        "Un éventail complet pour un effet visuel puissant et spectaculaire.",
    },
  ],

  /* ============================================================
     OPTIONS
  ============================================================ */

  options: [
    {
      name: "Choix de la couleur",
      description:
        "Selon les couleurs disponibles au moment de votre réservation.",
    },

  ],

  gallery: [],

  /* ============================================================
     FAQ
  ============================================================ */

  faq: [
    {
      question:
        "Peut-on choisir la couleur des Smoke Puff ?",

      answer:
        "Oui. Plusieurs couleurs peuvent être proposées afin d'adapter l'effet au thème de votre mariage, Gender Reveal ou autre événement, selon les disponibilités.",
    },

    {
      question:
        "L'installation des Smoke Puff est-elle comprise ?",

      answer:
        "Oui. Nous installons et préparons le matériel avant votre événement afin de garantir un positionnement adapté et une utilisation dans de bonnes conditions.",
    },

    {
      question:
        "Combien de Smoke Puff faut-il prévoir pour un mariage ?",

      answer:
        "Cela dépend de l'effet recherché. Un ou deux feux peuvent suffire pour un effet ponctuel, tandis qu'une configuration de quatre ou cinq feux permet de créer un éventail beaucoup plus spectaculaire.",
    },

    {
      question:
        "Peut-on utiliser les Smoke Puff pour une sortie de mairie ou d'église ?",

      answer:
        "Oui. Les sorties de mairie ou d'église font partie des utilisations les plus populaires des Smoke Puff, sous réserve que le lieu et les conditions permettent leur installation.",
    },

    {
      question:
        "Les Smoke Puff conviennent-ils pour une Gender Reveal ?",

      answer:
        "Oui. Les Smoke Puff colorés peuvent être utilisés pour créer un effet visuel lors d'une Gender Reveal, en choisissant une couleur adaptée parmi celles disponibles.",
    },

    {
      question:
        "Peut-on déclencher plusieurs feux en même temps ?",

      answer:
        "Oui. Le système de déclenchement HF permet de coordonner plusieurs Smoke Puff afin de créer un effet simultané ou une mise en scène adaptée à votre événement.",
    },

    {
      question:
        "Dans quelles zones proposez-vous la location de Smoke Puff ?",

      answer:
        "Nous intervenons principalement en Nièvre, dans l'Yonne et dans le Cher, notamment autour de Varzy, Nevers, Auxerre, Clamecy, Avallon, Cosne-cours-sur-loire. Les déplacements plus éloignés peuvent être étudiés sur devis.",
    },
  ],
};