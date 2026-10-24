import { experience } from "@/data/portfolio";
import type { SectionStyles } from "./types";

type ExperienceSectionProps = {
  styles: SectionStyles;
};

export function ExperienceSection({ styles }: ExperienceSectionProps) {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.experienceIntro}>
        <p className={styles.eyebrow}>Professional experience</p>
        <h2>공정 데이터 한 줄에도<br />현장 사정이 있었습니다.</h2>
        <p>
          공정 데이터가 이상해 보여도 바로 지우면 안 됐습니다. 담당자에게 이유를
          묻고 기준부터 맞춘 뒤, 자주 반복되는 정리 작업은 Python으로 옮겼습니다.
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
                    <span aria-hidden="true">{index + 1}</span>
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
