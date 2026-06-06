import Link from "next/link";
import PROJECTS from "../data/projects";
import s from "../styles/Catalogue.module.css";

export default function Business() {
  return (
    <div className={s.page}>
      <div className={s.wrap}>
        <div className={s.catHeader}>
          <div>
            <div className={s.catalogueCount}>{PROJECTS.length} Projects</div>
            <h1 className={s.catTitle}>Business<br />Projects</h1>
          </div>
          <p className={s.catSub}>
            A lot of my archive work started as passion projects — now I&rsquo;m
            focused on creating more refined, professional software and
            continuing to grow as a developer.
          </p>
        </div>

        <div className={s.tileList}>
          {PROJECTS.map((p, i) => (
            <Link key={p.id} href={`/projects/${p.slug}`} className={s.tile}>
              <div>
                <div className={s.tileNum}>0{i + 1}</div>
                <div className={s.tileName}>{p.name}</div>
                <div className={s.tileMeta}>{p.year}</div>
                {p.desc && (
                  <p style={{
                    fontSize: "0.85rem",
                    color: "var(--muted)",
                    fontWeight: 300,
                    lineHeight: 1.6,
                    marginTop: "0.75rem",
                    maxWidth: "560px",
                  }}>
                    {p.desc}
                  </p>
                )}
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