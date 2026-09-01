export const profile = {
  name: "홍인성",
  role: "Web Developer",
  email: "ghddls0704@kakao.com",
  github: "https://github.com/BackdevHong",
  heroTitle: "사용자가 실제로 쓰는 웹 서비스를 만듭니다.",
  heroDescription:
    "React를 중심으로 화면을 설계하고, Python과 데이터베이스를 활용한 업무 자동화와 데이터 처리도 경험했습니다. 아래 프로젝트를 누르면 구현 과정과 문제를 해결한 방법을 자세히 볼 수 있습니다.",
};

export const metrics = [
  { label: "선별한 프로젝트", value: "04" },
  { label: "주요 프론트엔드", value: "React" },
  { label: "관심 영역", value: "Web" },
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
};

export const projects: Project[] = [
  {
    slug: "crunch",
    index: "01",
    title: "크런치",
    displayTitle: "CRUNCH",
    category: "Full-stack Web Service",
    period: "2026",
    role: "Frontend · Backend",
    description:
      "프리랜서와 클라이언트를 연결하는 서비스 중개 플랫폼입니다. 서비스 탐색부터 제안, 주문, 채팅, 관리자 운영까지 실제 서비스 흐름을 구현했습니다.",
    summary: "복잡한 역할과 거래 흐름을 하나의 서비스로 연결한 풀스택 프로젝트",
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
    displayTitle: "MINE / NEWS",
    category: "Data-driven Web",
    period: "2025 — 2026",
    role: "Frontend · Backend",
    description:
      "수집된 게임 지표를 주간 신문 형태로 보여주는 데이터 웹 프로젝트입니다. 스냅샷 비교, 외부 이미지 API 프록시, 예외 데이터 정규화를 구현했습니다.",
    summary: "서로 다른 형태의 외부 데이터를 안정적인 읽기 경험으로 바꾼 웹 프로젝트",
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
    displayTitle: "UTILITY",
    category: "Work Utility",
    period: "2023",
    role: "Frontend",
    description:
      "영상 편집 업무에서 주차별 작업 시간과 추가금을 빠르게 계산하기 위해 만든 React 기반 업무 보조 도구입니다.",
    summary: "반복 정산 업무를 브라우저 계산기로 바꾼 작은 자동화 프로젝트",
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
  {
    slug: "yhs-production-prediction",
    index: "04",
    title: "YHS 공정 완료 시간 예측",
    displayTitle: "YHS / PREDICT",
    category: "Production Data Prediction",
    period: "2022.06 — 2022.07",
    role: "Main Developer · Team Project",
    description:
      "MySQL에 쌓인 제조 공정 이력을 lot 단위로 불러와 유휴 시간과 가공 시간을 분석하고, 근무 시간·휴게 시간·추가 근무를 반영해 예상 완료 시간을 계산하는 Python 프로젝트입니다.",
    summary: "제조 공정 이력과 근무 일정을 결합해 완료 시간을 예측한 데이터 프로젝트",
    sourceNote:
      "본 프로젝트는 회사 업무로 진행되어 보안 및 기밀 유지 원칙에 따라 소스 코드를 공개하지 않습니다.",
    accent: "#f6c84d",
    accentInk: "#11120f",
    tags: ["Python", "Pandas", "NumPy", "MySQL", "PyMySQL"],
    features: [
      "lot 번호를 기준으로 MySQL 공정 이력 조회",
      "누적 데이터의 평균 유휴 시간·가공 시간 계산",
      "표준 근무·고정 휴게·추가 휴게·추가 근무 반영",
      "공정별 예상 완료 시간과 오차율 CSV 출력",
    ],
    buildPoints: [
      {
        title: "CSV 입력을 데이터베이스로 전환",
        description:
          "로컬 CSV를 직접 불러오던 흐름을 lot 번호 기반 MySQL 조회로 교체하고, 쿼리 결과를 Pandas DataFrame으로 변환해 기존 분석 로직과 연결했습니다.",
      },
      {
        title: "예측 알고리즘 모듈화",
        description:
          "입력과 파일 출력을 담당하는 실행 모듈, 공정 시간을 계산하는 예측 모듈, MySQL 조회 모듈을 분리해 데이터 흐름을 명확하게 구성했습니다.",
      },
      {
        title: "현실적인 작업 일정 반영",
        description:
          "표준 근무 시간뿐 아니라 고정 휴게, 추가 휴게, 추가 근무와 날짜 변경까지 타임테이블로 처리해 단순 시간 합산보다 실제 공정에 가까운 결과를 계산했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "정적인 CSV 때문에 최신 공정 이력을 반영하기 어려운 문제",
        problem:
          "분석할 때마다 CSV 파일을 다시 준비해야 했고, lot별 최신 공정 데이터를 즉시 가져오기 어려웠습니다.",
        solution:
          "lot 번호를 입력받아 process_hist 테이블을 시작 시간순으로 조회하고, 결과를 DataFrame으로 변환해 예측 함수에 바로 전달하도록 흐름을 변경했습니다.",
        result:
          "파일 준비 단계를 없애고 데이터 조회부터 예측 결과 생성까지 하나의 실행 흐름으로 연결했습니다.",
      },
      {
        title: "휴게 시간과 날짜 변경으로 예측 시간이 어긋나는 문제",
        problem:
          "유휴 시간과 가공 시간만 더하면 공정 도중의 휴게 시간, 근무 종료 이후의 추가 작업, 다음 근무일 시작 시간을 반영할 수 없었습니다.",
        solution:
          "휴게·추가 작업 구간을 시간순 타임테이블로 만들고, 예측 시간이 구간과 겹치는 경우를 나눠 계산했습니다. 근무 종료 시에는 다음 날짜의 시작 시간으로 이동하도록 처리했습니다.",
        result:
          "공정 완료 시간 계산에 실제 근무 일정의 예외 구간과 일자 전환을 함께 반영할 수 있게 됐습니다.",
      },
      {
        title: "데이터가 적을 때 통계 계산이 불안정한 문제",
        problem:
          "공정 이력이 한 건뿐이면 유휴 시간 간격을 계산할 수 없고, 데이터 개수에 따라 대표 시간을 구하는 방식도 달라져야 했습니다.",
        solution:
          "이력이 한 건이면 빈 결과를 반환해 다음 누적 단계로 넘기고, 2~6건은 평균값을 사용하며 그보다 많을 때는 사분위 구간을 기준으로 대표 시간을 계산했습니다.",
        result:
          "불충분한 데이터로 예측을 강행하지 않고 누적 데이터 규모에 맞춰 계산 방식을 적용했습니다.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
