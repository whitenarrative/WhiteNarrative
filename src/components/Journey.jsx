import { journey } from '../data/content.js'
import './Journey.css'

export default function Journey() {
  return (
    <section id={journey.id} className="journey" aria-label="The filmmaking journey">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{journey.eyebrow}</p>
          <h2 className="display">
            {journey.title[0]}
            <br />
            <em>{journey.title[1]}</em>
          </h2>
          <p className="section-sub">{journey.sub}</p>
        </div>

        <ol className="journey__stages">
          {journey.stages.map((stage) => (
            <li key={stage.num} className="journey__stage reveal">
              <span className="journey__num">{stage.num}</span>

              <div className="journey__intro">
                <h3>{stage.title}</h3>
                <p>{stage.copy}</p>
              </div>

              <ul className="journey__chips">
                {stage.chips.map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
