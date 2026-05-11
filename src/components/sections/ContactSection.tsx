import { profile } from "@/data/portfolio";
import type { SectionStyles } from "./types";

type ContactSectionProps = {
  styles: SectionStyles;
};

export function ContactSection({ styles }: ContactSectionProps) {
  return (
    <section id="contact" className={styles.contact}>
      <p className={styles.kicker}>Contact</p>
      <h2>웹, 게임 콘텐츠, 자동화 프로젝트에 관심이 있습니다.</h2>
      <div className={styles.contactLinks}>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.github}>github.com/BackdevHong</a>
      </div>
    </section>
  );
}
