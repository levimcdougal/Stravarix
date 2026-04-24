import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function ContactPage() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const lineRef = useRef(null)
  const textRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    gsap.set(lineRef.current, { height: 0 })
    gsap.set(contentRef.current, { opacity: 1 })

    const tl = gsap.timeline()

    // 1. Black line draws down the center
    tl.to(lineRef.current, {
      height: '100vh',
      duration: 1,
      ease: 'power2.inOut',
    })
    // 2. Fade "Ready To Create?" before panels open
    .to(textRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'none',
    })
    // 3. Both panels slide away — left goes left, right goes right
    //    revealing the contact page from the center outward
    .to(leftRef.current, {
      xPercent: -100,
      duration: 0.85,
      ease: 'power3.inOut',
    })
    .to(rightRef.current, {
      xPercent: 100,
      duration: 0.85,
      ease: 'power3.inOut',
    }, '<')
    .to(lineRef.current, {
      opacity: 0,
      duration: 0.2,
    }, '<')
    .call(() => {
      if (leftRef.current)  leftRef.current.style.display = 'none'
      if (rightRef.current) rightRef.current.style.display = 'none'
      if (lineRef.current)  lineRef.current.style.display = 'none'
    })
  }, [])

  return (
    <>
      {/* Left curtain panel */}
      <div ref={leftRef} className="cp-panel cp-panel-left" />

      {/* Right curtain panel */}
      <div ref={rightRef} className="cp-panel cp-panel-right" />

      {/* Black line down the center */}
      <div ref={lineRef} className="cp-line" />

      {/* "Ready To Create?" text over both panels */}
      <div ref={textRef} className="cp-intro-text">Ready To Create?</div>

      {/* Contact content — always underneath */}
      <div ref={contentRef} className="cp-page">

        <section className="cp-hero">
          <div className="section-label">Get In Touch</div>
          <h1 className="cp-title">Let's Build<br />
            <span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Something Great
            </span>
          </h1>
          <p className="cp-sub">
            Ready to grow your digital presence? Reach out and we'll get back to you fast.
          </p>
        </section>

        <section className="cp-info-section">
          <div className="cp-info-grid">

            <div className="cp-details">
              <h2 className="cp-details-title">Contact Info</h2>

              <div className="cp-detail-item">
                <div className="cp-detail-label">Email</div>
                <a href="mailto:stravarix@gmail.com" className="cp-detail-value">stravarix@gmail.com</a>
              </div>

              <div className="cp-detail-item">
                <div className="cp-detail-label">Phone</div>
                <a href="tel:+18013853246" className="cp-detail-value">+1 (801) 385-3246</a>
              </div>

<div className="cp-detail-item">
                <div className="cp-detail-label">Hours</div>
                <div className="cp-detail-value">Mon – Fri, 9am – 6pm</div>
              </div>
            </div>

            <form className="cp-form" onSubmit={e => e.preventDefault()}>
              <h2 className="cp-details-title">Send a Message</h2>

              <div className="cp-field-row">
                <div className="cp-field">
                  <label className="cp-label">Name</label>
                  <input className="cp-input" type="text" placeholder="Your name" />
                </div>
                <div className="cp-field">
                  <label className="cp-label">Email</label>
                  <input className="cp-input" type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className="cp-field">
                <label className="cp-label">What do you need?</label>
                <input className="cp-input" type="text" placeholder="Website, ads, Google profile..." />
              </div>

              <div className="cp-field">
                <label className="cp-label">Message</label>
                <textarea className="cp-input cp-textarea" placeholder="Tell us about your business..." rows={5} />
              </div>

              <button type="submit" className="cp-submit">Send Message →</button>
            </form>

          </div>
        </section>

      </div>
    </>
  )
}
