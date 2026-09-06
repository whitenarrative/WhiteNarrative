import { Link } from 'react-router-dom'
import { services } from '../data/content.js'
import Icon from './Icon.jsx'
import './Services.css'

export default function Services() {
  return (
    <section id={services.id} className="services" aria-label="Services">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{services.eyebrow}</p>
          <h2 className="display">
            {services.title[0]}
            <br />
            <em>{services.title[1]}</em>
          </h2>
          <p className="section-sub">{services.sub}</p>
        </div>

        <div className="services__grid">
          {services.items.map((item, i) => (
            <Link
              to="/contact"
              key={item.title}
              className="services__card reveal"
              style={{ '--d': `${(i % 3) * 0.05}s` }}
            >
              <Icon name={item.icon} size={22} strokeWidth={1.4} />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
