import { Link } from 'react-router-dom'
import { work } from '../data/content.js'
import Icon from './Icon.jsx'
import WorkGrid from './WorkGrid.jsx'
import './WorkPreview.css'

export default function WorkPreview() {
  return (
    <section id={work.id} className="work-preview" aria-label="Our work">
      <div className="container">
        <div className="work-preview__head reveal">
          <div className="section-head">
            <p className="eyebrow">{work.eyebrow}</p>
            <h2 className="display">
              {work.title[0]}
              <br />
              <em>{work.title[1]}</em>
            </h2>
            <p className="section-sub">{work.sub}</p>
          </div>
          <Link to="/work" className="work-preview__link">
            View All Work
            <Icon name="arrowUpRight" size={14} strokeWidth={2} />
          </Link>
        </div>

        <WorkGrid items={work.items.slice(0, 3)} />
      </div>
    </section>
  )
}
