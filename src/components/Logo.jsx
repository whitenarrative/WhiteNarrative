export default function Logo({ compact = false }) {
  return (
    <a href="#home" className="logo" aria-label="White Narrative — home">
      <svg className="logo__mark" viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
        <defs>
          <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e9c87e" />
            <stop offset="0.55" stopColor="#d2a44e" />
            <stop offset="1" stopColor="#a97e2f" />
          </linearGradient>
        </defs>
        <path
          d="M8 14 L21 50 L32 22 L43 50 L56 14"
          fill="none"
          stroke="url(#logoGold)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43 50 L43 14"
          fill="none"
          stroke="url(#logoGold)"
          strokeWidth="5.5"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
      {!compact && (
        <span className="logo__text">
          <span className="logo__name">White Narrative</span>
          <span className="logo__tag">Stories Framed Forever</span>
        </span>
      )}
    </a>
  )
}
