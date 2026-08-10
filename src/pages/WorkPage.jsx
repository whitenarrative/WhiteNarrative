import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import { work, workPage } from '../data/content.js'
import WorkGrid from '../components/WorkGrid.jsx'
import Icon from '../components/Icon.jsx'
import './WorkPage.css'

export default function WorkPage() {
  useReveal()

  return (
    <section className="work-page" aria-label="Our work">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{workPage.eyebrow}</p>
          <h1 className="display">
            {workPage.title[0]}
            <br />
            <em>{workPage.title[1]}</em>
          </h1>
          <p className="section-sub">{workPage.sub}</p>
        </div>

        <div className="work-page__grid reveal" style={{ '--d': '0.08s' }}>
          <WorkGrid items={work.items} filterable />
        </div>

        <div className="work-page__cta reveal">
          <p>Have a project in mind?</p>
          <Link to="/contact" className="btn btn--gold">
            Let's Talk
            <Icon name="arrowUpRight" size={15} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}
