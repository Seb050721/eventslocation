import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  display: "swap",
});

const SITE_URL =
  "https://www.eventslocation.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  icons: {
    icon: "/Logo/Logo.png",
    shortcut: "/Logo/Logo.png",
    apple: "/Logo/Logo.png",
  },

  title: {
    default:
      "Event'S Location | Location de matériel événementiel en Nièvre",
    template:
      "%s | Event'S Location",
  },

  description:
    "Location de Photo Booth, mobilier, sonorisation, vidéoprojecteur, machines à effets et Smoke Puff pour mariages, anniversaires et événements en Nièvre, Yonne et Cher.",

  /*
    Google n'utilise pratiquement plus
    la balise meta keywords pour le classement,
    mais elle ne pose pas de problème.
  */
  keywords: [
    "Event'S Location",
    "location matériel événementiel",
    "location événementielle Nièvre",
    "location événementielle Yonne",
    "location événementielle Cher",
    "location photobooth Nièvre",
    "photobooth Nevers",
    "photobooth Varzy",
    "location mobilier mariage",
    "location sonorisation",
    "location vidéoprojecteur",
    "Smoke Puff",
    "feux de jour mariage",
    "machine à fumée",
    "machine à bulles",
    "mariage Nièvre",
    "anniversaire Nièvre",
  ],

  authors: [
    {
      name: "Event'S Location",
      url: SITE_URL,
    },
  ],

  creator:
    "Event'S Location",

  publisher:
    "Event'S Location",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",

    url: SITE_URL,

    siteName:
      "Event'S Location",

    title:
      "Event'S Location | Location de matériel événementiel",

    description:
      "Photo Booth, mobilier, sonorisation, projection vidéo, Smoke Puff et matériel événementiel en Nièvre, Yonne et Cher.",

    images: [
      {
        url: "/images/hero-photobooth.jpg",
        width: 1200,
        height: 630,
        alt:
          "Event'S Location - Location de matériel événementiel",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Event'S Location | Location de matériel événementiel",

    description:
      "Photo Booth, mobilier, sonorisation, projection vidéo et animations événementielles en Nièvre, Yonne et Cher.",

    images: [
      "/images/hero-photobooth.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview":
        "large",

      "max-snippet": -1,

      "max-video-preview": -1,
    },
  },

  category:
    "Événementiel",
};

/* ============================================================
   DONNÉES STRUCTURÉES LOCAL BUSINESS
============================================================ */

const localBusinessSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "LocalBusiness",

  "@id":
    `${SITE_URL}/#business`,

  name:
    "Event'S Location",

  legalName:
    "Event'S Location",

  url:
    SITE_URL,

  logo:
    `${SITE_URL}/Logo/Logo.png`,

  image:
    `${SITE_URL}/images/hero-photobooth.jpg`,

  description:
    "Location de matériel événementiel : Photo Booth, mobilier, sonorisation, vidéoprojecteur, machines à effets et Smoke Puff en Nièvre, Yonne et Cher.",

  telephone:
    "+33643894570",

  email:
    "events.location@outlook.com",

  priceRange:
    "€€",

  address: {
    "@type":
      "PostalAddress",

    streetAddress:
      "17 Boulevard Dupin",

    postalCode:
      "58210",

    addressLocality:
      "Varzy",

    addressRegion:
      "Bourgogne-Franche-Comté",

    addressCountry:
      "FR",
  },

  contactPoint: {
    "@type":
      "ContactPoint",

    telephone:
      "+33643894570",

    contactType:
      "customer service",

    areaServed:
      "FR",

    availableLanguage:
      "fr",
  },

  areaServed: [
    {
      "@type":
        "AdministrativeArea",
      name:
        "Nièvre",
    },
    {
      "@type":
        "AdministrativeArea",
      name:
        "Yonne",
    },
    {
      "@type":
        "AdministrativeArea",
      name:
        "Cher",
    },
  ],

  hasOfferCatalog: {
    "@type":
      "OfferCatalog",

    name:
      "Prestations Event'S Location",

    itemListElement: [
      {
        "@type":
          "OfferCatalog",

        name:
          "Photo Booth",

        url:
          `${SITE_URL}/prestations/photobooth`,
      },
      {
        "@type":
          "OfferCatalog",

        name:
          "Sonorisation",

        url:
          `${SITE_URL}/prestations/sonorisation`,
      },
      {
        "@type":
          "OfferCatalog",

        name:
          "Projection vidéo",

        url:
          `${SITE_URL}/prestations/projection`,
      },
      {
        "@type":
          "OfferCatalog",

        name:
          "Mobilier événementiel",

        url:
          `${SITE_URL}/prestations/mobilier`,
      },
      {
        "@type":
          "OfferCatalog",

        name:
          "Machines à effets",

        url:
          `${SITE_URL}/prestations/effets`,
      },
      {
        "@type":
          "OfferCatalog",

        name:
          "Smoke Puff",

        url:
          `${SITE_URL}/prestations/feux`,
      },
    ],
  },

  sameAs: [
    "https://www.instagram.com/events_location__/",
    "https://www.facebook.com/share/1H7nS1AuH4/",
  ],
};

/* ============================================================
   LAYOUT
============================================================ */

export default function RootLayout({
  children,
}: {
  children:
    React.ReactNode;
}) {
  return (
    <html lang="fr">

      <body
        className={`${poppins.className} bg-white text-gray-900 antialiased`}
      >

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                localBusinessSchema
              ),
          }}
        />

      </body>

    </html>
  );
}