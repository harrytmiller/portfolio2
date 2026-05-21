import Link from "next/link";
import PROJECTS from "../../data/projects";
import s from "../../styles/Catalogue.module.css";

export async function getStaticPaths() {
  return {
    paths: PROJECTS.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug) || null;
  return { props: { project } };
}

export default function ProjectPage({ project }) {
  if (!project) return null;

  const other = PROJECTS.find((p) => p.id !== project.id);

  return (
    <div className={s.page}>
      <div className={s.wrap}>
        <Link href="/business" className={s.projBack}>
          ← Back to Work
        </Link>

        <div className={s.projHero}>
          <div>
            <div className={s.projCat}>{project.category}</div>
            <h1 className={s.projTitle}>{project.name}</h1>
          </div>
          <div className={s.projMeta}>
            <div className={s.metaItem}>
              <span className={s.metaLabel}>Year</span>
              <span className={s.metaVal}>{project.year}</span>
            </div>
            <div className={s.metaItem}>
              <span className={s.metaLabel}>Disciplines</span>
              <span className={s.metaVal}>{project.tags.join(", ")}</span>
            </div>
            {project.link && (
              <div className={s.metaItem}>
                <span className={s.metaLabel}>Live</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.metaLink}
                >
                  View project ↗
                </a>
              </div>
            )}
          </div>
        </div>

        {project.image ? (
          <div style={{ width:"100%", margin:"3rem 0", borderRadius:"4px", overflow:"hidden", border:"1px solid var(--border)" }}>
            <img src={project.image} alt={project.name} style={{ width:"100%", height:"auto", display:"block" }} />
          </div>
        ) : (
          <div className={s.projImg}>Image Placeholder</div>
        )}

        <div className={s.projSection}>
          <span className={s.projSectionLabel}>Overview</span>
          <div className={s.projSectionBody}><p>{project.overview}</p></div>
        </div>

        {project.software && (
          <div className={s.projSection}>
            <span className={s.projSectionLabel}>Software &amp; Infrastructure</span>
            <div className={s.projSectionBody}><p>{project.software}</p></div>
          </div>
        )}

        {project.outcome && (
          <div className={s.projSection}>
            <span className={s.projSectionLabel}>Outcome</span>
            <div className={s.projSectionBody}><p>{project.outcome}</p></div>
          </div>
        )}

        {other && (
          <Link href={`/projects/${other.slug}`} className={s.projNext}>
            <div>
              <div className={s.projNextLabel}>Next Project</div>
              <div className={s.projNextName}>{other.name}</div>
            </div>
            <em className={s.projNextArrow}>→</em>
          </Link>
        )}
      </div>
    </div>
  );
}