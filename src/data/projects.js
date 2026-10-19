const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || (projectId ? `https://${projectId}.supabase.co` : null)
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

const projectFields = [
  'id',
  'title',
  'slug',
  'category',
  'type',
  'year',
  'synopsis',
  'poster_url',
  'poster_layout',
  'watch_url',
  'director',
  'cinematographer',
  'editor',
  'colorist',
  'music_director',
  'cast_members',
  'links',
  'is_featured',
  'display_order',
].join(',')

function safeExternalUrl(value) {
  if (!value) return null

  try {
    const url = new URL(value)
    return ['http:', 'https:'].includes(url.protocol) ? url.href : null
  } catch {
    return null
  }
}

function safePosterUrl(value) {
  if (value?.startsWith('/')) return value
  return safeExternalUrl(value)
}

function normalizeProject(project) {
  const creditPairs = [
    ['director', project.director],
    ['cinematographer', project.cinematographer],
    ['editor', project.editor],
    ['colorist', project.colorist],
    ['musicDirector', project.music_director],
  ]
  const credits = Object.fromEntries(creditPairs.filter(([, value]) => value))

  return {
    id: project.id,
    slug: project.slug,
    title: project.title,
    category: project.category,
    type: project.type,
    year: project.year,
    synopsis: project.synopsis,
    posterUrl: safePosterUrl(project.poster_url),
    posterLayout: project.poster_layout,
    watchUrl: safeExternalUrl(project.watch_url),
    credits: Object.keys(credits).length ? credits : null,
    cast: Array.isArray(project.cast_members) ? project.cast_members : [],
    links: Array.isArray(project.links)
      ? project.links
        .map((link) => ({ label: link?.label, href: safeExternalUrl(link?.href) }))
        .filter((link) => link.label && link.href)
      : [],
    isFeatured: project.is_featured,
    displayOrder: project.display_order,
  }
}

export async function fetchProjects({ featured = false, limit, signal } = {}) {
  if (!supabaseUrl || !publishableKey) {
    throw new Error('Supabase project configuration is missing')
  }

  const params = new URLSearchParams({
    select: projectFields,
    is_published: 'eq.true',
    order: 'display_order.asc,created_at.desc',
  })

  if (featured) params.set('is_featured', 'eq.true')
  if (limit) params.set('limit', String(limit))

  const response = await fetch(`${supabaseUrl}/rest/v1/projects?${params}`, {
    headers: {
      apikey: publishableKey,
      Accept: 'application/json',
    },
    signal,
  })

  if (!response.ok) {
    const payload = await response.json().catch(() => null)
    throw new Error(payload?.message || `Supabase returned ${response.status}`)
  }

  const projects = await response.json()
  return projects.map(normalizeProject)
}
