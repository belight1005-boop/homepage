# BELIGHT 홈페이지

포트폴리오 · 브랜드 소개 · 고객 문의를 위한 정적 홈페이지입니다. 빌드 과정 없이 HTML/CSS/JS만으로 동작합니다.

## 페이지
| 파일 | 주소 | 내용 |
|---|---|---|
| `index.html` | `/` | 홈 (히어로, 소개 요약, 대표 작업, 서비스, 문의 유도) |
| `about.html` | `/about` | 소개 (철학, 숫자, 프로세스, 클라이언트) |
| `works.html` | `/works` | 작업 목록 (카테고리 필터) |
| `contact.html` | `/contact` | 연락처 + 문의 폼 |

## 수정하는 곳
- **색감·여백:** `assets/style.css` 맨 위 `:root` 값만 바꾸면 사이트 전체에 적용됩니다.
- **브랜드명:** 각 HTML의 `BELIGHT`, `hello@example.com` 등 임시 문구를 바꿔주세요.
- **작업 이미지:** `assets/` 폴더에 이미지를 넣고 `<div class="ph-1"></div>`를
  `<img src="/assets/파일명.jpg" alt="설명" style="width:100%;height:100%;object-fit:cover">`로 바꿉니다.

## 문의 폼 연결 (무료)
1. https://formspree.io 가입 → New Form 생성
2. 받은 폼 주소(`https://formspree.io/f/xxxxxxx`)로 `contact.html`의 `YOUR_FORM_ID` 부분을 교체
3. 이제 문의가 가입한 이메일로 도착합니다.

## 로컬 미리보기
```bash
npx serve .
```

## Vercel 배포
1. https://vercel.com 에 GitHub 계정으로 로그인
2. **Add New → Project** → 이 저장소 선택
3. Framework Preset: **Other**, 나머지 설정은 그대로 두고 **Deploy**
4. 이후 GitHub에 push할 때마다 자동으로 다시 배포됩니다.
