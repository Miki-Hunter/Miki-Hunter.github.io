/* ============================================================
   Fly2Sun.eu.org — Shared Component Loader
   Injects nav, footer, starfield canvas, and overlays.
   Uses i18n via _t() for bilingual text.
   ============================================================ */

(function () {
  var path = window.location.pathname;
  var isSubPage = path.indexOf('/pages/') !== -1;
  var currentPage = path.split('/').pop() || 'index.html';
  var prefix = isSubPage ? '../' : '';
  var pagePrefix = isSubPage ? '' : 'pages/';

  var homeHref = isSubPage ? '../index.html' : './';

  // ── Nav items (i18n keys) ──
  var navDefs = [
    { href: homeHref,                 key: 'nav.home',      match: ['index.html', ''] },
    { href: pagePrefix + 'planets.html',   key: 'nav.planets',    match: ['planets.html'] },
    { href: pagePrefix + 'gallery.html',   key: 'nav.gallery',    match: ['gallery.html'] },
    { href: pagePrefix + 'missions.html',  key: 'nav.missions',   match: ['missions.html'] },
    { href: pagePrefix + 'knowledge.html', key: 'nav.knowledge',  match: ['knowledge.html'] },
    { href: pagePrefix + 'observe.html',   key: 'nav.observe',    match: ['observe.html'] },
    { href: pagePrefix + 'links.html',     key: 'nav.links',      match: ['links.html'] },
    { href: pagePrefix + 'about.html',     key: 'nav.about',      match: ['about.html'] }
  ];

  function isActive(item) {
    for (var j = 0; j < item.match.length; j++) {
      if (currentPage === item.match[j]) return true;
    }
    return (currentPage === '' && item.match[0] === 'index.html');
  }

  function buildNav() {
    var links = '';
    for (var i = 0; i < navDefs.length; i++) {
      var d = navDefs[i];
      links += '<a href="' + d.href + '"' + (isActive(d) ? ' class="active"' : '') + ' data-i18n="' + d.key + '">' + (window._t ? _t(d.key) : d.key) + '</a>';
      if (i < navDefs.length - 1) links += '\n                ';
    }
    var logoHref = isSubPage ? '../index.html' : './';
    return '<nav class="site-nav">\n' +
      '    <a href="' + logoHref + '" class="nav-logo" data-i18n="nav.logo">' + (window._t ? _t('nav.logo') : 'Fly2Sun') + '</a>\n' +
      '    <button class="nav-toggle" aria-label="Menu" title="' + (window._t ? _t('lang.switchTo') : '') + '">\n' +
      '        <span></span><span></span><span></span>\n' +
      '    </button>\n' +
      '    <div class="nav-links">\n' +
      '        ' + links + '\n' +
      '        <button class="lang-switch" data-i18n-title="lang.switchTo" title="' + (window._t ? _t('lang.switchTo') : 'Switch Language') + '" onclick="if(window._toggleLang)_toggleLang()" data-i18n="lang.label">' + (window._t ? _t('lang.label') : 'EN') + '</button>\n' +
      '    </div>\n' +
      '</nav>';
  }

  function buildFooter() {
    return '<footer class="site-footer">\n' +
      '    <p data-i18n="footer.line1">' + (window._t ? _t('footer.line1') : '') + '</p>\n' +
      '    <p data-i18n="footer.line2">' + (window._t ? _t('footer.line2') : '') + '</p>\n' +
      '    <p style="font-size:0.65rem;color:var(--text-muted);" data-i18n="footer.data">' + (window._t ? _t('footer.data') : '') + '</p>\n' +
      '</footer>';
  }

  var overlayHTML = '<canvas id="starCanvas"></canvas>\n<div class="scanlines"></div>';

  function inject() {
    var body = document.body;
    if (!body) return;
    body.insertAdjacentHTML('afterbegin', overlayHTML);
    var pw = body.querySelector('.page-wrap');
    if (pw) {
      pw.insertAdjacentHTML('beforebegin', buildNav());
      pw.insertAdjacentHTML('afterend', buildFooter());
    }
  }

  // ── Rebuild on language change ──
  function rebuildNavFooter() {
    var oldNav = document.querySelector('.site-nav');
    var oldFooter = document.querySelector('.site-footer');
    var pw = document.querySelector('.page-wrap');
    if (!pw) return;
    if (oldNav) oldNav.remove();
    if (oldFooter) oldFooter.remove();
    pw.insertAdjacentHTML('beforebegin', buildNav());
    pw.insertAdjacentHTML('afterend', buildFooter());
    // Re-init nav toggle listeners (from main.js)
    if (window._reinitNav) window._reinitNav();
  }

  window.addEventListener('langchange', rebuildNavFooter);

  if (document.body) {
    inject();
  } else {
    document.addEventListener('DOMContentLoaded', inject);
  }
})();
