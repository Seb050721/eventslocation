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
              current + 1
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
        current + 1
      ) % images.length;
    });
  };

  return (
    <>
      {/* =====================================================
          GALERIE
      ===================================================== */}

      <section className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-5 sm:rounded-[26px] sm:p-6 lg:p-8">

        {/* TITRE */}

        <div className="mb-6">

          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-green-400 sm:text-xs">
            <Images size={14} />

            Notre matériel
          </span>

          <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
            Découvrez notre mobilier
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base">
            Découvrez en images les
            différents équipements disponibles
            à la location pour votre mariage,
            anniversaire ou réception.
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
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-black text-left"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />

                {/* ZOOM */}

                <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  <ZoomIn size={15} />
                </div>

                {/* NOM */}

                {image.label && (
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-xs font-bold text-white sm:text-sm">
                      {image.label}
                    </p>
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
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md sm:p-6"
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
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition hover:bg-white/10"
          >
            <X size={24} />
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
              className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-white/10 sm:left-5 sm:h-12 sm:w-12"
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
              <div className="absolute bottom-3 left-1/2 max-w-[85%] -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-center text-sm font-semibold text-white backdrop-blur-md">
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
              className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-white/10 sm:right-5 sm:h-12 sm:w-12"
            >
              <ChevronRight size={26} />
            </button>
          )}

        </div>
      )}
    </>
  );
}