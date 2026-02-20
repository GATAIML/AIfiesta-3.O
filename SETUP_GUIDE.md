# Leaderboard Setup Guide

This guide will help you set up the Google Sheets API to power the leaderboard.

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on **"Select a project"** → **"New Project"**
3. Give it a name like `AIfiesta-Leaderboard`
4. Click **Create**

## Step 2: Enable Required APIs

1. In the Google Cloud Console, go to **APIs & Services** → **Library**
2. Search for and enable these APIs:
   - **Google Sheets API**
   - **Google Drive API**

## Step 3: Create Service Account

1. Go to **IAM & Admin** → **Service Accounts**
2. Click **"Create Service Account"**
3. Fill in the details:
   - Service account name: `leaderboard-access`
   - Service account ID: `leaderboard-access` (auto-generated)
   - Description: `Access Google Sheets for leaderboard`
4. Click **Create and Continue**
5. For role, select **Viewer** (or skip this step)
6. Click **Done**

## Step 4: Generate JSON Key

1. Find your newly created service account in the list
2. Click on the **Keys** tab
3. Click **"Add Key"** → **"Create new key"**
4. Select **JSON** format
5. Click **Create**
6. The JSON file will download to your computer

## Step 5: Create Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new sheet
3. Name it `Leaderboard`
4. Set up the header row (Row 1):
   - A1: `Healthcare Team`
   - B1: `Healthcare Score`
   - C1: `Agritech Team`
   - D1: `Agritech Score`
5. Add your team data in rows below

## Step 6: Share Sheet with Service Account

1. Open your Google Sheet
2. Click **Share** button
3. In the "Add people and groups" field, paste the `client_email` from your downloaded JSON file
4. Set as **Viewer**
5. Click **Send**

## Step 7: Create Environment File

1. Copy the `.env.example` file and rename it to `.env.local`:

```
   cp .env.example .env.local

```

2. Open `.env.local` and fill in your values from the JSON file:

```
   GOOGLE_CLIENT_EMAIL=the-client-email-from-json@project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour\nPrivate\nKey\nHere\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEET_ID=your-sheet-id-from-url

```

**Important:** For `GOOGLE_PRIVATE_KEY`:

- Replace all newlines with `\n`
- Keep the quotes around the entire key

**To get `GOOGLE_SHEET_ID`:**

- Open your Google Sheet
- Look at the URL: `https://docs.google.com/spreadsheets/d/THIS_IS_THE_SHEET_ID/edit`
- Copy that ID part

## Step 8: Test the Leaderboard

1. Run your development server:

```
bash
   npm run dev

```

2. Open http://localhost:3000/leaderboard
3. You should see your team data displayed!

## Example .env.local

```
env
GOOGLE_CLIENT_EMAIL=aifibesta-leaderboard@aifibesta-xxxxx.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
```

## Troubleshooting

- **"Failed to fetch leaderboard"** - Check your environment variables are correct
- **Empty data** - Make sure the sheet is shared with the service account email
- **401 Error** - Your private key might be malformed (check `\n` formatting)

## Security Notes

- Never commit `.env.local` to git (it's already in .gitignore)
- Keep your JSON key secure
- Only share the sheet as Viewer with the service account
