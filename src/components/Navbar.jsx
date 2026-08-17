import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { label: 'Home',     to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Contact',  to: '/contact' },
  ]

  const handleNavClick = () => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="nav-logo" onClick={handleNavClick}>
          STRAVA<span>RIX</span> WEB
        </Link>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={handleNavClick}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="nav-cta nav-cta-desktop" onClick={handleNavClick}>
          Start a Project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div id="mobile-navigation" className={`nav-mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={handleNavClick}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="nav-cta" onClick={handleNavClick}>
          Start a Project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </>
  )
}
