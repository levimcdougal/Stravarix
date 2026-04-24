import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const projects = [
  {
    title: 'Sparkle Clean Co.',
    tag: 'Cleaning',
    year: '2024',
    accent: '#38bdf8',
    url: 'cleaning.com',
    logoName: 'Cleaning',
    headline: 'A Clean Home, Guaranteed',
    sub: 'Residential & commercial cleaning you can trust.',
    cta: 'Book a Clean',
    photo: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80',
    services: ['House Cleaning', 'Deep Clean', 'Move-Out'],
    phone: '(555) 210-4400',
    template: 'dark',
  },
  {
    title: 'GreenEdge Lawn Care',
    tag: 'Lawn Care',
    year: '2024',
    accent: '#22c55e',
    url: 'lawncare.com',
    logoName: 'Lawn Care',
    headline: 'Your Lawn, Perfected',
    sub: 'Mowing, trimming & seasonal lawn care.',
    cta: 'Get a Free Quote',
    photo: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80',
    services: ['Weekly Mowing', 'Fertilizing', 'Landscaping'],
    phone: '(555) 348-9210',
    stat: '4.9★', statLabel: 'Google Rating',
    template: 'light',
  },
  {
    title: 'Summit Roofing',
    tag: 'Roofing',
    year: '2024',
    accent: '#fb923c',
    url: 'roofing.com',
    logoName: 'Roofing',
    headline: 'Built to Last',
    sub: 'Roof repair & replacement done right.',
    cta: 'Free Inspection',
    photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80',
    services: ['Roof Repair', 'Replacement', 'Storm Damage'],
    stats: [{ n: '20yr', l: 'Warranty' }, { n: '500+', l: 'Roofs' }, { n: 'A+', l: 'Rated' }],
    template: 'bold',
  },
]

const layout = [
  { left: '4%',  width: '27%', height: '72%', rotate: '-1.5deg', z: 1 },
  { left: '36%', width: '28%', height: '86%', rotate:  '0deg',   z: 2 },
  { left: '69%', width: '27%', height: '72%', rotate:  '1.5deg', z: 1 },
]

// Template 1, Dark overlay hero (Cleaning)
function TemplateDark({ p }) {
  return (
    <div className="wbrowser-body wbrowser-body-photo" style={{ backgroundImage: `url(${p.photo})` }}>
      <div className="wmock-overlay" />
      <div className="wmock-nav-real">
        <span className="wmock-logo-real">{p.logoName}</span>
        <div className="wmock-nav-links">
          <span>Home</span><span>Services</span><span>About</span>
          <span style={{ color: p.accent }}>Contact</span>
        </div>
      </div>
      <div className="wmock-hero-content">
        <div className="wmock-tag-pill" style={{ background: `${p.accent}22`, color: p.accent, border: `1px solid ${p.accent}44` }}>
          ✦ {p.tag}
        </div>
        <h3 className="wmock-hero-title">{p.headline}</h3>
        <p className="wmock-hero-sub">{p.sub}</p>
        <div className="wmock-hero-actions">
          <div className="wmock-hero-btn" style={{ background: p.accent, color: '#000' }}>{p.cta}</div>
          <div className="wmock-hero-phone">{p.phone}</div>
        </div>
      </div>
      <div className="wmock-services-strip">
        {p.services.map(s => (
          <div key={s} className="wmock-service-tag" style={{ borderColor: `${p.accent}55` }}>
            <span style={{ color: p.accent }}>✓</span> {s}
          </div>
        ))}
      </div>
    </div>
  )
}

