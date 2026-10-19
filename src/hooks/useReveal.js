import { useEffect } from 'react'

/**
 * Observes `.reveal` elements and adds `.in` when they enter the viewport.
 * A mutation observer also picks up project cards rendered after an API call.
 */
export default function useReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'))
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

    const observeRevealElements = (root = document) => {
      if (root.matches?.('.reveal')) io.observe(root)
      root.querySelectorAll?.('.reveal').forEach((el) => io.observe(el))
    }

    observeRevealElements()

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) observeRevealElements(node)
        })
      })
    })
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mutations.disconnect()
    }
  }, [])
}
