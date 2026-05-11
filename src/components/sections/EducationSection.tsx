import { education } from "@/data/portfolio";
import type { SectionStyles } from "./types";

type EducationSectionProps = {
  styles: SectionStyles;
};

export function EducationSection({ styles }: EducationSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <p className={styles.kicker}>Education</p>
        <h2>Education & Certificate</h2>
      </div>
      <div className={styles.educationGrid}>
        {education.map((item) => (
          <article className={styles.educationCard} key={item.school}>
            <h3>{item.school}</h3>
            <span>{item.period}</span>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
