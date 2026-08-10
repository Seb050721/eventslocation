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
    };
  }

  return {
    title: `${service.title} | Event'S Location`,
    description: service.description,
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
    <main className="min-h-screen bg-[#050505] pt-32 pb-24">

      {/* Halo */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-green-500/10 blur-[180px]" />

      <div className="absolute right-0 top-[400px] h-[450px] w-[450px] rounded-full bg-green-500/10 blur-[180px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6">

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
            <section className="overflow-hidden rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-600 via-green-500 to-green-700 p-12">

          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

            <div className="max-w-2xl">

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white">
                Demande de devis
              </span>

              <RelatedServices currentId={service.id} />

              <h2 className="mt-6 text-4xl font-black text-white">
                Vous souhaitez réserver cette prestation ?
              </h2>

              <p className="mt-5 text-lg leading-8 text-green-50">
                Contactez-nous pour vérifier la disponibilité de votre date,
                obtenir un devis personnalisé et organiser votre événement
                en toute sérénité.
              </p>

            </div>

            <div className="flex flex-col gap-4">

              <a
                href="/#contact"
                className="rounded-full bg-white px-10 py-4 text-center text-lg font-bold text-green-700 transition duration-300 hover:scale-105"
              >
                Demander un devis
              </a>

              <a
                href="tel:0643894570"
                className="rounded-full border border-white/40 px-10 py-4 text-center text-lg font-semibold text-white transition duration-300 hover:bg-white/10"
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