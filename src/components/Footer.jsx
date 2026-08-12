export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <a href="/" className="nav-logo" style={{ display: 'block', marginBottom: 4 }}>
            STRAVA<span>RIX</span>
          </a>
          <p className="footer-brand-desc">
            Premium website building agency. We craft digital experiences that convert visitors into customers and grow businesses online.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            {['Website Plan', 'Hosting & Domain', 'Google Business Profile'].map((l) => (
              <li key={l}><a href="/services">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li><a href="mailto:stravarix@gmail.com">stravarix@gmail.com</a></li>
            <li><a href="tel:+18013853246">+1 (801) 385-3246</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {year} Stravarix. All rights reserved. <a href="/legal" className="footer-legal-link">Privacy Policy & Terms</a>
        </p>

      </div>
    </footer>
  )
}
