# Agent Notes

## What this repository is

This repository is both:

- the source for the main public homepage at `drobilica.com`
- the deployment target for static app artifacts under `sites/`

Do not assume every file here is primary source code. Much of `sites/` is generated elsewhere.

## What should an agent avoid changing?

- Do not casually edit files inside `sites/`; most of them are deployed artifacts copied from upstream repos.
- Do not rename or remove `sites/` subdirectories unless the user explicitly asks.
- Do not change GitHub Pages workflow behavior without understanding how artifact repos publish into this repo.
- Do not change `CNAME` unless the user explicitly asks.

## What stack and conventions are mandatory here?

- Root site uses Vite
- Root site uses vanilla JavaScript
- Root site uses Tailwind CSS v4 via `@tailwindcss/vite`
- `sites/` contents may use completely different stacks because they are built elsewhere

## What deployment/base-path assumptions exist?

- The root homepage is served from `/`
- Apps under `sites/` are served from subpaths like `/cv/` and `/cyphonfilter/`
- `.github/workflows/static.yml` builds the root site, then overlays `sites/` into the final Pages artifact

## Which files are the main entrypoints?

- `index.html`
- `src/main.js`
- `src/styles.css`
- `vite.config.mjs`
- `.github/workflows/static.yml`

## What kinds of changes are acceptable without asking?

- Root homepage copy and layout improvements
- Root homepage styling cleanup
- Root docs updates
- Agent docs updates
- Small GitHub Pages workflow clarifications that do not change deployment intent

## What areas are fragile, experimental, or intentionally messy?

- `sites/` is intentionally a mixed artifact area, not a clean source tree
- Root source and deployed artifacts live in the same repository
- It is easy to accidentally edit generated output instead of the real upstream source
