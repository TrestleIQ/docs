// Hu-manity consent management configuration + loader.
//
// Mintlify has no supported mechanism for synchronous, load-order-guaranteed
// <head> script injection: docs.json's `headTags` field is not consumed by
// the render pipeline (verified against the live rendered page — it never
// appears in the hydration payload), and content-directory .js files like
// this one load after the page becomes interactive, in no guaranteed order
// relative to each other (see https://github.com/orgs/mintlify/discussions/5087).
//
// So Hu-manity's autoblocking (which needs to load before any tracker) can't
// be relied on here. leadfeeder.js gates itself on Hu-manity's own consent
// state instead of on load order — see scripts/leadfeeder.js.

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

(function () {
  var script = document.createElement("script");
  script.src = "https://cdn.hu-manity.co/hu-banner.min.js";
  script.type = "text/javascript";
  script.charset = "utf-8";
  document.head.appendChild(script);
})();
