import { testimonials } from '../data/content.js'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section id={testimonials.id} className="testimonials" aria-label="Testimonials and partners">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow eyebrow--lined">{testimonials.eyebrow}</p>
          <h2 className="display">
            {testimonials.title[0]}
            <br />
            <em>{testimonials.title[1]}</em>
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.items.map((t, i) => (
            <figure key={t.name} className="testimonials__card reveal" style={{ '--d': `${i * 0.1}s` }}>
              <span className="testimonials__mark" aria-hidden="true">“</span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="testimonials__avatar" aria-hidden="true">
                  {t.name[0]}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <em>{t.role}</em>
                </span>
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
