# JOHN EDUCATION GROUP — 공식 웹사이트

**Education Business Consulting & Brand Development**

대한민국 학원 원장·예비 원장·교육사업자를 위한 **프리미엄 교육사업 컨설팅 회사** 홈페이지입니다.
순수 HTML/CSS/JS 로 제작되어 빌드 도구 없이 바로 배포할 수 있습니다.

> 포지셔닝: 조언만 제공하는 컨설팅이 아니라, 아이디어부터 브랜드 런칭·홈페이지·커리큘럼·강사 채용·
> 마케팅·상담 시스템까지 **교육사업에 필요한 모든 것을 구축하는 실행형 컨설팅 회사**.
> 프랜차이즈 가맹점 모집 성격의 콘텐츠는 사이트 전체에서 제거되었습니다.

## 파일 구조

| 파일 | 내용 |
|---|---|
| `index.html` | 메인 페이지 — Hero / Why / 대상 / What We Build / 교육사업 전문성 / 브랜드 모델 / 패키지 / 월 운영지원 / ROI / Before·After / Process / FAQ / 상담폼 / Final CTA |
| `services.html` | What We Build 상세 — 7개 구축 영역별 심화 설명 |
| `cases.html` | Our Work — 산출물 목록, 프로젝트 진행 방식, 컨설팅 사례, 후기, 대표 컨설턴트, 작업 원칙 |
| `packages.html` | 컨설팅 패키지 및 비용 상세 — START / LAUNCH / PREMIUM, 월 운영지원, 비용 FAQ |
| `brand-models.html` | 구축 가능한 10가지 교육 브랜드 모델 상세 |
| `contact.html` | 상담 신청 전용 페이지 |
| `assets/config.js` | **관리자 설정 파일** — 전화번호, 폼 접수 주소, 사업자 정보 |
| `assets/styles.css` | 전 페이지 공용 디자인 시스템 |
| `assets/site.js` | 헤더 / 모바일 메뉴 / 스크롤 등장 / FAQ / 전화링크 주입 / 플로팅 CTA / 상담폼 / 사례·후기 렌더링 |
| `assets/images/*.svg` | 커스텀 라인아트 일러스트 11종 (Champagne/Charcoal/Gold 팔레트) |
| `robots.txt` · `sitemap.xml` | 검색엔진용 |
| `wrangler.jsonc` · `.assetsignore` | Cloudflare 독립 배포 설정 |

## ⚙️ 배포 전 채워야 하는 값

모든 설정은 **`assets/config.js` 한 파일**에서 관리합니다.

```js
var CONSULTING_PHONE     = '02-1234-5678';   // 화면에 표시되는 전화번호
var CONSULTING_PHONE_TEL = '+82212345678';   // 실제 연결되는 번호 (tel: 링크)
var CONSULTING_FORM_ACTION = 'https://formspree.io/f/xxxxxxxx';  // 폼 접수 주소
var SITE_CONFIG = { representative: '…', bizRegNo: '…', email: '…', hours: '…' };
```

- **전화번호** — `CONSULTING_PHONE` 값을 채우면 헤더 / 히어로 / 플로팅 CTA / 모바일 하단바 /
  최종 CTA / 푸터의 **모든 "전화 상담" 버튼**에 자동 반영되고, 모바일에서는 `tel:` 링크로
  바로 전화가 연결됩니다. 비워두면 전화 버튼은 상담폼으로 연결됩니다.
- **상담폼 접수 주소** — `CONSULTING_FORM_ACTION` 에 Formspree 등의 endpoint 를 넣으세요.
  각 HTML 의 `action` 속성보다 이 값이 우선 적용됩니다.
- **사업자 정보** — `SITE_CONFIG` 의 빈 항목은 화면에 노출되지 않고 자동으로 숨겨집니다.
- **도메인** — `canonical`, `og:url`, `robots.txt`, `sitemap.xml` 의 `johneducationgroup.com`
  을 실제 도메인으로 교체하세요.

## 📌 실적 · 신뢰 콘텐츠 (사례 · 후기 · 컨설턴트)

`cases.html` 의 아래 세 섹션은 **`assets/config.js` 의 데이터로 그려지며, 비어 있으면 섹션이
사이트에서 통째로 사라집니다.**

