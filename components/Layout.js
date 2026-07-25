import Link from "next/link";
import Nav from "./Nav";
import s from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={s.root}>
      <Nav />
      <main>{children}</main>
      <footer className={s.footer}>
        <span>© 2026 Harry Miller</span>
        <a href="mailto:harrytmiller42@gmail.com" className={s.footerLink}>harrytmiller42@gmail.com</a>
        <Link href="/terms" className={s.footerLink}>Terms</Link>
        <span>London, UK</span>
      </footer>
    </div>
  );
}
