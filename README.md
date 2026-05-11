# Hong Portfolio

Next.js로 만든 개인 포트폴리오 사이트입니다. GitHub Pages 정적 배포를 기준으로 설정되어 있습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 열면 됩니다.

## 확인

```bash
npm run lint
npm run build
```

`next.config.ts`의 `output: "export"` 설정으로 빌드 결과가 `out/` 폴더에 생성됩니다.

## GitHub Pages 배포

`.github/workflows/deploy.yml` 워크플로가 `main` 또는 `master` 브랜치 push 시 `out/` 폴더를 GitHub Pages에 배포합니다.

GitHub 저장소 설정에서 `Settings > Pages > Build and deployment`의 source를 `GitHub Actions`로 선택하세요.
