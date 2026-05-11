import { youtubeContents } from "@/data/portfolio";
import type { SectionStyles } from "./types";

type YoutubeSectionProps = {
  styles: SectionStyles;
};

export function YoutubeSection({ styles }: YoutubeSectionProps) {
  return (
    <section id="videos" className={styles.section}>
      <div className={styles.sectionHeader}>
        <p className={styles.kicker}>YouTube</p>
        <h2>Published Contents</h2>
        <p>
          실제 업로드된 콘텐츠 영상으로 프로젝트 결과물을 확인할 수 있도록
          모았습니다.
        </p>
      </div>
      <div className={styles.youtubeGrid}>
        {youtubeContents.map((content, index) => (
          <article className={styles.youtubeCard} key={content.title}>
            <a
              className={styles.youtubeThumb}
              href={content.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${content.title} 영상 보러가기`}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>Watch on YouTube</strong>
            </a>
            <div className={styles.youtubeBody}>
              <p className={styles.youtubeMeta}>
                {content.channel} · {content.role}
              </p>
              <h3>
                <a href={content.url} target="_blank" rel="noopener noreferrer">
                  {content.title}
                </a>
              </h3>
              <p>{content.description}</p>
              <ul className={styles.tagList} aria-label={`${content.title} 태그`}>
                {content.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
