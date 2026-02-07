# How to Connect Your Waitlist Form to Google Sheets

Follow these steps to link your waitlist form directly to your Google Sheet.

## Step 1: Open Your Google Sheet
1. Go to your Google Sheet: [Link to your sheet](https://docs.google.com/spreadsheets/d/1ePj6Pv_k6ZpBzMs2T__2eMs3QetFHBdkiNJ5m91JwMU/edit?gid=0#gid=0)
2. Ensure the first sheet (tab) is named `Sheet1` (or update the code below to match your sheet name).
3. Add headers to the first row if they don't exist:
   - Cell A1: `Timestamp`
   - Cell B1: `Email`
   - Cell C1: `Consent`

## Step 2: Open Apps Script
1. In the Google Sheet menu, click on **Extensions** > **Apps Script**.
2. A new tab will open with a code editor.

## Step 3: Add the Code
1. Delete any code currently in the `Code.gs` file.
2. Copy and paste the following code into the editor:

```javascript
// Google Apps Script to Handle Waitlist Submissions

function doPost(e) {
  // Get the active spreadsheet and the specific sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Sheet1'); // Make sure this matches your tab name
  
  // If the sheet doesn't exist, use the first one
  if (!sheet) {
    sheet = ss.getSheets()[0];
  }
  
  try {
    // Parse the incoming data
    var params = JSON.parse(e.postData.contents);
    var email = params.email;
    var consent = params.consent ? "Yes" : "No";
    var timestamp = new Date();
    
    // Append the data to the sheet
    sheet.appendRow([timestamp, email, consent]);
    
    // Return a success JSON response
    return ContentService.createTextOutput(JSON.stringify({
      result: 'success',
      message: 'Data appended successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Handle errors
    return ContentService.createTextOutput(JSON.stringify({
      result: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Handle GET requests to check if script is running
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'online',
    message: 'Legae Waitlist Script is active'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

## Step 4: Save and Deploy
1. Click the **Save** icon (floppy disk) or press `Ctrl + S`.
2. Click the blue **Deploy** button in the top right corner.
3. Select **New deployment**.
4. In the "Select type" gear icon, check/select **Web app**.
5. Fill in the definition:
   - **Description**: `Legae Waitlist API`
   - **Execute as**: `Me` (your email)
   - **Who has access**: **Anyone** (This is critical so the form can send data without login)
6. Click **Deploy**.
7. You may be asked to *Authorize access*. Click "Review permissions", choose your account, and if you see a warning "Google hasn't verified this app", click **Advanced** -> **Go to (Untitled project) (unsafe)** -> **Allow**.

## Step 5: Get the URL
1. Once deployed, copy the **Web App URL** (it ends in `/exec`).
2. Go back to your code editor or validte the URL to me, and I will add it to the website code for you.

## Step 6: Update Your Website Code
(I have already prepared the code to accept this URL. Once you have the URL, you just need to paste it into the `GOOGLE_SCRIPT_URL` variable in `src/components/LandingPage/LegaeLandingPage.tsx`).
