import { profile, skills } from "@/data/portfolio";
import type { SectionStyles } from "./types";

type AboutSectionProps = {
  styles: SectionStyles;
};

export function AboutSection({ styles }: AboutSectionProps) {
  return (
    <section id="about" className={styles.section}>
      <p className={styles.kicker}>About</p>
      <div className={styles.split}>
        <h2>{profile.aboutTitle}</h2>
        <div className={styles.bodyText}>
          <p>{profile.aboutDescription}</p>
          <ul className={styles.skills}>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
