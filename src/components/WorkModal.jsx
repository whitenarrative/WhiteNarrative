import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Icon from './Icon.jsx'
import './WorkModal.css'

export default function WorkModal({ item, onClose }) {
  const dialogRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    if (!item) return undefined

    previouslyFocused.current = document.activeElement
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.classList.add('work-modal-open')
    dialogRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('work-modal-open')
      previouslyFocused.current?.focus?.()
    }
  }, [item, onClose])

  if (!item) return null

  const content = (
    <div
      ref={dialogRef}
      className="work-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-modal-title"
      tabIndex={-1}
    >
      <div className="work-modal__backdrop" onClick={onClose} />

      <div className="work-modal__panel" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="work-modal__close" onClick={onClose} aria-label="Close">
          <Icon name="close" size={20} strokeWidth={1.6} />
        </button>

        <div className="work-modal__intro">
          <span className="work-modal__category">{item.category}</span>
          <h2 id="work-modal-title" className="display work-modal__title">{item.title}</h2>
        </div>

        {item.watchUrl ? (
          <>
            <a
              className="work-modal__poster"
              href={item.watchUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Watch ${item.title}`}
            >
              <img src={item.posterUrl} alt={`${item.title} poster`} />
              <span className="work-modal__poster-play"><Icon name="play" size={28} /></span>
              <span>Click poster to watch</span>
            </a>

            <a className="work-modal__watch" href={item.watchUrl} target="_blank" rel="noreferrer">
              Click here to watch
              <Icon name="arrowUpRight" size={15} strokeWidth={2} />
            </a>
          </>
        ) : (
          <div className={`work-modal__poster work-modal__poster--coming-soon ${item.posterLayout === 'portrait' ? 'work-modal__poster--portrait' : ''}`}>
            <img src={item.posterUrl} alt={`${item.title} poster`} />
            <span>Trailer coming soon</span>
          </div>
        )}

        <div className="work-modal__block">
          <h3>Synopsis</h3>
          <p>{item.synopsis}</p>
        </div>

        {item.year && (
          <div className="work-modal__block">
            <h3>Year of release</h3>
            <p>{item.year}</p>
          </div>
        )}

        {item.credits && (
          <div className="work-modal__block work-modal__credits">
            <h3>Credits</h3>
            <dl>
              <div><dt>Director</dt><dd>{item.credits.director}</dd></div>
              <div><dt>Cinematographer</dt><dd>{item.credits.cinematographer}</dd></div>
              <div><dt>Editor</dt><dd>{item.credits.editor}</dd></div>
              <div><dt>Colorist</dt><dd>{item.credits.colorist}</dd></div>
              <div><dt>Music Director</dt><dd>{item.credits.musicDirector}</dd></div>
            </dl>
          </div>
        )}

        {item.cast?.length > 0 && (
          <div className="work-modal__block">
            <h3>Cast</h3>
            <p className="work-modal__cast">{item.cast.join(' · ')}</p>
          </div>
        )}

        <div className="work-modal__block">
          <h3>Additional links</h3>
          {item.links?.length > 0 ? (
            <div className="work-modal__links">
              {item.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <Icon name="arrowUpRight" size={13} strokeWidth={2} />
              </a>
              ))}
            </div>
          ) : (
            <p className="work-modal__unavailable">No additional public listing is currently available.</p>
          )}
        </div>

        {item.missingInfo && <p className="work-modal__missing">Note: {item.missingInfo}</p>}
      </div>
    </div>
  )

  return createPortal(content, document.body)
}
