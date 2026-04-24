import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// All paths live in a 1440 × 900 viewBox.
// LEFT side:  x stays between -60 and 160  (clear of content)
// RIGHT side: x stays between 1280 and 1500 (clear of content)
// Each vein grows in (dashoffset → 0) then fades out (opacity → 0)

const VEINS = [
  // ── LEFT SIDE ──────────────────────────────────────────────────────────────
  // Main left trunk — flows from top-left down the left edge
  { d: 'M -40,120 C 65,205 95,355 78,485 C 61,615 18,725 4,875', w: 1.3, op: 0.65, scrub: 1.6, fadeStart: '60% top', color: '#60a5fa' },
  // Upper-left branch (off main trunk ~y=350)
  { d: 'M 78,360 C 32,408 -12,468 -32,548 C -48,608 -52,668 -46,738', w: 0.7, op: 0.45, scrub: 2.2, fadeStart: '62% top', color: '#3b82f6' },
  // Lower-left branch (~y=650)
  { d: 'M 28,650 C -8,705 -32,768 -46,858', w: 0.55, op: 0.35, scrub: 2.8, fadeStart: '65% top', color: '#3b82f6' },
  // Left edge accent — slim vertical trace
  { d: 'M 125,-55 C 110,105 96,228 84,368 C 72,508 62,628 52,790', w: 0.5, op: 0.28, scrub: 3.2, fadeStart: '68% top', color: '#2563eb' },
  // Left hairline furthest from content
  { d: 'M -50,260 C -40,360 -30,470 -22,590 C -14,710 -8,800 -5,910', w: 0.4, op: 0.2, scrub: 4, fadeStart: '70% top', color: '#1d4ed8' },

  // ── RIGHT SIDE ─────────────────────────────────────────────────────────────
  // Main right trunk — mirror of left
  { d: 'M 1480,120 C 1375,205 1345,355 1362,485 C 1379,615 1422,725 1436,875', w: 1.3, op: 0.65, scrub: 1.6, fadeStart: '60% top', color: '#60a5fa' },
  // Upper-right branch
  { d: 'M 1362,360 C 1408,408 1452,468 1472,548 C 1488,608 1492,668 1486,738', w: 0.7, op: 0.45, scrub: 2.2, fadeStart: '62% top', color: '#3b82f6' },
  // Lower-right branch
  { d: 'M 1412,650 C 1448,705 1472,768 1486,858', w: 0.55, op: 0.35, scrub: 2.8, fadeStart: '65% top', color: '#3b82f6' },
  // Right edge accent
  { d: 'M 1315,-55 C 1330,105 1344,228 1356,368 C 1368,508 1378,628 1388,790', w: 0.5, op: 0.28, scrub: 3.2, fadeStart: '68% top', color: '#2563eb' },
  // Right hairline
  { d: 'M 1490,260 C 1480,360 1470,470 1462,590 C 1454,710 1448,800 1445,910', w: 0.4, op: 0.2, scrub: 4, fadeStart: '70% top', color: '#1d4ed8' },
]

export default function Veins() {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const paths = svg.querySelectorAll('path[data-vein]')
    const triggers = []

    paths.forEach((path, i) => {
      const v = VEINS[i]
      const length = path.getTotalLength()

      // Start fully hidden
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: v.op,
      })

      // GROW: draw path in as user scrolls down
      const growTrigger = ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: '72% bottom',
        scrub: v.scrub,
        animation: gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          paused: true,
        }),
      })

      // FADE: disappear as user reaches lower sections
      const fadeTrigger = ScrollTrigger.create({
        trigger: document.body,
        start: v.fadeStart,
        end: 'bottom bottom',
        scrub: 1.5,
        animation: gsap.to(path, {
          opacity: 0,
          ease: 'power1.in',
          paused: true,
        }),
      })

      triggers.push(growTrigger, fadeTrigger)
    })

    return () => triggers.forEach((t) => t.kill())
  }, [])

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 3,
        overflow: 'visible',
        mixBlendMode: 'screen',
      }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="vein-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blurBig" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blurTight" />
          <feMerge>
            <feMergeNode in="blurBig" />
            <feMergeNode in="blurTight" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {VEINS.map((v, i) => (
        <path
          key={i}
          data-vein
          d={v.d}
          stroke={v.color}
          strokeWidth={v.w}
          strokeLinecap="round"
          fill="none"
          filter="url(#vein-glow)"
        />
      ))}
    </svg>
  )
}
