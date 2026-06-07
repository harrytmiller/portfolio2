import { useState } from "react";
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

const VISIBLE_THUMBS = 7;

function Gallery({ images, name }) {
  const [current, setCurrent] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);

  if (!images || images.length === 0) return null;

  const go = (index) => {
    const next = (index + images.length) % images.length;
    setCurrent(next);
    if (next < thumbStart) setThumbStart(next);
    else if (next > thumbStart + VISIBLE_THUMBS - 1)
      setThumbStart(next - VISIBLE_THUMBS + 1);
  };

  const maxStart = Math.max(0, images.length - VISIBLE_THUMBS);
  const thumbPrev = () => setThumbStart((v) => Math.max(0, v - 1));
  const thumbNext = () => setThumbStart((v) => Math.min(maxStart, v + 1));
  const visibleThumbs = images.slice(thumbStart, thumbStart + VISIBLE_THUMBS);

  const navArrow = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "none",
    background: "rgba(20,20,20,0.5)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    color: "#fff",
    fontSize: "1.4rem",
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 2,
  };

  const stripArrow = {
    width: "28px",
    flexShrink: 0,
    alignSelf: "stretch",
    border: "none",
    background: "none",
    color: "var(--muted)",
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "color 0.15s",
  };

  return (
    <div style={{ margin: "3rem 0", width: "95%", marginLeft: "auto", marginRight: "auto" }}>
      {/* Main viewer — fixed ratio, consistent across images */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1919 / 910",
          borderRadius: "6px",
          overflow: "hidden",
          border: "1px solid var(--border)",
          background: "var(--surface)",
        }}
      >
        <img
          src={images[current]}
          alt={`${name} screenshot ${current + 1}`}
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        />
        {images.length > 1 && (
          <>
            <button onClick={() => go(current - 1)} aria-label="Previous" style={{ ...navArrow, left: "14px" }}>‹</button>
            <button onClick={() => go(current + 1)} aria-label="Next" style={{ ...navArrow, right: "14px" }}>›</button>
            <div
              style={{
                position: "absolute",
                bottom: "14px",
                right: "14px",
                padding: "0.2rem 0.65rem",
                borderRadius: "100px",
                background: "rgba(20,20,20,0.5)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                color: "#fff",
                fontSize: "0.7rem",
                letterSpacing: "0.05em",
                fontWeight: 500,
              }}
            >
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", marginTop: "0.85rem" }}>
          <button
            onClick={thumbPrev}
            disabled={thumbStart === 0}
            aria-label="Previous thumbnails"
            style={{ ...stripArrow, opacity: thumbStart === 0 ? 0.25 : 1, cursor: thumbStart === 0 ? "default" : "pointer" }}
          >
            ‹
          </button>

          <div style={{ display: "flex", gap: "0.5rem", flex: 1, minWidth: 0 }}>
            {visibleThumbs.map((src, i) => {
              const idx = thumbStart + i;
              const active = idx === current;
              return (
                <button
                  key={idx}
                  onClick={() => go(idx)}
                  aria-label={`Image ${idx + 1}`}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    height: "52px",
                    padding: 0,
                    border: active ? "1.5px solid var(--text)" : "1px solid var(--border)",
                    borderRadius: "4px",
                    overflow: "hidden",
                    cursor: "pointer",
                    background: "var(--surface)",
                    opacity: active ? 1 : 0.5,
                    transition: "opacity 0.15s, border-color 0.15s",
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </button>
              );
            })}
          </div>

          <button
            onClick={thumbNext}
            disabled={thumbStart >= maxStart}
            aria-label="More thumbnails"
            style={{ ...stripArrow, opacity: thumbStart >= maxStart ? 0.25 : 1, cursor: thumbStart >= maxStart ? "default" : "pointer" }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProjectPage({ project }) {
  if (!project) return null;

  // Cycle to the next project in the list, wrapping back to the first
  const currentIdx = PROJECTS.findIndex((p) => p.id === project.id);
  const other = PROJECTS.length > 1
    ? PROJECTS[(currentIdx + 1) % PROJECTS.length]
    : null;
  const galleryImages =
    project.images && project.images.length > 0
      ? project.images
      : project.image
      ? [project.image]
      : [];

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

        {galleryImages.length > 0 ? (
          <Gallery key={project.id} images={galleryImages} name={project.name} />
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