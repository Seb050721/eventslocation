import { google } from "googleapis";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/* ============================================================
   STOCK TOTAL EVENT'S LOCATION
============================================================ */

const inventory: Record<string, number> = {
  "Photo Booth": 1,
  "Kit Sonorisation": 2,
  "Micro HF": 2,
  Videoprojecteur: 1,
  Ecran: 1,
  "Smoke Puff": 1,
  "Machine a fumee": 2,
  "Machine a bulles": 1,
  "Tente 4x8": 1,
  "Table ronde 152": 20,
  "Table rectangulaire": 10,
  "Mange debout": 12,
  Chaise: 50,
  Tabouret: 20,
};

/* ============================================================
   NORMALISATION
============================================================ */

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
   RECHERCHE D'UN NOM DE MATÉRIEL

   Accepte par exemple :
   Machine à fumée
   Machine a fumee
============================================================ */

function findInventoryName(rawName: string) {
  const normalizedRawName =
    normalizeText(rawName);

  return Object.keys(inventory).find(
    (inventoryName) =>
      normalizeText(inventoryName) ===
      normalizedRawName
  );
}

/* ============================================================
   EXTRACTION DES RÉSERVATIONS

   Accepte :

   Photo Booth: 1
   Chaise: 35

   mais également une description où Google aurait supprimé
   certains retours à la ligne.
============================================================ */

function parseReservation(
  description: string
) {
  const reservation: Record<
    string,
    number
  > = {};

  /*
   * Première méthode :
   * une ligne = un matériel
   */

  const lines = description
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    const match = line.match(
      /^(.+?)\s*:\s*(\d+)/i
    );

    if (!match) {
      continue;
    }

    const [, rawName, rawQuantity] =
      match;

    const matchingName =
      findInventoryName(rawName);

    if (!matchingName) {
      continue;
    }

    const quantity = Number(
      rawQuantity
    );

    if (
      !Number.isFinite(quantity) ||
      quantity <= 0
    ) {
      continue;
    }

    reservation[matchingName] =
      (reservation[matchingName] ??
        0) + quantity;
  }

  /*
   * Deuxième méthode de secours :
   *
   * cherche directement chaque matériel
   * dans toute la description.
   *
   * Utile si Google renvoie par exemple :
   *
   * Photo Booth: 1 Kit Sonorisation: 1 Chaise: 35
   */

  for (const inventoryName of Object.keys(
    inventory
  )) {
    if (
      reservation[inventoryName] !==
      undefined
    ) {
      continue;
    }

    const variants = [
      inventoryName,
      inventoryName
        .normalize("NFD")
        .replace(
          /[\u0300-\u036f]/g,
          ""
        ),
    ];

    for (const variant of variants) {
      const escaped =
        variant.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        );

      const regex = new RegExp(
        `${escaped}\\s*:\\s*(\\d+)`,
        "i"
      );

      const match =
        description.match(regex);

      if (!match) {
        continue;
      }

      const quantity = Number(
        match[1]
      );

      if (
        Number.isFinite(quantity) &&
        quantity > 0
      ) {
        reservation[inventoryName] =
          quantity;
      }

      break;
    }
  }

  return reservation;
}

/* ============================================================
   DATES COUVERTES PAR UNE RÉSERVATION
============================================================ */

function getEventDates(
  startValue: string,
  endValue: string | null,
  isAllDay: boolean
) {
  const dates: string[] = [];

  /*
   * Pour une journée entière Google :
   *
   * début : 2026-08-15
   * fin   : 2026-08-16
   *
   * La date de fin est exclusive.
   */

  if (isAllDay) {
    const [startYear, startMonth, startDay] =
      startValue
        .split("-")
        .map(Number);

    const current = new Date(
      Date.UTC(
        startYear,
        startMonth - 1,
        startDay
      )
    );

    let end: Date;

    if (endValue) {
      const [endYear, endMonth, endDay] =
        endValue
          .split("-")
          .map(Number);

      end = new Date(
        Date.UTC(
          endYear,
          endMonth - 1,
          endDay
        )
      );
    } else {
      end = new Date(current);

      end.setUTCDate(
        end.getUTCDate() + 1
      );
    }

    while (current < end) {
      dates.push(
        current
          .toISOString()
          .slice(0, 10)
      );

      current.setUTCDate(
        current.getUTCDate() + 1
      );
    }

    return dates;
  }

  /*
   * Événement avec heures
   */

  const start = new Date(startValue);

  const end = endValue
    ? new Date(endValue)
    : new Date(startValue);

  const current = new Date(
    Date.UTC(
      start.getFullYear(),
      start.getMonth(),
      start.getDate()
    )
  );

  const finalDay = new Date(
    Date.UTC(
      end.getFullYear(),
      end.getMonth(),
      end.getDate()
    )
  );

  while (current <= finalDay) {
    dates.push(
      current
        .toISOString()
        .slice(0, 10)
    );

    current.setUTCDate(
      current.getUTCDate() + 1
    );
  }

  return dates;
}

