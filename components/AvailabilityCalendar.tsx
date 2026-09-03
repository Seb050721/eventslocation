"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import Link from "next/link";

import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Info,
  PackageCheck,
  Loader2,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

import { inventory } from "@/data/inventory";

/* ============================================================
   TYPES API
============================================================ */

interface EquipmentAvailability {
  total: number;
  reserved: number;
  available: number;
}

interface AvailabilityApiResponse {
  success: boolean;

  inventory?: Record<string, number>;

  availability?: Record<
    string,
    Record<
      string,
      EquipmentAvailability
    >
  >;

  error?: string;
}

/* ============================================================
   CORRESPONDANCE ENTRE inventory.ts ET GOOGLE CALENDAR
============================================================ */

const apiEquipmentNames: Record<
  string,
  string
> = {
  photobooth: "Photo Booth",

  sonorisation: "Kit Sonorisation",

  "micro-hf": "Micro HF",

  videoprojecteur: "Videoprojecteur",

  ecran: "Ecran",

  "smoke-puff": "Smoke Puff",

  "machine-fumee": "Machine a fumee",

  "machine-bulles": "Machine a bulles",

  "tente-4x8": "Tente 4x8",

  "table-ronde-152":
    "Table ronde 152",

  "table-rectangulaire":
    "Table rectangulaire",

  "mange-debout": "Mange debout",

  chaise: "Chaise",

  tabouret: "Tabouret",
};

/* ============================================================
   MOIS / JOURS
============================================================ */

const monthNames = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const weekDays = [
  "Lun",
  "Mar",
  "Mer",
  "Jeu",
  "Ven",
  "Sam",
  "Dim",
];

/* ============================================================
   FORMAT DATE YYYY-MM-DD
============================================================ */

function formatDateKey(
  year: number,
  month: number,
  day: number
) {
  return `${year}-${String(
    month + 1
  ).padStart(2, "0")}-${String(
    day
  ).padStart(2, "0")}`;
}

/* ============================================================
   FORMAT DATE FRANÇAISE
============================================================ */

function formatFrenchDate(
  dateString: string
) {
  const [year, month, day] =
    dateString
      .split("-")
      .map(Number);

  const date = new Date(
    year,
    month - 1,
    day
  );

  return new Intl.DateTimeFormat(
    "fr-FR",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  ).format(date);
}

/* ============================================================
   COMPOSANT
============================================================ */

