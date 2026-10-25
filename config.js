/*
  S·P·L Reporting Monitor: connection settings
  apiUrl       = Google Apps Script "Web app URL" (used to SAVE data; checks the upload passcode)
  sheetId      = ID of the Google Sheet "SPL Dashboard Data" (used to READ data; sheet shared as "Anyone with the link can view")
  viewCodeHash = SHA-256 of the dashboard access code (screen only; leave '' to open without a code)
*/
window.SPL_CONFIG = {
  apiUrl: 'https://script.google.com/macros/s/AKfycbwtpkh--4C9RIVQu6upCq7b8EF9kJ5T3cdyi7g1GmtP9OZaX4nkXfr6I8D5EnMtN9we/exec',
  sheetId: '1B8QGPW647bHOKOY2pRAjRKlv1BMSlW1R5tfrBvIyaWQ',
  viewCodeHash: 'cc41d80b1697c04d19330fba23a82cfc68fb086e3445691578bfae3a3d6f3e57'
};
