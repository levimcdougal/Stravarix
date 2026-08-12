import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function CTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px), (prefers-reduced-motion: reduce)').matches) return

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
          Everything You Need.<br />Just $15 a Month.
        </h2>

        <p className="cta-sub">
          Website, domain name, hosting, and Google Business Profile setup and management support—all in one simple plan.
        </p>

        <div className="cta-contact-actions">
          <a
            href="mailto:stravarix@gmail.com?subject=I%27m%20interested%20in%20the%20%2415%2Fmonth%20website%20plan"
            className="cta-submit"
          >
            Email Us →
          </a>
          <a href="tel:+18013853246" className="cta-call">
            Call (801) 385-3246
          </a>
        </div>

        <p className="cta-response-note">
          No forms or waiting—we'll respond personally.
        </p>
      </div>
    </section>
  )
}
