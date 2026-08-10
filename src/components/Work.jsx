import { useCallback, useEffect, useRef, useState } from 'react'
import { work } from '../data/content.js'
import Icon from './Icon.jsx'
import './Work.css'

export default function Work() {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return undefined
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [updateArrows])

  const scrollByCard = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.work__card')
    const step = card ? card.offsetWidth + 20 : 320
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id={work.id} className="work" aria-label="Our work">
      <div className="container">
        <div className="work__head reveal">
          <div className="section-head">
            <p className="eyebrow">{work.eyebrow}</p>
            <h2 className="display">
              {work.title[0]}
              <br />
              <em>{work.title[1]}</em>
            </h2>
            <p className="section-sub">{work.sub}</p>
          </div>
          <div className="work__arrows">
            <button
              className="work__arrow"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Previous projects"
            >
              <Icon name="arrowLeft" size={20} strokeWidth={1.8} />
            </button>
            <button
              className="work__arrow"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Next projects"
            >
              <Icon name="arrowRight" size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>

      <div className="work__viewport reveal" style={{ '--d': '0.15s' }}>
        <ul className="work__track" ref={trackRef}>
          {work.items.map((item) => (
            <li key={item.title} className={`work__card work__card--${item.scene}`}>
              <div className="work__poster">
                <span className="work__poster-glow" aria-hidden="true" />
                <span className="work__poster-shape" aria-hidden="true" />
                <div className="work__poster-top">
                  <span className="work__year">{item.year}</span>
                  <span className="work__badge">{item.category}</span>
                </div>
                <h3 className="display">{item.title}</h3>
                <div className="work__note">
                  <p>{item.note}</p>
                  <span className="work__note-cta">
                    View case study <Icon name="arrowUpRight" size={13} strokeWidth={2} />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
