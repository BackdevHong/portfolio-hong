export const profile = {
  name: "홍인성",
  role: "Full-stack Web Developer",
  email: "ghddls0704@kakao.com",
  github: "https://github.com/BackdevHong",
  resume: "/resume/hong-inseong-resume.pdf",
  heroTitle: "화면과 API를 만들고 배포 뒤까지 확인하는 풀스택 웹 개발자",
  heroDescription:
    "제조 현장에서 1년 6개월 동안 공정 데이터를 다뤘습니다. 지금은 React·Next.js로 화면을 만들고 FastAPI·Node.js로 API를 붙입니다. 로그인과 결제, RAG, Cloud 배포도 다뤘습니다. 만든 기능은 실제 배포 환경에서 다시 확인합니다.",
};

export const metrics = [
  { label: "제조 데이터 실무", value: "1Y 6M" },
  { label: "화면 + 서버", value: "Full-stack" },
  { label: "배포 환경", value: "Cloud" },
];

export const experience = [
  {
    company: "㈜연합시스템",
    team: "IT · 도제학생(사원)",
    period: "2021.08 — 2023.01",
    duration: "1Y 6M",
    summary:
      "공정 데이터를 직접 확인했고 손으로 반복하던 정리 작업은 Python 코드로 바꿨습니다.",
    highlights: [
      "MySQL에 쌓인 공정 이력에서 이상값을 찾았습니다. 바로 고치지 않고 현업 담당자와 업무 기준·예외부터 맞췄습니다.",
      "같은 전처리를 여러 번 하던 작업은 Python·Pandas 코드로 옮겨 다시 쓸 수 있게 정리했습니다.",
      "lot 번호를 넣으면 공정 이력을 조회하고 예상 완료 시간을 계산하는 도구를 만들었습니다.",
    ],
    tags: ["Python", "Pandas", "MySQL", "Data Automation"],
  },
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  displayTitle: string;
  category: string;
  period: string;
  role: string;
  description: string;
  summary: string;
  repository?: string;
  sourceNote?: string;
  accent: string;
  accentInk: string;
  screenshots?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  liveUrl?: string;
  tags: string[];
  features: string[];
  buildPoints: {
    title: string;
    description: string;
  }[];
  troubleshooting: {
    title: string;
    problem: string;
    solution: string;
    result: string;
  }[];
  aiUsage?: {
    tool: string;
    summary: string;
    cases: {
      title: string;
      contribution: string;
      validation: string;
    }[];
  };
};

