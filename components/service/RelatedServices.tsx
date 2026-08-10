import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services, Service } from "@/data/services";

interface Props {
  currentId: string;
}

export default function RelatedServices({ currentId }: Props) {
  const related = services
    .filter((service) => service.id !== currentId)
    .slice(0, 3);

  return (
    <section>

      <div className="mb-12 text-center">

        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-green-400">
          Découvrez aussi
        </span>

        <h2 className="mt-6 text-5xl font-black text-white">
          Vous pourriez aussi aimer
        </h2>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        {related.map((service) => (

          <article
            key={service.id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-500 hover:-translate-y-2 hover:border-green-500/30"
          >

            <div className="relative h-60">

              <Image
                src={service.cardImage}
                alt={service.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            </div>

            <div className="p-8">

              <p className="text-sm uppercase tracking-[0.3em] text-green-400">
                {service.category}
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                {service.shortDescription}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-3xl font-black text-green-400">
                  Dès {service.startingPrice} €
                </span>

                <Link
                  href={`/prestations/${service.id}`}
                  className="flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  Voir

                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}