import { useState } from "react";
import styles from "./Contact.module.css";

const FIRM_EMAIL = "callsignspin52@gmail.com";

const SERVICE_OPTIONS = [
  "ITR Filing",
  "MCA Returns Filing",
  "GST Filing",
  "GST Refund Services",
  "Accounting",
  "GST Annual Return",
  "DIN KYC",
  "PTEC / PTRC Filing",
  "TDS Returns",
  "Other / General Enquiry",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const set = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Enquiry: ${form.service || "General"} — ${form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService Required: ${form.service}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${FIRM_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={`container ${styles.inner}`}>
        {/* Left — info */}
        <div className={styles.info}>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title" style={{ color: "var(--white)" }}>
            Let's Talk <em>Compliance</em>
          </h2>
          <div className="divider" />
          <p className={styles.infoBody}>
            Whether you need help with a single filing or ongoing compliance
            support, we're here to help. Fill in the form and we'll get back to
            you promptly — or reach us directly.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>✉</span>
              <div>
                <span className={styles.detailLabel}>Email Us</span>
                <a href={`mailto:${FIRM_EMAIL}`} className={styles.detailValue}>
                  {FIRM_EMAIL}
                </a>
              </div>
            </div>

            <div className={styles.detail}>
              <span className={styles.detailIcon}>◎</span>
              <div>
                <span className={styles.detailLabel}>Designation</span>
                <span className={styles.detailValue}>Compliance Executive</span>
              </div>
            </div>

            <div className={styles.detail}>
              <span className={styles.detailIcon}>⏱</span>
              <div>
                <span className={styles.detailLabel}>Response Time</span>
                <span className={styles.detailValue}>
                  Within 24 business hours
                </span>
              </div>
            </div>
          </div>

          <div className={styles.servicesQuick}>
            <p className={styles.servicesQuickLabel}>We handle:</p>
            <div className={styles.servicesTags}>
              {[
                "ITR",
                "GST",
                "TDS",
                "MCA",
                "PTEC/PTRC",
                "Accounting",
                "GST Refunds",
              ].map((t) => (
                <span className={styles.serviceTag} key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className={styles.formWrap}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <h3 className={styles.formTitle}>Send us a Message</h3>
            <p className={styles.formNote}>
              Submitting this form will open your email client with a pre-filled
              message.
            </p>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">
                  Full Name *
                </label>
                <input
                  id="name"
                  className={styles.input}
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={set("name")}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  className={styles.input}
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set("email")}
                  required
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  className={styles.input}
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={set("phone")}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="service">
                  Service Required
                </label>
                <select
                  id="service"
                  className={styles.select}
                  value={form.service}
                  onChange={set("service")}
                >
                  <option value="">Select a service…</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                className={styles.textarea}
                rows={5}
                placeholder="Briefly describe your requirement or question…"
                value={form.message}
                onChange={set("message")}
                required
              />
            </div>

            <button type="submit" className={`btn-primary ${styles.submit}`}>
              Send via Email &rarr;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
