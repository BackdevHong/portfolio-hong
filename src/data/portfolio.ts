export const profile = {
  name: "홍인성",
  role: "Web Frontend & Backend Developer",
  email: "ghddls0704@kakao.com",
  github: "https://github.com/BackdevHong",
  heroTitle: "웹과 게임 콘텐츠를 직접 만들며 성장하는 개발자 홍인성입니다.",
  heroDescription:
    "React와 Vue.js로 웹 프로젝트를 만들고, Java와 Kotlin으로 마인크래프트 콘텐츠 플러그인을 개발해왔습니다. 데이터 전처리와 자동화 경험을 바탕으로 완성도 높은 결과물을 목표로 합니다.",
  aboutTitle: "프론트엔드와 게임 콘텐츠를 모두 경험한 개발자",
  aboutDescription:
    "특성화 고등학교에서 HTML, CSS, JavaScript 기본기를 익힌 뒤 개인 프로젝트와 외주 개발을 통해 실전 경험을 쌓았습니다. 회사 인턴십에서는 MySQL 데이터 전처리와 Python 자동화를 수행했고, 게임 개발 프로젝트에서는 애니메이션, 움직임, 장애물 생성, 씬 체인지 등 핵심 기능 구현을 맡았습니다.",
};

export const metrics = [
  { label: "실무/외주 경험", value: "3+" },
  { label: "대표 프로젝트", value: "4" },
  { label: "주요 기술", value: "Web" },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Node.js",
  "ExpressJS",
  "Java",
  "Kotlin",
  "Python",
  "MySQL",
  "SQL",
  "AWS",
  "Git",
  "GitHub",
  "Slack",
  "Notion",
];

export type ProjectCategory = {
  title: string;
  url: string;
  plugins: string[];
  description: string;
  highlights: string[];
  tags: string[];
};

export const projectCategories: ProjectCategory[] = [
  {
    title: "스파르타 유틸리티",
    url: "https://github.com/BackdevHong/sparta_util",
    plugins: [],
    description:
      "스파르타 코딩클럽 업무에서 금액 정산 계산기로 활용하기 위해 제작한 웹 유틸리티 프로젝트입니다. React 기반으로 구성했습니다.",
    highlights: [
      "React와 TypeScript를 사용해 브라우저에서 바로 사용할 수 있는 업무 보조 도구를 구현했습니다.",
      "Redux Toolkit, React Redux, React Router DOM을 도입해 상태 관리와 화면 전환 구조를 갖췄습니다.",
      "Tailwind CSS를 함께 사용해 빠르게 UI를 구성하고, Vercel 배포까지 연결한 웹 프로젝트입니다.",
    ],
    tags: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Vercel"],
  },
  {
    title: "룬 오브 워 제로",
    url: "https://www.youtube.com/playlist?list=PLZ0reQtOJanvuo-aWy1stcWZQ_btuxUVU",
    plugins: [],
    description:
      "악어 콘텐츠 팀에서 제작한 대형 마인크래프트 콘텐츠 프로젝트입니다. alchemy, craft, dungeon, guild, party, shop, stat, war 등 기능을 모듈 단위로 나누어 개발했습니다.",
    highlights: [
      "Gradle 멀티 모듈 구조로 기능별 플러그인을 분리해 확장성과 유지보수성을 확보했습니다.",
      "전쟁 시스템에서 신호기/연합 데이터를 캐싱하고 ConcurrentHashMap, CompletableFuture를 활용해 실시간 서버 부하를 줄였습니다.",
      "LuckPerms, Vault, CMI 등 서버 생태계 플러그인과 연동해 실제 운영 환경의 요구사항을 처리했습니다.",
    ],
    tags: ["Java", "Paper API", "Multi-module", "Caching"],
  },
  {
    title: "마크에이지 리턴즈 3",
    url: "https://www.youtube.com/playlist?list=PLZ0reQtOJansVG_eXD_mMKaE7ql3m-Msr",
    plugins: [],
    description:
      "경매, 국가, 신호기, 직업/스탯, 암시장, 메뉴, 랜덤박스, 월드보더 등 30개 이상의 기능 모듈을 포함한 통합 서버 플러그인입니다.",
    highlights: [
      "기능별 패키지와 Module/Service/Command/Listener 구조로 대규모 기능을 분리했습니다.",
      "LuckPerms, ProtocolLib 연동과 관리자 명령 체계를 통해 운영자가 직접 설정 가능한 시스템을 만들었습니다.",
      "GUI 기반 상호작용과 이벤트 리스너를 함께 설계해 사용자 경험과 서버 운영 흐름을 동시에 고려했습니다.",
    ],
    tags: ["Java", "Architecture", "GUI", "Server Ops"],
  },
  {
    title: "크런치(Crunch)",
    url: "https://github.com/BackdevHong/crunch",
    plugins: [],
    description:
      "프리랜서와 클라이언트를 연결하는 서비스 중개 플랫폼입니다. 클라이언트는 프로젝트를 의뢰하거나 서비스를 구매할 수 있고, 프리랜서는 자신을 홍보하고 제안서를 보내거나 주문을 처리할 수 있습니다.",
    highlights: [
      "React 19와 Vite 기반 SPA, Express와 Prisma 기반 REST API를 분리한 모노레포 구조로 프론트엔드와 백엔드를 함께 설계했습니다.",
      "JWT Access Token과 HttpOnly Refresh Token 회전 방식, bcryptjs 비밀번호 해싱, 역할 기반 권한(client, freelancer, admin)을 구현했습니다.",
      "Prisma와 MySQL로 User, Freelancer, Service, Project, Order, Review, Message 등 실제 서비스 도메인 모델을 설계했습니다.",
      "관리자 페이지, 프리랜서 신청 승인/거절, 서비스 활성화 토글, 마이페이지, 주문 상태 관리 등 운영 흐름까지 포함했습니다.",
    ],
    tags: ["React", "Vite", "TypeScript", "Express", "Prisma", "MySQL"],
  },
];

