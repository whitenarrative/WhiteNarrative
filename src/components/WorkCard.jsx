import './WorkCard.css'

export default function WorkCard({ item }) {
  return (
    <article className="work-card">
      <div className="work-card__panel">
        <span className="work-card__initial display" aria-hidden="true">
          {item.title[0]}
        </span>
        <span className="work-card__category">{item.category}</span>
        <span className="work-card__year">{item.year}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.note}</p>
    </article>
  )
}
