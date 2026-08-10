import { challenge } from '../data/content.js'
import Icon from './Icon.jsx'
import './Challenge.css'

export default function Challenge() {
  return (
    <section id={challenge.id} className="challenge" aria-label="Understanding the challenge">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{challenge.eyebrow}</p>
          <h2 className="display">
            {challenge.title[0]}
            <br />
            <em>{challenge.title[1]}</em>
          </h2>
          <p className="section-sub">{challenge.sub}</p>
        </div>

        <div className="challenge__grid">
          {challenge.items.map((item, i) => (
            <article key={item.title} className="challenge__card reveal" style={{ '--d': `${i * 0.06}s` }}>
              <Icon name={item.icon} size={20} strokeWidth={1.4} />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>

        <p className="challenge__resolution reveal">{challenge.resolution}</p>
      </div>
    </section>
  )
}
