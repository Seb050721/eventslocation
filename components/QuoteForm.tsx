"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  MapPin,
  PackageCheck,
  Send,
  Sparkles,
  Users,
} from "lucide-react";

const eventSuggestions: Record<string, string[]> = {
  Mariage: [
    "Toile de fond",
    "Flash additionnel",
    "Smoke Puff",
    "Mobilier",
  ],

  Anniversaire: [
    "Photo Booth",
    "Smoke Puff",
    "Machine à bulles",
  ],

  "Gender Reveal": [
    "Smoke Puff",
    "Machine à bulles",
    "Photo Booth",
  ],

  Entreprise: [
    "Vidéoprojecteur",
    "Mobilier",
    "Sonorisation",
  ],

  Association: [
    "Photo Booth",
    "Mobilier",
    "Sonorisation",
  ],
};

const servicePrices: Record<string, number | null> = {
  "Photo Booth": 169,
  Mobilier: null,
  "Smoke Puff": 79,
  Sonorisation: 100,
  Projection: 55,
  "Machines à effets": 15,
};

const services = [
  "Photo Booth",
  "Mobilier",
  "Smoke Puff",
  "Sonorisation",
  "Projection",
  "Machines à effets",
];

/* ============================================================
   CORRESPONDANCE MATÉRIEL -> PRESTATION
============================================================ */

const materialToService: Record<string, string> = {
  "Photo Booth": "Photo Booth",

  "Kit Sonorisation": "Sonorisation",
  "Micro HF": "Sonorisation",

  Vidéoprojecteur: "Projection",
  "Écran 150 pouces": "Projection",

  "Smoke Puff": "Smoke Puff",

  "Machine à fumée": "Machines à effets",
  "Machine à bulles": "Machines à effets",

  "Tente 4 × 8 m": "Mobilier",
  "Table ronde Ø152 cm": "Mobilier",
  "Table rectangulaire": "Mobilier",
  "Mange-debout": "Mobilier",
  Chaise: "Mobilier",
  Tabouret: "Mobilier",
};

