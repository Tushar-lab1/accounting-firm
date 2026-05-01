import styles from './Pricing.module.css'

const PLANS = [
  {
    icon: '◈',
    service: 'GST Filing',
    note: 'Starting from',
    price: '₹1,000',
    asterisk: true,
    desc: 'Final fees may vary depending on data volume and transaction complexity.',
    highlight: true,
  },
  {
    icon: '⬟',
    service: 'Income Tax Filing',
    note: 'Starting from',
    price: '₹500',
    asterisk: true,
    desc: 'Fees may vary based on income sources and documentation requirements.',
    highlight: false,
  },
  {
    icon: '◇',
    service: 'PTEC / PTRC Filing',
    note: 'Per filing',
    price: '₹500',
    asterisk: false,
    desc: 'Fixed pricing per registration or return filing cycle. No hidden charges.',
    highlight: false,
  },
  {
    icon: '○',
    service: 'GST Refund Services',
    note: 'Starting from',
    price: '₹2,000',
    asterisk: true,
    desc: 'Charges depend on nature, amount of refund, and documentation involved.',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className="container">

        <div className={styles.header}>
          <span className="section-label">Transparent Fees</span>
          <h2 className="section-title">
            Our <em>Pricing</em>
          </h2>
          <div className="divider" />
          <p className={styles.sub}>
            We offer flexible and transparent pricing based on the complexity and volume of your data.
            All fees listed are indicative — your Compliance Executive will provide an exact quote.
          </p>
        </div>

        <div className={styles.cards}>
          {PLANS.map(p => (
            <div
              key={p.service}
              className={`${styles.card} ${p.highlight ? styles.cardHighlight : ''}`}
            >
              {p.highlight && <div className={styles.badge}>Most Popular</div>}

              <span className={styles.icon}>{p.icon}</span>
              <h3 className={styles.service}>{p.service}</h3>

              <div className={styles.priceBlock}>
                <span className={styles.note}>{p.note}</span>
                <span className={styles.price}>
                  {p.price}{p.asterisk && <sup>*</sup>}
                </span>
              </div>

              <p className={styles.desc}>{p.desc}</p>

              <a
                href="#contact"
                className={p.highlight ? 'btn-primary' : 'btn-outline'}
                style={{ alignSelf: 'flex-start' }}
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>

        <p className={styles.disclaimer}>
          * All prices are indicative and may vary based on specific client requirements, data volume,
          and documentation complexity. Contact us for a personalised quote.
        </p>
      </div>
    </section>
  )
}
