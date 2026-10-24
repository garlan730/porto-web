# Andi Garlan · Portfolio

A one-page portfolio built with HTML, SCSS and a little vanilla JavaScript. No framework and no build step needed to view it.

## View it

Open `index.html` in your browser.

## Edit the styles

The CSS in `css/style.css` is compiled from `scss/`. Edit the SCSS, then run:

```bash
npm install
npm run dev     # watches scss/ and recompiles css/style.css
```

Commit `css/style.css` too, because GitHub Pages serves it as is.

## Structure

```text
index.html          page content (projects, about, contact)
scss/abstracts/     colors, fonts, breakpoints (dark mode follows the system)
scss/base/          reset and base typography
scss/layout/        container, sections, scroll reveal
scss/components/    nav, buttons, hero, project cards, card illustrations, about, contact
js/main.js          scroll reveal, nav border, copy email
assets/             resume PDF and project screenshots (taken with demo data)
```

## Deploy (GitHub Pages)

Pushing to `main` publishes the site. One-time setup: Settings → Pages → Source: Deploy from a branch → `main` / `(root)`. Live at https://garlan730.github.io/porto-web/.
