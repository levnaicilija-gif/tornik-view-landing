/* Tornik View — shared cookie consent (Consent Mode v2, key tv_cookie_consent) */
(function () {
  var KEY = 'tv_cookie_consent';
  var lang = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
  if (lang !== 'sr' && lang !== 'ru') lang = 'en';
  var T = {
    en: { text: 'We use cookies to understand how visitors use our site and improve your experience. Essential cookies are always active. Read our ', link: 'Privacy Policy', href: '/privacy.html', accept: 'Accept All', reject: 'Reject Non-Essential' },
    sr: { text: 'Koristimo kolačiće da bismo razumeli kako posetioci koriste sajt i poboljšali vaše iskustvo. Neophodni kolačići su uvek aktivni. Pročitajte našu ', link: 'Politiku privatnosti', href: '/sr/privacy.html', accept: 'Prihvati sve', reject: 'Odbij nebitne' },
    ru: { text: 'Мы используем файлы cookie, чтобы понять, как посетители используют сайт, и улучшить ваш опыт. Необходимые файлы cookie всегда активны. Ознакомьтесь с нашей ', link: 'Политикой конфиденциальности', href: '/ru/privacy.html', accept: 'Принять все', reject: 'Отклонить необязательные' }
  }[lang];

  try {
    var prior = localStorage.getItem(KEY);
    if (prior) {
      if (prior === 'accepted' && typeof gtag === 'function') gtag('consent', 'update', { 'analytics_storage': 'granted' });
      return;
    }
  } catch (e) { return; }

  function inject() {
    var css = ".tvcc{position:fixed;bottom:20px;left:20px;right:20px;max-width:520px;margin:0 auto;background:rgba(26,46,38,.97);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(212,168,87,.3);border-radius:12px;padding:20px 22px;box-shadow:0 20px 60px rgba(0,0,0,.4);z-index:10000;transform:translateY(150%);transition:transform .6s cubic-bezier(.4,0,.2,1);font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif}"
      + ".tvcc.tvcc-show{transform:translateY(0)}"
      + ".tvcc-text{font-size:.8125rem;line-height:1.6;color:#F5F1E8;opacity:.92;margin:0 0 16px}"
      + ".tvcc-text a{color:#D4A857;text-decoration:none;border-bottom:1px solid rgba(212,168,87,.5)}"
      + ".tvcc-btns{display:flex;gap:8px;flex-wrap:wrap}"
      + ".tvcc-btn{flex:1;min-width:120px;padding:10px 18px;border-radius:100px;font-family:'Inter',sans-serif;font-size:.75rem;font-weight:500;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .25s ease;border:1px solid transparent}"
      + ".tvcc-accept{background:#D4A857;color:#1a2e26}.tvcc-accept:hover{background:#E8B96A}"
      + ".tvcc-reject{background:transparent;color:#F5F1E8;border-color:rgba(245,241,232,.3)}.tvcc-reject:hover{border-color:rgba(245,241,232,.6)}"
      + "@media(max-width:560px){.tvcc{left:12px;right:12px;bottom:12px;padding:18px}.tvcc-btn{min-width:100%}}";
    var style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);
    var bar = document.createElement('div');
    bar.className = 'tvcc';
    bar.setAttribute('role', 'dialog'); bar.setAttribute('aria-live', 'polite'); bar.setAttribute('aria-label', 'Cookie consent');
    bar.innerHTML = '<p class="tvcc-text">' + T.text + '<a href="' + T.href + '">' + T.link + '</a>.</p>'
      + '<div class="tvcc-btns"><button class="tvcc-btn tvcc-reject" type="button">' + T.reject + '</button>'
      + '<button class="tvcc-btn tvcc-accept" type="button">' + T.accept + '</button></div>';
    document.body.appendChild(bar);
    function hide() { bar.classList.remove('tvcc-show'); setTimeout(function () { if (bar.parentNode) bar.parentNode.removeChild(bar); }, 600); }
    bar.querySelector('.tvcc-accept').addEventListener('click', function () {
      try { localStorage.setItem(KEY, 'accepted'); } catch (e) {}
      if (typeof gtag === 'function') gtag('consent', 'update', { 'analytics_storage': 'granted' });
      hide();
    });
    bar.querySelector('.tvcc-reject').addEventListener('click', function () {
      try { localStorage.setItem(KEY, 'rejected'); } catch (e) {}
      hide();
    });
    setTimeout(function () { bar.classList.add('tvcc-show'); }, 800);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject); else inject();
})();
