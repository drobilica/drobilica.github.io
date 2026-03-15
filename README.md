# drobilica.github.io

This repository is the published website for `drobilica.com`. It has two responsibilities:

- the deployed root homepage for `https://drobilica.com/`, copied here from `flight-deck-monorepo/drobilica-com-landing-page`
- the `sites/` directory that stores deployable artifacts copied from other source repositories, especially `flight-deck-monorepo`

## Repository role

This is primarily a deployment repository:

- root-level deployed site files such as `index.html`, `assets/`, and `favicon.ico` are published artifacts for the main homepage
- `sites/` is an artifact area containing static apps that are built elsewhere and published under subpaths like `/cv/`, `/cyphonfilter/`, and `/github-listing/`

The source of truth for the homepage and many apps under `sites/` is not this repository. `flight-deck-monorepo` builds and pushes those artifacts here.

## Build and deploy

- GitHub Pages deploy: handled by `.github/workflows/static.yml`

The deploy workflow:

- copies the root deployed site files into a temporary deploy directory
- copies `sites/` into that same deploy directory
- publishes the combined output to GitHub Pages

## Editing rules

- Do not treat the repo root as the source for `drobilica.com` itself.
- Change the homepage in `flight-deck-monorepo/drobilica-com-landing-page`, then let automation publish the artifact here.
- `sites/` is generated artifact space, not a manual editing area.
- Never treat `sites/` as hand-maintained content. Upstream source repos are the source of truth.
- It is acceptable for deployment workflows to replace the contents of `sites/` wholesale.
- If an app under `sites/` looks wrong, first check whether its source lives in `flight-deck-monorepo` or another repo.

## Structure

- `index.html`: deployed root homepage artifact
- `assets/`: deployed root homepage asset bundle
- `sites/`: deployed static app artifacts served under subpaths
- `.github/workflows/static.yml`: GitHub Pages deployment workflow

## Why this setup exists

GitHub Pages is easiest to manage from a single publishable repository. Keeping the published root site and the app artifacts together allows `drobilica.com` and all subpath apps to deploy as one site while still letting the real source code live in other repositories.
