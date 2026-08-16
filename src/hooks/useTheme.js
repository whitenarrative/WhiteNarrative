import { useEffect, useState } from 'react'

const STORAGE_KEY = 'wn-theme'

function getInitialTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return [theme, toggle]
}
