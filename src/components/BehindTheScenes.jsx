import { bts } from '../data/content.js'
import Icon from './Icon.jsx'
import './BehindTheScenes.css'

export default function BehindTheScenes() {
  return (
    <section id={bts.id} className="bts" aria-label="Behind the scenes">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{bts.eyebrow}</p>
          <h2 className="display">
            {bts.title[0]}
            <br />
            <em>{bts.title[1]}</em>
          </h2>
          <p className="section-sub">{bts.sub}</p>
        </div>

        <div className="bts__mosaic">
          {bts.moments.map((m, i) => (
            <figure
              key={m.label}
              className={`bts__tile bts__tile--${m.scene} ${m.size ? `bts__tile--${m.size}` : ''} reveal`}
              style={{ '--d': `${i * 0.08}s` }}
            >
              <span className="bts__beam" aria-hidden="true" />
              <span className="bts__silhouette" aria-hidden="true" />
              <figcaption>
                <Icon name={m.icon} size={17} />
                {m.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
