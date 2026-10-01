// Dealfront Leadfeeder Tracker
// This script identifies companies visiting the Trestle documentation
// and sends visitor data to Dealfront for lead generation insights.
// Learn more: https://www.dealfront.com/leadfeeder/
//
// Gated on Hu-manity consent for CategoryID 4 (the Leadfeeder customProvider
// in hu-options.js). Mintlify gives no load-order guarantee between this file
// and hu-options.js, and Hu-manity autoblocking is off on docs (see the note
// there), so this script checks consent itself:
//   - consent already read (returning visitor): window.__hu.getVar
//   - consent read or saved later: the read-consent.hu / set-consent.hu events
//     Hu-manity dispatches on document (detail = consent data).
// Fails closed: no saved consent with category 4 granted, no tracker.

(function () {
  // Guard against Mintlify re-running custom scripts on client-side navigation.
  if (window.__trestleLeadfeederGate) return;
  window.__trestleLeadfeederGate = true;

  var fired = false;

  function granted(consent) {
    // consent === true means a saved choice. Before that, Hu-manity's consent
    // data holds the banner's pre-selected defaults, which are not consent.
    return !!(consent && consent.consent === true && consent.categories && consent.categories[4]);
  }

  function loadTracker(ss, ex) {
    window.ldfdr = window.ldfdr || function () {
      (ldfdr._q = ldfdr._q || []).push([].slice.call(arguments));
    };
    (function (d, s) {
      var fs = d.getElementsByTagName(s)[0];
      function ce(src) {
        var cs = d.createElement(s);
        cs.src = src;
        cs.async = 1;
        fs.parentNode.insertBefore(cs, fs);
      }
      ce('https://sc.lfeeder.com/lftracker_v1_' + ss + (ex ? '_' + ex : '') + '.js');
    })(document, 'script');
  }

  function maybeFire(consent) {
    if (fired || !granted(consent)) return;
    fired = true;
    loadTracker('JMvZ8gnoO1ma2pOd');
  }

  function onConsentEvent(e) {
    maybeFire(e && e.detail);
  }
  document.addEventListener('read-consent.hu', onConsentEvent);
  document.addEventListener('set-consent.hu', onConsentEvent);

  // Hu-manity may already have read the cookie before this file ran.
  var hu = window.__hu || window.hu;
  if (hu && typeof hu.getVar === 'function') maybeFire(hu.getVar('consentData'));
})();
