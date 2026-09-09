// Hu-manity consent management configuration
// Must load before hu-banner.min.js and before any tracking script (leadfeeder.js).
// See docs.json headTags order — this file's headTags entry must stay first.

var huOptions = {
  "appID": "trestleiqcom-508b0ac",
  "currentLanguage": "en",
  "blocking": true,
  "globalCookie": false,
  "customProviders": [
    {
      "IsCustom": true,
      "CategoryID": 4,
      "ProviderID": "6ec492-2230--b0f2-0f755e",
      "ProviderURL": "https://www.leadfeeder.com/",
      "ProviderName": "Leadfeeder"
    }
  ],
  "customPatterns": [
    {
      "Pattern": "lfeeder.com",
      "CookieID": "caff9e-4a56--1b1a-2dfc6a",
      "IsCustom": true,
      "CategoryID": 4,
      "ProviderID": "6ec492-2230--b0f2-0f755e",
      "PatternType": "script",
      "PatternFormat": "URL"
    },
    {
      "Pattern": "sc.lfeeder.com",
      "CookieID": "c46729-faf7--b2ea-0ce5e5",
      "IsCustom": true,
      "CategoryID": 4,
      "ProviderID": "6ec492-2230--b0f2-0f755e",
      "PatternType": "script",
      "PatternFormat": "URL"
    },
    {
      "Pattern": "tr-rc.lfeeder.com",
      "CookieID": "9a7389-aaf4--a16f-10ca3b",
      "IsCustom": true,
      "CategoryID": 4,
      "ProviderID": "6ec492-2230--b0f2-0f755e",
      "PatternType": "script",
      "PatternFormat": "URL"
    }
  ]
};
