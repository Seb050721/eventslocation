"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  CheckCircle2,
  XCircle,
  Clock3,
  ArrowRight,
  Info,
  PackageCheck,
} from "lucide-react";

import { inventory } from "@/data/inventory";

type BookingStatus =
  | "confirmed"
  | "pending";

interface ReservationItem {
  inventoryId: string;
  quantity: number;
}

interface Reservation {
  date: string;
  status: BookingStatus;
  items: ReservationItem[];
}

/*
  ============================================================
  RÉSERVATIONS DE TEST

  Plus tard, cette partie sera remplacée par Google Calendar
  ou une vraie base de réservations.
  ============================================================
*/

const testReservations: Reservation[] = [
  {
    date: "2026-08-15",
    status: "confirmed",
    items: [
      {
        inventoryId: "photobooth",
        quantity: 1,
      },
      {
        inventoryId: "chaise",
        quantity: 30,
      },
      {
        inventoryId: "table-ronde-152",
        quantity: 8,
      },
    ],
  },

  {
    date: "2026-08-16",
    status: "pending",
    items: [
      {
        inventoryId: "photobooth",
        quantity: 1,
      },
      {
        inventoryId: "mange-debout",
        quantity: 4,
      },
    ],
  },

  {
    date: "2026-08-22",
    status: "confirmed",
    items: [
      {
        inventoryId: "sonorisation",
        quantity: 1,
      },
      {
        inventoryId: "machine-fumee",
        quantity: 1,
      },
      {
        inventoryId: "chaise",
        quantity: 50,
      },
    ],
  },

  {
    date: "2026-08-29",
    status: "confirmed",
    items: [
      {
        inventoryId: "smoke-puff",
        quantity: 1,
      },
      {
        inventoryId: "videoprojecteur",
        quantity: 1,
      },
    ],
  },
];

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

function formatDateKey(
  year: number,
  month: number,
  day: number
) {
  return `${year}-${String(month + 1).padStart(
    2,
    "0"
  )}-${String(day).padStart(2, "0")}`;
}

