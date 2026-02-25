import { google } from "googleapis";
import { NextResponse } from "next/server";

async function getFormResponseCount(formId: string): Promise<number> {
  if (!formId) {
    return 0;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: [
      "https://www.googleapis.com/auth/forms.body.readonly",
      "https://www.googleapis.com/auth/forms.responses.readonly",
    ],
  });

  const forms = google.forms({ version: "v1", auth });

  try {
    const response = await forms.forms.responses.list({
      formId: formId,
    });

    return response.data.responses?.length || 0;
  } catch (error) {
    console.error(`Error fetching form ${formId}:`, error);
    return 0;
  }
}

export async function GET() {
  try {
    const aideathonFormId = process.env.AIDEATHON_REGISTRATION_COUNT_FORM_ID;
    const chatbotbattleFormId = process.env.CHATBOTBATTLE_REGISTRATION_COUNT_FORM_ID;

    const [aideathonCount, chatbotbattleCount] = await Promise.all([
      getFormResponseCount(aideathonFormId || ""),
      getFormResponseCount(chatbotbattleFormId || ""),
    ]);

    return NextResponse.json({
      aideathon: aideathonCount,
      chatbotbattle: chatbotbattleCount,
    });
  } catch (error) {
    console.error("Failed to fetch registration counts:", error);
    return NextResponse.json(
      { error: "Failed to fetch registration counts" },
      { status: 500 }
    );
  }
}
