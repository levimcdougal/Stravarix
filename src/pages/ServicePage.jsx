import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const wordPairs = [
  ['WE', 'CREATE'],
  ['WE', 'BUILD'],
  ['WE', 'DESIGN'],
]
const numLines = 24

const getDirection = (i) => i % 3 === 1 ? 'sp-right' : 'sp-left'

// Each word strictly alternates: white → blue → white → blue
function LineContent({ pair }) {
  return Array(12).fill(null).map((_, j) => (
    <span key={j}>
      <span style={{ color: '#ffffff' }}>{pair[0]}</span>
      {' '}
      <span style={{ color: '#3b82f6' }}>{pair[1]}</span>
      {'    '}
    </span>
  ))
}

const services = [
  {
    title: 'Websites',
    price: 'Starting at $10/mo',
    desc: 'Custom-built websites that look premium and perform. Fast, mobile-ready, and designed to convert visitors into customers. No drag-and-drop templates, built for you.',
    accent: '#3b82f6',
  },
  {
    title: 'Google Business Profile',
    price: 'Setup & Management',
    desc: 'Get found on Google Maps and local search. We set up, optimize, and manage your Google Business Profile so customers can find you, trust you, and call you.',
    accent: '#10b981',
  },
  {
    title: 'Google Ads',
    price: 'Managed Campaigns',
    desc: 'Show up at the top of Google when people search for what you offer. We build and manage campaigns that bring in real leads, not just clicks.',
    accent: '#f59e0b',
  },
  {
    title: 'Facebook Ads',
    price: 'Managed Campaigns',
    desc: 'Reach your exact audience on Facebook. We handle creative, targeting, and optimization so your budget works harder and your results are measurable.',
    accent: '#3b82f6',
  },
  {
    title: 'Instagram Ads',
    price: 'Managed Campaigns',
    desc: 'Stop the scroll. We create thumb-stopping Instagram ads that build brand awareness and drive action, from story ads to reels and feed placements.',
    accent: '#3b82f6',
  },
  {
    title: 'Full Digital Footprint',
    price: 'Complete Package',
    desc: 'Website, ads, Google presence, all working together. We specialize in building and managing your entire online presence so your business gets found everywhere it matters.',
    accent: '#22d3ee',
  },
]

export default function ServicePage() {
  const overlayRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    gsap.set(contentRef.current, { opacity: 0, y: 20 })

    const tl = gsap.timeline()

    // Zoom the whole overlay toward the viewer
    tl.to(overlayRef.current, {
      scale: 1.55,
      duration: 1.6,
      ease: 'power2.in',
    })
    // Fade out overlay
    .to(overlayRef.current, {
      opacity: 0,
      duration: 0.45,
      ease: 'power1.out',
      onComplete: () => {
        if (overlayRef.current) overlayRef.current.style.display = 'none'
      },
    })
    // Reveal content
    .to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
    })
  }, [])

  return (
    <>
      {/* ── Intro overlay ── */}
      <div ref={overlayRef} className="sp-overlay">
        <div className="sp-lines">
          {Array.from({ length: numLines }, (_, i) => {
            return (
              <div key={i} className="sp-line-wrap" style={{ opacity: Math.min(1, 0.08 + i * 0.042) }}>
                <div
                  className={`sp-line-inner ${getDirection(i)}`}
                  style={{ animationDuration: `${10 + (i % 3) * 3}s` }}
                >
                  <LineContent pair={wordPairs[i % 3]} />
                  <LineContent pair={wordPairs[i % 3]} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Page content ── */}
      <div ref={contentRef} className="sp-page">

        {/* Hero */}
        <section className="sp-hero">
          <div className="section-label">What We Do</div>
          <h1 className="sp-hero-title">
            Your Entire Digital<br />
            <span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Footprint, Handled
            </span>
          </h1>
          <p className="sp-hero-sub">
            We specialize in building and managing your complete online presence, from your website to your ads to your Google listing. Everything working together to get you found, trusted, and chosen.
          </p>
        </section>

        {/* Services */}
        <section className="sp-section">
          <div className="section-label">What We Offer</div>
          <h2 className="sp-section-title">Our Services</h2>
          <div className="sp-grid">
            {services.map((s) => (
              <div key={s.title} className="sp-card">
                <div className="sp-card-price" style={{ color: s.accent }}>{s.price}</div>
                <h3 className="sp-card-title">{s.title}</h3>
                <p className="sp-card-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="sp-cta">
          <h2 className="sp-cta-title">Ready to Grow?</h2>
          <p className="sp-cta-sub">Websites start at just $10/month. Let's build your digital footprint.</p>
          <a href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'var(--gradient)', color: '#fff',
            padding: '16px 36px', borderRadius: 12,
            fontFamily: 'var(--font)', fontWeight: 600, fontSize: 16,
            textDecoration: 'none',
          }}>
            Get Started →
          </a>
        </section>
      </div>
    </>
  )
}
