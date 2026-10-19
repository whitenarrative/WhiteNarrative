import { Link } from 'react-router-dom'
import { work } from '../data/content.js'
import useProjects from '../hooks/useProjects.js'
import Icon from './Icon.jsx'
import WorkGrid from './WorkGrid.jsx'
import WorkStatus from './WorkStatus.jsx'
import './WorkPreview.css'

export default function WorkPreview() {
  const { projects, loading, error } = useProjects({ featured: true, limit: 3 })

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

        {projects.length > 0 ? (
          <WorkGrid items={projects} />
        ) : (
          <WorkStatus loading={loading} error={error} />
        )}
      </div>
    </section>
  )
}
