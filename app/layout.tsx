
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

/* ============================================================
   POLICE
============================================================ */

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

/* ============================================================
   CONFIGURATION DU SITE
============================================================ */

const SITE_URL = "https://www.eventsemotions.fr";

const BUSINESS_NAME = "Event'S Emotions";
const BUSINESS_SLOGAN = "Votre créateur d'émotions";
const BUSINESS_EMAIL = "sebastien.hamon@eventsemotions.fr";
const BUSINESS_PHONE = "+33643894570";

const LOGO_URL = "/Logo/LogoRond.png";
const HERO_IMAGE = "/images/hero-photobooth.jpg";

/* ============================================================
   METADATA SEO
============================================================ */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  icons: {
    icon: [
      {
        url: "/Logo/Icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/Logo/Icon.png",
    apple: "/Logo/Icon.png",
  },

  title: {
    default:
      "Event'S Emotions | Photobooth & location événementielle en Nièvre",

    template: "%s | Event'S Emotions",
  },

  description:
    "Event'S Emotions, votre créateur d'émotions : location de photobooth, mobilier, sonorisation, vidéoprojecteur, machines à effets et Smoke Puff pour vos événements en Nièvre, Yonne et Cher.",

  keywords: [
    "Event'S Emotions",
    "Event'S Emotions Varzy",
    "location matériel événementiel",
    "location événementielle Nièvre",
    "location événementielle Yonne",
    "location événementielle Cher",
    "location photobooth Nièvre",
    "location photobooth Yonne",
    "photobooth Auxerre",
    "photobooth Clamecy",
    "photobooth Nevers",
    "photobooth Cosne-Cours-sur-Loire",
    "photobooth La Charité-sur-Loire",
    "photobooth Avallon",
    "photobooth Varzy",
    "location mobilier mariage",
    "location tables et chaises",
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
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
  ],

  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,

  /* ==========================================================
     URL CANONIQUE DE LA PAGE D'ACCUEIL
  ========================================================== */

  alternates: {
    canonical: SITE_URL,
  },

  /* ==========================================================
     OPEN GRAPH
  ========================================================== */

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: BUSINESS_NAME,

    title:
      "Event'S Emotions | Votre créateur d'émotions",

    description:
      "Location de photobooth, mobilier, sonorisation, projection vidéo, Smoke Puff et matériel événementiel en Nièvre, Yonne et Cher.",

    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt:
          "Event'S Emotions - Location de matériel événementiel",
      },
    ],
  },

  /* ==========================================================
     TWITTER / PARTAGE
  ========================================================== */

  twitter: {
    card: "summary_large_image",

    title:
      "Event'S Emotions | Votre créateur d'émotions",

    description:
      "Photobooth, mobilier, sonorisation, projection vidéo et animations événementielles en Nièvre, Yonne et Cher.",

    images: [HERO_IMAGE],
  },

  /* ==========================================================
     ROBOTS GOOGLE
  ========================================================== */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Événementiel",
};

/* ============================================================
   DONNÉES STRUCTURÉES GOOGLE
   LOCAL BUSINESS
============================================================ */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  "@id": `${SITE_URL}/#business`,

  name: BUSINESS_NAME,

  // Le nom commercial est distinct du nom légal de
  // l'entrepreneur individuel.
  legalName: "Sébastien Hamon",

  slogan: BUSINESS_SLOGAN,

  url: SITE_URL,

  logo: `${SITE_URL}${LOGO_URL}`,

  image: `${SITE_URL}${HERO_IMAGE}`,

  description:
    "Event'S Emotions, votre créateur d'émotions. Location de photobooth, mobilier, sonorisation, vidéoprojecteur, machines à effets et Smoke Puff pour les mariages, anniversaires et événements professionnels en Nièvre, Yonne et Cher.",

  telephone: BUSINESS_PHONE,

  email: BUSINESS_EMAIL,

  priceRange: "€€",

  /* ==========================================================
     ADRESSE
  ========================================================== */

  address: {
    "@type": "PostalAddress",

    streetAddress: "17 Boulevard Dupin",
    postalCode: "58210",
    addressLocality: "Varzy",
    addressRegion: "Bourgogne-Franche-Comté",
    addressCountry: "FR",
  },

  /* ==========================================================
     CONTACT
  ========================================================== */

  contactPoint: {
    "@type": "ContactPoint",

    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,

    contactType: "customer service",

    areaServed: "FR",

    availableLanguage: "fr",
  },

  /* ==========================================================
     ZONES D'INTERVENTION
  ========================================================== */

  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Nièvre",
    },
    {
      "@type": "AdministrativeArea",
      name: "Yonne",
    },
    {
      "@type": "AdministrativeArea",
      name: "Cher",
    },
    {
      "@type": "City",
      name: "Auxerre",
    },
    {
      "@type": "City",
      name: "Clamecy",
    },
    {
      "@type": "City",
      name: "Nevers",
    },
    {
      "@type": "City",
      name: "Cosne-Cours-sur-Loire",
    },
    {
      "@type": "City",
      name: "La Charité-sur-Loire",
    },
    {
      "@type": "City",
      name: "Avallon",
    },
  ],

  /* ==========================================================
     PRESTATIONS
  ========================================================== */

  hasOfferCatalog: {
    "@type": "OfferCatalog",

    name: "Prestations Event'S Emotions",

    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Photo Booth",
        url: `${SITE_URL}/prestations/photobooth`,
      },
      {
        "@type": "OfferCatalog",
        name: "Sonorisation",
        url: `${SITE_URL}/prestations/sonorisation`,
      },
      {
        "@type": "OfferCatalog",
        name: "Projection vidéo",
        url: `${SITE_URL}/prestations/projection`,
      },
      {
        "@type": "OfferCatalog",
        name: "Mobilier événementiel",
        url: `${SITE_URL}/prestations/mobilier`,
      },
      {
        "@type": "OfferCatalog",
        name: "Machines à effets",
        url: `${SITE_URL}/prestations/effets`,
      },
      {
        "@type": "OfferCatalog",
        name: "Smoke Puff",
        url: `${SITE_URL}/prestations/feux`,
      },
    ],
  },

  /* ==========================================================
     RÉSEAUX SOCIAUX
  ========================================================== */

  sameAs: [
    "https://www.instagram.com/events_emotions__/",
    "https://www.facebook.com/share/1H7nS1AuH4/",
  ],
};

/* ============================================================
   ROOT LAYOUT
============================================================ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.className} bg-white text-gray-900 antialiased`}
      >
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              localBusinessSchema
            ).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
