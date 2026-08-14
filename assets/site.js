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

// 상담 신청 폼 (가맹 문의 폼이 있는 모든 페이지에서 공통 사용)
var form = document.getElementById('franchiseForm');
if (form) {
  var formErr = document.getElementById('formErr');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!form.checkValidity()){
      formErr.style.display = 'block';
      form.reportValidity();
      return;
    }
    formErr.style.display = 'none';

    var submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function(res){
      if(res.ok){
        form.style.display = 'none';
        document.getElementById('successScreen').style.display = 'block';
      } else {
        formErr.textContent = '신청 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.';
        formErr.style.display = 'block';
        submitBtn.disabled = false;
      }
    }).catch(function(){
      formErr.textContent = '신청 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.';
      formErr.style.display = 'block';
      submitBtn.disabled = false;
    });
  });
}

// 연도
var yr = document.getElementById('yr');
if (yr) { yr.textContent = new Date().getFullYear(); }
