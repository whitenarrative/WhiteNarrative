import { useEffect, useRef, useState } from 'react'
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
  const menuRef = useRef(null)
  const burgerRef = useRef(null)
  const headerRef = useRef(null)

  const isHome = location.pathname === '/'

  useEffect(() => {
    let frameId = null
    let wasPinned = null

    const updateNavigation = () => {
      frameId = null
      const header = headerRef.current
      if (!header) return

      if (!isHome) {
        const pinned = window.scrollY > 24
        if (pinned !== wasPinned) {
          wasPinned = pinned
          setScrolled(pinned)
        }
        return
      }

      const hero = document.querySelector('.hero')
      if (!hero) return

      const heroBounds = hero.getBoundingClientRect()
      const navHeight = 64
      const heroTop = heroBounds.bottom - navHeight - 26
      const transitionDistance = 160
      const rawProgress = Math.min(1, Math.max(0, (transitionDistance - heroTop) / transitionDistance))
      const easedProgress = rawProgress * rawProgress * (3 - 2 * rawProgress)
      const compactWidth = Math.min(1120, window.innerWidth - 48)
      const width = compactWidth + (window.innerWidth - compactWidth) * easedProgress
      const pinned = heroTop <= 0

      header.style.setProperty('--nav-top', `${Math.max(0, heroTop)}px`)
      header.style.setProperty('--nav-left', `${(window.innerWidth - width) / 2}px`)
      header.style.setProperty('--nav-width', `${width}px`)
      header.style.setProperty('--nav-radius', `${16 * (1 - easedProgress)}px`)
      header.style.setProperty('--nav-progress', easedProgress)
      header.style.setProperty('--nav-glass-alpha', 0.2 * (1 - easedProgress))
      header.style.setProperty('--nav-glass-edge-alpha', 0.06 * (1 - easedProgress))
      header.style.setProperty('--nav-dark-alpha', 0.94 * easedProgress)

      if (pinned !== wasPinned) {
        wasPinned = pinned
        setScrolled(pinned)
      }
    }

    const requestUpdate = () => {
      if (frameId === null) frameId = requestAnimationFrame(updateNavigation)
    }

    updateNavigation()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [isHome])

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
    if (!open) return undefined

    document.body.classList.add('nav-menu-open')
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    requestAnimationFrame(() => menuRef.current?.querySelector('a, button')?.focus())

    return () => {
      document.body.classList.remove('nav-menu-open')
      document.removeEventListener('keydown', onKeyDown)
      burgerRef.current?.focus()
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
    <header
      ref={headerRef}
      className={`nav ${isHome ? 'nav--home' : 'nav--page'} ${isHome && !scrolled && !open ? 'nav--hero' : ''} ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--menu-open' : ''}`}
    >
      {isHome && (
        <div className="nav__hero-logo">
          <Logo onClick={() => setOpen(false)} />
        </div>
      )}
      <div className="container nav__inner">
        <Logo onClick={() => setOpen(false)} />
        {open && <button type="button" className="nav__backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />}

        <nav
          ref={menuRef}
          id="primary-menu"
          className={`nav__links ${open ? 'nav__links--open' : ''}`}
          aria-label="Primary"
        >
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
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => {
                toggleTheme()
                setOpen(false)
              }}
            >
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
          ref={burgerRef}
          type="button"
          className="nav__burger"
          onClick={() => setOpen((wasOpen) => !wasOpen)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-menu"
        >
          <Icon name={open ? 'close' : 'menu'} size={24} strokeWidth={1.6} />
        </button>
      </div>
    </header>
  )
}
