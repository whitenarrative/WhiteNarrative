import { who, why } from '../data/content.js'
import Icon from './Icon.jsx'
import './WhoWhy.css'

export default function WhoWhy() {
  return (
    <section id={who.id} className="whowhy" aria-label="Who we are and why choose us">
      <div className="whowhy__quote-band">
        <div className="container whowhy__quote-inner">
          <p className="eyebrow reveal">{who.eyebrow}</p>
          <blockquote className="reveal" style={{ '--d': '0.06s' }}>
            {who.quote}
          </blockquote>
          <p className="whowhy__copy reveal" style={{ '--d': '0.12s' }}>{who.copy}</p>
        </div>
      </div>

      <div className="container whowhy__why">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">{why.eyebrow}</p>
          <h2 className="display">
            {why.title[0]} <em>{why.title[1]}</em>
          </h2>
        </div>

        <div className="whowhy__grid">
          {why.items.map((item, i) => (
            <article key={item.title} className="whowhy__card reveal" style={{ '--d': `${i * 0.06}s` }}>
              <Icon name={item.icon} size={22} strokeWidth={1.4} />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
