import type { Service } from "./types";

export const mobilier: Service = {
  id: "mobilier",

  title: "Mobilier",

  category: "Location de mobilier",

  heroImage: "/images/services/mobilier-hero.webp",

  cardImage: "/images/services/mobilier.webp",

  startingPrice: 2,

  shortDescription:
    "Location de tables, chaises, mange-debout, tabourets et tente pour mariages, anniversaires et réceptions à Clamecy, Auxerre, Nevers et dans les environs.",

  description:
    "Pour votre mariage, anniversaire, réception ou événement professionnel, Event'S Location propose du mobilier événementiel propre, robuste et prêt à l'emploi : tables rondes, tables rectangulaires, mange-debout, chaises, tabourets, nappes, housses et tente 4 × 8 m. Basés à Varzy, nous intervenons notamment à Clamecy, Auxerre, Avallon, Nevers, Cosne-Cours-sur-Loire et plus largement dans la Nièvre, l'Yonne et le Cher.",

  /* ============================================================
     SEO
  ============================================================ */

  seo: {
    title:
      "Location tables, chaises & mobilier à Clamecy, Auxerre, Nevers",

    description:
      "Location de tables, chaises, mange-debout, tabourets et tente 4 × 8 m à Clamecy, Auxerre, Nevers, Avallon et Cosne-Cours-sur-Loire.",
  },

  /* ============================================================
     CONTENU SEO LOCAL
  ============================================================ */

  seoContent: {
    title:
      "Location de tables, chaises et mobilier événementiel en Nièvre et dans l'Yonne",

    paragraphs: [
      "Vous organisez un mariage, un anniversaire, une réception ou un événement professionnel ? Event'S Location propose à la location différents équipements de mobilier pour aménager votre salle ou votre espace de réception.",

      "Basée à Varzy, Event'S Location intervient notamment à Clamecy, Auxerre, Avallon, Nevers, Cosne-Cours-sur-Loire et dans les communes environnantes. La livraison est offerte dans un rayon de 20 km autour de Varzy et reste possible au-delà sur devis.",

      "Notre gamme comprend des tables rondes de 152 cm, des tables rectangulaires, des mange-debout, des chaises et des tabourets. Ces équipements peuvent convenir aussi bien à un repas de mariage qu'à un cocktail, un anniversaire, une fête associative ou une réception professionnelle.",

      "Pour compléter l'aménagement, des nappes de table et des housses de chaise sont également disponibles. Elles permettent d'obtenir une présentation plus homogène et adaptée au style de votre événement.",

      "Pour les événements en extérieur, Event'S Location propose également une tente 4 × 8 m à partir de 150 €. Elle peut être associée aux tables, chaises et autres équipements nécessaires à votre réception.",

      "Vous pouvez louer uniquement le mobilier dont vous avez besoin ou regrouper plusieurs prestations dans une seule demande, par exemple du mobilier avec un photobooth, de la sonorisation, un vidéoprojecteur ou des machines à effets.",

      "Vous recherchez plus précisément une location de tables et chaises à Clamecy, Auxerre, Nevers, Avallon ou Cosne-Cours-sur-Loire ? Event'S Location dispose de pages locales dédiées permettant de retrouver les prestations proposées dans chacun de ces secteurs.",
    ],
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
      description:
        "Adaptée aux repas, buffets et différents types de réceptions.",
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
        "Table rectangulaire disponible à la location pour mariage, anniversaire et réception",

      label:
        "Table rectangulaire",
    },

    {
      src:
        "/images/services/mobilier/mange-debout.webp",

      alt:
        "Mange-debout disponible à la location pour cocktail, mariage et réception",

      label:
        "Mange-debout",
    },

    {
      src:
        "/images/services/mobilier/chaise.webp",

      alt:
        "Chaise disponible à la location pour mariage, anniversaire et événement",

      label:
        "Chaise",
    },

    {
      src:
        "/images/services/mobilier/tabouret.webp",

      alt:
        "Tabouret disponible à la location pour cocktail et événement",

      label:
        "Tabouret",
    },

    {
      src:
        "/images/services/mobilier/nappe.webp",

      alt:
        "Nappe de table disponible à la location pour mariage et réception",

      label:
        "Nappe de table",
    },

    {
      src:
        "/images/services/mobilier/housse-chaise.webp",

      alt:
        "Housse de chaise disponible à la location pour mariage et réception",

      label:
        "Housse de chaise",
    },

    {
      src:
        "/images/services/mobilier/tente-4x8.webp",

      alt:
        "Tente 4 par 8 mètres installée pour mariage, réception et événement extérieur",

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
        "Combien coûte la location de tables et de chaises ?",

      answer:
        "La location d'une chaise est proposée à 4 €. Une table rectangulaire est proposée à 10 € et une table ronde de 152 cm à 12 €.",
    },

    {
      question:
        "Proposez-vous la location de tables et chaises à Clamecy ?",

      answer:
        "Oui. Event'S Location est basée à Varzy et propose la location de tables, chaises et autres équipements de mobilier dans le secteur de Clamecy.",
    },

    {
      question:
        "Proposez-vous la location de mobilier à Auxerre ?",

      answer:
        "Oui. Event'S Location propose la location de tables, chaises, mange-debout et autres équipements à Auxerre et dans les communes environnantes, selon les disponibilités et les conditions de livraison.",
    },

    {
      question:
        "Proposez-vous également du mobilier à Nevers, Avallon et Cosne-Cours-sur-Loire ?",

      answer:
        "Oui. Nous pouvons intervenir à Nevers, Avallon, Cosne-Cours-sur-Loire ainsi que dans différentes communes de la Nièvre et de l'Yonne. Le déplacement est étudié lors de la demande de devis.",
    },

    {
      question:
        "Quel mobilier peut-on louer pour un mariage ou une réception ?",

      answer:
        "Nous proposons notamment des tables rondes, tables rectangulaires, tables hautes, chaises, tabourets, nappes, housses et une tente 4 × 8 m.",
    },

    {
      question:
        "Pouvez-vous nous conseiller sur le nombre de tables et de chaises ?",

      answer:
        "Oui. Nous pouvons vous conseiller sur les quantités à prévoir en fonction du nombre d'invités et de l'organisation de votre réception.",
    },

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
        "Proposez-vous une tente ou un barnum pour les événements en extérieur ?",

      answer:
        "Oui. Event'S Location propose une tente 4 × 8 m à partir de 150 € pour les réceptions et événements en extérieur.",
    },

    {
      question:
        "La livraison du mobilier est-elle comprise ?",

      answer:
        "La livraison est offerte dans un rayon de 20 km autour de Varzy. Au-delà, les frais de déplacement sont étudiés lors de la demande de devis.",
    },

    {
      question:
        "Dans quelles villes proposez-vous la location de mobilier événementiel ?",

      answer:
        "Nous intervenons principalement dans la Nièvre et l'Yonne, notamment autour de Varzy, Clamecy, Auxerre, Avallon, Nevers et Cosne-Cours-sur-Loire, ainsi que dans les communes environnantes. Les demandes dans le Cher peuvent également être étudiées.",
    },
  ],
};