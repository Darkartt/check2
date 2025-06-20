// Single Page Apps for GitHub Pages
// MIT Licensed - https://github.com/rafgraph/spa-github-pages
// This script checks to see if a redirect is present in the query string,
// converts it back into the correct url and adds it to the
// browser's history using window.history.replaceState(...),
// which won't cause the browser to attempt to load the new url.
(function(l) {
  if (l.search[1] === '/') {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, null,
      l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
  
  // Handle redirect from 404.html
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== l.href) {
    history.replaceState(null, null, redirect);
  }
}(window.location));
