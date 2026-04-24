import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function CTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content > *', {
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="cta-section" id="contact" ref={sectionRef}>
      <div className="cta-bg">
        <div className="cta-bg-orb cta-bg-orb-1" />
        <div className="cta-bg-orb cta-bg-orb-2" />
      </div>

      <div className="cta-content">
        <div className="cta-badge">
          <span style={{ fontSize: 8 }}>●</span>
          Currently accepting new clients
        </div>

        <h2 className="cta-title">
          Ready to Build<br />Something Extraordinary?
        </h2>

        <p className="cta-sub">
          Drop your email and we'll reach out within 24 hours to discuss your project, no pressure, no fluff.
        </p>

        <form
          className="cta-form"
          onSubmit={(e) => {
            e.preventDefault()
            alert("Thanks! We'll be in touch within 24 hours.")
          }}
        >
          <input
            type="email"
            className="cta-input"
            placeholder="your@email.com"
            required
          />
          <button type="submit" className="cta-submit">
            Let's Talk →
          </button>
        </form>

        <p style={{ marginTop: 20, fontSize: 12, color: 'var(--text-subtle)' }}>
          No spam. No commitment. Just a conversation.
        </p>
      </div>
    </section>
  )
}
