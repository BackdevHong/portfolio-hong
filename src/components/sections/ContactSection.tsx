import { profile } from "@/data/portfolio";
import type { SectionStyles } from "./types";

type ContactSectionProps = {
  styles: SectionStyles;
};

export function ContactSection({ styles }: ContactSectionProps) {
  return (
    <footer id="contact" className={styles.contact}>
      <div className={styles.contactIntro}>
        <p className={styles.eyebrow}>Contact</p>
        <h2>화면도, 서버도 함께 볼 사람이 필요하다면<br />편하게 연락 주세요.</h2>
        <p>맡은 기능이 배포된 뒤 제대로 도는지까지 챙깁니다.</p>
      </div>
      <div className={styles.contactLinks}>
        <a href={`mailto:${profile.email}`}>
          이메일 보내기 <span>{profile.email}</span>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub 보기 <span>github.com/BackdevHong</span>
        </a>
      </div>
      <p className={styles.copyright}>© 2026 Hong Inseong</p>
    </footer>
  );
}
