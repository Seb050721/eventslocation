import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eventslocation.fr"),
  title: {
    default: "Event'S Location | Location de matériel événementiel",
    template: "%s | Event'S Location",
  },
  description:
    "Location de photobooth, barnums, sonorisation, mobilier, vidéoprojecteur et matériel événementiel dans la Nièvre, l'Yonne et le Cher.",
  keywords: [
    "photobooth",
    "location photobooth",
    "barnum",
    "sonorisation",
    "vidéoprojecteur",
    "location événementielle",
    "Nièvre",
    "Yonne",
    "Cher",
    "Event'S Location",
  ],
  openGraph: {
    title: "Event'S Location",
    description:
      "Location de matériel événementiel pour tous vos événements.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.className} bg-white text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}