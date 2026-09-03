import type { Service } from "./types";

export const photobooth: Service = {
  id: "photobooth",

  title: "Photo Booth",

  category: "Animation",

  heroImage:
    "/images/services/photobooth-hero.webp",

  cardImage:
    "/images/services/photobooth-hero.webp",

  startingPrice: 169,

  shortDescription:
    "Location de Photo Booth pour mariages, anniversaires et événements à Auxerre, Avallon, Nevers et dans les environs.",

  description:
    "Animez votre mariage, anniversaire ou événement avec notre Photo Booth professionnel. Disponible à la journée ou durant tout le week-end, il permet à vos invités de réaliser leurs photos librement et de conserver un souvenir personnalisé de votre événement.",

  /* ============================================================
     SEO
  ============================================================ */

  seo: {
    title:
      "Location Photobooth Auxerre, Yonne & Nièvre dès 169 €",

    description:
      "Location de Photo Booth dès 169 € à Auxerre, Avallon, Nevers et dans l'Yonne et la Nièvre. Cadre personnalisé, galerie photo et installation.",
  },

  /* ============================================================
     CONTENU SEO LOCAL
  ============================================================ */

  seoContent: {
    title:
      "Location de Photo Booth à Auxerre, dans l'Yonne et la Nièvre",

    paragraphs: [
      "Vous recherchez un Photo Booth pour un mariage, un anniversaire ou une réception ? Event'S Location propose plusieurs formules à partir de 169 €, en version numérique ou avec impressions photo.",

      "Basés à Varzy, nous intervenons notamment à Auxerre, Avallon, Clamecy, Nevers, Cosne-Cours-sur-Loire et dans les communes environnantes. La livraison est offerte dans un rayon de 20 km autour de Varzy et reste possible au-delà sur devis.",

      "Notre Photo Booth convient aux mariages, anniversaires, baptêmes, soirées privées, événements associatifs et événements professionnels. Un cadre photo personnalisé est créé pour s'accorder avec le thème et les couleurs de votre événement.",

      "Plusieurs formules sont proposées : version numérique à 169 €, puis des forfaits comprenant 100, 150, 200, 300 ou 400 impressions. Vous pouvez ainsi adapter votre formule au nombre d'invités et à votre budget.",

      "Les photos réalisées pendant l'événement sont également accessibles dans une galerie en ligne. Le Photo Booth peut être mis à disposition pour une journée ou pendant tout le week-end selon votre événement.",

      "Vous pouvez également compléter votre location avec du mobilier, de la sonorisation, un vidéoprojecteur, des machines à effets ou des Smoke Puff afin de regrouper plusieurs besoins auprès d'Event'S Location.",
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
    "Livraison offerte dans un rayon de 20 km",
  ],

  /* ============================================================
     TARIFS
  ============================================================ */

  pricing: [
    {
      label: "Numérique",
      price: 169,
      description:
        "Photos numériques en illimité, sans impression papier.",
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
        "Sur devis",
    },
  ],

  gallery: [],

  /* ============================================================
     FAQ
  ============================================================ */

  faq: [
    {
      question:
        "Combien coûte la location d'un Photo Booth ?",

      answer:
        "Nos formules Photo Booth débutent à 169 € en version numérique. Des formules comprenant de 100 à 400 impressions photo sont également disponibles.",
    },

    {
      question:
        "Proposez-vous la location de Photo Booth à Auxerre ?",

      answer:
        "Oui. Event'S Location propose la location de Photo Booth à Auxerre et plus largement dans l'Yonne, selon les disponibilités et les conditions de livraison.",
    },

    {
      question:
        "Proposez-vous également le Photo Booth à Avallon, Nevers et Cosne-Cours-sur-Loire ?",

      answer:
        "Oui. Nous pouvons intervenir à Avallon, Nevers, Cosne-Cours-sur-Loire et dans de nombreuses communes de l'Yonne et de la Nièvre. Le déplacement est précisé lors de la demande de devis.",
    },

    {
      question:
        "Peut-on louer le Photo Booth pour un mariage ?",

      answer:
        "Oui. Le Photo Booth est particulièrement adapté aux mariages et permet aux invités de réaliser leurs propres photos tout au long de la réception.",
    },

    {
      question:
        "Le cadre des photos est-il personnalisé ?",

      answer:
        "Oui. Un cadre photo personnalisé est créé pour votre événement afin de l'adapter à votre thème, à vos couleurs et au style de votre réception.",
    },

    {
      question:
        "Combien de temps puis-je conserver le Photo Booth ?",

      answer:
        "Le Photo Booth peut être mis à disposition à la journée ou pendant tout le week-end selon votre événement.",
    },

    {
      question:
        "Les invités peuvent-ils récupérer leurs photos en ligne ?",

      answer:
        "Oui. Une galerie photo en ligne permet de retrouver les photos réalisées pendant l'événement.",
    },

    {
      question:
        "La livraison du Photo Booth est-elle comprise ?",

      answer:
        "La livraison est offerte dans un rayon de 20 km autour de Varzy. Pour les communes situées au-delà de cette zone, le déplacement est calculé lors de la demande de devis.",
    },

    {
      question:
        "Dans quelles villes proposez-vous la location de Photo Booth ?",

      answer:
        "Nous intervenons principalement dans la Nièvre et l'Yonne, notamment autour de Varzy, Clamecy, Auxerre, Avallon, Nevers et Cosne-Cours-sur-Loire, ainsi que dans les communes environnantes.",
    },
  ],
};