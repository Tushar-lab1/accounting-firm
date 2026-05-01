import styles from './About.module.css'

const PILLARS = [
  {
    icon: '◈',
    title: 'Precision',
    desc: 'Meticulous attention to every figure, filing, and deadline — errors have no place in our workflow.',
  },
  {
    icon: '⬟',
    title: 'Compliance',
    desc: 'Staying ahead of evolving regulations so your business never faces surprise penalties or audits.',
  },
  {
    icon: '◇',
    title: 'Strategy',
    desc: 'Beyond filing — we advise on growth, tax optimisation, and financial structure for the long game.',
  },
  {
    icon: '○',
    title: 'Trust',
    desc: 'Confidentiality, transparency, and accountability form the bedrock of every client relationship.',
  },
]

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.inner}`}>

        {/* Left */}
        <div className={styles.left}>
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">
            A Firm Built on<br /><em>Expertise &amp; Trust</em>
          </h2>
          <div className="divider" />
          <p className={styles.body}>
            We are a dedicated compliance and advisory practice specialising in the full spectrum of
            Indian taxation and regulatory requirements. Our Compliance Executives bring deep domain
            knowledge across GST, income tax, TDS, MCA filings, and corporate advisory — serving
            individuals, MSMEs, exporters, and corporates alike.
          </p>
          <p className={styles.body}>
            We believe financial compliance should never be a burden. We take the complexity off your
            plate, giving you the clarity to focus on what you do best — running your business.
          </p>
          <a href="#contact" className="btn-primary" style={{ marginTop: '1.5rem' }}>
            Start a Conversation &rarr;
          </a>
        </div>

        {/* Right */}
        <div className={styles.right}>
          {PILLARS.map(p => (
            <div className={styles.pillar} key={p.title}>
              <span className={styles.pillarIcon}>{p.icon}</span>
              <div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
