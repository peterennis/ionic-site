// Google Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TKMGCBC');


$(function() {
  var KMCheckCount = 0;

  function linker() {
    // Append Kissmetrics IDs to dashboard links
    if (KMCheckCount < 10 && !window.KM) {
      KMCheckCount++;
      //console.log('no KM yet')
      setTimeout(linker, 300);
      return;
    }

    var els = Array.prototype.slice.call(document.querySelectorAll('a[href*="dashboard.ionicframework.com"]'));
    if(!els) {
      //console.log('no dash links')
      return;
    }

    var hsutk = window.getCookie('hubspotutk');

    // console.log(els)
    els.forEach(function(el) {
      var href = el.getAttribute('href');

      // https://stackoverflow.com/questions/44412241/is-it-possible-to-read-experimentid-and-variationid-in-javascript-with-google-op
      // var propertyId = "UA-44023830-1";
      // var experimentId = Object.keys(gaData[propertyId].experiments)[0];
      // var variationId = gaData[propertyId].experiments[experimentId];
      // console.log(experimentId, variationId)

      if (href.indexOf('?') !== -1) {

        // If a source attribute has been added to URI and an A/B test is running, append test group ID to value of source attribute
        // var sourceVal = getQuerystringParameter('source', '?' + href.split('?')[1]);
        // if (sourceVal.length && experimentId.length) {
        //   href = updateQuerystringParameter(href, 'source', sourceVal + '-' + experimentId + '-' + variationId);
        // }
        // console.log(href)

        href += '&'
      } else {
        href += '?'
      }
      href += 'kmid=' + encodeURIComponent(window.KM.i());

      // Add Hubspot UTK ID as HSID if present
      if (hsutk) {
        href += '&hsid=' + encodeURIComponent(hsutk);
      }
      el.setAttribute('href', href );
    })
  }
  linker();
});

function getQuerystringParameter(name, querystring) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(querystring);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function updateQuerystringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}

// shorthand global analytics click event helper
window.c = function(cat, lbl, el, val) {
  if (typeof val === 'undefined') {
    var val = null;
  }
  ga('send', {
    hitType: 'event',
    eventCategory: cat,
    eventAction: 'Click',
    eventLabel: lbl,
    eventValue: val,
    hitCallback: function() {
      if (!!el) {
        document.location = el.href;
      };
    }
  });
  // don't follow links until analytics is recieved
  if (!!el) {
    return false;
  }
};