export const projects: Project[] = [
  {
    slug: "medisense",
    index: "01",
    title: "MediSense",
    displayTitle: "MEDI / SENSE",
    category: "Medical AI Web Service",
    period: "2026.08 — 2026.09",
    role: "풀스택 · AI/RAG · 인프라 (팀)",
    description:
      "Cloud Run 인스턴스가 바뀔 때마다 OCR 작업이 사라졌습니다. 상태를 공용 DB로 옮겨 끊기지 않게 했고 최대 8GB 파일은 브라우저에서 R2로 바로 보내도록 바꿨습니다. 검색은 Jina v4와 Medical BGE-M3 결과를 RRF로 합쳤습니다.",
    summary:
      "의료 문서를 올리고 질문을 이어갈 수 있는 RAG 서비스",
    sourceNote:
      "팀 프로젝트라 저장소는 조직 내부에서 관리합니다. 소스 코드는 공개하지 않습니다.",
    liveUrl: "https://medisense.ai.kr",
    accent: "#55d5e8",
    accentInk: "#0b1720",
    screenshots: [
      {
        src: "/projects/medisense/overview.png",
        alt: "MediSense 의료 AI 상담 서비스 메인 화면",
        caption:
          "상담 모델을 선택하고 의료 질문을 이어갈 수 있는 MediSense 메인 화면",
      },
    ],
    tags: ["React 19", "TypeScript", "FastAPI", "PostgreSQL · pgvector", "RAG · RRF"],
    features: [
      "회원·게스트 상담과 후속 질문에서 이전 대화 문맥 유지",
      "PDF부터 ZIP까지 업로드한 파일을 OCR·청킹한 뒤 벡터로 저장",
      "Jina v4와 Medical BGE-M3 검색 결과를 RRF로 결합",
      "Vast.ai 의료 LLM 5종을 비교하고 Cloud Run·Neon·R2에 배포·운영",
    ],
    buildPoints: [
      {
        title: "가입부터 비밀번호 재설정까지",
        description:
          "회원가입과 이메일 인증 뒤 로그인, 비밀번호 재설정, 마이페이지까지 이어서 사용할 수 있게 만들었습니다. 프로필 이미지는 Cloudflare R2에 저장했습니다.",
      },
      {
        title: "두 임베딩 결과 합치기",
        description:
          "질문 하나를 Jina v4와 Medical BGE-M3에 각각 넣었습니다. pgvector에서 후보를 따로 찾은 뒤, 같은 청크 ID끼리 묶어 RRF 점수를 계산했습니다.",
      },
      {
        title: "의료 LLM 5종을 같은 런타임으로",
        description:
          "Vast.ai의 의료 LLM 5종을 같은 방식으로 호출할 수 있도록 런타임을 맞췄습니다. 서비스는 Cloud Run, 데이터는 Neon PostgreSQL·pgvector, 파일은 R2에 나눠 운영했습니다.",
      },
    ],
    aiUsage: {
      tool: "OpenAI Codex",
      summary:
        "Codex에는 로그와 코드를 함께 보여주고 의심 가는 원인을 하나씩 좁히는 데 썼습니다. 나온 가설은 재현 테스트와 운영 환경에서 확인했습니다. 맞는 것으로 확인된 내용만 코드에 반영했습니다.",
      cases: [
        {
          title: "OCR 404 원인 좁히기",
          contribution:
            "OCR 작업을 만든 요청과 상태를 조회한 요청의 로그를 나란히 봤습니다. Codex와 저장 위치를 따라가며 인스턴스별 메모리가 끊기는 상황을 가장 먼저 의심했습니다.",
          validation:
            "인스턴스가 달라지는 조건과 프로세스 재시작을 직접 재현했습니다. 상태를 공용 DB로 옮긴 뒤 관련 테스트 65건도 다시 돌렸습니다.",
        },
        {
          title: "업로드 실패 조건과 문맥 누락 점검",
          contribution:
            "R2 멀티파트 업로드에서는 파트 누락과 ETag 불일치, 상담 기능에서는 오래된 대화가 섞이는 조건을 빠뜨리지 않았는지 점검했습니다.",
          validation:
            "파트 순서, ETag, 실제 파일 크기를 확인했고 대화 이력 선택 규칙도 테스트했습니다. 기존 기능이 깨지지 않는지 회귀 테스트까지 마친 뒤 반영했습니다.",
        },
        {
          title: "변경 범위와 문서 정리",
          contribution:
            "커밋과 테스트 결과를 훑으며 바뀐 파일과 영향 범위를 정리할 때 썼습니다. 무엇이 깨졌고 어느 코드를 바꿨는지가 먼저 보이도록 초안을 정리했습니다.",
          validation:
            "문장은 저장소 코드, 자동화 테스트, 배포된 서비스와 하나씩 대조했습니다.",
        },
      ],
    },
    troubleshooting: [
      {
        title: "자동 확장 환경에서 OCR 작업이 사라지는 문제",
        problem:
          "OCR 작업 정보가 프로세스 메모리에만 있었습니다. 작업을 만든 인스턴스와 상태를 조회한 인스턴스가 달라지는 순간 404가 나거나, 작업이 만료된 것처럼 보였습니다.",
        solution:
          "상태와 진행률, 결과를 공용 DB에 저장했습니다. API가 뜨기 전에 스키마가 준비되도록 하고 요청이 서로 다른 인스턴스로 가는 상황도 테스트에 넣었습니다.",
        result:
          "인스턴스가 교체되거나 프로세스가 다시 떠도 작업을 이어서 조회할 수 있습니다. 관련 테스트 65건도 통과했습니다.",
      },
      {
        title: "대용량 RAG 파일이 Cloud Run 요청 한도를 넘는 문제",
        problem:
          "JSON·JSONL·CSV·TXT·ZIP 파일을 API 서버가 직접 받는 구조였습니다. 파일이 커지면 Cloud Run 요청 크기와 메모리 한계에 걸려 업로드가 중간에 끊겼습니다.",
        solution:
          "브라우저가 서명된 파트 URL로 R2에 직접 올리게 바꿨습니다. 파트 순서와 ETag, 실제 크기를 서버에서 다시 확인했고 실패한 업로드는 남지 않도록 정리했습니다.",
        result:
          "파일 본문이 Cloud Run을 거치지 않아 최대 8GB까지 받을 수 있게 됐습니다. 끊긴 파트 재시도와 파일 무결성 확인도 함께 처리했습니다.",
      },
      {
        title: "짧은 후속 답변에서 증상 문맥이 끊기는 문제",
        problem:
          "‘어제부터요’ 같은 짧은 답은 그 문장만 봐서는 어떤 증상인지 알 수 없었습니다. 검색 단계에서 앞선 질문의 의료 문맥이 끊겼습니다.",
        solution:
          "최근 대화 중 증상을 판단할 수 있는 질문까지 골라 검색 질의를 다시 만들었습니다. 같은 기록을 상담 프롬프트에도 넘겼습니다.",
        result:
          "짧은 후속 답변도 직전 증상과 기간을 이어서 해석합니다. 예전의 다른 상담 주제가 따라오는 경우도 줄었습니다.",
      },
    ],
  },
  {
    slug: "crunch",
    index: "02",
    title: "크런치",
    displayTitle: "CRUNCH",
    category: "Full-stack Web Service",
    period: "2026",
    role: "프론트엔드 · 백엔드",
    description:
      "클라이언트, 프리랜서, 관리자가 각자 할 수 있는 일을 권한으로 나눴습니다. 제안·주문·결제·정산이 어떤 순서로 바뀌는지 상태로 관리했고 2단계 결제는 서버 금액 재검증과 Prisma Transaction으로 묶었습니다.",
    summary: "의뢰부터 결제·정산까지 상태가 어긋나지 않게 만든 프리랜서 중개 플랫폼",
    repository: "https://github.com/BackdevHong/crunch",
    liveUrl: "https://crunch-project-demo.ghddls7979.chatgpt.site",
    accent: "#ff6847",
    accentInk: "#11120f",
    screenshots: [
      {
        src: "/projects/crunch/overview.jpg",
        alt: "크런치 프리랜서 중개 플랫폼 메인 화면",
        caption: "서비스 탐색과 프리랜서 매칭을 시작하는 크런치 메인 화면",
      },
    ],
    tags: ["React 19", "TypeScript", "Express", "Prisma", "MySQL"],
    features: [
      "클라이언트·프리랜서·관리자별 화면과 서버 권한 검사",
      "서비스 등록과 심사, 제안, 주문으로 이어지는 거래 과정",
      "실시간 채팅과 알림, 할 일 관리, 회의 제안",
      "소셜 로그인·이메일 인증과 결제 연동",
    ],
    buildPoints: [
      {
        title: "제안이 주문으로 넘어가는 과정",
        description:
          "React SPA와 Express API를 나눠 구성했습니다. 사용자, 서비스, 프로젝트, 제안, 주문, 채널은 Prisma 모델의 관계로 정의했습니다.",
      },
      {
        title: "화면 밖에서도 막히는 권한",
        description:
          "관리자 메뉴를 숨기는 데서 끝내지 않았습니다. 인증과 역할 검사를 서버 미들웨어로 분리하고 관리자 심사와 권한 변경, 운영 로그에도 같은 기준을 뒀습니다.",
      },
      {
        title: "토큰이 만료돼도 끊기지 않게",
        description:
          "Access Token은 짧게 두고 HttpOnly Refresh Token은 갱신할 때마다 회전시켰습니다. 로그인은 유지하면서 노출된 토큰을 오래 쓰지 못하게 했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "Access Token 만료 뒤 API가 줄줄이 401이 되던 문제",
        problem:
          "Access Token이 만료되면 열어 둔 화면의 API 요청이 연달아 401로 실패했습니다. 화면마다 갱신 코드를 넣자니 같은 코드가 계속 생길 상황이었습니다.",
        solution:
          "Axios 응답 인터셉터가 401을 받으면 Refresh Token으로 새 토큰을 발급하고 실패한 요청을 딱 한 번 다시 보내게 했습니다. 로그인·회원가입·갱신 요청은 이 처리에서 뺐습니다.",
        result:
          "인증 예외 처리를 한곳에 모았습니다. `_retry` 플래그도 넣어 갱신 요청이 무한히 반복되지 않게 막았습니다.",
      },
      {
        title: "역할과 상태 조건이 화면마다 흩어지는 문제",
        problem:
          "클라이언트, 프리랜서, 관리자가 할 수 있는 일이 달랐습니다. 서비스 심사와 주문 상태까지 붙자 조건문이 여러 화면으로 퍼질 여지가 컸습니다.",
        solution:
          "인증 미들웨어와 관리자 권한 미들웨어를 분리했습니다. 도메인별 Route·Controller와 Prisma 상태 모델을 기준으로 서버 접근 규칙을 정했습니다.",
        result:
          "화면에서 버튼이 보이느냐와 상관없이, 실제 요청은 서버가 같은 기준으로 다시 확인합니다.",
      },
    ],
  },
  {
    slug: "minenews",
    index: "03",
    title: "MineNews",
    displayTitle: "MINE / NEWS",
    category: "Data-driven Web",
    period: "2025 — 2026",
    role: "프론트엔드 · 백엔드",
    description:
      "게임 지표는 수집 시점마다 필드 모양이 조금씩 달랐습니다. 화면에 넘기기 전에 데이터를 정규화하고 최신·이전 스냅샷을 비교해 순위 변화를 계산했습니다. 외부 썸네일 호출은 Express 프록시와 캐시로 정리했습니다.",
    summary: "흩어진 게임 지표를 주간 신문처럼 읽게 만든 데이터 웹",
    repository: "https://github.com/BackdevHong/MineNews",
    accent: "#c7f65b",
    accentInk: "#11120f",
    screenshots: [
      {
        src: "/projects/minenews/overview.jpg",
        alt: "MineNews 주간 데이터 신문 메인 화면",
        caption: "게임 순위와 지표를 기사 형태로 구성한 MineNews 주간 화면",
      },
    ],
    tags: ["React 19", "TypeScript", "Express", "REST API", "Data Normalize"],
    features: [
      "이번 주와 지난 스냅샷의 순위·지표 변화 계산",
      "게임별 헤드라인과 기사 형태의 상세 화면",
      "외부 썸네일 API 프록시와 30분 메모리 캐시",
      "누락 필드와 타입 차이를 흡수하는 데이터 정규화",
    ],
    buildPoints: [
      {
        title: "숫자를 기사처럼 읽히게",
        description:
          "원본 지표를 그대로 나열하면 무엇이 달라졌는지 한눈에 보기 어려웠습니다. 헤드라인, 주요 수치, 순위표로 다시 묶어 한 주의 변화를 기사처럼 넘겨볼 수 있게 했습니다.",
      },
      {
        title: "지난 스냅샷과 비교",
        description:
          "파일명에 든 날짜로 최신·이전 스냅샷을 찾았습니다. 같은 universeId를 맞춰 접속자, 방문, 즐겨찾기, 선호도의 증감을 계산했습니다.",
      },
      {
        title: "썸네일 요청은 서버 한곳에서",
        description:
          "브라우저가 외부 API를 직접 부르지 않게 Express 프록시를 뒀습니다. 여러 universeId는 한 요청으로 묶어 보내 호출 횟수도 줄였습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "스냅샷마다 필드 형태가 달라 화면이 깨지는 문제",
        problem:
          "수집 시점에 따라 숫자가 문자열로 들어왔고 아예 빠진 필드도 있었습니다. 컴포넌트가 원본 데이터를 바로 받으면 화면마다 같은 예외 처리를 반복해야 했습니다.",
        solution:
          "unknown 값을 문자열·숫자·배열·객체로 바꾸는 정규화 함수를 앞단에 뒀습니다. 기사 지표가 없을 때는 top5 데이터에서 값을 보완했습니다.",
        result:
          "화면은 정리된 Snapshot 타입만 받습니다. 일부 값이 빠져도 해당 기사 하나 때문에 나머지 목록까지 멈추지 않습니다.",
      },
      {
        title: "외부 썸네일을 카드마다 다시 요청하던 문제",
        problem:
          "카드마다 외부 API를 직접 부르면 CORS나 네트워크 오류가 화면에 그대로 번졌습니다. 같은 썸네일도 계속 다시 받아 왔습니다.",
        solution:
          "서버 프록시에서 universeId를 묶어 호출하고 결과를 30분간 메모리에 보관했습니다. 브라우저 캐시 헤더도 함께 보냈습니다.",
        result:
          "브라우저는 외부 API를 직접 부르지 않게 됐고 같은 썸네일을 반복해서 요청하는 횟수도 줄었습니다.",
      },
    ],
  },
  {
    slug: "sparta-utility",
    index: "04",
    title: "스파르타 유틸리티",
    displayTitle: "UTILITY",
    category: "Work Utility",
    period: "2023",
    role: "프론트엔드",
    description:
      "영상 편집 정산 때마다 주차별 작업 시간을 손으로 더하고 추가금을 계산해야 했습니다. 영상 길이만 넣으면 예상 정산 금액이 바로 나오도록 React로 작은 계산기를 만들었습니다.",
    summary: "영상 길이를 입력하면 예상 작업 시간과 정산금을 바로 계산하는 도구",
    repository: "https://github.com/BackdevHong/sparta_util",
    liveUrl: "https://sparta-utility.vercel.app",
    accent: "#3157ff",
    accentInk: "#fffdf7",
    screenshots: [
      {
        src: "/projects/sparta-utility/overview.jpg",
        alt: "스파르타 유틸리티 작업 시간과 정산 금액 계산 화면",
        caption: "주차별 영상 시간을 입력해 예상 정산 금액을 확인하는 계산 화면",
      },
    ],
    tags: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    features: [
      "주차와 영상 개수에 맞춰 입력 칸을 자동 생성",
      "시·분·초로 받은 영상 길이를 분 단위로 환산",
      "전체 작업 시간과 예상 정산 금액을 바로 합산",
      "추가금 입력과 분·초 범위 오류 검사",
    ],
    buildPoints: [
      {
        title: "손으로 하던 정산식을 화면에",
        description:
          "주차별 영상 수와 원본 길이를 넣으면 기존 업무 계산식대로 예상 금액을 보여줍니다. 중간 합계를 다시 계산할 필요 없이 입력하는 즉시 결과가 바뀝니다.",
      },
      {
        title: "늘어나는 입력값 구분하기",
        description:
          "주차와 영상 순번을 한 쌍의 식별자로 썼습니다. 이미 있는 영상은 값을 바꾸고 처음 입력한 영상만 Redux 상태에 새로 추가했습니다.",
      },
      {
        title: "잘못된 시간은 입력할 때 막기",
        description:
          "음수는 받지 않고 분과 초는 59 이하로 제한했습니다. 계산할 때는 모두 초로 바꾼 뒤 합쳐 단위를 하나로 맞췄습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "수정할 때 같은 영상 시간이 두 번 더해지는 문제",
        problem:
          "입력 칸이 계속 늘어나는 구조라 값을 바꿀 때마다 배열에 새 항목을 넣으면 같은 영상 시간이 두 번씩 합산됐습니다.",
        solution:
          "Redux 상태에서 주차를 먼저 찾고 그 안에서 영상 순번을 다시 확인했습니다. 있으면 time만 바꾸고 없을 때만 새 항목을 넣었습니다.",
        result:
          "몇 번을 수정하든 영상 하나는 합계에 한 번만 반영됩니다. 입력 순서가 달라도 결과는 같게 나옵니다.",
      },
      {
        title: "시간 단위가 섞이며 계산식이 복잡해지는 문제",
        problem:
          "화면에서는 시·분·초를 따로 받지만 정산 기준은 전체 분이었습니다. 단위를 그대로 둔 채 계산하면 조건이 계속 늘어났습니다.",
        solution:
          "모든 값을 초로 바꿔 합친 다음, 정산 단계에서 분 단위로 내림 처리했습니다. 여기에 단가와 추가금을 적용했습니다.",
        result:
          "입력 형식과 실제 계산 단위를 나눠 두니 정산식이 짧아졌고 확인하기도 쉬워졌습니다.",
      },
    ],
  },
  {
    slug: "yhs-production-prediction",
    index: "05",
    title: "YHS 공정 완료 시간 예측",
    displayTitle: "YHS / PREDICT",
    category: "Production Data Prediction",
    period: "2022.06 — 2022.07",
    role: "메인 개발 · 팀 프로젝트",
    description:
      "MySQL에 쌓인 공정 이력을 lot 단위로 불러와 유휴 시간과 가공 시간을 계산했습니다. 여기에 근무 시간, 휴게, 추가 근무를 더해 예상 완료 시각을 구했습니다. Python으로 만든 사내 프로젝트입니다.",
    summary: "lot별 공정 이력에 실제 근무·휴게 시간을 더해 완료 시각을 계산한 프로젝트",
    sourceNote:
      "회사 업무로 진행한 프로젝트입니다. 보안·기밀 유지 때문에 소스 코드는 공개하지 않습니다.",
    accent: "#f6c84d",
    accentInk: "#11120f",
    tags: ["Python", "Pandas", "NumPy", "MySQL", "PyMySQL"],
    features: [
      "lot 번호로 MySQL 공정 이력을 바로 조회",
      "누적 이력에서 평균 유휴 시간과 가공 시간 계산",
      "기본 근무, 고정·추가 휴게, 추가 근무 시간 반영",
      "공정별 예상 완료 시각과 오차율을 CSV로 출력",
    ],
    buildPoints: [
      {
        title: "CSV 대신 DB에서 바로 조회",
        description:
          "매번 CSV를 준비하던 방식을 lot 번호 기반 MySQL 조회로 바꿨습니다. 쿼리 결과는 Pandas DataFrame으로 변환해 기존 분석 코드에 바로 넘겼습니다.",
      },
      {
        title: "예측·조회·출력 코드 나누기",
        description:
          "입력과 CSV 출력을 맡는 실행 모듈, 공정 시간을 계산하는 예측 모듈, MySQL 조회 모듈로 나눴습니다. 어디서 값이 들어오고 계산 결과가 어디로 가는지 따라가기 쉬워졌습니다.",
      },
      {
        title: "휴게와 날짜 변경까지 계산",
        description:
          "기본 근무 시간만 더해서는 실제 완료 시각이 맞지 않았습니다. 고정·추가 휴게와 추가 근무를 타임테이블에 넣고 다음 날로 넘어가는 경우까지 계산했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "CSV를 다시 만들어야 최신 이력을 볼 수 있던 문제",
        problem:
          "분석할 때마다 CSV를 새로 준비해야 했습니다. 특정 lot의 최신 공정 이력을 바로 확인하기도 어려웠습니다.",
        solution:
          "lot 번호를 받으면 process_hist 테이블을 시작 시간순으로 조회하게 바꿨습니다. 결과는 DataFrame으로 변환해 예측 함수에 곧바로 넘겼습니다.",
        result:
          "파일을 따로 준비하지 않아도 조회부터 예측 결과 생성까지 한 번에 실행할 수 있게 됐습니다.",
      },
      {
        title: "휴게 시간과 날짜 변경으로 예측 시간이 어긋나는 문제",
        problem:
          "유휴 시간과 가공 시간만 더하면 중간 휴게나 근무 종료 뒤 작업을 반영할 수 없었습니다. 다음 근무일로 넘어갈 때도 시간이 어긋났습니다.",
        solution:
          "휴게와 추가 작업 구간을 시간순 타임테이블로 만들었습니다. 예측 시각이 어느 구간과 겹치는지 나눠 계산하고 근무가 끝나면 다음 날 시작 시각으로 넘겼습니다.",
        result:
          "예상 완료 시각에 휴게 구간과 날짜 변경이 같이 반영됩니다. 단순 합산보다 실제 근무 일정에 가까워졌습니다.",
      },
      {
        title: "이력이 적으면 대표 시간을 내기 어려운 문제",
        problem:
          "공정 이력이 한 건뿐이면 유휴 간격 자체를 계산할 수 없었습니다. 데이터 수가 적을 때와 충분할 때 같은 통계를 쓰는 것도 맞지 않았습니다.",
        solution:
          "한 건이면 빈 결과를 넘겨 다음 누적 단계에서 처리했습니다. 2~6건은 평균을 쓰고 그보다 많으면 사분위 구간으로 대표 시간을 계산했습니다.",
        result:
          "자료가 부족한데 억지로 값을 만들지 않았습니다. 쌓인 이력의 양에 맞춰 계산 방식을 달리 적용했습니다.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
