import './WorkCard.css'

export default function WorkCard({ item, onOpen }) {
  return (
    <article
      className="work-card"
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen()
        }
      }}
    >
      <div className="work-card__panel">
        <span className="work-card__initial display" aria-hidden="true">
          {item.title[0]}
        </span>
        <span className="work-card__category">{item.category}</span>
        <span className="work-card__year">{item.year}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.synopsis}</p>
    </article>
  )
}