| 변수 | 섹션 | 기본값 |
|---|---|---|
| `CASE_STUDIES` | 컨설팅 사례 (`cases.html#cases`) | `[]` — 숨김 |
| `TESTIMONIALS` | 원장님 후기 (`cases.html#testimonials`, `index.html#testimonials`) | **후기 20개 입력됨** (기본 6개 노출 + 더 보기) |
| `CONSULTANT` | 대표 컨설턴트 (`cases.html#consultant`) | `null` — 숨김 |

각 변수의 입력 형식은 `assets/config.js` 주석에 예시와 함께 적어두었습니다.

> ⚠️ **없는 사례나 후기를 지어내 채우지 마세요.**
> 허위·과장 광고는 표시광고법 위반 소지가 있고, 컨설팅 회사가 신뢰를 잃는 가장 빠른 길입니다.
> 사례는 고객사 동의를 받아 `"서울 강남 · 초등 영어"` 처럼 익명 처리하는 것을 권장하며,
> 후기는 실제로 받은 원문을 게재 동의를 받은 뒤에만 올리세요.
> `"매출 3배"` 같은 수치는 근거 자료를 보관할 수 있을 때만 사용하세요.

실적이 쌓이기 전까지는, 지어내지 않고도 신뢰를 만드는 콘텐츠가 이미 채워져 있습니다 —
**산출물 목록**(`#deliverables`), **프로젝트 진행 방식**(`#how`), **작업 원칙**(`#principles`).

## 전환(Conversion) 설계

모든 페이지의 최종 목표는 **"상담 신청"** 과 **"전화 상담"** 두 가지로 통일되어 있습니다.

```
홈페이지 방문 → 컨설팅 내용 확인 → 가격 확인 → 성공 가능성 확인
→ 상담폼 제출 → 전화 상담 → 맞춤 제안 → 계약
```

- 온라인 즉시 결제 기능은 **의도적으로 넣지 않았습니다.** 상담을 통해 프로젝트 범위를
  확정한 뒤 계약하는 구조입니다.
- PC 는 우측 하단 플로팅 CTA(전화 상담 / 컨설팅 문의), 모바일은 하단 고정 CTA 2개가
  항상 노출됩니다.
- `packages.html` 의 패키지 CTA 는 `contact.html?package=LAUNCH` 형태로 연결되어
  상담폼의 "관심 패키지" 항목이 자동 선택됩니다.

## 디자인

글로벌 컨설팅 회사 + 미국 프리미엄 교육기업의 톤. 큰 타이포그래피와 넓은 여백 중심.

| 색상 | 값 | 용도 |
|---|---|---|
| Champagne Ivory | `#F6F1E8` | 메인 배경 |
| Deep Charcoal | `#202224` | 본문 텍스트 · 다크 섹션 |
| Champagne Gold | `#C6A76A` | 액센트 (전체의 10~15%) |
| Soft Beige | `#E9E0D2` | 보조 배경 |
| White | `#FFFFFF` | 카드 · 폼 |

서체는 Cormorant Garamond(영문 세리프) + Pretendard(국문)를 사용합니다.

## ⚠️ 배포 규칙 (중요 — 사이트 충돌 방지)

이 사이트는 **자기만의 Cloudflare 서버(Worker)** 에만 배포되어야 합니다.

- 이 저장소의 Worker 이름 = **`john-education-group`** (`wrangler.jsonc` 참고)
- **절대** `blossom-books`, `john-prep-tutoring` 등 다른 사이트의 서버에 배포하지 마세요.
  이름이 겹치면 그 사이트를 덮어씁니다.
- 대시보드에서 연결할 때 새 프로젝트 이름을 반드시 `john-education-group` 로 두세요
  (기존 프로젝트에 연결 ❌).

## 개편 이력 (이전 버전 대비)

프랜차이즈 본사 성격의 아래 페이지들은 **삭제**되었습니다.
기존 URL 이 검색엔진에 색인되어 있었다면 배포 후 리디렉션 설정을 권장합니다.

| 삭제된 페이지 | 권장 리디렉션 |
|---|---|
| `franchise.html` | `/services.html` |
| `academy-owners.html` | `/services.html` |
| `study-room.html` | `/brand-models.html` |
| `prep-academy.html` · `early-childhood.html` · `elementary-english.html` · `adult-language.html` · `music-academy.html` | `/brand-models.html` |
