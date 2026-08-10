import { finalCta, site } from '../data/content.js'
import Icon from './Icon.jsx'
import './FinalCta.css'

export default function FinalCta() {
  return (
    <section id={finalCta.id} className="cta" aria-label="Start your production">
      <span className="cta__beam" aria-hidden="true" />
      <span className="cta__projector" aria-hidden="true">
        <Icon name="camera" size={30} strokeWidth={1.2} />
      </span>

      <div className="container cta__inner">
        <h2 className="display reveal">
          <span>{finalCta.titleLines[0]}</span>
          <span className="cta__accent">{finalCta.titleLines[1]}</span>
        </h2>
        <p className="reveal" style={{ '--d': '0.12s' }}>
          {finalCta.copy}
        </p>
        <div className="cta__actions reveal" style={{ '--d': '0.22s' }}>
          <a href={`mailto:${site.email}?subject=Let's%20make%20a%20film`} className="btn btn--gold">
            {finalCta.button}
            <Icon name="arrowUpRight" size={16} strokeWidth={2} />
          </a>
        </div>
        <div className="cta__contacts reveal" style={{ '--d': '0.3s' }}>
          <a href={`mailto:${site.email}`}>
            <Icon name="mail" size={16} /> {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`}>
            <Icon name="phone" size={16} /> {site.phone}
          </a>
          <span>
            <Icon name="pin" size={16} /> {site.location}
          </span>
        </div>
      </div>
    </section>
  )
}
