import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

/* ============================================================
   POLICE
============================================================ */

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

/* ============================================================
   CONFIGURATION DU SITE
============================================================ */

const SITE_URL = "https://www.eventslocation.fr";

/* ============================================================
   METADATA SEO
============================================================ */

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
    template: "%s | Event'S Location",
  },

  description:
    "Location de Photo Booth, mobilier, sonorisation, vidéoprojecteur, machines à effets et Smoke Puff pour mariages, anniversaires et événements en Nièvre, Yonne et Cher.",

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

  creator: "Event'S Location",
  publisher: "Event'S Location",

  /* ==========================================================
     URL CANONIQUE
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

    siteName: "Event'S Location",

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

  /* ==========================================================
     TWITTER / PARTAGE
  ========================================================== */

  twitter: {
    card: "summary_large_image",

    title:
      "Event'S Location | Location de matériel événementiel",

    description:
      "Photo Booth, mobilier, sonorisation, projection vidéo et animations événementielles en Nièvre, Yonne et Cher.",

    images: [
      "/images/hero-photobooth.jpg",
    ],
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
   DONNÉES STRUCTURÉES
   LOCAL BUSINESS
============================================================ */

const localBusinessSchema = {
  "@context": "https://schema.org",

  "@type": "LocalBusiness",

  "@id": `${SITE_URL}/#business`,

  name: "Event'S Location",

  legalName: "Event'S Location",

  url: SITE_URL,

  logo:
    `${SITE_URL}/Logo/Icon.png`,

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

  /* ==========================================================
     ADRESSE
  ========================================================== */

  address: {
    "@type": "PostalAddress",

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

  /* ==========================================================
     CONTACT
  ========================================================== */

  contactPoint: {
    "@type": "ContactPoint",

    telephone:
      "+33643894570",

    contactType:
      "customer service",

    areaServed:
      "FR",

    availableLanguage:
      "fr",
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
  ],

  /* ==========================================================
     PRESTATIONS
  ========================================================== */

  hasOfferCatalog: {
    "@type": "OfferCatalog",

    name:
      "Prestations Event'S Location",

    itemListElement: [
      {
        "@type": "OfferCatalog",

        name: "Photo Booth",

        url:
          `${SITE_URL}/prestations/photobooth`,
      },

      {
        "@type": "OfferCatalog",

        name: "Sonorisation",

        url:
          `${SITE_URL}/prestations/sonorisation`,
      },

      {
        "@type": "OfferCatalog",

        name: "Projection vidéo",

        url:
          `${SITE_URL}/prestations/projection`,
      },

      {
        "@type": "OfferCatalog",

        name:
          "Mobilier événementiel",

        url:
          `${SITE_URL}/prestations/mobilier`,
      },

      {
        "@type": "OfferCatalog",

        name:
          "Machines à effets",

        url:
          `${SITE_URL}/prestations/effets`,
      },

      {
        "@type": "OfferCatalog",

        name: "Smoke Puff",

        url:
          `${SITE_URL}/prestations/feux`,
      },
    ],
  },

  /* ==========================================================
     RÉSEAUX SOCIAUX
  ========================================================== */

  sameAs: [
    "https://www.instagram.com/events_location__/",
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

        {/* ====================================================
            DONNÉES STRUCTURÉES GOOGLE
        ==================================================== */}

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