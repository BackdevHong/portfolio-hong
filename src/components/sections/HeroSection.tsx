import { metrics, profile } from "@/data/portfolio";
import type { SectionStyles } from "./types";

type HeroSectionProps = {
  styles: SectionStyles;
};

export function HeroSection({ styles }: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.kicker}>Developer Portfolio</p>
        <h1>{profile.heroTitle}</h1>
        <p className={styles.lead}>{profile.heroDescription}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#projects">
            프로젝트 보기
          </a>
          <a className={styles.secondary} href={`mailto:${profile.email}`}>
            연락하기
          </a>
        </div>
      </div>
      <aside className={styles.profilePanel} aria-label="프로필 요약">
        <div className={styles.profileHeader}>
          <span>{profile.name}</span>
          <strong>{profile.role}</strong>
        </div>
        <div className={styles.codeWindow} aria-hidden="true">
          <div className={styles.windowDots}>
            <span />
            <span />
            <span />
          </div>
          <pre>{`plugin.register({
  stack: ["Java", "React"],
  focus: "Web Full-Stack",
  goal: "Many Money"
});`}</pre>
        </div>
        <div className={styles.metricGrid}>
          {metrics.map((metric) => (
            <div className={styles.metric} key={metric.label}>
              <b>{metric.value}</b>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
