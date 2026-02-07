
# Google Sheets Waitlist Integration Guide

## Step 1: Create a Google Apps Script

1. Open your Google Sheet: [https://docs.google.com/spreadsheets/d/1ePj6Pv_k6ZpBzMs2T__2eMs3QetFHBdkiNJ5m91JwMU/edit](https://docs.google.com/spreadsheets/d/1ePj6Pv_k6ZpBzMs2T__2eMs3QetFHBdkiNJ5m91JwMU/edit)
2. Go to **Extensions** > **Apps Script**.
3. Delete any code in `Code.gs` and paste the following:

```javascript
/* 
 * Legae Waitlist Handler
 * Collects Email & Consent from Landing Page
 */

const SHEET_ID = '1ePj6Pv_k6ZpBzMs2T__2eMs3QetFHBdkiNJ5m91JwMU';
const SHEET_NAME = 'Sheet1'; // Make sure your sheet tab is named "Sheet1"

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.openById(SHEET_ID);
    var sheet = doc.getSheetByName(SHEET_NAME);

    // Parse the incoming JSON data
    var params = JSON.parse(e.postData.contents);
    
    // Get formatted date
    var timestamp = new Date();
    
    // Append the row: [Timestamp, Email, Consent]
    sheet.appendRow([timestamp, params.email, params.consent]);

    // Return success response with CORS headers
    var output = ContentService.createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
      
    // IMPORTANT: CORS headers needed for fetch from localhost/deploy
    // However, Google Apps Script Web App endpoints handle simple requests differently.
    // The client-side fetch usually needs 'no-cors' or specific handling for redirects.
    // Standard approach for Apps Script Web Apps is to just return JSON.
    return output;
    
  } catch (e) {
    var errorOutput = ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
    return errorOutput;
  } finally {
    lock.releaseLock();
  }
}

function normalizeHeaders() {
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  var headers = ["Timestamp", "Email", "Waitlist Consent"];
  if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
  }
}
```

## Step 2: Run Initial Setup
1. In the Apps Script editor, select `normalizeHeaders` from the function dropdown (top toolbar).
2. Click **Run**.
3. It will ask for permissions. Review permissions -> Choose your account -> Advanced -> Go to ... (unsafe) -> Allow.
4. This will add the headers "Timestamp", "Email", "Waitlist Consent" to your sheet if it's empty.

## Step 3: Deploy as Web App
1. Click **Deploy** (blue button top right) -> **New deployment**.
2. Click the **Select type** gear icon -> **Web app**.
3. Fill in the details:
   - **Description**: `Legae Waitlist API v1`
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone` (CRITICAL: Must be "Anyone" so the website can talk to it without user login)
4. Click **Deploy**.
5. Copy the **Web App URL** (starts with `https://script.google.com/macros/s/...`).

## Step 4: Update the Code
1. I have prepared the code below to connect to this API.
2. You will need to paste your **Web App URL** into the `GOOGLE_SCRIPT_URL` variable in `c:\Users\ADMIN\Music\legaelandingpage - Copy - Copy\src\components\LandingPage\LegaeLandingPage.tsx`.

