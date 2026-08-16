import { Link } from 'react-router-dom'

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="logo" aria-label="White Narrative — home">
      <img className="logo__mark" src="/logo.svg" width="38" height="38" alt="" />
      {!compact && (
        <span className="logo__text">
          <span className="logo__name">White Narrative</span>
          <span className="logo__tag">Stories Framed Forever</span>
        </span>
      )}
    </Link>
  )
}
