# White Narrative — Stories Framed Forever

A React marketing site for the White Narrative film production studio, built with
[Vite](https://vitejs.dev) and [React Router](https://reactrouter.com). Minimal
dark theme (near-black + a single gold accent), Anton/Oswald/Inter typography,
hairline-bordered flat cards, subtle scroll-reveal — no UI framework, hand-rolled CSS.

## Run it

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the production bundle
```

## Pages

- **`/`** — Home: Hero → The Challenge → The Journey (01–06) → What We Do → Who We Are
  / Why White Narrative → Stats → Work preview (3 projects) → Meet the Team →
  Testimonials & Partners → closing CTA.
- **`/work`** — Gallery: every project, filterable by format.
- **`/contact`** — Contact form plus direct details (email/phone/location/socials).

`vercel.json` rewrites all paths to `index.html` so direct links to `/work` or
`/contact` work on Vercel (client-side routing needs this — without it, a refresh
on those routes 404s).

## Structure

```
src/
  data/content.js        # ALL site copy lives here — edit this to change text
  hooks/useReveal.js     # IntersectionObserver scroll-reveal (one-shot per page)
  pages/                 # Home / WorkPage / ContactPage — route-level components
  components/            # Navbar, Footer, ScrollManager, and per-section pieces
```

`ScrollManager` runs on every route change — scrolls to top, or to a hash target
(e.g. a nav link to `/#services`) once the target page has mounted. Nav links that
point at an in-page section (`/#challenge`, `/#journey`, etc.) only exist on Home;
from any other page they navigate back to `/` and then scroll.

## Contact form

There's no backend, so submitting the form builds a `mailto:` link (subject +
body pre-filled from the fields) and opens the visitor's email client. If you
later want real form submissions (e.g. via a hosted form service or a small API
route), that's the one place to swap out — `src/components/ContactForm.jsx`.

## Placeholder content to replace before launch

- **Stats** (50+ / 25+ / 20+ / 5) — from the design mockups; confirm real numbers.
- **Our Work** case-study notes and years — sample copy written to be replaced.
- **Testimonials** — the Rohit Mehra quote is from the mockups; the other two are
  sample placeholders.
- **Partner names** and social links — update `src/data/content.js`.
- **Team portraits** — currently monogram avatars; swap in photos by editing
  `Team.jsx` when assets are available.

Fonts load from Google Fonts (see `index.html`).
