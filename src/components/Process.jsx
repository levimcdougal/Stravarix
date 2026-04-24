import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const steps = [
  {
    num: '01',
    step: 'Step One',
    title: 'Discovery',
    desc: 'You tell us everything about your business, who you are, what you do, and who your customers are. The more we know, the better we can build for you.',
  },
  {
    num: '02',
    step: 'Step Two',
    title: 'Design',
    desc: 'We design your website exactly how you want it. You give us feedback, we make changes, and we keep going until it looks and feels perfect.',
  },
  {
    num: '03',
    step: 'Step Three',
    title: 'Build',
    desc: 'Once the design is approved we build it out fully, every page, every detail, ready to go live.',
  },
  {
    num: '04',
    step: 'Step Four',
    title: 'Launch & Grow',
    desc: 'We launch your site and then help you grow, whether that\'s through Google Ads, social media ads, or getting you found on Google.',
  },
]

export default function Process() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.process-item', {
        scrollTrigger: {
          trigger: '.process-grid',
          start: 'top 75%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="process" ref={sectionRef}>
      <div className="section-label">How We Work</div>
      <h2 className="section-title">Our Process</h2>
      <p className="section-sub">
        A proven four-step system that consistently delivers websites that perform.
      </p>

      <div className="process-grid">
        {steps.map((s) => (
          <div key={s.num} className="process-item">
            <div className="process-item-num">{s.num}</div>
            <div className="process-step-label">{s.step}</div>
            <div className="process-title">{s.title}</div>
            <p className="process-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
