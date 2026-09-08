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
      <div className={`work-card__panel ${item.posterLayout === 'portrait' ? 'work-card__panel--poster' : ''}`}>
        {item.posterUrl && <img className="work-card__image" src={item.posterUrl} alt="" />}
        <span className="work-card__category">{item.type || item.category}</span>
        <span className="work-card__play">Details</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.synopsis}</p>
    </article>
  )
}
