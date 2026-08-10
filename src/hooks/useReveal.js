import { useEffect } from 'react'

/**
 * Observes every `.reveal` element once on mount and adds `.in`
 * when it enters the viewport. Content is static, so a single
 * pass after mount covers the whole page.
 */
export default function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (!els.length) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('in'))
      return undefined
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
