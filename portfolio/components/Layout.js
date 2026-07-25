import Nav from "./Nav";
import s from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={s.root}>
      <Nav />
      <main>{children}</main>
      <footer className={s.footer}>
        <span>© 2026 Harry Miller</span>
        <span>London, UK</span>
      </footer>
    </div>
  );
}
