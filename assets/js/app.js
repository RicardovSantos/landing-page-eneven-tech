/* ============================================================
   ENEVEN TECH — LP Ads
   JS mínimo: sem bibliotecas, sem dependências externas.
   ============================================================ */
(function () {
  'use strict';

  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Ano no rodapé ---------- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---------- Nav: fundo sólido ao rolar ---------- */
  var nav = document.getElementById('nav');
  var ticking = false;

  function aoRolar() {
    if (nav) nav.classList.toggle('is-stuck', window.scrollY > 40);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(aoRolar);
    }
  }, { passive: true });
  aoRolar();

  /* ---------- Menu mobile ---------- */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMobile');

  function fecharMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var aberto = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(aberto));
      toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', fecharMenu);
    });

    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) fecharMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') fecharMenu();
    });
  }

  /* ---------- Reveal ao entrar na tela ---------- */
  var alvos = document.querySelectorAll('.reveal');

  if (reduz || !('IntersectionObserver' in window)) {
    alvos.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-in');
          obs.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    alvos.forEach(function (el) { obs.observe(el); });
  }

  /* ---------- Conversa com a IA: "digita" e responde ---------- */
  var chat = document.querySelector('.chat');

  if (chat) {
    if (reduz || !('IntersectionObserver' in window)) {
      chat.classList.add('is-live');
    } else {
      var obsChat = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            setTimeout(function () { chat.classList.add('is-live'); }, 1400);
            obsChat.unobserve(entrada.target);
          }
        });
      }, { threshold: 0.45 });
      obsChat.observe(chat);
    }
  }

  /* ---------- FAQ: um aberto por vez ---------- */
  var faqs = document.querySelectorAll('.faq-item');
  faqs.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      faqs.forEach(function (outro) {
        if (outro !== item) outro.open = false;
      });
    });
  });

  /* ---------- Rastreio de cliques no WhatsApp ----------
     Cada botão vira um evento com o nome da seção de origem, para você
     saber no Google Ads / GA4 qual parte da página converteu.
     Só dispara se gtag ou dataLayer existirem — sem eles, não faz nada. */
  var secaoDoBotao = function (el) {
    if (el.dataset.origem) return el.dataset.origem;
    var sec = el.closest('section, header, footer');
    if (!sec) return 'desconhecida';
    var c = (sec.className || '').toString().match(/sec-([a-z]+)/);
    if (c) return c[1];
    if (sec.id) return sec.id;
    return sec.tagName.toLowerCase();
  };

  document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
    link.addEventListener('click', function () {
      var origem = secaoDoBotao(link);

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'clique_whatsapp', {
          event_category: 'contato',
          event_label: origem
        });
      }
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: 'clique_whatsapp', secao_origem: origem });
      }
    });
  });

  /* ---------- Botão flutuante: esconde no rodapé ---------- */
  var flutuante = document.getElementById('wppFloat');
  var rodape = document.querySelector('.rodape');

  if (flutuante && rodape && 'IntersectionObserver' in window) {
    var obsRodape = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        flutuante.style.opacity = entrada.isIntersecting ? '0' : '1';
        flutuante.style.pointerEvents = entrada.isIntersecting ? 'none' : 'auto';
      });
    }, { threshold: 0.15 });
    obsRodape.observe(rodape);
  }
})();
