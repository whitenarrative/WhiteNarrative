import { navLinks, site } from '../data/content.js'
import Icon from './Icon.jsx'
import Logo from './Logo.jsx'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>
            A film production studio crafting features, shorts, series, brand films and music
            videos — from the first spark of an idea to the night it meets its audience.
          </p>
        </div>

        <nav className="footer__col" aria-label="Quick links">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>
                <Icon name="mail" size={15} /> {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>
                <Icon name="phone" size={15} /> {site.phone}
              </a>
            </li>
            <li>
              <span>
                <Icon name="pin" size={15} /> {site.location}
              </span>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Follow Us</h4>
          <div className="footer__socials">
            {site.socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>© {year} White Narrative Studios. All rights reserved.</p>
          <p className="footer__tag">{site.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
