// Cookiebot consent banner for docs.trestleiq.com. Replaces Hu-manity
// (TRES-6425, TRES-6708).
//
// Mintlify auto-includes every .js file in this repo into each page; it does
// NOT render docs.json `headTags`. These files run after the page is
// interactive, in no guaranteed order, so this script injects Cookiebot's
// uc.js itself rather than relying on a static first-in-<head> tag.
//
// No data-blockingmode="auto", on purpose. Auto-blocking rewrites matching
// scripts to type="text/plain" and only works for scripts that load AFTER
// Cookiebot, which cannot be guaranteed here. Mintlify also inlines the SOURCE
// of these files into its Next.js `self.__next_f.push(...)` payload scripts;
// blocking those is what broke hydration under Hu-manity ("Unexpected server
// data: missing bootstrap script"). Trackers gate themselves on consent
// instead — see leadfeeder.js.
//
// Consent is per-host. Sharing it with portal/www needs Cross-domain Consent
// Sharing (Domain Group) in Cookiebot Manager; nothing in this file controls it.

(function () {
  // Guard against Mintlify re-running custom scripts on client-side navigation.
  if (window.__trestleCookiebotInit) return;
  window.__trestleCookiebotInit = true;

  var loader = document.createElement("script");
  loader.id = "Cookiebot";
  loader.src = "https://consent.cookiebot.com/uc.js";
  loader.setAttribute("data-cbid", "344f6781-6477-4999-8eb5-75ae87b4b5b8");
  loader.type = "text/javascript";
  document.head.appendChild(loader);
})();
