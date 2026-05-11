import { experiences } from "@/data/portfolio";
import type { SectionStyles } from "./types";

type ExperienceSectionProps = {
  styles: SectionStyles;
};

export function ExperienceSection({ styles }: ExperienceSectionProps) {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.sectionHeader}>
        <p className={styles.kicker}>Experience</p>
        <h2>Experience</h2>
      </div>
      <div className={styles.timeline}>
        {experiences.map((experience) => (
          <article className={styles.timelineItem} key={experience.company}>
            <div>
              <h3>{experience.company}</h3>
              <p>{experience.role}</p>
            </div>
            <span>{experience.period}</span>
            <p>{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
