import { profile } from "@/data/portfolio";
import type { SectionStyles } from "./types";

type HeaderProps = {
  styles: SectionStyles;
};

export function Header({ styles }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#top" aria-label="페이지 맨 위로 이동">
        <span>HONG INSEONG</span>
        <span>PORTFOLIO / 2026</span>
      </a>
      <nav className={styles.nav} aria-label="주요 메뉴">
        <a href="#projects">01. Work</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          02. GitHub <span aria-hidden="true">↗</span>
        </a>
        <a href="#contact">03. Contact</a>
      </nav>
    </header>
  );
}
