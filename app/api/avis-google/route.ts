import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const WEBSITE_URL =
  "https://www.eventslocation.fr";

const LOGO_URL =
  "https://www.eventslocation.fr/Logo/Logo.png";

const BUSINESS_EMAIL =
  "events.location@outlook.com";

const BUSINESS_PHONE =
  "06 43 89 45 70";

/* ============================================================
   OUTILS
============================================================ */

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function extractField(
  description: string,
  fieldName: string
) {
  const regex = new RegExp(
    `^${fieldName}\\s*:\\s*(.+)$`,
    "im"
  );

  const match =
    description.match(regex);

  return match?.[1]?.trim() ?? "";
}

function extractEmail(
  description: string
) {
  return extractField(
    description,
    "Email"
  );
}

function extractClientName(
  description: string
) {
  return extractField(
    description,
    "Client"
  );
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    value
  );
}

function hasReviewAlreadyBeenSent(
  description: string
) {
  return /Avis Google envoye\s*:/i.test(
    description
  );
}

function formatFrenchDate(
  value: Date
) {
  return new Intl.DateTimeFormat(
    "fr-FR",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  ).format(value);
}

/* ============================================================
   DATE J-2
============================================================ */

function getTargetDayRange() {
  const now =
    new Date();

  const target =
    new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

  target.setDate(
    target.getDate() - 2
  );

  const start =
    new Date(
      target.getFullYear(),
      target.getMonth(),
      target.getDate(),
      0,
      0,
      0,
      0
    );

  const end =
    new Date(
      target.getFullYear(),
      target.getMonth(),
      target.getDate(),
      23,
      59,
      59,
      999
    );

  return {
    target,
    start,
    end,
  };
}

/* ============================================================
   GET /api/avis-google
============================================================ */

