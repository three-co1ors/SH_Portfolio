# SH Portfolio

정적 HTML/CSS/JavaScript 포트폴리오. 별도 패키지 설치 또는 빌드가 필요 없습니다.

- `index.html`: 메인
- `hivibe.html`, `howsu.html`, `farm.html`, `oheng.html`: 프로젝트 상세
- `styles.css`, `script.js`: 공통 디자인 및 이미지/영상 모달
- `images/`: 실제 프로젝트 이미지 19개 및 게임 플레이 영상 6개

## 실행

폴더에서 `python -m http.server 8000` 실행 후 http://localhost:8000 접속.

## Vercel 신규 배포

ZIP 내부 파일을 새 GitHub 저장소 최상위에 업로드합니다. Vercel에서 새 프로젝트를 생성하고 저장소를 Import합니다. Framework Preset은 Other, Root Directory는 ./, Build Command는 비워 두고 Output Directory는 . 으로 설정합니다. 환경 변수는 필요 없습니다.

이미지/영상은 로컬 정적 파일로 제공됩니다. 외부 기술 배지 서비스는 사용하지 않습니다. 캡처에 표시되는 테스트 계정 및 예시 수치는 공개 전에 확인하세요.
