import { NextResponse } from "next/server";
import { Resend } from "resend";

/* ============================================================
   SÉCURISATION HTML
============================================================ */

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* ============================================================
   FORMAT DATE FR
============================================================ */

function formatFrenchDate(value: unknown) {
  const dateString = String(value ?? "");

  if (!dateString) {
    return "Non renseignée";
  }

  try {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(
      new Date(`${dateString}T12:00:00`)
    );
  } catch {
    return dateString;
  }
}

/* ============================================================
   API POST /api/devis
============================================================ */

export async function POST(request: Request) {
  try {
    /* ========================================================
       CONFIGURATION RESEND
    ======================================================== */

    const apiKey =
      process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error(
        "RESEND_API_KEY absente"
      );

      return NextResponse.json(
        {
          error:
            "Configuration e-mail incomplète.",
        },
        {
          status: 500,
        }
      );
    }

    const resend =
      new Resend(apiKey);

    /* ========================================================
       DONNÉES REÇUES
    ======================================================== */

    const body =
      await request.json();

    const {
      lastname,
      firstname,
      email,
      phone,

      eventType,
      date,
      city,
      guests,

      selectedServices,

      /*
        MATÉRIEL ISSU DU CALENDRIER
      */

      selectedMaterial,
      selectedQuantity,

      /*
        DISPONIBILITÉS
      */

      fromAvailability,
      availabilityVerified,
      availabilityCheckedDate,

      /*
        MESSAGE
      */

      message,

      /*
        ESTIMATION
      */

      estimatedPrice,
      hasCustomPriceService,
      estimationLabel,
    } = body;

    /* ========================================================
       VALIDATION
    ======================================================== */

    if (
      !lastname ||
      !firstname ||
      !email ||
      !phone ||
      !eventType ||
      !date ||
      !city
    ) {
      return NextResponse.json(
        {
          error:
            "Merci de compléter les champs obligatoires.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !Array.isArray(
        selectedServices
      ) ||
      selectedServices.length ===
        0
    ) {
      return NextResponse.json(
        {
          error:
            "Merci de sélectionner au moins une prestation.",
        },
        {
          status: 400,
        }
      );
    }

    /* ========================================================
       SÉCURISATION DES VALEURS
    ======================================================== */

    const safeLastname =
      escapeHtml(lastname);

    const safeFirstname =
      escapeHtml(firstname);

    const safeEmail =
      escapeHtml(email);

    const safePhone =
      escapeHtml(phone);

    const safeEventType =
      escapeHtml(eventType);

    const safeDate =
      escapeHtml(
        formatFrenchDate(date)
      );

    const safeCity =
      escapeHtml(city);

    const safeGuests =
      escapeHtml(
        guests ||
          "Non renseigné"
      );

    const safeMessage =
      escapeHtml(
        message ||
          "Aucun message."
      );

    const safeServices =
      selectedServices
        .map(
          (service: string) =>
            escapeHtml(service)
        )
        .join(", ");

    /* ========================================================
       MATÉRIEL
    ======================================================== */

    const safeMaterial =
      selectedMaterial
        ? escapeHtml(
            selectedMaterial
          )
        : "";

    const safeQuantity =
      Number(
        selectedQuantity
      ) > 0
        ? Number(
            selectedQuantity
          )
        : null;

    /* ========================================================
       DISPONIBILITÉ
    ======================================================== */

    const safeCheckedDate =
      availabilityCheckedDate
        ? escapeHtml(
            formatFrenchDate(
              availabilityCheckedDate
            )
          )
        : "";

    const isFromAvailability =
      Boolean(
        fromAvailability
      );

    const isAvailabilityVerified =
      Boolean(
        availabilityVerified
      );

    /* ========================================================
       ESTIMATION
    ======================================================== */

    const safeEstimatedPrice =
      Number(
        estimatedPrice
      ) || 0;

    const safeHasCustomPriceService =
      Boolean(
        hasCustomPriceService
      );

    const safeEstimationLabel =
      escapeHtml(
        estimationLabel ||
          (safeHasCustomPriceService
            ? "Sur devis"
            : `${safeEstimatedPrice} €`)
      );

    /* ========================================================
       BLOC MATÉRIEL ADMIN
    ======================================================== */

    const materialAdminHtml =
      safeMaterial
        ? `
          <hr style="
            border:none;
            border-top:1px solid #e5e7eb;
            margin:28px 0;
          " />

          <h2>
            Matériel demandé
          </h2>

          <div style="
            padding:18px;
            background:#f9fafb;
            border-radius:12px;
            border:1px solid #e5e7eb;
          ">

            <p style="
              margin:0 0 8px;
            ">
              <strong>
                Matériel :
              </strong>

              ${safeMaterial}
            </p>

            <p style="
              margin:0;
            ">
              <strong>
                Quantité :
              </strong>

              ${
                safeQuantity ??
                1
              }
            </p>

          </div>
        `
        : "";

    /* ========================================================
       BLOC DISPONIBILITÉ ADMIN
    ======================================================== */

    const availabilityAdminHtml =
      isFromAvailability
        ? `
          <div style="
            margin-top:16px;
            padding:18px;
            border-radius:12px;
            ${
              isAvailabilityVerified
                ? `
                  background:#f0fdf4;
                  border:1px solid #bbf7d0;
                `
                : `
                  background:#fffbeb;
                  border:1px solid #fde68a;
                `
            }
          ">

            <p style="
              margin:0;
              font-weight:bold;
              color:${
                isAvailabilityVerified
                  ? "#15803d"
                  : "#a16207"
              };
            ">

              ${
                isAvailabilityVerified
                  ? "✓ Disponibilité vérifiée"
                  : "⚠ Disponibilité à confirmer"
              }

            </p>

            ${
              safeCheckedDate
                ? `
                  <p style="
                    margin:8px 0 0;
                    font-size:13px;
                    color:#4b5563;
                  ">
                    Date vérifiée :
                    ${safeCheckedDate}
                  </p>
                `
                : ""
            }

            ${
              !isAvailabilityVerified
                ? `
                  <p style="
                    margin:8px 0 0;
                    font-size:13px;
                    color:#92400e;
                  ">
                    Le client a modifié la date après
                    sa consultation du calendrier.
                  </p>
                `
                : ""
            }

          </div>
        `
        : "";

    /* ========================================================
       MAIL ADMIN
    ======================================================== */

    const adminMail =
      await resend.emails.send({
        from:
          "Event'S Location <devis@eventslocation.fr>",

        to: [
          "events.location@outlook.com",
        ],

        /*
          Quand tu cliques
          sur répondre :
          réponse directe au client.
        */

        replyTo: email,

        subject:
          `Nouvelle demande de devis - ${firstname} ${lastname}`,

        html: `
          <div style="
            font-family:Arial, Helvetica, sans-serif;
            background:#f6f7f8;
            padding:32px 16px;
            color:#1f2937;
          ">

            <div style="
              max-width:680px;
              margin:0 auto;
              background:white;
              border-radius:18px;
              overflow:hidden;
              border:1px solid #e5e7eb;
            ">

              <!-- HEADER -->

              <div style="
                background:#15803d;
                padding:28px;
                color:white;
              ">

                <p style="
                  margin:0;
                  font-size:12px;
                  font-weight:bold;
                  text-transform:uppercase;
                  letter-spacing:2px;
                  opacity:.8;
                ">
                  Event'S Location
                </p>

                <h1 style="
                  margin:8px 0 0;
                  font-size:28px;
                ">
                  Nouvelle demande de devis
                </h1>

              </div>

              <!-- CONTENU -->

              <div style="
                padding:28px;
              ">

                <!-- CLIENT -->

                <h2>
                  Coordonnées
                </h2>

                <p>
                  <strong>
                    Nom :
                  </strong>

                  ${safeLastname}
                </p>

                <p>
                  <strong>
                    Prénom :
                  </strong>

                  ${safeFirstname}
                </p>

                <p>
                  <strong>
                    E-mail :
                  </strong>

                  ${safeEmail}
                </p>

                <p>
                  <strong>
                    Téléphone :
                  </strong>

                  ${safePhone}
                </p>

                <hr style="
                  border:none;
                  border-top:1px solid #e5e7eb;
                  margin:28px 0;
                " />

                <!-- ÉVÉNEMENT -->

                <h2>
                  Événement
                </h2>

                <p>
                  <strong>
                    Type :
                  </strong>

                  ${safeEventType}
                </p>

                <p>
                  <strong>
                    Date :
                  </strong>

                  ${safeDate}
                </p>

                <p>
                  <strong>
                    Lieu :
                  </strong>

                  ${safeCity}
                </p>

                <p>
                  <strong>
                    Nombre d'invités :
                  </strong>

                  ${safeGuests}
                </p>

                <!-- MATÉRIEL -->

                ${materialAdminHtml}

                ${availabilityAdminHtml}

                <hr style="
                  border:none;
                  border-top:1px solid #e5e7eb;
                  margin:28px 0;
                " />

                <!-- PRESTATIONS -->

                <h2>
                  Prestations demandées
                </h2>

                <p>
                  ${safeServices}
                </p>

                <!-- ESTIMATION -->

                <div style="
                  margin-top:20px;
                  padding:18px;
                  background:#f0fdf4;
                  border-radius:12px;
                  border:1px solid #bbf7d0;
                ">

                  <p style="
                    margin:0;
                    font-size:13px;
                    color:#166534;
                  ">
                    Estimation indicative
                  </p>

                  <p style="
                    margin:4px 0 0;
                    font-size:28px;
                    font-weight:bold;
                    color:#15803d;
                  ">
                    ${safeEstimationLabel}
                  </p>

                  ${
                    safeHasCustomPriceService
                      ? `
                        <p style="
                          margin:8px 0 0;
                          font-size:12px;
                          color:#4b5563;
                        ">
                          Une ou plusieurs prestations
                          nécessitent un chiffrage personnalisé.
                        </p>
                      `
                      : ""
                  }

                </div>

                <hr style="
                  border:none;
                  border-top:1px solid #e5e7eb;
                  margin:28px 0;
                " />

                <!-- MESSAGE -->

                <h2>
                  Message du client
                </h2>

                <p style="
                  white-space:pre-line;
                  line-height:1.7;
                ">
                  ${safeMessage}
                </p>

                <!-- CTA -->

                <div style="
                  margin-top:28px;
                  padding:18px;
                  background:#111827;
                  color:white;
                  border-radius:12px;
                ">

                  <p style="
                    margin:0;
                  ">
                    Réponds directement à cet e-mail pour
                    contacter ${safeFirstname}
                    ${safeLastname}.
                  </p>

                </div>

              </div>

            </div>

          </div>
        `,
      });

    /* ========================================================
       ERREUR MAIL ADMIN
    ======================================================== */

    if (adminMail.error) {
      console.error(
        "Erreur mail Event'S Location :",
        adminMail.error
      );

      return NextResponse.json(
        {
          error:
            "Impossible d'envoyer votre demande pour le moment.",
        },
        {
          status: 500,
        }
      );
    }

    /* ========================================================
       BLOC MATÉRIEL CLIENT
    ======================================================== */

    const materialClientHtml =
      safeMaterial
        ? `
          <p>
            <strong>
              Matériel :
            </strong>

            ${safeMaterial}
            × ${safeQuantity ?? 1}
          </p>

          ${
            isFromAvailability
              ? `
                <p style="
                  color:${
                    isAvailabilityVerified
                      ? "#15803d"
                      : "#a16207"
                  };
                  font-weight:bold;
                ">

                  ${
                    isAvailabilityVerified
                      ? "✓ Disponibilité vérifiée lors de votre consultation"
                      : "⚠ Disponibilité à confirmer"
                  }

                </p>
              `
              : ""
          }
        `
        : "";

    /* ========================================================
       MAIL CLIENT
    ======================================================== */

    const clientMail =
      await resend.emails.send({
        from:
          "Event'S Location <devis@eventslocation.fr>",

        to: [
          email,
        ],

        replyTo:
          "events.location@outlook.com",

        subject:
          "Votre demande de devis - Event'S Location",

        html: `
          <div style="
            font-family:Arial, Helvetica, sans-serif;
            background:#f6f7f8;
            padding:32px 16px;
            color:#1f2937;
          ">

            <div style="
              max-width:650px;
              margin:0 auto;
              background:white;
              border-radius:18px;
              overflow:hidden;
              border:1px solid #e5e7eb;
            ">

              <div style="
                background:#15803d;
                padding:28px;
                color:white;
              ">

                <p style="
                  margin:0;
                  font-size:12px;
                  font-weight:bold;
                  text-transform:uppercase;
                  letter-spacing:2px;
                  opacity:.8;
                ">
                  Event'S Location
                </p>

                <h1 style="
                  margin:8px 0 0;
                  font-size:28px;
                ">
                  Merci ${safeFirstname} !
                </h1>

              </div>

              <div style="
                padding:28px;
                line-height:1.7;
              ">

                <p>
                  Nous avons bien reçu votre demande de devis.
                </p>

                <p>
                  Nous allons étudier votre demande et
                  confirmer définitivement la disponibilité
                  du matériel avant validation.
                </p>

                <div style="
                  margin:26px 0;
                  padding:20px;
                  background:#f0fdf4;
                  border-radius:12px;
                  border:1px solid #bbf7d0;
                ">

                  <p>
                    <strong>
                      Événement :
                    </strong>

                    ${safeEventType}
                  </p>

                  <p>
                    <strong>
                      Date :
                    </strong>

                    ${safeDate}
                  </p>

                  <p>
                    <strong>
                      Lieu :
                    </strong>

                    ${safeCity}
                  </p>

                  ${materialClientHtml}

                  <p>
                    <strong>
                      Prestations :
                    </strong>

                    ${safeServices}
                  </p>

                  <p>
                    <strong>
                      Estimation indicative :
                    </strong>

                    ${safeEstimationLabel}
                  </p>

                </div>

                ${
                  isAvailabilityVerified
                    ? `
                      <p style="
                        padding:14px 16px;
                        background:#f0fdf4;
                        border-left:4px solid #22c55e;
                        border-radius:8px;
                        color:#166534;
                      ">
                        Le matériel sélectionné était disponible
                        au moment de votre consultation.
                        La réservation sera définitive uniquement
                        après confirmation d'Event'S Location.
                      </p>
                    `
                    : ""
                }

                <p>
                  Nous reviendrons vers vous rapidement avec
                  une proposition adaptée à votre événement.
                </p>

                <p>
                  À très bientôt,
                </p>

                <p>
                  <strong>
                    Event'S Location
                  </strong>

                  <br />

                  06 43 89 45 70

                  <br />

                  events.location@outlook.com
                </p>

              </div>

            </div>

          </div>
        `,
      });

    /* ========================================================
       ERREUR MAIL CLIENT

       Le mail admin étant envoyé,
       la demande reste valide.
    ======================================================== */

    if (clientMail.error) {
      console.error(
        "Erreur confirmation client :",
        clientMail.error
      );
    }

    /* ========================================================
       SUCCÈS
    ======================================================== */

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(
      "Erreur API devis :",
      error
    );

    return NextResponse.json(
      {
        error:
          "Une erreur est survenue pendant l'envoi.",
      },
      {
        status: 500,
      }
    );
  }
}