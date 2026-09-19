import { experience } from "@/data/portfolio";
import type { SectionStyles } from "./types";

type ExperienceSectionProps = {
  styles: SectionStyles;
};

export function ExperienceSection({ styles }: ExperienceSectionProps) {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.experienceIntro}>
        <p className={styles.eyebrow}>Professional experience · 01</p>
        <h2>
          WORK <span>/ EXPERIENCE</span>
        </h2>
        <p>
          사이드 프로젝트보다 앞서, 실제 업무에서 데이터를 다루고 반복 작업을
          자동화한 경험부터 소개합니다.
        </p>
      </div>

      <div className={styles.experienceList}>
        {experience.map((item) => (
          <article className={styles.experienceCard} key={item.company}>
            <div className={styles.experienceMeta}>
              <span>{item.period}</span>
              <strong>{item.duration}</strong>
            </div>
            <div className={styles.experienceBody}>
              <p>{item.team}</p>
              <h3>{item.company}</h3>
              <strong>{item.summary}</strong>
              <ol>
                {item.highlights.map((highlight, index) => (
                  <li key={highlight}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {highlight}
                  </li>
                ))}
              </ol>
              <ul aria-label={`${item.company} 기술 스택`}>
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
