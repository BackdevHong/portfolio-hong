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
          <p className={styles.eyebrow}>Selected work</p>
          <h2>만들다 막혔던 지점과<br />풀어낸 방법을 모았습니다.</h2>
        </div>
        <p>
          완성 화면만 보면 보이지 않는 일이 많았습니다. 왜 401이 반복됐는지,
          8GB 파일을 어떻게 올렸는지, 공정 시간이 왜 어긋났는지까지 적었습니다.
        </p>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Link
            className={styles.projectCard}
            href={`/projects/${project.slug}`}
            key={project.slug}
            style={
              {
                "--project-accent": project.accent,
                "--project-ink": project.accentInk,
              } as CSSProperties
            }
            aria-label={`${project.title} 상세 보기`}
          >
            <div className={styles.projectInfo}>
              <div className={styles.projectMeta}>
                <span>{project.period}</span>
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
                만든 과정 보기 <span aria-hidden="true">+</span>
              </span>
            </div>

            <div className={styles.projectVisual}>
              <div className={styles.visualTopline} aria-hidden="true">
                <span>Case {project.index}</span>
                <span>{project.tags[0]}</span>
              </div>
              {project.screenshots?.[0] ? (
                <div className={styles.visualScreenshot}>
                  <Image
                    src={withBasePath(project.screenshots[0].src)}
                    alt={project.screenshots[0].alt}
                    width={1280}
                    height={720}
                  />
                </div>
              ) : (
                <div className={styles.visualPanel}>
                  <strong className={styles.visualTitle}>{project.displayTitle}</strong>
                  <p>{project.summary}</p>
                </div>
              )}
              <div className={styles.visualFooter} aria-hidden="true">
                <span>{project.title}</span>
                <span>Open case study</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
