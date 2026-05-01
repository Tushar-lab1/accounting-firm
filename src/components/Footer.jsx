import styles from "./Footer.module.css";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const SERVICES_LIST = [
  "ITR Filing",
  "MCA Returns Filing",
  "GST Filings",
  "GST Refunds",
  "TDS Returns",
  "PTEC / PTRC",
  "DIN KYC",
  "Accounting",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.brandRow}>
            <span className={styles.mark}>⬡</span>
            <span className={styles.name}>
              <strong>Compliance</strong> Executive
            </span>
          </div>
          <p className={styles.tagline}>
            Leading the Future of Finance —<br />
            One Insightful Solution at a Time.
          </p>
          <a
            href="mailto:compliancebajajassociates@gmail.com"
            className={styles.email}
          >
            compliancebajajassociates@gmail.com
          </a>
        </div>

        {/* Navigation */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.colList}>
            {NAV.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Our Services</h4>
          <ul className={styles.colList}>
            {SERVICES_LIST.map((s) => (
              <li key={s}>
                <a href="#services">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA block */}
        <div className={styles.cta}>
          <h4 className={styles.ctaTitle}>Ready to Get Compliant?</h4>
          <p className={styles.ctaBody}>
            Reach out today for a no-obligation consultation on your compliance
            needs.
          </p>
          <a href="#contact" className="btn-primary">
            Get Started &rarr;
          </a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>
          &copy; {year} Compliance Executive. All rights reserved.
        </p>
        <p className={styles.disclaimer}>
          Indicative pricing only. Fees may vary based on client-specific
          requirements.
        </p>
      </div>
    </footer>
  );
}