// Template 2, Light split-hero design (Lawn Care)
function TemplateLight({ p }) {
  return (
    <div className="wbrowser-body" style={{ background: '#ffffff', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* Top info bar */}
      <div style={{ background: '#f3f4f6', borderBottom: '1px solid #e5e7eb', padding: '0 12px', height: 20, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 10, flexShrink: 0 }}>
        <span style={{ fontSize: 7, color: '#666', fontFamily: 'var(--font)' }}>📍 Serving your local area</span>
        <span style={{ fontSize: 7, color: p.accent, fontFamily: 'var(--font)', fontWeight: 600 }}>{p.phone}</span>
      </div>

      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', height: 34, borderBottom: '1px solid #e5e7eb', flexShrink: 0 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 800, color: p.accent, letterSpacing: '-0.02em' }}>{p.logoName}</span>
        <div style={{ display: 'flex', gap: 10, fontSize: 7.5, color: '#444', fontFamily: 'var(--font)' }}>
          <span>Home</span><span>Services</span><span>About</span><span>FAQ</span><span>Contact</span>
        </div>
        <div style={{ background: p.accent, color: '#fff', fontSize: 7.5, fontWeight: 700, fontFamily: 'var(--font)', padding: '4px 10px', borderRadius: 5 }}>{p.cta} →</div>
      </div>

      {/* Split hero */}
      <div style={{ display: 'flex', flex: 'none', padding: '12px 12px 8px', gap: 12 }}>
        {/* Left: headline */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontSize: 7.5, color: '#888', fontFamily: 'var(--font)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Lawn & Landscaping Experts</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(13px, 1.3vw, 20px)', fontWeight: 800, color: '#111', margin: 0, lineHeight: 1.15 }}>{p.headline}</h3>
          <p style={{ fontSize: 8, color: '#666', margin: 0, fontFamily: 'var(--font)', lineHeight: 1.5 }}>From lush lawns to clean edges, we handle it all so you don't have to.</p>
          <div style={{ display: 'flex', gap: 6, marginTop: 2 }}>
            <div style={{ background: p.accent, color: '#fff', fontSize: 8, fontWeight: 700, fontFamily: 'var(--font)', padding: '5px 12px', borderRadius: 5 }}>{p.cta} →</div>
            <div style={{ border: `1px solid ${p.accent}`, color: p.accent, fontSize: 8, fontFamily: 'var(--font)', padding: '5px 10px', borderRadius: 5 }}>Our Work</div>
          </div>
        </div>
        {/* Right: trust signals */}
        <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: 5 }}>
          <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 6, padding: '6px 8px', fontSize: 8, color: '#444', fontFamily: 'var(--font)', lineHeight: 1.4 }}>
            We bring your vision to life with precision, creativity, and care.
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            <div style={{ flex: 1, background: `${p.accent}15`, border: `1px solid ${p.accent}33`, borderRadius: 5, padding: '4px 6px', textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: p.accent, fontFamily: 'var(--font-display)' }}>4.9★</div>
              <div style={{ fontSize: 6.5, color: '#888', fontFamily: 'var(--font)' }}>Google</div>
            </div>
            <div style={{ flex: 1, background: '#f3f4f6', borderRadius: 5, padding: '4px 6px', textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: '#111', fontFamily: 'var(--font-display)' }}>10yr</div>
              <div style={{ fontSize: 6.5, color: '#888', fontFamily: 'var(--font)' }}>Exp.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo grid */}
      <div style={{ display: 'flex', gap: 6, padding: '0 12px', flex: 1, minHeight: 0 }}>
        <div style={{ flex: 1.4, borderRadius: 7, overflow: 'hidden', backgroundImage: `url(${p.photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ flex: 1, borderRadius: 7, overflow: 'hidden', backgroundImage: 'url(https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>

      {/* Quote form strip */}
      <div style={{ background: '#f9fafb', borderTop: '1px solid #e5e7eb', padding: '8px 12px', flexShrink: 0 }}>
        <div style={{ fontSize: 8.5, fontWeight: 700, color: '#111', fontFamily: 'var(--font)', marginBottom: 5, textAlign: 'center' }}>Request a Free Quote</div>
        <div style={{ display: 'flex', gap: 5 }}>
          <div style={{ flex: 1, background: '#fff', border: '1px solid #d1d5db', borderRadius: 4, padding: '4px 8px', fontSize: 7.5, color: '#aaa', fontFamily: 'var(--font)' }}>Name</div>
          <div style={{ flex: 1, background: '#fff', border: '1px solid #d1d5db', borderRadius: 4, padding: '4px 8px', fontSize: 7.5, color: '#aaa', fontFamily: 'var(--font)' }}>Phone</div>
          <div style={{ background: p.accent, color: '#fff', fontSize: 7.5, fontWeight: 700, fontFamily: 'var(--font)', padding: '4px 10px', borderRadius: 4, whiteSpace: 'nowrap' }}>Submit →</div>
        </div>
      </div>
    </div>
  )
}

// Template 3, Light editorial / bold typography (Roofing)
function TemplateBold({ p }) {
  return (
    <div className="wbrowser-body" style={{ background: '#f8f8f6', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', height: 32, borderBottom: '1px solid #e0e0e0', flexShrink: 0, background: '#fff' }}>
        <div style={{ display: 'flex', gap: 8, fontSize: 7, color: '#555', fontFamily: 'var(--font)' }}>
          <span>Home</span><span>Services</span><span>Projects</span>
        </div>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 900, color: '#111', letterSpacing: '0.04em' }}>{p.logoName}</span>
        <div style={{ background: p.accent, color: '#fff', fontSize: 7, fontWeight: 700, fontFamily: 'var(--font)', padding: '4px 10px', borderRadius: 3 }}>{p.cta}</div>
      </div>

      {/* Big headline + sub row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '10px 12px 6px', flexShrink: 0 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(15px, 1.6vw, 24px)', fontWeight: 900, color: '#111', margin: 0, lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: '55%' }}>
          Roofing<br />Done Right.
        </h3>
        <div style={{ maxWidth: '40%', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <p style={{ fontSize: 7.5, color: '#666', margin: 0, fontFamily: 'var(--font)', lineHeight: 1.5 }}>Expert roof repair, replacement & storm damage, backed by a 20-year warranty.</p>
          <div style={{ display: 'flex', gap: 5 }}>
            <div style={{ background: p.accent, color: '#fff', fontSize: 7.5, fontWeight: 700, fontFamily: 'var(--font)', padding: '4px 10px', borderRadius: 3 }}>{p.cta} →</div>
            <div style={{ border: '1px solid #ccc', color: '#444', fontSize: 7.5, fontFamily: 'var(--font)', padding: '4px 8px', borderRadius: 3 }}>Our Work</div>
          </div>
        </div>
      </div>

      {/* Hero photo */}
      <div style={{ margin: '0 12px', borderRadius: 6, overflow: 'hidden', flex: 1, minHeight: 0, position: 'relative' }}>
        <div style={{ width: '100%', height: '100%', backgroundImage: `url(${p.photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>

      {/* Scrolling marquee strip */}
      <div style={{ background: '#111', padding: '6px 0', display: 'flex', alignItems: 'center', gap: 0, overflow: 'hidden', flexShrink: 0 }}>
        {['ROOF REPAIR', '✳', 'REPLACEMENT', '✳', 'STORM DAMAGE', '✳', 'FREE INSPECTION', '✳', 'ROOF REPAIR', '✳', 'REPLACEMENT', '✳'].map((t, i) => (
          <span key={i} style={{ fontSize: 8, fontWeight: 700, fontFamily: 'var(--font-display)', color: t === '✳' ? p.accent : '#fff', letterSpacing: '0.08em', whiteSpace: 'nowrap', padding: '0 8px', flexShrink: 0 }}>{t}</span>
        ))}
      </div>

      {/* Stats row */}
      <div style={{ display: 'flex', background: '#fff', borderTop: '1px solid #e5e5e5', flexShrink: 0 }}>
        {p.stats.map((s, i) => (
          <div key={i} style={{ flex: 1, padding: '7px 0', textAlign: 'center', borderRight: i < p.stats.length - 1 ? '1px solid #e5e5e5' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 900, color: p.accent }}>{s.n}</div>
            <div style={{ fontSize: 6.5, color: '#999', fontFamily: 'var(--font)', letterSpacing: '0.03em', textTransform: 'uppercase' }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Works() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const from = [
    { x: -120, y: 60 },
    { x: 0,    y: 120 },
    { x: 120,  y: 60 },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.filter(Boolean).forEach((card, i) => {
        gsap.from(card, {
          x: from[i].x,
          y: from[i].y,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="works" ref={sectionRef}>
      <div className="works-header">
        <div>
          <div className="section-label">Your Next Website</div>
          <h2 className="section-title">It's Time for a Website</h2>
        </div>
      </div>

      <div className="works-display">
        {projects.map((p, i) => (
          <div
            key={i}
            ref={el => (cardsRef.current[i] = el)}
            className="works-card-outer"
            style={{
              left:   layout[i].left,
              width:  layout[i].width,
              height: layout[i].height,
              zIndex: layout[i].z,
              '--rotate': layout[i].rotate,
            }}
          >
            <div className="works-browser">
              <div className="wbrowser-chrome">
                <div className="wbrowser-dots">
                  <span className="wdot wdot-r" />
                  <span className="wdot wdot-y" />
                  <span className="wdot wdot-g" />
                </div>
                <div className="wbrowser-urlbar">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  {p.url}
                </div>
              </div>

              {p.template === 'dark'  && <TemplateDark p={p} />}
              {p.template === 'light' && <TemplateLight p={p} />}
              {p.template === 'bold'  && <TemplateBold p={p} />}

              <div className="wbrowser-info">
                <span className="wbrowser-info-tag" style={{ color: p.accent }}>{p.year}</span>
                <span className="wbrowser-info-title">{p.title}</span>
                <span className="wbrowser-info-arrow">↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="works-cta">
        <a href="#contact" className="btn-secondary">Start Your Project →</a>
      </div>
    </section>
  )
}
