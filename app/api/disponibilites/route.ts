import { google } from "googleapis";

export async function GET() {
  try {
    const calendarId =
      process.env.GOOGLE_CALENDAR_ID;

    const serviceAccountEmail =
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

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
      calendarIdLoaded: !!calendarId,
      emailLoaded: !!serviceAccountEmail,
      privateKeyLoaded: !!privateKey,
    },
    {
      status: 500,
    }
  );
}

    const auth = new google.auth.JWT({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: [
        "https://www.googleapis.com/auth/calendar.readonly",
      ],
    });

    const calendar = google.calendar({
      version: "v3",
      auth,
    });

    const now = new Date();

    const threeMonthsLater = new Date();

    threeMonthsLater.setMonth(
      threeMonthsLater.getMonth() + 3
    );

    const response =
      await calendar.events.list({
        calendarId,

        timeMin: now.toISOString(),

        timeMax:
          threeMonthsLater.toISOString(),

        singleEvents: true,

        orderBy: "startTime",

        maxResults: 100,
      });

    const events =
      response.data.items ?? [];

    return Response.json({
      success: true,

      calendarId,

      count: events.length,

      events: events.map((event) => ({
        id: event.id,

        title:
          event.summary ??
          "Sans titre",

        description:
          event.description ?? "",

        start:
          event.start?.dateTime ??
          event.start?.date ??
          null,

        end:
          event.end?.dateTime ??
          event.end?.date ??
          null,

        status:
          event.status ?? null,
      })),
    });

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
            : "Erreur inconnue lors de la connexion à Google Calendar",
      },
      {
        status: 500,
      }
    );
  }
}