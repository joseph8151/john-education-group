// 연락처/사업자 정보 렌더링 (assets/config.js — 값이 없는 항목은 노출하지 않음)
if (typeof SITE_CONFIG !== 'undefined') {
  document.querySelectorAll('[data-field]').forEach(function(el){
    var val = SITE_CONFIG[el.dataset.field];
    if (!val) return;
    var target = el.querySelector('[data-field-value]');
    if (target) { target.textContent = val; } else { el.textContent = val; }
    if (el.tagName === 'A' && el.dataset.fieldHref) { el.href = val; }
    el.classList.add('has-value');
  });
}

// 헤더 스크롤 그림자
var hdr = document.getElementById('hdr');
if (hdr) {
  window.addEventListener('scroll', function(){ hdr.classList.toggle('scrolled', window.scrollY > 8); }, {passive:true});
}

// 모바일 메뉴
var burger = document.getElementById('burger'), mm = document.getElementById('mobileMenu');
if (burger && mm) {
  burger.addEventListener('click', function(){
    var open = mm.style.display === 'flex';
    mm.style.display = open ? 'none' : 'flex';
  });
  mm.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ mm.style.display='none'; }); });
}

// 스크롤 등장 애니메이션
var io = new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:.1});
document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

// FAQ 아코디언
document.querySelectorAll('.faq-item').forEach(function(item){
  var q = item.querySelector('.faq-q');
  var a = item.querySelector('.faq-a');
  q.addEventListener('click', function(){
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function(other){
      other.classList.remove('open');
      other.querySelector('.faq-a').style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

// 상담/파트너십 가이드 신청 폼 — 한 페이지에 여러 개(.franchise-form) 있어도 각각 독립 동작
document.querySelectorAll('.franchise-form').forEach(function(form){
  var formErr = form.querySelector('.form-err');
  var successScreen = form.parentElement.querySelector('.success-screen');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!form.checkValidity()){
      if (formErr) formErr.style.display = 'block';
      form.reportValidity();
      return;
    }
    if (formErr) formErr.style.display = 'none';

    var submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function(res){
      if(res.ok){
        form.style.display = 'none';
        if (successScreen) successScreen.style.display = 'block';
      } else if (formErr) {
        formErr.textContent = '신청 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.';
        formErr.style.display = 'block';
        submitBtn.disabled = false;
      }
    }).catch(function(){
      if (formErr) {
        formErr.textContent = '신청 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.';
        formErr.style.display = 'block';
      }
      submitBtn.disabled = false;
    });
  });
});

// 연도
var yr = document.getElementById('yr');
if (yr) { yr.textContent = new Date().getFullYear(); }
