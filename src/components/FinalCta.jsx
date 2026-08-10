import { Link } from 'react-router-dom'
import { finalCta } from '../data/content.js'
import Icon from './Icon.jsx'
import './FinalCta.css'

export default function FinalCta() {
  return (
    <section className="cta" aria-label="Start your production">
      <div className="container cta__inner">
        <h2 className="display reveal">
          <span>{finalCta.titleLines[0]}</span>
          <span className="cta__accent">{finalCta.titleLines[1]}</span>
        </h2>
        <p className="reveal" style={{ '--d': '0.08s' }}>
          {finalCta.copy}
        </p>
        <div className="reveal" style={{ '--d': '0.14s' }}>
          <Link to="/contact" className="btn btn--gold">
            {finalCta.button}
            <Icon name="arrowUpRight" size={15} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}
