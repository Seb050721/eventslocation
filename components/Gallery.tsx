"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand, Images } from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    src: "/images/gallery/mariage1.jpg",
    category: "Mariage",
    alt: "Installation événementielle pour un mariage",
  },
  {
    src: "/images/gallery/photobooth.jpg",
    category: "Photo Booth",
    alt: "Photo Booth Event'S Location installé pour un événement",
  },
  {
    src: "/images/gallery/gender.jpg",
    category: "Gender Reveal",
    alt: "Animation Gender Reveal",
  },
  {
    src: "/images/gallery/mobilier.jpg",
    category: "Mobilier",
    alt: "Mobilier installé pour une réception",
  },
  {
    src: "/images/gallery/smokepuff.jpg",
    category: "Smoke Puff",
    alt: "Smoke Puff pour un événement",
  },
  {
    src: "/images/gallery/entreprise.jpg",
    category: "Entreprise",
    alt: "Installation pour un événement professionnel",
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openImage = (imageIndex: number) => {
    setIndex(imageIndex);
    setOpen(true);
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#080808] py-20 sm:py-24 lg:py-28"
    >
      {/* Halo */}
      <div className="pointer-events-none absolute -left-52 top-1/4 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* TITRE */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">

          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-green-400 sm:px-5 sm:text-xs sm:tracking-[0.35em]">
            Nos réalisations
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:mt-8 lg:text-6xl">
            Découvrez quelques-uns de
            <span className="block text-green-400">
              nos événements
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Des installations et des moments qui illustrent nos prestations
            lors de différents événements.
          </p>

        </div>

        {/* GALERIE */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:gap-6">

          {images.map((image, imageIndex) => (
            <button
              type="button"
              key={image.src}
              onClick={() => openImage(imageIndex)}
              aria-label={`Voir la photo : ${image.category}`}
              className={`group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5 text-left sm:rounded-[28px] ${
                imageIndex === 0
                  ? "col-span-2 aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto"
                  : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  imageIndex === 0
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 50vw, 33vw"
                }
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition duration-300 group-hover:from-black/90" />

              {/* Zoom */}
              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-100 backdrop-blur-md transition sm:right-5 sm:top-5 sm:h-11 sm:w-11 md:opacity-0 md:group-hover:opacity-100">
                <Expand size={18} />
              </div>

              {/* Catégorie */}
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">

                <span className="inline-flex rounded-full bg-green-600 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white shadow-lg sm:px-4 sm:py-2 sm:text-xs">
                  {image.category}
                </span>

              </div>

            </button>
          ))}

        </div>

        {/* Bas de galerie */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
          <Images size={17} className="text-green-500" />

          <span>
            Cliquez sur une photo pour l&apos;agrandir
          </span>
        </div>

      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((image) => ({
          src: image.src,
          alt: image.alt,
        }))}
      />
    </section>
  );
}