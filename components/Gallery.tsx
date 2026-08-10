"use client";

import Image from "next/image";

const images = [
  {
    src: "/images/gallery/mariage1.jpg",
    category: "Mariage",
  },
  {
    src: "/images/gallery/photobooth.jpg",
    category: "Photo Booth",
  },
  {
    src: "/images/gallery/gender.jpg",
    category: "Gender Reveal",
  },
  {
    src: "/images/gallery/mobilier.jpg",
    category: "Mobilier",
  },
  {
    src: "/images/gallery/smokepuff.jpg",
    category: "Smoke Puff",
  },
  {
    src: "/images/gallery/entreprise.jpg",
    category: "Entreprise",
  },
];

export default function Gallery() {
  return (
    <section
      id="galerie"
      className="bg-[#080808] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-green-400">
            Nos réalisations
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Découvrez nos événements
          </h2>

          <p className="mt-8 text-lg text-gray-400">
            Quelques souvenirs des événements que nous avons eu le plaisir
            d'accompagner.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {images.map((image) => (

            <div
              key={image.src}
              className="group relative h-96 overflow-hidden rounded-3xl"
            >

              <Image
                src={image.src}
                alt={image.category}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 transition group-hover:opacity-90" />

              <div className="absolute bottom-8 left-8">

                <span className="rounded-full bg-green-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
                  {image.category}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}