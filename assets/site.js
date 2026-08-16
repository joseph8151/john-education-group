/* ══════════════════════════════════════════════════
   JOHN EDUCATION GROUP — site.js
   헤더 / 모바일 메뉴 / 스크롤 등장 / FAQ / 전화번호 주입
   / 플로팅 CTA / 컨설팅 상담폼
   ══════════════════════════════════════════════════ */
(function () {
  'use strict';

  var cfg = (typeof SITE_CONFIG !== 'undefined') ? SITE_CONFIG : {};
  var phoneLabel = (typeof CONSULTING_PHONE !== 'undefined') ? CONSULTING_PHONE : '';
  var phoneTel = (typeof CONSULTING_PHONE_TEL !== 'undefined' && CONSULTING_PHONE_TEL)
    ? CONSULTING_PHONE_TEL
    : phoneLabel;

  /* ── 1. 전화 상담 링크 / 번호 주입 ──────────────
     [data-tel]        → href 를 tel: 링크로 (번호 없으면 #consult)
     [data-phone]      → 텍스트를 전화번호로 (번호 없으면 fallback 유지) */
  var telHref = phoneTel ? 'tel:' + String(phoneTel).replace(/[^0-9+]/g, '') : '#consult';
  document.querySelectorAll('[data-tel]').forEach(function (el) {
    el.setAttribute('href', telHref);
    if (!phoneTel) el.setAttribute('data-tel-fallback', 'true');
  });
  if (phoneLabel) {
    document.querySelectorAll('[data-phone]').forEach(function (el) {
      el.textContent = phoneLabel;
    });
  }

  /* ── 2. 사업자/연락처 정보 렌더링 ────────────── */
  document.querySelectorAll('[data-field]').forEach(function (el) {
    var val = cfg[el.dataset.field];
    if (el.dataset.field === 'phone' && !val) val = phoneLabel;
    if (!val) return;
    var target = el.querySelector('[data-field-value]');
    if (target) { target.textContent = val; } else { el.textContent = val; }
    if (el.tagName === 'A' && el.dataset.fieldHref) el.href = val;
    el.classList.add('has-value');
  });

  /* ── 3. 헤더 스크롤 상태 + 플로팅 CTA 노출 ───── */
  var hdr = document.getElementById('hdr');
  var floatCta = document.getElementById('floatCta');
  function onScroll() {
    var y = window.scrollY;
    if (hdr) hdr.classList.toggle('scrolled', y > 8);
    if (floatCta) floatCta.classList.toggle('show', y > 620);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── 4. 모바일 메뉴 ─────────────────────────── */
  var burger = document.getElementById('burger');
  var mm = document.getElementById('mobileMenu');
  if (burger && mm && hdr) {
    burger.addEventListener('click', function () {
      var open = hdr.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mm.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hdr.classList.remove('menu-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── 5. 스크롤 등장 애니메이션 ──────────────── */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ── 6. FAQ 아코디언 ────────────────────────── */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (other) {
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = null;
        other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
        q.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ── 7. 관심 패키지 자동 선택 ────────────────
     (a) 같은 페이지의 패키지 CTA 클릭 시
     (b) 다른 페이지에서 contact.html?package=LAUNCH 로 넘어온 경우 */
  function setPackage(pkg) {
    var sel = document.getElementById('fPackage');
    if (!sel || !pkg) return;
    for (var i = 0; i < sel.options.length; i++) {
      if (sel.options[i].value === pkg) { sel.selectedIndex = i; return; }
    }
  }
  document.querySelectorAll('[data-package]').forEach(function (el) {
    el.addEventListener('click', function () { setPackage(el.dataset.package); });
  });
  try {
    var qp = new URLSearchParams(window.location.search).get('package');
    if (qp) setPackage(qp);
  } catch (e) { /* URLSearchParams 미지원 브라우저는 무시 */ }

  /* ── 8. 컨설팅 상담 신청 폼 ─────────────────── */
  document.querySelectorAll('.consult-form').forEach(function (form) {
    if (typeof CONSULTING_FORM_ACTION !== 'undefined' && CONSULTING_FORM_ACTION) {
      form.setAttribute('action', CONSULTING_FORM_ACTION);
    }
    var formErr = form.querySelector('.form-err');
    var successScreen = form.parentElement.querySelector('.success-screen');

    function showErr(msg) {
      if (!formErr) return;
      formErr.textContent = msg;
      formErr.style.display = 'block';
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // 관심 분야 1개 이상 선택 확인
      var interests = form.querySelectorAll('input[name="관심분야"]:checked');
      var interestErr = form.querySelector('.interest-required');
      if (interestErr) {
        if (interests.length === 0) {
          showErr('관심 분야를 1개 이상 선택해 주세요.');
          interestErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
      }

      if (!form.checkValidity()) {
        showErr('필수 항목을 모두 입력해 주세요.');
        form.reportValidity();
        return;
      }
      if (formErr) formErr.style.display = 'none';

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalLabel = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>접수 중…</span>';
      }

      function fail() {
        showErr('상담 신청 접수 중 문제가 발생했습니다. 잠시 후 다시 시도하시거나 전화로 문의해 주세요.');
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = originalLabel; }
      }

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.style.display = 'none';
          if (successScreen) {
            successScreen.style.display = 'block';
            successScreen.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        } else { fail(); }
      }).catch(fail);
    });
  });

  /* ── 9. 연도 ────────────────────────────────── */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
