# JOHN EDUCATION GROUP — 공식 웹사이트

원어민 1:1 방문 영어부터 학업·시험 대비까지 아우르는 프리미엄 교육 그룹,
**존 에듀케이션 그룹**의 홈페이지입니다. 순수 HTML/CSS/JS 로 제작되어 빌드 도구 없이 바로 배포할 수 있습니다.

## 파일
- `index.html` — 메인 홈페이지 (단일 파일, CSS/JS 인라인)
- `robots.txt` / `sitemap.xml` — 검색엔진용
- `wrangler.jsonc` — Cloudflare 독립 배포 설정
- `.assetsignore` — 배포 제외 파일 목록

## 배포 전 채워야 하는 값 (`index.html` 안의 `[ ]` 부분)
- 전화번호 / 이메일 / 운영 지역 (Contact 섹션)
- 상담폼 `action` — 전용 Formspree 주소 (현재 `xxxxxxxx` 자리표시자)
- 도메인 — `canonical`, `og:url`, `robots.txt`, `sitemap.xml` 의 `johneducationgroup.com` 을 실제 도메인으로 교체
- 사업자 정보 (푸터)

## ⚠️ 배포 규칙 (중요 — 사이트 충돌 방지)
이 사이트는 **자기만의 Cloudflare 서버(Worker)** 에만 배포되어야 합니다.

- 이 저장소의 Worker 이름 = **`john-education-group`** (`wrangler.jsonc` 참고)
- **절대** `blossom-books`, `john-prep-tutoring` 등 다른 사이트의 서버에 배포하지 마세요. 이름이 겹치면 그 사이트를 덮어씁니다.
- 대시보드에서 연결할 때 새 프로젝트 이름을 반드시 `john-education-group` 로 두세요 (기존 프로젝트에 연결 ❌).
