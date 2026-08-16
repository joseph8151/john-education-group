// ══════════════════════════════════════════════════
// JOHN EDUCATION GROUP — 사이트 설정 (관리자용)
// Education Business Consulting & Brand Development
//
// 이 파일의 값만 수정하면 사이트 전체에 자동 반영됩니다.
// 값이 비어있는("") 항목은 화면에 노출되지 않고 자동으로 숨겨집니다.
// ══════════════════════════════════════════════════

// ── 상담 전화번호 (한 곳에서만 관리) ───────────────
// 헤더 / 플로팅 CTA / 모바일 하단바 / 최종 CTA / 푸터의
// 모든 "전화 상담" 버튼이 아래 값을 사용합니다.
//
//   CONSULTING_PHONE      화면에 표시되는 번호   예) '02-1234-5678'
//   CONSULTING_PHONE_TEL  실제 연결되는 번호     예) '+82212345678'
//
// 값을 비워두면("") 전화 버튼은 상담폼(#consult)으로 연결되며
// 번호는 "상담 문의"로 표시됩니다.
var CONSULTING_PHONE = '';
var CONSULTING_PHONE_TEL = '';

// ── 상담 신청 폼 접수 주소 ─────────────────────────
// Formspree(https://formspree.io) 등 폼 접수 서비스의 endpoint 를 넣으세요.
// 비워두면 폼은 전송되지 않고 안내 메시지를 표시합니다.
var CONSULTING_FORM_ACTION = 'https://formspree.io/f/xxxxxxxx';

// ── 회사 / 사업자 정보 ─────────────────────────────
var SITE_CONFIG = {
  companyName: 'JOHN EDUCATION GROUP',
  representative: '',
  bizRegNo: '',
  address: '서울특별시 서초구 반포대로18길 62, 엘루크',
  phone: '',        // 푸터 표기용 (비워두면 CONSULTING_PHONE 값을 사용)
  email: '',
  hours: '',
  privacyUrl: '',
  termsUrl: ''
};
