import s from "../styles/Catalogue.module.css";

export default function Masters() {
  return (
    <div className={s.page}>
      <div className={s.wrap}>
        <div className={s.catHeader}>
          <h1 className={s.catTitle}>Masters<br />Projects</h1>
          <p className={s.catSub}>
            MSc Applied AI at the University of Warwick, documented as each project is completed throughout the programme.
          </p>
        </div>

        <div className={s.soon}>
          <div className={s.soonPill}>
            <div className={s.soonDot} />
            Begins September 2026
          </div>
          <h2 className={s.soonHeading}>Watch This Space</h2>
          <p className={s.soonBody}>
            I&rsquo;ll be starting my Master&rsquo;s degree this September. As I work
            through the programme, each project will be documented and added here.
          </p>
          <div className={s.soonWatermark}>2026</div>
        </div>
      </div>
    </div>
  );
}
