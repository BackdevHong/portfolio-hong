import { metrics, profile } from "@/data/portfolio";
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
        <p>Seoul, Korea · Web &amp; Data</p>
      </div>

      <div className={styles.heroStage}>
        <div className={styles.heroIntro}>
          <p className={styles.eyebrow}>Hong Inseong · Developer Portfolio</p>
          <h1 id="hero-title">
            <span>WEB / DATA</span>
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
              href={`mailto:${profile.email}`}
            >
              이메일 보내기 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className={styles.identityCard} aria-label="홍인성 프로필">
          <div className={styles.portraitFrame}>
            <Image
              src="/profile.jpg"
              width={413}
              height={531}
              alt="홍인성 프로필 사진"
              priority
            />
            <span>HI / 26</span>
          </div>
          <div className={styles.identityCaption}>
            <p>Frontend-focused developer</p>
            <strong>기능을 구현하고, 문제 해결의 이유까지 설명합니다.</strong>
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
        <p>React · TypeScript · Python · MySQL</p>
      </div>
    </section>
  );
}
