import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "../context/ThemeContext";
import PROJECTS from "../data/projects";
import s from "../styles/Nav.module.css";

const ARCHIVE_URL = "https://harrytmiller.github.io/portfolio/";

export default function Nav() {
  const { dark, toggle } = useTheme();
  const router = useRouter();
  const { pathname, query } = router;
  const [open, setOpen] = useState(false);

  // /projects/[slug] is shared by both Business and Personal projects, so
  // look up which category the current project actually belongs to rather
  // than just matching the path prefix.
  const currentProject = pathname.startsWith("/projects")
    ? PROJECTS.find((p) => p.slug === query.slug)
    : null;

  const isBusiness =
    pathname.startsWith("/business") ||
    (currentProject && currentProject.category === "Business Project");
  const isPersonal =
    pathname === "/personal" ||
    (currentProject && currentProject.category === "Personal Project");

  return (
    <>
      <nav className={s.nav}>
        <Link href="/" className={s.logo}>Harry Miller</Link>

        <ul className={s.links}>
          <li>
            <Link href="/business" className={`${s.link} ${isBusiness ? s.active : ""}`}>
              Business
            </Link>
          </li>
          <li>
            <Link href="/personal" className={`${s.link} ${isPersonal ? s.active : ""}`}>
              Personal
            </Link>
          </li>
          <li>
            <Link href="/masters" className={`${s.link} ${pathname === "/masters" ? s.active : ""}`}>
              Masters
            </Link>
          </li>
          <li>
            <a href={ARCHIVE_URL} target="_blank" rel="noopener noreferrer" className={`${s.link} ${s.extLink}`}>
              Archive <span className={s.extArrow}>↗</span>
            </a>
          </li>
        </ul>

        <div className={s.right}>
          <button className={s.iconBtn} onClick={toggle} aria-label="Toggle theme">
            {dark ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="4"/>
                <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
                <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
                <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            )}
          </button>

          <button
            className={`${s.iconBtn} ${s.hamburger}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className={s.dropdown}>
          <Link href="/business" className={s.mobileItem} onClick={() => setOpen(false)}>
            Business <span className={s.mobileArrow}>→</span>
          </Link>
          <Link href="/personal" className={s.mobileItem} onClick={() => setOpen(false)}>
            Personal <span className={s.mobileArrow}>→</span>
          </Link>
          <Link href="/masters" className={s.mobileItem} onClick={() => setOpen(false)}>
            Masters <span className={s.mobileArrow}>→</span>
          </Link>
          <a
            href={ARCHIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={s.mobileItem}
            onClick={() => setOpen(false)}
          >
            Archive <span className={s.mobileArrow}>↗</span>
          </a>
        </div>
      )}
    </>
  );
}
