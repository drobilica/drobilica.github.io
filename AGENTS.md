# Agent Notes

## What this repository is

This repository is both:

- the deployment target for the main public homepage at `drobilica.com`
- the deployment target for static app artifacts under `sites/`

Do not assume every file here is primary source code. The homepage and much of `sites/` are generated elsewhere.

## What should an agent avoid changing?

- Do not casually edit files inside `sites/`; it is generated artifact output copied from upstream repos.
- Do not rename or remove `sites/` subdirectories unless the user explicitly asks.
- Do not change GitHub Pages workflow behavior without understanding how artifact repos publish into this repo.
- Do not change `CNAME` unless the user explicitly asks.

## What stack and conventions are mandatory here?

- This repo is primarily artifact storage plus GitHub Pages deployment glue
- `sites/` contents may use different stacks because they are built elsewhere
- The root homepage artifact currently comes from `flight-deck-monorepo/drobilica-com-landing-page`

## What deployment/base-path assumptions exist?

- The root homepage is served from `/`
- Apps under `sites/` are served from subpaths like `/cv/` and `/cyphonfilter/`
- `.github/workflows/static.yml` packages the current published root files and overlays `sites/` into the final Pages artifact
- `sites/` is fully owned by automated deployment, so workflows may replace its contents wholesale

## Which files are the main entrypoints?

- `index.html`
- `assets/`
- `sites/`
- `.github/workflows/static.yml`

## What kinds of changes are acceptable without asking?

- Root docs updates
- Agent docs updates
- Small GitHub Pages workflow clarifications that do not change deployment intent
- Cleanup of obsolete local source-tooling files after the deploy model changes

## What areas are fragile, experimental, or intentionally messy?

- `sites/` is intentionally a mixed artifact area, not a clean source tree
- Root published files and subpath artifacts live in the same repository
- The main failure mode is forgetting that this repo is deploy output, not the source of truth
