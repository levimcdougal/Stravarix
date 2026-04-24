import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
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
          Premium Website Agency
        </div>

        <h1 className="hero-headline">
          <span className="hero-line">
            <span className="hero-line-inner">We Build</span>
          </span>
          <span className="hero-line gradient">
            <span className="hero-line-inner">Digital</span>
          </span>
          <span className="hero-line">
            <span className="hero-line-inner">Experiences.</span>
          </span>
        </h1>

        <p className="hero-sub" style={{ transform: 'translateY(20px)' }}>
          Stravarix crafts premium websites for brands ready to dominate their market.
          Fast. Beautiful. Built to convert.
        </p>

        <div className="hero-actions" style={{ transform: 'translateY(20px)' }}>
          <a href="#contact" className="btn-primary">
            Start a Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#works" className="btn-secondary">
            View Our Work
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        Scroll to explore
      </div>
    </section>
  )
}
