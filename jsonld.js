(function () {
  var el = document.createElement('script');
  el.type = 'application/ld+json';
  el.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Trestle",
        "url": "https://trestleiq.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://docs.trestleiq.com/assets/trestle_logo.png"
        },
        "sameAs": ["https://docs.trestleiq.com"]
      },
      {
        "@type": "WebSite",
        "name": "Trestle Identity APIs - Documentation",
        "url": "https://docs.trestleiq.com"
      }
    ]
  });
  document.head.appendChild(el);
})();
