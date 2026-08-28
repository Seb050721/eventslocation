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
    "Location de Photo Booth pour mariages, anniversaires et événements à Auxerre, dans l'Yonne et la Nièvre.",

  description:
    "Animez votre mariage, anniversaire ou événement avec notre Photo Booth professionnel. Disponible à la journée ou durant tout le week-end, il permet à vos invités de réaliser leurs photos librement et de conserver un souvenir personnalisé de votre événement.",

  /* ============================================================
     SEO
  ============================================================ */

  seo: {
    title:
      "Location Photobooth Auxerre, Yonne & Nièvre dès 169 €",

    description:
      "Location de photobooth à Auxerre, dans l'Yonne et la Nièvre dès 169 €. Mariage, anniversaire et événement avec installation, cadre personnalisé et galerie photo.",
  },

  /* ============================================================
     CONTENU SEO LOCAL
  ============================================================ */

  seoContent: {
    title:
      "Location de Photobooth à Auxerre, dans l'Yonne et la Nièvre",

    paragraphs: [
      "Vous recherchez un photobooth à Auxerre ou dans l'Yonne pour un mariage, un anniversaire ou un événement ? Event'S Location propose la location de Photo Booth à partir de 169 €, avec plusieurs formules numériques ou avec impressions photo.",

      "Basés à Varzy, nous intervenons dans l'Yonne et la Nièvre, notamment à Auxerre, Clamecy, Nevers, Cosne-Cours-sur-Loire, La Charité-sur-Loire et dans les communes environnantes. La livraison est gratuite dans un rayon de 20 km autour de Varzy et reste possible au-delà sur devis.",

      "Notre Photo Booth peut être installé pour un mariage, un anniversaire, un baptême, une soirée privée ou un événement professionnel. Le cadre photo est personnalisé selon votre événement afin que chaque impression corresponde à votre thème et à vos couleurs.",

      "Plusieurs formules sont disponibles : version numérique à 169 €, puis des forfaits comprenant 100, 150, 200, 300 ou 400 impressions photo. Vous pouvez ainsi choisir une formule adaptée au nombre d'invités et à votre budget.",

      "Les photos réalisées pendant l'événement sont également accessibles dans une galerie en ligne. Le Photo Booth peut être mis à disposition à la journée ou pendant tout le week-end selon votre événement.",

      "Pour votre événement à Auxerre, dans l'Yonne ou la Nièvre, Event'S Location propose également la location de sonorisation, mobilier, vidéoprojecteur, machines à effets et Smoke Puff.",
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
      description:
        "Photos numériques sans limite d'impression papier.",
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
        "Combien coûte la location d'un photobooth à Auxerre ?",

      answer:
        "Nos formules Photo Booth débutent à 169 € en version numérique. Des formules comprenant de 100 à 400 impressions photo sont également disponibles.",
    },

    {
      question:
        "Proposez-vous la location de photobooth à Auxerre ?",

      answer:
        "Oui. Basés à Varzy, nous proposons la location de notre Photo Booth à Auxerre et plus largement dans l'Yonne, selon les disponibilités et les conditions de livraison.",
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
        "Oui. Un cadre photo personnalisé est créé pour votre événement afin de l'adapter à votre thème, vos couleurs et au type de réception.",
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
        "La livraison est gratuite dans un rayon de 20 km autour de Varzy. Pour Auxerre, Nevers et les autres communes situées au-delà de cette zone, le déplacement est calculé lors de la demande de devis.",
    },

    {
      question:
        "Dans quelles villes proposez-vous la location de Photo Booth ?",

      answer:
        "Nous intervenons principalement dans l'Yonne et la Nièvre, notamment à Auxerre, Varzy, Clamecy, Nevers, Cosne-Cours-sur-Loire, La Charité-sur-Loire et dans les communes environnantes.",
    },
  ],
};