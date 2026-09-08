import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/* ============================================================
   CONFIGURATION
============================================================ */

const WEBSITE_URL = "https://www.eventslocation.fr";
const LOGO_URL = "https://www.eventslocation.fr/Logo/Logo.png";

const BUSINESS_EMAIL = "events.location@outlook.com";
const BUSINESS_PHONE = "06 43 89 45 70";

const PARIS_TIME_ZONE = "Europe/Paris";

/* ============================================================
   MATÉRIEL RECONNU
============================================================ */

const INVENTORY_NAMES = [
  "Photo Booth",
  "Photobooth",
  "Kit Sonorisation",
  "Sonorisation",
  "Micro HF",
  "Videoprojecteur",
  "Vidéoprojecteur",
  "Ecran",
  "Écran",
  "Smoke Puff",
  "Machine a fumee",
  "Machine à fumée",
  "Machine a bulles",
  "Machine à bulles",
  "Tente 4x8",
  "Tente 4 x 8",
  "Table ronde 152",
  "Table ronde Ø152",
  "Table rectangulaire",
  "Mange debout",
  "Mange-debout",
  "Chaise",
  "Tabouret",
];

/* ============================================================
   OUTILS TEXTE
============================================================ */

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/* ============================================================
   EXTRACTION DES CHAMPS
============================================================ */

function extractField(
  description: string,
  fieldName: string
) {
  const lines = description.split(/\r?\n/);

  const normalizedFieldName =
    normalizeText(fieldName);

  for (const line of lines) {
    const separatorIndex =
      line.indexOf(":");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line
      .slice(0, separatorIndex)
      .trim();

    const value = line
      .slice(separatorIndex + 1)
      .trim();

    if (
      normalizeText(key) ===
      normalizedFieldName
    ) {
      return value;
    }
  }

  return "";
}

function extractEmail(
  description: string
) {
  /*
    1. On cherche d'abord la ligne Email:
  */

  const fieldEmail =
    extractField(
      description,
      "Email"
    );

  if (fieldEmail) {
    const cleaned =
      fieldEmail
        .replace(/\s+/g, "")
        .replace(/^mailto:/i, "")
        .trim();

    const match =
      cleaned.match(
        /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
      );

    if (match?.[0]) {
      return match[0];
    }
  }

  /*
    2. Fallback :
       recherche de n'importe quelle adresse
       e-mail dans toute la description.
  */

  const fallback =
    description.match(
      /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
    );

  return fallback?.[0]?.trim() ?? "";
}

function extractClientName(
  description: string
) {
  return extractField(
    description,
    "Client"
  );
}

function isValidEmail(
  value: string
) {
  const cleaned =
    value
      .replace(/\s+/g, "")
      .trim();

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    cleaned
  );
}

function hasReviewAlreadyBeenSent(
  description: string
) {
  return /Avis Google envoye\s*:/i.test(
    description
  );
}

/* ============================================================
   DÉTECTION DU MATÉRIEL
============================================================ */

function hasRecognizedEquipment(
  description: string
) {
  const normalizedDescription =
    normalizeText(description);

  return INVENTORY_NAMES.some(
    (name) => {
      const normalizedName =
        normalizeText(name);

      return normalizedDescription.includes(
        normalizedName
      );
    }
  );
}

/* ============================================================
   OUTILS DATE / FUSEAU FRANCE
============================================================ */

function getParisDateString(
  date: Date
) {
  const formatter =
    new Intl.DateTimeFormat(
      "en-CA",
      {
        timeZone:
          PARIS_TIME_ZONE,
        year:
          "numeric",
        month:
          "2-digit",
        day:
          "2-digit",
      }
    );

  const parts =
    formatter.formatToParts(
      date
    );

  const year =
    parts.find(
      (part) =>
        part.type === "year"
    )?.value;

  const month =
    parts.find(
      (part) =>
        part.type === "month"
    )?.value;

  const day =
    parts.find(
      (part) =>
        part.type === "day"
    )?.value;

  if (
    !year ||
    !month ||
    !day
  ) {
    throw new Error(
      "Impossible de déterminer la date Europe/Paris."
    );
  }

  return `${year}-${month}-${day}`;
}

