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
              <span className="contact-action-icon" aria-hidden="true">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                  <path d="M7.2 3.5 9.6 8l-2.1 1.7c1.1 2.6 3.2 4.7 5.8 5.8l1.7-2.1 4.5 2.4-.7 3.1c-.2.9-1 1.6-2 1.6C9.5 20.5 3.5 14.5 3.5 7.2c0-1 .7-1.8 1.6-2l2.1-.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
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
