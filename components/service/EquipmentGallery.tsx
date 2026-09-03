"use client";

import Image from "next/image";
import {
  useEffect,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  Images,
  X,
  ZoomIn,
} from "lucide-react";

import type {
  GalleryImage,
} from "@/data/services";

interface Props {
  images: GalleryImage[];
}

export default function EquipmentGallery({
  images,
}: Props) {
  const [
    selectedIndex,
    setSelectedIndex,
  ] = useState<number | null>(null);

  const selectedImage =
    selectedIndex !== null
      ? images[selectedIndex]
      : null;

  /* ============================================================
     CLAVIER
  ============================================================ */

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex(
          (current) => {
            if (current === null) {
              return null;
            }

            return (
              current -
              1 +
              images.length
            ) % images.length;
          }
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex(
          (current) => {
            if (current === null) {
              return null;
            }

            return (
              current +
              1
            ) % images.length;
          }
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    selectedIndex,
    images.length,
  ]);

  /* ============================================================
     BLOCAGE SCROLL
  ============================================================ */

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [selectedIndex]);

  if (images.length === 0) {
    return null;
  }

  const previousImage = () => {
    setSelectedIndex((current) => {
      if (current === null) {
        return null;
      }

      return (
        current -
        1 +
        images.length
      ) % images.length;
    });
  };

  const nextImage = () => {
    setSelectedIndex((current) => {
      if (current === null) {
        return null;
      }

      return (
        current +
        1
      ) % images.length;
    });
  };

  return (
    <>
      {/* =====================================================
          GALERIE
      ===================================================== */}

      <section className="overflow-hidden rounded-[24px] border border-[#E9E2DD] bg-[#FBFAF8] p-5 shadow-[0_10px_30px_rgba(31,25,27,0.05)] sm:rounded-3xl sm:p-6 lg:p-8">

        {/* TITRE */}

        <div className="mb-6">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#C34F72]/20 bg-[#FAEEF2] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C34F72] sm:px-4 sm:py-2 sm:text-xs">
            <Images size={14} />
            Notre matériel
          </span>

          <h2 className="mt-4 text-2xl font-black text-[#1D1B1C] sm:text-3xl">
            Découvrez notre
            <span className="text-[#EF5A4F]">
              {" "}matériel
            </span>
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#716A6C] sm:text-base">
            Découvrez en images les différents équipements disponibles
            à la location pour votre mariage, anniversaire ou réception.
          </p>

        </div>

        {/* PHOTOS */}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

          {images.map(
            (image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() =>
                  setSelectedIndex(index)
                }
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#E9E2DD] bg-white text-left shadow-[0_6px_20px_rgba(31,25,27,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#EF5A4F]/25 hover:shadow-[0_12px_28px_rgba(31,25,27,0.08)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                {/* ZOOM */}

                <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#EF5A4F] opacity-100 shadow-sm backdrop-blur-sm transition-all duration-200 sm:opacity-0 sm:group-hover:opacity-100">
                  <ZoomIn size={15} />
                </div>

                {/* NOM */}

                {image.label && (
                  <div className="absolute bottom-0 left-0 right-0 p-3">

                    <div className="inline-flex rounded-full bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-md">
                      <p className="text-[11px] font-bold text-[#3F3A3C] sm:text-xs">
                        {image.label}
                      </p>
                    </div>

                  </div>
                )}

              </button>
            )
          )}

        </div>

      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-[#1D1B1C]/95 p-3 backdrop-blur-md sm:p-6"
          onClick={() =>
            setSelectedIndex(null)
          }
        >

          {/* FERMER */}

          <button
            type="button"
            aria-label="Fermer la photo"
            onClick={() =>
              setSelectedIndex(null)
            }
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-all duration-200 hover:bg-[#EF5A4F]"
          >
            <X size={23} />
          </button>

          {/* PRÉCÉDENTE */}

          {images.length > 1 && (
            <button
              type="button"
              aria-label="Photo précédente"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-all duration-200 hover:bg-[#EF5A4F] sm:left-5 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          {/* PHOTO */}

          <div
            className="relative h-[82dvh] w-full max-w-6xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />

            {/* LÉGENDE */}

            {selectedImage.label && (
              <div className="absolute bottom-3 left-1/2 max-w-[85%] -translate-x-1/2 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-center text-sm font-semibold text-[#3F3A3C] shadow-lg backdrop-blur-md">
                {selectedImage.label}
              </div>
            )}
          </div>

          {/* SUIVANTE */}

          {images.length > 1 && (
            <button
              type="button"
              aria-label="Photo suivante"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-all duration-200 hover:bg-[#EF5A4F] sm:right-5 sm:h-12 sm:w-12"
            >
              <ChevronRight size={26} />
            </button>
          )}

        </div>
      )}
    </>
  );
}