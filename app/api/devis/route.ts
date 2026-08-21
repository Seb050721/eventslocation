import { NextResponse } from "next/server";
import { Resend } from "resend";

/* ============================================================
   CONFIGURATION
============================================================ */

export const dynamic = "force-dynamic";

const LOGO_URL =
  "https://www.eventslocation.fr/Logo/Logo.png";

const WEBSITE_URL =
  "https://www.eventslocation.fr";

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
   VALIDATION E-MAIL
============================================================ */

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    value
  );
}

/* ============================================================
   API POST /api/devis
============================================================ */

export async function POST(
  request: Request
) {
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
       DONNÉES
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

      selectedMaterial,
      selectedQuantity,

      fromAvailability,
      availabilityVerified,
      availabilityCheckedDate,

      message,

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
      !isValidEmail(
        String(email)
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Adresse e-mail invalide.",
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
       SÉCURISATION
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
          (service: unknown) =>
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

    const quantity =
      Number(
        selectedQuantity
      );

    const safeQuantity =
      Number.isFinite(quantity) &&
      quantity > 0
        ? Math.floor(quantity)
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
          (
            safeHasCustomPriceService
              ? "Sur devis"
              : `${safeEstimatedPrice} €`
          )
      );

    /* ========================================================
       BLOCS HTML COMMUNS
    ======================================================== */

    const materialAdminHtml =
      safeMaterial
        ? `
          <div style="
            margin-top:20px;
            padding:18px;
            border:1px solid #e5e7eb;
            border-radius:14px;
            background:#f9fafb;
          ">
            <p style="
              margin:0 0 6px;
              font-size:12px;
              font-weight:bold;
              text-transform:uppercase;
              letter-spacing:1px;
              color:#6b7280;
            ">
              Matériel demandé
            </p>

            <p style="
              margin:0;
              font-size:17px;
              font-weight:bold;
              color:#111827;
            ">
              ${safeMaterial}
              × ${safeQuantity ?? 1}
            </p>
          </div>
        `
        : "";

    const availabilityAdminHtml =
      isFromAvailability
        ? `
          <div style="
            margin-top:14px;
            padding:16px;
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
                    margin:6px 0 0;
                    font-size:13px;
                    color:#4b5563;
                  ">
                    Date vérifiée :
                    ${safeCheckedDate}
                  </p>
                `
                : ""
            }

          </div>
        `
        : "";

    const materialClientHtml =
      safeMaterial
        ? `
          <tr>
            <td style="
              padding:10px 0;
              color:#6b7280;
              font-size:14px;
              vertical-align:top;
            ">
              Matériel
            </td>

            <td style="
              padding:10px 0;
              color:#111827;
              font-size:14px;
              font-weight:bold;
              text-align:right;
            ">
              ${safeMaterial}
              × ${safeQuantity ?? 1}
            </td>
          </tr>
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

        replyTo:
          String(email),

        subject:
          `Nouvelle demande de devis - ${firstname} ${lastname}`,

        html: `
<!doctype html>
<html lang="fr">
<body style="
  margin:0;
  padding:0;
  background:#f3f4f6;
  font-family:Arial, Helvetica, sans-serif;
  color:#111827;
">

  <div style="
    width:100%;
    padding:24px 12px;
    box-sizing:border-box;
  ">

    <div style="
      max-width:680px;
      margin:0 auto;
      background:#ffffff;
      border-radius:20px;
      overflow:hidden;
      border:1px solid #e5e7eb;
    ">

      <!-- HEADER -->

      <div style="
        background:#0b0b0b;
        padding:24px;
        text-align:center;
      ">

        <img
          src="${LOGO_URL}"
          alt="Event'S Location"
          width="90"
          style="
            display:block;
            margin:0 auto 14px;
            max-width:90px;
            height:auto;
          "
        />

        <p style="
          margin:0;
          font-size:11px;
          font-weight:bold;
          text-transform:uppercase;
          letter-spacing:2px;
          color:#22c55e;
        ">
          Event'S Location
        </p>

        <h1 style="
          margin:8px 0 0;
          font-size:26px;
          line-height:1.2;
          color:#ffffff;
        ">
          Nouvelle demande de devis
        </h1>

      </div>

      <!-- CONTENU -->

      <div style="
        padding:26px;
      ">

        <div style="
          padding:18px;
          background:#f0fdf4;
          border:1px solid #bbf7d0;
          border-radius:14px;
          margin-bottom:24px;
        ">

          <p style="
            margin:0;
            font-size:12px;
            color:#166534;
            text-transform:uppercase;
            font-weight:bold;
            letter-spacing:1px;
          ">
            Estimation indicative
          </p>

          <p style="
            margin:6px 0 0;
            font-size:30px;
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

        <!-- CLIENT -->

        <h2 style="
          margin:0 0 14px;
          font-size:19px;
          color:#111827;
        ">
          Coordonnées du client
        </h2>

        <div style="
          padding:18px;
          background:#f9fafb;
          border-radius:14px;
          border:1px solid #e5e7eb;
        ">

          <p style="margin:0 0 8px;">
            <strong>Nom :</strong>
            ${safeLastname}
          </p>

          <p style="margin:0 0 8px;">
            <strong>Prénom :</strong>
            ${safeFirstname}
          </p>

          <p style="margin:0 0 8px;">
            <strong>E-mail :</strong>
            ${safeEmail}
          </p>

          <p style="margin:0;">
            <strong>Téléphone :</strong>
            ${safePhone}
          </p>

        </div>

        <!-- EVENEMENT -->

        <h2 style="
          margin:26px 0 14px;
          font-size:19px;
        ">
          Événement
        </h2>

        <div style="
          padding:18px;
          background:#f9fafb;
          border-radius:14px;
          border:1px solid #e5e7eb;
        ">

          <p style="margin:0 0 8px;">
            <strong>Type :</strong>
            ${safeEventType}
          </p>

          <p style="margin:0 0 8px;">
            <strong>Date :</strong>
            ${safeDate}
          </p>

          <p style="margin:0 0 8px;">
            <strong>Lieu :</strong>
            ${safeCity}
          </p>

          <p style="margin:0;">
            <strong>Invités :</strong>
            ${safeGuests}
          </p>

        </div>

        ${materialAdminHtml}

        ${availabilityAdminHtml}

        <!-- PRESTATIONS -->

        <h2 style="
          margin:26px 0 14px;
          font-size:19px;
        ">
          Prestations demandées
        </h2>

        <div style="
          padding:18px;
          background:#f9fafb;
          border-radius:14px;
          border:1px solid #e5e7eb;
        ">

          <p style="
            margin:0;
            line-height:1.6;
          ">
            ${safeServices}
          </p>

        </div>

        <!-- MESSAGE -->

        <h2 style="
          margin:26px 0 14px;
          font-size:19px;
        ">
          Message du client
        </h2>

        <div style="
          padding:18px;
          background:#f9fafb;
          border-radius:14px;
          border:1px solid #e5e7eb;
        ">

          <p style="
            margin:0;
            white-space:pre-line;
            line-height:1.7;
          ">
            ${safeMessage}
          </p>

        </div>

        <!-- ACTION -->

        <div style="
          margin-top:26px;
          padding:18px;
          background:#111827;
          border-radius:14px;
          text-align:center;
        ">

          <p style="
            margin:0 0 14px;
            color:#ffffff;
            font-size:14px;
          ">
            Réponds directement à cet e-mail
            pour contacter ${safeFirstname}.
          </p>

          <a
            href="${WEBSITE_URL}"
            style="
              display:inline-block;
              padding:12px 18px;
              background:#22c55e;
              color:#ffffff;
              font-weight:bold;
              text-decoration:none;
              border-radius:10px;
            "
          >
            Voir le site
          </a>

        </div>

      </div>

    </div>

  </div>

</body>
</html>
        `,
      });

    /* ========================================================
       ERREUR ADMIN
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
       MAIL CLIENT
    ======================================================== */

    const clientMail =
      await resend.emails.send({
        from:
          "Event'S Location <devis@eventslocation.fr>",

        to: [
          String(email),
        ],

        replyTo:
          "events.location@outlook.com",

        subject:
          "Votre demande de devis - Event'S Location",

        html: `
<!doctype html>
<html lang="fr">
<body style="
  margin:0;
  padding:0;
  background:#f3f4f6;
  font-family:Arial, Helvetica, sans-serif;
  color:#111827;
">

  <div style="
    width:100%;
    padding:24px 12px;
    box-sizing:border-box;
  ">

    <div style="
      max-width:650px;
      margin:0 auto;
      background:#ffffff;
      border-radius:20px;
      overflow:hidden;
      border:1px solid #e5e7eb;
    ">

      <!-- HEADER -->

      <div style="
        background:#0b0b0b;
        padding:26px;
        text-align:center;
      ">

        <img
          src="${LOGO_URL}"
          alt="Event'S Location"
          width="92"
          style="
            display:block;
            margin:0 auto 14px;
            max-width:92px;
            height:auto;
          "
        />

        <p style="
          margin:0;
          font-size:11px;
          font-weight:bold;
          text-transform:uppercase;
          letter-spacing:2px;
          color:#22c55e;
        ">
          Event'S Location
        </p>

        <h1 style="
          margin:8px 0 0;
          color:#ffffff;
          font-size:26px;
          line-height:1.2;
        ">
          Merci ${safeFirstname} !
        </h1>

      </div>

      <!-- CONTENU -->

      <div style="
        padding:26px;
        line-height:1.7;
      ">

        <p style="
          margin:0 0 12px;
          font-size:16px;
        ">
          Nous avons bien reçu votre demande de devis.
        </p>

        <p style="
          margin:0 0 24px;
          color:#4b5563;
        ">
          Notre équipe va l&apos;étudier et revenir vers vous rapidement
          avec une proposition adaptée à votre événement.
        </p>

        <!-- RECAP -->

        <div style="
          padding:20px;
          background:#f9fafb;
          border:1px solid #e5e7eb;
          border-radius:14px;
        ">

          <p style="
            margin:0 0 14px;
            font-size:12px;
            font-weight:bold;
            text-transform:uppercase;
            letter-spacing:1px;
            color:#22c55e;
          ">
            Récapitulatif
          </p>

          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="
              width:100%;
              border-collapse:collapse;
            "
          >

            <tr>
              <td style="
                padding:10px 0;
                color:#6b7280;
                font-size:14px;
              ">
                Événement
              </td>

              <td style="
                padding:10px 0;
                color:#111827;
                font-size:14px;
                font-weight:bold;
                text-align:right;
              ">
                ${safeEventType}
              </td>
            </tr>

            <tr>
              <td style="
                padding:10px 0;
                color:#6b7280;
                font-size:14px;
              ">
                Date
              </td>

              <td style="
                padding:10px 0;
                color:#111827;
                font-size:14px;
                font-weight:bold;
                text-align:right;
              ">
                ${safeDate}
              </td>
            </tr>

            <tr>
              <td style="
                padding:10px 0;
                color:#6b7280;
                font-size:14px;
              ">
                Lieu
              </td>

              <td style="
                padding:10px 0;
                color:#111827;
                font-size:14px;
                font-weight:bold;
                text-align:right;
              ">
                ${safeCity}
              </td>
            </tr>

            ${materialClientHtml}

          </table>

          <div style="
            margin-top:14px;
            padding-top:14px;
            border-top:1px solid #e5e7eb;
          ">

            <p style="
              margin:0 0 6px;
              font-size:13px;
              color:#6b7280;
            ">
              Prestations
            </p>

            <p style="
              margin:0;
              font-size:14px;
              font-weight:bold;
              color:#111827;
            ">
              ${safeServices}
            </p>

          </div>

        </div>

        <!-- ESTIMATION -->

        <div style="
          margin-top:20px;
          padding:20px;
          text-align:center;
          background:#f0fdf4;
          border:1px solid #bbf7d0;
          border-radius:14px;
        ">

          <p style="
            margin:0;
            font-size:12px;
            color:#166534;
            text-transform:uppercase;
            font-weight:bold;
            letter-spacing:1px;
          ">
            Estimation indicative
          </p>

          <p style="
            margin:6px 0 0;
            font-size:30px;
            font-weight:bold;
            color:#15803d;
          ">
            ${safeEstimationLabel}
          </p>

          <p style="
            margin:8px 0 0;
            font-size:12px;
            color:#4b5563;
          ">
            Le tarif définitif sera confirmé dans votre devis.
          </p>

        </div>

        ${
          isAvailabilityVerified
            ? `
              <div style="
                margin-top:20px;
                padding:16px;
                background:#f0fdf4;
                border-left:4px solid #22c55e;
                border-radius:10px;
              ">

                <p style="
                  margin:0;
                  color:#166534;
                  font-size:14px;
                  font-weight:bold;
                ">
                  ✓ Disponibilité vérifiée
                </p>

                <p style="
                  margin:6px 0 0;
                  color:#4b5563;
                  font-size:13px;
                ">
                  Le matériel sélectionné était disponible
                  lors de votre consultation.
                  La réservation sera définitive après
                  confirmation d&apos;Event&apos;S Location.
                </p>

              </div>
            `
            : ""
        }

        <!-- CTA -->

        <div style="
          margin-top:26px;
          text-align:center;
        ">

          <a
            href="${WEBSITE_URL}"
            style="
              display:inline-block;
              padding:13px 22px;
              background:#16a34a;
              color:#ffffff;
              text-decoration:none;
              font-weight:bold;
              border-radius:10px;
            "
          >
            Visiter notre site
          </a>

        </div>

        <!-- FOOTER -->

        <div style="
          margin-top:30px;
          padding-top:22px;
          border-top:1px solid #e5e7eb;
          text-align:center;
        ">

          <p style="
            margin:0;
            font-weight:bold;
            color:#111827;
          ">
            Event'S Location
          </p>

          <p style="
            margin:6px 0 0;
            font-size:13px;
            color:#6b7280;
          ">
            Location de matériel événementiel
          </p>

          <p style="
            margin:10px 0 0;
            font-size:13px;
            color:#4b5563;
          ">
            06 43 89 45 70
            <br />
            events.location@outlook.com
          </p>

        </div>

      </div>

    </div>

  </div>

</body>
</html>
        `,
      });

    /* ========================================================
       ERREUR CLIENT
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