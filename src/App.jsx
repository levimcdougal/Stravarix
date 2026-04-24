import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Veins from './components/Veins'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Works from './components/Works'
import Stats from './components/Stats'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'

gsap.registerPlugin(ScrollTrigger)

function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoRaf: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const tickerFn = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tickerFn)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(tickerFn)
    }
  }, [])

  return (
    <>
      <Veins />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Works />
        <Stats />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<><Navbar /><ServicePage /></>} />
        <Route path="/contact" element={<><Navbar /><ContactPage /></>} />
      </Routes>
    </BrowserRouter>
  )
}
