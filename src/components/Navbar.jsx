import { useState } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <a href="#top" className={styles.brand} onClick={close}>
          <span className={styles.logo}>
            <span className={styles.brandMark}>⬡</span>
            <span className={styles.brandName}>
              <strong>Bajaj & Associates</strong>
            </span>
          </span>
          <p className={styles.ce}>Compliance Executive </p>
        </a>

        {/* Desktop links */}
        <ul className={`${styles.links} ${open ? styles.open : ""}`}>
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={styles.link} onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className={styles.ctaBtn} onClick={close}>
              Get Started
            </a>
          </li>
        </ul>

        {/* Burger */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
