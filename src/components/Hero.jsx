import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px), (prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })

      tl.to('.hero-line-inner', {
        y: '0%',
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
      })
        .to('.hero-sub', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.4')
        .to('.hero-actions', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.5')
        .to('.hero-scroll', {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        }, '-=0.4')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={heroRef} id="home">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="hero-content">
        <div className="hero-tag">
          <span className="hero-tag-dot" />
          Websites for service businesses
        </div>

        <h1 className="hero-headline">
          <span className="hero-line">
            <span className="hero-line-inner">Your Business</span>
          </span>
          <span className="hero-line gradient">
            <span className="hero-line-inner">Online.</span>
          </span>
          <span className="hero-line">
            <span className="hero-line-inner">Made Simple.</span>
          </span>
        </h1>

        <p className="hero-sub" style={{ transform: 'translateY(20px)' }}>
          A professional website, domain name, hosting, and help setting up and managing
          your Google Business Profile—all for $15/month.
        </p>

        <div className="hero-actions" style={{ transform: 'translateY(20px)' }}>
          <a href="#contact" className="btn-primary">
            Get Started for $15/mo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#works" className="btn-secondary">
            View Our Work
          </a>
        </div>

        <div className="hero-offer" aria-label="$15 monthly website plan includes">
          <strong><span>$15</span>/month</strong>
          <div>
            <span>Website</span>
            <span>Domain</span>
            <span>Hosting</span>
            <span>Google profile help</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        Scroll to explore
      </div>
    </section>
  )
}
