import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Runs on every route change: jumps to the top of the new page, or
 * smooth-scrolls to a hash target (e.g. Link to="/#services") once
 * that page's content has mounted.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return undefined
    }
    const raf = requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])

  return null
}
