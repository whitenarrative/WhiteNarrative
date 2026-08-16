import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, site } from '../data/content.js'
import useTheme from '../hooks/useTheme.js'
import Icon from './Icon.jsx'
import Logo from './Logo.jsx'
import './Navbar.css'

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const [theme, toggleTheme] = useTheme()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return undefined

    const ids = navLinks.filter((l) => l.to.startsWith('/#')).map((l) => l.to.slice(2))
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHash(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [isHome])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const isActive = (to) => {
    if (to === '/') return isHome && !activeHash
    if (to.startsWith('/#')) return isHome && activeHash === to.slice(1)
    return location.pathname === to
  }

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <Logo />

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`} aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav__link ${isActive(link.to) ? 'nav__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="nav__panel-actions">
            <button className="btn btn--ghost" onClick={toggleTheme}>
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
              onClick={() => setOpen(false)}
            >
              <Icon name="whatsapp" size={16} />
              WhatsApp Us
            </a>
            <Link to="/contact" className="btn btn--gold" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </div>
        </nav>

        <div className="nav__actions">
          <button
            className="nav__icon-btn nav__theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} strokeWidth={1.6} />
          </button>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="nav__icon-btn nav__icon-btn--whatsapp"
            aria-label="Chat with us on WhatsApp"
          >
            <Icon name="whatsapp" size={18} strokeWidth={1.6} />
          </a>
          <Link to="/contact" className="nav__cta">
            Contact Us
          </Link>
        </div>

        <button
          className="nav__burger"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} strokeWidth={1.6} />
        </button>
      </div>
    </header>
  )
}
