import { why } from '../data/content.js'
import Icon from './Icon.jsx'
import './Why.css'

export default function Why() {
  return (
    <section id={why.id} className="why" aria-label="Why choose White Narrative">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">{why.eyebrow}</p>
          <h2 className="display">
            {why.title[0]} <em>{why.title[1]}</em>
          </h2>
        </div>

        <div className="why__grid">
          {why.items.map((item, i) => (
            <article key={item.title} className="why__card reveal" style={{ '--d': `${i * 0.06}s` }}>
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
