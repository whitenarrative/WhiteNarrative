import { journey } from '../data/content.js'
import Icon from './Icon.jsx'
import './Journey.css'

export default function Journey() {
  return (
    <section id={journey.id} className="journey" aria-label="The filmmaking journey">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow eyebrow--lined">{journey.eyebrow}</p>
          <h2 className="display">
            {journey.title[0]}
            <br />
            <em>{journey.title[1]}</em>
          </h2>
          <p className="section-sub">{journey.sub}</p>
        </div>

        <div className="journey__stages">
          {journey.stages.map((stage) => (
            <article key={stage.num} className="journey__stage reveal">
              <span className="journey__ghost display" aria-hidden="true">
                {stage.num}
              </span>

              <div className="journey__intro">
                <div className="journey__meta">
                  <span className="journey__num">{stage.num}</span>
                  <span className="journey__stage-icon">
                    <Icon name={stage.icon} size={22} />
                  </span>
                </div>
                <h3 className="display">{stage.title}</h3>
                <p>{stage.copy}</p>
              </div>

              <ul className="journey__chips">
                {stage.chips.map((chip, i) => (
                  <li key={chip.label} className="journey__chip" style={{ '--d': `${i * 0.06}s` }}>
                    <Icon name={chip.icon} size={22} />
                    <span>{chip.label}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
