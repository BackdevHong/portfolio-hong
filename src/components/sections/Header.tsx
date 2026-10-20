import { profile } from "@/data/portfolio";
import { withBasePath } from "@/lib/site-url";
import type { SectionStyles } from "./types";

type HeaderProps = {
  styles: SectionStyles;
};

export function Header({ styles }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#top" aria-label="페이지 맨 위로 이동">
        <strong>HI</strong>
        <span>
          홍인성
          <small>Full-stack developer</small>
        </span>
      </a>
      <nav className={styles.nav} aria-label="주요 메뉴">
        <a href="#projects">프로젝트</a>
        <a href="#experience">경력</a>
        <a href={withBasePath(profile.resume)} target="_blank" rel="noreferrer">
          이력서
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
    </header>
  );
}
