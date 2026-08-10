import { hero, site } from '../data/content.js'
import Icon from './Icon.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero__scene" aria-hidden="true">
        <span className="hero__glow hero__glow--a" />
        <span className="hero__glow hero__glow--b" />
        <span className="hero__beam hero__beam--a" />
        <span className="hero__beam hero__beam--b" />
        <span className="hero__floor" />
        <span className="hero__vignette" />
      </div>

      <div className="container hero__inner">
        <p className="hero__kicker reveal">
          <span className="hero__kicker-line" />
          {hero.kicker}
        </p>

        <h1 className="display hero__title">
          {hero.titleLines.map((line, i) => (
            <span key={line} className="hero__title-line reveal" style={{ '--d': `${0.08 + i * 0.12}s` }}>
              {line}
            </span>
          ))}
          <span className="hero__title-line hero__title-line--accent reveal" style={{ '--d': '0.32s' }}>
            {hero.titleAccent}
          </span>
        </h1>

        <p className="hero__tagline reveal" style={{ '--d': '0.42s' }}>
          {hero.tagline}
        </p>

        <p className="hero__copy reveal" style={{ '--d': '0.5s' }}>
          {hero.copy}
        </p>

        <ul className="hero__formats reveal" style={{ '--d': '0.58s' }}>
          {hero.formats.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="hero__actions reveal" style={{ '--d': '0.66s' }}>
          <a href="#contact" className="btn btn--gold">
            {hero.ctaPrimary}
            <Icon name="arrowUpRight" size={16} strokeWidth={2} />
          </a>
          <a href="#work" className="btn btn--ghost hero__reel">
            <Icon name="play" size={18} />
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      <a href="#challenge" className="hero__scroll" aria-label="Scroll to explore">
        <span>Scroll to explore</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>

      <div className="hero__strip" aria-hidden="true">
        {[...Array(2)].map((_, copy) => (
          <div key={copy} className="hero__strip-track">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="hero__strip-text">
                {site.tagline} · Feature Films · Short Films · Web Series · Corporate Films · Ad Films · Music Videos ·&nbsp;
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
