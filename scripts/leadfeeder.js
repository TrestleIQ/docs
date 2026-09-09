// Dealfront Leadfeeder Tracker
// This script identifies companies visiting the Trestle documentation
// and sends visitor data to Dealfront for lead generation insights.
// Learn more: https://www.dealfront.com/leadfeeder/
//
// Gated on Hu-manity consent (CategoryID 4 — see the customProviders /
// customPatterns entries in hu-options.js). Mintlify can't guarantee this
// file loads after hu-options.js/hu-banner.min.js (see the note there), so
// we can't rely on load order or Hu-manity's autoblocking. Instead we poll
// Hu-manity's own consent state (window.__hu.getVar, reverse-engineered
// from the shipped hu-banner.min.js — categories[4] matches CategoryID 4
// above) and only fire the tracker once that category is granted.
//
// This fails closed: if Hu-manity never loads, or the visitor never grants
// category 4, the tracker never fires. That's intentional.

(function () {
  function categoryFourGranted() {
    var hu = window.__hu || window.hu;
    if (!hu || typeof hu.getVar !== 'function') return false;
    var consent = hu.getVar('consentData') || hu.getVar('sessionData');
    return !!(consent && consent.categories && consent.categories[4]);
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

  var fired = false;
  var attempts = 0;
  var MAX_ATTEMPTS = 60; // ~30s at 500ms

  var poll = setInterval(function () {
    attempts++;
    if (!fired && categoryFourGranted()) {
      fired = true;
      loadTracker('JMvZ8gnoO1ma2pOd');
    }
    if (fired || attempts >= MAX_ATTEMPTS) clearInterval(poll);
  }, 500);
})();
