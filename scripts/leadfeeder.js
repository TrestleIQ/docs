// Dealfront Leadfeeder Tracker
// This script identifies companies visiting the Trestle documentation
// and sends visitor data to Dealfront for lead generation insights.
// Learn more: https://www.dealfront.com/leadfeeder/
//
// Gated on Cookiebot marketing consent (Leadfeeder is a marketing tracker).
// Mintlify gives no load-order guarantee between this file and cookiebot.js,
// and Cookiebot auto-blocking is off on docs (see the note there), so this
// script checks consent itself:
//   - consent already known (returning visitor): window.Cookiebot.consent
//   - consent loaded or saved later: the CookiebotOnConsentReady /
//     CookiebotOnAccept events Cookiebot dispatches on window.
// Fails closed: no explicit marketing consent, no tracker.

(function () {
  // Guard against Mintlify re-running custom scripts on client-side navigation.
  if (window.__trestleLeadfeederGate) return;
  window.__trestleLeadfeederGate = true;

  var fired = false;

  function granted() {
    var cb = window.Cookiebot;
    // method === "explicit" keeps this fail-closed: Cookiebot can report
    // marketing === true under implied consent (opt-out regions) before the
    // visitor has made any choice, which is not consent for this tracker.
    return !!(cb && cb.consent && cb.consent.marketing === true && cb.consent.method === 'explicit');
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

  function maybeFire() {
    if (fired || !granted()) return;
    fired = true;
    loadTracker('JMvZ8gnoO1ma2pOd');
  }

  window.addEventListener('CookiebotOnConsentReady', maybeFire);
  window.addEventListener('CookiebotOnAccept', maybeFire);

  // Cookiebot may already have read the cookie before this file ran.
  maybeFire();
})();
