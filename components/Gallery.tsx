"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Expand, Images, ChevronDown } from "lucide-react";

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

  /*
    Ajoute tes nouvelles photos ici
    Exemple :

    {
      src: "/images/gallery/mariage2.jpg",
      category: "Mariage",
      alt: "Installation Event'S Location pour un mariage",
    },
  */
];

const categories = [
  "Tous",
  "Mariage",
  "Photo Booth",
  "Gender Reveal",
  "Mobilier",
  "Smoke Puff",
  "Sonorisation",
  "Entreprise",
];

const INITIAL_VISIBLE = 9;

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const [activeCategory, setActiveCategory] =
    useState("Tous");

  const [visibleCount, setVisibleCount] =
    useState(INITIAL_VISIBLE);

  /* ============================================================
     FILTRAGE
  ============================================================ */

  const filteredImages = useMemo(() => {
    if (activeCategory === "Tous") {
      return images;
    }

    return images.filter(
      (image) =>
        image.category === activeCategory
    );
  }, [activeCategory]);

  const visibleImages =
    filteredImages.slice(0, visibleCount);

  const hasMore =
    visibleCount < filteredImages.length;

  /* ============================================================
     CHANGEMENT DE CATÉGORIE
  ============================================================ */

  function changeCategory(category: string) {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE);
  }

  /* ============================================================
     LIGHTBOX
  ============================================================ */

  function openImage(imageSrc: string) {
    const lightboxIndex =
      filteredImages.findIndex(
        (image) => image.src === imageSrc
      );

    setIndex(
      lightboxIndex >= 0
        ? lightboxIndex
        : 0
    );

    setOpen(true);
  }

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#080808] py-20 sm:py-24 lg:py-28"
    >
      {/* HALO */}

      <div className="pointer-events-none absolute -left-52 top-1/4 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            TITRE
        ===================================================== */}

        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">

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
            Des installations et des moments
            qui illustrent nos prestations lors
            de différents événements.
          </p>

        </div>

        {/* =====================================================
            FILTRES
        ===================================================== */}

        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">

          {categories.map((category) => {
            const active =
              activeCategory === category;

            return (
              <button
                type="button"
                key={category}
                onClick={() =>
                  changeCategory(category)
                }
                className={`rounded-full border px-4 py-2 text-xs font-bold transition sm:px-5 sm:text-sm ${
                  active
                    ? "border-green-500 bg-green-600 text-white"
                    : "border-white/10 bg-white/[0.04] text-gray-300 hover:border-green-500/30 hover:text-green-400"
                }`}
              >
                {category}
              </button>
            );
          })}

        </div>

        {/* =====================================================
            GALERIE
        ===================================================== */}

        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:gap-6">

          {visibleImages.map(
            (image, imageIndex) => {
              const isFeatured =
                imageIndex === 0 &&
                activeCategory === "Tous";

              return (
                <button
                  type="button"
                  key={image.src}
                  onClick={() =>
                    openImage(image.src)
                  }
                  aria-label={`Voir la photo : ${image.category}`}
                  className={`group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5 text-left sm:rounded-[28px] ${
                    isFeatured
                      ? "col-span-2 aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto"
                      : "aspect-square"
                  }`}
                >

                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      isFeatured
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 50vw, 33vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition duration-300 group-hover:from-black/90" />

                  {/* ZOOM */}

                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-100 backdrop-blur-md transition sm:right-5 sm:top-5 sm:h-11 sm:w-11 md:opacity-0 md:group-hover:opacity-100">

                    <Expand size={18} />

                  </div>

                  {/* CATÉGORIE */}

                  <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">

                    <span className="inline-flex rounded-full bg-green-600 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white shadow-lg sm:px-4 sm:py-2 sm:text-xs">
                      {image.category}
                    </span>

                  </div>

                </button>
              );
            }
          )}

        </div>

        {/* =====================================================
            AUCUNE PHOTO
        ===================================================== */}

        {filteredImages.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center">

            <Images
              size={30}
              className="mx-auto text-green-500"
            />

            <p className="mt-4 font-semibold text-white">
              Aucune photo dans cette catégorie pour le moment.
            </p>

          </div>
        )}

        {/* =====================================================
            VOIR PLUS
        ===================================================== */}

        {hasMore && (
          <div className="mt-8 flex justify-center sm:mt-10">

            <button
              type="button"
              onClick={() =>
                setVisibleCount(
                  (current) =>
                    current +
                    INITIAL_VISIBLE
                )
              }
              className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-6 py-3 text-sm font-bold text-green-400 transition hover:border-green-500/50 hover:bg-green-500/20"
            >
              Voir plus de réalisations

              <ChevronDown size={18} />
            </button>

          </div>
        )}

        {/* =====================================================
            BAS DE GALERIE
        ===================================================== */}

        <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-gray-500 sm:text-sm">

          <Images
            size={17}
            className="shrink-0 text-green-500"
          />

          <span>
            Cliquez sur une photo pour
            l&apos;agrandir
          </span>

        </div>

      </div>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <Lightbox
        open={open}
        close={() =>
          setOpen(false)
        }
        index={index}
        slides={filteredImages.map(
          (image) => ({
            src: image.src,
            alt: image.alt,
          })
        )}
      />

    </section>
  );
}