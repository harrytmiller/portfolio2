import Link from "next/link";
import PROJECTS from "../data/projects";
import s from "../styles/Catalogue.module.css";

const BUSINESS_PROJECTS = PROJECTS.filter((p) => p.category === "Business Project");

export default function Business() {
  return (
    <div className={s.page}>
      <div className={s.wrap}>
        <div className={s.catHeader}>
          <div>
            <div className={s.catalogueCount}>{BUSINESS_PROJECTS.length} Projects</div>
            <h1 className={s.catTitle}>Business<br />Projects</h1>
          </div>
          <p className={s.catSub}>
            A lot of my archive work started as passion projects — now I&rsquo;m
            focused on creating more refined, professional software and
            continuing to grow as a developer.
          </p>
        </div>

        <div className={s.tileList}>
          {BUSINESS_PROJECTS.map((p, i) => (
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