import { projects } from "@/data/portfolio";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { SectionStyles } from "./types";

type ProjectsSectionProps = {
  styles: SectionStyles;
};

export function ProjectsSection({ styles }: ProjectsSectionProps) {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.eyebrow}>Selected work</p>
          <h2>선별 프로젝트</h2>
        </div>
        <p>
          직접 진행한 웹·데이터 프로젝트입니다. 카드를 누르면 구현 내용과
          트러블슈팅을 볼 수 있습니다.
        </p>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <Link
            className={styles.projectCard}
            href={`/projects/${project.slug}`}
            key={project.slug}
            style={{ "--index": index } as CSSProperties}
            aria-label={`${project.title} 상세 보기`}
          >
            <div className={styles.projectMeta}>
              <span>{project.index}</span>
              <span>{project.category}</span>
              <span>{project.period}</span>
            </div>
            <div className={styles.projectBody}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
            <ul className={styles.tagList} aria-label={`${project.title} 기술 스택`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <span className={styles.cardLink}>
              프로젝트 자세히 보기 <span aria-hidden="true">↗</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
