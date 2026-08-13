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

  /* ---------- Carrossel de templates ----------
     Loop infinito = animação CSS no .carrossel-trilho (translateX -50%).
     Setas = um "empurrão" suave no .carrossel-nudge (camada externa) que,
     ao terminar a transição, é zerado ao mesmo tempo em que a fase da
     animação avança o equivalente — o loop nunca para e não há salto. */
  var nudge = document.getElementById('carrosselNudge');
  var trilho = document.getElementById('carrosselTrilho');

  if (nudge && trilho && !reduz) {
    var duracao = 70;          // segundos (igual ao CSS)
    var passoPx = 340;         // ~1 card + gap por clique
    var fase = 0;              // deslocamento acumulado da animação (s)
    var travado = false;       // evita cliques durante a transição

    var larguraLoop = function () {
      // metade do trilho (o conjunto A) = distância de um ciclo completo
      return trilho.scrollWidth / 2;
    };

    var empurrar = function (dir) {
      if (travado) return;
      travado = true;
      var deslocaPx = dir * passoPx;               // +avança(esquerda) / -volta
      nudge.style.transform = 'translateX(' + (-deslocaPx) + 'px)';

      var aoFim = function () {
        nudge.removeEventListener('transitionend', aoFim);
        // converte o empurrão em avanço de fase e zera o nudge sem transição
        var fracao = deslocaPx / larguraLoop();     // fração de um ciclo
        fase = (fase + fracao * duracao) % duracao;
        if (fase < 0) fase += duracao;
        nudge.style.transition = 'none';
        nudge.style.transform = 'translateX(0)';
        trilho.style.animationDelay = (-fase) + 's';
        // força reflow e restaura a transição para o próximo clique
        void nudge.offsetWidth;
        nudge.style.transition = '';
        travado = false;
      };
      nudge.addEventListener('transitionend', aoFim);
    };

    var btnPrev = document.getElementById('carrosselPrev');
    var btnNext = document.getElementById('carrosselNext');
    if (btnPrev) btnPrev.addEventListener('click', function () { empurrar(-1); });
    if (btnNext) btnNext.addEventListener('click', function () { empurrar(1); });
  }

  /* ---------- Lightbox: amplia a página ao clicar na miniatura ---------- */
  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbPalco = document.getElementById('lbPalco');

  if (lightbox && lbImg && trilho) {
    // só o conjunto A (páginas reais, sem aria-hidden) entra na galeria
    var galeria = Array.prototype.filter.call(
      trilho.querySelectorAll('.tpl'),
      function (t) { return t.getAttribute('aria-hidden') !== 'true'; }
    );
    var indiceAtual = -1;
    var focoAnterior = null;

    var fontesDa = function (tpl) {
      var img = tpl.querySelector('img');
      return { src: img.getAttribute('src'), alt: img.getAttribute('alt') || 'Página ampliada' };
    };

    var mostrar = function (i) {
      indiceAtual = (i + galeria.length) % galeria.length;
      var info = fontesDa(galeria[indiceAtual]);
      lbImg.setAttribute('src', info.src);
      lbImg.setAttribute('alt', info.alt);
      if (lbPalco) lbPalco.scrollTop = 0;   // sempre começa do topo da página
    };

    var abrir = function (i) {
      focoAnterior = document.activeElement;
      mostrar(i);
      lightbox.hidden = false;
      // força reflow para a transição de entrada rodar
      void lightbox.offsetWidth;
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      var fechar = document.getElementById('lbFechar');
      if (fechar) fechar.focus();
    };

    var fechar = function () {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
      var aoFim = function () {
        lightbox.removeEventListener('transitionend', aoFim);
        lightbox.hidden = true;
        lbImg.setAttribute('src', '');
      };
      lightbox.addEventListener('transitionend', aoFim);
      if (focoAnterior && focoAnterior.focus) focoAnterior.focus();
    };

    // torna cada miniatura clicável e acessível por teclado
    galeria.forEach(function (tpl, i) {
      tpl.setAttribute('role', 'button');
      tpl.setAttribute('tabindex', '0');
      tpl.setAttribute('aria-label', 'Ampliar página');
      tpl.addEventListener('click', function () { abrir(i); });
      tpl.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(i); }
      });
    });

    var lbFechar = document.getElementById('lbFechar');
    var lbPrev = document.getElementById('lbPrev');
    var lbNext = document.getElementById('lbNext');
    if (lbFechar) lbFechar.addEventListener('click', fechar);
    if (lbPrev) lbPrev.addEventListener('click', function () { mostrar(indiceAtual - 1); });
    if (lbNext) lbNext.addEventListener('click', function () { mostrar(indiceAtual + 1); });

    // clique no fundo (fora da imagem) fecha
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) fechar();
    });

    // teclado: ESC fecha, setas navegam
    document.addEventListener('keydown', function (e) {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') fechar();
      else if (e.key === 'ArrowLeft') mostrar(indiceAtual - 1);
      else if (e.key === 'ArrowRight') mostrar(indiceAtual + 1);
    });
  }

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
