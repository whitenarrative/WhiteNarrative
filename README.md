# White Narrative — Stories Framed Forever

A React marketing site for the White Narrative film production studio, built with
[Vite](https://vitejs.dev) and [React Router](https://reactrouter.com). Minimal
theme (near-black or near-white + a single gold accent, user-toggleable), Anton/Oswald/Inter
typography, hairline-bordered flat cards, subtle scroll-reveal — no UI framework, hand-rolled CSS.

The site's primary calls to action point to WhatsApp (`site.whatsappLink` in
`src/data/content.js`) and to `/work` — showcasing the studio's work and getting a
fast reply are the two jobs this site is built to do.

## Run it

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the production bundle
```

## Pages

- **`/`** — Home: Hero → The Challenge → What We Do → Our Journey → Meet the Team →
  Work preview (3 projects) → Why White Narrative → Stats → closing CTA.
- **`/work`** — Gallery: every project, filterable by format. Clicking a card opens
  a detail popup (`WorkModal.jsx`) with synopsis, year of release and what we did.
- **`/contact`** — Direct details only (WhatsApp/email/phone/location/socials) —
  there's no on-page form.

`vercel.json` rewrites all paths to `index.html` so direct links to `/work` or
`/contact` work on Vercel (client-side routing needs this — without it, a refresh
on those routes 404s).

## Structure

```
src/
  data/content.js        # ALL site copy lives here — edit this to change text
  hooks/useReveal.js     # IntersectionObserver scroll-reveal (one-shot per page)
  hooks/useTheme.js      # light/dark theme state, persisted to localStorage
  pages/                 # Home / WorkPage / ContactPage — route-level components
  components/            # Navbar, Footer, ScrollManager, and per-section pieces
```

`ScrollManager` runs on every route change — scrolls to top, or to a hash target
(e.g. a nav link to `/#services`) once the target page has mounted. Nav links that
point at an in-page section (`/#challenge`, `/#journey`, etc.) only exist on Home;
from any other page they navigate back to `/` and then scroll.

## Theming

`data-theme` on `<html>` switches the palette — `src/index.css` defines the dark
tokens on `:root` and light overrides on `:root[data-theme='light']`. An inline
script in `index.html` resolves the initial theme (stored choice, else system
`prefers-color-scheme`) before first paint to avoid a flash; `src/hooks/useTheme.js`
handles the toggle button in the navbar and persists the choice to `localStorage`.
`--gold-solid` / `--gold-ink` are intentionally fixed (not theme-dependent) — they're
the button-fill pair and need to stay readable regardless of page theme.

## Placeholder content to replace before launch

- **Hero background video** — a licensed-for-commercial-use clip from Pexels
  (`Hero.jsx`, `heroVideoUrl`), used as a stand-in until real studio reel footage
  is available. Free under the [Pexels License](https://www.pexels.com/license/),
  no attribution required, but swap it for actual reel/BTS footage before launch.
- **Email address** — `site.email` in `src/data/content.js`.
- **Social links** — `site.socials` in `src/data/content.js`; each entry needs its
  real profile URL.
- **Stats** (50+ / 25+) — from the design mockups; confirm real numbers.
- **Our Work** — each item's `synopsis` is sample copy; `whatWeDid` is a generic
  placeholder per category (`src/data/content.js`) — replace both with the real
  per-project credits.
- **Team portraits and bios** — currently monogram avatars with placeholder
  quotes/notes; swap in real photos and copy by editing `Team.jsx` and the `team`
  export in `src/data/content.js`.

Fonts load from Google Fonts (see `index.html`).
