import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY absente");

      return NextResponse.json(
        { error: "Configuration e-mail incomplète." },
        { status: 500 }
      );
    }

    const body = await request.json();

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
      message,
      estimatedPrice,
    } = body;

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
        { error: "Merci de compléter les champs obligatoires." },
        { status: 400 }
      );
    }

    if (
      !Array.isArray(selectedServices) ||
      selectedServices.length === 0
    ) {
      return NextResponse.json(
        { error: "Merci de sélectionner au moins une prestation." },
        { status: 400 }
      );
    }

    const safeLastname = escapeHtml(lastname);
    const safeFirstname = escapeHtml(firstname);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeEventType = escapeHtml(eventType);
    const safeDate = escapeHtml(date);
    const safeCity = escapeHtml(city);
    const safeGuests = escapeHtml(guests || "Non renseigné");
    const safeMessage = escapeHtml(message || "Aucun message.");

    const safeServices = selectedServices
      .map((service: string) => escapeHtml(service))
      .join(", ");

    const safeEstimatedPrice = Number(estimatedPrice) || 0;

    const adminMail = await resend.emails.send({
      from: "Event'S Location <devis@eventslocation.fr>",
      to: ["events.location@outlook.com"],
      replyTo: email,
      subject: `Nouvelle demande de devis - ${firstname} ${lastname}`,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
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

            <div style="padding:28px;">

              <h2 style="
                margin:0 0 18px;
                font-size:20px;
              ">
                Coordonnées
              </h2>

              <p><strong>Nom :</strong> ${safeLastname}</p>
              <p><strong>Prénom :</strong> ${safeFirstname}</p>
              <p><strong>E-mail :</strong> ${safeEmail}</p>
              <p><strong>Téléphone :</strong> ${safePhone}</p>

              <hr style="
                border:none;
                border-top:1px solid #e5e7eb;
                margin:28px 0;
              " />

              <h2 style="
                margin:0 0 18px;
                font-size:20px;
              ">
                Événement
              </h2>

              <p><strong>Type :</strong> ${safeEventType}</p>
              <p><strong>Date :</strong> ${safeDate}</p>
              <p><strong>Lieu :</strong> ${safeCity}</p>
              <p><strong>Invités :</strong> ${safeGuests}</p>

              <hr style="
                border:none;
                border-top:1px solid #e5e7eb;
                margin:28px 0;
              " />

              <h2 style="
                margin:0 0 18px;
                font-size:20px;
              ">
                Prestations demandées
              </h2>

              <p>${safeServices}</p>

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
                  ${safeEstimatedPrice} €
                </p>
              </div>

              <hr style="
                border:none;
                border-top:1px solid #e5e7eb;
                margin:28px 0;
              " />

              <h2 style="
                margin:0 0 18px;
                font-size:20px;
              ">
                Message
              </h2>

              <p style="
                white-space:pre-line;
                line-height:1.7;
              ">
                ${safeMessage}
              </p>

              <div style="
                margin-top:28px;
                padding:18px;
                background:#111827;
                color:white;
                border-radius:12px;
              ">
                <p style="margin:0;">
                  Tu peux répondre directement à cet e-mail :
                  la réponse sera envoyée à ${safeEmail}.
                </p>
              </div>

            </div>
          </div>
        </div>
      `,
    });

    if (adminMail.error) {
      console.error("Erreur mail admin :", adminMail.error);

      return NextResponse.json(
        { error: "Impossible d'envoyer votre demande pour le moment." },
        { status: 500 }
      );
    }

    const clientMail = await resend.emails.send({
      from: "Event'S Location <devis@eventslocation.fr>",
      to: [email],
      replyTo: "events.location@outlook.com",
      subject: "Votre demande de devis - Event'S Location",

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
                Nous allons vérifier la disponibilité du matériel et
                étudier votre demande avant de revenir vers vous.
              </p>

              <div style="
                margin:26px 0;
                padding:20px;
                background:#f0fdf4;
                border-radius:12px;
                border:1px solid #bbf7d0;
              ">
                <p>
                  <strong>Événement :</strong>
                  ${safeEventType}
                </p>

                <p>
                  <strong>Date :</strong>
                  ${safeDate}
                </p>

                <p>
                  <strong>Lieu :</strong>
                  ${safeCity}
                </p>

                <p>
                  <strong>Prestations :</strong>
                  ${safeServices}
                </p>
              </div>

              <p>
                À très bientôt,
              </p>

              <p>
                <strong>Event'S Location</strong>
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

    if (clientMail.error) {
      console.error("Erreur confirmation client :", clientMail.error);

      // La demande est tout de même arrivée chez Event'S Location.
      // On ne retourne donc pas une erreur au client.
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Erreur API devis :", error);

    return NextResponse.json(
      { error: "Une erreur est survenue pendant l'envoi." },
      { status: 500 }
    );
  }
}