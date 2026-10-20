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
        <h2>현업에서 배운 것은<br />데이터의 맥락입니다.</h2>
        <p>
          실제 제조 데이터를 다루며 예외를 발견하고, 담당자와 기준을 맞추고,
          반복되는 판단을 자동화하는 흐름을 익혔습니다.
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
