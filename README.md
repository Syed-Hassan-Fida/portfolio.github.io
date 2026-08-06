# Syed Hassan Fida — Portfolio

Personal portfolio site for **Syed Hassan Fida**, Senior Software Engineer (Backend & Distributed Systems).

**Live:** https://syed-hassan-fida.github.io/portfolio.github.io/

## Contents

Single-page site covering About, Experience, Projects, Skills, Education, Writing, and Contact.
All content is kept in sync with `assets/Syed-Hassan-Fida-Resume.pdf`, which is the source of truth —
update the Resume first, then reflect any changes in `index.html`.

## Stack

Static HTML with no build step. Dependencies load from CDN:

- Tailwind CSS (CDN, configured inline in `index.html`)
- Alpine.js — mobile menu, typing effect, copy-to-clipboard
- Lucide — icons
- Google Fonts — Inter, Space Grotesk, JetBrains Mono

Scroll reveals, counters, scroll-spy, the progress bar, and the ambient particle canvases are
hand-rolled vanilla JS at the bottom of `index.html` — no animation library.

## Local preview

```bash
python3 -m http.server 8000
# then open http://127.0.0.1:8000
```

## SEO

- `robots.txt` and `sitemap.xml` at the repo root
- Open Graph and Twitter card metadata, plus `Person` and `WebSite` JSON-LD in `<head>`
- Social share image: `assets/images/og-cover.png` (1200×630)

Update the canonical URL in `index.html`, `robots.txt`, and `sitemap.xml` together if the domain changes.

## Accessibility & motion

Skip link, focus-visible outlines, labelled icon-only controls, and a full
`prefers-reduced-motion` path that disables the particle canvases, typing effect, and reveal
animations.
