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

const BUSINESS_EMAIL =
  "events.location@outlook.com";

const BUSINESS_PHONE =
  "06 43 89 45 70";

/* ============================================================
   COULEURS EVENT'S LOCATION
============================================================ */

const COLORS = {
  background: "#FBFAF8",
  backgroundSoft: "#F7F3EF",

  white: "#FFFFFF",

  text: "#1D1B1C",
  textSoft: "#716A6C",
  textMuted: "#9A9395",

  border: "#E9E2DD",

  coral: "#EF5A4F",
  coralDark: "#D94A41",
  coralLight: "#FFF0ED",

  teal: "#4A9692",
  tealDark: "#347A77",
  tealLight: "#EDF7F6",

  orange: "#F3A044",
  orangeLight: "#FFF5E9",

  red: "#DC2626",
  redLight: "#FEF2F2",
};

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
  const dateString =
    String(value ?? "");

  if (!dateString) {
    return "Non renseignée";
  }

  try {
    return new Intl.DateTimeFormat(
      "fr-FR",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    ).format(
      new Date(
        `${dateString}T12:00:00`
      )
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
       LIENS DE CONTACT
    ======================================================== */

    const mailtoClient =
      `mailto:${String(email)}`;

    const telClient =
      `tel:${String(phone)
        .replace(/\s+/g, "")}`;

    /* ========================================================
       MATÉRIEL ADMIN
    ======================================================== */

    const materialAdminHtml =
      safeMaterial
        ? `
          <div style="
            margin-top:18px;
            padding:18px 20px;
            background:${COLORS.backgroundSoft};
            border:1px solid ${COLORS.border};
            border-radius:14px;
          ">

            <p style="
              margin:0 0 7px;
              font-size:11px;
              line-height:1.4;
              font-weight:700;
              text-transform:uppercase;
              letter-spacing:1.2px;
              color:${COLORS.tealDark};
            ">
              Matériel sélectionné
            </p>

            <p style="
              margin:0;
              font-size:17px;
              line-height:1.5;
              font-weight:700;
              color:${COLORS.text};
            ">
              ${safeMaterial}
              × ${safeQuantity ?? 1}
            </p>

          </div>
        `
        : "";

    /* ========================================================
       DISPONIBILITÉ ADMIN
    ======================================================== */

    const availabilityAdminHtml =
      isFromAvailability
        ? `
          <div style="
            margin-top:14px;
            padding:16px 18px;
            border-radius:14px;
            background:${
              isAvailabilityVerified
                ? COLORS.tealLight
                : COLORS.orangeLight
            };
            border:1px solid ${
              isAvailabilityVerified
                ? "#CFE6E4"
                : "#F7DDB8"
            };
          ">

            <p style="
              margin:0;
              font-size:14px;
              font-weight:700;
              color:${
                isAvailabilityVerified
                  ? COLORS.tealDark
                  : "#A76519"
              };
            ">
              ${
                isAvailabilityVerified
                  ? "✓ Disponibilité vérifiée en ligne"
                  : "⚠ Disponibilité à confirmer"
              }
            </p>

            ${
              safeCheckedDate
                ? `
                  <p style="
                    margin:6px 0 0;
                    font-size:12px;
                    line-height:1.5;
                    color:${COLORS.textSoft};
                  ">
                    Consultation effectuée pour le
                    ${safeCheckedDate}
                  </p>
                `
                : ""
            }

          </div>
        `
        : "";

    /* ========================================================
       MATÉRIEL CLIENT
    ======================================================== */

    const materialClientHtml =
      safeMaterial
        ? `
          <tr>
            <td style="
              padding:11px 0;
              border-bottom:1px solid ${COLORS.border};
              color:${COLORS.textSoft};
              font-size:13px;
              vertical-align:top;
            ">
              Matériel
            </td>

            <td style="
              padding:11px 0;
              border-bottom:1px solid ${COLORS.border};
              color:${COLORS.text};
              font-size:13px;
              font-weight:700;
              text-align:right;
              vertical-align:top;
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
          BUSINESS_EMAIL,
        ],

        replyTo:
          String(email),

        subject:
          `Nouvelle demande de devis - ${firstname} ${lastname}`,

        html: `
<!doctype html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
</head>

<body style="
  margin:0;
  padding:0;
  background:${COLORS.background};
  font-family:Arial, Helvetica, sans-serif;
  color:${COLORS.text};
">

  <div style="
    width:100%;
    padding:28px 12px;
    box-sizing:border-box;
  ">

    <div style="
      max-width:680px;
      margin:0 auto;
      background:${COLORS.white};
      border:1px solid ${COLORS.border};
      border-radius:22px;
      overflow:hidden;
    ">

      <!-- HEADER -->

      <div style="
        padding:28px 24px 24px;
        background:${COLORS.white};
        text-align:center;
        border-bottom:1px solid ${COLORS.border};
      ">

        <img
          src="${LOGO_URL}"
          alt="Event'S Location"
          width="180"
          style="
            display:block;
            width:180px;
            max-width:70%;
            height:auto;
            margin:0 auto 20px;
          "
        >

        <div style="
          width:52px;
          height:4px;
          margin:0 auto 18px;
          border-radius:999px;
          background:${COLORS.coral};
        "></div>

        <p style="
          margin:0;
          font-size:11px;
          line-height:1.4;
          font-weight:700;
          text-transform:uppercase;
          letter-spacing:1.7px;
          color:${COLORS.tealDark};
        ">
          Nouvelle demande
        </p>

        <h1 style="
          margin:7px 0 0;
          font-size:26px;
          line-height:1.25;
          font-weight:800;
          color:${COLORS.text};
        ">
          Demande de devis reçue
        </h1>

        <p style="
          margin:9px 0 0;
          font-size:14px;
          line-height:1.6;
          color:${COLORS.textSoft};
        ">
          ${safeFirstname} ${safeLastname}
          souhaite obtenir une proposition.
        </p>

      </div>

      <!-- CONTENU -->

      <div style="
        padding:26px;
      ">

        <!-- ESTIMATION -->

        <div style="
          padding:20px;
          background:${COLORS.coralLight};
          border:1px solid #F7CBC6;
          border-radius:16px;
          text-align:center;
        ">

          <p style="
            margin:0;
            font-size:11px;
            line-height:1.4;
            color:${COLORS.coralDark};
            text-transform:uppercase;
            font-weight:700;
            letter-spacing:1.2px;
          ">
            Estimation indicative
          </p>

          <p style="
            margin:6px 0 0;
            font-size:31px;
            line-height:1.2;
            font-weight:800;
            color:${COLORS.coral};
          ">
            ${safeEstimationLabel}
          </p>

          ${
            safeHasCustomPriceService
              ? `
                <p style="
                  margin:9px 0 0;
                  font-size:12px;
                  line-height:1.6;
                  color:${COLORS.textSoft};
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
          margin:28px 0 12px;
          font-size:18px;
          line-height:1.4;
          color:${COLORS.text};
        ">
          Coordonnées du client
        </h2>

        <div style="
          padding:18px 20px;
          background:${COLORS.backgroundSoft};
          border:1px solid ${COLORS.border};
          border-radius:14px;
        ">

          <p style="
            margin:0 0 9px;
            font-size:14px;
            line-height:1.6;
          ">
            <strong>Nom :</strong>
            ${safeLastname}
          </p>

          <p style="
            margin:0 0 9px;
            font-size:14px;
            line-height:1.6;
          ">
            <strong>Prénom :</strong>
            ${safeFirstname}
          </p>

          <p style="
            margin:0 0 9px;
            font-size:14px;
            line-height:1.6;
          ">
            <strong>E-mail :</strong>
            <a
              href="${mailtoClient}"
              style="
                color:${COLORS.tealDark};
                text-decoration:none;
              "
            >
              ${safeEmail}
            </a>
          </p>

          <p style="
            margin:0;
            font-size:14px;
            line-height:1.6;
          ">
            <strong>Téléphone :</strong>
            <a
              href="${telClient}"
              style="
                color:${COLORS.tealDark};
                text-decoration:none;
              "
            >
              ${safePhone}
            </a>
          </p>

        </div>

        <!-- EVENEMENT -->

        <h2 style="
          margin:28px 0 12px;
          font-size:18px;
          line-height:1.4;
          color:${COLORS.text};
        ">
          Événement
        </h2>

        <div style="
          padding:18px 20px;
          background:${COLORS.backgroundSoft};
          border:1px solid ${COLORS.border};
          border-radius:14px;
        ">

          <p style="
            margin:0 0 9px;
            font-size:14px;
            line-height:1.6;
          ">
            <strong>Type :</strong>
            ${safeEventType}
          </p>

          <p style="
            margin:0 0 9px;
            font-size:14px;
            line-height:1.6;
          ">
            <strong>Date :</strong>
            ${safeDate}
          </p>

          <p style="
            margin:0 0 9px;
            font-size:14px;
            line-height:1.6;
          ">
            <strong>Lieu :</strong>
            ${safeCity}
          </p>

          <p style="
            margin:0;
            font-size:14px;
            line-height:1.6;
          ">
            <strong>Invités :</strong>
            ${safeGuests}
          </p>

        </div>

        ${materialAdminHtml}

        ${availabilityAdminHtml}

        <!-- PRESTATIONS -->

        <h2 style="
          margin:28px 0 12px;
          font-size:18px;
          line-height:1.4;
          color:${COLORS.text};
        ">
          Prestations demandées
        </h2>

        <div style="
          padding:18px 20px;
          background:${COLORS.tealLight};
          border:1px solid #CFE6E4;
          border-radius:14px;
        ">

          <p style="
            margin:0;
            font-size:14px;
            line-height:1.7;
            font-weight:700;
            color:${COLORS.tealDark};
          ">
            ${safeServices}
          </p>

        </div>

        <!-- MESSAGE -->

        <h2 style="
          margin:28px 0 12px;
          font-size:18px;
          line-height:1.4;
          color:${COLORS.text};
        ">
          Message du client
        </h2>

        <div style="
          padding:18px 20px;
          background:${COLORS.backgroundSoft};
          border:1px solid ${COLORS.border};
          border-radius:14px;
        ">

          <p style="
            margin:0;
            white-space:pre-line;
            font-size:14px;
            line-height:1.7;
            color:${COLORS.textSoft};
          ">
            ${safeMessage}
          </p>

        </div>

        <!-- ACTIONS -->

        <div style="
          margin-top:28px;
          padding:22px 18px;
          background:${COLORS.text};
          border-radius:16px;
          text-align:center;
        ">

          <p style="
            margin:0 0 16px;
            color:#FFFFFF;
            font-size:14px;
            line-height:1.6;
          ">
            Contactez directement
            ${safeFirstname}.
          </p>

          <a
            href="${mailtoClient}"
            style="
              display:inline-block;
              margin:3px;
              padding:12px 18px;
              background:${COLORS.coral};
              color:#FFFFFF;
              font-size:13px;
              font-weight:700;
              text-decoration:none;
              border-radius:10px;
            "
          >
            Répondre par e-mail
          </a>

          <a
            href="${telClient}"
            style="
              display:inline-block;
              margin:3px;
              padding:12px 18px;
              background:${COLORS.teal};
              color:#FFFFFF;
              font-size:13px;
              font-weight:700;
              text-decoration:none;
              border-radius:10px;
            "
          >
            Appeler le client
          </a>

        </div>

        <!-- FOOTER -->

        <div style="
          margin-top:28px;
          padding-top:20px;
          border-top:1px solid ${COLORS.border};
          text-align:center;
        ">

          <p style="
            margin:0;
            font-size:12px;
            color:${COLORS.textMuted};
          ">
            Demande envoyée depuis
            eventslocation.fr
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
          BUSINESS_EMAIL,

        subject:
          "Votre demande de devis - Event'S Location",

        html: `
<!doctype html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
</head>

<body style="
  margin:0;
  padding:0;
  background:${COLORS.background};
  font-family:Arial, Helvetica, sans-serif;
  color:${COLORS.text};
">

  <div style="
    width:100%;
    padding:28px 12px;
    box-sizing:border-box;
  ">

    <div style="
      max-width:650px;
      margin:0 auto;
      background:${COLORS.white};
      border:1px solid ${COLORS.border};
      border-radius:22px;
      overflow:hidden;
    ">

      <!-- HEADER -->

      <div style="
        padding:30px 24px 26px;
        background:${COLORS.white};
        text-align:center;
        border-bottom:1px solid ${COLORS.border};
      ">

        <img
          src="${LOGO_URL}"
          alt="Event'S Location"
          width="180"
          style="
            display:block;
            width:180px;
            max-width:70%;
            height:auto;
            margin:0 auto 20px;
          "
        >

        <div style="
          width:52px;
          height:4px;
          margin:0 auto 18px;
          border-radius:999px;
          background:${COLORS.coral};
        "></div>

        <p style="
          margin:0;
          font-size:11px;
          line-height:1.4;
          font-weight:700;
          text-transform:uppercase;
          letter-spacing:1.6px;
          color:${COLORS.tealDark};
        ">
          Demande bien reçue
        </p>

        <h1 style="
          margin:8px 0 0;
          font-size:27px;
          line-height:1.3;
          font-weight:800;
          color:${COLORS.text};
        ">
          Merci ${safeFirstname} !
        </h1>

        <p style="
          margin:10px auto 0;
          max-width:480px;
          font-size:14px;
          line-height:1.7;
          color:${COLORS.textSoft};
        ">
          Votre demande de devis a bien été
          transmise à Event'S Location.
        </p>

      </div>

      <!-- CONTENU -->

      <div style="
        padding:26px;
      ">

        <!-- CONFIRMATION -->

        <div style="
          padding:17px 18px;
          background:${COLORS.tealLight};
          border:1px solid #CFE6E4;
          border-radius:14px;
        ">

          <p style="
            margin:0;
            font-size:14px;
            line-height:1.6;
            font-weight:700;
            color:${COLORS.tealDark};
          ">
            ✓ Votre demande est bien enregistrée
          </p>

          <p style="
            margin:6px 0 0;
            font-size:13px;
            line-height:1.6;
            color:${COLORS.textSoft};
          ">
            Nous allons l'étudier et revenir
            vers vous avec une proposition adaptée
            à votre événement.
          </p>

        </div>

        <!-- RÉCAP -->

        <h2 style="
          margin:28px 0 12px;
          font-size:18px;
          line-height:1.4;
          color:${COLORS.text};
        ">
          Récapitulatif de votre demande
        </h2>

        <div style="
          padding:20px;
          background:${COLORS.backgroundSoft};
          border:1px solid ${COLORS.border};
          border-radius:14px;
        ">

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
                padding:11px 0;
                border-bottom:1px solid ${COLORS.border};
                color:${COLORS.textSoft};
                font-size:13px;
              ">
                Événement
              </td>

              <td style="
                padding:11px 0;
                border-bottom:1px solid ${COLORS.border};
                color:${COLORS.text};
                font-size:13px;
                font-weight:700;
                text-align:right;
              ">
                ${safeEventType}
              </td>

            </tr>

            <tr>

              <td style="
                padding:11px 0;
                border-bottom:1px solid ${COLORS.border};
                color:${COLORS.textSoft};
                font-size:13px;
              ">
                Date
              </td>

              <td style="
                padding:11px 0;
                border-bottom:1px solid ${COLORS.border};
                color:${COLORS.text};
                font-size:13px;
                font-weight:700;
                text-align:right;
              ">
                ${safeDate}
              </td>

            </tr>

            <tr>

              <td style="
                padding:11px 0;
                border-bottom:1px solid ${COLORS.border};
                color:${COLORS.textSoft};
                font-size:13px;
              ">
                Lieu
              </td>

              <td style="
                padding:11px 0;
                border-bottom:1px solid ${COLORS.border};
                color:${COLORS.text};
                font-size:13px;
                font-weight:700;
                text-align:right;
              ">
                ${safeCity}
              </td>

            </tr>

            ${materialClientHtml}

          </table>

          <div style="
            padding-top:16px;
          ">

            <p style="
              margin:0 0 7px;
              font-size:12px;
              color:${COLORS.textMuted};
            ">
              Prestations demandées
            </p>

            <p style="
              margin:0;
              font-size:14px;
              line-height:1.6;
              font-weight:700;
              color:${COLORS.text};
            ">
              ${safeServices}
            </p>

          </div>

        </div>

        <!-- ESTIMATION -->

        <div style="
          margin-top:20px;
          padding:21px;
          text-align:center;
          background:${COLORS.coralLight};
          border:1px solid #F7CBC6;
          border-radius:14px;
        ">

          <p style="
            margin:0;
            font-size:11px;
            line-height:1.4;
            color:${COLORS.coralDark};
            text-transform:uppercase;
            font-weight:700;
            letter-spacing:1.2px;
          ">
            Estimation indicative
          </p>

          <p style="
            margin:6px 0 0;
            font-size:31px;
            line-height:1.2;
            font-weight:800;
            color:${COLORS.coral};
          ">
            ${safeEstimationLabel}
          </p>

          <p style="
            margin:9px 0 0;
            font-size:12px;
            line-height:1.6;
            color:${COLORS.textSoft};
          ">
            Le tarif définitif sera confirmé
            dans votre devis personnalisé.
          </p>

        </div>

        <!-- DISPONIBILITÉ -->

        ${
          isAvailabilityVerified
            ? `
              <div style="
                margin-top:20px;
                padding:17px 18px;
                background:${COLORS.tealLight};
                border:1px solid #CFE6E4;
                border-left:4px solid ${COLORS.teal};
                border-radius:12px;
              ">

                <p style="
                  margin:0;
                  color:${COLORS.tealDark};
                  font-size:14px;
                  line-height:1.5;
                  font-weight:700;
                ">
                  ✓ Disponibilité vérifiée
                </p>

                <p style="
                  margin:6px 0 0;
                  color:${COLORS.textSoft};
                  font-size:12px;
                  line-height:1.6;
                ">
                  Le matériel sélectionné était disponible
                  au moment de votre consultation.
                  La réservation sera définitive après
                  confirmation par Event'S Location.
                </p>

              </div>
            `
            : ""
        }

        <!-- MESSAGE CLIENT -->

        ${
          safeMessage !== "Aucun message."
            ? `
              <h2 style="
                margin:28px 0 12px;
                font-size:18px;
                line-height:1.4;
                color:${COLORS.text};
              ">
                Votre message
              </h2>

              <div style="
                padding:17px 18px;
                background:${COLORS.backgroundSoft};
                border:1px solid ${COLORS.border};
                border-radius:14px;
              ">

                <p style="
                  margin:0;
                  white-space:pre-line;
                  font-size:13px;
                  line-height:1.7;
                  color:${COLORS.textSoft};
                ">
                  ${safeMessage}
                </p>

              </div>
            `
            : ""
        }

        <!-- CTA -->

        <div style="
          margin-top:28px;
          text-align:center;
        ">

          <a
            href="${WEBSITE_URL}"
            style="
              display:inline-block;
              padding:13px 22px;
              background:${COLORS.coral};
              color:#FFFFFF;
              text-decoration:none;
              font-size:14px;
              font-weight:700;
              border-radius:10px;
            "
          >
            Visiter Event'S Location
          </a>

        </div>

        <!-- CONTACT -->

        <div style="
          margin-top:30px;
          padding:20px;
          background:${COLORS.tealLight};
          border-radius:14px;
          text-align:center;
        ">

          <p style="
            margin:0;
            font-size:14px;
            font-weight:700;
            color:${COLORS.text};
          ">
            Une question ?
          </p>

          <p style="
            margin:7px 0 0;
            font-size:13px;
            line-height:1.8;
            color:${COLORS.textSoft};
          ">

            <a
              href="tel:+33643894570"
              style="
                color:${COLORS.tealDark};
                text-decoration:none;
                font-weight:700;
              "
            >
              ${BUSINESS_PHONE}
            </a>

            <br>

            <a
              href="mailto:${BUSINESS_EMAIL}"
              style="
                color:${COLORS.tealDark};
                text-decoration:none;
                font-weight:700;
              "
            >
              ${BUSINESS_EMAIL}
            </a>

          </p>

        </div>

        <!-- FOOTER -->

        <div style="
          margin-top:30px;
          padding-top:22px;
          border-top:1px solid ${COLORS.border};
          text-align:center;
        ">

          <img
            src="${LOGO_URL}"
            alt="Event'S Location"
            width="110"
            style="
              display:block;
              width:110px;
              max-width:45%;
              height:auto;
              margin:0 auto 12px;
            "
          >

          <p style="
            margin:0;
            font-size:13px;
            font-weight:700;
            color:${COLORS.text};
          ">
            Event'S Location
          </p>

          <p style="
            margin:5px 0 0;
            font-size:12px;
            color:${COLORS.textMuted};
          ">
            Donnez vie à vos événements.
          </p>

          <p style="
            margin:12px 0 0;
            font-size:11px;
            line-height:1.6;
            color:${COLORS.textMuted};
          ">
            Location de matériel événementiel
            en Nièvre, Yonne et Cher.
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