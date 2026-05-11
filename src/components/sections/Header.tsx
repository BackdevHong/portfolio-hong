import { profile } from "@/data/portfolio";
import type { SectionStyles } from "./types";

type HeaderProps = {
  styles: SectionStyles;
};

export function Header({ styles }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#top" aria-label="홈으로 이동">
        {profile.name}
      </a>
      <nav className={styles.nav} aria-label="주요 섹션">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#videos">Videos</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
