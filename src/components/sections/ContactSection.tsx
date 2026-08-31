import { profile } from "@/data/portfolio";
import type { SectionStyles } from "./types";

type ContactSectionProps = {
  styles: SectionStyles;
};

export function ContactSection({ styles }: ContactSectionProps) {
  return (
    <footer id="contact" className={styles.contact}>
      <div className={styles.contactIntro}>
        <p className={styles.eyebrow}>Contact · Next chapter</p>
        <h2>
          <span>LET&apos;S BUILD</span>
          <span>SOMETHING USEFUL.</span>
        </h2>
        <p>사용할 이유가 분명한 제품을 함께 만들 기회를 기다립니다.</p>
      </div>
      <div className={styles.contactLinks}>
        <a href={`mailto:${profile.email}`}>
          {profile.email} <span aria-hidden="true">↗</span>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          github.com/BackdevHong <span aria-hidden="true">↗</span>
        </a>
      </div>
      <p className={styles.copyright}>© 2026 Hong Inseong</p>
    </footer>
  );
}
