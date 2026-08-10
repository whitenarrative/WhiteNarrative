import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/content.js'
import Icon from './Icon.jsx'
import './Stats.css'

function CountUp({ value, suffix, start }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!start) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDisplay(value)
      return undefined
    }

    const duration = 1700
    let raf
    let t0

    const tick = (t) => {
      if (t0 === undefined) t0 = t
      const p = Math.min((t - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, value])

  return (
    <span className="stats__value">
      {display}
      <span className="stats__suffix">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="stats" aria-label="Studio milestones" ref={ref}>
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <div key={s.label} className="stats__item reveal" style={{ '--d': `${i * 0.08}s` }}>
            <Icon name={s.icon} size={30} className="stats__icon" />
            <CountUp value={s.value} suffix={s.suffix} start={inView} />
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