function formatFrenchDate(dateString: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${dateString}T12:00:00`));
}

export default function QuoteForm() {
  const [eventType, setEventType] = useState("");

  const [selectedServices, setSelectedServices] =
    useState<string[]>([]);

  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [guests, setGuests] = useState("");

  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  /* ============================================================
     INFORMATIONS PROVENANT DES DISPONIBILITÉS
  ============================================================ */

  const [fromAvailability, setFromAvailability] =
    useState(false);

  const [selectedMaterial, setSelectedMaterial] =
    useState("");

  const [selectedQuantity, setSelectedQuantity] =
    useState<number | null>(null);

  /* ============================================================
     PRÉREMPLISSAGE DEPUIS /DISPONIBILITES
  ============================================================ */

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const dateParam = params.get("date");
    const materialParam = params.get("service");
    const quantityParam = params.get("quantity");

    let hasPrefill = false;

    if (dateParam) {
      setDate(dateParam);
      hasPrefill = true;
    }

    if (materialParam) {
      setSelectedMaterial(materialParam);

      const relatedService =
        materialToService[materialParam] ??
        materialParam;

      if (services.includes(relatedService)) {
        setSelectedServices((current) =>
          current.includes(relatedService)
            ? current
            : [...current, relatedService]
        );
      }

      hasPrefill = true;
    }

    if (quantityParam) {
      const parsedQuantity =
        Number(quantityParam);

      if (
        Number.isFinite(parsedQuantity) &&
        parsedQuantity > 0
      ) {
        setSelectedQuantity(parsedQuantity);
        hasPrefill = true;
      }
    }

    if (hasPrefill) {
      setFromAvailability(true);
    }
  }, []);

  /* ============================================================
     PRESTATIONS
  ============================================================ */

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter(
            (item) => item !== service
          )
        : [...current, service]
    );
  }

  /* ============================================================
     ESTIMATION
  ============================================================ */

  const estimatedPrice = useMemo(() => {
    return selectedServices.reduce(
      (total, service) => {
        const price =
          servicePrices[service];

        return (
          total +
          (typeof price === "number"
            ? price
            : 0)
        );
      },
      0
    );
  }, [selectedServices]);

  const hasCustomPriceService = useMemo(() => {
    return selectedServices.some(
      (service) =>
        servicePrices[service] === null
    );
  }, [selectedServices]);

  const suggestions =
    eventSuggestions[eventType] ?? [];

  const estimationLabel = useMemo(() => {
    if (selectedServices.length === 0) {
      return "Sur devis";
    }

    if (
      estimatedPrice === 0 &&
      hasCustomPriceService
    ) {
      return "Sur devis";
    }

    if (
      estimatedPrice > 0 &&
      hasCustomPriceService
    ) {
      return `${estimatedPrice} € + sur devis`;
    }

    return `${estimatedPrice} €`;
  }, [
    selectedServices.length,
    estimatedPrice,
    hasCustomPriceService,
  ]);

  /* ============================================================
     ENVOI
  ============================================================ */

  async function sendQuote() {
    setError("");
    setSuccess(false);

    if (!lastname.trim()) {
      setError("Merci de renseigner votre nom.");
      return;
    }

    if (!firstname.trim()) {
      setError("Merci de renseigner votre prénom.");
      return;
    }

    if (!email.trim()) {
      setError(
        "Merci de renseigner votre adresse e-mail."
      );
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError(
        "Merci de renseigner une adresse e-mail valide."
      );
      return;
    }

    if (!phone.trim()) {
      setError(
        "Merci de renseigner votre numéro de téléphone."
      );
      return;
    }

    if (!eventType) {
      setError(
        "Merci de sélectionner le type d'événement."
      );
      return;
    }

    if (!date) {
      setError(
        "Merci de renseigner la date de votre événement."
      );
      return;
    }

    if (!city.trim()) {
      setError(
        "Merci de renseigner le lieu de votre événement."
      );
      return;
    }

    if (selectedServices.length === 0) {
      setError(
        "Merci de sélectionner au moins une prestation."
      );
      return;
    }

    try {
      setSending(true);

      const response = await fetch(
        "/api/devis",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            lastname,
            firstname,
            email,
            phone,

            eventType,
            date,
            city,
            guests,

            selectedServices,

            selectedMaterial:
              selectedMaterial || null,

            selectedQuantity,

            message,

            estimatedPrice,
            hasCustomPriceService,
            estimationLabel,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Impossible d'envoyer votre demande."
        );
      }

      setSuccess(true);

      setLastname("");
      setFirstname("");
      setEmail("");
      setPhone("");

      setEventType("");
      setDate("");
      setCity("");
      setGuests("");

      setSelectedServices([]);
      setMessage("");

      setSelectedMaterial("");
      setSelectedQuantity(null);
      setFromAvailability(false);

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue pendant l'envoi."
      );
    } finally {
      setSending(false);
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-[#E4DCD7] bg-[#FBFAF8] px-4 py-3.5 text-sm text-[#1D1B1C] outline-none transition placeholder:text-[#AAA2A4] focus:border-[#4A9692] focus:bg-white focus:ring-4 focus:ring-[#4A9692]/10";

  const labelClass =
    "mb-2 block text-sm font-semibold text-[#3F3A3C]";

  return (
    <section
      id="contact"
      className="relative scroll-mt-[80px] overflow-hidden bg-[#FBFAF8] py-12 sm:py-14 lg:py-16"
    >
      {/* =====================================================
          HALOS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[300px] w-[300px] rounded-full bg-[#4A9692]/8 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[320px] w-[320px] rounded-full bg-[#EF5A4F]/8 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            TITRE
        ===================================================== */}

        <div className="mx-auto mb-8 max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#EF5A4F]/20 bg-[#FFF0ED] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D94A41] sm:text-xs">
            <Send size={14} />
            Demande de devis
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#1D1B1C] sm:text-4xl lg:text-[42px]">
            Préparons ensemble
            <span className="text-[#EF5A4F]">
              {" "}votre événement
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#716A6C] sm:text-base">
            Quelques informations suffisent pour recevoir
            une proposition adaptée à votre événement.
          </p>

        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:gap-8">

          {/* =====================================================
              FORMULAIRE
          ===================================================== */}

          <div className="rounded-[24px] border border-[#E9E2DD] bg-white p-5 shadow-[0_10px_32px_rgba(31,25,27,0.05)] sm:p-7 lg:p-8">

            {/* =================================================
                BANDEAU DISPONIBILITÉS
            ================================================= */}

            {fromAvailability && (
              <div className="mb-6 rounded-2xl border border-[#4A9692]/25 bg-[#EDF7F6] p-4">

                <div className="flex items-start gap-3">

                  <PackageCheck
                    size={21}
                    className="mt-0.5 shrink-0 text-[#347A77]"
                  />

                  <div>

                    <p className="font-bold text-[#1D1B1C]">
                      Votre sélection a été préremplie
                    </p>

                    <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-sm leading-6 text-[#716A6C]">

                      {date && (
                        <span>
                          Date :{" "}
                          <strong className="text-[#347A77]">
                            {formatFrenchDate(date)}
                          </strong>
                        </span>
                      )}

                      {selectedMaterial && (
                        <>
                          <span className="hidden sm:inline">
                            •
                          </span>

                          <span>
                            Matériel :{" "}
                            <strong className="text-[#347A77]">
                              {selectedMaterial}
                            </strong>
                          </span>
                        </>
                      )}

                      {selectedQuantity && (
                        <>
                          <span className="hidden sm:inline">
                            •
                          </span>

                          <span>
                            Quantité :{" "}
                            <strong className="text-[#347A77]">
                              {selectedQuantity}
                            </strong>
                          </span>
                        </>
                      )}

                    </div>

                  </div>

                </div>

              </div>
            )}

            {/* =================================================
                IDENTITÉ
            ================================================= */}

            <div className="grid gap-4 md:grid-cols-2">

              <div>
                <label className={labelClass}>
                  Nom *
                </label>

                <input
                  value={lastname}
                  onChange={(event) =>
                    setLastname(event.target.value)
                  }
                  placeholder="Votre nom"
                  autoComplete="family-name"
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass}>
                  Prénom *
                </label>

                <input
                  value={firstname}
                  onChange={(event) =>
                    setFirstname(event.target.value)
                  }
                  placeholder="Votre prénom"
                  autoComplete="given-name"
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass}>
                  Adresse e-mail *
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="exemple@email.fr"
                  autoComplete="email"
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass}>
                  Téléphone *
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(event) =>
                    setPhone(event.target.value)
                  }
                  placeholder="06 XX XX XX XX"
                  autoComplete="tel"
                  className={fieldClass}
                />
              </div>

              {/* TYPE ÉVÉNEMENT */}

              <div className="md:col-span-2">

                <label className={labelClass}>
                  Type d&apos;événement *
                </label>

                <select
                  value={eventType}
                  onChange={(event) =>
                    setEventType(event.target.value)
                  }
                  className={fieldClass}
                >
                  <option value="">
                    Sélectionnez...
                  </option>

                  <option value="Mariage">
                    Mariage
                  </option>

                  <option value="Anniversaire">
                    Anniversaire
                  </option>

                  <option value="Gender Reveal">
                    Gender Reveal
                  </option>

                  <option value="Entreprise">
                    Entreprise
                  </option>

                  <option value="Association">
                    Association
                  </option>

                  <option value="Autre">
                    Autre
                  </option>

                </select>

              </div>

              {/* DATE */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#3F3A3C]">
                  <CalendarDays
                    size={16}
                    className="text-[#4A9692]"
                  />

                  Date *
                </label>

                <input
                  type="date"
                  min={
                    new Date()
                      .toISOString()
                      .split("T")[0]
                  }
                  value={date}
                  onChange={(event) =>
                    setDate(event.target.value)
                  }
                  className={fieldClass}
                />

              </div>

              {/* INVITÉS */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#3F3A3C]">
                  <Users
                    size={16}
                    className="text-[#C34F72]"
                  />

                  Nombre d&apos;invités
                </label>

                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(event) =>
                    setGuests(event.target.value)
                  }
                  placeholder="Ex : 120"
                  className={fieldClass}
                />

              </div>

              {/* LIEU */}

              <div className="md:col-span-2">

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#3F3A3C]">
                  <MapPin
                    size={16}
                    className="text-[#EF5A4F]"
                  />

                  Ville / lieu de réception *
                </label>

                <input
                  value={city}
                  onChange={(event) =>
                    setCity(event.target.value)
                  }
                  placeholder="Ex : Varzy, Auxerre, Nevers..."
                  className={fieldClass}
                />

              </div>

            </div>

            {/* =====================================================
                MATÉRIEL ISSU DU CALENDRIER
            ===================================================== */}

            {selectedMaterial && (
              <div className="mt-7 rounded-2xl border border-[#4A9692]/20 bg-[#F7FBFA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#347A77]">
                  Matériel vérifié
                </p>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-4">

                  <div>

                    <p className="font-bold text-[#1D1B1C]">
                      {selectedMaterial}
                    </p>

                    <p className="mt-1 text-sm text-[#716A6C]">
                      Quantité souhaitée :{" "}

                      <strong className="text-[#1D1B1C]">
                        {selectedQuantity ?? 1}
                      </strong>
                    </p>

                  </div>

                  <CheckCircle2
                    size={24}
                    className="text-[#4A9692]"
                  />

                </div>

              </div>
            )}

            {/* =====================================================
                PRESTATIONS
            ===================================================== */}

            <div className="mt-7">

              <h3 className="text-xl font-black text-[#1D1B1C] sm:text-2xl">
                Prestations souhaitées
              </h3>

              <p className="mt-1.5 text-sm text-[#716A6C]">
                Vous pouvez sélectionner plusieurs prestations.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">

                {services.map((service) => {
                  const checked =
                    selectedServices.includes(service);

                  const price =
                    servicePrices[service];

                  return (
                    <button
                      type="button"
                      key={service}
                      onClick={() =>
                        toggleService(service)
                      }
                      className={`relative rounded-2xl border p-4 text-left transition-all duration-200 ${
                        checked
                          ? "border-[#EF5A4F]/45 bg-[#FFF0ED] shadow-[0_8px_22px_rgba(239,90,79,0.08)]"
                          : "border-[#E9E2DD] bg-[#FBFAF8] hover:border-[#4A9692]/30 hover:bg-white"
                      }`}
                    >

                      {checked && (
                        <CheckCircle2
                          size={18}
                          className="absolute right-4 top-4 text-[#EF5A4F]"
                        />
                      )}

                      <p className="pr-7 font-bold text-[#1D1B1C]">
                        {service}
                      </p>

                      <p
                        className={`mt-2 text-sm font-semibold ${
                          checked
                            ? "text-[#D94A41]"
                            : "text-[#4A9692]"
                        }`}
                      >
                        {price === null
                          ? "Sur devis"
                          : `À partir de ${price} €`}
                      </p>

                    </button>
                  );
                })}

              </div>

            </div>

            {/* =====================================================
                MESSAGE
            ===================================================== */}

            <div className="mt-7">

              <label className={labelClass}>
                Décrivez votre projet
              </label>

              <textarea
                rows={5}
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                placeholder="Horaires, lieu précis, besoins particuliers, questions..."
                className={`${fieldClass} resize-none`}
              />

            </div>

            {/* RGPD */}

            <p className="mt-4 text-xs leading-5 text-[#8B8486]">
              En envoyant cette demande, vous acceptez que
              les informations renseignées soient utilisées
              afin de répondre à votre demande de devis.{" "}

              <Link
                href="/politique-de-confidentialite"
                className="font-semibold text-[#347A77] transition hover:text-[#4A9692]"
              >
                Consultez notre politique de confidentialité
              </Link>{" "}

              pour en savoir plus.
            </p>

            {/* BOUTON */}

            <button
              type="button"
              onClick={sendQuote}
              disabled={sending}
              className="mt-6 flex min-h-[54px] w-full items-center justify-center gap-2 rounded-xl bg-[#EF5A4F] px-6 py-3.5 text-base font-black text-white shadow-[0_12px_28px_rgba(239,90,79,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D94A41] disabled:cursor-not-allowed disabled:opacity-60"
            >

              <Send size={19} />

              {sending
                ? "Envoi en cours..."
                : "Demander mon devis"}

            </button>

            {/* SUCCÈS */}

            {success && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#4A9692]/25 bg-[#EDF7F6] p-4 text-sm leading-6 text-[#347A77]">

                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0"
                />

                <p>
                  Votre demande a bien été envoyée.
                  Un e-mail de confirmation vous a été
                  envoyé et nous reviendrons vers vous
                  rapidement.
                </p>

              </div>
            )}

            {/* ERREUR */}

            {error && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">

                <AlertCircle
                  size={21}
                  className="mt-0.5 shrink-0 text-red-500"
                />

                <p>
                  {error}
                </p>

              </div>
            )}

          </div>

          {/* =====================================================
              RÉCAPITULATIF
          ===================================================== */}

          <aside className="h-fit rounded-[24px] border border-[#E9E2DD] bg-[#F7F3EF] p-5 shadow-[0_10px_28px_rgba(31,25,27,0.04)] sm:p-6 lg:sticky lg:top-28">

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4A9692]">
              Récapitulatif
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#1D1B1C]">
              Votre demande
            </h3>

            <div className="mt-6 space-y-5">

              {/* ÉVÉNEMENT */}

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9A9395]">
                  Événement
                </p>

                <p className="mt-1.5 font-semibold text-[#1D1B1C]">
                  {eventType || "Non renseigné"}
                </p>
              </div>

              {/* DATE */}

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9A9395]">
                  Date
                </p>

                <p className="mt-1.5 font-semibold text-[#1D1B1C]">
                  {date
                    ? formatFrenchDate(date)
                    : "Non renseignée"}
                </p>
              </div>

              {/* LIEU */}

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9A9395]">
                  Lieu
                </p>

                <p className="mt-1.5 break-words font-semibold text-[#1D1B1C]">
                  {city || "Non renseigné"}
                </p>
              </div>

              {/* INVITÉS */}

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9A9395]">
                  Invités
                </p>

                <p className="mt-1.5 font-semibold text-[#1D1B1C]">
                  {guests || "Non renseigné"}
                </p>
              </div>

              {/* MATÉRIEL */}

              {selectedMaterial && (
                <div className="border-t border-[#E4DCD7] pt-5">

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#4A9692]">
                    Matériel sélectionné
                  </p>

                  <div className="mt-3 rounded-xl bg-white px-4 py-3">

                    <div className="flex items-center justify-between gap-4">

                      <span className="text-sm text-[#3F3A3C]">
                        {selectedMaterial}
                      </span>

                      <span className="shrink-0 text-sm font-bold text-[#347A77]">
                        × {selectedQuantity ?? 1}
                      </span>

                    </div>

                  </div>

                </div>
              )}

              {/* PRESTATIONS */}

              <div className="border-t border-[#E4DCD7] pt-5">

                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#4A9692]">
                  Prestations
                </p>

                {selectedServices.length === 0 ? (
                  <p className="mt-3 text-sm text-[#8B8486]">
                    Aucune prestation sélectionnée.
                  </p>
                ) : (
                  <div className="mt-3 space-y-2">

                    {selectedServices.map(
                      (service) => {
                        const price =
                          servicePrices[service];

                        return (
                          <div
                            key={service}
                            className="flex items-center justify-between gap-4 rounded-xl bg-white px-4 py-3"
                          >

                            <span className="text-sm text-[#3F3A3C]">
                              {service}
                            </span>

                            <span className="shrink-0 text-sm font-bold text-[#EF5A4F]">
                              {price === null
                                ? "Sur devis"
                                : `${price} €`}
                            </span>

                          </div>
                        );
                      }
                    )}

                  </div>
                )}

              </div>

              {/* SUGGESTIONS */}

              {suggestions.length > 0 && (
                <div className="rounded-2xl border border-[#F3A044]/20 bg-[#FFF5E9] p-4">

                  <div className="flex items-center gap-2">

                    <Sparkles
                      size={18}
                      className="text-[#F3A044]"
                    />

                    <p className="font-bold text-[#1D1B1C]">
                      Nous vous conseillons aussi
                    </p>

                  </div>

                  <div className="mt-3 space-y-1.5">

                    {suggestions.map(
                      (item) => (
                        <p
                          key={item}
                          className="text-sm text-[#716A6C]"
                        >
                          • {item}
                        </p>
                      )
                    )}

                  </div>

                </div>
              )}

              {/* ESTIMATION */}

              <div className="rounded-2xl border border-[#EF5A4F]/20 bg-[#FFF0ED] p-5">

                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#D94A41]">
                  Estimation
                </p>

                <p className="mt-2 text-3xl font-black leading-tight text-[#1D1B1C]">
                  {estimationLabel}
                </p>

                {hasCustomPriceService &&
                  estimatedPrice > 0 && (
                    <p className="mt-2 text-sm font-semibold text-[#D94A41]">
                      Une ou plusieurs prestations seront
                      chiffrées précisément dans votre devis.
                    </p>
                  )}

                <p className="mt-3 text-xs leading-5 text-[#716A6C]">
                  Estimation indicative basée sur les prix
                  de départ. Le tarif final dépend notamment
                  des quantités, du matériel, du lieu et de
                  votre demande.
                </p>

              </div>

            </div>

          </aside>

        </div>

      </div>
    </section>
  );
}