function shiftDate(
  dateString: string,
  days: number
) {
  const [
    year,
    month,
    day,
  ] =
    dateString
      .split("-")
      .map(Number);

  const date =
    new Date(
      Date.UTC(
        year,
        month - 1,
        day + days,
        12,
        0,
        0
      )
    );

  return date
    .toISOString()
    .slice(0, 10);
}

function getTargetDate() {
  const todayParis =
    getParisDateString(
      new Date()
    );

  return shiftDate(
    todayParis,
    -2
  );
}

/* ============================================================
   DATE RÉELLE DE FIN D'UN ÉVÉNEMENT
============================================================ */

function getEventActualEndDate(
  event: {
    end?: {
      date?: string | null;
      dateTime?: string | null;
    } | null;
  }
) {
  /*
    Événement journée entière.

    Google utilise une fin exclusive.

    Exemple :
    affiché du 4 au 6 septembre
    end.date = 2026-09-07

    Date réelle de fin = 6 septembre.
  */

  if (event.end?.date) {
    return shiftDate(
      event.end.date,
      -1
    );
  }

  /*
    Événement avec heure.
  */

  if (
    event.end?.dateTime
  ) {
    const endDate =
      new Date(
        event.end.dateTime
      );

    if (
      Number.isNaN(
        endDate.getTime()
      )
    ) {
      return null;
    }

    /*
      Retrait d'1 ms pour gérer
      les fins exactement à minuit.
    */

    const inclusiveEnd =
      new Date(
        endDate.getTime() - 1
      );

    return getParisDateString(
      inclusiveEnd
    );
  }

  return null;
}