/* ============================================================
   API
============================================================ */

export async function GET(
  request: Request
) {
  try {
    const url = new URL(request.url);

    const debug =
      url.searchParams.get("debug") ===
      "1";

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

    if (
      !calendarId ||
      !serviceAccountEmail ||
      !privateKey
    ) {
      return Response.json(
        {
          success: false,
          error:
            "Configuration Google Calendar incomplète.",
        },
        {
          status: 500,
          headers: {
            "Cache-Control":
              "no-store",
          },
        }
      );
    }

    /* ========================================================
       GOOGLE AUTH
    ======================================================== */

    const auth = new google.auth.JWT({
      email:
        serviceAccountEmail,

      key: privateKey,

      scopes: [
        "https://www.googleapis.com/auth/calendar.readonly",
      ],
    });

    const calendar =
      google.calendar({
        version: "v3",
        auth,
      });

    /* ========================================================
       PÉRIODE

       On commence à aujourd'hui 00:00 plutôt qu'à l'heure
       exacte actuelle.
    ======================================================== */

    const now = new Date();

    const startDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    /*
     * Petite marge :
     * on récupère aussi les événements commencés hier
     * qui pourraient encore couvrir aujourd'hui.
     */

    startDate.setDate(
      startDate.getDate() - 1
    );

    const endDate = new Date(
      startDate
    );

    endDate.setFullYear(
      endDate.getFullYear() + 3
    );

    /* ========================================================
       GOOGLE CALENDAR
    ======================================================== */

    const response =
      await calendar.events.list({
        calendarId,

        timeMin:
          startDate.toISOString(),

        timeMax:
          endDate.toISOString(),

        singleEvents: true,

        orderBy: "startTime",

        showDeleted: false,

        maxResults: 2500,
      });

    const events =
      response.data.items ?? [];

    /* ========================================================
       RÉSERVATIONS
    ======================================================== */

    const reservationsByDate: Record<
      string,
      Record<string, number>
    > = {};

    /*
     * Informations uniquement retournées
     * quand ?debug=1 est présent.
     */

    const debugEvents: Array<{
      title: string;
      description: string;
      start: string | null;
      end: string | null;
      parsed: Record<string, number>;
      dates: string[];
    }> = [];

    for (const event of events) {
      if (
        event.status === "cancelled"
      ) {
        continue;
      }

      const description =
        event.description ?? "";

      const reservation =
        parseReservation(
          description
        );

      const startValue =
        event.start?.date ??
        event.start?.dateTime ??
        null;

      const endValue =
        event.end?.date ??
        event.end?.dateTime ??
        null;

      if (!startValue) {
        continue;
      }

      const isAllDay =
        Boolean(event.start?.date);

      const eventDates =
        getEventDates(
          startValue,
          endValue,
          isAllDay
        );

      if (debug) {
        debugEvents.push({
          title:
            event.summary ??
            "Sans titre",

          description,

          start: startValue,

          end: endValue,

          parsed: reservation,

          dates: eventDates,
        });
      }

      /*
       * Aucun matériel reconnu :
       * l'événement n'influence pas le stock.
       */

      if (
        Object.keys(reservation)
          .length === 0
      ) {
        continue;
      }

      for (const date of eventDates) {
        if (
          !reservationsByDate[date]
        ) {
          reservationsByDate[date] =
            {};
        }

        for (const [
          equipment,
          quantity,
        ] of Object.entries(
          reservation
        )) {
          reservationsByDate[date][
            equipment
          ] =
            (
              reservationsByDate[
                date
              ][equipment] ?? 0
            ) + quantity;
        }
      }
    }

    /* ========================================================
       DISPONIBILITÉS
    ======================================================== */

    const availabilityByDate: Record<
      string,
      Record<
        string,
        {
          total: number;
          reserved: number;
          available: number;
        }
      >
    > = {};

    for (const [
      date,
      reservations,
    ] of Object.entries(
      reservationsByDate
    )) {
      availabilityByDate[date] =
        {};

      for (const [
        equipment,
        total,
      ] of Object.entries(
        inventory
      )) {
        const reserved =
          reservations[equipment] ??
          0;

        availabilityByDate[date][
          equipment
        ] = {
          total,

          reserved,

          available: Math.max(
            total - reserved,
            0
          ),
        };
      }
    }

    /* ========================================================
       RÉPONSE
    ======================================================== */

    return Response.json(
      {
        success: true,

        inventory,

        availability:
          availabilityByDate,

        /*
         * Debug uniquement.
         * À retirer après le test.
         */

        ...(debug
          ? {
              debug: {
                googleEventCount:
                  events.length,

                events:
                  debugEvents,
              },
            }
          : {}),
      },
      {
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error(
      "Erreur Google Calendar :",
      error
    );

    return Response.json(
      {
        success: false,

        error:
          error instanceof Error
            ? error.message
            : "Erreur inconnue.",
      },
      {
        status: 500,

        headers: {
          "Cache-Control":
            "no-store",
        },
      }
    );
  }
}