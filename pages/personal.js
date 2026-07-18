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
            Work built outside of client projects — I view these projects as
            excellent opportunities to learn new skills without the pressures
            of client needs and deadlines.
          </p>
        </div>

        <div className={s.tileList}>
          {PERSONAL_PROJECTS.map((p, i) => (
            <Link key={p.id} href={`/projects/${p.slug}`} className={s.tile}>
              <div className={s.tileLeft}>
                <div className={s.tileNum}>0{i + 1}</div>
                <div className={s.tileName}>{p.name}</div>
                <div className={s.tileMeta}>{p.year}</div>
                <p className={s.tileDesc}>
                  {p.desc}
                </p>
                <div className={s.tileTags}>
                  {p.tags.map((t) => (
                    <span key={t} className={s.tileTag}>{t}</span>
                  ))}
                </div>
              </div>
              <div className={s.tileRight}>
                {p.image && (
                  <div className={s.tileImgWrap}>
                    <img
                      src={p.image}
                      alt={p.name}
                      className={s.tileImg}
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