function formatFrenchDate(
  dateString: string
) {
  const [
    year,
    month,
    day,
  ] =
    dateString
      .split("-")
      .map(Number);

  const date =
    new Date(
      Date.UTC(
        year,
        month - 1,
        day,
        12,
        0,
        0
      )
    );

  return new Intl.DateTimeFormat(
    "fr-FR",
    {
      timeZone:
        PARIS_TIME_ZONE,
      day:
        "numeric",
      month:
        "long",
      year:
        "numeric",
    }
  ).format(date);
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
       VARIABLES D'ENVIRONNEMENT
    ======================================================== */

    const calendarId =
      process.env
        .GOOGLE_CALENDAR_ID;

    const serviceAccountEmail =
      process.env
        .GOOGLE_SERVICE_ACCOUNT_EMAIL;

    const privateKey =
      process.env
        .GOOGLE_PRIVATE_KEY
        ?.replace(
          /\\n/g,
          "\n"
        );

    const resendApiKey =
      process.env
        .RESEND_API_KEY;

    const reviewUrl =
      process.env
        .GOOGLE_REVIEW_URL;

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
        version:
          "v3",

        auth,
      });

    /* ========================================================
       DATE CIBLE = J-2
    ======================================================== */

    const targetDate =
      getTargetDate();

    const searchStart =
      shiftDate(
        targetDate,
        -7
      );

    const searchEnd =
      shiftDate(
        targetDate,
        2
      );

    console.log(
      `[Avis Google] Date cible : ${targetDate}`
    );

    console.log(
      `[Avis Google] Recherche calendrier : ${searchStart} → ${searchEnd}`
    );

    /* ========================================================
       RÉCUPÉRATION GOOGLE CALENDAR
    ======================================================== */

    const response =
      await calendar.events.list({
        calendarId,

        timeMin:
          new Date(
            `${searchStart}T00:00:00Z`
          ).toISOString(),

        timeMax:
          new Date(
            `${searchEnd}T23:59:59Z`
          ).toISOString(),

        singleEvents:
          true,

        orderBy:
          "startTime",

        showDeleted:
          false,

        maxResults:
          250,
      });

    const calendarEvents =
      response.data.items ?? [];

    /* ========================================================
       FILTRE SUR LA DATE RÉELLE DE FIN
    ======================================================== */

    const events =
      calendarEvents.filter(
        (event) => {
          const actualEndDate =
            getEventActualEndDate(
              event
            );

          return (
            actualEndDate ===
            targetDate
          );
        }
      );

    console.log(
      `[Avis Google] ${calendarEvents.length} événement(s) analysé(s)`
    );

    console.log(
      `[Avis Google] ${events.length} événement(s) terminé(s) le ${targetDate}`
    );

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
      endDate?: string | null;
      status: string;
    }> = [];

    /* ========================================================
       TRAITEMENT DES ÉVÉNEMENTS
    ======================================================== */

    for (
      const event of events
    ) {
      const eventId =
        event.id;

      const title =
        event.summary ??
        "Sans titre";

      const actualEndDate =
        getEventActualEndDate(
          event
        );

      console.log(
        `[Avis Google] Traitement : ${title} | fin : ${actualEndDate}`
      );

      /* ======================================================
         ÉVÉNEMENT ANNULÉ
      ====================================================== */

      if (
        event.status ===
        "cancelled"
      ) {
        ignoredCount++;

        results.push({
          eventId:
            eventId ??
            "inconnu",

          title,

          endDate:
            actualEndDate,

          status:
            "Événement annulé",
        });

        continue;
      }

      /* ======================================================
         ID ABSENT
      ====================================================== */

      if (!eventId) {
        ignoredCount++;

        results.push({
          eventId:
            "inconnu",

          title,

          endDate:
            actualEndDate,

          status:
            "ID événement absent",
        });

        continue;
      }

      const description =
        event.description ?? "";

      /* ======================================================
         MATÉRIEL RECONNU
      ====================================================== */

      if (
        !hasRecognizedEquipment(
          description
        )
      ) {
        ignoredCount++;

        console.log(
          `[Avis Google] Ignoré : aucun matériel reconnu → ${title}`
        );

        results.push({
          eventId,
          title,
          endDate:
            actualEndDate,
          status:
            "Aucun matériel reconnu",
        });

        continue;
      }

      console.log(
        `[Avis Google] Matériel reconnu → ${title}`
      );

      /* ======================================================
         ANTI-DOUBLON
      ====================================================== */

      if (
        hasReviewAlreadyBeenSent(
          description
        )
      ) {
        ignoredCount++;

        console.log(
          `[Avis Google] Ignoré : déjà envoyé → ${title}`
        );

        results.push({
          eventId,
          title,
          endDate:
            actualEndDate,
          status:
            "Déjà envoyé",
        });

        continue;
      }

      /* ======================================================
         EMAIL CLIENT
      ====================================================== */

      const clientEmail =
        extractEmail(
          description
        );

      console.log(
        `[Avis Google] Email détecté pour ${title} : ${
          clientEmail
            ? clientEmail
            : "aucun"
        }`
      );

      if (
        !clientEmail ||
        !isValidEmail(
          clientEmail
        )
      ) {
        ignoredCount++;

        console.log(
          `[Avis Google] Ignoré : email invalide → ${title}`
        );

        results.push({
          eventId,
          title,
          endDate:
            actualEndDate,
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
          clientName
        );

      const safeEventTitle =
        escapeHtml(
          title
        );

      /* ======================================================
         ENVOI RESEND
      ====================================================== */

      console.log(
        `[Avis Google] Envoi vers ${clientEmail} → ${title}`
      );

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
          <strong style="color:#1D1B1C;">
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
          Votre retour nous aide à faire connaître
          Event'S Location et permet aux futurs clients
          de découvrir votre expérience.
        </p>

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
            Quelques mots suffisent et cela nous aide énormément.
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

      /* ======================================================
         ERREUR RESEND
      ====================================================== */

      if (mail.error) {
        console.error(
          `[Avis Google] Erreur Resend pour ${clientEmail}`,
          mail.error
        );

        errorCount++;

        results.push({
          eventId,
          title,
          email:
            clientEmail,
          endDate:
            actualEndDate,
          status:
            "Erreur d'envoi",
        });

        continue;
      }

      /* ======================================================
         MARQUAGE GOOGLE CALENDAR
      ====================================================== */

      const sentDate =
        getParisDateString(
          new Date()
        );

      const marker =
        `Avis Google envoye: ${sentDate}`;

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

      console.log(
        `[Avis Google] Envoyé avec succès → ${clientEmail}`
      );

      results.push({
        eventId,
        title,
        email:
          clientEmail,
        endDate:
          actualEndDate,
        status:
          "Envoyé",
      });
    }

    /* ========================================================
       RÉPONSE
    ======================================================== */

    return NextResponse.json({
      success: true,

      timezone:
        PARIS_TIME_ZONE,

      targetDate:
        formatFrenchDate(
          targetDate
        ),

      calendarEventsScanned:
        calendarEvents.length,

      targetEvents:
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