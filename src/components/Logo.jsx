import { Link } from 'react-router-dom'

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="logo" aria-label="White Narrative — home">
      <svg className="logo__mark" viewBox="0 0 64 64" width="38" height="38" aria-hidden="true">
        <path
          d="M8 14 L21 50 L32 22 L43 50 L56 14"
          fill="none"
          style={{ stroke: 'var(--gold)' }}
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {!compact && (
        <span className="logo__text">
          <span className="logo__name">White Narrative</span>
          <span className="logo__tag">Stories Framed Forever</span>
        </span>
      )}
    </Link>
  )
}
