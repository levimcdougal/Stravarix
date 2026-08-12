import { useEffect } from 'react'

export default function LegalPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="cp-page legal-page">
      <section className="cp-hero">
        <div className="section-label">Legal</div>
        <h1 className="cp-title">Privacy Policy &<br />
          <span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Terms & Conditions
          </span>
        </h1>
        <p className="cp-sub">Last updated: June 2026</p>
      </section>

      <section className="cp-info-section legal-content">
        <h2>Privacy Policy</h2>
        <p>
          Stravarix Web LLC ("we", "us", or "our") is committed to protecting your privacy.
        </p>

        <h3>Information We Collect</h3>
        <p>
          We collect your phone number and any information you share with us through SMS conversations.
        </p>

        <h3>How We Use Your Information</h3>
        <p>
          We use your information to communicate with you about our website building services and to build websites for clients who request them.
        </p>

        <h3>SMS Communications</h3>
        <p>
          By responding to our messages, you agree to receive follow-up SMS messages from us. You can opt out at any time by replying "stop" or "no thanks."
        </p>

        <h3>We Do Not Sell Your Information</h3>
        <p>
          We never sell or share your personal information with third parties.
        </p>

        <h3>Contact Us</h3>
        <p>
          <a href="mailto:contact@stravarix.com">contact@stravarix.com</a>
        </p>

        <h2>Terms and Conditions</h2>
        <p>Last updated: June 2026</p>

        <h3>Services</h3>
        <p>
          Stravarix Web LLC provides website design and development services to small businesses.
        </p>

        <h3>SMS Communications</h3>
        <p>
          We may reach out via SMS based on publicly available information. You can opt out at any time.
        </p>

        <h3>Free Preview</h3>
        <p>
          We offer a free website preview with no obligation to purchase.
        </p>

        <h3>Payment</h3>
        <p>
          The website plan is $15/month and includes the website, domain name, hosting, and Google Business Profile setup and management support. You may cancel anytime.
        </p>

        <h3>Contact Us</h3>
        <p>
          <a href="mailto:contact@stravarix.com">contact@stravarix.com</a>
        </p>
      </section>
    </div>
  )
}
