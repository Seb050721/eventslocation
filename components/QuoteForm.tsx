"use client";

import { useMemo, useState } from "react";
import { CalendarDays, MapPin, Users, Sparkles } from "lucide-react";

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

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((s) => s !== service)
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

  return (
    <section
      id="contact"
      className="bg-[#050505] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
            Demande de devis
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Préparons votre événement
          </h2>

          <p className="mt-8 text-lg text-gray-400">
            Quelques informations suffisent pour recevoir un devis personnalisé.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.9fr]">

          {/* FORMULAIRE */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

            <div className="grid gap-6 md:grid-cols-2">

              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Nom"
                className="rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none"
              />

              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Prénom"
                className="rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresse e-mail"
                className="rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Téléphone"
                className="rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none"
              />
                            <div className="md:col-span-2">
                <label className="mb-3 block text-white font-medium">
                  Type d'événement
                </label>

                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none"
                >
                  <option value="">Sélectionnez...</option>
                  <option>Mariage</option>
                  <option>Anniversaire</option>
                  <option>Gender Reveal</option>
                  <option>Entreprise</option>
                  <option>Association</option>
                </select>
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 text-white font-medium">
                  <CalendarDays size={18} />
                  Date
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 text-white font-medium">
                  <Users size={18} />
                  Nombre d'invités
                </label>

                <input
                  type="number"
                  placeholder="120"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-3 flex items-center gap-2 text-white font-medium">
                  <MapPin size={18} />
                  Ville / Lieu de réception
                </label>

                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ex : Varzy"
                  className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none"
                />
              </div>

            </div>

            <div className="mt-12">

              <h3 className="text-2xl font-bold text-white">
                Prestations souhaitées
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">

                {services.map((service) => {

                  const checked =
                    selectedServices.includes(service);

                  return (

                    <button
                      type="button"
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`rounded-2xl border p-5 text-left transition ${
                        checked
                          ? "border-green-500 bg-green-500/15"
                          : "border-white/10 bg-white/5 hover:border-green-500/30"
                      }`}
                    >

                      <p className="font-semibold text-white">
                        {service}
                      </p>

                      <p className="mt-2 text-green-400">
                        À partir de {servicePrices[service]} €
                      </p>

                    </button>

                  );

                })}

              </div>

            </div>

            <div className="mt-12">

              <label className="mb-3 block text-white font-medium">
                Décrivez votre projet
              </label>

              <textarea
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Décrivez votre événement..."
                className="w-full rounded-2xl border border-white/10 bg-[#101010] p-5 text-white outline-none"
              />

            </div>
            <button
              type="button"
              className="mt-10 w-full rounded-full bg-gradient-to-r from-green-500 to-green-600 py-5 text-lg font-bold text-white transition duration-300 hover:scale-[1.02] hover:from-green-600 hover:to-green-700"
            >
              Demander mon devis
            </button>

          </div>

          {/* RÉSUMÉ */}

          <aside className="h-fit rounded-3xl border border-green-500/20 bg-green-500/10 p-8 backdrop-blur-xl lg:sticky lg:top-28">

            <h3 className="text-3xl font-black text-white">
              Votre demande
            </h3>

            <div className="mt-8 space-y-6">

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-green-400">
                  Événement
                </p>

                <p className="mt-2 text-lg text-white">
                  {eventType || "Non renseigné"}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-green-400">
                  Date
                </p>

                <p className="mt-2 text-lg text-white">
                  {date || "Non renseignée"}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-green-400">
                  Lieu
                </p>

                <p className="mt-2 text-lg text-white">
                  {city || "Non renseigné"}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-green-400">
                  Invités
                </p>

                <p className="mt-2 text-lg text-white">
                  {guests || "Non renseigné"}
                </p>

              </div>

              <div className="border-t border-white/10 pt-6">

                <p className="text-xs uppercase tracking-[0.3em] text-green-400">
                  Prestations
                </p>

                {selectedServices.length === 0 ? (

                  <p className="mt-3 text-gray-400">
                    Aucune prestation sélectionnée.
                  </p>

                ) : (

                  <div className="mt-4 space-y-3">

                    {selectedServices.map((service) => (

                      <div
                        key={service}
                        className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                      >

                        <span className="text-white">
                          {service}
                        </span>

                        <span className="font-bold text-green-400">
                          {servicePrices[service]} €
                        </span>

                      </div>

                    ))}

                  </div>

                )}

              </div>

              {suggestions.length > 0 && (

                <div className="rounded-2xl border border-green-500/20 bg-black/20 p-6">

                  <div className="mb-4 flex items-center gap-2">

                    <Sparkles
                      size={20}
                      className="text-green-400"
                    />

                    <p className="font-semibold text-white">
                      Nous vous conseillons aussi
                    </p>

                  </div>

                  <div className="space-y-2">

                    {suggestions.map((item) => (

                      <div
                        key={item}
                        className="text-gray-300"
                      >
                        • {item}
                      </div>

                    ))}

                  </div>

                </div>

              )}

              <div className="rounded-2xl bg-black/30 p-6">

                <p className="text-xs uppercase tracking-[0.3em] text-green-400">
                  Estimation
                </p>

                <p className="mt-3 text-5xl font-black text-white">
                  {estimatedPrice} €
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Estimation indicative basée sur les prestations
                  sélectionnées. Un devis personnalisé vous sera envoyé.
                </p>

              </div>

            </div>

          </aside>

        </div>

      </div>

    </section>

  );
}