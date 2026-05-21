import Link from "next/link";
import PROJECTS from "../data/projects";
import s from "../styles/Catalogue.module.css";

export default function Business() {
  return (
    <div className={s.page}>
      <div className={s.wrap}>
        <div className={s.catHeader}>
          <h1 className={s.catTitle}>Business<br />Projects</h1>
          <p className={s.catSub}>
            A lot of my archive work started as passion projects — now I’m focused on creating more refined, professional software and continuing to grow as a developer.
          </p>
        </div>

        <div className={s.tileList}>
          {PROJECTS.map((p, i) => (
            <Link key={p.id} href={`/projects/${p.slug}`} className={s.tile}>
              <div>
                <div className={s.tileNum}>0{i + 1}</div>
                <div className={s.tileName}>{p.name}</div>
                <div className={s.tileMeta}>{p.role} · {p.year}</div>
                <div className={s.tileTags}>
                  {p.tags.map((t) => (
                    <span key={t} className={s.tileTag}>{t}</span>
                  ))}
                </div>
              </div>
              <em className={s.tileArrow}>↗</em>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
