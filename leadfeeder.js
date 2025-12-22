// Dealfront Leadfeeder Tracker
// This script identifies companies visiting the Trestle documentation
// and sends visitor data to Dealfront for lead generation insights.
// Learn more: https://www.dealfront.com/leadfeeder/

(function () {
    // Create script element for Leadfeeder tracker
    var script = document.createElement('script');
    script.src = 'https://www.leadfeeder.com/tracker/crhzyCHlh3CL1Bpny5ewwINdZ1EWnALPyjKtXof9h8g.js';
    script.async = true;

    // Append to document head
    document.head.appendChild(script);

    // Initialize Leadfeeder queue for any custom tracking calls
    window.lf = window.lf || function () {
        (window.lf.q = window.lf.q || []).push(arguments);
    };
})();
