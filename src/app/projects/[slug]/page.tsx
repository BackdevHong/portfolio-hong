import { getProject, projects } from "@/data/portfolio";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
      images: [],
    },
    twitter: {
      card: "summary",
      title: `${project.title} | 홍인성 포트폴리오`,
      description: project.summary,
      images: [],
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
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.back} href="/#projects">
          <span aria-hidden="true">←</span> 프로젝트 목록
        </Link>
        <a
          className={styles.headerGithub}
          href={project.repository}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroMeta}>
            <span>{project.index}</span>
            <span>{project.category}</span>
            <span>{project.period}</span>
          </div>
          <h1>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.heroBottom}>
            <dl className={styles.facts}>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>{project.tags.join(" · ")}</dd>
              </div>
            </dl>
            <div className={styles.actions}>
              <a href={project.repository} target="_blank" rel="noreferrer">
                소스 코드 <span aria-hidden="true">↗</span>
              </a>
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  사이트 보기 <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </div>
        </section>

        <section className={styles.contentSection} aria-labelledby="features-title">
          <div className={styles.sectionLabel}>
            <span>01</span>
            <p>What I built</p>
          </div>
          <div className={styles.sectionContent}>
            <h2 id="features-title">무엇을 만들었나요?</h2>
            <ul className={styles.featureList}>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
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
