import { google } from "googleapis";
import { NextResponse } from "next/server";

async function getLeaderboardData() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = process.env.ChatbotBattle_SHEET_ID!;
  const range = "Sheet1!A:C";

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const rows = response.data.values || [];

  const chatBotTeams = rows.slice(1).map((row) => ({
    teamid: row[0],
    teamname: row[1],
    score: Number(row[2]) || 0,
    category: "Chatbotbattle", // ✅ Updated
  }));

  const ranked = chatBotTeams
    .sort((a, b) => b.score - a.score)
    .map((team, idx) => ({
      ...team,
      rank: idx + 1,
    }));

  return ranked;
}

export async function GET() {
  try {
    const teams = await getLeaderboardData();
    return NextResponse.json({ teams });
  } catch (err) {
    console.error("Failed to fetch:", err);
    return NextResponse.json(
      { error: "Failed to fetch leaderboard" },
      { status: 500 }
    );
  }
}