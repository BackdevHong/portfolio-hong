import { profile } from "@/data/portfolio";
import type { SectionStyles } from "./types";

type HeaderProps = {
  styles: SectionStyles;
};

export function Header({ styles }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#top" aria-label="페이지 맨 위로 이동">
        <span>HI.</span>
        <span>Web Developer</span>
      </a>
      <nav className={styles.nav} aria-label="주요 메뉴">
        <a href="#projects">프로젝트</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a href="#contact">연락처</a>
      </nav>
    </header>
  );
}
