import { testimonials } from '../data/content.js'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section id={testimonials.id} className="testimonials" aria-label="Testimonials and partners">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2 className="display">
            {testimonials.title[0]}
            <br />
            <em>{testimonials.title[1]}</em>
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.items.map((t, i) => (
            <figure key={t.name} className="testimonials__card reveal" style={{ '--d': `${i * 0.07}s` }}>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="testimonials__partners reveal">
          <p>Brands & platforms our films have travelled with</p>
          <ul>
            {testimonials.partners.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
