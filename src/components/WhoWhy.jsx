import { who, why } from '../data/content.js'
import Icon from './Icon.jsx'
import './WhoWhy.css'

export default function WhoWhy() {
  return (
    <section id={who.id} className="whowhy" aria-label="Who we are and why choose us">
      <div className="whowhy__quote-band">
        <span className="whowhy__reel whowhy__reel--left" aria-hidden="true" />
        <span className="whowhy__reel whowhy__reel--right" aria-hidden="true" />
        <div className="container whowhy__quote-inner">
          <p className="eyebrow eyebrow--lined reveal">{who.eyebrow}</p>
          <blockquote className="reveal" style={{ '--d': '0.1s' }}>
            <span className="whowhy__mark" aria-hidden="true">“</span>
            {who.quote}
          </blockquote>
          <p className="whowhy__copy reveal" style={{ '--d': '0.2s' }}>{who.copy}</p>
        </div>
      </div>

      <div className="container whowhy__why">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow eyebrow--lined">{why.eyebrow}</p>
          <h2 className="display">
            {why.title[0]} <em>{why.title[1]}</em>
          </h2>
        </div>

        <div className="whowhy__grid">
          {why.items.map((item, i) => (
            <article key={item.title} className="whowhy__card reveal" style={{ '--d': `${i * 0.09}s` }}>
              <span className="whowhy__icon">
                <Icon name={item.icon} size={26} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
