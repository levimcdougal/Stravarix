import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const services = [
  {
    num: '01',
    icon: '✦',
    title: 'Web Design',
    desc: 'Every website we build is custom-made for your business, not a template, not a drag-and-drop builder. We design around your brand, your customers, and your goals so your site actually works for you.',
    features: ['Custom Design', 'Mobile-Ready', 'Designed to Last', 'Built to Convert'],
  },
  {
    num: '02',
    icon: '⬡',
    title: 'Development',
    desc: "Launching is just the beginning. We refine, tweak, and improve your site until it's exactly right, fixing issues, adding features, and making sure everything runs perfectly as your business evolves.",
    features: ['Ongoing Edits', 'Feature Updates', 'Bug Fixes', 'Performance Tuning'],
  },
  {
    num: '03',
    icon: '◈',
    title: 'Growth Strategy',
    desc: 'Getting found online is how businesses grow. We run targeted Google, Facebook, and Instagram ad campaigns that put your business in front of the right people and turn views into real customers.',
    features: ['Google Ads', 'Facebook & Instagram Ads', 'Google Business Profile', 'Campaign Optimization'],
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="services" ref={sectionRef}>
      <div className="section-label">What We Do</div>
      <h2 className="section-title">Built for Results,<br />Designed to Impress</h2>
      <p className="section-sub">
        End-to-end digital solutions that take your brand from invisible to unstoppable.
      </p>

      <div className="services-grid">
        {services.map((s) => (
          <div key={s.num} className="service-card">
            <div className="service-num">{s.num}</div>
            <div className="service-icon">{s.icon}</div>
            <div className="service-title">{s.title}</div>
            <p className="service-desc">{s.desc}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {s.features.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--blue)', fontSize: 10 }}>▸</span> {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="service-link">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
