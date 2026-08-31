import { getProject, projects } from "@/data/portfolio";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import styles from "./project.module.css";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | 홍인성 포트폴리오`,
      description: project.summary,
      images: project.screenshots?.[0]
        ? [
            {
              url: project.screenshots[0].src,
              width: 1280,
              height: 720,
              alt: project.screenshots[0].alt,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary",
      title: `${project.title} | 홍인성 포트폴리오`,
      description: project.summary,
      images: project.screenshots?.[0] ? [project.screenshots[0].src] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div
      className={styles.page}
      style={
        {
          "--project-accent": project.accent,
          "--project-accent-ink": project.accentInk,
        } as CSSProperties
      }
    >
      <header className={styles.header}>
        <Link className={styles.back} href="/#projects">
          <span aria-hidden="true">←</span> 프로젝트 목록
        </Link>
        {project.repository ? (
          <a
            className={styles.headerGithub}
            href={project.repository}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className={styles.privateLabel}>Company project · Source private</span>
        )}
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroTopline}>
            <div className={styles.heroMeta}>
              <span>Project / {project.index}</span>
              <span>{project.category}</span>
              <span>{project.period}</span>
            </div>
            <span>Case study · Hong Inseong</span>
          </div>

          <h1>
            <span>{project.displayTitle}</span>
            <small>{project.title}</small>
          </h1>

          <div className={styles.heroOverview}>
            <div className={styles.heroCopy}>
              <p className={styles.summary}>{project.summary}</p>
              <p className={styles.description}>{project.description}</p>
            </div>
            <div className={styles.heroPoster} aria-hidden="true">
              <div>
                <span>Core features</span>
                <strong>{project.features.length.toString().padStart(2, "0")}</strong>
              </div>
              <div>
                <span>Solved cases</span>
                <strong>{project.troubleshooting.length.toString().padStart(2, "0")}</strong>
              </div>
              <p>{project.tags.slice(0, 3).join(" / ")}</p>
            </div>
          </div>

          <div className={styles.heroBottom}>
            <dl className={styles.facts}>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Core stack</dt>
                <dd>{project.tags.join(" · ")}</dd>
              </div>
            </dl>
            <div className={styles.actions}>
              {project.repository ? (
                <a href={project.repository} target="_blank" rel="noreferrer">
                  소스 코드 <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  사이트 보기 <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              {project.sourceNote ? (
                <p className={styles.sourceNotice}>
                  <span>Source access</span>
                  {project.sourceNote}
                </p>
              ) : null}
            </div>
          </div>
        </section>

        {project.screenshots?.length ? (
          <section
            className={`${styles.contentSection} ${styles.screenSection}`}
            aria-labelledby="screen-title"
          >
            <div className={styles.sectionLabel}>
              <span>00</span>
              <p>Actual screen</p>
            </div>
            <div className={styles.sectionContent}>
              <p className={styles.sectionKicker}>Built &amp; captured</p>
              <h2 id="screen-title">직접 실행한 프로젝트 화면</h2>
              <div className={styles.screenGallery}>
                {project.screenshots.map((screenshot) => (
                  <figure key={screenshot.src}>
                    <div className={styles.screenFrame}>
                      <div className={styles.screenChrome} aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <p>{project.title}</p>
                      </div>
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={1280}
                        height={720}
                        sizes="(max-width: 720px) 100vw, 78vw"
                      />
                    </div>
                    <figcaption>{screenshot.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className={styles.contentSection} aria-labelledby="features-title">
          <div className={styles.sectionLabel}>
            <span>01</span>
            <p>Project brief</p>
          </div>
          <div className={styles.sectionContent}>
            <p className={styles.sectionKicker}>What I built</p>
            <h2 id="features-title">무엇을 만들었나요?</h2>
            <ul className={styles.featureList}>
              {project.features.map((feature, index) => (
                <li key={feature}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.contentSection} aria-labelledby="implementation-title">
          <div className={styles.sectionLabel}>
            <span>02</span>
            <p>Implementation</p>
          </div>
          <div className={styles.sectionContent}>
            <p className={styles.sectionKicker}>Implementation</p>
            <h2 id="implementation-title">어떻게 구현했나요?</h2>
            <div className={styles.buildGrid}>
              {project.buildPoints.map((point, index) => (
                <article key={point.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`${styles.contentSection} ${styles.troubleSection}`}
          aria-labelledby="troubleshooting-title"
        >
          <div className={styles.sectionLabel}>
            <span>03</span>
            <p>Troubleshooting</p>
          </div>
          <div className={styles.sectionContent}>
            <p className={styles.sectionKicker}>Troubleshooting</p>
            <h2 id="troubleshooting-title">문제를 어떻게 해결했나요?</h2>
            <div className={styles.troubleList}>
              {project.troubleshooting.map((item, index) => (
                <article key={item.title}>
                  <div className={styles.troubleTitle}>
                    <span>Case {String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <dl>
                    <div>
                      <dt>문제</dt>
                      <dd>{item.problem}</dd>
                    </div>
                    <div>
                      <dt>해결</dt>
                      <dd>{item.solution}</dd>
                    </div>
                    <div>
                      <dt>결과</dt>
                      <dd>{item.result}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Link className={styles.nextProject} href={`/projects/${nextProject.slug}`}>
          <span>다음 프로젝트</span>
          <strong>{nextProject.title}</strong>
          <span aria-hidden="true">→</span>
        </Link>
      </main>
    </div>
  );
}
