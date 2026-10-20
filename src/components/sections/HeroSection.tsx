import { metrics, profile } from "@/data/portfolio";
import { withBasePath } from "@/lib/site-url";
import Image from "next/image";
import type { SectionStyles } from "./types";

type HeroSectionProps = {
  styles: SectionStyles;
};

export function HeroSection({ styles }: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroTopline}>
        <p><span /> Seoul에서 제품을 만드는 풀스택 개발자</p>
        <p>Portfolio · 2026</p>
      </div>

      <div className={styles.heroStage}>
        <div className={styles.heroIntro}>
          <p className={styles.eyebrow}>화면과 서버 사이의 빈틈을 해결합니다.</p>
          <h1 id="hero-title">
            <span>사용자의 클릭을</span>
            <span>운영되는 제품으로</span>
            <span>연결합니다<i>.</i></span>
          </h1>
          <p className={styles.lead}>{profile.heroDescription}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#projects">
              프로젝트 보기
            </a>
            <a
              className={styles.secondary}
              href={withBasePath(profile.resume)}
              target="_blank"
              rel="noreferrer"
            >
              이력서 열기
            </a>
          </div>
        </div>

        <aside className={styles.traceMap} aria-label="풀스택 개발 흐름">
          <div className={styles.traceHeader}>
            <p>하나의 요청이 제품이 되기까지</p>
            <span>End-to-end</span>
          </div>
          <div className={styles.traceFlow}>
            <div className={styles.traceNode}>
              <span>01</span>
              <strong>User</strong>
              <small>사용자 행동</small>
            </div>
            <div className={styles.traceNode}>
              <span>02</span>
              <strong>React</strong>
              <small>인터페이스</small>
            </div>
            <div className={styles.traceNode}>
              <span>03</span>
              <strong>API</strong>
              <small>서비스 로직</small>
            </div>
            <div className={styles.traceNode}>
              <span>04</span>
              <strong>Data</strong>
              <small>상태와 검색</small>
            </div>
            <div className={styles.traceNode}>
              <span>05</span>
              <strong>Cloud</strong>
              <small>배포와 운영</small>
            </div>
          </div>
          <div className={styles.traceFooter}>
            <div className={styles.profileThumb}>
              <Image
                src={withBasePath("/profile.jpg")}
                width={413}
                height={531}
                alt="홍인성 프로필 사진"
                priority
              />
            </div>
            <p>
              <strong>홍인성</strong>
              문제를 재현하고, 데이터로 확인하고, 운영까지 책임집니다.
            </p>
          </div>
        </aside>
      </div>

      <div className={styles.heroRail} aria-label="포트폴리오 요약">
        <div className={styles.metricList}>
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <p>React / TypeScript / FastAPI / Node.js</p>
      </div>
    </section>
  );
}
