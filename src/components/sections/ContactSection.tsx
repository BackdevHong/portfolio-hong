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
        <h2>같이 만들 프로젝트가 있다면,<br />편하게 이야기해주세요.</h2>
        <p>사용자와 기술 사이를 연결하는 풀스택 개발자로 함께하겠습니다.</p>
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
