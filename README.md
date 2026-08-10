# White Narrative — Stories Framed Forever

A single-page React marketing site for the White Narrative film production studio,
built with [Vite](https://vitejs.dev). Dark cinematic theme (near-black + gold),
Anton/Oswald/Inter typography, film-grain overlay and scroll-reveal animations —
no UI framework, just hand-rolled CSS.

## Run it

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the production bundle
```

## Structure

```
src/
  data/content.js        # ALL site copy lives here — edit this to change text
  hooks/useReveal.js     # IntersectionObserver scroll-reveal
  components/            # one section per component, CSS colocated
    Navbar / Hero / Challenge / Journey / Services / WhoWhy /
    Stats / Work / Team / Testimonials / BehindTheScenes /
    FinalCta / Footer / Icon / Logo
```

The page follows the website strategy document section-for-section:
Hero → The Challenge → The Journey (01–06) → What We Do → Who We Are /
Why White Narrative → Stats → Our Work → Meet the Team → Testimonials &
Partners → Behind the Scenes → Final CTA → Footer.

## Placeholder content to replace before launch

- **Stats** (50+ / 25+ / 20+ / 5) — from the design mockups; confirm real numbers.
- **Our Work** case-study notes and years — sample copy written to be replaced.
- **Testimonials** — the Rohit Mehra quote is from the mockups; the other two are
  sample placeholders.
- **Partner names** and social links — update `src/data/content.js`.
- **Team portraits** — currently monogram avatars; swap in photos by editing
  `Team.jsx` when assets are available.

Fonts load from Google Fonts (see `index.html`).
