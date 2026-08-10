import { services } from '../data/content.js'
import Icon from './Icon.jsx'
import './Services.css'

export default function Services() {
  return (
    <section id={services.id} className="services" aria-label="What we do">
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
            <article
              key={item.title}
              className={`services__card services__card--${item.tint} reveal`}
              style={{ '--d': `${(i % 3) * 0.1}s` }}
            >
              <div className="services__still" aria-hidden="true">
                <span className="services__still-glow" />
                <Icon name={item.icon} size={54} strokeWidth={1.1} className="services__still-icon" />
                <span className="services__sprockets services__sprockets--top" />
                <span className="services__sprockets services__sprockets--bottom" />
              </div>
              <div className="services__body">
                <h3>
                  <Icon name={item.icon} size={19} />
                  {item.title}
                </h3>
                <p>{item.copy}</p>
                <a href="#contact" className="services__link">
                  Start a project
                  <Icon name="arrowUpRight" size={14} strokeWidth={2} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
