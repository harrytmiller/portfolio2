import Link from "next/link";
import PROJECTS from "../data/projects";
import s from "../styles/Catalogue.module.css";

const PERSONAL_PROJECTS = PROJECTS.filter((p) => p.category === "Personal Project");

export default function Personal() {
  return (
    <div className={s.page}>
      <div className={s.wrap}>
        <div className={s.catHeader}>
          <div>
            <div className={s.catalogueCount}>{PERSONAL_PROJECTS.length} Project{PERSONAL_PROJECTS.length === 1 ? "" : "s"}</div>
            <h1 className={s.catTitle}>Personal<br />Projects</h1>
          </div>
          <p className={s.catSub}>
            Things I&rsquo;ve built outside of client work — usually to learn
            something new, solve a problem for myself, or just because I
            wanted to see if I could.
          </p>
        </div>

        <div className={s.tileList}>
          {PERSONAL_PROJECTS.map((p, i) => (
            <Link key={p.id} href={`/projects/${p.slug}`} className={s.tile}>
              <div>
                <div className={s.tileNum}>0{i + 1}</div>
                <div className={s.tileName}>{p.name}</div>
                <div className={s.tileMeta}>{p.year}</div>
                <p style={{
                  fontSize: "0.8rem",
                  color: "var(--muted)",
                  fontWeight: 300,
                  lineHeight: 1.65,
                  marginTop: "0.6rem",
                  maxWidth: "560px",
                }}>
                  {p.desc}
                </p>
                <div className={s.tileTags}>
                  {p.tags.map((t) => (
                    <span key={t} className={s.tileTag}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                {p.image && (
                  <div
                    style={{
                      height: "clamp(56px, 14vw, 115px)",
                      aspectRatio: "1919 / 910",
                      borderRadius: "4px",
                      overflow: "hidden",
                      border: "1px solid var(--border)",
                      flexShrink: 0,
                      background: "var(--surface)",
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                )}
                <em className={s.tileArrow}>↗</em>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
