// Hu-manity consent banner for docs.trestleiq.com (TRES-6425, TRES-6708).
//
// Mintlify auto-includes every .js file in this repo into each page; it does
// NOT render docs.json `headTags` (absent from the live page payload). These
// files run after the page is interactive, in no guaranteed order, so this
// script loads hu-banner.min.js itself.
//
// blocking: false, and no customPatterns. Mintlify inlines the SOURCE of these
// scripts into its Next.js `self.__next_f.push(...)` payload scripts, so a URL
// pattern like "lfeeder.com" matches those inline scripts. With blocking on,
// Hu-manity blocks them and re-runs them on consent, which throws
// "Unexpected server data: missing bootstrap script" in Next.js and can starve
// hydration. Autoblocking cannot work here anyway (load order is not
// guaranteed), so trackers gate themselves on consent — see leadfeeder.js.
//
// globalCookie: true writes hu-consent on .trestleiq.com, so a choice saved on
// portal.trestleiq.com (or www) is honoured here and the banner is not shown
// again.

(function () {
  // Guard against Mintlify re-running custom scripts on client-side navigation.
  if (window.__trestleHuInit) return;
  window.__trestleHuInit = true;

  window.huOptions = {
    appID: "trestleiqcom-508b0ac",
    currentLanguage: "en",
    blocking: false,
    globalCookie: true,
    customProviders: [
      {
        IsCustom: true,
        CategoryID: 4,
        ProviderID: "6ec492-2230--b0f2-0f755e",
        ProviderURL: "https://www.leadfeeder.com/",
        ProviderName: "Leadfeeder",
      },
    ],
  };

  var loader = document.createElement("script");
  loader.src = "https://cdn.hu-manity.co/hu-banner.min.js";
  loader.type = "text/javascript";
  loader.charset = "utf-8";
  document.head.appendChild(loader);

  // One-click consent (TRES-6708), identical to developer-portal-ui. The
  // banner's "Essential Only" / "Accept All" are radios that only select a
  // level; nothing is stored until "Save choices". Picking a level in the
  // collapsed banner now presses Save. Skipped while "Manage preferences" is
  // expanded. Relies on vendor ids (#hu, #hu-cookies-save); if they change this
  // no-ops and the manual Save button still works.
  var pending = false;
  document.addEventListener("click", function (e) {
    var target = e.target;
    // A <label> click also fires a synthetic click on its radio; the latch
    // keeps that to one save.
    if (pending || !target || typeof target.closest !== "function") return;
    if (!target.closest('[data-hu-action^="cookies-notice-consent-choices-"]')) return;
    var banner = document.getElementById("hu");
    if (banner && banner.classList.contains("hu-expanded")) return;
    pending = true;
    // Deferred so the vendor's own level handler has set the categories first.
    setTimeout(function () {
      pending = false;
      var save = document.getElementById("hu-cookies-save");
      if (save) save.click();
    }, 0);
  });
})();
