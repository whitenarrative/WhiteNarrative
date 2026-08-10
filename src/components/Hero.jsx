import { Link } from 'react-router-dom'
import { hero } from '../data/content.js'
import Icon from './Icon.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container hero__inner">
        <p className="hero__kicker reveal">{hero.kicker}</p>

        <h1 className="display hero__title">
          {hero.titleLines.map((line, i) => (
            <span key={line} className="reveal" style={{ '--d': `${0.06 + i * 0.08}s` }}>
              {line}
            </span>
          ))}
          <span className="hero__title-accent reveal" style={{ '--d': '0.22s' }}>
            {hero.titleAccent}
          </span>
        </h1>

        <p className="hero__tagline reveal" style={{ '--d': '0.3s' }}>
          {hero.tagline}
        </p>

        <p className="hero__copy reveal" style={{ '--d': '0.36s' }}>
          {hero.copy}
        </p>

        <ul className="hero__formats reveal" style={{ '--d': '0.42s' }}>
          {hero.formats.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="hero__actions reveal" style={{ '--d': '0.48s' }}>
          <Link to="/contact" className="btn btn--gold">
            {hero.ctaPrimary}
            <Icon name="arrowUpRight" size={15} strokeWidth={2} />
          </Link>
          <Link to="/work" className="btn btn--ghost">
            <Icon name="play" size={16} />
            {hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
