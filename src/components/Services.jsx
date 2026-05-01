import { useState } from "react";
import styles from "./Services.module.css";

const SERVICES = [
  {
    code: "01",
    title: "ITR Filing",
    sub: "Income Tax Returns",
    desc: "Accurate and timely filing of individual, business, and corporate income tax returns. We handle all ITR forms — from salaried professionals to complex business entities.",
    tags: ["Individuals", "Business", "Corporate"],
  },
  {
    code: "02",
    title: "MCA Returns Filing",
    sub: "Ministry of Corporate Affairs",
    desc: "End-to-end filing of ROC annual returns, financial statements, and MCA e-forms ensuring your company stays compliant with all MCA deadlines and requirements.",
    tags: ["ROC Filings", "Annual Returns", "e-Forms"],
  },
  {
    code: "03",
    title: "GST Filings",
    sub: "Exports & Imports Level",
    desc: "Comprehensive GST return filing including GSTR-1, GSTR-3B, GSTR-9, and specialised filings for exporters and importers with LUT, RFD forms, and reconciliation.",
    tags: ["GSTR-1", "GSTR-3B", "LUT / RFD"],
  },
  {
    code: "04",
    title: "GST Refunds",
    sub: "Refund Processing",
    desc: "Expert handling of GST refund claims for exporters, inverted duty structures, and excess tax payments — maximum refund recovery with minimal turnaround time.",
    tags: ["Export Refunds", "ITC Refunds", "RFD-01"],
  },
  {
    code: "05",
    title: "Accounting",
    sub: "Books & Financials",
    desc: "Full-service bookkeeping and accounting — from day-to-day ledger management to preparation of P&L, balance sheets, and comprehensive management reports.",
    tags: ["Bookkeeping", "Ledger", "MIS Reports"],
  },
  {
    code: "06",
    title: "GST Annual Return",
    sub: "GSTR-9 & GSTR-9C",
    desc: "Annual GST reconciliation and audit services including GSTR-9 preparation and GSTR-9C certification — ensuring your yearly returns are accurate and audit-proof.",
    tags: ["GSTR-9", "GSTR-9C", "Reconciliation"],
  },
  {
    code: "07",
    title: "DIN KYC",
    sub: "Director KYC",
    desc: "Hassle-free filing of DIR-3 KYC for Directors. We handle the annual KYC process to ensure your DIN remains active and company compliance is fully maintained.",
    tags: ["DIR-3 KYC", "Directors", "MCA"],
  },
  {
    code: "08",
    title: "PTEC / PTRC",
    sub: "Professional Tax",
    desc: "Registration and periodic return filing for Professional Tax Enrollment Certificate (PTEC) and Professional Tax Registration Certificate (PTRC) under PT Act.",
    tags: ["Enrollment", "Registration", "Returns"],
  },
  {
    code: "09",
    title: "TDS Returns",
    sub: "Tax Deducted at Source",
    desc: "Preparation and filing of quarterly TDS returns (Form 24Q, 26Q, 27Q, 27EQ), generation of Form 16/16A, and assistance with TDS reconciliation and corrections.",
    tags: ["26Q / 24Q", "Form 16", "Corrections"],
  },
  // {
  //   code: '10',
  //   title: 'Udhyam Registration',
  //   sub: 'Tax Deducted at Source',
  //   desc: 'Preparation and filing of quarterly TDS returns (Form 24Q, 26Q, 27Q, 27EQ), generation of Form 16/16A, and assistance with TDS reconciliation and corrections.',
  //   tags: ['26Q / 24Q', 'Form 16', 'Corrections'],
  // },
];

export default function Services() {
  const [active, setActive] = useState(null);

  const toggle = (i) => setActive((prev) => (prev === i ? null : i));

  return (
    <section className={styles.services} id="services">
      <div className={`container ${styles.header}`}>
        <span className="section-label">What We Do</span>
        <h2 className="section-title" style={{ color: "var(--white)" }}>
          Our <em>Services</em>
        </h2>
        <div className="divider" />
        <p className={styles.intro}>
          A complete suite of compliance, tax, and accounting services —
          structured to keep your business running smoothly and squarely within
          the law. Click any card to learn more.
        </p>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <div
              key={s.code}
              className={`${styles.card} ${active === i ? styles.cardActive : ""}`}
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggle(i)}
            >
              <div className={styles.cardTop}>
                <span className={styles.code}>{s.code}</span>
                <span
                  className={`${styles.arrow} ${active === i ? styles.arrowActive : ""}`}
                >
                  ↗
                </span>
              </div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.sub}>{s.sub}</p>

              <div
                className={`${styles.body} ${active === i ? styles.bodyOpen : ""}`}
              >
                <p className={styles.desc}>{s.desc}</p>
                <div className={styles.tags}>
                  {s.tags.map((t) => (
                    <span className={styles.tag} key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
