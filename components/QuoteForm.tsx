"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  MapPin,
  Users,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
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

const servicePrices: Record<string, number> = {
  "Photo Booth": 169,
  Mobilier: 50,
  "Smoke Puff": 155,
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

export default function QuoteForm() {
  const [eventType, setEventType] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

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

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  }

  const estimatedPrice = useMemo(() => {
    return selectedServices.reduce(
      (total, service) => total + (servicePrices[service] ?? 0),
      0
    );
  }, [selectedServices]);

  const suggestions = eventSuggestions[eventType] ?? [];

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
      setError("Merci de renseigner votre adresse e-mail.");
      return;
    }

    if (!phone.trim()) {
      setError("Merci de renseigner votre numéro de téléphone.");
      return;
    }

    if (!eventType) {
      setError("Merci de sélectionner le type d'événement.");
      return;
    }

    if (!date) {
      setError("Merci de renseigner la date de votre événement.");
      return;
    }

    if (!city.trim()) {
      setError("Merci de renseigner le lieu de votre événement.");
      return;
    }

    if (selectedServices.length === 0) {
      setError("Merci de sélectionner au moins une prestation.");
      return;
    }

    try {
      setSending(true);

      const response = await fetch("/api/devis", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
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
          message,
          estimatedPrice,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Impossible d'envoyer votre demande."
        );
      }

      setSuccess(true);

      // Réinitialisation du formulaire après envoi
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

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-20 sm:py-24 lg:py-28"
    >
      {/* HALOS */}
      <div className="pointer-events-none absolute -left-52 top-20 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[170px]" />

      <div className="pointer-events-none absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* TITRE */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-green-400 sm:px-5 sm:text-xs sm:tracking-[0.35em]">
            Demande de devis
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:mt-8 lg:text-6xl">
            Préparons ensemble
            <span className="block text-green-400">
              votre événement
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Quelques informations suffisent pour nous permettre de préparer
            une proposition adaptée à votre événement.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.85fr] lg:gap-10">

          {/* =====================================================
              FORMULAIRE
          ===================================================== */}

          <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl sm:p-8 lg:p-10">

            {/* IDENTITÉ */}
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-200">
                  Nom *
                </label>

                <input
                  value={lastname}
                  onChange={(event) =>
                    setLastname(event.target.value)
                  }
                  placeholder="Votre nom"
                  autoComplete="family-name"
                  className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none transition focus:border-green-500/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-200">
                  Prénom *
                </label>

                <input
                  value={firstname}
                  onChange={(event) =>
                    setFirstname(event.target.value)
                  }
                  placeholder="Votre prénom"
                  autoComplete="given-name"
                  className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none transition focus:border-green-500/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-200">
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
                  className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none transition focus:border-green-500/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-200">
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
                  className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none transition focus:border-green-500/60"
                />
              </div>

              {/* TYPE ÉVÉNEMENT */}
              <div className="md:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-gray-200">
                  Type d&apos;événement *
                </label>

                <select
                  value={eventType}
                  onChange={(event) =>
                    setEventType(event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none transition focus:border-green-500/60"
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

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-200">
                  <CalendarDays
                    size={17}
                    className="text-green-400"
                  />

                  Date *
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(event) =>
                    setDate(event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none transition focus:border-green-500/60"
                />

              </div>

              {/* INVITÉS */}
              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-200">
                  <Users
                    size={17}
                    className="text-green-400"
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
                  className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none transition focus:border-green-500/60"
                />

              </div>

              {/* LIEU */}
              <div className="md:col-span-2">

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-200">
                  <MapPin
                    size={17}
                    className="text-green-400"
                  />

                  Ville / lieu de réception *
                </label>

                <input
                  value={city}
                  onChange={(event) =>
                    setCity(event.target.value)
                  }
                  placeholder="Ex : Varzy, Nevers..."
                  className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none transition focus:border-green-500/60"
                />

              </div>

            </div>

            {/* =====================================================
                PRESTATIONS
            ===================================================== */}

            <div className="mt-10 sm:mt-12">

              <h3 className="text-2xl font-black text-white">
                Prestations souhaitées
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Vous pouvez sélectionner plusieurs prestations.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">

                {services.map((service) => {
                  const checked =
                    selectedServices.includes(service);

                  return (
                    <button
                      type="button"
                      key={service}
                      onClick={() =>
                        toggleService(service)
                      }
                      className={`relative rounded-2xl border p-4 text-left transition-all duration-200 sm:p-5 ${
                        checked
                          ? "border-green-500 bg-green-500/15 shadow-[0_10px_30px_rgba(34,197,94,0.08)]"
                          : "border-white/10 bg-white/[0.04] hover:border-green-500/30"
                      }`}
                    >
                      {checked && (
                        <CheckCircle2
                          size={19}
                          className="absolute right-4 top-4 text-green-400"
                        />
                      )}

                      <p className="pr-7 font-bold text-white">
                        {service}
                      </p>

                      <p className="mt-2 text-sm font-semibold text-green-400">
                        À partir de{" "}
                        {servicePrices[service]} €
                      </p>
                    </button>
                  );
                })}

              </div>

            </div>

            {/* =====================================================
                MESSAGE
            ===================================================== */}

            <div className="mt-10 sm:mt-12">

              <label className="mb-2 block text-sm font-semibold text-gray-200">
                Décrivez votre projet
              </label>

              <textarea
                rows={6}
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                placeholder="Horaires, lieu précis, besoins particuliers, questions..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#101010] p-5 text-white outline-none transition focus:border-green-500/60"
              />

            </div>

            {/* RGPD */}
            <p className="mt-5 text-xs leading-5 text-gray-500">
              En envoyant cette demande, vous acceptez que les informations
              renseignées soient utilisées afin de répondre à votre demande
              de devis. Consultez notre politique de confidentialité pour
              en savoir plus.
            </p>

            {/* BOUTON */}
            <button
              type="button"
              onClick={sendQuote}
              disabled={sending}
              className="mt-7 flex min-h-[58px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-6 py-4 text-base font-black text-white shadow-xl transition-all duration-200 hover:from-green-600 hover:to-green-700 disabled:cursor-not-allowed disabled:opacity-60 sm:rounded-2xl sm:text-lg"
            >
              <Send size={20} />

              {sending
                ? "Envoi en cours..."
                : "Demander mon devis"}
            </button>

            {/* SUCCÈS */}
            {success && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-sm leading-6 text-green-200">
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-green-400"
                />

                <p>
                  Votre demande a bien été envoyée. Un e-mail de confirmation
                  vous a été envoyé et nous reviendrons vers vous rapidement.
                </p>
              </div>
            )}

            {/* ERREUR */}
            {error && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm leading-6 text-red-200">
                <AlertCircle
                  size={21}
                  className="mt-0.5 shrink-0 text-red-400"
                />

                <p>
                  {error}
                </p>
              </div>
            )}

          </div>

          {/* =====================================================
              RÉSUMÉ
          ===================================================== */}

          <aside className="h-fit rounded-[28px] border border-green-500/20 bg-green-500/10 p-5 backdrop-blur-xl sm:p-8 lg:sticky lg:top-28">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
              Récapitulatif
            </p>

            <h3 className="mt-3 text-3xl font-black text-white">
              Votre demande
            </h3>

            <div className="mt-8 space-y-6">

              {/* ÉVÉNEMENT */}
              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-400">
                  Événement
                </p>

                <p className="mt-2 text-base font-semibold text-white sm:text-lg">
                  {eventType || "Non renseigné"}
                </p>

              </div>

              {/* DATE */}
              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-400">
                  Date
                </p>

                <p className="mt-2 text-base font-semibold text-white sm:text-lg">
                  {date || "Non renseignée"}
                </p>

              </div>

              {/* LIEU */}
              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-400">
                  Lieu
                </p>

                <p className="mt-2 break-words text-base font-semibold text-white sm:text-lg">
                  {city || "Non renseigné"}
                </p>

              </div>

              {/* INVITÉS */}
              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-400">
                  Invités
                </p>

                <p className="mt-2 text-base font-semibold text-white sm:text-lg">
                  {guests || "Non renseigné"}
                </p>

              </div>

              {/* PRESTATIONS */}
              <div className="border-t border-white/10 pt-6">

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-400">
                  Prestations
                </p>

                {selectedServices.length === 0 ? (
                  <p className="mt-3 text-sm text-gray-400">
                    Aucune prestation sélectionnée.
                  </p>
                ) : (
                  <div className="mt-4 space-y-2">

                    {selectedServices.map((service) => (
                      <div
                        key={service}
                        className="flex items-center justify-between gap-4 rounded-xl bg-white/5 px-4 py-3"
                      >
                        <span className="text-sm text-white">
                          {service}
                        </span>

                        <span className="shrink-0 text-sm font-bold text-green-400">
                          {servicePrices[service]} €
                        </span>
                      </div>
                    ))}

                  </div>
                )}

              </div>

              {/* SUGGESTIONS */}
              {suggestions.length > 0 && (
                <div className="rounded-2xl border border-green-500/20 bg-black/20 p-5 sm:p-6">

                  <div className="flex items-center gap-2">

                    <Sparkles
                      size={19}
                      className="text-green-400"
                    />

                    <p className="font-bold text-white">
                      Nous vous conseillons aussi
                    </p>

                  </div>

                  <div className="mt-4 space-y-2">

                    {suggestions.map((item) => (
                      <p
                        key={item}
                        className="text-sm text-gray-300"
                      >
                        • {item}
                      </p>
                    ))}

                  </div>

                </div>
              )}

              {/* ESTIMATION */}
              <div className="rounded-2xl border border-white/5 bg-black/30 p-5 sm:p-6">

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-400">
                  Estimation
                </p>

                <p className="mt-3 text-4xl font-black text-white sm:text-5xl">
                  {estimatedPrice} €
                </p>

                <p className="mt-3 text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
                  Estimation indicative basée sur les prix de départ des
                  prestations sélectionnées. Le tarif final dépendra de
                  votre demande et fera l&apos;objet d&apos;un devis.
                </p>

              </div>

            </div>

          </aside>

        </div>

      </div>
    </section>
  );
}