function formatFrenchDate(dateString: string) {
  const [year, month, day] = dateString
    .split("-")
    .map(Number);

  const date = new Date(
    year,
    month - 1,
    day
  );

  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function getReservedQuantity(
  date: string,
  inventoryId: string,
  status?: BookingStatus
) {
  return testReservations
    .filter(
      (reservation) =>
        reservation.date === date &&
        (!status ||
          reservation.status === status)
    )
    .reduce((total, reservation) => {
      const item = reservation.items.find(
        (entry) =>
          entry.inventoryId === inventoryId
      );

      return total + (item?.quantity ?? 0);
    }, 0);
}

export default function AvailabilityCalendar() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] =
    useState(
      new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      )
    );

  const [selectedDate, setSelectedDate] =
    useState("");

  const [selectedInventoryId, setSelectedInventoryId] =
    useState("");

  const [requestedQuantity, setRequestedQuantity] =
    useState(1);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const selectedInventory =
    inventory.find(
      (item) =>
        item.id === selectedInventoryId
    ) ?? null;

  const calendarDays = useMemo(() => {
    const numberOfDays = new Date(
      year,
      month + 1,
      0
    ).getDate();

    const firstDay = new Date(
      year,
      month,
      1
    ).getDay();

    const offset =
      firstDay === 0
        ? 6
        : firstDay - 1;

    const days: Array<number | null> = [];

    for (let i = 0; i < offset; i++) {
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

  function previousMonth() {
    setCurrentMonth(
      new Date(year, month - 1, 1)
    );

    setSelectedDate("");
  }

  function nextMonth() {
    setCurrentMonth(
      new Date(year, month + 1, 1)
    );

    setSelectedDate("");
  }

  function changeInventory(
    inventoryId: string
  ) {
    setSelectedInventoryId(inventoryId);
    setRequestedQuantity(1);
  }

  const selectedAvailability =
    useMemo(() => {
      if (
        !selectedDate ||
        !selectedInventory
      ) {
        return null;
      }

      const confirmed =
        getReservedQuantity(
          selectedDate,
          selectedInventory.id,
          "confirmed"
        );

      const pending =
        getReservedQuantity(
          selectedDate,
          selectedInventory.id,
          "pending"
        );

      const availableConfirmed =
        Math.max(
          selectedInventory.stock -
            confirmed,
          0
        );

      const availableIncludingPending =
        Math.max(
          selectedInventory.stock -
            confirmed -
            pending,
          0
        );

      return {
        confirmed,
        pending,
        availableConfirmed,
        availableIncludingPending,
      };
    }, [
      selectedDate,
      selectedInventory,
    ]);

  const canRequest =
    !!selectedAvailability &&
    requestedQuantity <=
      selectedAvailability.availableConfirmed;

  const hasPendingRisk =
    !!selectedAvailability &&
    selectedAvailability.pending > 0 &&
    requestedQuantity >
      selectedAvailability.availableIncludingPending &&
    requestedQuantity <=
      selectedAvailability.availableConfirmed;

  const quoteUrl = useMemo(() => {
    const params = new URLSearchParams();

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
        String(requestedQuantity)
      );
    }

    const query = params.toString();

    return query
      ? `/?${query}#contact`
      : "/#contact";
  }, [
    selectedDate,
    selectedInventory,
    requestedQuantity,
  ]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.35fr_0.75fr] lg:gap-10">

      {/* =====================================================
          CALENDRIER
      ===================================================== */}

      <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl sm:p-8">

        {!selectedInventory && (
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-green-500/20 bg-green-500/10 p-4">

            <Info
              size={20}
              className="mt-0.5 shrink-0 text-green-400"
            />

            <p className="text-sm leading-6 text-green-100">
              Sélectionnez d&apos;abord le matériel
              souhaité pour afficher sa disponibilité.
            </p>

          </div>
        )}

        {selectedInventory && (
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-3">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-400">
                Disponibilités affichées pour
              </p>

              <p className="mt-1 font-bold text-white">
                {selectedInventory.name}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Stock total :{" "}
                {selectedInventory.stock}
              </p>

            </div>

            <PackageCheck
              size={22}
              className="text-green-400"
            />

          </div>
        )}

        {/* NAVIGATION */}

        <div className="flex items-center justify-between gap-4">

          <button
            type="button"
            onClick={previousMonth}
            aria-label="Mois précédent"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-green-500/40 hover:bg-green-500/10"
          >
            <ChevronLeft size={21} />
          </button>

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-400">
              Calendrier
            </p>

            <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
              {monthNames[month]} {year}
            </h2>

          </div>

          <button
            type="button"
            onClick={nextMonth}
            aria-label="Mois suivant"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-green-500/40 hover:bg-green-500/10"
          >
            <ChevronRight size={21} />
          </button>

        </div>

        {/* JOURS */}

        <div className="mt-8 grid grid-cols-7 gap-1 sm:gap-2">

          {weekDays.map((day) => (
            <div
              key={day}
              className="py-2 text-center text-[10px] font-bold uppercase tracking-wider text-gray-500 sm:text-xs"
            >
              {day}
            </div>
          ))}

          {calendarDays.map(
            (day, index) => {
              if (day === null) {
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

              let available =
                selectedInventory
                  ? Math.max(
                      selectedInventory.stock -
                        getReservedQuantity(
                          dateKey,
                          selectedInventory.id,
                          "confirmed"
                        ),
                      0
                    )
                  : 0;

              const pending =
                selectedInventory
                  ? getReservedQuantity(
                      dateKey,
                      selectedInventory.id,
                      "pending"
                    )
                  : 0;

              const selected =
                selectedDate === dateKey;

              let statusClasses =
                "border-white/10 bg-white/[0.03] text-gray-500";

              if (
                selectedInventory &&
                available > 0
              ) {
                statusClasses =
                  pending > 0
                    ? "border-amber-500/20 bg-amber-500/10 text-amber-200"
                    : "border-green-500/20 bg-green-500/10 text-green-200";
              }

              if (
                selectedInventory &&
                available === 0
              ) {
                statusClasses =
                  "border-red-500/20 bg-red-500/10 text-red-200";
              }

              if (isPast) {
                statusClasses =
                  "cursor-not-allowed border-white/5 bg-white/[0.02] text-gray-700 opacity-40";
              }

              if (
                selected &&
                !isPast
              ) {
                statusClasses =
                  "border-green-400 bg-green-500 text-white shadow-[0_8px_30px_rgba(34,197,94,0.25)]";
              }

              return (
                <button
                  type="button"
                  key={dateKey}
                  disabled={
                    isPast ||
                    !selectedInventory
                  }
                  onClick={() =>
                    setSelectedDate(
                      dateKey
                    )
                  }
                  className={`relative aspect-square rounded-xl border text-sm font-bold transition-all duration-200 sm:rounded-2xl sm:text-base ${
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
                        className={`absolute bottom-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full sm:bottom-2 ${
                          available === 0
                            ? "bg-red-400"
                            : pending > 0
                              ? "bg-amber-400"
                              : "bg-green-400"
                        }`}
                      />
                    )}

                </button>
              );
            }
          )}

        </div>

        {/* LÉGENDE */}

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            Disponible
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            Complet
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            Demande en cours
          </div>

        </div>

      </div>

      {/* =====================================================
          PANNEAU DE DROITE
      ===================================================== */}

      <aside className="h-fit rounded-[28px] border border-green-500/20 bg-green-500/10 p-5 backdrop-blur-xl sm:p-8">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/15 text-green-400">
          <CalendarDays size={24} />
        </div>

        {/* MATÉRIEL */}

        <div className="mt-6">

          <label className="mb-2 block text-sm font-semibold text-gray-200">
            Matériel souhaité *
          </label>

          <select
            value={selectedInventoryId}
            onChange={(event) =>
              changeInventory(
                event.target.value
              )
            }
            className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none transition focus:border-green-500/60"
          >
            <option value="">
              Sélectionnez...
            </option>

            {inventory.map((item) => (
              <option
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>
            ))}

          </select>

        </div>

        {/* QUANTITÉ */}

        {selectedInventory && (
          <div className="mt-6">

            <label className="mb-2 block text-sm font-semibold text-gray-200">
              Quantité souhaitée
            </label>

            <input
              type="number"
              min="1"
              max={selectedInventory.stock}
              value={requestedQuantity}
              onChange={(event) =>
                setRequestedQuantity(
                  Math.max(
                    1,
                    Math.min(
                      Number(
                        event.target.value
                      ) || 1,
                      selectedInventory.stock
                    )
                  )
                )
              }
              className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none transition focus:border-green-500/60"
            />

            <p className="mt-2 text-xs text-gray-500">
              Stock total :{" "}
              {selectedInventory.stock}
            </p>

          </div>
        )}

        {/* DATE */}

        <div className="mt-8">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
            Votre date
          </p>

          <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
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

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  Stock disponible
                </p>

                <p className="mt-2 text-3xl font-black text-white">
                  {
                    selectedAvailability.availableConfirmed
                  }{" "}
                  / {selectedInventory.stock}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  {selectedInventory.name}
                </p>

              </div>

              {canRequest &&
                !hasPendingRisk && (
                  <div className="mt-4 flex items-start gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-green-300">

                    <CheckCircle2
                      size={22}
                      className="mt-0.5 shrink-0"
                    />

                    <div>

                      <p className="font-bold">
                        Disponible
                      </p>

                      <p className="mt-1 text-xs text-green-200/70">
                        La quantité demandée est
                        actuellement disponible.
                      </p>

                    </div>

                  </div>
                )}

              {hasPendingRisk && (
                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-300">

                  <Clock3
                    size={22}
                    className="mt-0.5 shrink-0"
                  />

                  <div>

                    <p className="font-bold">
                      À confirmer
                    </p>

                    <p className="mt-1 text-xs text-amber-200/70">
                      Une demande est déjà en cours
                      sur une partie du stock.
                    </p>

                  </div>

                </div>
              )}

              {!canRequest && (
                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">

                  <XCircle
                    size={22}
                    className="mt-0.5 shrink-0"
                  />

                  <div>

                    <p className="font-bold">
                      Quantité indisponible
                    </p>

                    <p className="mt-1 text-xs text-red-200/70">
                      Il ne reste pas assez de stock
                      disponible pour cette date.
                    </p>

                  </div>

                </div>
              )}

            </div>
          )}

        {/* CTA */}

        {selectedAvailability &&
          canRequest && (
            <Link
              href={quoteUrl}
              className={`group mt-6 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-center font-bold transition ${
                hasPendingRisk
                  ? "bg-amber-500 text-black hover:bg-amber-400"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              {hasPendingRisk
                ? "Nous contacter"
                : "Demander un devis"}

              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          )}

        {!selectedInventory && (
          <p className="mt-6 text-sm leading-6 text-gray-400">
            Commencez par sélectionner le matériel
            que vous souhaitez réserver.
          </p>
        )}

        {selectedInventory &&
          !selectedDate && (
            <p className="mt-6 text-sm leading-6 text-gray-400">
              Sélectionnez ensuite une date dans
              le calendrier.
            </p>
          )}

        <p className="mt-6 text-xs leading-5 text-gray-500">
          Les disponibilités affichées sont
          indicatives et seront définitivement
          confirmées lors de la validation de votre
          réservation.
        </p>

      </aside>

    </div>
  );
}