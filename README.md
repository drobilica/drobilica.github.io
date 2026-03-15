# drobilica.github.io

This repository is the public website for `drobilica.com`. It has two responsibilities:

- the root Vite app that serves the main homepage at `https://drobilica.com/`
- the `sites/` directory that stores deployable artifacts copied from other source repositories, especially `flight-deck-monorepo`

## Repository role

This is a hybrid source and deployment repository:

- root-level files such as `index.html`, `src/`, `package.json`, and `vite.config.mjs` are the source for the main public homepage
- `sites/` is an artifact area containing static apps that are built elsewhere and published under subpaths like `/cv/`, `/cyphonfilter/`, and `/github-listing/`

The source of truth for many apps under `sites/` is not this repository. For example, `flight-deck-monorepo` builds and pushes site artifacts here.

## Local development

1. `pnpm install`
2. `pnpm dev`

This runs the root public homepage locally. It does not rebuild the apps under `sites/`.

## Build and deploy

- Local production build: `pnpm build`
- GitHub Pages deploy: handled by `.github/workflows/static.yml`

The deploy workflow:

- builds the root Vite site into `dist/`
- copies `dist/` into a temporary deploy directory
- copies `sites/` into that same deploy directory
- publishes the combined output to GitHub Pages

## Editing rules

- Edit root site source here when you want to change `drobilica.com` itself.
- Do not manually edit `sites/` unless you intentionally want to patch deployed artifacts in place. In normal workflow, update the upstream source repo instead.
- If an app under `sites/` looks wrong, first check whether its source lives in `flight-deck-monorepo` or another repo.

## Structure

- `index.html`: root homepage entrypoint
- `src/`: root homepage CSS and JS
- `sites/`: deployed static app artifacts served under subpaths
- `.github/workflows/static.yml`: GitHub Pages deployment workflow

## Why this setup exists

GitHub Pages is easiest to manage from a single publishable repository. Keeping the public root site and the app artifacts together allows `drobilica.com` and all subpath apps to deploy as one site while still letting the source code for those apps live elsewhere.
