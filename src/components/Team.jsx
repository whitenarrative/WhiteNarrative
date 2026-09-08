import { team } from '../data/content.js'
import Icon from './Icon.jsx'
import './Team.css'

export default function Team() {
  return (
    <section id={team.id} className="team" aria-label="Meet the team">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">{team.eyebrow}</p>
          <h2 className="display">
            {team.title[0]} <em>{team.title[1]}</em>
          </h2>
          <p className="section-sub">{team.sub}</p>
        </div>

        <div className="team__grid">
          {team.members.map((m, i) => (
            <article key={m.name} className="team__card reveal" style={{ '--d': `${i * 0.09}s` }}>
              <div className="team__portrait" aria-label={`Portrait of ${m.name}`}>
                <img src={m.image} alt={m.name} />
              </div>
              <h3>{m.name}</h3>
              <p className="team__role">{m.role}</p>
              {m.socials?.length > 0 && (
                <div className="team__socials">
                  {m.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${m.name} on ${s.label}`}
                      className="team__social-link"
                    >
                      <Icon name={s.icon} size={17} strokeWidth={1.6} />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
