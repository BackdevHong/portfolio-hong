import { projects } from "@/data/portfolio";
import { withBasePath } from "@/lib/site-url";
import Image from "next/image";
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
          <p className={styles.eyebrow}>
            Selected work · {projects.length.toString().padStart(2, "0")} case studies
          </p>
          <h2>
            PROJECT <span>/ INDEX</span>
          </h2>
        </div>
        <p>
          결과 화면만 보여주지 않습니다. 어떤 문제를 발견했고, 어떻게 구현했으며,
          무엇을 해결했는지 프로젝트별 흐름으로 정리했습니다.
        </p>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <Link
            className={styles.projectCard}
            href={`/projects/${project.slug}`}
            key={project.slug}
            style={
              {
                "--index": index,
                "--project-accent": project.accent,
                "--project-ink": project.accentInk,
              } as CSSProperties
            }
            aria-label={`${project.title} 상세 보기`}
          >
            <div className={styles.projectInfo}>
              <div className={styles.projectMeta}>
                <span>Project / {project.index}</span>
                <span>{project.category}</span>
              </div>
              <div className={styles.projectBody}>
                <p>{project.role}</p>
                <h3>{project.title}</h3>
                <strong>{project.summary}</strong>
                <p>{project.description}</p>
              </div>
              <ul className={styles.tagList} aria-label={`${project.title} 기술 스택`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className={styles.cardLink}>
                Case study 열기 <span aria-hidden="true">↗</span>
              </span>
            </div>

            <div className={styles.projectVisual} aria-hidden="true">
              <div className={styles.visualTopline}>
                <span>HONG INSEONG / PORTFOLIO</span>
                <span>{project.period}</span>
              </div>
              <strong className={styles.visualTitle}>{project.displayTitle}</strong>
              {project.screenshots?.[0] ? (
                <div className={styles.visualScreenshot}>
                  <div>
                    <span>Built project</span>
                    <span>Actual screen / 01</span>
                  </div>
                  <Image
                    src={withBasePath(project.screenshots[0].src)}
                    alt=""
                    width={1280}
                    height={720}
                  />
                </div>
              ) : (
                <div className={styles.visualPanel}>
                  <div>
                    <span>Core</span>
                    <strong>{project.features.length.toString().padStart(2, "0")}</strong>
                    <small>Features</small>
                  </div>
                  <div>
                    <span>Solve</span>
                    <strong>{project.troubleshooting.length.toString().padStart(2, "0")}</strong>
                    <small>Cases</small>
                  </div>
                  <p>{project.tags.slice(0, 3).join(" / ")}</p>
                </div>
              )}
              <div className={styles.visualFooter}>
                <span>{project.category}</span>
                <span>View project ↗</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