export default function AvailabilityCalendar() {
  const today = new Date();

  /* ==========================================================
     ÉTATS CALENDRIER
  ========================================================== */

  const [
    currentMonth,
    setCurrentMonth,
  ] = useState(
    new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    )
  );

  const [
    selectedDate,
    setSelectedDate,
  ] = useState("");

  const [
    selectedInventoryId,
    setSelectedInventoryId,
  ] = useState("");

  const [
    requestedQuantity,
    setRequestedQuantity,
  ] = useState(1);

  /* ==========================================================
     ÉTATS GOOGLE CALENDAR
  ========================================================== */

  const [
    availabilityData,
    setAvailabilityData,
  ] = useState<
    Record<
      string,
      Record<
        string,
        EquipmentAvailability
      >
    >
  >({});

  const [loading, setLoading] =
    useState(true);

  const [apiError, setApiError] =
    useState("");

  /* ==========================================================
     DATE COURANTE
  ========================================================== */

  const year =
    currentMonth.getFullYear();

  const month =
    currentMonth.getMonth();

  /* ==========================================================
     MATÉRIEL SÉLECTIONNÉ
  ========================================================== */

  const selectedInventory =
    inventory.find(
      (item) =>
        item.id ===
        selectedInventoryId
    ) ?? null;

  /* ==========================================================
     CHARGEMENT DES DISPONIBILITÉS
  ========================================================== */

  async function loadAvailability() {
    try {
      setLoading(true);
      setApiError("");

      const response = await fetch(
        "/api/disponibilites",
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const data: AvailabilityApiResponse =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.error ||
            "Impossible de récupérer les disponibilités."
        );
      }

      setAvailabilityData(
        data.availability ?? {}
      );
    } catch (error) {
      console.error(
        "Erreur disponibilités :",
        error
      );

      setApiError(
        error instanceof Error
          ? error.message
          : "Impossible de charger les disponibilités."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAvailability();
  }, []);

  /* ==========================================================
     CONSTRUCTION DU CALENDRIER
  ========================================================== */

  const calendarDays = useMemo(() => {
    const numberOfDays =
      new Date(
        year,
        month + 1,
        0
      ).getDate();

    const firstDay =
      new Date(
        year,
        month,
        1
      ).getDay();

    const offset =
      firstDay === 0
        ? 6
        : firstDay - 1;

    const days: Array<
      number | null
    > = [];

    for (
      let i = 0;
      i < offset;
      i++
    ) {
      days.push(null);
    }

    for (
      let day = 1;
      day <= numberOfDays;
      day++
    ) {
      days.push(day);
    }

    return days;
  }, [year, month]);

  /* ==========================================================
     DISPONIBILITÉ PAR DATE
  ========================================================== */

  function getAvailabilityForDate(
    date: string
  ) {
    if (!selectedInventory) {
      return null;
    }

    const apiName =
      apiEquipmentNames[
        selectedInventory.id
      ];

    if (!apiName) {
      return {
        total:
          selectedInventory.stock,

        reserved: 0,

        available:
          selectedInventory.stock,
      };
    }

    const dateData =
      availabilityData[date];

    if (!dateData) {
      return {
        total:
          selectedInventory.stock,

        reserved: 0,

        available:
          selectedInventory.stock,
      };
    }

    return (
      dateData[apiName] ?? {
        total:
          selectedInventory.stock,

        reserved: 0,

        available:
          selectedInventory.stock,
      }
    );
  }

  /* ==========================================================
     NAVIGATION
  ========================================================== */

  function previousMonth() {
    const previous =
      new Date(
        year,
        month - 1,
        1
      );

    const currentMonthStart =
      new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      );

    if (
      previous <
      currentMonthStart
    ) {
      return;
    }

    setCurrentMonth(previous);
    setSelectedDate("");
  }

  function nextMonth() {
    setCurrentMonth(
      new Date(
        year,
        month + 1,
        1
      )
    );

    setSelectedDate("");
  }

  /* ==========================================================
     CHANGEMENT MATÉRIEL
  ========================================================== */

  function changeInventory(
    inventoryId: string
  ) {
    setSelectedInventoryId(
      inventoryId
    );

    setRequestedQuantity(1);
  }

  /* ==========================================================
     DISPONIBILITÉ DATE SÉLECTIONNÉE
  ========================================================== */

  const selectedAvailability =
    useMemo(() => {
      if (
        !selectedDate ||
        !selectedInventory
      ) {
        return null;
      }

      const apiName =
        apiEquipmentNames[
          selectedInventory.id
        ];

      const dateData =
        availabilityData[
          selectedDate
        ];

      if (
        !dateData ||
        !apiName ||
        !dateData[apiName]
      ) {
        return {
          total:
            selectedInventory.stock,

          reserved: 0,

          available:
            selectedInventory.stock,
        };
      }

      return dateData[apiName];
    }, [
      selectedDate,
      selectedInventory,
      availabilityData,
    ]);

  /* ==========================================================
     QUANTITÉ DISPONIBLE
  ========================================================== */

  const canRequest =
    !!selectedAvailability &&
    requestedQuantity <=
      selectedAvailability.available;

  /* ==========================================================
     LIEN VERS DEVIS
  ========================================================== */

  const quoteUrl = useMemo(() => {
    const params =
      new URLSearchParams();

    if (selectedDate) {
      params.set(
        "date",
        selectedDate
      );
    }

    if (selectedInventory) {
      params.set(
        "service",
        selectedInventory.name
      );

      params.set(
        "quantity",
        String(
          requestedQuantity
        )
      );
    }

    const query =
      params.toString();

    return query
      ? `/?${query}#contact`
      : "/#contact";
  }, [
    selectedDate,
    selectedInventory,
    requestedQuantity,
  ]);

  /* ==========================================================
     BOUTON MOIS PRÉCÉDENT
  ========================================================== */

  const canGoPreviousMonth =
    year >
      today.getFullYear() ||
    month >
      today.getMonth();

  /* ==========================================================
     AFFICHAGE
  ========================================================== */

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_0.75fr] lg:gap-8">

      {/* =====================================================
          CALENDRIER
      ===================================================== */}

      <div className="rounded-[28px] border border-[#E9E2DD] bg-white p-4 shadow-[0_12px_35px_rgba(31,25,27,0.06)] sm:p-7 lg:p-8">

        {/* ERREUR API */}

        {apiError && (
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4">

            <AlertCircle
              size={20}
              className="mt-0.5 shrink-0 text-red-500"
            />

            <div className="flex-1">

              <p className="font-bold text-red-700">
                Impossible de charger les disponibilités
              </p>

              <p className="mt-1 text-sm leading-6 text-red-600">
                {apiError}
              </p>

              <button
                type="button"
                onClick={
                  loadAvailability
                }
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-red-600 transition hover:text-red-800"
              >
                <RefreshCw size={15} />
                Réessayer
              </button>

            </div>

          </div>
        )}

        {/* CHARGEMENT */}

        {loading && (
          <div className="mb-6 flex items-center gap-3 rounded-2xl border border-[#4A9692]/20 bg-[#EDF7F6] p-4">

            <Loader2
              size={20}
              className="animate-spin text-[#347A77]"
            />

            <p className="text-sm font-medium text-[#347A77]">
              Mise à jour des disponibilités...
            </p>

          </div>
        )}

        {/* AUCUN MATÉRIEL */}

        {!selectedInventory &&
          !loading && (
            <div className="mb-6 flex items-start gap-3 rounded-2xl border border-[#4A9692]/20 bg-[#EDF7F6] p-4">

              <Info
                size={20}
                className="mt-0.5 shrink-0 text-[#347A77]"
              />

              <p className="text-sm leading-6 text-[#3F6664]">
                Sélectionnez d&apos;abord
                le matériel souhaité pour
                afficher ses disponibilités.
              </p>

            </div>
          )}

        {/* MATÉRIEL ACTIF */}

        {selectedInventory && (
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#4A9692]/20 bg-[#EDF7F6] px-4 py-3">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#347A77]">
                Disponibilités affichées pour
              </p>

              <p className="mt-1 font-bold text-[#1D1B1C]">
                {selectedInventory.name}
              </p>

              <p className="mt-1 text-xs text-[#716A6C]">
                Stock total :{" "}
                {selectedInventory.stock}
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#347A77]">
              <PackageCheck size={21} />
            </div>

          </div>
        )}

        {/* NAVIGATION */}

        <div className="flex items-center justify-between gap-2 sm:gap-4">

          <button
            type="button"
            onClick={previousMonth}
            disabled={
              !canGoPreviousMonth
            }
            aria-label="Mois précédent"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E9E2DD] bg-[#FBFAF8] text-[#3F3A3C] transition hover:border-[#4A9692]/40 hover:bg-[#EDF7F6] hover:text-[#347A77] disabled:cursor-not-allowed disabled:opacity-30 sm:h-11 sm:w-11"
          >
            <ChevronLeft size={21} />
          </button>

          <div className="min-w-0 text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#347A77] sm:text-xs">
              Calendrier
            </p>

            <h2 className="mt-1 whitespace-nowrap text-xl font-black text-[#1D1B1C] sm:text-3xl">
              {monthNames[month]}{" "}
              {year}
            </h2>

          </div>

          <button
            type="button"
            onClick={nextMonth}
            aria-label="Mois suivant"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E9E2DD] bg-[#FBFAF8] text-[#3F3A3C] transition hover:border-[#4A9692]/40 hover:bg-[#EDF7F6] hover:text-[#347A77] sm:h-11 sm:w-11"
          >
            <ChevronRight size={21} />
          </button>

        </div>

        {/* GRILLE CALENDRIER */}

        <div className="mt-7 grid grid-cols-7 gap-1 sm:mt-8 sm:gap-2">

          {weekDays.map(
            (day) => (
              <div
                key={day}
                className="py-2 text-center text-[9px] font-bold uppercase tracking-wide text-[#9A9395] sm:text-xs"
              >
                {day}
              </div>
            )
          )}

          {calendarDays.map(
            (day, index) => {
              if (
                day === null
              ) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="aspect-square"
                  />
                );
              }

              const dateKey =
                formatDateKey(
                  year,
                  month,
                  day
                );

              const dateObject =
                new Date(
                  year,
                  month,
                  day
                );

              const todayWithoutTime =
                new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate()
                );

              const isPast =
                dateObject <
                todayWithoutTime;

              const availability =
                getAvailabilityForDate(
                  dateKey
                );

              const available =
                availability?.available ??
                0;

              const reserved =
                availability?.reserved ??
                0;

              const selected =
                selectedDate ===
                dateKey;

              let statusClasses =
                "border-[#E9E2DD] bg-[#FBFAF8] text-[#9A9395]";

              /* DISPONIBLE */

              if (
                selectedInventory &&
                available > 0
              ) {
                statusClasses =
                  "border-[#4A9692]/25 bg-[#EDF7F6] text-[#347A77] hover:border-[#4A9692]/60 hover:bg-[#DDEFEF]";
              }

              /* COMPLET */

              if (
                selectedInventory &&
                available === 0
              ) {
                statusClasses =
                  "border-red-200 bg-red-50 text-red-600 hover:border-red-300";
              }

              /* PASSÉ */

              if (isPast) {
                statusClasses =
                  "cursor-not-allowed border-[#EEE9E5] bg-[#F7F3EF] text-[#C4BDB9] opacity-60";
              }

              /* SÉLECTIONNÉ */

              if (
                selected &&
                !isPast
              ) {
                statusClasses =
                  available > 0
                    ? "border-[#347A77] bg-[#4A9692] text-white shadow-[0_8px_24px_rgba(74,150,146,0.22)]"
                    : "border-red-500 bg-red-500 text-white shadow-[0_8px_24px_rgba(239,68,68,0.18)]";
              }

              return (
                <button
                  type="button"
                  key={dateKey}
                  disabled={
                    isPast ||
                    !selectedInventory ||
                    loading
                  }
                  onClick={() =>
                    setSelectedDate(
                      dateKey
                    )
                  }
                  title={
                    selectedInventory
                      ? `${available} disponible(s) sur ${selectedInventory.stock}`
                      : undefined
                  }
                  className={`relative aspect-square min-w-0 rounded-lg border text-xs font-bold transition-all duration-200 sm:rounded-2xl sm:text-base ${
                    !selectedInventory &&
                    !isPast
                      ? "cursor-not-allowed opacity-60"
                      : ""
                  } ${statusClasses}`}
                >

                  {day}

                  {selectedInventory &&
                    !isPast && (
                      <span
                        className={`absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full sm:bottom-2 ${
                          available === 0
                            ? "bg-red-500"
                            : selected
                              ? "bg-white"
                              : "bg-[#4A9692]"
                        }`}
                      />
                    )}

                  {selectedInventory &&
                    reserved > 0 &&
                    available > 0 &&
                    !isPast && (
                      <span className="absolute right-1 top-1 hidden rounded-full bg-white px-1.5 py-0.5 text-[8px] font-bold text-[#347A77] shadow-sm sm:block">
                        {available}
                      </span>
                    )}

                </button>
              );
            }
          )}

        </div>

        {/* LÉGENDE */}

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#E9E2DD] pt-6">

          <div className="flex items-center gap-2 text-xs text-[#716A6C] sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#4A9692]" />
            Disponible
          </div>

          <div className="flex items-center gap-2 text-xs text-[#716A6C] sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            Complet
          </div>

        </div>

        {/* MISE À JOUR */}

        {!loading &&
          !apiError && (
            <div className="mt-5 flex items-center justify-between gap-4">

              <p className="text-xs text-[#9A9395]">
                Données synchronisées avec
                notre calendrier de réservation.
              </p>

              <button
                type="button"
                onClick={
                  loadAvailability
                }
                aria-label="Actualiser les disponibilités"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E9E2DD] bg-white text-[#716A6C] transition hover:border-[#4A9692]/40 hover:bg-[#EDF7F6] hover:text-[#347A77]"
              >
                <RefreshCw size={15} />
              </button>

            </div>
          )}

      </div>

      {/* =====================================================
          PANNEAU DE DROITE
      ===================================================== */}

      <aside className="h-fit rounded-[28px] border border-[#E9E2DD] bg-white p-5 shadow-[0_12px_35px_rgba(31,25,27,0.06)] sm:p-7 lg:sticky lg:top-28 lg:p-8">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDF7F6] text-[#347A77]">
          <CalendarDays size={24} />
        </div>

        {/* MATÉRIEL */}

        <div className="mt-6">

          <label className="mb-2 block text-sm font-semibold text-[#3F3A3C]">
            Matériel souhaité *
          </label>

          <select
            value={
              selectedInventoryId
            }
            onChange={(event) =>
              changeInventory(
                event.target.value
              )
            }
            disabled={loading}
            className="w-full rounded-xl border border-[#E9E2DD] bg-[#FBFAF8] p-4 text-[#1D1B1C] outline-none transition focus:border-[#4A9692] focus:ring-2 focus:ring-[#4A9692]/10 disabled:opacity-50"
          >

            <option value="">
              Sélectionnez...
            </option>

            {inventory.map(
              (item) => (
                <option
                  key={item.id}
                  value={item.id}
                >
                  {item.name}
                </option>
              )
            )}

          </select>

        </div>

        {/* QUANTITÉ */}

        {selectedInventory && (
          <div className="mt-6">

            <label className="mb-2 block text-sm font-semibold text-[#3F3A3C]">
              Quantité souhaitée
            </label>

            <input
              type="number"
              min="1"
              max={
                selectedInventory.stock
              }
              value={
                requestedQuantity
              }
              onChange={(event) =>
                setRequestedQuantity(
                  Math.max(
                    1,
                    Math.min(
                      Number(
                        event.target
                          .value
                      ) || 1,

                      selectedInventory.stock
                    )
                  )
                )
              }
              className="w-full rounded-xl border border-[#E9E2DD] bg-[#FBFAF8] p-4 text-[#1D1B1C] outline-none transition focus:border-[#4A9692] focus:ring-2 focus:ring-[#4A9692]/10"
            />

            <p className="mt-2 text-xs text-[#9A9395]">
              Stock total :{" "}
              {selectedInventory.stock}
            </p>

          </div>
        )}

        {/* DATE */}

        <div className="mt-8 border-t border-[#E9E2DD] pt-6">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#347A77]">
            Votre date
          </p>

          <h3 className="mt-3 text-2xl font-black leading-tight text-[#1D1B1C] sm:text-3xl">

            {selectedDate
              ? formatFrenchDate(
                  selectedDate
                )
              : "Sélectionnez une date"}

          </h3>

        </div>

        {/* DISPONIBILITÉ */}

        {selectedAvailability &&
          selectedInventory && (
            <div className="mt-6">

              <div className="rounded-2xl border border-[#E9E2DD] bg-[#FBFAF8] p-5">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A9395]">
                  Stock disponible
                </p>

                <p className="mt-2 text-3xl font-black text-[#1D1B1C]">

                  {
                    selectedAvailability.available
                  }{" "}
                  <span className="text-lg text-[#9A9395]">
                    /{" "}
                    {
                      selectedAvailability.total
                    }
                  </span>

                </p>

                <p className="mt-1 text-sm text-[#716A6C]">
                  {
                    selectedInventory.name
                  }
                </p>

                {selectedAvailability.reserved >
                  0 && (
                  <p className="mt-3 text-xs text-[#9A9395]">

                    {
                      selectedAvailability.reserved
                    }{" "}
                    déjà réservé
                    {selectedAvailability.reserved >
                    1
                      ? "s"
                      : ""}{" "}
                    pour cette date.

                  </p>
                )}

              </div>

              {/* DISPONIBLE */}

              {canRequest && (
                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#4A9692]/25 bg-[#EDF7F6] p-4 text-[#347A77]">

                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0"
                  />

                  <div>

                    <p className="font-bold">
                      Disponible
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#3F6664]">

                      {requestedQuantity ===
                      1
                        ? "Le matériel sélectionné est actuellement disponible."
                        : `Les ${requestedQuantity} unités demandées sont actuellement disponibles.`}

                    </p>

                  </div>

                </div>
              )}

              {/* INDISPONIBLE */}

              {!canRequest && (
                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-600">

                  <XCircle
                    size={22}
                    className="mt-0.5 shrink-0"
                  />

                  <div>

                    <p className="font-bold">
                      Quantité indisponible
                    </p>

                    <p className="mt-1 text-xs leading-5 text-red-600">

                      {selectedAvailability.available ===
                      0
                        ? "Ce matériel est déjà entièrement réservé pour cette date."
                        : `Il ne reste que ${selectedAvailability.available} unité${selectedAvailability.available > 1 ? "s" : ""} disponible${selectedAvailability.available > 1 ? "s" : ""} pour cette date.`}

                    </p>

                  </div>

                </div>
              )}

            </div>
          )}

        {/* CTA DEVIS */}

        {selectedAvailability &&
          canRequest && (
            <Link
              href={quoteUrl}
              className="group mt-6 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-[#EF5A4F] px-5 py-4 text-center font-bold text-white shadow-[0_8px_22px_rgba(239,90,79,0.18)] transition hover:bg-[#D94A41]"
            >

              Demander un devis

              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />

            </Link>
          )}

        {/* AIDE */}

        {!selectedInventory &&
          !loading && (
            <p className="mt-6 text-sm leading-6 text-[#716A6C]">

              Commencez par sélectionner
              le matériel que vous souhaitez
              réserver.

            </p>
          )}

        {selectedInventory &&
          !selectedDate && (
            <p className="mt-6 text-sm leading-6 text-[#716A6C]">

              Sélectionnez ensuite une date
              dans le calendrier.

            </p>
          )}

        <p className="mt-6 border-t border-[#E9E2DD] pt-5 text-xs leading-5 text-[#9A9395]">

          Les disponibilités affichées sont
          indicatives et seront définitivement
          confirmées lors de la validation de
          votre réservation.

        </p>

      </aside>

    </div>
  );
}