export async function GET(
  request: Request
) {
  try {
    /* ========================================================
       SÉCURITÉ CRON
    ======================================================== */

    const cronSecret =
      process.env.CRON_SECRET;

    if (!cronSecret) {
      console.error(
        "CRON_SECRET absente"
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Configuration CRON_SECRET absente.",
        },
        {
          status: 500,
        }
      );
    }

    const authorization =
      request.headers.get(
        "authorization"
      );

    if (
      authorization !==
      `Bearer ${cronSecret}`
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Accès non autorisé.",
        },
        {
          status: 401,
        }
      );
    }

    /* ========================================================
       VARIABLES
    ======================================================== */

    const calendarId =
      process.env.GOOGLE_CALENDAR_ID;

    const serviceAccountEmail =
      process.env
        .GOOGLE_SERVICE_ACCOUNT_EMAIL;

    const privateKey =
      process.env.GOOGLE_PRIVATE_KEY?.replace(
        /\\n/g,
        "\n"
      );

    const resendApiKey =
      process.env.RESEND_API_KEY;

    const reviewUrl =
      process.env.GOOGLE_REVIEW_URL;

    if (
      !calendarId ||
      !serviceAccountEmail ||
      !privateKey
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Configuration Google Calendar incomplète.",
        },
        {
          status: 500,
        }
      );
    }

    if (!resendApiKey) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Configuration Resend incomplète.",
        },
        {
          status: 500,
        }
      );
    }

    if (!reviewUrl) {
      return NextResponse.json(
        {
          success: false,
          error:
            "GOOGLE_REVIEW_URL absente.",
        },
        {
          status: 500,
        }
      );
    }

    /* ========================================================
       GOOGLE AUTH
    ======================================================== */

    const auth =
      new google.auth.JWT({
        email:
          serviceAccountEmail,

        key:
          privateKey,

        scopes: [
          "https://www.googleapis.com/auth/calendar",
        ],
      });

    const calendar =
      google.calendar({
        version: "v3",
        auth,
      });

    /* ========================================================
       DATE J-2
    ======================================================== */

    const {
      target,
      start,
      end,
    } =
      getTargetDayRange();

    /* ========================================================
       RÉCUPÉRATION DES ÉVÉNEMENTS
    ======================================================== */

    const response =
      await calendar.events.list({
        calendarId,

        timeMin:
          start.toISOString(),

        timeMax:
          end.toISOString(),

        singleEvents: true,

        orderBy:
          "startTime",

        showDeleted: false,

        maxResults: 250,
      });

    const events =
      response.data.items ?? [];

    const resend =
      new Resend(
        resendApiKey
      );

    let sentCount = 0;
    let ignoredCount = 0;
    let errorCount = 0;

    const results: Array<{
      eventId: string;
      title: string;
      email?: string;
      status: string;
    }> = [];

    /* ========================================================
       TRAITEMENT
    ======================================================== */

    for (const event of events) {
      if (
        event.status ===
        "cancelled"
      ) {
        ignoredCount++;

        continue;
      }

      const eventId =
        event.id;

      if (!eventId) {
        ignoredCount++;

        continue;
      }

      const description =
        event.description ?? "";

      if (
        hasReviewAlreadyBeenSent(
          description
        )
      ) {
        ignoredCount++;

        results.push({
          eventId,
          title:
            event.summary ??
            "Sans titre",
          status:
            "Déjà envoyé",
        });

        continue;
      }

      const clientEmail =
        extractEmail(
          description
        );

      if (
        !clientEmail ||
        !isValidEmail(
          clientEmail
        )
      ) {
        ignoredCount++;

        results.push({
          eventId,
          title:
            event.summary ??
            "Sans titre",
          status:
            "Aucun e-mail valide",
        });

        continue;
      }

      const clientName =
        extractClientName(
          description
        );

      const safeClientName =
        escapeHtml(
          clientName ||
            "Bonjour"
        );

      const safeEventTitle =
        escapeHtml(
          event.summary ??
            "votre événement"
        );

      /* ======================================================
         MAIL
      ====================================================== */

      const mail =
        await resend.emails.send({
          from:
            "Event'S Location <devis@eventslocation.fr>",

          to: [
            clientEmail,
          ],

          replyTo:
            BUSINESS_EMAIL,

          subject:
            "Votre avis compte pour Event'S Location",

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
  background:#FBFAF8;
  font-family:Arial, Helvetica, sans-serif;
  color:#1D1B1C;
">

  <div style="
    width:100%;
    padding:28px 12px;
    box-sizing:border-box;
  ">

    <div style="
      max-width:620px;
      margin:0 auto;
      background:#FFFFFF;
      border:1px solid #E9E2DD;
      border-radius:22px;
      overflow:hidden;
    ">

      <!-- HEADER -->

      <div style="
        padding:30px 24px 25px;
        text-align:center;
        border-bottom:1px solid #E9E2DD;
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
          background:#EF5A4F;
        "></div>

        <p style="
          margin:0;
          font-size:11px;
          font-weight:700;
          text-transform:uppercase;
          letter-spacing:1.5px;
          color:#347A77;
        ">
          Votre retour compte
        </p>

        <h1 style="
          margin:8px 0 0;
          font-size:27px;
          line-height:1.3;
          color:#1D1B1C;
        ">
          Merci pour votre confiance
        </h1>

      </div>

      <!-- CONTENU -->

      <div style="
        padding:28px 26px;
        text-align:center;
      ">

        <p style="
          margin:0 0 14px;
          font-size:16px;
          line-height:1.7;
          color:#1D1B1C;
        ">
          ${
            clientName
              ? `Bonjour ${safeClientName},`
              : "Bonjour,"
          }
        </p>

        <p style="
          margin:0 auto 16px;
          max-width:500px;
          font-size:15px;
          line-height:1.75;
          color:#716A6C;
        ">
          Nous espérons que vous avez passé
          un excellent moment lors de
          <strong style="
            color:#1D1B1C;
          ">
            ${safeEventTitle}
          </strong>.
        </p>

        <p style="
          margin:0 auto 24px;
          max-width:500px;
          font-size:15px;
          line-height:1.75;
          color:#716A6C;
        ">
          Votre retour nous aide à faire
          connaître Event'S Location et permet
          aux futurs clients de découvrir
          votre expérience.
        </p>

        <!-- AVIS -->

        <div style="
          padding:22px 18px;
          background:#FFF0ED;
          border:1px solid #F7CBC6;
          border-radius:16px;
        ">

          <p style="
            margin:0 0 6px;
            font-size:22px;
          ">
            ⭐ ⭐ ⭐ ⭐ ⭐
          </p>

          <p style="
            margin:0 0 18px;
            font-size:14px;
            line-height:1.6;
            color:#716A6C;
          ">
            Quelques mots suffisent
            et cela nous aide énormément.
          </p>

          <a
            href="${reviewUrl}"
            style="
              display:inline-block;
              padding:14px 24px;
              background:#EF5A4F;
              color:#FFFFFF;
              text-decoration:none;
              font-size:15px;
              font-weight:700;
              border-radius:11px;
            "
          >
            Donner mon avis sur Google
          </a>

        </div>

        <p style="
          margin:22px auto 0;
          max-width:500px;
          font-size:13px;
          line-height:1.7;
          color:#9A9395;
        ">
          Merci encore d'avoir fait confiance
          à Event'S Location pour votre événement.
        </p>

        <!-- CONTACT -->

        <div style="
          margin-top:28px;
          padding:19px;
          background:#EDF7F6;
          border-radius:14px;
        ">

          <p style="
            margin:0;
            font-size:13px;
            line-height:1.7;
            color:#716A6C;
          ">
            Une question ?
            <br>

            <a
              href="tel:+33643894570"
              style="
                color:#347A77;
                font-weight:700;
                text-decoration:none;
              "
            >
              ${BUSINESS_PHONE}
            </a>

            &nbsp;•&nbsp;

            <a
              href="mailto:${BUSINESS_EMAIL}"
              style="
                color:#347A77;
                font-weight:700;
                text-decoration:none;
              "
            >
              ${BUSINESS_EMAIL}
            </a>

          </p>

        </div>

        <!-- FOOTER -->

        <div style="
          margin-top:28px;
          padding-top:22px;
          border-top:1px solid #E9E2DD;
        ">

          <p style="
            margin:0;
            font-size:13px;
            font-weight:700;
            color:#1D1B1C;
          ">
            Event'S Location
          </p>

          <p style="
            margin:5px 0 0;
            font-size:12px;
            color:#9A9395;
          ">
            Donnez vie à vos événements.
          </p>

          <p style="
            margin:10px 0 0;
            font-size:11px;
            color:#9A9395;
          ">
            Nièvre • Yonne • Cher
          </p>

          <p style="
            margin:12px 0 0;
          ">
            <a
              href="${WEBSITE_URL}"
              style="
                font-size:12px;
                color:#EF5A4F;
                text-decoration:none;
                font-weight:700;
              "
            >
              eventslocation.fr
            </a>
          </p>

        </div>

      </div>

    </div>

  </div>

</body>
</html>
          `,
        });

      if (mail.error) {
        console.error(
          "Erreur mail avis Google :",
          mail.error
        );

        errorCount++;

        results.push({
          eventId,
          title:
            event.summary ??
            "Sans titre",
          email:
            clientEmail,
          status:
            "Erreur d'envoi",
        });

        continue;
      }

      /* ======================================================
         MARQUAGE GOOGLE CALENDAR
      ====================================================== */

      const sentDate =
        new Date();

      const marker =
        `Avis Google envoye: ${sentDate
          .toISOString()
          .slice(0, 10)}`;

      const updatedDescription =
        description.trim()
          ? `${description.trim()}\n\n${marker}`
          : marker;

      await calendar.events.patch({
        calendarId,

        eventId,

        requestBody: {
          description:
            updatedDescription,
        },
      });

      sentCount++;

      results.push({
        eventId,
        title:
          event.summary ??
          "Sans titre",
        email:
          clientEmail,
        status:
          "Envoyé",
      });
    }

    /* ========================================================
       RÉPONSE
    ======================================================== */

    return NextResponse.json({
      success: true,

      targetDate:
        formatFrenchDate(
          target
        ),

      totalEvents:
        events.length,

      sent:
        sentCount,

      ignored:
        ignoredCount,

      errors:
        errorCount,

      results,
    });
  } catch (error) {
    console.error(
      "Erreur API avis Google :",
      error
    );

    return NextResponse.json(
      {
        success: false,

        error:
          error instanceof Error
            ? error.message
            : "Erreur inconnue.",
      },
      {
        status: 500,
      }
    );
  }
}