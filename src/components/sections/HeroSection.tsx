import { profile } from "@/data/portfolio";
import type { SectionStyles } from "./types";

type HeroSectionProps = {
  styles: SectionStyles;
};

export function HeroSection({ styles }: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroIntro}>
        <p className={styles.eyebrow}>Hong Inseong · Portfolio 2026</p>
        <h1 id="hero-title">{profile.heroTitle}</h1>
        <p className={styles.lead}>{profile.heroDescription}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#projects">
            프로젝트 보기 <span aria-hidden="true">↓</span>
          </a>
          <a
            className={styles.secondary}
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub 열기 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <aside className={styles.heroNote} aria-label="개발 방향">
        <p>How I work</p>
        <ol>
          <li>
            <span>01</span>
            <strong>문제를 작게 나눕니다.</strong>
          </li>
          <li>
            <span>02</span>
            <strong>동작하는 웹으로 만듭니다.</strong>
          </li>
          <li>
            <span>03</span>
            <strong>해결 과정을 기록합니다.</strong>
          </li>
        </ol>
        <div className={styles.stackLine}>
          React · TypeScript · Python · MySQL
        </div>
      </aside>
    </section>
  );
}
