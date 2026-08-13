import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { services } from "@/data/services";

import ServiceHero from "@/components/service/ServiceHero";
import PriceTable from "@/components/service/PriceTable";
import OptionsGrid from "@/components/service/OptionsGrid";
import EquipmentTable from "@/components/service/EquipmentTable";
import FAQAccordion from "@/components/service/FAQAccordion";
import ServiceHighlights from "@/components/service/ServiceHighlights";
import RelatedServices from "@/components/service/RelatedServices";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(
    (item) => item.id === slug
  );

  if (!service) {
    return {
      title: "Prestation introuvable",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl =
    `https://eventslocation.fr/prestations/${service.id}`;

  const title =
    service.seo?.title ??
    `${service.title} en Nièvre, Yonne et Cher`;

  const description =
    service.seo?.description ??
    service.description;

  const image =
    service.heroImage ??
    service.cardImage ??
    "/images/hero-photobooth.jpg";

  return {
    title,

    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: canonicalUrl,

      title,
      description,

      siteName: "Event'S Location",

      images: [
        {
          url: image,
          alt: service.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.id === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] pb-24 pt-32">

      {/* HALOS */}
      <div className="pointer-events-none absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-green-500/10 blur-[180px]" />

      <div className="pointer-events-none absolute right-0 top-[400px] h-[450px] w-[450px] rounded-full bg-green-500/10 blur-[180px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-6 lg:px-8">

        <ServiceHero service={service} />

        <ServiceHighlights
          items={service.included}
        />

        <PriceTable
          title="Nos tarifs"
          items={service.pricing}
        />

        <OptionsGrid
          options={service.options}
        />

        <EquipmentTable
          equipments={service.equipments}
        />

        <FAQAccordion
          faq={service.faq}
        />

        <RelatedServices
          currentId={service.id}
        />

        {/* CTA */}
        <section className="overflow-hidden rounded-[28px] border border-green-500/20 bg-gradient-to-br from-green-600 via-green-500 to-green-700 p-6 sm:p-8 lg:p-12">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-10">

            <div className="max-w-2xl">

              <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white sm:text-sm sm:tracking-[0.3em]">
                Demande de devis
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl">
                Vous souhaitez réserver cette prestation ?
              </h2>

              <p className="mt-5 text-base leading-7 text-green-50 sm:text-lg sm:leading-8">
                Contactez-nous pour vérifier la disponibilité de votre date,
                obtenir un devis personnalisé et organiser votre événement
                en toute sérénité.
              </p>

            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[260px]">

              <a
                href="/#contact"
                className="rounded-xl bg-white px-6 py-4 text-center font-bold text-green-700 transition hover:scale-[1.02] sm:rounded-2xl sm:text-lg"
              >
                Demander un devis
              </a>

              <a
                href="tel:+33643894570"
                className="rounded-xl border border-white/40 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10 sm:rounded-2xl sm:text-lg"
              >
                📞 06 43 89 45 70
              </a>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}