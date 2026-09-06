import { Link } from 'react-router-dom'
import { hero, site } from '../data/content.js'
import Icon from './Icon.jsx'
import './Hero.css'

const heroVideoUrl = '/hero-reel.mp4'

export default function Hero() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero__media" aria-hidden="true">
        <video
          className="hero__video"
          autoPlay={!reduceMotion}
          loop={!reduceMotion}
          muted
          playsInline
          preload="auto"
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
        <div className="hero__scrim" />
      </div>

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
          <a href={site.whatsappLink} target="_blank" rel="noreferrer" className="btn btn--gold">
            <Icon name="whatsapp" size={16} />
            {hero.ctaPrimary}
          </a>
          <Link to="/work" className="btn btn--ghost">
            <Icon name="play" size={16} />
            {hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
