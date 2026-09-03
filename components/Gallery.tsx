"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import {
  Expand,
  Images,
  ChevronDown,
} from "lucide-react";

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

const INITIAL_VISIBLE = 6;

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
      className="relative scroll-mt-[80px] overflow-hidden bg-[#F7F3EF] py-12 sm:py-14 lg:py-16"
    >
      {/* =====================================================
          HALOS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-[300px] w-[300px] rounded-full bg-[#4A9692]/7 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[280px] w-[280px] rounded-full bg-[#C34F72]/7 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            TITRE
        ===================================================== */}

        <div className="mx-auto mb-7 max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#C34F72]/20 bg-[#FAEEF2] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A93E61] sm:text-xs">
            <Images size={14} />

            Galerie
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#1D1B1C] sm:text-4xl lg:text-[42px]">
            Quelques moments
            <span className="text-[#EF5A4F]">
              {" "}en images
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#716A6C] sm:text-base">
            Découvrez quelques installations et ambiances réalisées
            lors de mariages, anniversaires et événements professionnels.
          </p>

        </div>

        {/* =====================================================
            FILTRES
        ===================================================== */}

        <div className="mb-6 flex flex-wrap justify-center gap-2">

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
                className={`rounded-full border px-3.5 py-2 text-[11px] font-bold transition-all duration-200 sm:px-4 sm:text-xs ${
                  active
                    ? "border-[#EF5A4F] bg-[#EF5A4F] text-white shadow-[0_6px_16px_rgba(239,90,79,0.16)]"
                    : "border-[#E4DCD7] bg-white text-[#716A6C] hover:border-[#4A9692]/35 hover:bg-[#EDF7F6] hover:text-[#347A77]"
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

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">

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
                  className={`group relative overflow-hidden rounded-[18px] border border-[#E4DCD7] bg-white text-left shadow-[0_6px_20px_rgba(31,25,27,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,25,27,0.08)] ${
                    isFeatured
                      ? "col-span-2 aspect-[16/9] md:col-span-2 md:row-span-2 md:aspect-auto"
                      : "aspect-[4/3]"
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
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                  {/* ZOOM */}

                  <div className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/85 text-[#1D1B1C] shadow-sm backdrop-blur-md transition-all duration-200 sm:right-4 sm:top-4 sm:h-10 sm:w-10">
                    <Expand size={16} />
                  </div>

                  {/* CATÉGORIE */}

                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">

                    <span className="inline-flex rounded-full bg-[#EF5A4F] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white shadow-sm sm:text-[10px]">
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
          <div className="rounded-2xl border border-[#E4DCD7] bg-white p-8 text-center shadow-sm">

            <Images
              size={30}
              className="mx-auto text-[#4A9692]"
            />

            <p className="mt-4 font-semibold text-[#1D1B1C]">
              Aucune photo dans cette catégorie pour le moment.
            </p>

          </div>
        )}

        {/* =====================================================
            VOIR PLUS
        ===================================================== */}

        {hasMore && (
          <div className="mt-7 flex justify-center">

            <button
              type="button"
              onClick={() =>
                setVisibleCount(
                  (current) =>
                    current +
                    INITIAL_VISIBLE
                )
              }
              className="inline-flex items-center gap-2 rounded-full border border-[#E4DCD7] bg-white px-5 py-3 text-sm font-bold text-[#3F3A3C] transition-all duration-200 hover:border-[#EF5A4F]/30 hover:bg-[#FFF0ED] hover:text-[#D94A41]"
            >
              Voir plus de photos

              <ChevronDown size={17} />
            </button>

          </div>
        )}

        {/* =====================================================
            BAS DE GALERIE
        ===================================================== */}

        <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-[#8B8486]">

          <Images
            size={16}
            className="shrink-0 text-[#4A9692]"
          />

          <span>
            Cliquez sur une photo pour l&apos;agrandir
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