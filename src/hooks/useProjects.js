import { useEffect, useState } from 'react'
import { fetchProjects } from '../data/projects.js'

export default function useProjects(options = {}) {
  const { featured = false, limit } = options
  const [state, setState] = useState({ projects: [], loading: true, error: null })

  useEffect(() => {
    const controller = new AbortController()
    setState({ projects: [], loading: true, error: null })

    fetchProjects({ featured, limit, signal: controller.signal })
      .then((projects) => setState({ projects, loading: false, error: null }))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setState({ projects: [], loading: false, error })
        }
      })

    return () => controller.abort()
  }, [featured, limit])

  return state
}
