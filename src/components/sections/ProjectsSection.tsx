import { projectCategories } from "@/data/portfolio";
import type { CSSProperties } from "react";
import type { SectionStyles } from "./types";

type ProjectsSectionProps = {
  styles: SectionStyles;
};

export function ProjectsSection({ styles }: ProjectsSectionProps) {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.sectionHeader}>
        <p className={styles.kicker}>Projects</p>
        <h2>Selected Projects</h2>
        <p>
          웹 서비스와 대형 게임 콘텐츠 프로젝트를 중심으로, 코드에서 확인한
          강점을 취업 포인트로 정리했습니다.
        </p>
      </div>
      <div className={styles.projectList}>
        {projectCategories.map((project, index) => (
          <article
            className={styles.projectCard}
            key={project.title}
            style={{ "--index": index } as CSSProperties}
          >
            <div className={styles.projectTop}>
              <div>
                <span className={styles.projectNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>
                  {project.url ? (
                    <a
                      className={styles.projectTitleLink}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                {project.plugins.length > 0 ? (
                  <p className={styles.pluginList}>
                    {project.plugins.join(" · ")}
                  </p>
                ) : null}
              </div>
              <ul className={styles.tagList} aria-label={`${project.title} 기술`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.highlightBlock}>
              <strong>취업 포인트</strong>
              <ul className={styles.highlights}>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