export const experiences = [
  {
    role: "인턴",
    company: "연합시스템",
    period: "2021.08 - 2023.01",
    description:
      "베어링 기계 데이터를 MySQL에서 전처리하고, Python 기반 자동화로 반복 작업을 줄였습니다. 이상 데이터 탐지와 정제 업무도 함께 수행했습니다.",
  },
  {
    role: "영상 편집자(컷 편집 + 자막 편집)",
    company: "스파르타 코딩클럽",
    period: "2023.07 - 2025.08",
    description:
      "스파르타 코딩클럽에서 제공하는 각종 강의 영상을 Vrew라는 AI 자막 편집 도구를 사용해 컷 편집과 자막 편집을 담당하였습니다.",
  },
  {
    role: "외주 개발자",
    company: "크리에이터 잠뜰 콘텐츠 팀",
    period: "2023.03 - 2023.08",
    description:
      "마인크래프트 서버 플러그인 개발과 콘텐츠 기획을 담당했습니다. Java, Kotlin, Spigot API를 활용해 영상 콘텐츠 제작에 필요한 기능을 구현했습니다.",
  },
  {
    role: "외주 개발자",
    company: "크리에이터 악어 콘텐츠 팀",
    period: "2025.01 - 현재",
    description:
      "Paper API와 SQLite3를 활용해 마인크래프트 콘텐츠 룬 오브 워 제로를 제작하며 데이터 저장과 캐싱을 다루고 있습니다.",
  },
];

export const education = [
  {
    school: "인평자동차고등학교",
    period: "2020.03 - 2022.12",
    detail: "자동차 IT과 졸업",
  },
  {
    school: "가천대학교",
    period: "2023.03 - 재학 중",
    detail: "게임/영상학과",
  },
  {
    school: "일학습병행 자격증",
    period: "2022.12",
    detail: "SW개발 L3",
  },
];
