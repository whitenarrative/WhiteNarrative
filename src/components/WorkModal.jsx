import { useEffect } from 'react'
import Icon from './Icon.jsx'
import './WorkModal.css'

export default function WorkModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div className="work-modal" role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="work-modal__backdrop" onClick={onClose} />

      <div className="work-modal__panel">
        <button className="work-modal__close" onClick={onClose} aria-label="Close">
          <Icon name="close" size={20} strokeWidth={1.6} />
        </button>

        <span className="work-modal__category">{item.category}</span>
        <h2 className="display work-modal__title">{item.title}</h2>

        <div className="work-modal__block">
          <h3>Synopsis</h3>
          <p>{item.synopsis}</p>
        </div>

        <div className="work-modal__block">
          <h3>Year Of Release</h3>
          <p>{item.year}</p>
        </div>

        <div className="work-modal__block">
          <h3>What We Did</h3>
          <p>{item.whatWeDid}</p>
        </div>
      </div>
    </div>
  )
}
