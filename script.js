/* =========================================================
   育華國小 四年忠班 教學網站 — 互動腳本
   純原生 JavaScript，無需任何外部相依套件
   ========================================================= */
(function () {
  'use strict';

  var header    = document.querySelector('.site-header');
  var navToggle = document.getElementById('navToggle');
  var navMenu   = document.getElementById('navMenu');
  var toTop     = document.getElementById('toTop');
  var printBtn  = document.getElementById('printBtn');

  /* ---------- 1. 手機選單開關 ---------- */
  function closeMenu() {
    if (!navMenu) return;
    navMenu.classList.remove('open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', '開啟選單');
      navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? '關閉選單' : '開啟選單');
      navToggle.innerHTML = open
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    navMenu.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });

    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) closeMenu();
    });
  }

  /* ---------- 2. 捲動時的頁首陰影 + 回到頂端鈕 ---------- */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('scrolled', y > 20);
    if (toTop) toTop.classList.toggle('show', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- 3. 進場動畫（IntersectionObserver） ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('show'); });
  }

  /* ---------- 4. 數字跑馬燈 ---------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var dur = 1200, start = null;

    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);          // easeOutCubic
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          co.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
  }

  /* ---------- 5. 導覽列目前區段高亮（scroll spy） ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var sections = links
    .map(function (l) {
      var href = l.getAttribute('href');
      return href && href.charAt(0) === '#' ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  function spy() {
    var pos = (window.scrollY || window.pageYOffset) + 140;
    var current = 0;
    sections.forEach(function (sec, i) {
      if (sec.offsetTop <= pos) current = i;
    });
    links.forEach(function (l, i) { l.classList.toggle('active', i === current); });
  }
  window.addEventListener('scroll', spy, { passive: true });
  window.addEventListener('load', spy);
  spy();

  /* ---------- 6. 列印按鈕 ---------- */
  if (printBtn) {
    printBtn.addEventListener('click', function () { window.print(); });
  }

  /* ---------- 7. 頁尾年份 ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 8. 鍵盤快速鍵（Home 回到頂端） ---------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Home' && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
})();
