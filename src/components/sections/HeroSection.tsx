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
        <p>Selected works · 2022—2026</p>
        <p>Seoul, Korea · Full-stack &amp; AI</p>
      </div>

      <div className={styles.heroStage}>
        <div className={styles.heroIntro}>
          <p className={styles.eyebrow}>Hong Inseong · Developer Portfolio</p>
          <h1 id="hero-title">
            <span>FULL-STACK / WEB</span>
            <span>DEVELOPER<i>.</i></span>
          </h1>
          <p className={styles.heroMission}>{profile.heroTitle}</p>
          <p className={styles.lead}>{profile.heroDescription}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#projects">
              프로젝트 둘러보기 <span aria-hidden="true">↘</span>
            </a>
            <a
              className={styles.secondary}
              href={withBasePath(profile.resume)}
              target="_blank"
              rel="noreferrer"
            >
              이력서 PDF <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className={styles.identityCard} aria-label="홍인성 프로필">
          <div className={styles.portraitFrame}>
            <Image
              src={withBasePath("/profile.jpg")}
              width={413}
              height={531}
              alt="홍인성 프로필 사진"
              priority
            />
            <span>FULL-STACK</span>
          </div>
          <div className={styles.identityCaption}>
            <p>Full-stack web developer</p>
            <strong>사용자 흐름부터 데이터와 운영까지 하나로 연결합니다.</strong>
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
        <p>React · TypeScript · FastAPI · Node.js</p>
      </div>
    </section>
  );
}
