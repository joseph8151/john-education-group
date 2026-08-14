# JOHN EDUCATION GROUP — 공식 웹사이트

가맹점 · 학원 원장 · 공부방 원장 · 신규 교육사업 창업 희망자 모집을 목적으로 하는
**존 에듀케이션 그룹**의 프랜차이즈 본사 홈페이지입니다. 순수 HTML/CSS/JS 로 제작되어
빌드 도구 없이 바로 배포할 수 있습니다.

## 파일
- `index.html` — 메인 홈페이지 (Hero, 5개 교육 브랜드, Find Your Model 추천 UI, 가맹 절차, FAQ, 상담폼 등 전체 섹션)
- `franchise.html` — 프랜차이즈 종합 안내 (Why Partner, 가맹 절차, 사업 유연성, 매출 모델, 브랜드 탐색)
- `academy-owners.html` — 기존 학원 원장님을 위한 Add a Program 안내
- `study-room.html` — 공부방·소형 교습소 모델 안내
- `contact.html` — 가맹 상담 신청 전용 페이지
- `prep-academy.html` / `early-childhood.html` / `elementary-english.html` / `adult-language.html` / `music-academy.html` — 5개 교육 브랜드 상세페이지
- `assets/styles.css` / `assets/site.js` — 전 페이지 공용 스타일·스크립트 (헤더 스크롤, 모바일 메뉴, 스크롤 등장, FAQ 아코디언, 상담폼 검증)
- `robots.txt` / `sitemap.xml` — 검색엔진용
- `wrangler.jsonc` — Cloudflare 독립 배포 설정
- `.assetsignore` — 배포 제외 파일 목록

## 배포 전 채워야 하는 값 (각 페이지의 `[ ]` 부분)
- 전화번호 / 이메일 / 본사 주소 (Contact 섹션, 모든 페이지 공통)
- 상담폼 `action` — 전용 Formspree 주소 (현재 `xxxxxxxx` 자리표시자, 모든 페이지의 `#franchiseForm`)
- 도메인 — `canonical`, `og:url`, `robots.txt`, `sitemap.xml` 의 `johneducationgroup.com` 을 실제 도메인으로 교체
- 사업자 정보 (푸터, 모든 페이지 공통)
- `.photo` 영역 — 현재는 실사진 대신 브랜드 톤의 추상 placeholder 입니다. 실사진 준비 후 교체 필요

## ⚠️ 배포 규칙 (중요 — 사이트 충돌 방지)
이 사이트는 **자기만의 Cloudflare 서버(Worker)** 에만 배포되어야 합니다.

- 이 저장소의 Worker 이름 = **`john-education-group`** (`wrangler.jsonc` 참고)
- **절대** `blossom-books`, `john-prep-tutoring` 등 다른 사이트의 서버에 배포하지 마세요. 이름이 겹치면 그 사이트를 덮어씁니다.
- 대시보드에서 연결할 때 새 프로젝트 이름을 반드시 `john-education-group` 로 두세요 (기존 프로젝트에 연결 ❌).
