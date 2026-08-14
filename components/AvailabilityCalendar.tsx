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
} from "lucide-react";

type AvailabilityStatus =
  | "available"
  | "unavailable"
  | "pending";

const services = [
  "Photo Booth",
  "Mobilier",
  "Smoke Puff",
  "Sonorisation",
  "Projection",
  "Machines à effets",
];

/*
  ============================================================
  DATES DE TEST

  Elles seront supprimées lorsque nous connecterons
  Google Calendar.
  ============================================================
*/

const testAvailability: Record<string, AvailabilityStatus> = {
  "2026-08-14": "unavailable",
  "2026-08-15": "unavailable",
  "2026-08-16": "pending",
  "2026-08-22": "unavailable",
  "2026-08-23": "pending",
  "2026-08-29": "unavailable",
};

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

  const date = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function AvailabilityCalendar() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(
    new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    )
  );

  const [selectedDate, setSelectedDate] =
    useState("");

  const [selectedService, setSelectedService] =
    useState("");

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  /*
    ============================================================
    CRÉATION DU CALENDRIER
    ============================================================
  */

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

    /*
      JavaScript :
      dimanche = 0
      lundi = 1

      Notre calendrier commence le lundi.
    */

    const offset =
      firstDay === 0 ? 6 : firstDay - 1;

    const days: Array<number | null> = [];

    for (let i = 0; i < offset; i++) {
      days.push(null);
    }

    for (let day = 1; day <= numberOfDays; day++) {
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

  /*
    ============================================================
    ÉTAT DE LA DATE
    ============================================================
  */

  const selectedStatus:
    | AvailabilityStatus
    | null = selectedDate
    ? testAvailability[selectedDate] ??
      "available"
    : null;

  /*
    ============================================================
    LIEN VERS LE DEVIS
    ============================================================
  */

  const quoteUrl = useMemo(() => {
    const params = new URLSearchParams();

    if (selectedDate) {
      params.set("date", selectedDate);
    }

    if (selectedService) {
      params.set("service", selectedService);
    }

    const query = params.toString();

    return query
      ? `/?${query}#contact`
      : "/#contact";
  }, [selectedDate, selectedService]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.35fr_0.75fr] lg:gap-10">

      {/* =====================================================
          CALENDRIER
      ===================================================== */}

      <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl sm:p-8">

        {/* NAVIGATION MOIS */}

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
              Disponibilités
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

        {/* JOURS DE LA SEMAINE */}

        <div className="mt-8 grid grid-cols-7 gap-1 sm:gap-2">

          {weekDays.map((day) => (
            <div
              key={day}
              className="py-2 text-center text-[10px] font-bold uppercase tracking-wider text-gray-500 sm:text-xs"
            >
              {day}
            </div>
          ))}

          {/* JOURS */}

          {calendarDays.map((day, index) => {
            if (day === null) {
              return (
                <div
                  key={`empty-${index}`}
                  className="aspect-square"
                />
              );
            }

            const dateKey = formatDateKey(
              year,
              month,
              day
            );

            const status =
              testAvailability[dateKey] ??
              "available";

            const selected =
              selectedDate === dateKey;

            const dateObject = new Date(
              year,
              month,
              day
            );

            const todayWithoutTime = new Date(
              today.getFullYear(),
              today.getMonth(),
              today.getDate()
            );

            const isPast =
              dateObject < todayWithoutTime;

            let statusClasses =
              "border-green-500/20 bg-green-500/10 text-green-200 hover:border-green-500/50 hover:bg-green-500/20";

            if (status === "unavailable") {
              statusClasses =
                "border-red-500/20 bg-red-500/10 text-red-200 hover:border-red-500/40";
            }

            if (status === "pending") {
              statusClasses =
                "border-amber-500/20 bg-amber-500/10 text-amber-200 hover:border-amber-500/40";
            }

            if (isPast) {
              statusClasses =
                "cursor-not-allowed border-white/5 bg-white/[0.02] text-gray-700 opacity-50";
            }

            if (selected && !isPast) {
              statusClasses =
                "border-green-400 bg-green-500 text-white shadow-[0_8px_30px_rgba(34,197,94,0.25)]";
            }

            return (
              <button
                type="button"
                key={dateKey}
                disabled={isPast}
                onClick={() =>
                  setSelectedDate(dateKey)
                }
                className={`relative aspect-square rounded-xl border text-sm font-bold transition-all duration-200 sm:rounded-2xl sm:text-base ${statusClasses}`}
              >
                {day}

                {!isPast && (
                  <span
                    className={`absolute bottom-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full sm:bottom-2 ${
                      status === "available"
                        ? "bg-green-400"
                        : status ===
                            "unavailable"
                          ? "bg-red-400"
                          : "bg-amber-400"
                    }`}
                  />
                )}

              </button>
            );
          })}

        </div>

        {/* LÉGENDE */}

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            Disponible
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            Indisponible
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            À confirmer
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

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-green-400">
          Votre date
        </p>

        <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
          {selectedDate
            ? formatFrenchDate(selectedDate)
            : "Sélectionnez une date"}
        </h3>

        {/* STATUT */}

        {selectedStatus && (
          <div className="mt-5">

            {selectedStatus ===
              "available" && (
              <div className="flex items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-green-300">

                <CheckCircle2
                  size={22}
                  className="shrink-0"
                />

                <div>
                  <p className="font-bold">
                    Date disponible
                  </p>

                  <p className="mt-1 text-xs text-green-200/70">
                    Vous pouvez nous envoyer une
                    demande pour cette date.
                  </p>
                </div>

              </div>
            )}

            {selectedStatus ===
              "unavailable" && (
              <div className="flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">

                <XCircle
                  size={22}
                  className="shrink-0"
                />

                <div>
                  <p className="font-bold">
                    Date indisponible
                  </p>

                  <p className="mt-1 text-xs text-red-200/70">
                    Cette date est actuellement
                    réservée.
                  </p>
                </div>

              </div>
            )}

            {selectedStatus === "pending" && (
              <div className="flex items-center gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-300">

                <Clock3
                  size={22}
                  className="shrink-0"
                />

                <div>
                  <p className="font-bold">
                    À confirmer
                  </p>

                  <p className="mt-1 text-xs text-amber-200/70">
                    Une demande est déjà en cours
                    pour cette date.
                  </p>
                </div>

              </div>
            )}

          </div>
        )}

        {/* PRESTATION */}

        <div className="mt-8">

          <label className="mb-2 block text-sm font-semibold text-gray-200">
            Prestation souhaitée
          </label>

          <select
            value={selectedService}
            onChange={(event) =>
              setSelectedService(
                event.target.value
              )
            }
            className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none transition focus:border-green-500/60"
          >
            <option value="">
              Sélectionnez...
            </option>

            {services.map((service) => (
              <option
                key={service}
                value={service}
              >
                {service}
              </option>
            ))}

          </select>

        </div>

        {/* CTA */}

        {selectedStatus === "available" && (
          <Link
            href={quoteUrl}
            className="group mt-6 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-4 text-center font-bold text-white transition hover:bg-green-700"
          >
            Demander un devis

            <ArrowRight
              size={19}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        )}

        {selectedStatus === "pending" && (
          <Link
            href={quoteUrl}
            className="group mt-6 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-4 text-center font-bold text-black transition hover:bg-amber-400"
          >
            Nous contacter

            <ArrowRight
              size={19}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        )}

        {selectedStatus === "unavailable" && (
          <p className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-center text-sm leading-6 text-gray-400">
            Vous pouvez sélectionner une autre date
            pour vérifier nos disponibilités.
          </p>
        )}

        {!selectedDate && (
          <p className="mt-6 text-sm leading-6 text-gray-400">
            Choisissez une date dans le calendrier
            pour connaître son statut.
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