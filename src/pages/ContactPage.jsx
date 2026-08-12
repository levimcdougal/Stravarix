import { useEffect } from 'react'

const planItems = [
  'Professional website',
  'Domain name included',
  'Fast, reliable hosting',
  'Mobile-friendly design',
  'Google Business Profile help',
  'Ongoing support',
]

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="section-label">Get In Touch</div>
        <h1>Let’s put your<br /><span>business online.</span></h1>
        <p>
          Tell us a little about your business and we’ll help you get started.
          No confusing process, no pressure, and no hidden fees.
        </p>
      </section>

      <section className="contact-main">
        <div className="contact-actions-panel">
          <p className="contact-eyebrow">Choose what works for you</p>
          <h2>Talk directly with us.</h2>
          <p className="contact-intro">
            You’ll speak with a real person who can answer questions about your website and the $15 monthly plan.
          </p>

          <div className="contact-action-list">
            <a
              className="contact-action-card"
              href="mailto:stravarix@gmail.com?subject=I%27m%20interested%20in%20the%20%2415%2Fmonth%20website%20plan"
            >
              <span className="contact-action-icon">@</span>
              <span>
                <small>Email us</small>
                <strong>stravarix@gmail.com</strong>
              </span>
              <b aria-hidden="true">→</b>
            </a>

            <a className="contact-action-card" href="tel:+18013853246">
              <span className="contact-action-icon">☎</span>
              <span>
                <small>Call or text</small>
                <strong>(801) 385-3246</strong>
              </span>
              <b aria-hidden="true">→</b>
            </a>
          </div>

          <p className="contact-response"><span /> We typically respond within 24 hours.</p>
        </div>

        <aside className="contact-plan-card">
          <div className="contact-plan-top">
            <p>The complete website plan</p>
            <div><strong>$15</strong><span>/month</span></div>
          </div>
          <ul>
            {planItems.map((item) => (
              <li key={item}><span>✓</span>{item}</li>
            ))}
          </ul>
          <a href="mailto:stravarix@gmail.com?subject=Let%27s%20start%20my%20%2415%2Fmonth%20website" className="contact-plan-cta">
            Start my website →
          </a>
          <small>Simple monthly pricing. Cancel anytime.</small>
        </aside>
      </section>
    </main>
  )
}
