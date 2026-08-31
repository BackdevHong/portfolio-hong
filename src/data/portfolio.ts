export const profile = {
  name: "홍인성",
  role: "Web Developer",
  email: "ghddls0704@kakao.com",
  github: "https://github.com/BackdevHong",
  heroTitle: "사용자가 실제로 쓰는 웹 서비스를 만듭니다.",
  heroDescription:
    "React를 중심으로 화면을 설계하고, 필요한 경우 Express와 데이터베이스까지 연결합니다. 아래 프로젝트를 누르면 구현 과정과 문제를 해결한 방법을 자세히 볼 수 있습니다.",
};

export const metrics = [
  { label: "선별한 웹 프로젝트", value: "03" },
  { label: "주요 프론트엔드", value: "React" },
  { label: "관심 영역", value: "Web" },
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  period: string;
  role: string;
  description: string;
  summary: string;
  repository: string;
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
};

export const projects: Project[] = [
  {
    slug: "crunch",
    index: "01",
    title: "크런치",
    category: "Full-stack Web Service",
    period: "2026",
    role: "Frontend · Backend",
    description:
      "프리랜서와 클라이언트를 연결하는 서비스 중개 플랫폼입니다. 서비스 탐색부터 제안, 주문, 채팅, 관리자 운영까지 실제 서비스 흐름을 구현했습니다.",
    summary: "복잡한 역할과 거래 흐름을 하나의 서비스로 연결한 풀스택 프로젝트",
    repository: "https://github.com/BackdevHong/crunch",
    liveUrl: "https://crunch.it.kr",
    tags: ["React 19", "TypeScript", "Express", "Prisma", "MySQL"],
    features: [
      "클라이언트·프리랜서·관리자 역할별 화면과 권한",
      "서비스 등록·심사·주문 및 프로젝트 제안 흐름",
      "실시간 채팅, 알림, 할 일과 회의 제안",
      "소셜 로그인, 이메일 인증과 결제 연동",
    ],
    buildPoints: [
      {
        title: "서비스 전체 흐름 설계",
        description:
          "React SPA와 Express REST API를 분리하고, 사용자·서비스·프로젝트·제안·주문·채널을 Prisma 모델로 연결했습니다.",
      },
      {
        title: "운영까지 고려한 권한 구조",
        description:
          "인증 미들웨어와 역할별 미들웨어를 분리하고 관리자 심사, 사용자 권한 변경, 운영 로그 화면까지 구현했습니다.",
      },
      {
        title: "만료를 전제로 한 인증",
        description:
          "짧게 유지되는 Access Token과 HttpOnly Refresh Token 회전 방식을 조합해 로그인 유지와 토큰 보호를 함께 고려했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "만료된 토큰으로 요청이 연속 실패하는 문제",
        problem:
          "Access Token이 만료되면 사용자가 보고 있던 화면의 API 요청이 401로 실패하고, 각 화면에서 갱신 로직을 따로 처리하면 코드가 중복될 수 있었습니다.",
        solution:
          "Axios 응답 인터셉터에서 401을 감지해 Refresh Token으로 새 Access Token을 발급받고 원래 요청을 한 번만 재시도했습니다. 로그인·회원가입·갱신 요청은 재시도 대상에서 제외했습니다.",
        result:
          "화면별 인증 예외 처리를 공통 계층으로 모으고, `_retry` 플래그로 무한 재시도 가능성도 차단했습니다.",
      },
      {
        title: "역할과 상태가 늘수록 복잡해지는 접근 제어",
        problem:
          "클라이언트, 프리랜서, 관리자마다 가능한 행동이 다르고 서비스 심사와 주문 상태까지 결합되면서 조건이 여러 화면에 흩어질 수 있었습니다.",
        solution:
          "서버에서 인증과 관리자 권한 미들웨어를 분리하고, 도메인별 Route·Controller 구조와 Prisma 상태 모델을 기준으로 접근 규칙을 적용했습니다.",
        result:
          "프론트 화면 표시 여부와 별개로 서버에서 권한을 다시 검증하는 일관된 운영 흐름을 만들었습니다.",
      },
    ],
  },
  {
    slug: "minenews",
    index: "02",
    title: "MineNews",
    category: "Data-driven Web",
    period: "2025 — 2026",
    role: "Frontend · Backend",
    description:
      "수집된 게임 지표를 주간 신문 형태로 보여주는 데이터 웹 프로젝트입니다. 스냅샷 비교, 외부 이미지 API 프록시, 예외 데이터 정규화를 구현했습니다.",
    summary: "서로 다른 형태의 외부 데이터를 안정적인 읽기 경험으로 바꾼 웹 프로젝트",
    repository: "https://github.com/BackdevHong/MineNews",
    tags: ["React 19", "TypeScript", "Express", "REST API", "Data Normalize"],
    features: [
      "최신·이전 스냅샷의 순위 및 지표 변화 계산",
      "게임별 헤드라인과 기사형 상세 콘텐츠",
      "외부 썸네일 API 프록시와 메모리 캐시",
      "필드 누락에 대응하는 클라이언트 데이터 정규화",
    ],
    buildPoints: [
      {
        title: "데이터를 읽기 경험으로 변환",
        description:
          "원본 지표를 그대로 나열하지 않고 헤드라인, 기사, 주요 수치와 순위표로 재구성해 주간 신문처럼 탐색할 수 있게 만들었습니다.",
      },
      {
        title: "스냅샷 비교 API",
        description:
          "파일명 날짜를 기준으로 최신과 이전 스냅샷을 찾고 universeId로 매칭해 접속자·방문·즐겨찾기·선호도 변화를 계산했습니다.",
      },
      {
        title: "외부 API 경계 분리",
        description:
          "브라우저가 외부 썸네일 API를 직접 호출하지 않도록 Express 프록시를 두고, 다수 ID를 한 번에 요청하도록 묶었습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "스냅샷마다 필드 형태가 달라 화면이 깨지는 문제",
        problem:
          "수집 시점에 따라 숫자가 문자열로 오거나 일부 필드가 누락될 수 있어, 화면 컴포넌트가 원본 데이터를 바로 사용하면 예외 처리가 반복됐습니다.",
        solution:
          "unknown 값을 문자열·숫자·배열·객체로 안전하게 변환하는 정규화 계층을 만들고, 기사에 지표가 없으면 top5 데이터에서 보완하도록 했습니다.",
        result:
          "UI는 하나의 안정된 Snapshot 타입만 다루게 되어 누락 데이터가 있어도 나머지 기사를 계속 표시할 수 있습니다.",
      },
      {
        title: "외부 썸네일 요청의 지연과 반복 호출",
        problem:
          "각 카드가 외부 API를 직접 호출하면 CORS와 네트워크 오류의 영향을 받고 같은 이미지 정보를 반복 요청하게 됩니다.",
        solution:
          "서버 프록시에서 universeId를 묶어 호출하고 결과를 30분 동안 메모리에 보관했습니다. 응답에는 브라우저 캐시 지시자도 함께 설정했습니다.",
        result:
          "외부 API 의존성을 서버 한곳으로 모으고 동일한 썸네일 요청 수를 줄였습니다.",
      },
    ],
  },
  {
    slug: "sparta-utility",
    index: "03",
    title: "스파르타 유틸리티",
    category: "Work Utility",
    period: "2023",
    role: "Frontend",
    description:
      "영상 편집 업무에서 주차별 작업 시간과 추가금을 빠르게 계산하기 위해 만든 React 기반 업무 보조 도구입니다.",
    summary: "반복 정산 업무를 브라우저 계산기로 바꾼 작은 자동화 프로젝트",
    repository: "https://github.com/BackdevHong/sparta_util",
    liveUrl: "https://sparta-utility.vercel.app",
    tags: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    features: [
      "주차와 영상 개수에 따라 입력 폼 동적 생성",
      "시·분·초 단위 영상 길이 입력과 분 단위 환산",
      "전체 작업 시간과 정산 금액 자동 합산",
      "추가금 입력과 잘못된 시간 범위 검증",
    ],
    buildPoints: [
      {
        title: "실제 업무 규칙을 코드로 전환",
        description:
          "주차별 영상 수와 각 영상의 원본 길이를 입력하면 작업 시간 계산식을 적용해 예상 정산 금액을 바로 확인하도록 구현했습니다.",
      },
      {
        title: "동적 입력 상태 관리",
        description:
          "주차와 영상 순번을 복합 식별자로 사용해 같은 항목은 갱신하고 새로운 항목만 추가하도록 Redux Toolkit 상태를 구성했습니다.",
      },
      {
        title: "입력 단계에서 오류 차단",
        description:
          "음수 입력을 막고 분·초는 59 이하로 제한한 뒤 모든 값을 초 단위로 합산해 계산 기준을 단순화했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "동적으로 늘어나는 입력값의 합계가 중복되는 문제",
        problem:
          "주차와 영상 입력 폼이 계속 추가되는 구조에서 변경할 때마다 값을 배열에 새로 넣으면 같은 영상의 시간이 중복 합산될 수 있습니다.",
        solution:
          "Redux 상태에서 먼저 주차를 찾고, 그 안에서 영상 순번을 다시 찾아 기존 항목이면 time만 교체하고 없을 때만 새 항목을 추가했습니다.",
        result:
          "입력 순서와 수정 횟수에 관계없이 각 영상이 합계에 한 번만 반영되도록 만들었습니다.",
      },
      {
        title: "시간 단위가 섞이며 계산식이 복잡해지는 문제",
        problem:
          "사용자는 시·분·초를 각각 입력하지만 정산 규칙은 전체 분을 기준으로 계산해야 했습니다.",
        solution:
          "입력값을 초 단위로 통일한 뒤 분으로 내림 처리하고, 전체 분 합계에 정산 단가와 추가금을 적용했습니다.",
        result:
          "표시 형식과 계산 기준을 분리해 계산 로직을 단순하게 유지했습니다.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
