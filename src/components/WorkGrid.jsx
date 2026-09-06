import { useCallback, useState } from 'react'
import WorkCard from './WorkCard.jsx'
import WorkModal from './WorkModal.jsx'
import './WorkGrid.css'

/**
 * Renders a filterable grid of work items. Every card stays mounted at
 * all times — filtering toggles `display: none` via inline style rather
 * than conditional rendering, so the one-shot scroll-reveal observer
 * (which only ever attaches to the cards present at mount) keeps working
 * no matter how the filter is toggled afterwards.
 */
export default function WorkGrid({ items, filterable = false }) {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)
  const categories = ['All', ...new Set(items.map((item) => item.category))]
  const closeModal = useCallback(() => setSelected(null), [])

  return (
    <>
      {filterable && (
        <div className="work-filter reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`work-filter__tab ${active === cat ? 'work-filter__tab--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="work-grid">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="reveal"
            style={{
              '--d': `${(i % 3) * 0.06}s`,
              display: active === 'All' || item.category === active ? undefined : 'none',
            }}
          >
            <WorkCard item={item} onOpen={() => setSelected(item)} />
          </div>
        ))}
      </div>

      <WorkModal item={selected} onClose={closeModal} />
    </>
  )
}
