import styles from "./Hero.module.css";

const STATS = [
  { num: "100+", label: "Clients Served" },
  { num: "2", label: "Years Experience" },
  { num: "100%", label: "Compliance Rate" },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.bgMesh} aria-hidden />
      <div className={styles.bgLines} aria-hidden />
      <div className={styles.bgGlow} aria-hidden />

      <div className={`container ${styles.content}`}>
        <div className={`${styles.badge} fade-up`}>
          <span className={styles.dot} />
          Trusted Compliance Partner — India
        </div>

        <h1 className={`${styles.headline} fade-up d1`}>
          Leading the Future
          <br />
          <em>of Finance</em>
        </h1>

        <p className={`${styles.tagline} fade-up d2`}>
          — One Insightful Solution at a Time
        </p>

        <p className={`${styles.desc} fade-up d3`}>
          With a commitment to precision, compliance, and strategic growth, our
          firm delivers expert accounting, returns filing, and advisory services
          with clarity and trust at the core. Backed by extensive experience in
          taxation, GST, TDS &amp; regulatory filings, and financial consulting,
          we simplify complexities and add a human touch to every engagement.
        </p>

        <div className={`${styles.actions} fade-up d4`}>
          <a href="#services" className="btn-primary">
            Explore Services &rarr;
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>

        <div className={`${styles.stats} fade-up d5`}>
          {STATS.map((s) => (
            <div className={styles.stat} key={s.label}>
              <strong>{s.num}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* decorative vertical line */}
      {/* <div className={styles.scrollHint} aria-hidden>
        <span>Scroll</span>
        <div className={styles.line} />
      </div> */}
    </section>
  );
}
